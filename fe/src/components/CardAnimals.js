import React, { useState } from 'react';

import './CardAnimals.css'


export default function CardAnimals(props) {
    const [loading, setLoading] = useState('loading')
    const [hidden, setHidden] = useState('hidden')
    const [src, setSrc] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');

    setTimeout(() => {
        setSrc(props.src)
        setTitle(props.name)
        setLoading('')
        setHidden('')
    }, 4000)

    return (

        // <div className="CardAnimals_card">
        //     
        //     <div className="card_info">
        //     <p className={loading}>{title}</p>
        //     </div>
        // </div>



        <div className="card">
            <div className={"card__img " + loading}>
            <img className={hidden} src={src}/>
            </div>
            <div className="card__info">
                <p className={loading}>{title}</p>
            </div>
        </div>
    )
}