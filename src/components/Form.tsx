import React, { useState } from "react"
import { Sub } from "../constants/types"

interface FormValues {
  inputValues : Sub
}

interface FormProps {
  onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}

function Form({ onNewSub } : FormProps) {

  const [ inputValues, setInputValues ] = useState<FormValues['inputValues']>({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })

  // Manejor de eventos
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub( subs => ([ ...subs, inputValues]))
  }

  // BP: Interesante práctica para encontrar el tipo de evento que se recibe ya que este cambia dependiendo del contexto. Para realizar esto se paso la funcion del handleChange al onChange del input y acciendo hover sobre la variable del evento se puede ver el tipo de evento que se recibe 
  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name] : e.target.value
    })
}

  return (
    <form onSubmit={ handleSubmit } className="md:max-w-md mx-auto">
      <input onChange={ handleChange } value={ inputValues.nick } className="input" type='text' name='nick' placeholder='nick' />
      <input onChange={ handleChange } value={ inputValues.subMonths } className="input" type='text' name='subMonths' placeholder='subMonths' />
      <input onChange={ handleChange } value={ inputValues.avatar } className="input" type='text' name='avatar' placeholder='avatar' />
      <textarea onChange={ handleChange } value={ inputValues.description } className="input" name='description' placeholder='description' />
      <button className="btn">Save new sub!</button>
    </form>
  )
}

export default Form
