import './PageDetailScreen.css'

export default function PageDetailScreen() {
    return (
        <div className="PageDetailScreen_body">
            <div className="PageDetailScreen_grid_left">Hello</div>
            <div className="PageDetailScreen_grid_right">
                <div>
                    <img alt="animals" className="PageDetailScreen_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mimus_polyglottus1_cropped.png/420px-Mimus_polyglottus1_cropped.png" />
                </div>
                <div className="PageDetailScreen_list_image">
                    <img alt="animals" className="PageDetailScreen_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mimus_polyglottus1_cropped.png/420px-Mimus_polyglottus1_cropped.png" />
                    <img alt="animals" className="PageDetailScreen_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mimus_polyglottus1_cropped.png/420px-Mimus_polyglottus1_cropped.png" />
                </div>
                <div>
                    <p className="PageDetailScreen_name_science">Tên khoa học</p>
                    <p>nguyennorum</p>
                </div>
                <div>
                    <p className="PageDetailScreen_class_science">Phân loại khoa học</p>
                    <div>
                        <div className="PageDetailScreen_title">Giới</div>
                        <div className="PageDetailScreen_title">Ngành</div>
                        <div className="PageDetailScreen_title">Lớp</div>
                        <div className="PageDetailScreen_title">Bộ</div>
                        <div className="PageDetailScreen_title">Họ</div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}