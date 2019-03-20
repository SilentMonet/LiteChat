import React, { PureComponent } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
export default class ContactProfile extends PureComponent {
  render() {
    return (
      <div className={styles.contactProfile}>
        <header className={styles.header} />
        <div className={styles.container}>
          <div className={styles.intrCell}>
            <div className={styles.avatar} />
            <div className={styles.info}>
              <p className={styles.name}>aaa</p>
              <p className={styles.markup}>bbbb</p>
              <p className={styles.id}>id</p>
              <p className={styles.location}>henu</p>
            </div>
          </div>
          <div className={styles.intrCell}><Link to={`/chat/${this.props.match.params.id}`}>{this.props.match.params.id}</Link></div>
        </div>
      </div>
    );
  }
}
