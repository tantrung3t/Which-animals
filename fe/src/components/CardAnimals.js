import React, { useState, useEffect } from 'react';

import './CardAnimals.css'


export default function CardAnimals(props) {
    const [loading, setLoading] = useState('loading')
    const [hidden, setHidden] = useState('hidden')
    const [card__info, setCard__info] = useState('card__info')

    useEffect(() => {
        setTimeout(() => {
            setLoading('')
            setCard__info('show_name_animals')
            setHidden('')

        }, 2500)
    }, [])
    return (

        // <div className="CardAnimals_card">
        //     
        //     <div className="card_info">
        //     <p className={loading}>{title}</p>
        //     </div>
        // </div>



        <div className="card">
            <div className={"card__img " + loading}>
            <img className={hidden} src={props.src} alt="image_animals"/>
            </div>
            <div className={card__info}>
                <p className={loading}>{props.name}</p>
            </div>
        </div>
    )
}