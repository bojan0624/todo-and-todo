import React from 'react';
import { connect } from 'react-redux';
import { List, Checkbox, Tag, Icon, Dropdown, Menu } from 'antd';
import { toggleTodo, removeTodo, changeTag } from '../actions';

const TodoItem = ({
  onToggle,
  id,
  onRemove,
  onChangeTag,
  completed,
  text,
  typeId,
  tagTypes,
  getColorByType
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
                  <Tag style={{ width: '90px' }} color={item.color}>
                    {item.name}
                  </Tag>
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
      {typeId && (
        <Tag
          style={{ width: '20px', height: '20px' }}
          color={getColorByType(tagTypes, typeId)}
        />
      )}
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
    getColorByType: (types, typeId) => {
      const type = types.filter(item => item.id === typeId)[0];
      return type.color;
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
