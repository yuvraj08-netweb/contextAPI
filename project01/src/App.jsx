import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
function App() {

  return (
    <UserContextProvider>
     <h1>I am inside the context</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
