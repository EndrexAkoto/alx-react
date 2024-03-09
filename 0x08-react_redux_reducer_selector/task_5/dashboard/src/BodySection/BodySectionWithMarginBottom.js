import React from "react"
import { StyleSheet, css } from "aphrodite"
import BodySection from "./BodySection"

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(styles.BodySectionWithMarginStyle)}>
        <BodySection {...this.props} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  BodySectionWithMarginStyle: {
    marginBottom: '40px'
  }
})

export default BodySectionWithMarginBottom
