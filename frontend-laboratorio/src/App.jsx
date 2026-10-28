import { useState } from 'react';
import './App.css';

function App() {
  const [resultado, setResultado] = useState('Presione el botón para consultar la API.');
  const [cargando, setCargando] = useState(false);

  // Reemplaza esta URL por la URL pública de tu backend en Render
  const API_URL = 'https://laboratorio-lvhq.onrender.com/api/mensaje';

  const consultarBackend = async () => {
    setResultado('Consultando...');
    setCargando(true);
    try {
      const respuesta = await fetch(API_URL);
      if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
      const datos = await respuesta.json();
      setResultado(JSON.stringify(datos, null, 2));
    } catch (error) {
      setResultado('No se pudo consultar la API: ' + error.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="card">
      <h1>Laboratorio de despliegue</h1>
      <p>Frontend en React publicado en Vercel</p>
      <button onClick={consultarBackend} disabled={cargando}>
        {cargando ? 'Cargando...' : 'Consultar backend'}
      </button>
      <pre>{resultado}</pre>
    </main>
  );
}

export default App;