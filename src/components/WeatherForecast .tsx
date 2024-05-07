import { useEffect, useState } from "react";
import axios from "axios";
import { MainForecast } from "./wearher.module";
import { IconChanger } from "./IconChanger";
import { TbTemperatureCelsius } from "react-icons/tb";
interface WeatherForecastProps {
  city: string;
}

interface ForecastDataProps {
  list: {
    dt_txt: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      main: string;
    }[];
  }[];
}

export const WeatherForecast: React.FC<WeatherForecastProps> = ({
  city,
  darkMode,
}: {
  darkMode: boolean;
  city: [];
}) => {
  const [forecastData, setForecastData] = useState<ForecastDataProps | null>(
    null
  );

  const api_key = "98272461b258fd2e7a95ebb042f3f718";
  const __URL = "https://api.openweathermap.org/data/2.5/";

  const fetchWeatherForecast = async (city: string) => {
    try {
      const url = `${__URL}forecast?q=${city}&appid=${api_key}&units=metric`;
      const forecastResponse = await axios.get(url);
      const forecastData: ForecastDataProps = forecastResponse.data;
      return { forecastData };
    } catch (error) {
      console.log("Data not found");
      throw error;
    }
  };

  useEffect(() => {
    const getForecast = async () => {
      try {
        const { forecastData } = await fetchWeatherForecast(city);
        setForecastData(forecastData);
      } catch (error) {
        console.log("Data not found");
      }
    };

    getForecast();
  }, [city]);

  if (!forecastData) return;

  const dailyForecast = forecastData.list.filter((forecast) =>
    forecast.dt_txt.includes("06:00")
  );

  return (
    <MainForecast darkMode={darkMode}>
      <ul
        className={
          darkMode ? "dark-mode forecast-container" : "forecast-container"
        }
      >
        {dailyForecast.map((forecast, index) => (
          <li
            key={index}
            className={darkMode ? "dark-mode forecast-list" : "forecast-list"}
          >
            <p>
              {new Date(forecast.dt_txt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}
            </p>
            <div className="icon">{IconChanger(forecast.weather[0].main)}</div>
            <p>
              {forecast.main.temp}
              <TbTemperatureCelsius />
            </p>
          </li>
        ))}
      </ul>
    </MainForecast>
  );
};
