export interface WeatherDataProps {
    name: string;
    main: { temp: number; humidity: number };
    sys: {
        country: string;
    };
    weather: {
        main: string;
    }[];
    wind: {
        speed: number;
    };
}

export interface WeatherForecastProps {
    city: string;
    darkMode: boolean;
  }