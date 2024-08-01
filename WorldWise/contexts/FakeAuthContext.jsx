import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initalState  = {
    user: null,
    isAuthenticate: false
}

function reducer(state, action) {
    switch(action.type) {
        case "login":
            return {...state, user: action.payload,
                isAuthenticated: true
            };
        case "logout":
            return {...state, user: null,
                isAuthenticated: false
            };
        default:
            throw new Error("Unknown action");
    }
}

function AuthProvider({ children }) {
    const[user, isAuthenticated, dispatch] = useReducer(reducer, initalState)

    function login(email, password) {}

    function logout() {}

    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext);
    if(context === undefined)
        throw new Error("AuthContext was used outside AuthProvider");
}