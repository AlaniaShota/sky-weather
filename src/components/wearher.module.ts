import styled from "styled-components";

interface darkModeProps {
    darkMode: boolean;
}

const breakpoints = {
    small: "576px",
    medium: "768px",
    large: "992px",
    extraLarge: "1200px",
};

export const MainWrapper = styled.div<darkModeProps>`
display: flex;
align-items: center;
justify-content: center;
width: auto;
.container {
    background-color:${({ darkMode }) => (darkMode ? "#131214" : "#fff")};
    color:${({ darkMode }) => (darkMode ? "#fff" : "rgba(0, 0, 0, 0.8)")};
    box-shadow:${({ darkMode }) => (darkMode ? "none" : "0 10px 15px rgb(0 0 0 / 20%)")};
    border-radius: 12px;
    padding: 1rem;
    box-sizing: border-box;
    background-blend-mode: overlay;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
.search-area {
    margin-top: 20px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}

.search-area > .input-text {
    outline: none;
    border: none;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;
    width: 80%;
    background: transparent;
    color:${({ darkMode }) => (darkMode ? "#fff" : "rgba(0, 0, 0, 0.8)")};
    border:1px solid ${({ darkMode }) => (darkMode ? "#fff" : "grey")}
}
.search-circle {
    border: 1px solid ${({ darkMode }) => (darkMode ? "#fff" : "grey")} ;
    width: 35px;
    height: 35px; 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
> .search-icon {
        font-size: 20px;
        color: 1px solid ${({ darkMode }) => (darkMode ? "#fff" : "grey")} ;
    }
}

.weather-area {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;

> .icon {
        font-size: 9rem;
    }


> h1 {
        font-size: 3rem;
        font-family: "Bebas Neue", sans-serif;
    }

> span {
        margin-bottom: 10px;
        font-family: "Inter", sans-serif;
    }

> h2 {
        font-size: 2rem;
        font-family: "Inter", sans-serif;
        font-weight: 400;
    }
}
.humid-title{
    font-size:36px;
}
.bottom-info-area {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px;
    background: ${({ darkMode }) => (darkMode ? "#ffffff7d" : `linear-gradient(
        90deg,
        rgba(243, 255, 253, 1) 0%,
        rgba(253, 255, 232, 1) 100%
)`)} ;
    border-radius: 12px;
    padding: 10px;
}
.humidity-level,
.wind {
    display: flex;
    align-items: center;
    margin: 0 20px;

> .humid-icon {
        font-size: 3rem;
    }
}


.wind-icon {
    font-size: 2rem;
    margin-right: 10px;
}
@media (max-width: ${breakpoints.small}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    .container {
        padding: 0;
        width:auto;
        justify-content: center;
        flex-direction: column;
    }

    .weather-area {
        margin: 20px 0;

        > .icon {
            font-size: 7rem;
        }
        > h1 {
            font-size: 36px;
        }

        > span {
            margin-bottom: 5px;
        }

        > h2 {
            font-size: 1.5rem;
        }
    }
    .humid-title{
    font-size:26px;
}

.humidity-level,
.wind {
    display: flex;
    align-items: center;
    margin: 0 20px;

> .humid-icon {
        font-size: 1rem;
    }

    }
}   
`

export const MainForecast = styled.div<darkModeProps>`
display: flex;
align-items: center;
justify-content: center;
width: auto;

.forecast-container{
    background-color: #ffffff7d;
    border-radius: 12px;
    padding: 1rem;
    box-shadow:${({ darkMode }) => (darkMode ? "" : "0 10px 15px rgb(0 0 0 / 20%)")};
    box-sizing: border-box;
    color:${({ darkMode }) => (darkMode ? "#fff" : "rgba(0, 0, 0, 0.8)")};
    display: grid;
    gap: 12px;
    background-blend-mode: overlay;
    grid-template-columns: repeat(5,1fr);
    align-items: center;
    list-style: none;
}

.forecast-list{
     display : flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     box-shadow:${({ darkMode }) => (darkMode ? "" : "0 10px 15px rgb(0 0 0 / 20%)")};
     background-color:${({ darkMode }) => (darkMode ? "#131214" : "#fff")};
     color:${({ darkMode }) => (darkMode ? "#fff" : "rgba(0, 0, 0, 0.8)")};
     padding: 15px 40px;
     border-radius: 12px;
    }

    .icon{
        font-size: 3rem;
        margin: 8px 0;
    }

    p {
        font-size: 14px;
        font-family: "Josefin Sans", sans-serif;
        text-transform: uppercase;
    }
    @media (max-width: ${breakpoints.small}){
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 95%;

    .forecast-container{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        width: 100%;
}

.forecast-list{
     padding: 20px 45px;
    }
}

    @media (max-width: ${breakpoints.medium}){
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;

    .forecast-container{
        display: grid;
        grid-template-columns: repeat(auto,1fr);
        align-items: center;
        width: 100%;
}

.forecast-list{
     padding: 15px 25px;
    }
}

`

export const MainHighlights = styled.div<darkModeProps>`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 15px;
background-color: #ffffff7d;
padding: 1rem;
box-shadow:${({ darkMode }) => (darkMode ? "" : "0 10px 15px rgb(0 0 0 / 20%)")};
box-sizing: border-box;
color: ${({ darkMode }) => (darkMode ? "#fff" : "rgba(0, 0, 0, 0.8)")};
background-blend-mode: overlay;
border-radius: 12px;
.highlights-content-main{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    gap: 12px;
    width: 100%;
}
.highlights-content{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    background-color: ${({ darkMode }) => (darkMode ? "#131214 " : "#fff")};
    color: ${({ darkMode }) => (darkMode ? "#fff " : "")};
    gap: 12px;
    padding: 20px;
}

.highlights-rise-set{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 50px;
}

.highlights-content-section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.highlights-temp{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.temp-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.air-content{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    background-color: ${({ darkMode }) => (darkMode ? "#131214" : "#fff")};
    color: ${({ darkMode }) => (darkMode ? "#fff " : "")};
    gap: 12px;
    padding: 20px;
    width: 100%;
}
.air-content-section{
    width: 100%;
    display: flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction: row;
    gap: 20px;
}

.air-section{
    display: flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction: column;
    width: 100%;
}

.air-section-main{
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: row;
    gap: 10px;
}

.title-section{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    font-family: "Bebas Neue", sans-serif;
}

.icon{
        font-size: 3rem;
    }
.icon-c{
        font-size: 2rem;
    }

    @media screen and (max-width: ${breakpoints.small}){
    margin-top: 0px;
    gap: 15px;
    padding: 1rem;
.highlights-content-main{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    align-items: center;
    gap: 12px;
}

.highlights-rise-set{
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
}

.highlights-temp{
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.air-content-section{
    flex-direction: column;
}

.air-section{
    justify-content: space-between;
    align-items:center;
    flex-direction: row;
}
}
`