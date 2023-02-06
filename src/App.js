import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButton from './components/TopButton';
import Input from './components/Input';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './Services/weatherService';

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "Accra"});
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
    shadow-gray-400">
      <TopButton/>  
      <Input />
      <TimeAndLocation /> 
      <TemperatureAndDetails />
      <Forcast title="hourly forecast" />
      <Forcast title="daily forecast" />
    </div>
  );
}

export default App;
 