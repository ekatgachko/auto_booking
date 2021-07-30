import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseFilters,
} from '@nestjs/common';
import { BookingDto } from './booking.dto';
import { BookingService } from './booking.service';
import {
  DatabaseExceptionFilter,
  WrongDatesExceptionFilter,
} from '../../common';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @UseFilters(new WrongDatesExceptionFilter(), new DatabaseExceptionFilter())
  async bookAuto(@Body() bookingDto: BookingDto, @Res() res) {
    await this.bookingService.bookAuto(bookingDto);
    res
      .status(HttpStatus.CREATED)
      .json('The auto has been successfully booked.');
  }
}
