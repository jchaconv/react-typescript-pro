
import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/search/geocode/v6/forward',
    params: {
        limit: 5,
        language: 'es',
        country: 'pe',
        access_token: 'pk.eyJ1IjoiamNoYWNvbnYiLCJhIjoiY205N3R4MjQ1MGFyYzJxcHRqZ3F2eTgyOSJ9.e7cGVLGcHW-RHIVusJXjVg'
    }
})

export default searchApi;
