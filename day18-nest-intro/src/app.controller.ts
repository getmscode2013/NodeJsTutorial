import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header("Content-type",'test/html')
  getHello(): {name: string,phoneNumber: number, addresses: string} {
    return {name: "Satya", phoneNumber: 1234567890, addresses : "test1"};;
  }
}
