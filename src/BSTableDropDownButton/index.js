import React from 'react';
import styled from 'styled-components';
import { set } from 'lodash';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Manager, Target, Popper } from 'react-popper';
import PopperWrapper from './PopperWrapper';
import ClickOutside from 'react-click-outside';


const StyledMenuWrapper = styled.div`
  min-width: 10rem;
  padding: 0 0;
  margin: 0.125rem 0 0;
  font-size: 0.875rem;
  color: #151b1e;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c2cfd6;
`;


export default class BSTableDropDownButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  close = () => {
    this.setState({
      dropdownOpen: false,
    });
  };

  calculateOffset = (data) => {
    const buttonWidth = data.instance.reference.childNodes[0].getBoundingClientRect().width;
    const popperWidth = data.offsets.popper.width;
    const offset = Math.ceil(popperWidth - buttonWidth);
    const leftOffset = data.offsets.popper.left - offset;
    return set(data, 'offsets.popper.left', leftOffset);
  };

  modifiers = {
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
      boundariesElement: 'window',
      gpuAcceleration: true,
    },
    offset: {
      enabled: true,
      fn: this.calculateOffset,
    },
  };

  render() {
    return (
      <ClickOutside
        onClickOutside={this.close}
      >
        <Manager>
          <Target>
            <Button
              onClick={this.toggle}
              color={this.props.color}
              className="dropdown-toggle"
              size={this.props.size || 'md'}
            >
              {this.props.title}
            </Button>
          </Target>
          { this.state.dropdownOpen &&
          <Popper
            component={PopperWrapper}
            placement="bottom-start"
            modifiers={this.modifiers}
          >
            <StyledMenuWrapper>
              {
                this.props.elements.map((element, index) =>
                  <Button
                    disabled={element.disabled || false}
                    key={index}
                    onClick={() => { this.close(); element.actionFn(); }}
                    type="button"
                    className="dropdown-item"
                  >
                    {element.label}
                  </Button>)
              }
            </StyledMenuWrapper>
          </Popper>
          }
        </Manager>
      </ClickOutside>
    );
  }
}

BSTableDropDownButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  // className: PropTypes.string,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      actionFn: PropTypes.func,
    })
  ),
  // right: PropTypes.bool,
};
