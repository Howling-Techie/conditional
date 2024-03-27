import {MdLocationCity} from "react-icons/md";
import {PiAirplane, PiSignpost} from "react-icons/pi";
import {IoEarthOutline} from "react-icons/io5";
import {SlCompass} from "react-icons/sl";

interface Address {
    city: string;
    region: string;
    country: string;
    country_code: string;
}

interface Coordinates {
    lat: number;
    long: number;
}

interface LocationData {
    address: Address;
    coordinates: Coordinates;
    map_url: string;
}

export const Location = ({locationData}: { locationData: LocationData }) => {
    const {address, coordinates, map_url} = locationData;
    return (
        <div className="border border-white p-2">
            This is the location
            <div className="flex flex-row gap-x-2">
                <div className="border border-white w-1/2 p-2">
                    <div className="flex flex-row justify-between text-3xl">
                        <div><MdLocationCity className="inline-flex text-2xl mr-2"/>{address.city}</div>
                    </div>
                    <div className="flex flex-row justify-between text-3xl">
                        <div><PiSignpost className="inline-flex text-2xl mr-2"/>{address.region}</div>
                    </div>
                    <div className="flex flex-row justify-between text-3xl">
                        <div><IoEarthOutline className="inline-flex text-2xl mr-2"/>{address.country}</div>
                        <div>{address.country_code}</div>
                    </div>
                    <div className="flex flex-row justify-between text-3xl">
                        <div><SlCompass
                            className="inline-flex text-2xl mr-2"/>{coordinates.lat >= 0 ? "N" : "S"}:{Math.abs(coordinates.lat)}
                        </div>
                        <div>{coordinates.long >= 0 ? "E" : "W"}:{Math.abs(coordinates.long)}</div>
                    </div>
                </div>
                <div className="w-1/2 border border-white">
                    <img src={map_url} alt="map of your current location"
                         className="w-full object-cover h-96"/>
                    <div className="relative">
                        <div className="absolute h-96 left-[50%] top-[50%] bottom-[50%]">
                            <PiAirplane/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};