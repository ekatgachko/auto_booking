import { Injectable } from '@nestjs/common';
import { BookingRepository } from './booking.repository';
import { BookingDto } from './booking.dto';
import { DateConstant, IBooking, WrongDatesException } from '../../common';
import { AvailableToBookService } from './service/availableToBook.service';

@Injectable()
export class BookingService {
  constructor(
    private readonly bookingRepository: BookingRepository,
    private availableToBookService: AvailableToBookService,
  ) {}

  public async bookAuto(bookingDto: BookingDto): Promise<void> {
    const start = new Date(bookingDto.startDate);
    const lastBooking = await this.bookingRepository.getLastBookingByAutoId(
      bookingDto.autoId,
    );
    if (this.availableToBookService.isAutoAvailableToBook(start, lastBooking)) {
      await this.bookingRepository.bookAuto({
        autoId: bookingDto.autoId,
        startDate: bookingDto.startDate,
        endDate: bookingDto.endDate,
      });
      return;
    }
    throw new WrongDatesException();
  }
}
