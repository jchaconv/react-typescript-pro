
import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'full',
        steps: false,
        access_token: 'pk.eyJ1IjoiamNoYWNvbnYiLCJhIjoiY205N3R4MjQ1MGFyYzJxcHRqZ3F2eTgyOSJ9.e7cGVLGcHW-RHIVusJXjVg'
    }
})

export default directionsApi;

