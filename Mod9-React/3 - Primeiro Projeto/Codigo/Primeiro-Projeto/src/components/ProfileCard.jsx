// src/components/ProfileCard.jsx
import React from 'react';

// 1. Receba as "props" (propriedades) como argumento da função.
const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      {/* 2. Use as props para exibir os dados */}
      <img
        src={props.fotoUrl}
        alt={`Foto de perfil de ${props.nome}`}
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
      <h2>{props.nome}</h2>
      <p>Profissão: {props.profissao}</p>
      <p>Idade: {props.idade} anos</p>
      <button onClick={() => alert(`Você clicou no perfil de ${props.nome}`)}>
        Ver Detalhes
      </button>
    </div>
  );
};

export default ProfileCard;