const formatearFecha = (dia, mes, anio) => {  
      if (arguments.length < 3) {
        console.log("Se requieren tres parámetros: día, mes y año.");
      }

      const arrayMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
      const arrayDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

      const fechaCorta = dia + "/" + mes + "/" + anio;
      const fechaLarga = arrayDias[new Date(anio, mes - 1, dia).getDay()] + ", " + dia + " de " + arrayMeses[mes - 1] + " de " + anio + ".";
      const fechaIngles = new Date(anio, mes - 1, dia).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

      console.log("Fecha en formato corto: " + fechaCorta);
      console.log("Fecha en formato largo: " + fechaLarga);
      console.log("Fecha en formato inglés: " + fechaIngles);
    }
    formatearFecha(14, 10, 2023);