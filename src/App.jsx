
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense, useContext } from 'react'
import { Loading } from './Components/Loading'
//import { useDispatch, useSelector } from 'react-redux';
import{GetUser} from './pages/Login/AuthSlice';
import { AppContext } from './Context/AppContext';

  const Home = lazy(()=>import('./pages/Home'));
  const Login = lazy(()=>import('./pages/Login/Login'));
  const Register = lazy(()=>import('./pages/Register'));
  const Cart = lazy(()=>import('./pages/Cart/Cart'));
  const AddProducts = lazy(()=>import('./pages/Products/AddProducts/AddProducts'));
  const Notfound = lazy(()=>import('./pages/Notfound'));


function App() {


            
          //   const dispatch = useDispatch();
          //   useEffect(()=>
          //     {
               
          //       dispatch(GetUser());
          //     },[dispatch]);
          //  const {user} = useSelector((state)=>state.auth);

           const {user} = useContext(AppContext);
   
    

  return (
    <>
     <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='*' element={<Notfound/>} />

          <Route path='/login' element={user&&user.id?<Home/>:<Login/>} />
          <Route path='/register' element={user&&user.id?<Home/>:<Register/>}/>
          <Route path='/cart'  element={<Cart/>}/>
          <Route path='/addproduct' element={<AddProducts/>}/>

        </Routes>
      </Suspense>
     </BrowserRouter>
    </>
  )
}

export default App
