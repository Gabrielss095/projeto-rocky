class MobileNavBar { ///método construtor
    constructor(mobileMenu, navList, navLinks) { ///propriedades da classe
        this.mobileMenu = document.querySelector(mobileMenu); //botão menu
        this.navList = document.querySelector(navList); ///lista do menu
        this.navLinks = document.querySelectorAll(navLinks); ///links da lista
        this.activeClass = 'active'; ///classe active

        this.handleClick = this.handleClick.bind(this); //bind passa a referencia de this como classe
    }
///método que serve para exibir e ocultar o conteudo quando for cliclado
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
///método para animar os links
    animateLinks() { 
        this.navLinks.forEach((link) => { // falar com cada link individualmente
            link.style.animation //saber se o link possui a propriedade
            ? (link.style.animation = "") ///verificar se existe animation
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`); ///se não existir animation irá adicionar
        });
    }

    addClickEvent() { ///método que adiciona evento de click
        this.mobileMenu.addEventListener('click', this.handleClick);

    }
//inicia a função SE mobileMenu existir no documento
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
///Criando váriavel mobileNavBar
const mobileNavBar = new MobileNavBar( 
    ".mobile-menu", ///seletores da variavel
    ".nav-list",
    ".nav-list li",
);
//Inicialização
mobileNavBar.init(); 
