import React from 'react'

function TopButton({setQuery}) {

    const cities = [
        {
            id:1,
            title: 'Berlin'
        },
        {
            id:2,
            title: 'Accra'
        },
        {
            id:3,
            title: 'Kigali'
        },
        {
            id:4,
            title: 'London'
        },
        {
            id:5,
            title: 'Toronto'
        },
    ]


  return (
    <div className="flex items-center justify-around my-6">
    {cities.map((city) => (
        <button 
            key={city.id } 
            className="text-white text-lg font-medium hover:scale-125 transition ease-out" 
            onClick={() => setQuery({ q: city.title })}>
                {city.title}
        </button>
    ))}
  </div>
  );
}

export default TopButton; 