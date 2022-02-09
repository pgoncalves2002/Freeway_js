let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//variaveis do carro
let xCarro = 420;
let yCarro = 40;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png")
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor()
  image(imagemCarro, xCarro, yCarro, 50, 40)
}

function mostraAtor(){
  image(imagemDoAtor, 100, 366, 30, 30)
}