import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButton from './components/TopButton';
import Input from './components/Input';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './Services/weatherService';
import {useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './pages/auth/Signin';
import Header from './components/Header';

function App() {

  const [query, setQuery] = useState({q: 'Berlin'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() =>{
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.'

      toast.info('fetching weather for ' + message)

      await getFormattedWeatherData({...query, units}).then((data) => {

      toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`)

        setWeather(data);
      });
      
    };
  
    fetchWeather();
  }, [query, units]);


  const formatBackground = () => {
    if (!weather) return 'from-cyan-700 to blue-700'
    const threshold = units === 'metric' ? 20 : 60
    if (weather.temp <= threshold) return 'from-cyan-700 to blue-700'

    return 'from-yellow-700 to-orange-700'
  }


  return (
  <div className={`mx-auto max-w-screen-md mt-4 py-2 px-5 md:py-5 md:px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
  shadow-gray-400 ${formatBackground()}`}>

      <Header />
      <TopButton setQuery={setQuery} />  
      <Input setQuery={setQuery} units={units} setUnits={setUnits}/>

      {weather && (
        <div>
          <TimeAndLocation weather ={weather}/> 
          <TemperatureAndDetails weather={weather}/>
          <Forcast title="hourly forecast" items={weather.hourly}/>
          <Forcast title="daily forecast" items={weather.daily}/>
        </div>
      )}

    <ToastContainer autoClose={2000} theme='colored' newestOnTop={true} />

    </div>

  );
}

export default App;
 