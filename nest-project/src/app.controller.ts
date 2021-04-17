import { Controller, Get, HttpCode, Req, Param } from '@nestjs/common';
import { Request } from 'express';

import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  @HttpCode(200) // default code is 200 and for post is 201. But this allows u to specify ur code.
  getHello(@Req() request: Request): string {
    console.log('give us the express request object', request);
    return this.appService.getHello();
  }

  @Get('error')
  @HttpCode(200)
  getError() {
    throw new Error('An error has occured');
  }

  // Accepting dynamic data as part of the request (e.g., GET /cats/1 to get cat with id 1
  @Get('catId/:id')
  getSingleCat(@Param() params) {
    const { id } = params;
    return { id };
  }

  // Accepting dynamic data as part of the request (e.g., GET /cats/1 to get cat with id 1
  @Get('catIdAgain/:id')
  getSingleCatVersion2(@Param('id') id) {
    return { id };
  }

  // Sub Domain Routing example https://docs.nestjs.com/controllers#sub-domain-routing
}
