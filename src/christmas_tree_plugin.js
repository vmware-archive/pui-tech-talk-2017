import {TablePlugin} from 'pivotal-ui/react/table';

const greenBg = {style: {backgroundColor: '#dfd'}};
const pinkBg = {style: {backgroundColor: '#fdd'}};
const cols = ['glutenFree', 'seasonal'];

export function withChristmasTree(Table) {
  return class TableWithChristmasTree extends TablePlugin {
    render() {
      return this.renderTable(Table, {
        td: (props, {rowDatum, column: {attribute}}) => {
          if (cols.indexOf(attribute) === -1) return;

          return rowDatum[attribute] ? greenBg : pinkBg
        }
      });
    }
  };
}