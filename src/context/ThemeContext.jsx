import { children, createContext,useContext,useReducer } from "react";

const ThemeContext = createContext() // themecontext created globally

const initialState = {
    isDark : false,
    fontSize: 'Medium'
}

const themeReducer = (state,action)=>{
    switch(action.type){
        case 'TOGGLE_THEME':
            return { ...state,isDark : !state.isDark }
        case 'SET_FONT_SIZE':
            return { ...state,fontSize : action.payload }
        default:
            return state
    }
}

export const ThemeProvider = ({children})=>{
     const [state,dispatch] = useReducer(themeReducer,initialState)
     return <ThemeContext.Provider value={{state,dispatch}}>{children}</ThemeContext.Provider>
}

export const useTheme = () =>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error('useTheme must be used with a themePrvider')
    }
    return context
}
