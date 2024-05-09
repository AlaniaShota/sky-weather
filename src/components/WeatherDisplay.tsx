import { WiHumidity } from "react-icons/wi";
import { MainWrapper } from "./wearher.module";
import { AiOutlineSearch } from "react-icons/ai";
import { FaWind } from "react-icons/fa";
import { IconChanger } from "./IconChanger";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WeatherDataProps } from "../types";

interface WeatherDisplayProps {
  weatherData: WeatherDataProps | null;
  isLoading: boolean;
  darkMode: boolean;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

export const WeatherDisplay = ({
  weatherData,
  search,
  setSearch,
  handleSearch,
  darkMode,
}: WeatherDisplayProps) => {
  const name = weatherData?.name;
  const country = weatherData?.sys.country;
  const mainWeather = weatherData?.weather[0].main;
  const temp = weatherData?.main.temp.toFixed(0);
  const humidity = weatherData?.main.humidity;
  const windSpeed = weatherData?.wind.speed;

  return (
    <MainWrapper darkMode={darkMode}>
      <div className="container">
        <div className="search-area">
          <input
            className="input-text"
            type="text"
            placeholder="Search city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            className="search-circle"
          >
            <AiOutlineSearch
              className="search-icon"
              onClick={handleSearch}
            />
          </div>
        </div>
        <div className="weather-area">
          <h1>{name}</h1>
          <span>{country}</span>
          {mainWeather && (
            <div className="icon">{IconChanger(mainWeather)}</div>
          )}
          <h1>
            {temp}
            <TbTemperatureCelsius />
          </h1>
          <h2>{mainWeather}</h2>
        </div>
        <div className="bottom-info-area">
          <div className="humidity-level">
            <WiHumidity className="wind-icon" />
            <div className="humid-info">
              <h1 className="humid-title">{humidity}%</h1>
            </div>
          </div>
          <div className="wind">
            <FaWind className="wind-icon" />
            <div className="humid-info">
              <h1 className="humid-title">{windSpeed}km/h</h1>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
