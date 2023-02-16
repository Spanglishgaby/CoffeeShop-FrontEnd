import {useState,useEffect} from 'react'
import { Button,Card,Dropdown,Form  } from 'semantic-ui-react'
import { Modal,  } from 'antd';
import DrinkUpdate from './DrinkUpdate';
import IngredientModal from './IngredientModal';
import NewDrinkModal from './NewDrinkModal';

const DrinksContainer = ({drinks, setDrinks,ingredients,setIngredients}) => {
  const [showForm, setShowForm] = useState({});
  const [drinkIngredients, setdrinkIngredients] =useState([])
  const [openSignup, setOpenSignup] = useState(false)
  const [ingredientsId, setIngredientsId] = useState(null);
  const [drinkId, setDrinkId] = useState(null);

  function handleOpen(id) {
    setOpenSignup(true);
    setDrinkId(id);
    }
    
    function handleClose() {
    setOpenSignup(false);
    setDrinkId(null);
    setIngredientsId(null);
    }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/drink-ingredients", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ingredients_id: ingredientsId, drink_id: drinkId})
    })
    .then((r) => r.json())
    .then((data) => {
    setdrinkIngredients([...drinkIngredients, data]);
    handleClose();
    })
    }

  useEffect(() => {
    fetch("http://localhost:9292/drink-ingredients")
    .then(res => res.json())
    .then((data) => setdrinkIngredients(data))
  }, [])

  const handleDelete = (id) =>
    setDrinks((current) => current.filter((p) => p.id !== id));

  function handleClickDelete(e){
      e.preventDefault()
      let id = parseInt(e.target.value)
      console.log(e.target.value)
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
        <Dropdown icon='bars' size='massive' direction='left'>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Button basic color='green' value={drink.id} onClick={() => handleClickUpdate(drink.id)}>{showForm[drink.id] ? "Hide Form" : " Edit..."}</Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button basic color='red' value={drink.id} onClick={handleClickDelete}>Delete</Button>
            </Dropdown.Item>
            <Dropdown.Item>
            <Button basic color='orange' value={drink.id} onClick={() => handleOpen(drink.id)}>Add</Button>
              <Modal 
                    title="Add ingredients to your drink" 
                    open={openSignup}
                    onCancel={handleClose}
                    onOk={handleClose}
                    footer={null}
                >
                <Form onSubmit={handleSubmit}>
                  <Form.Field>
                    <label>1st ingredient</label>
                    <select value='none' onChange={(e) => setIngredientsId(e.target.value)}>
                    <option>Select the first ingredient</option>
                    {ingredients.map((ingredient) => (
                    <option key={ingredient.id} value={ingredient.id}>
                    {ingredient.name}
                    </option>))}
                    </select>
                  </Form.Field>
                  <Form.Field>
                    <label>2nd ingredient</label>
                    <select onChange={(e) => setIngredientsId(e.target.value)}>
                    <option value='none'>Select the second ingredient</option>
                    {ingredients.map((ingredient) => (
                    <option key={ingredient.id} value={ingredient.id}>
                    {ingredient.name}
                    </option>))}
                    </select>
                  </Form.Field>
                  <Button primary type="submit">Create</Button>
                  </Form>
              </Modal>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Card.Content>
          <Card.Header>{drink.name}</Card.Header>
          <Card.Description>
          <strong>Ingredients:</strong>Steve wants to add you to the group 
          </Card.Description>
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
      <NewDrinkModal  drinks={drinks} setDrinks={setDrinks} 
      drinkIngredients={drinkIngredients} setdrinkIngredients={setdrinkIngredients} ingredients={ingredients} setIngredients={setIngredients}/>
      <IngredientModal ingredients={ingredients} setIngredients={setIngredients}/>
      <div className='menu-cards'>
        {drinksArray}
      </div>
    </div> 
    <br/><br/>
  </>
  )
}

export default DrinksContainer
