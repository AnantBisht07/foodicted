import "./App.css";
import styled from "styled-components";
import Fooditems from "./Components/Fooditems";
import { useEffect, useState } from "react";


export const BASE_URL = "http://localhost:9000";


function App() {

  const [data, setData] = useState(null);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null); // network call perform krte waqt koi error aye to ukse lie 
  const[filteredData, setFilteredData] = useState(null);

const [change, setChange] = useState("all");



 
const handleChange = (type) => {
  if(type === "all"){
    setFilteredData(data)
    change("all")
    return;
  }
  const filter = 
  data?.filter((value) => {
    // value hmesha pass hoti hai 
    // The value here represents each individual element (item) in the array
    // or is array mai saare fooditems pass hore hain 
    // console.log(value);
    return value.type.toLowerCase().includes(type.toLowerCase());
    // This method checks if the string on which it is called includes another string.
  });
   console.log(filter)
   setFilteredData(filter)
   setChange(type)
}



useEffect(()=>{
  // performing network call
  const fetchFoodData = async () => {
    setLoading(true)
    try {
      let response = await fetch(BASE_URL);
    const json = await response.json();
    // console.log(json)  data idhr agya hai 
    setData(json);
    setFilteredData(json);
    setLoading(false);
    } catch (error) {
      console.log("Unable to fetch data!")
    }
  }
  fetchFoodData();
}, [])


const searchFood = (e) => {
  const searchValue = e.target.value;
  // console.log(searchValue)
  if(searchValue === ""){
    setFilteredData(null);
  }
  const filter = data?.filter((value) =>
   value.name.toLowerCase().includes(searchValue.toLowerCase())
   ) 
  setFilteredData(filter);
  
  

setFilteredData(filter);


   
};
 
  if(error) return <div>{error}</div>
  if(loading) return <h1>{loading}</h1>

    return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <img src="/public/flogo.png" alt="" />
        </div>

        {/* <Fooditems></Fooditems> */}
        <div className="search">
        <input onChange={searchFood} type="text" placeholder="Search Food..." />
        </div>

        
      </TopContainer>
      <MainC>
      <div className="buttons">
        <button className="upper" onClick={() => handleChange("all")} >All</button>
        <button className="upper" id="breaky" onClick={() => handleChange("breakfast")} >Breakfast</button>
        <button className="lower" onClick={() => handleChange("lunch")}>Lunch</button>
        <button className="lower" onClick={() => handleChange("dinner")}>Dinner</button>
      </div>
    </MainC>
      <Fooditems data={filteredData}></Fooditems>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  /* background-color: ; */
  margin: 0 40px;
  img {
    height: 20vh;
  }

  

`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -25px;
  /* padding: 20px; */
  .search input{
    width: 15vw;
    height: 5vh;
    text-align: center;
    border-radius: 18px;
    border: 1px solid white;
    font-size: 14px;
    color: red;
    border: 3px solid #34e234;
  }
  
  .logo {
    margin-top: -45px;
  }
  .search  {
    margin-top: -45px;
    margin-right: 40px;
    
  }
  
  @media screen and (max-width: 768px) {
    /* background-color: red; */
    .logo {
      margin-left: -40px;
    }
    .search input{
      width: 36vw;
      margin-left: 50px;
    }
    
  };

  
`;

export const MainC = styled.div`
  background-color: #99ff99;
  border-radius: 26px;
  margin: 0 -32px;
  /* margin-left: -30px;  */
  button {
    height: 7vh;
    width: 20vh;
    margin: 20px;
    background-color: #c7ffc7;
    border-radius: 30px;
    font-size: 14px;
    border: 3px solid #34e234;
    font-weight: bold;

  }
  button:hover {
    background-color: #34e234;
    transition: ease-in-out 0.6s;
    border: 1px solid black;
  }
  .buttons {
    margin-left: 350px;

  }


  @media screen and (max-width: 768px) {
    /* background-color: red; */
    height: 12vh;
    margin-right: -35px;
    .buttons {
    margin-left: 36px;
    }
    .buttons button {
      font-size: 10px;
      width: 8vw;
      height: 8vh;
      margin-top: 15px;
      background-color: transparent;
      border: none;
      font-weight: bolder;
    }
    .buttons button:hover {
      color: red;
      transition: all 0.4s;
    }


    

  };
`;

