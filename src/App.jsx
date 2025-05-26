import { useState, useEffect } from 'react'
import './App.module.css'
import { api } from './api/api'
import { useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const storageUser = localStorage.getItem('user')
    if(storageUser){
      setUser(JSON.parse(storageUser))
      navigate('/userslist')
    }
  }, [navigate])

  const handleLogin = async(e) => {
    e.preventDefault()
    try {
      const response = await api.post('/login', {email, password})
      const user = response.data

      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      navigate('/usersList')
      console.log(response.data)
    } catch (error) {
      setMessage('Erro no login: ' + (error.response.data?.message || 'verifique os dados'))
    }
  }

  return (
    <div style={{padding: "2rem"}}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <button type="submit">entrar</button>
      <p>{message}</p>
      </form>
    </div>
  )
}

export default App