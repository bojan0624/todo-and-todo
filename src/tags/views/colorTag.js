import React from 'react';
import { Tag } from 'antd';
import { connect } from 'react-redux';

const ColorTag = ({
  subjectColor,
  colorName = subjectColor,
  level = 6,
  children,
  style,
  onClick
}) => {
  let sty = children ? {} : { width: '20px', height: '20px', color: 'white' };
  sty = { ...sty, ...style };
  return (
    <Tag
      style={sty}
      className={`color-tag ${colorName}-${level}`}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

const mapStateToProps = state => {
  return {
    subjectColor: state.subjectColor
  };
};

export default connect(mapStateToProps)(ColorTag);
