import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test on conponente <HomeScreen />', () => {
    
    // Como definir un contexto en un entorno aislado
    const user = {
        name: 'Victor',
        email: 'viktorb.132@gmail.com'
    }
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should show itself correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
