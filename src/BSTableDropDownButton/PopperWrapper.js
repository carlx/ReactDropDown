import React from 'react';
import PropTypes from 'prop-types';

export const PopperWrapper = ({ innerRef, style, ...props }) => (
  <div
    ref={innerRef}
    style={{
      position: 'absolute',
      minWidth: 1,
      minHeight: 1,
      zIndex: 4000,
      ...style,
    }}
    {...props}
  />
);

PopperWrapper.propTypes = {
  style: PropTypes.object,
  innerRef: PropTypes.func,
};

export default PopperWrapper;
