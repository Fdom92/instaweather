import { Component, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'weather-details',
  styleUrl: 'weather-details.scss'
})
export class WeatherDetails {

  @Prop() current: any;
  @Prop() location: any;
  @Prop() forecast: any;

  @State() isFahrenheits = false;

  @Listen('ionChange')
  todoCompletedHandler(event: CustomEvent) {
    this.isFahrenheits = event.detail.checked;
  }

  render() {
    return [
      <ion-grid class="main-info">
        <ion-row margin-top>
            <ion-col class="main-info_temperature-col">
                <div class="main-info_temperature-col_temperature">
                  {
                    this.current ?
                    (this.isFahrenheits ?
                      this.current.temp_f :
                      this.current.temp_c) :
                    '?'
                  }
                </div>
            </ion-col>
            <ion-col class="main-info_icon-col">
                <div class="main-info_icon-col_degree">
                  {
                    this.isFahrenheits ?
                    <p>&deg;F</p> :
                    <p>&deg;C</p>
                  }
                </div>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
              {
                this.current ?
                <p>Condition: {this.current.condition.text}</p> :
                <ion-skeleton-text text-center width="100px"></ion-skeleton-text>
              }
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
              {
                this.current ?
                (this.isFahrenheits ?
                (<p>Real Feel: {this.current.feelslike_f} &deg;F</p>) :
                (<p>Real Feel: {this.current.feelslike_c} &deg;C</p>)) :
                <ion-skeleton-text text-center width="100px"></ion-skeleton-text>
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
                  this.current.humidity + '%' :
                  <ion-skeleton-text text-center width="100px"></ion-skeleton-text>
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
                  this.current.wind_mph + 'm/h' :
                  <ion-skeleton-text text-center width="100px"></ion-skeleton-text>
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
                  this.current.cloud + '%' :
                  <ion-skeleton-text text-center width="100px"></ion-skeleton-text>
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
                  <forecast-item isFahrenheits={this.isFahrenheits} day={day}></forecast-item>
              )
            }) :
            <ion-skeleton-text text-center width="100px"></ion-skeleton-text>
          }
        </ion-row>
    </ion-grid>,
    <ion-grid class="toogle-info">
      <ion-row>
        <ion-col>
          {
            this.forecast ?
            (<ion-item>
              <ion-label>Want Fahrenheits?</ion-label>
              <ion-toggle value="isFahrenheits"></ion-toggle>
            </ion-item>) :
            ''
          }
        </ion-col>
      </ion-row>
    </ion-grid>
    ];
  }
}
