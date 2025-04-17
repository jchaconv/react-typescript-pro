import { BtnMyLocation, SearchBar } from "../components"
import { MapView } from "../components/MapView"


export const HomeScreen = () => {
    return (
        <div>
            <MapView/>
            <BtnMyLocation/>
            <SearchBar />
        </div>
    )
}
