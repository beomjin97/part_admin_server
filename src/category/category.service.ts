import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) 
        private categoryRepository:Repository<Category>
    ) {}

    createOne(createCategoryDto: CreateCategoryDto):Promise<Category> {
        const newCategory = this.categoryRepository.create(createCategoryDto);
        
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

    deleteOne(id:number | number[]): Promise<DeleteResult> {
        return this.categoryRepository.delete(id)
    }
    
}
