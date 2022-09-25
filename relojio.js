function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "img/bomdia.png;";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    img.src = "img/boatarde.png";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "img/boanoite.png";
    document.body.style.background = "#515154";
  }
}
