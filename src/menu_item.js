import React from 'react';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {renderPeppers, formatPrice} from './helpers/application_helper';

export default class MenuItem extends React.Component {
  render() {
    const {item} = this.props;
    const {name, price, description, spiciness, glutenFree, seasonal} = item;

    const details = [
      glutenFree && 'gluten-free',
      seasonal && 'seasonal'
    ].filter(i => i).join(', ');

    return (
      <Grid className="menu-item box-shadow-3">
        <FlexCol>
          <Grid>
            <FlexCol fixed>{name}</FlexCol>
            <FlexCol>{renderPeppers(spiciness)}</FlexCol>
            <FlexCol fixed>{formatPrice(price)}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{description}</FlexCol>
            <FlexCol fixed>{details}</FlexCol>
          </Grid>
        </FlexCol>
      </Grid>
    );
  }
}
