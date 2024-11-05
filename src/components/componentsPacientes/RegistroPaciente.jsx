// src/RegistroPaciente.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

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
    <div>
      <h1>Registro de Pacientes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pais Nacionalidad:</label>
          <input type="text" name="paisNacionalidad" value={formData.paisNacionalidad} onChange={handleChange} required />
        </div>
        <div>
          <label>Tipo Documento:</label>
          <input type="text" name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} required />
        </div>
        <div>
          <label>Documento Identificación:</label>
          <input type="text" name="documentoIdentificacion" value={formData.documentoIdentificacion} onChange={handleChange} required />
        </div>
        <div>
          <label>Primer Nombre:</label>
          <input type="text" name="primerNombre" value={formData.primerNombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Segundo Nombre:</label>
          <input type="text" name="segundoNombre" value={formData.segundoNombre} onChange={handleChange} />
        </div>
        <div>
          <label>Primer Apellido:</label>
          <input type="text" name="primerApellido" value={formData.primerApellido} onChange={handleChange} required />
        </div>
        <div>
          <label>Segundo Apellido:</label>
          <input type="text" name="segundoApellido" value={formData.segundoApellido} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha Nacimiento:</label>
          <input type="date" name="fechaNacimiento " value={formData.fechaNacimiento} onChange={handleChange} required />
        </div>
        <div>
          <label>Sexo Biológico:</label>
          <input type="text" name="sexoBiologico" value={formData.sexoBiologico} onChange={handleChange} required />
        </div>
        <div>
          <label>Identidad de Género:</label>
          <input type="text" name="identidadGenero" value={formData.identidadGenero} onChange={handleChange} />
        </div>
        <div>
          <label>Ocupación en el Momento:</label>
          <input type="text" name="ocupacionMomento" value={formData.ocupacionMomento} onChange={handleChange} />
        </div>
        <div>
          <label>Oposición a la Presunción Legal de Donación:</label>
          <select name="opocisionPresuncionLegalDonacion" value={formData.opocisionPresuncionLegalDonacion} onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label>Fecha Suscripción Oposición:</label>
          <input type="date" name="fechaSuscripcionOposicion" value={formData.fechaSuscripcionOposicion} onChange={handleChange} />
        </div>
        <div>
          <label>Documento de Voluntad Anticipada:</label>
          <input type="text" name="documentoVoluntadAnticipada" value={formData.documentoVoluntadAnticipada} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha Suscripción Documento:</label>
          <input type="date" name="fechaSuscripcionDocumento" value={formData.fechaSuscripcionDocumento} onChange={handleChange} />
        </div>
        <div>
          <label>Código Prestador Documento:</label>
          <input type="text" name="codigoPrestadorDocumento" value={formData.codigoPrestadorDocumento} onChange={handleChange} />
        </div>
        <div>
          <label>Categoría de Discapacidad:</label>
          <input type="text" name="categoria_Discapacidad" value={formData.categoria_Discapacidad} onChange={handleChange} />
        </div>
        <div>
          <label>País de Residencia Habitual:</label>
          <input type="text" name="paisResidenciaHabitual" value={formData.paisResidenciaHabitual} onChange={handleChange} required />
        </div>
        <div>
          <label>Municipio de Residencia Habitual:</label>
          <input type="text" name="municipioRecidenciaHabitual" value={formData.municipioRecidenciaHabitual} onChange={handleChange} required />
        </div>
        <div>
          <label>Pertenencia Étnica:</label>
          <input type="text" name="pertenenciaEtnica" value={formData.pertenenciaEtnica} onChange={handleChange} />
        </div>
        <div>
          <label>Zona Territorial de Residencia:</label>
          <input type="text" name="zonaTerritorialResidencia" value={formData.zonaTerritorialResidencia} onChange={handleChange} />
        </div>
        <div>
          <label>Entidad que Responde al Plan de Beneficios:</label>
          <input type="text" name="entidadRespondePlanBeneficios" value={formData.entidadRespondePlanBeneficios} onChange={handleChange} />
        </div>
        <button type="submit">Registrar Paciente</button>
      </form>
    </div>
  );
};

export default RegistroPaciente;