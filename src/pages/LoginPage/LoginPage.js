import React, { useState, useEffect } from "react";
import LoginPageStyled from "./LoginPageStyled";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { UserOutlined, LockFilled } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import LoginPopup from "../../components/LoginPopup/LoginPopup";
function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [loginpopup, setLoginPopup] = useState(false);

  const LoginModalOpenHandler = () => {
    setLoginPopup(false);
  };

  const handleEmailChange = (event) => { 
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  useEffect(() => {
    fetch('http://localhost:5001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid credentials'); // or handle other non-successful responses
        }
        return response.json();
      })
      .then(data => {
        console.log('Login successful:', data);
        setLoginPopup(true);
        setTimeout(() => {
          setLoginPopup(false);
          navigate("/homepage");
        }, 2000);
      })
      .catch(error => {
        console.error('Login failed:', error.message);
        // Handle login failure, show an error message, etc.
      });
  }, [email, navigate, password]);
  

  return (
    <LoginPageStyled>
      <Container fluid className="main">
      <LoginPopup
        ModalOpen={loginpopup}
        ModalClose={LoginModalOpenHandler}
       message="Login Successful"
      />
      <div class="login-img">
        <p className="title"> FINANCE MANAGEMENT</p>
        <p>
        
        </p>
      </div>
      <div class="login-form">
      
          <p id="company-name" className="main-text">Welcome Back !</p>
      
        <p className="sub-text">Login to Continue</p>

       
          <label for="name">Username </label>
         
          <Input
            type="text"
            id="name"
            name="name"
            addonAfter={<UserOutlined className="icon" />}
            placeholder="Email"
            required
            className="email-input"
            value={email}
          
            onChange={handleEmailChange}
          />
 
          <label for="password">Password </label>
          <Input
            id="password"
            className="password-input"
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={handlePasswordChange}
            addonAfter={
              <>
                <LockFilled className="icon" />
              </>
            }
          />
 
          <button>Log in</button>
     
      </div>
      
      </Container>
    </LoginPageStyled>
  );
}

export default LoginPage;
