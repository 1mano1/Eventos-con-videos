let video = document.querySelector('.botonVideo');

video.addEventListener('play', function (){
    console.log('Di play en el video');
    let pantalla = document.body;
    pantalla.style.backgroundColor = pantalla.style.backgroundColor == "blue" ? "green" : "blue";
    alert('Se termino el video');
    let decision = confirm('Deseas ver de nuevo el video?');
    console.log(decision);

    if (decision) {
        video.play();
    }else{
        window.location = "https://classroom.google.com/";
    }
})

// video.addEventListener('seeking', function (){
//     console.log('Se está viendo una parte del video');
// })

// video.addEventListener('ended', function (){
//     console.log('Diste pausa en el video', this.currentTime);
// })

video.addEventListener('pause', function (){
    console.log('Diste pausa en el video');
    let pantalla = document.body;
    pantalla.style.backgroundColor = pantalla.style.backgroundColor == "blue" ? "green" : "blue";
})

//Temporizador o timer

let Temporizador = setInterval(function (){
    ponerColorBody();
},2000)


// function ponerColorBody(){
//     let pantalla = document.body;
//     pantalla.style.backgroundColor = pantalla.style.backgroundColor == "blue" ? "green" : "blue";
// }

setTimeout(function (){
ponerColorBody
}, 3000)

//Arreglos, Vectores, Arrays

                        //posiciones
let array = ['uno', 'dos', 'tres', 'cuatro'];
let array2 = ['cinco', 'seis', 'siete', 'ocho'];

array2[1];

let multidimensional = [array, array2];

multidimensional[0][1] = 'dos';
