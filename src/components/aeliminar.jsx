if (paciente.id) {
    objetoPaciente.id = paciente.id;
    const pacientesActualizados = pacientes.map((pacienteSate) =>
      pacienteSate.id === paciente.id ? objetoPaciente : pacienteSate
    );
    setPacientes(pacientesActualizados);
    setPaciente({})
  } else {
    objetoPaciente.id = generarId();
    setPacientes([...pacientes, objetoPaciente]);
  }