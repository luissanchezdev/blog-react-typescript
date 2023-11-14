import { Sub } from "../constants/types"
import useNewSubForm from "../hooks/useNewSubForm"

interface FormProps {
  onNewSub: ( newSub : Sub ) => void
}
function Form({ onNewSub } : FormProps) {

  /* const [ inputValues, setInputValues ] = useState<FormState['inputValues']>(INITIAL_STATE) */

  const [ inputValues, distpach ] = useNewSubForm()

  const handleClearForm = () => {
    distpach({
      type: "clear"
    })
  }

  // Manejor de eventos
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub( inputValues )
    handleClearForm()
  }

  // BP: Interesante práctica para encontrar el tipo de evento que se recibe ya que este cambia dependiendo del contexto. Para realizar esto se paso la funcion del handleChange al onChange del input y acciendo hover sobre la variable del evento se puede ver el tipo de evento que se recibe 
  /*
  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name] : e.target.value
    })
  */ 
  // Ahora con reducer
  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    distpach({
      type: "change_value",
      payload: {
        inputName: e.target.name,
        inputValue: e.target.value
      }
    })
}

  return (
    <>
      <form onSubmit={ handleSubmit } className="md:max-w-md mx-auto px-5 md:px-0">
        <input onChange={ handleChange } value={ inputValues.nick } className="input focus:border-gray-500 focus:border-2" type='text' name='nick' placeholder='nick' />
        <input onChange={ handleChange } value={ inputValues.subMonths } className="input focus:border-gray-500 focus:border-2" type='text' name='subMonths' placeholder='subMonths' />
        <input onChange={ handleChange } value={ inputValues.avatar } className="input focus:border-gray-500 focus:border-2" type='text' name='avatar' placeholder='avatar' />
        <textarea onChange={ handleChange } value={ inputValues.description } className="input" name='description' placeholder='description' />
        <button type="submit" className="btn">Save new sub!</button>
        <button type="button" onClick={ handleClearForm } className="btn">Clear</button>
      </form>
    </>
  )
}

export default Form
