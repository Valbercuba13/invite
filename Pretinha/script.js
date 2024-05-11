var naoButton = document.getElementById('nao');
var simButton = document.getElementById('sim');

naoButton.addEventListener('click', function() {
    moveButtonRandomly(naoButton);
    showImage();
});

simButton.addEventListener('click', function() {
    alert("Hoje é no Amor");
    window.open("https://www.youtube.com/watch?v=xFMMmVRd4lE");
});


function redimensionarImagem(src, largura, altura, callback) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();

    img.onload = function() {
        canvas.width = largura;
        canvas.height = altura;
        ctx.drawImage(img, 0, 0, largura, altura);
        var novaImagem = canvas.toDataURL('image/png');
        callback(novaImagem);
    };

    img.src = src;
}


var imagemOriginal = 'image/casal.png';
var larguraDesejada = 800; 
var alturaDesejada = 600; 

redimensionarImagem(imagemOriginal, larguraDesejada, alturaDesejada, function(novaImagem) {
    console.log('Imagem redimensionada:', novaImagem);
    
    document.body.style.backgroundImage = "url('" + novaImagem + "')";
});


function showImage() {
    var gatodebotas = document.createElement("img");
    gatodebotas.src = "image/gatodebotas.png";
    gatodebotas.style.width = "100px";
    gatodebotas.style.height = "auto";
    gatodebotas.style.position = "absolute";
    gatodebotas.style.left = Math.random() * (window.innerWidth - gatodebotas.offsetWidth) + 'px';
    gatodebotas.style.top = Math.random() * (window.innerHeight - gatodebotas.offsetHeight) + 'px';
    document.body.appendChild(gatodebotas);
}

function moveButtonRandomly(button) {
    var randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    var randomY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
