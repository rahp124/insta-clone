import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayouts from "./Layouts/PageLayouts/PageLayouts"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"
function App() {
  const [authUser] = useAuthState(auth);
  return (
    <PageLayouts>
      <Routes>
        <Route path = '/' element = {authUser ? <HomePage/> : <Navigate to="/auth"/>}></Route>
        <Route path = '/auth' element = {!authUser ? <AuthPage/> : <Navigate to="/"/>}></Route>
        <Route path = '/:username' element = {<ProfilePage/>}></Route>
      </Routes>
    </PageLayouts>
  )
}

export default App
