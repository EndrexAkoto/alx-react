import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  static propTypes = {
    __html: PropTypes.shape({
      html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number,
  };

  static defaultProps = {
    type: "default",
    markAsRead: () => {},
    id: 0,
  };

  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={() => markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            data-notification-type={type}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
}

export default NotificationItem;
