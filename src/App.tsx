import { useEffect, useRef, useState } from 'react';
import { ListSubs, Form } from './components';
import './index.css'
import { INITIAL_STATE } from './constants';
import { Sub } from './constants/types';

// Es buena idea centralizar el tipo de los estados, ya que  estos suelen ser más complejos
interface AppState {
  subs: Sub[]
}

function App() {
  // BP: Es buena práctica no pasar directamente el setSubs del state, así no nos acostumbramos a utilizar el namespace React para todos los tipos. 
  const [ subs, setSubs ] = useState<AppState['subs']>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  },[])

  // El useRef suele ser problematico, una forma de solucionarlo es tiparlo de la siguiente forma 
  const divRef = useRef<HTMLDivElement>(null)
  // Lo anterior evitará que al pasarlo genere errores de mutabilidad, es importante que se establezca un valor inicial, como en el caso anterior, que se definió null

  // Para evitar pasar el set del state podemos realizar lo siguiente
  const handleNewSub = ( newSub : Sub ): void => {
    setSubs( subs => ([ ...subs, newSub ]))
  }
  
  return (
    <div className="App bg-purpleLight min-h-screen font-spaceGrotesk" ref={ divRef }>
      <div className='transparent h-10'></div>
      <header className='p-5 flex-center border-gray-800 border-2 bg-white rounded-xl mx-5'>
        <h1 className='text-4xl font-bold text-center text-gray-800 uppercase' >Luissdev subs</h1>
      </header>

      <main className='container flex flex-col justify-center items-center py-5 mx-auto'>
        <ListSubs subs={ subs } />
        {/* Evitar pasar directamente el set del state
        <Form onNewSub={ setSubs }/>

        Mejor practica es
        */}
        <Form onNewSub={ handleNewSub} />

      </main>
      <footer className='flex-center flex-col py-3 footer'>
        <small className='text-center text-gray-600'>Todos los derechos reservados</small>
        <small className='text-gray-600'>{ new Date().getFullYear() }</small>
      </footer>
    </div>
  );
}

export default App;
