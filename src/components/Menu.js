import React, { useState, useEffect, Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Consumer', value: 'Consumer' },
  { key: 'f', text: 'Business Owner', value: 'Business Owner' },
]

class Menu extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          <Form.Field
            control={Select}
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default Menu
