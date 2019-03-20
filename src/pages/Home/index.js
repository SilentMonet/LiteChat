import React from "react";
import Chats from "./Chats";
import Contacts from "./Contacts";
import Discover from "./Discover";
import Me from "./Me";
import styles from "./index.module.scss";

class Home extends React.PureComponent {
  state = {
    swipeDirection: undefined,
    lastTouchX: -1,
    lastTouchY: -1,
    touchStartTime: 0,
    translateDistance: 0,
    transitionOn: false,
    HandleTouchMoveOn: true
  };

  clientWidth = document.body.clientWidth;
  setTranslateDistance = translateDistance => {
    let canTranslate = !(
      translateDistance > 0 || translateDistance < this.clientWidth * -3
    );
    if (canTranslate) {
      this.setState({ translateDistance: translateDistance });
    }
  };
  render() {
    let Green = { r: 0x8, g: 0xc1, b: 0x61 },
      progress = -this.state.translateDistance / this.clientWidth;
    let tabTagColors = ["", "", "", ""].map((value, index) => {
      if (index === Math.floor(progress)) {
        return `rgb(${Math.round(
          Green.r * (1 - (progress % 1) ** 2)
        )},${Math.round(Green.g * (1 - (progress % 1)) ** 2)},${Math.round(
          Green.b * (1 - (progress % 1)) ** 2
        )})`;
      } else if (index === Math.ceil(progress)) {
        return `rgb(${Math.round(Green.r * (progress % 1) ** 2)},${Math.round(
          Green.g * (progress % 1) ** 2
        )},${Math.round(Green.b * (progress % 1) ** 2)})`;
      } else {
        return `rgb(0,0,0)`;
      }
    });
    return (
      <div className={styles.home}>
        <header className={styles.header}>
          <span className={styles.title}>{["轻聊","通讯录","发现","我"][Math.round(progress)]}</span>
          <span className={styles.toolIcon}>s</span>
          <span className={styles.toolIcon}>a</span>
        </header>
        <div
          className={styles["main-container"]}
          style={{
            transform: `translateX(${this.state.translateDistance}px)`,
            transitionDuration: this.state.transitionOn ? "300ms" : "0ms",
            touchAction:
              this.state.swipeDirection === "horizontal" ? "none" : "auto"
          }}
          onTouchStart={e => {
            this.setState({
              lastTouchX: e.touches[0].screenX,
              lastTouchY: e.touches[0].screenY,
              touchStartTime: e.timeStamp,
              transitionOn: false,
              HandleTouchMoveOn: true
            });
          }}
          onTouchMove={
            this.state.HandleTouchMoveOn
              ? e => {
                  let { screenX, screenY } = e.touches[0];
                  switch (this.state.swipeDirection) {
                    case undefined:
                      if (
                        Math.abs(screenX - this.state.lastTouchX) >
                        Math.abs(screenY - this.state.lastTouchY)
                      ) {
                        this.setState({ swipeDirection: "horizontal" });
                        this.setTranslateDistance(
                          screenX -
                            this.state.lastTouchX +
                            this.state.translateDistance
                        );
                        this.setState({
                          lastTouchX: screenX,
                          lastTouchY: screenY
                        });
                      } else {
                        this.setState({ HandleTouchMoveOn: false });
                      }
                      break;
                    case "horizontal":
                      this.setTranslateDistance(
                        screenX -
                          this.state.lastTouchX +
                          this.state.translateDistance
                      );
                      this.setState({
                        lastTouchX: screenX,
                        lastTouchY: screenY
                      });
                      break;
                    default:
                  }
                }
              : null
          }
          onTouchEnd={e => {
            let translateDistance;
            if (e.timeStamp - this.state.touchStartTime < 300) {
              if (
                (-this.state.translateDistance % this.clientWidth) /
                  this.clientWidth >
                0.5
              )
                translateDistance =
                  Math.ceil(this.state.translateDistance / this.clientWidth) *
                  this.clientWidth;
              else
                translateDistance =
                  Math.floor(this.state.translateDistance / this.clientWidth) *
                  this.clientWidth;
            } else {
              translateDistance =
                Math.round(this.state.translateDistance / this.clientWidth) *
                this.clientWidth;
            }
            this.setState(
              {
                swipeDirection: undefined,
                HandleTouchMoveOn: true,
                transitionOn: true
              },
              () => {
                this.setTranslateDistance(translateDistance);
              }
            );
          }}
          onTransitionEnd={() => {
            this.setState({ transitionOn: false });
          }}
        >
          <Chats />
          <Contacts />
          <Discover />
          <Me />
        </div>
        <footer className={styles.footer}>
          <button
            className={styles.tabTag}
            style={{
              color: tabTagColors[0]
            }}
            onClick={() => this.setTranslateDistance(this.clientWidth * 0)}
          >
            chats
          </button>
          <button
            className={styles.tabTag}
            style={{ color: tabTagColors[1] }}
            onClick={() => this.setTranslateDistance(this.clientWidth * -1)}
          >
            contacts
          </button>
          <button
            className={styles.tabTag}
            style={{ color: tabTagColors[2] }}
            onClick={() => this.setTranslateDistance(this.clientWidth * -2)}
          >
            discover
          </button>
          <button
            className={styles.tabTag}
            style={{ color: tabTagColors[3] }}
            onClick={() => this.setTranslateDistance(this.clientWidth * -3)}
          >
            me
          </button>
        </footer>
      </div>
    );
  }
}

export default Home;
