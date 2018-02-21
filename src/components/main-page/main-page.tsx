import { Component, State } from '@stencil/core';
import { Weather } from '../../models/weather.models';

@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  @State() current: Weather.CurrentObject;
  @State() location: Weather.LocationObject;
  @State() forecast;

  componentWillLoad() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.fetchForecast(`${position.coords.latitude},${position.coords.longitude}`);
      });
    } else {
      /* geolocation IS NOT available */
      console.log('geolocation IS NOT available');
    }
  }

  fetchForecast(coords) {
    fetch(`https://api.apixu.com/v1/forecast.json?key=5a97ccf00b204e33a88170411172705&q=${coords}&days=7`)
    .then(response => response.json())
    .then(data => {
      this.current = data.current as Weather.CurrentObject;
      this.location = data.location as Weather.LocationObject;
      this.forecast = data.forecast as Weather.ForecastObject;
    })
    .catch(console.error);
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-content class={this.current ? this.current.condition.text.toLowerCase() : ''}>
          {
            this.location ?
            (<h2 text-center> {this.location.name}, {this.location.country} </h2>) :
            (<ion-skeleton-text text-center class="main-page-title" width="100px"></ion-skeleton-text>)
          }
          <weather-details forecast={this.forecast} current={this.current} location={this.location}></weather-details>
        </ion-content>
      </ion-page>
    );
  }
}
