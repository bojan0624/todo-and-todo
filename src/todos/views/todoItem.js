import React from 'react';
import { connect } from 'react-redux';
import { List, Checkbox, Icon, Dropdown, Menu } from 'antd';
import { toggleTodo, removeTodo, changeTag } from '../actions';
import { ColorTag } from '../../tags';

const TodoItem = ({
  onToggle,
  id,
  onRemove,
  onChangeTag,
  completed,
  text,
  typeId,
  tagTypes,
  getLevelByType
}) => {
  return (
    <List.Item
      actions={[
        <a onClick={() => onRemove(id)}>remove</a>,
        <Dropdown
          overlay={
            <Menu>
              {tagTypes.map(item => (
                <Menu.Item
                  key={item.id}
                  onClick={() => {
                    onChangeTag(id, item.id);
                  }}
                >
                  <ColorTag
                    style={{ width: '90px', marginRight: '0' }}
                    level={item.level}
                  >
                    <a style={{ color: 'white' }}>{item.name}</a>
                  </ColorTag>
                </Menu.Item>
              ))}
              <Menu.Item
                onClick={() => {
                  onChangeTag(id);
                }}
              >
                delete
              </Menu.Item>
            </Menu>
          }
          placement="bottomRight"
        >
          <Icon type="tags-o" />
        </Dropdown>
      ]}
    >
      <Checkbox
        checked={completed}
        onClick={() => {
          onToggle(id);
        }}
      />
      <div
        style={{
          margin: '0 10px',
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </div>
      {typeId && <ColorTag level={getLevelByType(tagTypes, typeId)} />}
    </List.Item>
  );
};

const mapStateToProps = state => {
  return {
    tagTypes: state.tagTypes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: id => {
      dispatch(toggleTodo(id));
    },
    onRemove: id => {
      dispatch(removeTodo(id));
    },
    onChangeTag: (id, typeId) => {
      dispatch(changeTag(id, typeId));
    },
    getLevelByType: (types, typeId) => {
      const type = types.filter(item => item.id === typeId)[0];
      return type.level;
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
