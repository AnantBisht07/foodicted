import styled from 'styled-components'
import { BASE_URL } from '../App'


const Fooditems = ({ data }) => {
  return (
    <Main>
     {/* <img className='firstimg' src="green4.png" alt="" />
     <img className='secondimg' src="green1.png" alt="" /> */}
<FoodCards>
     {data?.map((food)=> (<Foodcard key={food.name}>
      <div className="food_img">
        <img src={BASE_URL + food.image}/>
        <div className="foodinfo">
        <h3>{food.name}</h3>
        <p>{food.text}</p>
        </div>
        <button>${food.price.toFixed(2)}</button> 
        {/* toFixed(2) krne se price two places tk ayega  */}
      </div>
      </Foodcard>
     ))}
     </FoodCards>
    </Main>
  )
}

export default Fooditems

const Main = styled.div`
/* img {
  height: 80vh;
} */
/* background-color: red; */



.firstimg {
  height: 240px;
}
.secondimg {
  margin-left: 1120px;
  height: 220px;
}


@media screen and (max-width: 768px) {
    margin-left: -40px;
    /* background-color: red; */
    margin-top: 20px;
  }

`
const Foodcard = styled.div `
margin: 40px;
/* background-color: red; */
background-color: rgba(136, 125, 133, 0.2); 
  backdrop-filter: blur(10px); /* Blur effect */
  /* padding: 10px; Add some padding for spacing */
  border-radius: 15px;
  color: white;



button {
  height: 7vh;
  width: 20vw;
  background-color: #c7ffc7;
    border-radius: 30px;
    font-size: 14px;
    border: 3px solid #34e234;
    font-weight: bold;
    margin-top: auto;
}
h3 {
  margin-top: 20px;
  font-weight: 900;
  font-size: 25px;
  background-color: #34e234;
  color: black;
}
p {
  font-size: 11px;
  margin-top: 25px;
}
.food_img {
  display: flex;
  padding: 7px;

}
.foodinfo{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
button:hover {
    background-color: #34e234;
    transition: ease-in-out 0.6s;
    border: 1px solid black;
  }

  width: 395px;
  height: 169px;
  border: 3px solid #34e234;


  @media screen and (max-width: 768px) {
    margin: 20px 20px;
    margin-right: -20px;
    h3 {
      font-size: 18px;
      color: black;
    }
    p {
      margin-top: 2px;
      font-size: 10px;
      margin-bottom: -40px;
      white-space: nowrap;
      margin-left: -110px;
}
    }
    button {
      margin-bottom: -75px;
      margin-left: 60px;
    }
    .foodinfo {
      height: 10vh;
      width: 20vw;
    }
    .food_img img {
      height: 15vh;
      padding: 5px;
    }

    

`;
const FoodCards = styled.div `
display: flex;
flex-wrap: wrap;
`
