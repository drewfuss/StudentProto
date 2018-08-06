import React, {Component} from 'react';
import MenuItem from './menuitem';
import Center from 'react-center';
import {Row} from 'react-bootstrap';
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
        <Row>
          <Center>
            <h1>On Deck</h1>
          </Center>
        </Row>
        {this.props.doners.map(c=> <MenuItem name={c.name} thumbnail={c.thumbnail} total={c.total} key={c.id} />)}
      </div>
    )
  }
}


export default Menu;
