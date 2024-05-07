import { useEffect, useState } from "react";
import "./App.css";
import { WeatherDisplay } from "./components/WeatherDisplay";
import axios from "axios";
import { WeatherForecast } from "./components/WeatherForecast ";
import { RiLoaderFill } from "react-icons/ri";
import { DarkMode } from "./components/DarkMode";
import { Highlights } from "./components/Highlights";

interface WeatherDataProps {
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

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const api_key = "98272461b258fd2e7a95ebb042f3f718";
  const __URL = "https://api.openweathermap.org/data/2.5/";

  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${__URL}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      Promise.all([fetchCurrentWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          setWeatherData(currentWeather);
          // setIsLoading(true);
        }
      );
    });
  }, []);

  const fetchWeatherData = async (city: string) => {
    try {
      const url = `${__URL}weather?q=${city}&appid=${api_key}&units=metric`;
      const searchResponse = await axios.get(url);
      const currentWeatherData: WeatherDataProps = searchResponse.data;
      return { currentWeatherData };
    } catch (error) {
      console.log("Data not found");
      throw error;
    }
  };

  const handleSearch = async () => {
    if (search.trim() === "") return;
    setIsLoading(true);
    try {
      const { currentWeatherData } = await fetchWeatherData(search);
      setWeatherData(currentWeatherData);
    } catch (error) {
      console.log("Data not found");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode " : "light-mode "}>
      <div className="dark-mode-section">
        <DarkMode darkMode={darkMode} toggle={toggleDarkMode} />
      </div>
      <div
        className={
          darkMode ? "dark-mode sky-weather" : "light-mode sky-weather"
        }
      >
        {weatherData !== null && !isLoading ? (
          <div className="sky-weather-container">
            <WeatherDisplay
              weatherData={weatherData}
              search={search}
              setSearch={setSearch}
              handleSearch={handleSearch}
              darkMode={darkMode}
              isLoading={isLoading}
            />
            {weatherData && (
              <div className="main-content">
                <Highlights city={weatherData.name} darkMode={darkMode} />
                <WeatherForecast city={weatherData.name} darkMode={darkMode} />
              </div>
            )}
          </div>
        ) : (
          <div className="loading">
            <RiLoaderFill className="loading-icon" />
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
