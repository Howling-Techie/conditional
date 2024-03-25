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
import {PiSignpost} from "react-icons/pi";
import {SlCompass} from "react-icons/sl";

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
                <div className="border border-white p-2">
                    This is the location
                    <div className="flex flex-row gap-x-2">
                        <div className="border border-white w-1/2 p-2">
                            <div className="flex flex-row justify-between text-3xl">
                                <div><MdLocationCity className="inline-flex text-2xl mr-2"/>New York City</div>
                            </div>
                            <div className="flex flex-row justify-between text-3xl">
                                <div><PiSignpost className="inline-flex text-2xl mr-2"/>New York</div>
                            </div>
                            <div className="flex flex-row justify-between text-3xl">
                                <div><IoEarthOutline className="inline-flex text-2xl mr-2"/>United States</div>
                                <div>USA</div>
                            </div>
                            <div className="flex flex-row justify-between text-3xl">
                                <div><SlCompass className="inline-flex text-2xl mr-2"/>N:40.75</div>
                                <div>E:73.98</div>
                            </div>
                        </div>
                        <div className="w-1/2 border border-white">
                            <img src="../src/assets/demo/600x600.png" alt="map of your current location"
                                 className="w-full object-cover h-96"/>
                        </div>
                    </div>
                </div>
                <div className="border border-white p-2 flex flex-col">
                    This is the weather
                    <div className="flex-col grow">
                        <div className="border border-white p-2 h-2/3 flex flex-col">
                            <p>Current weather</p>
                            <div className="flex flex-col grow justify-evenly px-2">
                                <div className="text-6xl flex flex-row justify-between">
                                    <div><IoSunnyOutline className="inline-flex text-5xl pr-2 mr-2"/>Sunny</div>
                                    <div>21°C</div>
                                </div>
                                <div className="text-6xl flex flex-row justify-between">
                                    <div><FiWind className="inline-flex text-5xl pr-2 mr-2"/>
                                        3 mph
                                    </div>
                                    <div><MdOutlineNorthWest className="inline-flex text-5xl pr-2 mr-2"/>NW</div>
                                </div>
                                <div className="text-6xl flex flex-row justify-between">
                                    <div><IoWaterOutline className="inline-flex text-5xl pr-2 mr-2"/>59%</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2 h-1/3 mt-2 pb-2">
                            <div className="border border-white p-2 text-center flex flex-col justify-evenly">
                                <div>Mon</div>
                                <IoSunnyOutline className="text-center w-full text-5xl"/>
                                <div>11°C-21°C</div>
                            </div>
                            <div className="border border-white p-2 text-center flex flex-col justify-evenly">
                                <div>Tue</div>
                                <IoPartlySunnyOutline className="text-center w-full text-5xl"/>
                                <div>11°C-21°C</div>
                            </div>
                            <div className="border border-white p-2 text-center flex flex-col justify-evenly">
                                <div>Wed</div>
                                <IoCloudyOutline className="text-center w-full text-5xl"/>
                                <div>13°C-17°C</div>
                            </div>
                            <div className="border border-white p-2 text-center flex flex-col justify-evenly">
                                <div>Thu</div>
                                <IoRainyOutline className="text-center w-full text-5xl"/>
                                <div>10°C-17°C</div>
                            </div>
                            <div className="border border-white p-2 text-center flex flex-col justify-evenly">
                                <div>Fri</div>
                                <IoSunnyOutline className="text-center w-full text-5xl"/>
                                <div>12°C-19°C</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}