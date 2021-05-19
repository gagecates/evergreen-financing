import React from 'react'
import STYLES from '../styles/App.module.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

export default function Itinerary(props) {
    console.log(props.legs)

    const getTime = (time) => {
        const newTime = time.split('T');
        return newTime[1];
    }

    const getDuration = (num) => {
        const hours = (num / 60);
        const rhours = Math.floor(hours);
        const minutes = (hours - rhours) * 60;
        const rminutes = Math.round(minutes);
        return rhours + "h " + rminutes;
    }

    const getClass = (stops) => {
        return (stops > 0) ? 'stops' : 'direct';
    }

    return (
        <div className={getClassName('it-container')}>
            {props.legs.map(leg => {
                return(
                    <div className={getClassName('section-container')}>
                        <img className={getClassName('airline-img')} src={`https://logos.skyscnr.com/images/airlines/favicon/${leg.airline_id}.png`}/>
                        <div className={getClassName('mr-10')}>
                            <div>{getTime(leg.departure_time)}</div>
                            <div className={getClassName('airport')}>{leg.departure_airport}</div>
                        </div>
                        <div className={getClassName('mr-10')}><i className="fas fa-arrow-right" style={{color: '#a19c9c'}}></i></div>
                        <div className={getClassName('mr-10')}>
                            <div>{getTime(leg.arrival_time)}</div>
                            <div className={getClassName('airport')}>{leg.arrival_airport}</div>
                        </div>
                        <div className={getClassName('duration-info')}>
                            <div className={getClassName('gray')}>{getDuration(leg.duration_mins)}</div>
                            <div className={getClassName(getClass(leg.stops))}>{(leg.stops > 0) ? leg.stops + ' Stop' : 'Direct'}</div>
                        </div>
                    </div>
                )
            })}
            
            <div className={getClassName('section-container')}>
                <div className={getClassName('price-container')}>
                    <div className={getClassName('price')}>{props.price}</div>
                    <div>{props.agent}</div>
                </div>
                <button className={getClassName('button')}>Select</button>
            </div>
        </div>
    )
}
