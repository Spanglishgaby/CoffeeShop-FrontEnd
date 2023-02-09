import {useEffect} from "react";
import DrinkCard from "./DrinkCard";


export const DrinkMenu = ({drinks, setDrinks}) => {

  useEffect( () =>{
    fetch("http://localhost:9292/drinks")
    .then(res => res.json())
    .then((data) =>setDrinks(data))
    },[])

  let drinksArray = drinks&&drinks.map((drink) => {
    return <DrinkCard key={drink.id}  drink={drink} />
  });
  return (
    <div className='menu-container'>
      <h1>Menu</h1>
      <div className='menu-cards'>
        {drinksArray}
      </div>
    </div>
  )
}
