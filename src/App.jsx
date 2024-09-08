import { useEffect, useRef, useState } from 'react'

import "./App.scss"
import Form from './components/Form'
import Input from './components/Input'
import Submit from './components/Submit'
import Textarea from './components/Textarea'
import Select from './components/Select'




const App = () => {

  const form = useRef()

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("http://localhost:3050/leads/c89f")
    .then(respuesta => respuesta.json())
    .then(data => setUser(data))
    .catch(error => console.log(error))
  }, []) // se ejecutará solo una vez

  const submit = (e) => {
    e.preventDefault()
    const f = form.current
    const data = {
      fullname: f.fullname.value,
      correo: f.correo.value,
      age: f.age.value,
      ranking: f.ranking.value,
      obs: f.obs.value,
      country: f.country.value,
      active: f.active.checked // ya que es cb
    }

    fetch("http://localhost:3050/leads/c89f", {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(respuesta => respuesta.json)
      .then(respuesta => {
        console.log(respuesta)
        f.reset()
        alert("Los datos fueron guardados")
      })
      .catch(error => console.log(error))

    console.log(data)
  }

  return (
    <Form submit={submit} formRef={form}>
      <Input
        type="text"
        name="fullname"
        label="Nombres"
        defaultValue={user.fullname}
      />
      <Input
        type="email"
        name="correo"
        label="Correo electrónico"
        defaultValue={user.correo}
      />
      <Input
        type="number"
        name="age"
        label="Edad"
        defaultValue={user.age}
      />
      <Input
        type="range"
        name="ranking"
        label="Calificación"
        defaultValue={user.ranking}
      />            
      <Textarea
        name="obs"
        label="Observaciones"
        defaultValue={user.obs}
      />
      <Select label="País" name="country" defaultValue={user.country} options={
        [{val: "PE", content:"Perú"},{val: "CO", content:"Colombia"},{val:"BO", content:"Bolivia"}]
      }/>
      <Input type="checkbox" name="active" checked label="¿Activo?" defaultValue={user.active}/>
      <Submit value="Guardar" />
    </Form>    
  )
}

export default App
