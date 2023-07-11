import { createGlobalStyle } from "styled-components";
 

export default createGlobalStyle`  
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: var(--futuramediumbt );
        font-weight : 400 ;
        color-scheme: dark only;
     
    }
    .MuiFilledInput-underline{
        border-width: 3px solid;
    }
    .swiper-container {
            width: 85vw !important;
            overflow: hidden;
        }

        .swiper-slide-active {
            width: 85vw !important;
        }

  
    .Toastify__toast-container {
      z-index: 999999999999999;
    }
    .infinite-scroll-component__outerdiv{        
        width: 100%;
     

    }

    *::after{
        box-sizing: border-box; 
    }
    *::before{
        box-sizing: border-box;
    }
    *:focus{
        outline:0;
    }

    body{              
        -webkit-font-smoothing: antialiased;
        
        
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
    button{
        cursor: pointer;
        transition: 0.4s;
        :hover {
            filter: brightness(120%);
        }
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 12px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #0d0f14; 
        opacity: 0.5;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #5c607f;
        opacity: 0.5;
        height: 2px; 
    /* border-radius: 10px; */
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: white;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: white;
    }


   /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
    ::-webkit-datetime-edit-year-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-day-field {
      color: transparent;
    }     
`;


