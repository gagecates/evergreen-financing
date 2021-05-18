import React, { useState, useEffect } from 'react'
import Itinerary from './Itinerary'

export default function Itineraries() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

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

    const getLegs = (legs) => {
      const legList = items.legs.filter(leg => leg.id === legs[0] || leg.id === legs[1]);
      return legList;
    }
    
    return(
        <div>
            {
            items ? items.itineraries.map(option => {
              return(
                <Itinerary
                  key={option.id}
                  legs={getLegs(option.legs)}
                  price={option.price}
                  agent={option.agent}
                />
              )
            })
              : 'Loading'
            }
        </div>
    );
};
