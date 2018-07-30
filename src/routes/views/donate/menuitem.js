import React, {Component} from 'react';

class MenuItem extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="doner">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default MenuItem;
