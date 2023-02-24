import { useContext } from 'react'
import { BackgroundContext } from '../../context/ColorPag'



export const UseBackgroundContext = ()=>{
    const context = useContext(BackgroundContext)
    
    if(!context){
        console.log('nao encontramos')
    }
    return context
}