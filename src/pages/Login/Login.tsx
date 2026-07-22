import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Invest Empire</h1>
        <p>Construa sua fortuna.</p>

        <input
          type="email"
          placeholder="E-mail"
        />

        <input
          type="password"
          placeholder="Senha"
        />

        <button>Entrar</button>

        <span>
          Não possui conta?
        </span>

        <a href="/register">
          Criar Conta
        </a>

      </div>
    </div>
  );
}
