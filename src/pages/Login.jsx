import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // тестовая авторизация если че
    const success = email === "admin@mail.com" && password === "1234"

    if (success) {
      navigate("/dashboard")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="login-container">
      <form className="glass-card fade-in" onSubmit={handleSubmit}>
        <div className="logo"><img src="../src/pages/1.png" alt="ICB" /></div>
        <h2 className="title"><br/><br/>Авторизация</h2>

        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Почта</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Пароль</label>
        </div>

        <button className="glass-button">Войти</button>
      </form>
    </div>
  )
}

export default Login
