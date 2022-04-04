import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function SearchScreen(props) {
  const [animals, setAnimals] = useState([])

  useEffect(() => {

    loadDataSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id])

  const loadDataSearch = async() => {
    const data = {
      "search" : props.id
    }
    await axios({
      method: 'post',
      url: 'http://localhost:3003/api/home/search',
      data: data
    })
      .then(function (response) {
        setAnimals(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='container search-wrap'>
      <div className='my-5'>Kết quả tìm kiếm từ:  {props.id}</div>
      <div className='row row-cols-2'>
        {
          animals.map((animal, index) =>
            <Link to={"/detail/" + animal.id} className='search-result' key={index}>
              <img src={animal.image1} alt='img' className='search-img' />
              <div>
                <div className='search-name' style={{fontSize: "36px"}}> {animal.ten} </div>
                <div className='search-name' style={{fontSize: "24px"}}> {animal.tenkhoahoc} </div>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  )
}