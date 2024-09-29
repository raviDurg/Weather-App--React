import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b3d3cf23bc45e46eb2b95daba72cd800";

    let getWeatherInfo = async () => {
try{
    let responce = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponce = await responce.json();
    console.log(jsonResponce);
    let result = {
        city: city,
        temp: jsonResponce.main.temp,
        tempMin: jsonResponce.main.temp_min,
        tempMax: jsonResponce.main.temp_max,
        humidity: jsonResponce.main.humidity,
        feelsLike: jsonResponce.main.feels_like,
        weather: jsonResponce.weather[0].description,
    };
    console.log(result);
    return result;
}catch (err){
throw err;
}
        
    };


    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        }
       

    return (
        <div className='SearchBox' >

            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="city name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>

{error && <p style={{color:"red"}} >Soory No such Place Exist Right Now! </p> }

            </form>


        </div>

    );
}