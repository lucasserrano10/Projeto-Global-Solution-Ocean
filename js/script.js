function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./imagens/menu.png"
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./imagens/remove.png"
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

function ocean(){
    Swal.fire({
        icon: "",
        title: "Ocean20",
        text: "PARA CONHECER MAIS SOBRE A OCEAN20, CLIQUE NO LINK ABAIXO",
        footer: '<a href="https://www.g20.org/pt-br/g20-social/grupos-de-engajamento/oceans-20">Ocean20</a>'
    });
}

function unesco(){
    Swal.fire({
        icon: "",
        title: "Catédra UNESCO",
        text: "PARA CONHECER MAIS SOBRE A CATÉDRA UNESCO, CLIQUE NO LINK ABAIXO",
        footer: '<a href="https://oceano.iea.usp.br">Catédra Unesco</a>'
    });
}

function forum(){
    Swal.fire({
        icon: "",
        title: "Fórum Econômico Mundial",
        text: "PARA CONHECER MAIS SOBRE O FÓRUM ECONÔMICO MUNDIAL, CLIQUE NO LINK ABAIXO",
        footer: '<a href="https://www.weforum.org">Fórum Econômico Mundial</a>'
    });
}


function onu(){
    Swal.fire({
        icon: "",
        title: "PACTO GLOBAL DA ONU",
        text: "PARA CONHECER MAIS SOBRE O PACTO GLOBAL DA ONU, CLIQUE NO LINK ABAIXO",
        footer: '<a href="https://brasil.un.org/pt-br">ONU</a>'
    });
}

function select(){
    Swal.fire({
        icon: "",
        title: "SELECT SOLUÇÕES",
        text: "PARA CONHECER MAIS SOBRE A SELECT SOLUÇÕES, CLIQUE NO LINK ABAIXO",
        footer: '<a href="https://www.selectsolucoes.com.br">SELECT SOLUÇÕES</a>'
    });
}

function soft(){
    Swal.fire({
        icon: "",
        title: "SOFTTEK",
        text: "PARA CONHECER MAIS SOBRE A SOFTTEK, CLIQUE NO LINK ABAIXO",
        footer: '<a href="https://www.softtek.com/pt/">SOFTTEK</a>'
    });
}

function aws(){
    Swal.fire({
        icon: "",
        title: "AWS",
        text: "PARA CONHECER MAIS SOBRE A AWS, CLIQUE NO LINK ABAIXO",
        footer: '<a href="https://aws.amazon.com/pt/free/?trk=2ee11bb2-bc40-4546-9852-2c4ad8e8f646&sc_channel=ps&ef_id=CjwKCAjwmYCzBhA6EiwAxFwfgNX2e8t5fyQnolRMhkbMrB7EMaZA0TQAktI8JHsZWnaV3oP6c7j-ZRoC760QAvD_BwE:G:s&s_kwcid=AL!4422!3!696214219377!e!!g!!aws!15278604629!130587771740&gclid=CjwKCAjwmYCzBhA6EiwAxFwfgNX2e8t5fyQnolRMhkbMrB7EMaZA0TQAktI8JHsZWnaV3oP6c7j-ZRoC760QAvD_BwE&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all">AWS</a>'
    });
}

