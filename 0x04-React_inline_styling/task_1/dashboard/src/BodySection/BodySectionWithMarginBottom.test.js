import React from "react"
import { shallow } from "enzyme"
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom"
import { StyleSheetTestUtils } from 'aphrodite' // Import StyleSheetTestUtils

// Add this line to suppress style injection
StyleSheetTestUtils.suppressStyleInjection()

describe("<BodySectionWithMarginBottom />", () => {
  it("BodySectionWithMarginBottom renders without crashing", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />)
    expect(wrapper).toBeDefined()
  })

  it("BodySectionWithMarginBottom renders the correct title", () => {
    const title = "Test Title"
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title} />
    )
    expect(wrapper.find("h2").text()).toEqual(title)
  })

  it("BodySectionWithMarginBottom renders children correctly", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom>
        <p>Test Children</p>
      </BodySectionWithMarginBottom>
    )
    expect(wrapper.contains(<p>Test Children</p>)).toBe(true)
  })
})
