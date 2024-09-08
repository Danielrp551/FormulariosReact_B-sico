import { useRef, useState } from 'react'

import "./App.scss"
import Form from './components/Form'
import Input from './components/Input'
import Submit from './components/Submit'
import Textarea from './components/Textarea'
import Select from './components/Select'




const App = () => {

  const form = useRef()

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

    fetch("http://localhost:3050/leads", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(respuesta => respuesta.json)
      .then(respuesta => console.log(respuesta))
      .catch(error => console.log(error))

    console.log(data)
  }

  return (
    <Form submit={submit} formRef={form}>
      <Input
        type="text"
        name="fullname"
        label="Nombres"
        defaultValue=""
      />
      <Input
        type="email"
        name="correo"
        label="Correo electrónico"
        defaultValue=""
      />
      <Input
        type="number"
        name="age"
        label="Edad"
        defaultValue=""
      />
      <Input
        type="range"
        name="ranking"
        label="Calificación"
        defaultValue=""
      />            
      <Textarea
        name="obs"
        label="Observaciones"
        defaultValue=""
      />
      <Select label="País" name="country" options={
        [{val: "PE", content:"Perú"},{val: "CO", content:"Colombia"},{val:"BO", content:"Bolivia"}]
      }/>
      <Input type="checkbox" name="active" checked label="¿Activo?"/>
      <Submit value="Guardar" />
    </Form>    
  )
}

export default App
