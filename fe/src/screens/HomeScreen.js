import React, { useState, useEffect } from 'react'
import CardAnimal from '../components/CardAnimals';
import './HomeScreen.css';
import axios from 'axios';



export default function HomeScreen() {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:3003/api/home/list')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err));
    }


    const renderListAnimals = () => {
        let element = data.map((item, index) => {
            return <CardAnimal
                key={index}
                src={item.src}
                name={item.name}
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