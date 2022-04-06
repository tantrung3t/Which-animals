import React, { useEffect, useState } from 'react'
import './PageDetailScreen.css'
import axios from 'axios'

export default function PageDetailScreen(props) {

    const [info, setInfo] = useState({});

    useEffect(() => {
        loadData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:3003/api/home/list/' + props.id)
            .then(response => {
                setInfo(...info, response.data[0])
                console.log(response.data[0])
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="PageDetailScreen_body">
            <div className="PageDetailScreen_grid_left">
                <h2> {info.ten} </h2>
                <p>Đặc điểm hình thái:</p>
                <div>
                    {info.hinhthai}
                </div>
                <p>Đặc điểm sinh thái:</p>
                <div>
                    {info.sinhthai}
                </div>
            </div>
            <div className="PageDetailScreen_grid_right">
                <div>
                    <img alt="animals" className="PageDetailScreen_image" src={info.image1} />
                </div>
                <div className="PageDetailScreen_list_image">

                    <img alt="animals" className="PageDetailScreen_image" src={info.image2} />
                    <img alt="animals" className="PageDetailScreen_image" src={info.image3} />
                    {/* {

                        info.anhphu.map((anh, index) => 
                         <img alt="animals" key={index} className="PageDetailScreen_image" src={anh} />

                        )
                    } */}
                    {/* <img alt="animals" className="PageDetailScreen_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mimus_polyglottus1_cropped.png/420px-Mimus_polyglottus1_cropped.png" />
                    <img alt="animals" className="PageDetailScreen_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mimus_polyglottus1_cropped.png/420px-Mimus_polyglottus1_cropped.png" /> */}
                </div>
                <div>
                    <p className="PageDetailScreen_name_science py-2">Tên khoa học</p>
                    <p> {info.tenkhoahoc} </p>
                </div>
                <div>
                    <p className="PageDetailScreen_class_science py-2">Phân loại khoa học</p>
                    <div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Giới:</span> <span style={{ width: "200px" }}></span>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Ngành:</span> <span style={{ width: "200px" }}></span>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Lớp:</span> <span style={{ width: "200px" }}></span>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Bộ:</span> <span style={{ width: "200px" }}></span>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Họ:</span> <span style={{ width: "200px" }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}