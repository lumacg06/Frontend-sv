import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './RegistroPaciente.css'; // Asegúrate de tener este archivo CSS para los estilos

const RegistroPaciente = () => {
  const [formData, setFormData] = useState({
    paisNacionalidad: '',
    tipoDocumento: '',
    documentoIdentificacion: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimiento: '',
    sexoBiologico: '',
    identidadGenero: '',
    ocupacionMomento: '',
    opocisionPresuncionLegalDonacion: '',
    fechaSuscripcionOposicion: '',
    documentoVoluntadAnticipada: '',
    fechaSuscripcionDocumento: '',
    codigoPrestadorDocumento: '',
    categoria_Discapacidad: '',
    paisResidenciaHabitual: '',
    municipioRecidenciaHabitual: '',
    pertenenciaEtnica: '',
    zonaTerritorialResidencia: '',
    entidadRespondePlanBeneficios: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/pacientes', formData);
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'El paciente ha sido registrado correctamente.',
      });
      setFormData({
        paisNacionalidad: '',
        tipoDocumento: '',
        documentoIdentificacion: '',
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        fechaNacimiento: '',
        sexoBiologico: '',
        identidadGenero: '',
        ocupacionMomento: '',
        opocisionPresuncionLegalDonacion: '',
        fechaSuscripcionOposicion: '',
        documentoVoluntadAnticipada: '',
        fechaSuscripcionDocumento: '',
        codigoPrestadorDocumento: '',
        categoria_Discapacidad: '',
        paisResidenciaHabitual: '',
        municipioRecidenciaHabitual: '',
        pertenenciaEtnica: '',
        zonaTerritorialResidencia: '',
        entidadRespondePlanBeneficios: '',
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al registrar el paciente: ' + err.message,
      });
    }
  };

  return (
    <div className="registro-paciente-container">
      <h1 className="registro-paciente-title">Registro de Pacientes</h1>
      <form onSubmit={handleSubmit} className="registro-paciente-form">
        <div className="form-group">
          <label className="form-label">País Nacionalidad:</label>
          <input type="text" name="paisNacionalidad" value={formData.paisNacionalidad} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Tipo Documento:</label>
          <input type="text" name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Documento Identificación:</label>
          <input type="text" name="documentoIdentificacion" value={formData.documentoIdentificacion} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Primer Nombre:</label>
          <input type="text" name="primerNombre" value={formData.primerNombre} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Segundo Nombre:</label>
          <input type="text" name="segundoNombre" value={formData.segundoNombre} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Primer Apellido:</label>
          <input type="text" name="primerApellido" value={formData.primerApellido} onChange={handleChange} className="form-input " required />
        </div>
        <div className="form-group">
          <label className="form-label">Segundo Apellido:</label>
          <input type="text" name="segundoApellido" value={formData.segundoApellido} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Fecha Nacimiento:</label>
          <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Sexo Biológico:</label>
          <input type="text" name="sexoBiologico" value={formData.sexoBiologico} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Identidad de Género:</label>
          <input type="text" name="identidadGenero" value={formData.identidadGenero} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Ocupación en el Momento:</label>
          <input type="text" name="ocupacionMomento" value={formData.ocupacionMomento} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Oposición a la Presunción Legal de Donación:</label>
          <select name="opocisionPresuncionLegalDonacion" value={formData.opocisionPresuncionLegalDonacion} onChange={handleChange} className="form-select" required>
            <option value="">Seleccione</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Fecha Suscripción Oposición:</label>
          <input type="date" name="fechaSuscripcionOposicion" value={formData.fechaSuscripcionOposicion} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Documento de Voluntad Anticipada:</label>
          <input type="text" name="documentoVoluntadAnticipada" value={formData.documentoVoluntadAnticipada} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Fecha Suscripción Documento:</label>
          <input type="date" name="fechaSuscripcionDocumento" value={formData.fechaSuscripcionDocumento} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Código Prestador Documento:</label>
          <input type="text" name="codigoPrestadorDocumento" value={formData.codigoPrestadorDocumento} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Categoría de Discapacidad:</label>
          <input type="text" name="categoria_Discapacidad" value={formData.categoria_Discapacidad} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">País de Residencia Habitual:</label>
          <input type="text" name="paisResidenciaHabitual" value={formData.paisResidenciaHabitual} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Municipio de Residencia Habitual:</label>
          <input type="text" name="municipioRecidenciaHabitual" value={formData.municipioRecidenciaHabitual} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Pertenencia Étnica:</label>
          <input type="text" name="pertenenciaEtnica" value={formData.pertenenciaEtnica} onChange={handleChange} className="form-input " />
        </div>
        <div className="form-group">
          <label className="form-label">Zona Territorial de Residencia:</label>
          <input type="text" name="zonaTerritorialResidencia" value={formData.zonaTerritorialResidencia} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Entidad que Responde al Plan de Beneficios:</label>
          <input type="text" name="entidadRespondePlanBeneficios" value={formData.entidadRespondePlanBeneficios} onChange={handleChange} className="form-input" />
        </div>
        <button type="submit" className="form-submit-button">Registrar Paciente</button>
      </form>
    </div>
  );
};

export default RegistroPaciente;