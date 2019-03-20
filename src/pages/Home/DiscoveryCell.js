import React, { PureComponent } from 'react'
import styles from "./DiscoveryCell.module.scss";

export default class DiscoveryCell extends PureComponent {
  render() {
    return (
      <a className={styles.discoveryCell} href={this.props.data.path}>
        <span className={styles.icon}></span>
        <span className={styles.name}>{this.props.data.name}</span>
        <span className={styles.digestBadge}><span className={styles.badgeDot}/></span>
        <span className={styles.arrow}></span>
      </a>
    )
  }
}
