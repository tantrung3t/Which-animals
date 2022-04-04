import React, { useEffect, useState } from 'react'
import './PageDetailScreen.css'

export default function PageDetailScreen(props) {
    const data = {
        ten: "chim",
        tenkhoahoc: "bird",
        anhchinh: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mimus_polyglottus1_cropped.png/420px-Mimus_polyglottus1_cropped.png",
        anhphu: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mimus_polyglottus1_cropped.png/420px-Mimus_polyglottus1_cropped.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mimus_polyglottus1_cropped.png/420px-Mimus_polyglottus1_cropped.png"
        ],
        ddhinhthai: "Đặc điểm chuẩn loại: Cơ thể tròn, dẹt mặt bụng Chóp đuôi cùn, không có dạng mũ Không có đốm màu vàng mặt bụng Đầu rộng nhất ở góc mép miệng, hẹp dần về trước Mút mõm tròn Lỗ mũi nằm gần bờ trước mép Đặc điểm hình thái: SVL 201,3 mm. Dài đuôi: 2,6 – 3,5; rộng đuôi: 2,8 – 3,5. Rộng đầu (HW: 6,6). Dài đầu hơn rộng đầu (HL/HW: 1,25-1,47). Cơ thể hơi tròn, dài, dạng rắn. Đầu dẹp, láng; rộng nhất ở mép miệng, hẹo về phía đầu. Mút mõm tròn, dài mõm bằng với ngang đầu ở vị trí mắt. Mắt nhỏ, không mi mắt, có một đôi râu (tentacle) ngắn nằm phía trước mắt. Hai bên thân có sọc  màu vàng bắt đầu từ sau mép miệng đến lỗ huyệt. Số nếp gấp quanh thân: 280 – 300; ở đuôi: 7-8. Đuôi ngắn hơi dẹt ở mặt bụng, phần đỉnh cùn, không có đốm màu cam hay vàng  ở mặt bụng. Mặt lưng có màu tím đen, bụng màu hoa cà nhạt, hai bên sườn có sọc màu vàng liên tục, không đứt quãng, chạy từ khoảng giữa hàm trên (mấu xúc - tu) đến gần mút đuôi. Mắt có viền mỏng màu trắng đục. Ghi chú: Loài Ichthyophis bannanicus phân biệt với Ichthyophis nguyenorum dựa trên các đặc điểm: số nếp vòng quanh cơ thể của I. nguyenorum (312 – 318) ít hơn so với I. bannanicus (340); sọc bên thân của I. nguyenorum kéo dài đến mút đuôi so với sọc bị đứt quãng ở phía sau đuôi của I. bannanicus Nishikawa et al. (2012).",
        ddsinhthai: "Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác."
    }
                    

    const [info, setInfo] = useState({
        ten: "",
        tenkhoahoc: "",
        anhchinh: "",
        anhphu: [],
        ddhinhthai: "",
        ddsinhthai:""
    })

    useEffect(() => {
        setInfo(data)
        setImage(data.anhphu)
        console.log(info)
    },[])
    return (
        <div className="PageDetailScreen_body">
            <div className="PageDetailScreen_grid_left">
                <h2> {info.ten} </h2>
                <p>Đặc điểm hình thái:</p>
                <div>
                    {info.ddhinhthai}
                </div>
                <p>Đặc điểm sinh thái:</p>
                <div>
                    {info.ddsinhthai}
                </div>
            </div>
            <div className="PageDetailScreen_grid_right">
                <div>
                    <img alt="animals" className="PageDetailScreen_image" src={info.anhchinh} />
                </div>
                <div className="PageDetailScreen_list_image">
                    {
                        info.anhphu.map((anh, index) => 
                         <img alt="animals" key={index} className="PageDetailScreen_image" src={anh} />
                        )
                    }
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
                            <span style={{ flex: '1' }}>Giới:</span> <span style={{ width: "200px" }}>aaa</span>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Ngành:</span> <span style={{ width: "200px" }}>bbbb</span>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Lớp:</span> <span style={{ width: "200px" }}>ccccccc</span>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Bộ:</span> <span style={{ width: "200px" }}>ddddddddddd</span>
                        </div>
                        <div className="PageDetailScreen_title flex around">
                            <span style={{ flex: '1' }}>Họ:</span> <span style={{ width: "200px" }}>ee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}