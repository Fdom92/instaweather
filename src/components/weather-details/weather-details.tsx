import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'weather-details',
  styleUrl: 'weather-details.scss'
})
export class WeatherDetails {

  @Prop() current: any;
  @Prop() location: any;
  @Prop() forecast: any;

  render() {
    return [
      <ion-grid class="main-info">
        <ion-row margin-top>
            <ion-col class="main-info_temperature-col">
                <div class="main-info_temperature-col_temperature">
                  {
                    this.current ?
                    this.current.temp_c :
                    '?'
                  }
                </div>
            </ion-col>
            <ion-col class="main-info_icon-col">
                <div class="main-info_icon-col_degree">
                  &deg;C
                </div>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
              {
                this.current ?
                (<p>Condition: {this.current.condition.text}</p>) :
                (<ion-skeleton-text text-center width="100px"></ion-skeleton-text>)
              }
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
              {
                this.current ?
                (<p>Real Feel: {this.current.feelslike_c} &deg;C</p>) :
                (<ion-skeleton-text text-center width="100px"></ion-skeleton-text>)
              }
            </ion-col>
        </ion-row>
      </ion-grid>,
      <ion-grid margin-top class="more-info">
        <ion-row>
            <ion-col col-4>
              <ion-row>
                {
                  this.current ?
                  'Humidity' :
                  ''
                }
              </ion-row>
              <ion-row>
                {
                  this.current ?
                  (this.current.humidity + '%' ) :
                  (<ion-skeleton-text text-center width="100px"></ion-skeleton-text>)
                }
              </ion-row>
            </ion-col>
            <ion-col col-4>
              <ion-row>
                {
                  this.current ?
                  'Wind' :
                  ''
                }
              </ion-row>
              <ion-row>
                {
                  this.current ?
                  (this.current.wind_mph + 'm/h' ) :
                  (<ion-skeleton-text text-center width="100px"></ion-skeleton-text>)
                }
              </ion-row>
            </ion-col>
            <ion-col col-4>
              <ion-row>
                {
                  this.current ?
                  'Cloud cover' :
                  ''
                }
              </ion-row>
              <ion-row>
                {
                  this.current ?
                  (this.current.cloud + '%' ) :
                  (<ion-skeleton-text text-center width="100px"></ion-skeleton-text>)
                }
              </ion-row>
            </ion-col>
        </ion-row>
      </ion-grid>,
    <ion-grid margin-top class="forecast-info">
        <ion-row class="scrollable-row">
          {
            this.forecast ? this.forecast.forecastday.map(day => {
              return (
                  <forecast-item day={day}></forecast-item>
              )
            }) :
            <ion-skeleton-text text-center width="100px"></ion-skeleton-text>
          }
        </ion-row>
    </ion-grid>
    ];
  }
}
