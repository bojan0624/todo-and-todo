import React from 'react';
import { connect } from 'react-redux';
import { SubjectColors } from '../../constants';
import { Tag } from 'antd';
import ColorTag from './colorTag';
import { changeSubjectColor } from '../actions';
import './tags.less';

const tagSubject = ({ subjectColor, onSubjectColorChange }) => {
  return (
    <div>
      {SubjectColors.map(colorName => (
        <ColorTag
          key={colorName}
          style={
            colorName === subjectColor
              ? { boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, .25)' }
              : {}
          }
          colorName={colorName}
          onClick={() => {
            onSubjectColorChange(colorName);
          }}
        />
      ))}
      <br />
      <p style={{ margin: '4px 0' }}>示例: </p>
      <ColorTag key={1} level={8} />
      <ColorTag key={2} level={6} />
      <ColorTag key={3} level={4} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    subjectColor: state.subjectColor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubjectColorChange: color => {
      dispatch(changeSubjectColor(color));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(tagSubject);
