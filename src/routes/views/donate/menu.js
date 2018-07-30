import React, {Component} from 'react';
import MenuItem from './menuitem';

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
        {this.props.doners.map(c=> <MenuItem name={c.name} key={c.id} />)}
      </div>
    )
  }
}


export default Menu;
