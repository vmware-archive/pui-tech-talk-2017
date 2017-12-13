import React from 'react';
import {Form, FormRow, FormCol} from 'pivotal-ui/react/forms';
import {PrimaryButton} from 'pivotal-ui/react/buttons';
import {Toggle} from 'pivotal-ui/react/toggle';
import {pepperOptions} from './helpers/application_helper';
import {post} from './helpers/fetch_helper';

export default class FormExample extends React.Component {
  render() {
    return (<Form {...{
      resetOnSubmit: true,
      onSubmit: ({current}) => post('/add-item', current)
    }}>
      <FormRow>
        <FormCol name="name" label="Name">
          <input/>
        </FormCol>
        <FormCol fixed name="price" label="Price" validator={value => {
          if (+value < 0) return 'we need to make money!!';
        }}>
          <input type="number"/>
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol name="spiciness" label="Spiciness" tooltipSize="sm"
                 tooltip="there is only spicy!!" inline optional>
          <select>
            {pepperOptions}
          </select>
        </FormCol>
        <FormCol name="glutenFree" label="Gluten Free" inline optional
                 labelPosition="after" fixed optionalText="">
          <input type="checkbox"/>
        </FormCol>
        <FormCol name="seasonal" label="Seasonal" inline optional
                 labelPosition="after" fixed optionalText="">
          <Toggle/>
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol name="description" optional label="Description">
          <textarea></textarea>
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol fixed>
          {({canReset, reset}) =>
            <PrimaryButton alt
                           disabled={!canReset()}
                           onClick={reset}>
              Reset
            </PrimaryButton>}
        </FormCol>
        <FormCol/>
        <FormCol fixed>
          {({canSubmit}) =>
            <PrimaryButton type="submit"
                           disabled={!canSubmit()}>
              Submit
            </PrimaryButton>}
        </FormCol>
      </FormRow>
    </Form>);
  }
};