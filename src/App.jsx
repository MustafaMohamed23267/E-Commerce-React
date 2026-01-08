
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'
import { Loading } from './Components/Loading'

function App() {
  const Home = lazy(()=>import('./pages/Home'));
    const Notfound = lazy(()=>import('./pages/Notfound'));

  return (
    <>
     <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
      </Suspense>
     </BrowserRouter>
    </>
  )
}

export default App
