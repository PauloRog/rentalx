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
}

export { DayjsDateProvider };
