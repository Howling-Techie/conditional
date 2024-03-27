import FlipNumbers from 'react-flip-numbers';
import {useEffect, useState} from "react";
import {FiWind} from "react-icons/fi";
import {MdLocationCity, MdOutlineNorthWest} from "react-icons/md";
import {
    IoCloudyOutline,
    IoEarthOutline,
    IoPartlySunnyOutline,
    IoRainyOutline,
    IoSunnyOutline,
    IoWaterOutline
} from "react-icons/io5";
import {PiAirplane, PiSignpost} from "react-icons/pi";
import {SlCompass} from "react-icons/sl";
import {Location} from "./components/Location.tsx";
import {Weather} from "./components/Weather.tsx";
import Orbits from "./components/Orbits.tsx";

export default function App() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on unmount or component re-render
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full min-h-screen bg-indigo-950 text-white p-8">
            <h1 className="text-3xl">
                Welcome to <span className="font-extrabold">Conditional</span>
            </h1>
            <div className="w-full grid grid-cols-2 gap-2 text-xl">
                <div className="border border-white p-2">
                    This is the time
                    <div className="flex flex-row text-6xl justify-center">
                        <FlipNumbers play numbers={time.toLocaleTimeString().split(":")[0]} color="white" height={50}
                                     width={30}/><span className="font-extrabold">:</span>
                        <FlipNumbers play numbers={time.toLocaleTimeString().split(":")[1]} color="white" height={50}
                                     width={30}/><span className="font-extrabold">:</span>
                        <FlipNumbers play numbers={time.toLocaleTimeString().split(":")[2]} color="white" height={50}
                                     width={30}/>
                    </div>
                </div>
                <div className="border border-white p-2">
                    This is the date
                    <div className="flex flex-row text-6xl justify-center">
                        <FlipNumbers play numbers={time.toLocaleDateString().split("/")[0]} color="white" height={50}
                                     width={30}/>/
                        <FlipNumbers play numbers={time.toLocaleDateString().split("/")[1]} color="white" height={50}
                                     width={30}/>/
                        <FlipNumbers play numbers={time.toLocaleDateString().split("/")[2]} color="white" height={50}
                                     width={30}/>
                    </div>
                </div>
                <Location locationData={{
                    address: {
                        city: "New York City",
                        region: "New York",
                        country: "United States of America",
                        country_code: "USA"
                    },
                    coordinates: {lat: 40.4658, long: -73.9765},
                    map_url: "../../src/assets/demo/600x600.png"
                }}/>
                <Weather weatherData={{
                    current: {
                        main: "Rain",
                        description: "moderate rain",
                        temp: 25.3,
                        humidity: 64,
                        wind: {speed: 0.62, deg: 349}
                    },
                    forecast: [
                        {day: "Mon", tempMin: 13, tempMax: 24, main: "Rain"},
                        {day: "Tue", tempMin: 14, tempMax: 22, main: "Rain"},
                        {day: "Wed", tempMin: 13, tempMax: 25, main: "Clouds"},
                        {day: "Thu", tempMin: 12, tempMax: 24, main: "Clear"},
                        {day: "Fri", tempMin: 16, tempMax: 27, main: "Sunny"},
                    ]
                }}/>
                <Orbits/>
            </div>
        </div>
    )
}