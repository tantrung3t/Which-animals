import React, { useState, useEffect } from 'react'
import CardAnimal from '../components/CardAnimals';
import './HomeScreen.css';
import axios from 'axios';



export default function NganhScreen(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:3003/api/nganh/' + props.id)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err));
    }


    const renderListAnimals = () => {
        let element = data.map((item, index) => {
            return <CardAnimal
                key={index}
                id={item.id}
                src={item.image1}
                name={item.ten}
            />
        })
        return element
    }

    return (
        <div className="HomeScreen_body">
            {renderListAnimals()}
        </div>
    )
}