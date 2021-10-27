import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { IDateProvider } from '../IDateProvider';

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number {
    const start_date_utc = this.convertToUTC(start_date);
    const end_date_utc = this.convertToUTC(end_date);
    const hours = dayjs(end_date_utc).diff(start_date_utc, 'hours');

    return hours;
  }

  convertToUTC(date: Date): string {
    const dateString = dayjs(date).utc().local().format();

    return dateString;
  }

  dateNow(): Date {
    const date = dayjs().toDate();

    return date;
  }

  compareInDays(start_date: Date, end_date: Date): number {
    const start_date_utc = this.convertToUTC(start_date);
    const end_date_utc = this.convertToUTC(end_date);
    const hours = dayjs(end_date_utc).diff(start_date_utc, 'days');

    return hours;
  }

  addDays(days: number): Date {
    const date = dayjs().add(days, 'days').toDate();

    return date;
  }

  addHours(hours: number): Date {
    const date = dayjs().add(hours, 'hour').toDate();

    return date;
  }

  isBefore(start_date: Date, end_date: Date): boolean {
    const isBefore = dayjs(start_date).isBefore(end_date);

    return isBefore;
  }
}

export { DayjsDateProvider };
