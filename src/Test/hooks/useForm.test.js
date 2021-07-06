import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('Tests on file useForm', () => {
    
    const initialForm = {
        name: 'Víctor',
        email: 'viktorb.132@gmail.com'
    }

    test('should return a default form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInoutChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInoutChange).toEqual('function');
        expect(typeof reset).toEqual('function');
    })
    
    test('should change the value of the form (change the name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInoutChange] = result.current;
        act(() => {
            handleInoutChange({ target: { value: 'Brenda', name: 'name' } })
        })
        const [values] = result.current;
        expect(values).toEqual({...initialForm, name: 'Brenda'})
    })
    
    test('should reset the value of the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInoutChange, reset] = result.current;
        act(() => {
            handleInoutChange({ target: { value: 'Brenda', name: 'name' } })
            reset()
        })
        const [values] = result.current;
        expect(values).toEqual(initialForm)
    })
    
})
