import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
function App() {
  const [tarefas,setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
},{
    tarefa: 'JavaScript',
    tempo: '01:00:00'
},{
    tarefa: 'TypeScript',
    tempo: '03:00:00'
}]);
  return (
    <div className={style.AppStyle}>
      {/* como renderizar um componente criado index.tsx que é um botão */}
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
