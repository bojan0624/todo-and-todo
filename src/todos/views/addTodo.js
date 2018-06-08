import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { addTodo } from '../actions'

class AddTodo extends PureComponent {
  handleSubmit = ev => {
    ev.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.props.onAdd) this.props.onAdd(values['todoText'])
        this.props.form.setFieldsValue({'todoText': ''})
      }
    })
  }

  componentDidMount () {
    this.props.form.validateFields()
  }

  render() {
    const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form
    const todoTextError = isFieldTouched('todoText') && getFieldError('todoText')

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
           validateStatus={todoTextError ? 'error' : ''}
           help={todoTextError || ''}
        >
          {getFieldDecorator('todoText', {
            rules: [{
              required: true
            }]
          })(
            <Input placeholder="input todo"/>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">ADD</Button>
        </Form.Item>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: text => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(Form.create()(AddTodo))