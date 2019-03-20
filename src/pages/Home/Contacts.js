import React, { PureComponent } from "react";
import ContactCell from "./ContactCell";
import { connect } from "react-redux";
import styles from "./contacts.module.scss";

const mapState = state => ({
    contacts: state.contacts
});

class Contacts extends PureComponent {
  render() {
    return (
      <main className={styles.contacts}>
        <ContactCell contact={this.props.contacts[0]} />
      </main>
    );
  }
}
export default connect(mapState)(Contacts);
