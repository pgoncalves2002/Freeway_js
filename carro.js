//carro1
let xCarro = 600;
let yCarro = 40;
let velocidadeCarro1 = 2;

//carro2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 3

//carro2
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 2.5

function mostraCarro(){
    image(imagemCarro, xCarro, yCarro, 50, 40);
    image(imagemCarro2, xCarro2, yCarro2, 50, 40);
    image(imagemCarro3, xCarro3, yCarro3, 50, 40);
  }
  
  function movimentaCarro(){
   xCarro -= velocidadeCarro1;
   xCarro2 -= velocidadeCarro2;
   xCarro3 -= velocidadeCarro3;
  }