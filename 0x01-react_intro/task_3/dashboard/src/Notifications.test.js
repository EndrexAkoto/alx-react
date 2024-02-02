// task_3/dashboard/src/Notifications.test.js
import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'

describe('Notifications Tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('li')).toHaveLength(3)
  })

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />)
    const text = 'Here is the list of notifications'
    expect(wrapper.text()).toContain(text)
  })
})
