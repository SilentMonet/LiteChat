import React, { PureComponent } from "react";
import DiscoveryCell from "./DiscoveryCell";
import styles from "./discover.module.scss";
export default class Discover extends PureComponent {
  render() {
    let discoveries = [
      { name: "朋友圈" },
      [{ name: "扫一扫" }, { name: "摇一摇" }]
    ];
    return (
      <main className={styles.discover}>
        {discoveries.map(item => {
          if (item instanceof Array) {
            return (
              <div className={styles.discoveryCellsGroup}>
                {item.map(subItem => (
                  <DiscoveryCell data={subItem} />
                ))}
              </div>
            );
          } else {
            return <DiscoveryCell data={item} />;
          }
        })}
      </main>
    );
  }
}
