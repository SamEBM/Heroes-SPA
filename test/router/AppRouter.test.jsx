import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en <AppRouter />', () => {
    test('debe de mostrar el login si no está autenticado', () => {
        const contextValue = { logged: false };
        
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        // Se debe renderizar la pantalla de Login
        expect(screen.getByText('Login')).toBeTruthy();
    });

    test('debe mostrar el componente de marvel si está autenticado', () => {
        const contextValue = { logged: true, user: {id: 1, name: 'John'} };
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        // Se debe renderizar la pantalla de Marvel Heroes
        expect(screen.getByText('Marvel Heroes')).toBeTruthy();
    });
});