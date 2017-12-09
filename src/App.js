import React from 'react';
import Form from './forms';
import Menu from './menu';
import MenuTable from './menu_table';
import {DefaultButton} from 'pivotal-ui/react/buttons';
import './App.css';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/box-shadows';
import 'pivotal-ui/css/colors';
import 'pivotal-ui/css/inputs';
import 'pivotal-ui/css/typography';
import 'pivotal-ui/css/whitespace';

class App extends React.Component {
  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);
    this.state = {tab: 0};
  }

  render() {
    const {data} = this.props;
    const {tab} = this.state;

    return (
      <div>
        <h1>Pivotal Thai Stop</h1>

        <div className="mvxl txt-c">
          <DefaultButton onClick={() => this.setState({tab: 0})} alt={tab !== 0}>Menu</DefaultButton>
          <DefaultButton onClick={() => this.setState({tab: 1})} alt={tab !== 1}>Admin</DefaultButton>
        </div>

        <div hidden={tab !== 0}>
          <h2 className="h2">Menu</h2>
          <div className="mhl mbxxl">
            <Menu {...{data}}/>
          </div>
        </div>

        <div hidden={tab !== 1}>
          <h2 className="h2">Menu Admin Table</h2>
          <MenuTable {...{data}}/>
          <hr/>
          <h2 className="h2">Add Menu Item</h2>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
