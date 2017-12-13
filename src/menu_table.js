import React from 'react';
import {AdvancedTable} from 'pivotal-ui/react/table';
import {prettifyContent} from './helpers/application_helper';
import {withChristmasTree} from './christmas_tree_plugin';

const ChristmasTreeTable = withChristmasTree(AdvancedTable);

export default class MenuTable extends React.Component {
  render() {

    const {data} = this.props;
    const columns = [{
      attribute: 'name',
      displayName: 'Name',
      className: 'col-grow-2'
    }, {
      attribute: 'price',
      displayName: 'Price',
      sortable: true,
      sortBy: (value) => +value
    }, {
      attribute: 'spiciness',
      displayName: 'Spiciness',
      sortable: true,
      sortBy: (value) => +value
    }, {
      attribute: 'glutenFree',
      displayName: 'Gluten Free',
      CellRenderer: ({glutenFree}) => glutenFree ? 'Yes' : 'No'
    }, {
      attribute: 'seasonal',
      displayName: 'Seasonal',
      CellRenderer: ({seasonal}) => seasonal ? 'Yes' : 'No'
    }]

    const rowDrawer = (rowIndex, rowDatum) =>{
      return prettifyContent(rowDatum.description);
    }
    return <ChristmasTreeTable {...{data, columns, rowDrawer}}/>;
  }
}