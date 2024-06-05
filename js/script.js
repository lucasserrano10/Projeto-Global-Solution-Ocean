function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./menu.png"
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./remove.png"
    }
}

function alert(){
    Swal.fire({
        title: "CODETECH",
        text: "Você está prestes a entrar em um mundo onde o oceano é protegido e o futuro é azul.",
        icon: "success"
    });
}


function copy(){
    Swal.fire({
        title: "COPYRIGHT",
        text: "O copyright, também conhecido como direito autoral, é um conjunto de direitos legais concedidos ao criador de uma obra original, como livros, músicas, filmes, software, e outras formas de expressão criativa.",
        icon: ""
    });
}

