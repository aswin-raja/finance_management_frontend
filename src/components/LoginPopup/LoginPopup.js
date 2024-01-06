import React from "react";
// import { Icon } from "@iconify/react";
// import { Button } from "antd";
import { Icon } from "@iconify/react";
import LoginPopupStyled from "./LoginPopupStyled";

const LoginPopup = (props) => {
  // const { email, password } = props.message;
  return (
    <LoginPopupStyled
      title=""
      style={{ top: 20 }}
      visible={props.ModalOpen}
      onOk={props.ModalClose}
      onCancel={props.ModalClose}
      footer={null}
      closeIcon={null}
      width={350}
    >
      <div className="popup-div">
        <div className="circle">
        <Icon
                              icon="teenyicons:tick-solid"
                              color="white"
                              width="20"
                              height="20"
                              className="warning-icon"
                            />
        </div>
      
<p className="message">{props.message}</p>
        </div>
        {/* <div className="button">
          <Button className="modal-button" onClick={props.ModalClose}>Retry</Button>
        </div> */}
    </LoginPopupStyled>
  );
};

export default LoginPopup;
