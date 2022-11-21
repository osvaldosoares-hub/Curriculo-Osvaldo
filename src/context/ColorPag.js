import { createContext, useReducer } from "react";

export const BackgroundContext = createContext()

const Theme = {
    color:'#000',
    
    backgroundHeader:'#dcdcdc',
    body:'',
    colorCurriculo:'#E33F0E'
}

export const BackgroundColorReducer = (state , action)=>{
    switch(action.type){
        case true:
            return {...state , color: "#000",backgroundHeader:'#dcdcdc',colorCurriculo: '#E33F0E'}
         case false:
            return {...state,color: "#dcdcdc",backgroundHeader:'#363636', colorCurriculo:'#dcdcdc'}
         default:
            return state      
    }
}

export const BackgroundContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(BackgroundColorReducer,Theme)
    
    return <BackgroundContext.Provider value={{ ...state,dispatch }}>
        {children}
        </BackgroundContext.Provider>
}