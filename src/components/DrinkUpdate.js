import {useState} from 'react'
import { Button, Form, } from 'semantic-ui-react'
import { message,} from 'antd';

const DrinkUpdate = ({drink, setDrinks}) => {
  const [name, setName] = useState(drink.name);
  const [price, setPrice] = useState(drink.price);
  const [image_url, setImageUrl] = useState(drink.image_url);

  const updateDrink = {
    name,
    price,
    image_url,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/drinks/${drink.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateDrink),
    })
      .then((r) => r.json())
      .then((data) => {
        setDrinks((currentDrinks) =>
          currentDrinks.map((drink) =>
            drink.id === data.id ? { ...drink, ...updateDrink } : drink
          )
        );
        success();
      });
  };

  const success = () => {
    message.success("Drink was updated!");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field required>
          <label>Price</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Field>
        <Form.Field required>
          <label>Image URL</label>
          <input value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
        </Form.Field>
        <Button>Update</Button>
      </Form>
    </div>
  );
};

export default DrinkUpdate;
