
import React, { useRef, useState } from "react"
import "./SigninScreen.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function SigninScreen() {
  const username = useRef(null)
  const password = useRef(null)

  const [isContainerActive, setIsContainerActive] = useState('');




  const handleSignIn = (event) => {

    event.preventDefault();
    const dataSubmit = new FormData(event.currentTarget);


    var data = JSON.stringify({
      "username": dataSubmit.get('username'),
      "password": dataSubmit.get('password')
    });

    // localStorage.setItem('user', 'admin')
    // window.location = 'http://localhost:3000/admin'

    var config = {
      method: 'post',
      url: 'http://localhost:3003/api/admin',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {

        console.log((response.data));
        console.log((response.data.status));

        if (response.data.status === '200') {
          localStorage.setItem('user', "admin")
          window.location = "http://localhost:3000/admin";
        }
        else {
            alert('Dang nhap khong thanh cong')
        }
      })
      .catch(function (error) {
        console.log(error);
      });



  }


  return (
    <div className="body-sign">
      <div className={`container-sign ${isContainerActive}`}>
        <div className="sign-form-container sign-up-container">
          <form className="form-sign">
            <h1 className="h1-sign">Tạo tài khoản</h1>
            <input name="username_sign-up" className="input-sign" type="text" placeholder="Tên đăng nhập" />
            <input name="password_sign-up" className="input-sign" type="password" placeholder="Nhập mật khẩu" />
            <input name="re_password_sign-up" className="input-sign" type="password" placeholder="Nhập lại mật khẩu" />
            <input name="name_sign-up" className="input-sign" type="text" placeholder="Nhập họ tên" />
            <input name="email_sign-up" className="input-sign" type="email" placeholder="Nhập email" />

            <button type="submit" className="button-sign my-2">Đăng ký</button>
          </form>
        </div>
        <div className="sign-form-container sign-in-container">
          <form onSubmit={handleSignIn} className="form-sign">
            <h1 className="h1-sign">Đăng nhập</h1>

            <input ref={username} name="username" className="input-sign" type="text" placeholder="Tên tài khoản" />
            <input ref={password} name="password" className="input-sign" type="password" placeholder="Mật khẩu" />
            
            <button type="submit" className="button-sign">Đăng nhập</button>

          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            
            <div className="overlay-panel overlay-right">
              <h1>Xin chào bạn!</h1>
              <div className="overlay-title">Vui lòng đăng nhập để sử dụng!</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}