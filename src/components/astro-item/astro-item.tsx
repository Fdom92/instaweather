import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'astro-item',
  styleUrl: 'astro-item.scss'
})
export class AstroItem {

  @Prop() day: any;

  render() {
    return(
      <ion-col>
        <ion-row>
          { this.day.date }
        </ion-row>
        <ion-row>
        { this.day.day.mintemp_c }&deg;C / { this.day.day.maxtemp_c }&deg;C
        </ion-row>
      </ion-col>
    );
  }
}
