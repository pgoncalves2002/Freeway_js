//ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
  }

  function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if (podeSeMoverY()){
      yAtor += 3;
    }
  }
    if (keyIsDown(LEFT_ARROW)){
        xAtor -= 3;
    }
  
    if (keyIsDown(RIGHT_ARROW)){
        xAtor += 3;
      }
  }
  

  function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if(colisao){
          voltaAtorParaPosicaoInicial();
          if (meusPontos > 0){
          meusPontos -= 1;
          }
        }
    }
  }
  function marcaPonto(){
    if (yAtor < 15){
      meusPontos += 1;
      voltaAtorParaPosicaoInicial();
    }
  }

  function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60))
    text(meusPontos, width / 5, 27);
  }
 function voltaAtorParaPosicaoInicial(){
   yAtor = 366;
   xAtor = 85;
 }

 function podeSeMoverY(){
   return yAtor < 366;
 }

