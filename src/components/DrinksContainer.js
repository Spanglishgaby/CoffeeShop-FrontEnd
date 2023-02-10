import {useState} from 'react'
import { Button,Card } from 'semantic-ui-react'
import DrinkUpdate from './DrinkUpdate';
import NewDrinkModal from './NewDrinkModal';

const DrinksContainer = ({drinks, setDrinks}) => {
  const [showForm, setShowForm] = useState({});

  const handleDelete = (id) =>
    setDrinks((current) => current.filter((p) => p.id !== id));

  function handleClickDelete(e){
      e.preventDefault()
      let id = parseInt(e.target.value)
      fetch(`http://localhost:9292/drinks/${id}`, {
      method: "DELETE",
      })
      .then(() => {
        handleDelete(id)
      })
  }

  function handleClickUpdate(id){
    setShowForm((current) => ({...current, [id]: !current[id]}));
  }

  let drinksArray = drinks && drinks.map((drink) => {
    return (
      <>
      <Card key={drink.id}>
        <Card.Content>
          <Card.Header>{drink.name}</Card.Header>
          <Card.Description>
          <strong>Ingredients:</strong>Steve wants to add you to the group 
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' value={drink.id} onClick={() => handleClickUpdate(drink.id)}>{showForm[drink.id] ? "Hide Form" : "Edit"}</Button>
            <Button basic color='red' value={drink.id} onClick={handleClickDelete}>Delete</Button>
          </div>
        </Card.Content>
        {showForm[drink.id] ? <DrinkUpdate key={drink.id} drink={drink} setDrinks={setDrinks} /> : null}
      </Card>
      </>
    )
  });
  return (
  <>
    <div className='menu-container'>
      <h1>Drink's List</h1>
      <NewDrinkModal  drinks={drinks} setDrinks={setDrinks} />
      <div className='menu-cards'>
        {drinksArray}
      </div>
    </div> 
    <br/><br/>
  </>
  )
}

export default DrinksContainer
