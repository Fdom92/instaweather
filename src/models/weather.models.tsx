export namespace Weather {
  export interface CurrentObject {
    cloud: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
    feelslike_c: string;
    feelslike_f: string;
    humidity: number;
    is_day: number;
    last_updated: number;
    last_updated_epoch: string;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  }

  export interface LocationObject {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  }

  export interface ForecastObject {
    forecastday: ForecastDay[];
  }

  export interface ForecastDay {
    astro: {
      moonrise: string;
      moonset: string;
      sunrise: string;
      sunset: string;
    },
    date;
    date_epoch;
    day: {
      avghumidity: number;
      avgtemp_c: number;
      avgtemp_f: number;
      avgvis_km: number;
      avgvis_miles: number;
      condition: {
        code: number;
        icon: string;
        text: string;
      };
      maxtemp_c: number;
      maxtemp_f: number;
      maxwind_kph: number;
      maxwind_mph: number;
      mintemp_c: number;
      mintemp_f: number;
      totalprecip_in: number;
      totalprecip_mm: number;
      uv: number;
    }
  }
};
