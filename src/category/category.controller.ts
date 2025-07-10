import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ParseIdArrayPipe } from 'src/common/pipes/parse-id-array.pipe';

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
        @Param('id', ParseIntPipe) id: number
    ): Promise<Category> {
        const category = await this.categoryService.findOne(id);
        
        if (category == null) {
            throw new NotFoundException('No category exists with that ID.')
        }

        return category;
    }

    @Post()
    @HttpCode(204)
    async createCategory(createCategoryDto: CreateCategoryDto) {
        await this.categoryService.createOne(createCategoryDto)

    }

    @Delete()
    async deleteCategory(@Query('ids', ParseIdArrayPipe) ids: number[]) {
        return await this.categoryService.deleteOne(ids);
    }
}
