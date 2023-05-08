import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    return (
      this.props.value ? 
      <li
      data-notification-type={this.props.type}
      onClick={()=> this.props.markAsRead(this.props.id)}
      >{this.props.value}</li> 
      :
      <li
      data-notification-type={this.props.type}
      dangerouslySetInnerHTML={this.props.html}
      ></li> 
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {
    console.log('empty');
  },
  id: 0
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;
