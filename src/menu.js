import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menu_item';

export default class Menu extends React.Component {
  static propTypes = {
    data: PropTypes.array
  };

  render() {
    const {data} = this.props;

    return data.map((item, key) => (<MenuItem item={item} key={key}/>));
  }
}
