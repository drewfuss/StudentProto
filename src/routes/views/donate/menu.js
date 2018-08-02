import React, {Component} from 'react';
import MenuItem from './menuitem';
import Center from 'react-center';
import './styles/menu.css';

class Menu extends Component
{
  constructor(props)
  {
  super(props);
  }

  render()
  {
    return (
      <div>
        <Center>
          <h1>On Deck</h1>
        </Center>
        {this.props.doners.map(c=> <MenuItem name={c.name} key={c.id} />)}
      </div>
    )
  }
}


export default Menu;
