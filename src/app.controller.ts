import { Controller, Get, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './guards/jwt-Guard.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req:any): string {
    console.log('getHello() controller', req.user);
    return this.appService.getHello();
  }
}
