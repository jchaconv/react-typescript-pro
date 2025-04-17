import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context"
import { LoadingPlaces } from "./";
import { Feature } from "../interfaces/places";


export const SearchResults = () => {

    const { isLoadingPlaces, places, userLocation } = useContext(PlacesContext);

    const { map, getRouteBetweenPoints } = useContext(MapContext);

    const [activeId, setActiveId] = useState('');

    const onPlaceClicked = (place: Feature) => {

        const { latitude, longitude } = place.properties.coordinates;
        setActiveId(place.id);
        map?.flyTo({
            zoom: 14,
            center: [longitude, latitude]
        })
    }

    const getRoute = (place: Feature) => {

        if(!userLocation) return;
        const { latitude, longitude } = place.properties.coordinates;
        getRouteBetweenPoints(userLocation, [longitude, latitude]);
    }

    if(isLoadingPlaces) {
        return <LoadingPlaces />
    }

    if(places.length === 0) return <></>;

    return (
        <ul className="list-group mt-3">

            {
                places.map(place => (
                    <li
                        key={place.id}
                        className={`list-group-item list-group-item-action pointer ${(activeId === place.id) ? 'active' : ''}`}
                        onClick={() => onPlaceClicked(place)}
                    >
                        <h6>{place.properties.name_preferred}</h6>
                        <p
                            className="text-muted"
                            style={{
                                fontSize: '12px'
                            }}
                        >
                            {place.properties.full_address}
                        </p>

                        <button
                            className={`btn btn-sm ${activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}
                            onClick={() => getRoute(place)}
                        >
                            Direcciones
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}
