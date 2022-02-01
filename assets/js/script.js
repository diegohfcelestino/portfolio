//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

//Scroll TOP
$(document).ready(function () {
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    //Quantidade Y que o botão de scroll vai aparecer
    if (topPos > 500) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  //Velocidade a animação
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
    return false;
  });
});

//Revelar animação
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

//Home delay
sr.reveal(".button", { delay: 200 });
sr.reveal(".linguagensProjeto", { delay: 400 });
sr.reveal(".imagem-espaco-delay", { delay: 200 });
sr.reveal(".imagem-diego-delay", { delay: 600 });
//Sobre mim delay
sr.reveal(".imagem-delay", {});
sr.reveal(".titulo-delay", { delay: 200 });
sr.reveal(".descricao-delay", { delay: 400 });
sr.reveal(".cards-interval", { interval: 400 });

//Animação conhecimentos
var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir. <br><br> 1 anos de experiência";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML. <br><br> 1 anos de experiência";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. <br><br> 8 meses de experiência";
});

document.querySelector(".bootstrap").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Bootstrap é um framework para desenvolvimento de componentes de interface front-end para sites e aplicações web usando HTML, CSS e JavaScript. <br><br> 1 ano de experiência";
});

document.querySelector(".sass").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Sass (o pré-processador) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass. <br><br> 4 meses de experiência";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”. <br><br> 8 meses de experiência";
});

document.querySelector(".angular").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "AngularJS é um framework JavaScript revolucionário, mantido por um time de engenheiros Google. Ele simplifica o desenvolvimento de aplicações web robustas e de sucesso. Por este motivo, tem-se mostrado em crescente ascensão, sendo considerado a tecnologia do momento para desenvolvimento de aplicações web. <br><br> 3 meses de experiência";
});

document.querySelector(".ts").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "TypeScript, um superset da linguagem JavaScript criado pela Microsoft para permitir a escrita de scripts com a utilização de tipagem estática, orientação a objetos, e facilitando a escrita de código com uma sintaxe de fácil compreensão. <br><br> 4 meses de experiência";
});

document.querySelector(".next").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Next.js é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel, o Nextjs busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para você iniciar seu projeto. <br><br> 3 meses de experiência";
});

document.querySelector(".styled").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript. <br><br> 4 meses de experiência";
});

document.querySelector(".postgre").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto. <br><br> 4 meses de experiência";
});

document.querySelector(".java").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Java é uma linguagem de programação e plataforma computacional lançada pela primeira vez pela Sun Microsystems em 1995. Existem muitas aplicações e sites que não funcionarão, a menos que você tenha o Java instalado, e mais desses são criados todos os dias. O Java é rápido, seguro e confiável. <br><br> 4 meses de experiência";
});

document.querySelector(".spring").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "O Spring Boot é um projeto da Spring que veio para facilitar o processo de configuração e publicação de nossas aplicações Java. A intenção é ter o seu projeto rodando o mais rápido possível e sem complicação.. <br><br> 4 meses de experiência";
});

document.querySelector(".node").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "O Node. js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node. js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados. <br><br> 6 meses de experiência";
});

document.querySelector(".ejs").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "O EJS é uma engine de visualização, com ele conseguimos de uma maneira fácil e simples transportar dados do back-end para o front-end, basicamente conseguimos utilizar códigos em javascript no html de nossas páginas. <br><br> 4 meses de experiência";
});

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `Um breve resumo dos meus conhecimentos. Juntos podemos chegar longe 💜.<br>#Never Stop Learning!<br><br>** Passe o mouse no card para ler sobre **`;
  });
}

/*
//Validação captcha do contato
valor = document.getElementById('campo').value

function testar() {
    if (valor != 'g') {
        alert('Complete o nome "google" com uma letra para enviar!')
    }
}*/
