import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test on componente <AppRouter />', () => {
    
    const user = {
        id: 1,
        name: 'Victor'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('should show itself correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
})
