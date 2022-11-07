import { authReducer, types } from "../../../src/auth";

describe('Pruebas en AuthReducer', () => {


    test('debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    });

    test('debe llamar login(), autenticar y establecer el usuario', () => {
        const action = {
            type: types.login,
            payload: {
                id: 1,
                name: 'John'
            }
        };

        const state = authReducer({logged: true}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('debe llamar logout(), borrar el nombre del usuario y logged en false', () => {
        const initialState = {
            logged: true,
            user: {
                id: 1,
                name: 'John'
            }
        }
        
        const action = {
            type: types.logout
        };

        const state = authReducer(initialState, action);
        expect(state).toEqual({
            logged: false
        });
    });
});