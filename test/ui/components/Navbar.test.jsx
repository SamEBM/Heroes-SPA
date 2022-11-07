import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

// Para poder verificar que se ejecuta el navigate --------

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

// --------------------------------------------------------

describe('Pruebas en <Navbar />', () => {
    const contextValue = { 
        logged: true, 
        user: {id: 1, name: 'John'},
        logout: jest.fn()
    };

    beforeEach(() => jest.clearAllMocks());

    test('debe mostrar el nombre del usuario loggeado', () => {
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText(contextValue.user.name)).toBeTruthy();
    });

    test('debe ejecutarse el logout y navigate', () => {
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const button = screen.getByText('Logout');
        fireEvent.click(button);

        //Verificar que se ejecuta la función definida en el Navbar:
        // const onLogout = () => {
        //     logout();
        //     navigate('/login', {replace: true});
        // };

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', {replace: true});
    });
});