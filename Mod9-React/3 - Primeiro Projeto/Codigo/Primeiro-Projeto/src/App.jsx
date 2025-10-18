// src/App.jsx

import './App.css'
import ProfileCard from './components/ProfileCard' // 1. Importe o componente

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>Lista de Perfis de Usuários</h1>

      {/* 2. Crie e use o ProfileCard, passando as props */}
      <ProfileCard
        nome="Maria Silva"
        profissao="Desenvolvedora Front-end"
        idade={28}
        fotoUrl="https://img.freepik.com/fotos-premium/rosto-de-retrato-de-beleza-de-mulher-loira-olhando-a-camera-isolada-no-branco-studio-shot_431835-4125.jpg?semt=ais_hybrid&w=740&q=80"
      />

      {/* 3. Crie outro cartão com dados diferentes */}
      <ProfileCard
        nome="João Santos"
        profissao="UX Designer"
        idade={35}
        fotoUrl="https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
      />

      {/* Desafio: Peça aos alunos para criar o terceiro! */}
    </div>
  )
}

export default App