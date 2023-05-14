
const GlobalFunction = {
    logout(){
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('phone')
        localStorage.removeItem('photo')
        localStorage.removeItem('token')
    }
}

export default GlobalFunction