import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
function App() {
  return (
    <div className={style.AppStyle}>
      {/* como renderizar um componente criado index.tsx que é um botão */}
      <Formulario/>
      <Lista/>
    </div>
  );
}

export default App;
