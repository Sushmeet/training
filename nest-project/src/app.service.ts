import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const obj = {
      name: 'Sushi',
    };
    return obj;
  }
}
