import React from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

export const DrinkMenu = () => {
  return (
    <div className='menu-container'>
      <h1>Drinks</h1>
      <div className='menu-cards'>
        <Card >
          <Image src='https://images.unsplash.com/photo-1512568400610-62da28bc8a13' style={{ height: '400px'}}/>
          <Card.Content>
            <Card.Header>Hot Coffee</Card.Header>
            <Card.Description><strong>Basic Ingredients:</strong> Coffee, Water, Sugar</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Button animated='vertical'>
              <Button.Content hidden>Order</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
            Add to  Order
          </Card.Content>
        </Card>
        <Card >
          <Image src='https://images.unsplash.com/photo-1562547256-2c5ee93b60b7' style={{ height: '400px' }}/>
          <Card.Content>
            <Card.Header>Hot Tea</Card.Header>
            <Card.Description><strong>Basic Ingredients:</strong> Coffee, Water, Sugar</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Button animated='vertical'>
              <Button.Content hidden>Order</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
            Add to  Order
          </Card.Content>
        </Card>
        <Card>
          <Image src='https://images.unsplash.com/photo-1608651057580-4a50b2fc2281' style={{ height: '400px' }} />
          <Card.Content>
            <Card.Header>Hot Chocolate</Card.Header>
            <Card.Description><strong>Basic Ingredients:</strong> Coffee, Water, Sugar</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Button animated='vertical'>
              <Button.Content hidden>Order</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
            Add to  Order
          </Card.Content>
        </Card>
        <Card>
          <Image src='https://images.unsplash.com/photo-1634641135604-94df2bd6d3d8'  style={{ height: '400px' }} />
          <Card.Content>
            <Card.Header>Iced Teas</Card.Header>
            <Card.Description><strong>Basic Ingredients:</strong> Coffee, Water, Sugar</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Button animated='vertical'>
              <Button.Content hidden>Order</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
            Add to  Order
          </Card.Content>
        </Card>
        <Card>
          <Image src='https://images.unsplash.com/photo-1618799805265-4f27cb61ede9' style={{ height: '400px'}} />
          <Card.Content>
            <Card.Header>Cold Drinks</Card.Header>
            <Card.Description><strong>Basic Ingredients:</strong> Coffee, Water, Sugar</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='center'>
            <Button animated='vertical'>
              <Button.Content hidden>Order</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
            Add to  Order
          </Card.Content>
        </Card>
      </div>
    </div>
  )
}
