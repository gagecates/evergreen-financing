import React, { useState, useEffect } from 'react'

export default function Itineraries() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("flights.json")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log(result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

    const options = items.itineraries.map(option => {
        return (
            <Itinerary
              key={item.id}
              legs={getLegs(item.legs)}
              price={item.price}
              agent={item.agent}
            />
        );
    });
    return(
        <div>
            {
              (items[0]) ? options : 'Loading Itineraries'
            }
        </div>
    );
};
