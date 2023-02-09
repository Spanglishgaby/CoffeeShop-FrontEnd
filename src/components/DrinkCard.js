import { Card, Image } from 'semantic-ui-react'
import Shop from './Shop'

const DrinkCard = ({drink}) => {


  return (
    <>
    <Card >
        <Image src={drink.image_url} style={{ height: '400px'}}/>
        <Card.Content>
            <Card.Header>{drink.name}</Card.Header>
            {/* <Card.Description><strong>Basic Ingredients:</strong> Coffee, Water, Sugar</Card.Description> */}
        </Card.Content>
        <Card.Content extra textAlign='center'>
            <Shop/> Add to Order
        </Card.Content>
    </Card>
    </>
  )
}

export default DrinkCard