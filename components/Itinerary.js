import React from 'react'

export default function Itinerary(props) {
    console.log(props.legs)
    return (
        <div className='it-container'>
            <div className='legs-container'>
                {props.legs}
            </div>
        </div>
    )
}
