import React from 'react'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'
import { shallow } from 'enzyme'


describe('<Notifications />', () => {
    it('Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.exists()).toBe(true)
    })

    it('Notifications renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.text()).toContain('Here is the list of notifications')
    })

    it('Notifications renders NotificationItem element', () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.find(NotificationItem).exists()).toBe(true)
    })

    it('Reder the first NotificationItem with the right html', () => {
        const wrapper = shallow(<Notifications />)
        const FirstNotificationItem = wrapper.find(NotificationItem).first()
        expect(FirstNotificationItem.prop('type')).toBe('default')
        expect(FirstNotificationItem.prop('value')).toBe('new course available')
    })
})