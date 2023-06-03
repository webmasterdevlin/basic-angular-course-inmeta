import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '@superheroes/api-interfaces';

@Controller('/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getDataByQuery(@Query('title') title: string) {
    return this.todoService.getDataByQuery(title);
  }
  @Delete(':id')
  deleteData(@Param('id') id: string) {
    return this.todoService.deleteData(id);
  }

  @Post()
  addData(@Body() data: Todo) {
    return this.todoService.addData(data);
  }

  @Put(':id')
  updateData(@Param('id') id: string, @Body() data: Todo) {
    return this.todoService.updateData(id, data);
  }

  @Delete('/delete/completed')
  deleteCompleted() {
    return this.todoService.deleteCompleted();
  }
}
