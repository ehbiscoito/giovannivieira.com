document.addEventListener("DOMContentLoaded", function () {
  const botaoEntrar = document.getElementById("btn-entrar");
  const popup = document.getElementById("popup-boas-vindas");
  const paginaInicial = document.getElementById("pagina-inicial");
  const janelas = document.querySelectorAll(".janela");
  const fundo = document.getElementById("fundo-inicial");

  // zIndex global
  let z = 100;

  // Evento do botão ✶
  botaoEntrar.addEventListener("click", () => {
    popup.classList.add("esconder");
    fundo.classList.add("esconder");

    setTimeout(() => {
      popup.classList.add("oculto");
      popup.classList.remove("esconder");

      fundo.classList.add("oculto");
      fundo.classList.remove("esconder");
      
      paginaInicial.classList.remove("oculto");
      document.getElementById("logotipo").classList.remove("oculto");
    }, 400);
  });

  // Tornar janelas arrastáveis e trazer para frente
  janelas.forEach(janela => {
    const barra = janela.querySelector(".barra-titulo");

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    barra.addEventListener("mousedown", function (e) {
      isDragging = true;
      offsetX = e.clientX - janela.offsetLeft;
      offsetY = e.clientY - janela.offsetTop;

      z++;
      janela.style.zIndex = z; // traz para frente
    });

    document.addEventListener("mousemove", function (e) {
      if (isDragging) {
        janela.style.left = `${e.clientX - offsetX}px`;
        janela.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener("mouseup", function () {
      isDragging = false;
    });
  });

  const logo = document.getElementById("logotipo");

  if (!logo) return; // evita erro se não existir

  const logos = [
    "../imagens/Logotipo_1.gif",
    "../imagens/Logotipo_2.gif",
    "../imagens/Logotipo_3.gif",
    "../imagens/Logotipo_4.gif",
    "../imagens/Logotipo_5.gif"
  ];

  let logoIndex = 0;

  logo.addEventListener("mouseover", () => {
    logoIndex = (logoIndex + 1) % logos.length;
    logo.src = logos[logoIndex];
  });
});

// Abrir pop-up de projeto
function abrirPopup(id) {
  const popup = document.getElementById(`janela-${id}`);
  if (popup) {
    popup.classList.remove("oculto");

    const largura = popup.offsetWidth;
    const altura = popup.offsetHeight;
    const centroX = (window.innerWidth - largura) / 2;
    const centroY = (window.innerHeight - altura) / 2;
    popup.style.left = `${centroX}px`;
    popup.style.top = `${centroY}px`;
  }
}

// Fechar pop-up
function fecharPopup(botao) {
  const janela = botao.closest(".janela");
  if (janela) {
    janela.classList.add("oculto");
    janela.style.width = "300px";
    janela.style.height = "auto";
    janela.style.left = "";
    janela.style.top = "";
  }
}

function abrirPDF(caminho) {
  window.open(caminho, "_blank");
}