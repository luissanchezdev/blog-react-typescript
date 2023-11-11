import { useEffect, useState } from 'react';
import './index.css'
import ListSubs from './components/ListSubs';

function App() {

  // Es buena idea centralizar el tipo de los estados, ya que  estos suelen ser más complejos
  interface AppState {
    subs: Sub[]
  }

  interface Sub {
    nick: string
    subMonths: number
    avatar: string
    description?: string
  }


  const INITIAL_STATE = [
    {
      nick: 'sebas',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=sebas',
      description: 'sebas hace de moderador'
    },
    {
      nick: 'cristina',
      subMonths: 2,
      avatar: 'https://i.pravatar.cc/150?u=cristina'
    }
  ]


  const [ subs, setSubs ] = useState<AppState['subs']>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  },[])
  
  return (
    <div className="App bg-hero min-h-screen">
      <header className='bg-gray-800 text-gray-100 py-10 flex-center'>
        <h1 className='text-4xl font-bold text-center text-greenLight uppercase' >Luissdev subs</h1>
      </header>

      <main className='container mx-auto py-5'>
        <ListSubs subs={ subs } />
      </main>
      <footer className='flex-center flex-col py-3 footer'>
        <p className='text-center text-greenLight'>Todos los derechos reservados</p>
        <p className='text-greenLight'>{ new Date().getFullYear() }</p>
      </footer>
    </div>
  );
}

export default App;
