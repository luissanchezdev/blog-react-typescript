import { Sub } from "../constants/types"

// NOTA IMPORTANTE: Evitar tipar todo, usar la inferen de tipos de TS
// Desde está interface también se puede aceptar children
interface Props {
    //children?: React.ReactNode
    //children: JSX.Element | JSX.Element[]
    //children?: () => JSX.Element | JSX.Element[]
    //Se puede hacer de muchas formas
    subs: Array<Sub>
}

// La ventaja de realizarlo de esta forma es que podemos acceder a otras propiedades, tales como children. Al indicar que es del tipo React.FunctionComponent ya me esta permitiendo ha acceder a children
//const  ListSubs : React.FunctionComponent<Props> =( { subs }) => {

function ListSubs( { subs } : Props ) {

  // Otra practica que se ve es la usar una función render, pero no es necesario. Generalmente esto significa que se debe tener otro componente que se encargue de renderizar

  // Recomendacion: siempre colocar tipos a estas funciones. Ya que al hacerlo podemos controlar mejor lo que está sucediendo en el método

  // Recomendacion 2: No tiparlo todo. Eso sí tener cuidado con tipos dinámicos

  const renderList = () : JSX.Element[] => {
     return subs.map(sub => {

        return  (
          <li key={ crypto.randomUUID()} className='flex flex-col justify-cente align-center w-3/4 mx-auto bg-white m-2 rounded-xl'>
            <div className="w-full">
              <img src={ sub.avatar } alt={ sub.nick } className='object-fit object-cover h-72 rounded-md mx-auto w-full'/>
            </div>
            <div className='flex flex-col justify-center py-6 px-2 w-full'>
              <h2 className='text-2xl capitalize space-y-2 font-bold text-center'>{ sub.nick } <span className='text-gray-800'>({ sub.subMonths })</span></h2>
              <p className='text-gray-600 md:h-5 truncate'>{ sub.description?.substring(1,100) }</p>
            </div>
          </li>)
      })
  }

  return (
    <ul className='grid md:grid-cols-3 mx-auto my-5'>
        { renderList() }
        {/* { subs.map(sub => {
        return (
            <li key={ crypto.randomUUID()} className='flex-center flex-col card'>
                <img src={ sub.avatar } alt={ sub.nick } className='object-fit object-cover h-72 rounded-md w-fulll'/>
                <div className='flex flex-col justify-center py-6'>
                <h2 className='text-2xl capitalize space-y-2 font-bold'>{ sub.nick } <span className='text-greenLight'>({ sub.subMonths })</span></h2>
                <p className='text-white'>{ sub.description?.substring(1,100) }</p>
                </div>
            </li>
        )
        })} */}
    </ul>
)
}

export default ListSubs
