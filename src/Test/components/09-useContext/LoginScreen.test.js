import React from 'react';
import { mount } from "enzyme"
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests on component <LoginScreen />', () => {

    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('should show itself correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should execute setUser with expected argument', () => {
        // wrapper.find('button').simulate('click');
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({name: 'victor', id: 54321})
    })
    
})
