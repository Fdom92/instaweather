import { Component, Prop } from '@stencil/core';
import * as dateFns from 'date-fns';

@Component({
  tag: 'forecast-item',
  styleUrl: 'forecast-item.scss'
})
export class ForecastItem {

  @Prop() day: any;

  getDay(date) {
    if (dateFns.isToday(date)) {
      return 'Today';
    } else if (dateFns.isTomorrow(date)) {
      return 'Tomorrow';
    } else if (dateFns.isMonday(date)) {
      return 'Monday';
    } else if (dateFns.isTuesday(date)) {
      return 'Tuesday';
    } else if (dateFns.isWednesday(date)) {
      return 'Wednesday';
    } else if (dateFns.isThursday(date)) {
      return 'Thursday';
    } else if (dateFns.isFriday(date)) {
      return 'Friday';
    } else if (dateFns.isSaturday(date)) {
      return 'Saturday';
    } else if (dateFns.isSunday(date)) {
      return 'Sunday';
    }
  }

  render() {
    return(
      <ion-col>
        <ion-row>
          { this.getDay(this.day.date) }
        </ion-row>
        <ion-row>
        { this.day.day.mintemp_c }&deg;C / { this.day.day.maxtemp_c }&deg;C
        </ion-row>
      </ion-col>
    );
  }
}
