import React, { PureComponent } from 'react'
import {connect} from "react-redux"
import ChatCell from "./ChatCell";
import styles from "./chats.module.scss";
let mapState = state => ({
  chats: state.chats
});
class Chats extends PureComponent {
  render() {
    console.log(this.props.chats);
    return (
      <main className={styles.chats}>
        {this.props.chats[0]&&<ChatCell data={this.props.chats[0]} />}
      </main>
    )
  }
}
export default  connect(mapState)(Chats)