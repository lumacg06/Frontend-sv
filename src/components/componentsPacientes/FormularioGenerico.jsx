// src/FormularioGenerico.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import './FormularioGenerico.css'; 

const FormularioGenerico = ({ fields, apiUrl, onSuccess }) => {
  const [formData, setFormData] = useState(() => {
    const initialState = {};
    fields.forEach(field => {
      initialState[field.name] = '';
    });
    return initialState;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, formData);
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Los datos han sido registrados correctamente.',
      });
      if (onSuccess) onSuccess(response.data);
      setFormData(() => {
        const resetState = {};
        fields.forEach(field => {
          resetState[field.name] = '';
        });
        return resetState;
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al registrar los datos: ' + err.message,
      });
    }
  };

  return (
    <div className="formulario-generico-container">
      <h1 className="formulario-generico-title">Formulario Genérico</h1>
      <form onSubmit={handleSubmit} className="formulario-generico-form">
        {fields.map((field) => (
          <div key={field.name} className="formulario-generico-field">
            <label className="formulario-generico-label">{field.label}:</label>
            {field.type === 'select' ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="formulario-generico-select"
              >
                <option value="">Seleccione</option>
                {field.options.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="formulario-generico-input"
              />
            )}
          </div>
        ))}
        <button type="submit" className="formulario-generico-submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioGenerico;