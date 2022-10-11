import SignUp from './pages/SIGN UP/SignUp'
import "./App.scss"
import SignIn from './pages/SIGN IN/SignIn'
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MAINPAGE/MainPage'
import { useContext } from 'react';
import Contact from './pages/CONTACT/Contact'
// import { AuthContext } from './CONTEXT/AuthContext'
import { AuthContext } from './context/AuthContext'

function App() {
  const {currentUser} = useContext(AuthContext)
 
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/signin' />
    } 

    return children
  }

  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/' element={<ProtectedRoute>
            <MainPage />
            <Contact/>
          </ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
