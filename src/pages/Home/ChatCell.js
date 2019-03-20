import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import styles from "./chatCell.module.scss";
export default class ChatCell extends PureComponent {
  render() {
    return (
      <Link className={styles.chatCell} to={`/chat/${this.props.data.id}`}>
        <div className={styles.icon} style={{ backgroundImage: `url(${this.props.data.avatar_url})` }} />
        <div>
          <p>{this.props.data.name}</p>
          <p>unread</p>
        </div>
      </Link>
    )
  }
}
