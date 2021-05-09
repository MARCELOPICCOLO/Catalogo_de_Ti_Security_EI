$(document).ready(function(){

    loadEquipe();
    loadList();
    lodPleContinue();
    loadSecurity();
    hidePainelsOrdens();
});

/**
 *  show = ativa e desativa os paineis de ordens
 *  showDesc = ativa e dessativa os paines de descrição das ordens
 *  states = guarda o estado de cada botao dos paineis 
 */
let Show = false;
let showDesc = false;
let states = [false,false,false,false];

/** esconde o painel com as ordens 
 *  name = o nome da div a ser exibida ex = #prof
*/

function hidePainel(name){
    $(name).hide(3.0);
}
/**apaga o led */
function offLed(button){
    $(button).css("background-color","orange"); 
}

/** exibe o painel com as ordens 
 *  name = o nome da div a ser exibida ex = #prof
*/
function showPainel(name){
    $(name).show(3.0);
}
/**acende o led */

function onLed(button){
    $(button).css("background-color","rgb(91, 245, 20)"); 
}


/** Ativa e desativa os paineis de Ordens
 *  val = valor para selecionar a div a ser escondida
 */
function ShowPainel(val){
    Show = !states[val]; 

    switch(val){
        case 0:
            if(!states[0]){
                
                hidePainel("#prof");
                offLed("#btnProf");
            }else{
                showPainel("#prof");
                onLed("#btnProf");
            }
          
        break;

        case 1:
            if(!states[1]){
              
                hidePainel("#divSuporte");
                offLed("#btnSup");
            }else{
                showPainel("#divSuporte");
                onLed("#btnSup");
            }
           
        break;
        
        case 2:
            if(!states[2]){
               
                hidePainel("#divPC");
                offLed("#btnPc");
            }else{
                showPainel("#divPC");
                onLed("#btnPc");
            }

        break;

        case 3: 
        if(!states[3]){
               
            hidePainel("#divSeg");
            offLed("#btnSg");
        }else{
            showPainel("#divSeg");
            onLed("#btnSg");
        }
      break;
    } 

    states[val] = Show;

}

/**ativa ou desativa o painel de descrição das ordens 
   val = id do botao exemplo id = d1, c1 **/

function onOffDesc(val){
 
    showDesc = !showDesc;
   
    if(!showDesc){
        $('#'+val[0]+val+'').hide();
    }
    else{
        $('#'+val[0]+val+'').show();
    }
}

/**carrega o painel da equipe */

function loadEquipe(){
    var txt="";

    var equipe = [ 
                    {"nome" : "Amanda Vasconcellos Lima",
                    "cargo" : "Analista de Sistemas Pleno ",
                    "foto"  : "amanda.jpg"
                    },
                    {"nome" : "David Santos ",
                    "cargo" : "Analista de Sistemas Senior (CIO)",
                    "foto"  : "David.jpg"
                    },
                    {"nome" : "Paloma Pereira sanches ",
                    "cargo" : "Analista de Sistemas junior",
                    "foto"  : "paloma.jpg"
                    },
                    {"nome" : "Jão Paulo  Bastos ",
                    "cargo" : "Analista de Sistemas junior",
                    "foto"  : "Joao Paulo.jpg"
                    },
                    {"nome" : "Letícia Alves ",
                    "cargo" : "Analista de Sistemas junior",
                    "foto"  : "leticia.jpg"
                    },                         
                ];
                
                
    $.each(equipe, function(index){
        txt+='<div class="card"><img src="./Assets/'+equipe[index]["foto"]+'"  style="width:100px; height:100px; border-radius: 50%">';
        txt+='<div style="margin-left="20px"><h3>'+equipe[index]["nome"]+'</h3><p>'+equipe[index]["cargo"]+'</p></div></div>';
    })

    $("#prof").hide(txt);
    $("#prof").html(txt);

}

/** Carrega painel de Suporte Técninco */


function loadList(){
  var list = [{
               "Ordem" : "Manutenção de Equipamentos",
               "icon"  : '<i class="fas fa-tools" style="font-size:36px"></i>',
               "descricao"  : 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
               "permitidos" : "aaaa",
              },
              {
                "Ordem" : "Atualização de softwares",
                "icon"  : '<i class="fas fa-redo-alt" style="font-size:36px"></i>',
                "descricao"  : 'lorem .bbbbbbb.........................',
                "permitidos" : "aaaa",
              },
              {
                "Ordem" : "Configuração de rede",
                "icon"  : '<i class="fas fa-wifi" style="font-size:36px"></i>',
                "descricao"  : 'lorem ..ccccccc........................',
                "permitidos" : "aaaa",
              },
              {
                "Ordem" : "Instalar softwares",
                "icon"  : '<i class="fas fa-cubes" style="font-size:36px"></i>',
                "descricao"  : 'lorem ..ccccccc........................',
                "permitidos" : "aaaa",
              },

            ];

  var txt ="";
 
    $.each(list,function(index){
        txt+='<div class="card2"><div style="display:flex; justify-content:space-between;align-items:center"><div class="icon">'+list[index]["icon"]+'</div><h3>'+list[index]["Ordem"]+'</h3></div>';
        txt+='<div" id="d'+index+'" style="background-color=#ccc"; width:100%; cursor:pointer" onclick="onOffDesc(this.id)"> <i class="fas fa-angle-down" style="font-size:24px"></i>';
        txt+='<hr/>';
        txt+='<div id="dd'+index+'" class=painel>'+list[index]["descricao"]+'</div></div>';   
    })

   $("#divSuporte").html(txt);
   hidePainels(`d`,list);
}

/**Carrega o painel com os Planos de Continuidade **/

function lodPleContinue(){
    var txt="";
    var list = [
                    {
                        "Ordem" : "Realizar Backup",
                        "icon"  : '<i class="fas fa-database" style="font-size:36px"></i>',
                        "descricao"  : 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                        "permitidos" : "aaaa",                  

                    },
                    {
                        "Ordem" : "Acessar a Extranet",
                        "icon"  : '<i class="fas fa-globe" style="font-size:36px"></i>',
                        "descricao"  : 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                        "permitidos" : "aaaa",                  

                    },
                    {
                        "Ordem" : "Centralizar em Nuvem",
                        "icon"  : '<i class="fas fa-cloud" style="font-size:36px"></i>',
                        "descricao"  : 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                        "permitidos" : "aaaa",                  

                    },
                    {
                        "Ordem" : "Estruturar Datacenter",
                        "icon"  : '<i class="fas fa-server" style="font-size:36px"></i>',
                        "descricao"  : 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                        "permitidos" : "aaaa",                  

                    },
            
            ];

    
    $.each(list,function(index){
        txt+='<div class="card2"><div style="display:flex; justify-content:space-between;align-items:center; padding: 10px 20px"><div class="icon">'+list[index]["icon"]+'</div><h3>'+list[index]["Ordem"]+'</h3></div>';
        txt+='<div" id="c'+index+'" style="background-color=#ccc"; width:100%; cursor:pointer" onclick="onOffDesc(this.id)"> <i class="fas fa-angle-down" style="font-size:24px"></i>';
        txt+='<hr/>';
        txt+='<div id="cc'+index+'" class=painel>'+list[index]["descricao"]+'</div></div>';  
    })
    $("#divPC").html(txt);

    hidePainels(`c`,list);

}
/** carrega paineis de segurança da informação */
function loadSecurity(){

    var txt="";
    var list = [
                    {
                        "Ordem" : "Configurar Firewall",
                        "icon"  : '<i class="fas fa-shield-alt" style="font-size:36px"></i>',
                        "descricao"  : 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                        "permitidos" : "aaaa",                  

                    },
                    {
                        "Ordem" : "Passar Anti-vírus",
                        "icon"  : '<i class="fas fa-bug" style="font-size:36px"></i>',
                        "descricao"  : 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                        "permitidos" : "aaaa",                  

                    },
                    {
                        "Ordem" : "Gerenciar Acessos a rede",
                        "icon"  : '<i class="fas fa-exclamation-triangle" style="font-size:36px"></i>',
                        "descricao"  : 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
                        "permitidos" : "aaaa",                  

                    },
          
            
            ];

    
    $.each(list,function(index){
        txt+='<div class="card2"><div style="display:flex; justify-content:space-between;align-items:center; padding: 10px 20px"><div class="icon">'+list[index]["icon"]+'</div><h3>'+list[index]["Ordem"]+'</h3></div>';
        txt+='<div" id="e'+index+'" style="background-color=#ccc"; width:100%; cursor:pointer" onclick="onOffDesc(this.id)"> <i class="fas fa-angle-down" style="font-size:24px"></i>';
        txt+='<hr/>';
        txt+='<div id="ee'+index+'" class=painel>'+list[index]["descricao"]+'</div></div>';  
    })
    $("#divSeg").html(txt);

    hidePainels(`e`,list);

}



/***** Percorre a lista escondendo as div que contém as descrição das ordems de serviço
       val = identificador da id das divs ex= "cc1, dd1," *****/

function hidePainels(val,list){

    $.each(list,function(index){
       
        $('#'+val+val+index+'').hide(3.0);
    })
}

function hidePainelsOrdens(){
    $("#prof").hide();
    $("#divSuporte").hide();
    $("#divSeg").hide();
    $("#divPC").hide();
}