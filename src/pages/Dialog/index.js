import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import styles from "./index.module.scss";
let p1 = require("../../assets/data.json");
let mapDispatch = dispatch => ({
  add:()=>dispatch({type:"ADD_CHAT",data:p1})
})
class Dialog extends PureComponent {
  state = { value: '' }

  render() {

    return (
      <div className={styles.dialog}>

        <header className={styles.header}/>
        <main className={styles.main}/>
        <div className={styles.editBar}>
          <div className={styles.voiceIcon} />
          <input className={styles.inputBar} value={this.state.value} onChange={e=>this.setState({value:e.target.value})}/>
          <button className={styles.send} onClick={e=>this.props.add()}>send</button>
        </div>
      </div>
    )
  }
}
export default connect(null,mapDispatch)(Dialog)