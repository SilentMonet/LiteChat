import React, { PureComponent } from 'react'
import { Link} from 'react-router-dom';
import styles from "./contactCell.module.scss";
class ContactCell extends PureComponent {

  render() {
    return (
      <Link className={styles.contactCell} to={`/contact/${this.props.contact.id}`}>
      <span className={styles.avatar} style={{backgroundImage:`url(${this.props.contact.avatar_url})`}}></span>
        <span className={styles.name}>{this.props.contact.markup||this.props.contact.name}</span>
      </Link>
    )
  }
}
export default ContactCell