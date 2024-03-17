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
        let sabadoDomingo = document.querySelector('#sabado-domingo')
        let lista = document.querySelector('#lista')
        let menu = document.querySelector('#menu')
        let tabela = document.querySelector('#tabela')
        let x = document.querySelector('#x')
        let tarefa = document.querySelector('#tarefa')
        let titulo = document.querySelector('#titulo')

        lista.addEventListener('click', () => {
            sabadoDomingo.classList.toggle('active')
            lista.classList.toggle('active')
            menu.classList.toggle('active')
            x.classList.toggle('active')
        })

        x.addEventListener('click', () => {
            sabadoDomingo.classList.toggle('active')
            lista.classList.toggle('active')
            menu.classList.toggle('active')
            x.classList.toggle('active')
        })
    }



    
    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 6 && minutes >= 30 && minutes < 60)) {
        titulo.innerHTML = 'Acordar, tomar café'
        paragrafo.innerHTML = 'Estudar PHP'
        paragrafo2.innerHTML = 'Pausa'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 7 && minutes >= 0 && minutes <= 59) || (hours === 8 && minutes >= 0 && minutes <= 9)) {
        titulo.innerHTML = 'Estudar PHP'
        paragrafo.innerHTML = 'Pausa'
        paragrafo2.innerHTML = 'Estudar inglês'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 8 && minutes >= 10 && minutes <= 29)) {
        titulo.innerHTML = 'Pausa'
        paragrafo.innerHTML = 'Estudar PHP'
        paragrafo2.innerHTML = 'Pausa'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 8 && minutes >= 30 && minutes <= 59) || (hours === 9 && minutes >= 0 && minutes <= 9)) {
        titulo.innerHTML = 'Estudar PHP'
        paragrafo.innerHTML = 'Pausa'
        paragrafo2.innerHTML = 'Estudar inglês'
    }



    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 9 && minutes >= 10 && minutes <= 29)) {
        titulo.innerHTML = 'Pausa'
        paragrafo.innerHTML = 'Estudar inglês'
        paragrafo2.innerHTML = 'Almoçar'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 9 && minutes >= 30 && hours < 11) || (hours === 10 && minutes >= 0 && minutes <= 59)) {
        titulo.innerHTML = 'Estudar inglês'
        paragrafo.innerHTML = 'Almoçar'
        paragrafo2.innerHTML = 'Trabalhar em algum projeto'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 11 && minutes >= 0 && minutes <= 59)) {
        titulo.innerHTML = 'Almoçar'
        paragrafo.innerHTML = 'Trabalhar em algum projeto'
        paragrafo2.innerHTML = 'Cuidar da aparência'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 12 && minutes >= 0 && minutes <= 59) || (hours === 13 && minutes >= 0 && minutes <= 59)) {
        titulo.innerHTML = 'Trabalhar em algum projeto'
        paragrafo.innerHTML = 'Cuidar da aparência'
        paragrafo2.innerHTML = 'Lazer'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 14 && minutes >= 0 && minutes <= 59)) {
        titulo.innerHTML = 'Cuidar da aparência'
        paragrafo.innerHTML = 'Lazer'
        paragrafo2.innerHTML = 'Banho'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 15 && minutes >= 0 && minutes <= 59) || (hours === 16 && minutes >= 0 && minutes <= 59)) {
        titulo.innerHTML = 'Lazer'
        paragrafo.innerHTML = 'Banho'
        paragrafo2.innerHTML = 'Estudar JavaScript'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 17 && minutes >= 0 && minutes <= 59)) {
        titulo.innerHTML = 'Banho'
        paragrafo.innerHTML = 'Estudar JavaScript'
        paragrafo2.innerHTML = 'Jantar'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 18 && minutes >= 0 && minutes <= 59) || (hours === 19 && minutes >= 0 && minutes <= 59)) {
        titulo.innerHTML = 'Estudar JavaScript'
        paragrafo.innerHTML = 'Jantar'
        paragrafo2.innerHTML = 'Dormir'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 20 && minutes >= 0 && minutes <= 59) || (hours === 21 && minutes >= 0 && minutes <= 59)) {
        titulo.innerHTML = 'Jantar'
        paragrafo.innerHTML = 'Dormir'
        paragrafo2.innerHTML = 'Fim do dia'
    }




    if ((dayOfWeek === 0 || dayOfWeek === 6) && (hours === 22 && minutes >= 0 && minutes <= 59)) {
        titulo.innerHTML = 'Dormir'
        paragrafo.innerHTML = 'Fim do dia'
        paragrafo2.innerHTML = 'Fim do dia'
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