import React, { useEffect, useState } from 'react'

export default function SearchScreen(props) {
  const [animals, setAnimals] = useState([])


  useEffect(() => {
    const data = [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
        name: "chim",
        nameEng: "bird"
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
        name: "chim",
        nameEng: "bird"
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
        name: "chim",
        nameEng: "bird"
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mimus_polyglottus1_cropped.png',
        name: "chim",
        nameEng: "bird"
      }
    ]

    setAnimals(data)
    
  }, [])

  console.log(animals)

  return (
    <div className='container search-wrap'>
      <div className='my-5'>Kết quả tìm kiếm từ:  {props.id}</div>
      <div className='row row-cols-2'>
        {
          animals.map((animal, index) =>
            <div className='search-result' key={index}>
              <img src={animal.img} alt='img' className='search-img' />
              <div>
                <div className='search-name' style={{fontSize: "36px"}}> {animal.name} </div>
                <div className='search-name' style={{fontSize: "24px"}}> {animal.nameEng} </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}