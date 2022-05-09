
// export default function SigninScreen(){

//     const logout = () => {
//         localStorage.setItem('user', "")
//         window.location = "http://localhost:3000"
//     }

//     return(
//         <div>
//             <button onClick={logout}>Đăng xuất</button>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import axios from 'axios';

import './AdminScreen.css';

const localhost = "http://localhost:3003"

const modalStyle = {
    'paddingLeft': '10px',
    'paddingRight': '10px',
    'display': 'flex',
    'width': '95%',
    'justifyContent': 'space-between',
    'alignItems': 'center'
}
const modalStyleImage = {
    'paddingLeft': '10px',
    'paddingRight': '10px',
    'display': 'flex',
    'width': '95%',
    'alignItems': 'center'
}
const modalStyleTen = {
    paddingRight: '160px',
}
const modalStyle2 = {
    'paddingLeft': '10px',
    'paddingRight': '10px',
    'display': 'flex',
    'width': '98%',
    'justifyContent': 'space-between',
    'alignItems': 'center'
}

const bodyStyle = {
    // 'paddingLeft': '120px',
    // 'paddingRight': '120px',
}

const divStyle1 = {
    'display': 'flex',
    'borderBottom': '1px solid #91c2cc',
    'width': '100%',
    'height': '100px',
    'justifyContent': 'space-between',
    'alignItems': 'center'

};
const divStyle2 = {
    'width': '250px',
};

const divStyle3 = {
    'width': '250px',
    'fontSize': '700',
    'fontWeight': 'bold',
    'color': '#005d80'
};
const divStyle4 = {
    'width': '160px',
    'fontSize': '700',
    'fontWeight': 'bold',
    'color': '#005d80'
};
const divStyleScroll = {
    'width': '101%',
    'height': '400px',
    'overflow': 'auto',
}

const buttonStyle1 = {
    'padding': '10px 20px',
    'margin': '3px 3px 3px 3px',
    'outline': 'none',
    'border': 'none',
    'backgroundColor': '#e33939',
    'color': '#f7f7f7',
    'borderRadius': '6px',
    'cursor': 'pointer',
    'fontSize': '12px',
    'fontWeight': 'bold',
};

const buttonStyle2 = {
    'padding': '10px 20px',
    'margin': '3px 3px 3px 3px',
    'outline': 'none',
    'border': 'none',
    'backgroundColor': '#1e931c',
    'color': '#f7f7f7',
    'borderRadius': '6px',
    'cursor': 'pointer',
    'fontSize': '12px',
    'fontWeight': 'bold',
};
const preview = {
    'marginLeft': '10px',
    'paddingRight': '10px',
    'border': '2px dashed #91c2cc',
    'width': '160px',
    'height': '120px',
    'fontSize': '22px',
    'position': 'relative',
    'borderRadius': '6px',
    'overflow': 'hidden',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'flexDirection': 'column',
    'cursor': 'pointer',
}
const box3 = {
    width: '200px',
    height: '200px',
    margin: '10px',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    // boxShadow: '0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
}
const box4 = {
    width: "81%",
    margin: '10px',
    backgroundColor: '#ffffff',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
}
export default function AdminProduct() {

    const [hide, setHide] = useState("hide");
    const [titleModal, settitleModal] = useState("");
    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [imageUpload, setImageUpload] = useState("")

    const [dataProductBrand, setDataProductBrand] = useState([]);
    const [nganh, setNganh] = useState([]);
    const [lop, setLop] = useState([]);
    const [bo, setBo] = useState([]);
    const [data, setData] = useState([]);
    const [isAddProductNew, setIsAddProductNew] = useState(true);

    //state product upload
    const [product_id, setProduct_id] = useState("");
    // const [product_name, setProduct_name] = useState("");
    // const [product_brand_id, setProduct_brand_id] = useState("");
    // const [product_type_id, setProduct_type_id] = useState("");
    // const [product_price, setProduct_price] = useState("");
    // const [product_amount, setProduct_amount] = useState("");
    const [product_image, setProduct_image] = useState("");
    const [product_description, setProduct_description] = useState("");


    //noi dung
    const [hinhthai, setHinhthai] = useState("");
    const [chuanloai, setChuanloai] = useState("");

    //
    //image
    const [image1, setImage1] = useState("");
    const [isUploaded1, setIsUploaded1] = useState(false);
    const [imageUpload1, setImageUpload1] = useState("");

    const [image2, setImage2] = useState("");
    const [isUploaded2, setIsUploaded2] = useState(false);
    const [imageUpload2, setImageUpload2] = useState("");

    const [image3, setImage3] = useState("");
    const [isUploaded3, setIsUploaded3] = useState(false);
    const [imageUpload3, setImageUpload3] = useState("");


    //init data product brand
    useEffect(() => {
        loadData_products();
        loadData_nganh();
        loadData_lop();
        loadData_bo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //call and render product brand
    const loadData_nganh = () => {
        axios.get(`http://localhost:3003/api/nganh`)
            .then(res => {
                const data = res.data;
                setNganh(data)
            })
            .catch(error => console.log(error));
    }
    const loadData_lop = () => {
        axios.get(`http://localhost:3003/api/lop`)
            .then(res => {
                const data = res.data;
                setLop(data)
            })
            .catch(error => console.log(error));
    }
    const loadData_bo = () => {
        axios.get(`http://localhost:3003/api/bo`)
            .then(res => {
                const data = res.data;
                setBo(data)
            })
            .catch(error => console.log(error));
    }
    const render_nganh = () => {
        let element = nganh.map((nganh, index) => {

            return <option key={index} value={nganh.nganh_id}>{nganh.nganh_ten}</option>
        })
        return element;
    }

    const render_lop = () => {
        let element = lop.map((lop, index) => {

            return <option key={index} value={lop.lop_id}>{lop.lop_ten}</option>
        })
        return element;
    }
    const render_bo = () => {
        let element = bo.map((bo, index) => {
            return <option key={index} value={bo.bo_id}>{bo.bo_ten}</option>
        })
        return element;
    }


    //call data products
    const loadData_products = () => {
        axios.get(`http://localhost:3003/api/home/list`)
            .then(res => {
                const data = res.data;
                setData(data)
            })
            .catch(error => console.log(error));
    }

    const delete_product = (id) => {
        const dataDeleteProduct = {
            "token": localStorage.getItem('token'),
            "product_id": id
        }

        axios({
            method: 'post',
            url: 'http://localhost:3003/products/delete',
            data: dataDeleteProduct
        })
            .then(function (response) {
                console.log(response);
                alert("Sản phẩm đã được xoá!")
                loadData_products()
            })
            .catch(function (error) {
                console.log(error);
                alert("Không thể xoá sản phẩm ngày bây giờ vui lòng thử lại!")
            });

    }

    const edit_product = (index, id, product_name, product_type_id, product_brand_id, product_price, product_amount, product_description, product_image) => {
        settitleModal("Chỉnh sửa cho sản phẩm có ID = " + id + " index = " + index);
        setHide("modal");
        setIsUploaded(true);
        setIsAddProductNew(false);
        setImage(localhost + product_image);
        setProduct_image(product_image);
        setProduct_id(id);

        document.getElementById("product_name").value = product_name;
        document.getElementById("product_type_id").value = product_type_id;
        document.getElementById("product_brand_id").value = product_brand_id;
        document.getElementById("product_price").value = product_price;
        document.getElementById("product_amount").value = product_amount;

        setProduct_description(product_description)

    }

    const add_product = () => {
        settitleModal("Thêm động vật mới")
        setIsUploaded(false);
        setImage("");
        setHide("modal");
        setIsAddProductNew(true);

        document.getElementById("tendongvat").value = "";
        document.getElementById("tenkhoahoc").value = "";
        document.getElementById("nganh").value = 1;
        document.getElementById("lop").value = 1;
        document.getElementById("bo").value = 1;
        setProduct_description("")

    }

    const exit = () => {
        localStorage.setItem('user', "")
        window.location = "http://localhost:3000"
    }
    const close_modal = () => {
        loadData_products();
        clear_all()
        setHide("modal hide");
    }
    const exit_modal = (e) => {
        if (e.target === e.currentTarget) {
            clear_all()
            close_modal()
        };
    }
    const clear_all = () => {
        setHinhthai("");
        setChuanloai("")
        setIsUploaded1(false);
        setIsUploaded2(false);
        setIsUploaded3(false);
        
    }
    const renderList = () => {
        let element = data.map((animal, index) => {

            return <Item
                key={index}
                index={index}
                id={animal.id}
                ten={animal.ten}
                tenkhoahoc={animal.tenkhoahoc}
                image={animal.image1}
            />
        })
        return element;
    }

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setImage(e.target.result)
                setIsUploaded(true)
            }

            reader.readAsDataURL(e.target.files[0])
            setImageUpload(e.target.files[0])
        }
    }

    function handleImageChange1(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setImage1(e.target.result)
                setIsUploaded1(true)
            }

            reader.readAsDataURL(e.target.files[0])
            setImageUpload1(e.target.files[0])
        }
    }
    function handleImageChange2(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setImage2(e.target.result)
                setIsUploaded2(true)
            }

            reader.readAsDataURL(e.target.files[0])
            setImageUpload2(e.target.files[0])
        }
    }
    function handleImageChange3(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setImage3(e.target.result)
                setIsUploaded3(true)
            }

            reader.readAsDataURL(e.target.files[0])
            setImageUpload3(e.target.files[0])
        }
    }

    const handleSubmit = async (event) => {

        let formData1 = new FormData();
        formData1.append('file', imageUpload1);
        let formData2 = new FormData();
        formData2.append('file', imageUpload2);
        let formData3 = new FormData();
        formData3.append('file', imageUpload3);

        event.preventDefault();
        const dataSubmit = new FormData(event.currentTarget);

        var url1 = ""
        var url2 = ""
        var url3 = ""

        await axios.post('http://localhost:3003/image',
            formData1, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (res) {
            url1 = res.data.filePath
        })
            .catch(function (err) {
                console.log(err)
            })
        await axios.post('http://localhost:3003/image',
            formData2, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (res) {
            url2 = res.data.filePath
        })
            .catch(function (err) {
                console.log(err)
            })
        await axios.post('http://localhost:3003/image',
            formData3, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (res) {
            url3 = res.data.filePath
        })
            .catch(function (err) {
                console.log(err)
            })

        const dataSend = {
            "ten": dataSubmit.get('tendongvat'),
            "tenkhoahoc": dataSubmit.get('tenkhoahoc'),
            "nganh_id": dataSubmit.get('nganh'),
            "lop_id": dataSubmit.get('lop'),
            "bo_id": dataSubmit.get('bo'),
            "hinhthai": hinhthai,
            "sinhthai": chuanloai,
            "image1": "http://localhost:3003" + url1,
            "image2": "http://localhost:3003" + url2,
            "image3": "http://localhost:3003" + url3
        }

        console.log(dataSend)

        const check = () => {
            if(dataSend.ten === "") return false
            if(dataSend.tenkhoahoc === "") return false
            if(dataSend.hinhthai === "") return false
            if(dataSend.sinhthai === "") return false
            if(dataSend.image1 === "http://localhost:3003") return false
            if(dataSend.image2 === "http://localhost:3003") return false
            if(dataSend.image3 === "http://localhost:3003") return false
            return true
        }
        

        if(!check()) {
            alert("Không được để trống các trường!")
        }
        else{
            await axios({
                method: 'post',
                url: 'http://localhost:3003/api/animals',
                data: dataSend
            })
                .then(function (response) {
                    if(response.data.status === '200') alert('Thêm thành công')
                    else alert('Thêm thất bại')
                })
                .catch(function (err) {
                    console.log(err)
                })
        }

    }

    return (
        <div style={bodyStyle}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={box3}>
                    <div className="admin_title1">
                    <button onClick={exit} className="button-exit-product">Đăng xuất</button>
                    </div>
                </div>
                <div style={box4}>
                    <div style={{ float: 'right' }}>
                        <button onClick={add_product} className="button-add-product">Thêm động vật</button>
                    </div>
                    <div style={divStyle1}>
                        <div style={divStyle3}>
                            ID
                        </div>
                        <div style={divStyle3}>
                            Động vật
                        </div>
                        <div style={divStyle3}>
                            Tên khoa học
                        </div>
                        <div style={divStyle4}>
                            Hình ảnh
                        </div>
                    </div>
                    <div style={divStyleScroll}>
                        {renderList()}
                    </div>
                </div>
            </div>
            <div className={hide} onClick={exit_modal}>
                <div className="modal__inner">
                    <div className="modal__header">
                        <div className="modal__title">{titleModal}</div>
                        <FontAwesomeIcon icon={faXmarkCircle} fontSize={35} onClick={close_modal} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal__body">
                            <div style={modalStyle}>
                                <div >
                                    <div>Tên động vật</div>
                                    <input id="tendongvat" name="tendongvat" className="input-name-product" type="text" placeholder="Nhập tên động vật" />
                                </div>
                                <div>
                                    <div>Tên khoa học</div>
                                    <input id="tenkhoahoc" name="tenkhoahoc" className="input-name-product" type="text" placeholder="Nhập tên khoa học" />
                                </div>
                            
                                <div>
                                    <div>Thuộc ngành</div>
                                    <select id="nganh" name="nganh" className="input-add-product" >
                                        {render_nganh()}
                                    </select>
                                </div>
                                <div>
                                    <div>Thuộc lớp</div>
                                    <select id="lop" name="lop" className="input-add-product" >
                                        {render_lop()}
                                    </select>
                                </div>
                                <div>
                                    <div>Thuộc bộ</div>
                                    <select id="bo" name="bo" className="input-add-product" >
                                        {render_bo()}
                                    </select>
                                </div>
                            </div>
                            <div style={modalStyle2}>
                                <div style={{ width: '600px', height: '290px' }}>
                                    <div>Đặc điểm hình thái</div>

                                    <div>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={hinhthai}
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                // console.log('Editor is ready to use!', editor);
                                                editor.editing.view.change((writer) => {
                                                    writer.setStyle(
                                                        "height",
                                                        "200px",
                                                        editor.editing.view.document.getRoot()
                                                    );


                                                });

                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setHinhthai(data);
                                                // console.log(product_description);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div style={{ width: '600px', height: '290px' }}>
                                    <div>Đặc điểm chuẩn loại</div>

                                    <div>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={chuanloai}
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                // console.log('Editor is ready to use!', editor);
                                                editor.editing.view.change((writer) => {
                                                    writer.setStyle(
                                                        "height",
                                                        "200px",
                                                        editor.editing.view.document.getRoot()
                                                    );
                                                });

                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setChuanloai(data);
                                                // console.log(product_description);
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div style={modalStyleImage}>
                                <div style={{ width: '200px', height: '130px' }}>
                                    <div style={modalStyle}>
                                        <div style={{ paddingLeft: '10px' }}>Hình ảnh 1</div>
                                    </div>
                                    <div style={preview}>
                                        {
                                            !isUploaded1 ? (
                                                <>
                                                    <label htmlFor="upload-input1" className="upload-image">
                                                        {/* <img src='../assets/img/image_upload.svg' alt='logo' width='50px' ></img> */}
                                                        <div>Tải ảnh lên</div>
                                                        <input
                                                            hidden
                                                            type="file"
                                                            id="upload-input1"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={handleImageChange1}
                                                        />
                                                    </label>

                                                </>
                                            ) : (
                                                <>
                                                    <label htmlFor="upload-input1">
                                                        <input
                                                            hidden
                                                            type="file"
                                                            id="upload-input1"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={handleImageChange1}
                                                        />
                                                        <img className="uploaded-img" id="uploaded-img1" src={image1} alt="uploaded-img1" />
                                                    </label>

                                                </>

                                            )
                                        }
                                    </div>
                                </div>
                                <div style={{ width: '200px', height: '130px' }}>
                                    <div style={modalStyle}>
                                        <div style={{ paddingLeft: '10px' }}>Hình ảnh 2</div>
                                    </div>
                                    <div style={preview}>
                                        {
                                            !isUploaded2 ? (
                                                <>
                                                    <label htmlFor="upload-input2" className="upload-image">
                                                        {/* <img src='../assets/img/image_upload.svg' alt='logo' width='50px' ></img> */}
                                                        <div>Tải ảnh lên</div>
                                                        <input
                                                            hidden
                                                            type="file"
                                                            id="upload-input2"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={handleImageChange2}
                                                        />
                                                    </label>

                                                </>
                                            ) : (
                                                <>
                                                    <label htmlFor="upload-input2">
                                                        <input
                                                            hidden
                                                            type="file"
                                                            id="upload-input2"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={handleImageChange2}
                                                        />
                                                        <img className="uploaded-img" id="uploaded-img2" src={image2} alt="uploaded-img2" />
                                                    </label>

                                                </>

                                            )
                                        }
                                    </div>
                                </div>
                                <div style={{ width: '200px', height: '130px' }}>
                                    <div style={modalStyle}>
                                        <div style={{ paddingLeft: '10px' }}>Hình ảnh 3</div>
                                    </div>
                                    <div style={preview}>
                                        {
                                            !isUploaded3 ? (
                                                <>
                                                    <label htmlFor="upload-input3" className="upload-image">
                                                        {/* <img src='../assets/img/image_upload.svg' alt='logo' width='50px' ></img> */}
                                                        <div>Tải ảnh lên</div>
                                                        <input
                                                            hidden
                                                            type="file"
                                                            id="upload-input3"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={handleImageChange3}
                                                        />
                                                    </label>

                                                </>
                                            ) : (
                                                <>
                                                    <label htmlFor="upload-input3">
                                                        <input
                                                            hidden
                                                            type="file"
                                                            id="upload-input3"
                                                            accept=".jpg,.jpeg,.png"
                                                            onChange={handleImageChange3}
                                                        />
                                                        <img className="uploaded-img" id="uploaded-img3" src={image3} alt="uploaded-img3" />
                                                    </label>

                                                </>

                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="modal__footer">
                            <button type="submit" className="modal-save">Lưu</button>
                            <button type="reset" className="modal-cancel" onClick={clear_all}>Xoá tất cả</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

function Item(props) {
    const buttonDelete = () => {
        props.buttonDelete(props.product_id)
    }
    const buttonEdit = () => {
        props.buttonEdit(props.index, props.product_id, props.product_name, props.product_type_id, props.product_brand_id, props.product_price, props.product_amount, props.product_description, props.product_image)
    }
    return (
        <div style={divStyle1}>
            <div style={divStyle3}>
                {props.id}
            </div>
            <div style={divStyle3}>
                {props.ten}
            </div>
            <div style={divStyle3}>
                {props.tenkhoahoc}
            </div>
            <div style={divStyle4}>
                <div>
                    <img className="image_sub" id="uploaded-img3" src={props.image} alt="image1" />
                </div>
            </div>
        </div>
    )
}