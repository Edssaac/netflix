// Função responsável por gerenciar o uso da classe que anima a interação no menu:
function seletor(selected)
{
    var links = document.querySelectorAll('nav a');

    for ( var link of links )
    {
        if ( link.text == selected.text )
        {
            link.classList.add('selected')
        }
        else
        {
            link.classList.remove('selected')
        }
    }
}

// Links iniciais:
var linkAssistir = 'https://www.youtube.com/watch?v=CwXOrWvPBPk';
var linkInfo = 'https://pt.wikipedia.org/wiki/Shrek';

// Função responsável por usar o link de assistir:
function assistir()
{
    window.open( linkAssistir );
}

// Função responsável por usar o link de informações:
function informar()
{
    window.open( linkInfo );
}

// Função responsável por obter as informações do filme selecionado:
function card(image)
{
    // var requestURL = 'http://127.0.0.1:5500/js/data.json';
    var requestURL = 'https://edssaac.github.io/ShrekFlix/js/data.json';
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() 
    {
        var filmes = request.response;
        var infos = filmes[image.alt];
        atualizarCardPrincipal(infos);
    }
}

// Função responsável por atualizar o card principal com as informações obtidas:
function atualizarCardPrincipal(infos)
{
    var titulo = document.querySelector('.titulo');
    var descricao = document.querySelector('.descricao');
    // var path = '../img/banners/'+infos['banner']+'.jpg';
    var path = 'https://edssaac.github.io/ShrekFlix/img/banners/'+infos['banner']+'.jpg';
    var principal = document.querySelector('.filme-principal');
    
    titulo.innerHTML = infos['titulo'];
    descricao.innerHTML = infos['descricao'];
    
    principal.style.background = `linear-gradient( rgba(0,0,0,.50), rgba(0,0,0,.50) 100% ), url('${path}')`;
    principal.style.backgroundSize  = 'cover';

    linkAssistir = infos['assistir'];
    linkInfo = infos['infos'];
}