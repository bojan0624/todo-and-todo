import React, {PureComponent} from 'react'
import { Radio } from 'antd'
import {connect} from 'react-redux'
import {FilterType} from '../../constants'
import {setFilter} from '../actions'


const RadioGroup = Radio.Group
const RadioButton = Radio.Button

class filters extends PureComponent {
  handleSelect = e => {
    const value = e.target.value
    this.props.onFilter(value)
  }

  render() {
    return (
      <RadioGroup
        style={{marginBottom: '20px'}}
        value={this.props.filter}
        onChange={this.handleSelect}
      >
        {
          Object.keys(FilterType).map(key => (
            <RadioButton key={key} value={FilterType[key]}>{key}</RadioButton>
          ))
        }
      </RadioGroup>
    )
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: filterType => {
      dispatch(setFilter(filterType))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(filters)