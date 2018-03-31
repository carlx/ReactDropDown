import React from 'react';
import PropTypes from 'prop-types';

class WatchDocumentEvents extends React.Component {
  componentWillMount() {
    window.document.addEventListener('click', this.handleClick);
    window.document.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
        // remember to remove all events to avoid memory leaks
    window.document.removeEventListener('click', this.handleClick);
    window.document.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('resize', this.handleResize);
  }

  handleClick = (event) => {
    const { container } = this;
    const { onClickOutside } = this.props;

    const { target } = event;
    if (typeof onClickOutside !== 'function') {
      return;
    }

        // if target is container - container was not clicked outside
        // if container contains clicked target - click was not outside of it
    if (target !== container && !container.contains(target)) {
      onClickOutside(event); // clicked outside - fire callback
    }
  };

  handleResize = () => {
    const { onWindowResize } = this.props;

    if (typeof onWindowResize !== 'function') {
      return;
    }

    onWindowResize();
  };

  handleKeyUp = (event) => {
    const { onEscapeKey } = this.props;
    if (typeof onEscapeKey !== 'function') {
      return;
    }
    if (event.keyCode === 27) {
      onEscapeKey(event);
    }
  };

  render() {
    return (
      <div ref={(el) => { this.container = el; }}>
        {this.props.children}
      </div>
    );
  }
}

WatchDocumentEvents.propTypes = {
  onClickOutside: PropTypes.func,
  onWindowResize: PropTypes.func,
  onEscapeKey: PropTypes.func,
  children: PropTypes.node,
};

export default WatchDocumentEvents;
