export const Perfil = async() =>{
    const perfil = await fetch('https://api.github.com/users/osvaldosoares-hub')
    const response = await perfil.json()
    return response

    
    
}