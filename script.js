function updateClock() {
    var now = new Date();
    var days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    var dayOfWeek = days[now.getDay()];
    var time = now.toLocaleTimeString();
  
    var clock = document.getElementById('clock');
    clock.innerHTML = `${dayOfWeek}, ${time}`;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);
  
  // Atualiza o relógio imediatamente após o carregamento da página
  updateClock();






  function changeDivClass() {
    var today = new Date();
    var dayOfWeek = today.getDay();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    let titulo = document.querySelector('#titulo')
    let paragrafo = document.querySelector('#paragrafo')
    let paragrafo2 = document.querySelector('#paragrafo2')

    //**** SÁBADO E DOMINGO ****/
    if ((dayOfWeek === 0 || dayOfWeek === 6)) {
        document.getElementById("sabado-e-domingo").classList.add("active");
        let sabadoEDomingo = document.querySelector('#sabado-e-domingo')
        sabadoEDomingo.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("sabado-e-domingo").classList.remove("active");
    }



    
    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 6 && minutes >= 30 && minutes < 60)) {
        paragrafo.innerHTML = 'Acordar, tomar café'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 7 && minutes >= 0 && minutes <= 59) || (hours === 8 && minutes >= 0 && minutes <= 9)) {
        document.getElementById("sete").classList.add("active");
        let sete = document.querySelector('#sete')
        sete.scrollIntoView({ behavior: 'smooth' })
    } 
    else {
        document.getElementById("sete").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 8 && minutes >= 10 && minutes <= 29)) {
        document.getElementById("oito-dez").classList.add("active");
        let oitoDez = document.querySelector('#oito-dez')
        oitoDez.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("oito-dez").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 8 && minutes >= 30 && minutes <= 59) || (hours === 9 && minutes >= 0 && minutes <= 9)) {
        document.getElementById("oito-meia").classList.add("active");
        let oitoMeia = document.querySelector('#oito-meia')
        oitoMeia.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("oito-meia").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 9 && minutes >= 10 && minutes <= 29)) {
        document.getElementById("nove-dez").classList.add("active");
        let noveDez = document.querySelector('#nove-dez')
        noveDez.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("nove-dez").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 9 && minutes >= 30 && hours < 11) || (hours === 10 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("nove-meia").classList.add("active");
        let noveMeia = document.querySelector('#nove-meia')
        noveMeia.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("nove-meia").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 11 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("onze").classList.add("active");
        let onze = document.querySelector('#onze')
        onze.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("onze").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 12 && minutes >= 0 && minutes <= 59) || (hours === 13 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("meio-dia").classList.add("active");
        let meioDia = document.querySelector('#meio-dia')
        meioDia.scrollIntoView({ behavior: 'smooth' })
    }
    else {
        document.getElementById("meio-dia").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 14 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("duas-horas").classList.add("active");
        let duasHoras = document.querySelector('#duas-horas')
        duasHoras.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("duas-horas").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 15 && minutes >= 0 && minutes <= 59) || (hours === 16 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("tres-horas").classList.add("active");
        let tresHoras = document.querySelector('#tres-horas')
        tresHoras.scrollIntoView({ behavior: 'smooth' })
    }
    else {
        document.getElementById("tres-horas").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 17 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("cinco-horas").classList.add("active");
        let cincoHoras = document.querySelector('#cinco-horas')
        cincoHoras.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("cinco-horas").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 18 && minutes >= 0 && minutes <= 59) || (hours === 19 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("zeis-horas").classList.add("active");
        let zeisHoras = document.querySelector('#zeis-horas')
        zeisHoras.scrollIntoView({ behavior: 'smooth' })
    }
    else {
        document.getElementById("zeis-horas").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 20 && minutes >= 0 && minutes <= 59) || (hours === 21 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("oito-horas").classList.add("active");
        let oitoHoras = document.querySelector('#oito-horas')
        oitoHoras.scrollIntoView({ behavior: 'smooth' })
    }
    else {
        document.getElementById("oito-horas").classList.remove("active");
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 22 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("dez-horas").classList.add("active");
        let dezHoras = document.querySelector('#dez-horas')
        dezHoras.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("dez-horas").classList.remove("active");
    }




    //**** SEGUNDA E TERÇA ****/
    if ((dayOfWeek === 1 || dayOfWeek === 2)) {
        document.getElementById("segunda-e-terca").classList.add("active");
    } else {
        document.getElementById("segunda-e-terca").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 6 && minutes >= 30 && minutes < 60)) {
        document.getElementById("seis-meia2").classList.add("active");
    } else {
        document.getElementById("seis-meia2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 7 && minutes >= 0 && minutes <= 59) || (hours === 8 && minutes >= 0 && minutes <= 9)) {
        document.getElementById("sete2").classList.add("active");
    } 
    else {
        document.getElementById("sete2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 8 && minutes >= 10 && minutes <= 29)) {
        document.getElementById("oito-dez2").classList.add("active");
    } else {
        document.getElementById("oito-dez2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 8 && minutes >= 30 && minutes <= 59) || (hours === 9 && minutes >= 0 && minutes <= 9)) {
        document.getElementById("oito-meia2").classList.add("active");
    } else {
        document.getElementById("oito-meia2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 9 && minutes >= 10 && minutes <= 29)) {
        document.getElementById("nove-dez2").classList.add("active");
    } else {
        document.getElementById("nove-dez2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 9 && minutes >= 30 && hours < 11) || (hours === 10 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("nove-meia2").classList.add("active");
    } else {
        document.getElementById("nove-meia2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 11 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("onze2").classList.add("active");
    } else {
        document.getElementById("onze2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 12 && minutes >= 0 && minutes <= 59) || (hours === 13 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("meio-dia2").classList.add("active");
    }
    else {
        document.getElementById("meio-dia2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 14 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("duas-horas2").classList.add("active");
    } else {
        document.getElementById("duas-horas2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 15 && minutes >= 0 && minutes <= 59) || (hours === 16 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("tres-horas2").classList.add("active");
    }
    else {
        document.getElementById("tres-horas2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 17 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("cinco-horas2").classList.add("active");
    } else {
        document.getElementById("cinco-horas2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 18 && minutes >= 0 && minutes <= 59) || (hours === 19 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("zeis-horas2").classList.add("active");
    }
    else {
        document.getElementById("zeis-horas2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 20 && minutes >= 0 && minutes <= 59) || (hours === 21 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("oito-horas2").classList.add("active");
    }
    else {
        document.getElementById("oito-horas2").classList.remove("active");
    }




    if ((dayOfWeek === 1 || dayOfWeek === 2) && (hours === 22 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("dez-horas2").classList.add("active");
    } else {
        document.getElementById("dez-horas2").classList.remove("active");
    }





    //**** QUARTA, QUINTA E SEXTA ****/
    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5)) {
        document.getElementById("quarta-quinta-sexta").classList.add("active");
    } else {
        document.getElementById("quarta-quinta-sexta").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 6 && minutes >= 30 && minutes < 60)) {
        document.getElementById("seis-meia3").classList.add("active");
        let seisMeia3 = document.querySelector('#seis-meia3')
        seisMeia3.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("seis-meia3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 7 && minutes >= 0 && minutes <= 59) || (hours === 8 && minutes >= 0 && minutes <= 9)) {
        document.getElementById("sete3").classList.add("active");
        let sete3 = document.querySelector('#sete3')
        sete3.scrollIntoView({ behavior: 'smooth' })
    } 
    else {
        document.getElementById("sete3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 8 && minutes >= 10 && minutes <= 29)) {
        document.getElementById("oito-dez3").classList.add("active");
        let oitoDez3 = document.querySelector('#oito-dez3')
        oitoDez3.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("oito-dez3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 8 && minutes >= 30 && minutes <= 59) || (hours === 9 && minutes >= 0 && minutes <= 9)) {
        document.getElementById("oito-meia3").classList.add("active");
        let oitoMeia3 = document.querySelector('#oito-meia3')
        oitoMeia3.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("oito-meia3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 9 && minutes >= 10 && minutes <= 29)) {
        document.getElementById("nove-dez3").classList.add("active");
        let noveDez3 = document.querySelector('#nove-dez3')
        noveDez3.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("nove-dez3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 9 && minutes >= 30 && hours < 11) || (hours === 10 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("nove-meia3").classList.add("active");
        let noveMeia3 = document.querySelector('#nove-meia3')
        noveMeia3.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("nove-meia3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 11 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("onze3").classList.add("active");
        let onze3 = document.querySelector('#onze3')
        onze3.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("onze3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 12 && minutes >= 0 && minutes <= 59) || (hours === 13 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("meio-dia3").classList.add("active");
        let meioDia3 = document.querySelector('#meio-dia3')
        meioDia3.scrollIntoView({ behavior: 'smooth' })
    }
    else {
        document.getElementById("meio-dia3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 14 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("duas-horas3").classList.add("active");
        let duasHoras3 = document.querySelector('#duas-horas3')
        duasHoras3.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("duas-horas3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 15 && minutes >= 0 && minutes <= 59) || (hours === 16 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("tres-horas3").classList.add("active");
        let tresHoras3 = document.querySelector('#tres-horas3')
        tresHoras3.scrollIntoView({ behavior: 'smooth' })
    }
    else {
        document.getElementById("tres-horas3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 17 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("cinco-horas3").classList.add("active");
        let cincoHoras3 = document.querySelector('#cinco-horas3')
        cincoHoras3.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("cinco-horas3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 18 && minutes >= 0 && minutes <= 59) || (hours === 19 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("zeis-horas3").classList.add("active");
        let zeisHoras3 = document.querySelector('#zeis-horas3')
        zeisHoras3.scrollIntoView({ behavior: 'smooth' })
    }
    else {
        document.getElementById("zeis-horas3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 20 && minutes >= 0 && minutes <= 59) || (hours === 21 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("oito-horas3").classList.add("active");
        let oitoHoras3 = document.querySelector('#oito-horas3')
        oitoHoras3.scrollIntoView({ behavior: 'smooth' })
    }
    else {
        document.getElementById("oito-horas3").classList.remove("active");
    }




    if ((dayOfWeek === 3 || dayOfWeek === 4 || dayOfWeek === 5) && (hours === 22 && minutes >= 0 && minutes <= 59)) {
        document.getElementById("dez-horas3").classList.add("active");
        let dezHoras3 = document.querySelector('#dez-horas3')
        dezHoras3.scrollIntoView({ behavior: 'smooth' })
    } else {
        document.getElementById("dez-horas3").classList.remove("active");
    }

}

// Chama a função inicialmente e a cada segundo
changeDivClass();
setInterval(changeDivClass, 1000); // 1000ms = 1 segundo