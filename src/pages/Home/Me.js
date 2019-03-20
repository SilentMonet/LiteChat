import React, { PureComponent } from 'react'
import styles from "./me.module.scss";
export default class Me extends PureComponent {
  render() {
    return (
      <main className={styles.me}>
        Me
      </main>
    )
  }
}
