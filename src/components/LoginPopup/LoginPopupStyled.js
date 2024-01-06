import styled from "styled-components";
import { Modal } from "antd";




const LoginPopupStyled = styled(Modal)`
  .ant-modal-content {
    background-color: #f0f0f0;
  }


  .ant-modal-body {
      }
.warning-icon{
  margin:0;
  font-size:40px;
}
.message{
  margin:0;
  color:black;
  font-size:16px;
}
.popup-div{

  display:flex;
align-items:center;
justify-content:center;

}

.button{
  display:flex;
  justify-content:end;
}
.modal-button{
  color:white;
  background-color:red;
  border:0;
}
.modal-button:hover {
  color: white !important;
}

.circle{
  height:35px;
  width:35px;
  background-color:green;
  border-radius:50%;
  margin-right:30px;
 display:grid;
 place-items:center;
}

`;

export default LoginPopupStyled;
