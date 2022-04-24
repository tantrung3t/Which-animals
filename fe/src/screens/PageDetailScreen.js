import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './PageDetailScreen.css'
import axios from 'axios'

export default function PageDetailScreen(props) {

    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")

    const [info, setInfo] = useState({
        id: "",
        ten: "",
        tenkhoahoc: "",
        loai: "",
        hinhthai: "",
        sinhthai: "",
        image1: "",
        image2: "",
        image3: "",
        nganh_id: "",
        lop_id: "",
        bo_id: "",
        nganh_ten: "",
        lop_ten: "",
        bo_ten: "",
    });

    useEffect(() => {
        loadData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:3003/api/home/list/' + props.id)
            .then(response => {
                setInfo(response.data[0])
                console.log(response.data[0])
                setImage1(response.data[0].image1)
                setImage2(response.data[0].image2)
                setImage3(response.data[0].image3)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const changeImage1 = (image) =>{
        if(image1 !== image){
            setImage2(image1)
            setImage1(image)
        }

    } 
    const changeImage2 = (image) =>{
        if(image1 !== image){
            setImage3(image1)
            setImage1(image)
        }
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
                    <img alt="animals" className="PageDetailScreen_image" src={image1} />
                </div>
                <div className="PageDetailScreen_list_image">

                    <img alt="animals" className="PageDetailScreen_image" src={image2} onClick={()=>changeImage1(image2)} />
                    <img alt="animals" className="PageDetailScreen_image" src={image3} onClick={()=>changeImage2(image3)} />
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
                            <span style={{ flex: '1' }}>Giới:</span> <span style={{ width: "300px" }}>Animania</span>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Ngành:</span> <Link to={`/nganh/${info.nganh_id}`} style={{ width: "300px" }}>{info.nganh_ten}</Link>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Lớp:</span> <Link to={`/lop/${info.lop_id}`} style={{ width: "300px" }}>{info.lop_ten}</Link>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Bộ:</span> <Link to={`/bo/${info.bo_id}`} style={{ width: "300px" }}>{info.bo_ten}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}