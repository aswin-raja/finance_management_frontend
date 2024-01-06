import styled from "styled-components";

// const backgroundcolor =
//   "linear-gradient(90deg, rgba(39,27,115,1) 0%, rgba(130,39,99,1) 50%, rgba(153,51,52,1) 100%);";
// const inputbackgroundcolor =
//   "linear-gradient(to right, rgba(2, 2, 80,0.7), rgba(151, 0, 0,0.7));";

const primarycolor = "#1677ff";
const LoginPageStyled = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
body, html {
    margin: 0;
    padding: 0;
}

.main{
    box-sizing: border-box;
    display:flex;
   height:95vh;
    margin:0;
    padding:0;
    font: 62.5% "Open Sans", sans-serif;
    color: #353b48;
    font-size: 1.0rem;
}


h1, h3, p {
    margin: 0;
}
.main-text{
    font-size:40px;
    color:${primarycolor};
    margin-bottom:10px;
    font-weight:600;
}
.sub-text{
    font-size:30px;
    margin-bottom:15px;
}
.title{
    font-size:48px;
    font-weight:600;
    color:white;
}


.login-img {
    display: none;
}

.login-form { 
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#company-name {
    display: none;
}



Input{
    border:1px solid #dcdde1;

}

Input:focus {
    outline: none;
    border-color: rgba(195, 20, 50, 0.4);
    box-shadow: 0 0 4px rgba(195, 20, 50, 0.5);
}

label {
    margin: 15px 0;
    width:100%;
}

Input, button,  {
    border-radius: 5px;
    padding: 15px;
}

button {
width:200px;
    margin-top:5%;
    background-color: ${primarycolor};;
    border: none;
    color: #f5f6fa;
    font-family: inherit;
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: background-color linear .3s;
}

button:active,
button:hover {
    background-color: #1361E8;
}



.errormessage{
    color:red;
    margin:0;
    font-size:16px;
    font-weight:bold;
    margin-left:2%;
}


/* media queries */
@media screen and (min-width:990px) {
    .login-img,
    .login-form {
        padding: 5%;
    }
    .login-form #company-name {
        display: inline;
    }

    .login-form h1 {
        font-size: 3rem;
    }

    .login-form i {
        font-size: 2.5rem;
        vertical-align: super;
    }

    .login-img {
        background: linear-gradient(to bottom, rgba(22, 119, 255, 0.9), rgba(255, 255, 255, 0.9)),
        url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80);
        // background-color: ${primarycolor};
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        
    }

    .login-img h1,
    .login-img p {
        width: 300px;
    }

    .login-img h1 {
        color:white;
        font-size: 4.5rem;
    }

    .login-img p {
       
        line-height: 1.5;
      text-align:justify;
    }
}


`;

export default LoginPageStyled;