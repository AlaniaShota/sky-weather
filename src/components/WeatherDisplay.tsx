import { WiHumidity } from "react-icons/wi";
import { MainWrapper } from "./wearher.module";
import { AiOutlineSearch } from "react-icons/ai";
import { FaWind } from "react-icons/fa";
import { IconChanger } from "./IconChanger";
import { TbTemperatureCelsius } from "react-icons/tb";

export const WeatherDisplay = ({
  weatherData,
  search,
  setSearch,
  handleSearch,
  darkMode,
}: {
  weatherData: WeatherDataProps | null;
  isLoading: boolean;
  darkMode: boolean;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}) => {
  return (
    <MainWrapper darkMode={darkMode}>
      <div className={darkMode ? "dark-mode container" : "container"}>
        <div className="search-area">
          <input
            className={darkMode ? "dark-mode input-text" : "input-text"}
            type="text"
            placeholder="Search city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            className={darkMode ? "dark-mode search-circle" : "search-circle"}
          >
            <AiOutlineSearch
              className={darkMode ? "dark-mode search-icon" : "search-icon"}
              onClick={handleSearch}
            />
          </div>
        </div>
        <div className="weather-area">
          <h1>{weatherData.name}</h1>
          <span>{weatherData.sys.country}</span>
          <div className="icon">{IconChanger(weatherData.weather[0].main)}</div>
          <h1>
            {weatherData.main.temp.toFixed(0)}
            <TbTemperatureCelsius />
          </h1>
          <h2>{weatherData.weather[0].main}</h2>
        </div>
        <div className="bottom-info-area">
          <div className="humidity-level">
            <WiHumidity className="wind-icon" />
            <div className="humid-info">
              <h1>{weatherData.main.humidity}%</h1>
            </div>
          </div>
          <div className="wind">
            <FaWind className="wind-icon" />
            <div className="humid-info">
              <h1>{weatherData.wind.speed}km/h</h1>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};
