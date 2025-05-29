import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) 
        private categoryRepository:Repository<Category>
    ) {}

    createOne(large_category: string, small_category?:string):Promise<Category> {
        const newCategory = this.categoryRepository.create({
            large_category, 
            small_category
        });
        
        return this.categoryRepository.save(newCategory)
    }

    findOne(id:number):Promise<Category | null> {
        return this.categoryRepository.findOne({
            where: {id}
        })
    }

    findMany(large_category?:string): Promise<Category[]> {
        return this.categoryRepository.find({
            where: {
                large_category
            }
        })
    }

    deleteOne(id:number) {
        return this.categoryRepository.delete({
            id
        })
    }
    
}
