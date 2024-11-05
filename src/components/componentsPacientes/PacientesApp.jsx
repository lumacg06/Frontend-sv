// src/PacientesApp.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './PacientesApp.css'; // Asegúrate de tener este archivo CSS para los estilos

const PacientesApp = () => {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/pacientes');
        setPacientes(response.data);
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message,
        });
      } finally {
        setLoading(false);
      }
    };

    Swal.fire({
      title: 'Cargando...',
      text: 'Por favor espera mientras se cargan los pacientes.',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    fetchPacientes().then(() => {
      Swal.close();
    });
  }, []);

  if (loading) return null; // No mostrar nada mientras se carga

  return (
    <div className="pacientes-app-container">
      <h1 className="pacientes-app-title">Lista de Pacientes</h1>
      <ul className="pacientes-list">
        {pacientes.map((paciente) => (
          <li key={paciente.id} className="paciente-item">
            {paciente.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PacientesApp;