import {
    IoCloudyOutline,
    IoPartlySunnyOutline,
    IoRainyOutline, IoSnowOutline,
    IoSunnyOutline,
    IoThunderstormOutline,
    IoWaterOutline
} from "react-icons/io5";
import {FiWind} from "react-icons/fi";
import {
    MdOutlineEast,
    MdOutlineNorth,
    MdOutlineNorthEast,
    MdOutlineNorthWest,
    MdOutlineSouth, MdOutlineSouthEast,
    MdOutlineSouthWest,
    MdOutlineWest
} from "react-icons/md";
import {RiMistLine} from "react-icons/ri";

const directions = [
    [MdOutlineNorth, "N"],
    [MdOutlineNorthEast, "NE"],
    [MdOutlineEast, "E"],
    [MdOutlineSouthEast, "SE"],
    [MdOutlineSouth, "S"],
    [MdOutlineSouthWest, "SW"],
    [MdOutlineWest, "W"],
    [MdOutlineNorthWest, "NW"]];

const weatherIcons = {
    "Sunny": IoSunnyOutline,
    "Drizzle": IoRainyOutline,
    "Rain": IoRainyOutline,
    "Thunderstorm": IoThunderstormOutline,
    "Snow": IoSnowOutline,
    "Atmosphere": RiMistLine,
    "Clear": IoSunnyOutline,
    "Clouds": IoCloudyOutline
}

interface WeatherData {
    current: {
        wind: { speed: number, deg: number },
        main: string,
        description: string,
        temp: number,
        humidity: number
    };
    forecast: { day: string, tempMin: number, tempMax: number, main: string }[];
}

export const Weather = ({weatherData}: { weatherData: WeatherData }) => {
    const {current, forecast} = weatherData;
    const direction = directions[Math.round(current.wind.deg / 45) % 8];
    const DirectionIcon = direction[0];
    console.log(DirectionIcon)
    const CurrentWeatherIcon = weatherIcons[current.main] ?? weatherIcons.Clear;

    return (
        <div className="border border-white p-2 flex flex-col">
            This is the weather
            <div className="flex-col grow">
                <div className="border border-white p-2 h-2/3 flex flex-col">
                    <p>Current weather</p>
                    <div className="flex flex-col grow justify-evenly px-2">
                        <div className="text-6xl flex flex-row justify-between">
                            <div>
                                <CurrentWeatherIcon
                                    className="inline-flex text-5xl pr-2 mr-2 capitalize"/>
                                {current.description}</div>
                            <div>{current.temp}°C</div>
                        </div>
                        <div className="text-6xl flex flex-row justify-between">
                            <div><FiWind className="inline-flex text-5xl pr-2 mr-2"/>
                                {current.wind.speed} mph
                            </div>
                            <div>
                                <DirectionIcon className="inline-flex text-5xl pr-2 mr-2"/>
                                {direction[1]}</div>
                        </div>
                        <div className="text-6xl flex flex-row justify-between">
                            <div><IoWaterOutline className="inline-flex text-5xl pr-2 mr-2"/>{current.humidity}%</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-2 h-1/3 mt-2 pb-2">
                    {forecast.map(f => {
                        const WeatherIcon = weatherIcons[f.main];
                        return (<div className="border border-white p-2 text-center flex flex-col justify-evenly">
                            <div>{f.day}</div>
                            <WeatherIcon className="text-center w-full text-5xl"/>
                            <div>{f.tempMin}°C-{f.tempMax}°C</div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
};