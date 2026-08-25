// Hooks useEffect e useState
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  //Crie duas const para guardar e carregar tarefas..
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)
  //useEffect com fetch (requisições assíncronas)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=20`)
      .then((response) => response.json())
      .then((dados) => {
        setTarefas(dados) //Salva os dados vindos da API no estado
        setCarregando(false) //Desativa a mensagem carregando
      })
  }, []) // Array vazio para ececutar apenas uma vez ao abrir a tela

  return (
    <main className="container py-4">
      <h1 className="h2 mb-1">Tarefas</h1>
      <p className="text-secondary mb-4">Tarefas vindas da API</p>

      <section className="card shadow-sm">
          {carregando ? (
            <div className="d-flex justify-content-center align-items-center gap-2 p-5 text-secondary">
              <div className="spinner-border spinner-border-sm text-primary" role="status" aria-hidden="true" />
              <span>Carregando tarefas...</span>
            </div>
          ) : (
            <ul className="list-group list-group-flush">
              {tarefas.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center gap-3 px-4 py-3">
                  <span className={item.completed ? 'text-decoration-line-through text-secondary' : ''}>
                    {item.title}
                  </span>
                  <span className={`badge rounded-pill ${item.completed ? 'text-bg-success' : 'text-bg-warning'}`}>
                    {item.completed ? 'Concluída' : 'Pendente'}
                  </span>
                </li>
              ))}
            </ul>
          )}
      </section>
    </main>
  )
}

export default App

