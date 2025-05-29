import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    async getCategoryList(
        @Query('large_category') large_category: string
    ): Promise<Category[]> {
        return await this.categoryService.findMany(large_category);
    }

    @Get(':id')
    async getCategory(
        @Param('id') id: number
    ): Promise<Category> {
        const category = await this.categoryService.findOne(id);
        
        if (category == null) {
            throw new NotFoundException('No category exists with that ID.')
        }

        return category;
    }

    @Post()
    async createCategory(@Body() body: {
        large_category: string, 
        small_category: string 
    }) {
        return await this.categoryService.createOne(
            body.large_category, 
            body.small_category
    )}

    @Delete(':id')
    @HttpCode(204)
    async deleteCategory(@Param('id') id: number):Promise<void> {
        const category = await this.categoryService.findOne(id);
        
        if (category == null) {
            throw new NotFoundException('No category exists with that ID.')
        }

        await this.categoryService.deleteOne(id);
    }
}
