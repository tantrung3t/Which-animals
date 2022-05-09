import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './CardAnimals.css'

var flag = 1;

export default function CardAnimals(props) {
    const [loading, setLoading] = useState('loading')
    const [hidden, setHidden] = useState('hidden')
    const [card__info, setCard__info] = useState('card__info')

    useEffect(() => {
        if (flag === 1) {
            setTimeout(() => {
                setLoading('')
                setCard__info('show_name_animals')
                setHidden('')
                flag = 0
            }, 2500)
        }
        else {
            setLoading('')
            setCard__info('show_name_animals')
            setHidden('')
        }
    }, [])
    return (

        // <div className="CardAnimals_card">
        //     
        //     <div className="card_info">
        //     <p className={loading}>{title}</p>
        //     </div>
        // </div>



        <Link to={"/detail/" + props.id} className="card">
            <div className={"card__img " + loading}>
                <img className={hidden} src={props.src} alt="image_animals" />
            </div>
            <div className={card__info}>
                <p className={loading}>{props.name}</p>
            </div>
        </Link>
    )
}