import React from 'react'
import { shallow } from 'enzyme' // Import shallow from enzyme
import NotificationItem from './NotificationItem' // Import the component being tested

describe('<NotificationItem />', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />)
        expect(wrapper.exists()).toBe(true)
    })
})

describe("handling events", () => {
    it("onclick event is called with the right id", () => {
      const wrapper = shallow(<NotificationItem />)
      const spy = jest.fn()
  
      wrapper.setProps({ value: "test", markAsRead: spy, id: 1 })
      wrapper.find("li").props().onClick()
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith(1)
      spy.mockRestore()
    })
})
