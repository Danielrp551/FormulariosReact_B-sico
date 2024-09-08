import { useRef } from "react"

const useForm = (data = {}) => {

    const myRef = useRef()

    const submit = e => {
        e.preventDefault() // para que no carge la pagina
        alert("Bienvenido")
        console.log(myRef.current.email.value)
        console.log(myRef.current.password.value)
        // Aquí se envía los datos a una API, etc
      }   
      
    return [data, myRef, submit]  
}

export default useForm