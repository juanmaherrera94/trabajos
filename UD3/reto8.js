const formatoHoraCorto = (horas, minutos) => {
    return `${rellenarCero(horas)}:${rellenarCero(minutos)}`;
  }
  
  const formatoHoraLargo = (horas, minutos, segundos) => {
    return `${rellenarCero(horas)}:${rellenarCero(minutos)}:${rellenarCero(segundos)}`;
  }
  
  const formatoHoraConAPM = (horas, minutos, am) => {
    const ampm = am ? "AM" : "PM";
    return `${rellenarCero(horas)}:${rellenarCero(minutos)} ${ampm}`;
  }
  
  const rellenarCero = (valor) => {
    return valor < 10 ? `0${valor}` : valor;
  }
  
  console.log("Hora en formato corto: " + formatoHoraCorto(14, 30));
  console.log("Hora en formato largo: " + formatoHoraLargo(14, 30, 25));
  console.log("Hora en formato AM: " + formatoHoraConAPM(2, 30, true));
  console.log("Hora en formato PM: " + formatoHoraConAPM(14, 30, false));