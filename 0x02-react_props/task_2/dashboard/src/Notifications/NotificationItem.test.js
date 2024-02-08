import React from 'react'
import NotificationItem from './NotificationItem'
import { shallow } from 'enzyme'

describe('<NotificationItem />', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />)
        expect(wrapper.exists()).toBe(true)
    })

    it('Notifications render the correct html with type and value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />)
        expect(wrapper.text()).toBe("test")
        expect(wrapper.prop('data-notification-type')).toBe("default")
    })
})