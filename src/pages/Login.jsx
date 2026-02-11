import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Login.css'
const Login = () => {
    const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    // Тестовые данные (потом заменишь на backend)
    if (email === "admin@mail.com" && password === "1234") {
      localStorage.setItem("auth", "true")
      navigate("/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }
    return (
<div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Войдите в систему</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Войти</button>
      </form>
    </div>
    )
}

export default Login;