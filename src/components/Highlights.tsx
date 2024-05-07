import axios from "axios";
import { useEffect, useState } from "react";
import { TiWaves } from "react-icons/ti";
import { FaWind } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { BsFillSunFill } from "react-icons/bs";

import { IoMdMoon } from "react-icons/io";
import { MainHighlights } from "./wearher.module";

interface HighlightData {
  sunrise: Date;
  sunset: Date;
  moonrise: Date;
  moonset: Date;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  weather: {
    description: string;
    main: string;
  }[];
}

export const Highlights = ({
  city,
  darkMode,
}: {
  city: string;
  darkMode: boolean;
}) => {
  const api_key = "98272461b258fd2e7a95ebb042f3f718";
  const __URL = "https://api.openweathermap.org/data/2.5/";

  const [highlightData, setHighlightData] = useState<HighlightData | null>(
    null
  );

  const fetchWeatherData = async (city: string) => {
    try {
      const url = `${__URL}weather?q=${city}&appid=${api_key}&units=metric`;
      const response = await axios.get(url);
      const weatherData = response.data;
      const { sunrise, sunset, moonrise, moonset } = weatherData.sys;
      const sunriseTime = new Date(sunrise * 1000);
      const sunsetTime = new Date(sunset * 1000);
      const moonriseTime = new Date(moonrise * 1000);
      const moonsetTime = new Date(moonset * 1000);

      setHighlightData({
        sunrise: sunriseTime,
        sunset: sunsetTime,
        moonrise: moonriseTime,
        moonset: moonsetTime,
        main: weatherData.main,
        wind: weatherData.wind,
        weather: weatherData.weather,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  if (!highlightData) return;

  return (
    <MainHighlights darkMode={darkMode}>
      <div className="highlights-content-main">
        <div className="highlights-content">
          <h2 className="title">Temperature</h2>
          <div className="highlights-temp">
            <div className="temp-section">
              <h1>{highlightData?.main.temp}</h1>
              <TbTemperatureCelsius className="icon" />
            </div>
            <div className="temp-section">
              <h1>{highlightData?.main.feels_like}</h1>
              <TbTemperatureCelsius className="icon" />
            </div>
          </div>
        </div>
        <div className="highlights-content">
          <h2 className="title">Sunrise & Sunset</h2>
          <div className="highlights-rise-set">
            <div className="highlights-content-section">
              <BsFillSunFill className="icon" />
              <div className="title-section">
                <h3>Sunrise</h3>
                {highlightData.sunrise.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>

            <div className="highlights-content-section">
              <IoMdMoon className="icon moon" />
              <div className="title-section">
                <h3>Sunset</h3>
                {highlightData.sunset.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="air-content">
        <h2 className="title">Air Quality</h2>
        <div className="air-content-section">
          <div className="air-section">
            <h3 className="title air-title">Air</h3>
            <div className="air-section-main">
              <FaWind className="icon" />
              <h1>{highlightData?.wind.speed}</h1>
            </div>
          </div>
          <div className="air-section">
            <h3 className="title air-title">Humidity</h3>
            <div className="air-section-main">
              <WiHumidity className="icon" />
              <h1>{highlightData?.main.humidity}%</h1>
            </div>
          </div>
          <div className="air-section">
            <h3 className="title air-title">Pressure</h3>
            <div className="air-section-main">
              <TiWaves className="icon" />
              <h1>{highlightData?.main.pressure}hPa</h1>
            </div>
          </div>
        </div>
      </div>
    </MainHighlights>
  );
};
