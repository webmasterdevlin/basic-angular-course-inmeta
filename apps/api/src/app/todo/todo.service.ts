import { Injectable } from '@nestjs/common';
import { db } from '../../../db.server';

@Injectable()
export class TodoService {
  getData() {
    return db.todo.findMany();
  }

  getDataByQuery(query) {
    return db.todo.findMany({
      where: {
        title: {
          contains: query,
        },
      },
    });
  }

  deleteData(id) {
    return db.todo.delete({
      where: {
        id,
      },
    });
  }

  addData(data) {
    return db.todo.create({
      data,
    });
  }

  updateData(id, data) {
    return db.todo.update({
      where: {
        id,
      },
      data,
    });
  }

  deleteCompleted() {
    return db.todo.deleteMany({
      where: {
        isDone: true,
      },
    });
  }
}
