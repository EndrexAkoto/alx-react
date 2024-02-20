import React from 'react'
import App from './App'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import { shallow } from 'enzyme'

describe('<App />', () => {
    it('App renders without crashing', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).toBeDefined()
    })
    
    it('App contains Header component', () => {
        const wrapper = shallow(<App />)
        const component = wrapper.find(Header)
        expect(component.exists()).toBe(true)
    })
    
    it('App contains Login component', () => {
        const wrapper = shallow(<App />)
        const component = wrapper.find(Login)
        expect(component.exists()).toBe(true)
    })
    
    it('App contains Footer component', () => {
        const wrapper = shallow(<App />)
        const component = wrapper.find(Footer)
        expect(component.exists()).toBe(true)
    })

    it('Calls logOut and displays alert when control and h keys are pressed', () => {
        const logOutMock = jest.fn()
        const wrapper = shallow(<App logOut={logOutMock} />)
        
        const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true })
        document.dispatchEvent(event)

        expect(logOutMock).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith('Logging you out')
    })
})
