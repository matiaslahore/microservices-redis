import { Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private mathService: MathService) {}

  // Define the message pattern for this method
  @MessagePattern('add')
  async accumulate(data: number[])  {
    this.logger.log('Microservice is adding: ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
