

var suporte = [{
    "Ordem" : "Manutenção de Equipamentos",
    "icon"  : '<i class="fas fa-tools" style="font-size:36px"></i>',
    "descricao"  : '<p>Por motivo de segurança, a TI ficará a cargo de prestar manutenção nos equipamentos internos descrito nos itens:'
                    + '<li>Trocar todas as placas e dispositivos</li><li>Instalar novos equipamentos</li></p>',
                    
    "permitidos" : "Técnico de Informática",
   },
   {
     "Ordem" : "Atualização de softwares",
     "icon"  : '<i class="fas fa-redo-alt" style="font-size:36px"></i>',
     "descricao"  : '<p>Fica a cargo da TI atualizar os softwares e licenças dos softwares internos.</p>',
     "permitidos" : "Técnico de Informática",
   },
   {
     "Ordem" : "Configuração de rede",
     "icon"  : '<i class="fas fa-wifi" style="font-size:36px"></i>',
     "descricao"  : '<p>Fica a cargo da Ti todo o gerenciamento da comunicação interna a cooporação como:'
                    +'<li>Configurar endereço dos equipamentos na rede</li><li>Adicionar ou remover equipamentos</p></li>',
     "permitidos" : "Técnico de Informática",
   },
   {
     "Ordem" : "Instalar softwares",
     "icon"  : '<i class="fas fa-cubes" style="font-size:36px"></i>',
     "descricao"  : '<p>Para garantir a segurança da coorporações, deverá ser utilizado softwares originais</p>',
     "permitidos" : "Técnico de Informática",
   },

 ];

 var plain = [
    {
        "Ordem" : "Realizar Backup",
        "icon"  : '<i class="fas fa-database" style="font-size:36px"></i>',
        "descricao"  : '<p>A Ti deverá realizar o backup diariamente após o término do expediente, o backup deverá ser guardado em mídias não volatéis e armazenamento em nuvens</p>',
        "permitidos" : "DBA, analistas",                  

    },
    {
        "Ordem" : "Centralizar em Nuvem",
        "icon"  : '<i class="fas fa-cloud" style="font-size:36px"></i>',
        "descricao"  : '<p>O sistema central deverá estar centralizado nas nuvens cabendo a Ti garantir a segurança e funcionamento</p>.',
        "permitidos" : "TI em geral",                  

    },
    {
        "Ordem" : "Estruturar Datacenter",
        "icon"  : '<i class="fas fa-server" style="font-size:36px"></i>',
        "descricao"  : '<p>A Ti cuidará da segurança dos dados coletados, o banco de dados deverá seguir os itmens:'
                    + '<li>Estar configurado em um local seguro a acidentes naturais</li><li>conter dispositivo anti-chamas</li><li>possír cópias de segurança armazenado em nuvem</p></li>',
        "permitidos" : "TI em geral",                  

    },

];

var security = [
    {
        "Ordem" : "Configurar Firewall",
        "icon"  : '<i class="fas fa-shield-alt" style="font-size:36px"></i>',
        "descricao"  : '<p>Cabe a TI zelar pela segurança da comeunicação da coorporação, onde deverá proteger os equipamentos com firewall e anti malwares.</p>',
        "permitidos" : "CSO, analistas",                  

    },
    {
        "Ordem" : "Passar Anti-vírus",
        "icon"  : '<i class="fas fa-bug" style="font-size:36px"></i>',
        "descricao"  : '<p>Cabe a TI garantir a segurança dos equipamentos da coorporação, seguindo os itens:'
                       +'<li>Passar anti-virus 2 vezes por semanas em horários agendados</li><li>Passar anti-virus em todas as mídias não volatés</li></p>',
        "permitidos" : "Analistas, técnico",                  

    },
    {
        "Ordem" : "Gerenciar Acessos a rede",
        "icon"  : '<i class="fas fa-exclamation-triangle" style="font-size:36px"></i>',
        "descricao"  : '<p>A Ti deverá cuidar dos acessos realizados internamente, permitindo ou restringindo acessos por meio de colaboradores</p>',
        "permitidos" : "CSO",                  

    },


];

var solutions = [
    {
        "Ordem" : "Implantar novas soluções",
        "icon"  : '<i class="fas fa-lightbulb" style="font-size:36px"></i>',
        "descricao"  : '<p>A TI deverá ficar a cargo das necessidades da coorporação, e responsabilizará por:'
                    +  '<li>levantar requisitos</li><li>Projetar novas soluções</li><li>Desenvoler e Implantar projetos<p></li>',
        "permitidos" : "TI em geral",                  
    },

];

/**
 *  show = ativa e desativa os paineis de ordens
 *  showDesc = ativa e dessativa os paines de descrição das ordens
 *  states = guarda o estado de cada botao dos paineis 
 */
 let Show = false;
 let showDesc = false;
 let states = [false,false,false,false];

$(document).ready(function(){
    Initialize();
});

function Initialize(){
    loadEquipe();
    loadPainels(suporte,"#divSuporte","a");
    loadPainels(plain,"#divPC","b");
    loadPainels(security,"#divSeg","c");
    loadPainels(solutions,"#divSol","d");

    hidePainelsOrdens();
}


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

      case 4: 
      if(!states[4]){
             
          hidePainel("#divSol");
          offLed("#btnSol");
      }else{
          showPainel("#divSol");
          onLed("#btnSol");
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
                    {"nome" : "Amanda",
                    "cargo" : "CSO (Chief Security Officer)",
                    "foto"  : "amanda.jpg"
                    },
                    {"nome" : "David",
                    "cargo" : "CIO (Chief Information Officer)",
                    "foto"  : "David.jpg"
                    },
                    {"nome" : "Paloma",
                    "cargo" : "DBA (Database Admin)",
                    "foto"  : "paloma.jpg"
                    },
                    {"nome" : "Jão Paulo",
                    "cargo" : "Analista de Sistemas",
                    "foto"  : "Joao Paulo.jpg"
                    },
                    {"nome" : "Letícia",
                    "cargo" : "Analista de Sistemas",
                    "foto"  : "leticia.jpg"
                    },
                    {
                    "nome" : "wellington ",
                    "cargo" : "Analista e técnico de informática",
                    "foto"  : "wellington.png"
                    },
                                            
                ];
                
                
    $.each(equipe, function(index){
        txt+='<div class="card"><img src="./Assets/'+equipe[index]["foto"]+'"  style="width:100px; height:100px; border-radius: 50%">';
        txt+='<div style="margin-left="20px"><h3>'+equipe[index]["nome"]+'</h3><p style="font-size:1.2rem">'+equipe[index]["cargo"]+'</p></div></div>';
    })

    $("#prof").hide(txt);
    $("#prof").html(txt);

}



/**carrega o painel de soluções
 * List = array com as jsons das ordens de serviço
 * nameDiv = a div que sera atribuida os dados pelo js
 * varIndeitfy = é a vogal identificador da da div exempo c1, cc1, d1, dd1
*/

function loadPainels(list,nameDiv,varIdentify){
    var txt="";

    $.each(list,function(index){
        txt+='<div class="card2"><div class="divImgTitle"><div class="icon">'+list[index]["icon"]+'</div><h3>'+list[index]["Ordem"]+'</h3></div>';
        txt+='<div" id="'+varIdentify+index+'" class="buttonDesc"  onclick="onOffDesc(this.id)"> <i class="fas fa-angle-down" style="font-size:24px"></i>';
        txt+='<hr/>';
        txt+='<div id="'+varIdentify+varIdentify+index+'" class=painel>'+list[index]["descricao"]+'</div>'
              +'<p style="margin-top:10px"> Autorizado : '+list[index]["permitidos"]+'</div>';  
    })
    $(nameDiv).html(txt);

    hidePainels(varIdentify,list);


}


/***** Percorre a lista escondendo as div que contém as descrição das ordems de serviço
       val = identificador da id das divs ex= "cc1, dd1," *****/

function hidePainels(val,list){

    $.each(list,function(index){
       
        $('#'+val+val+index+'').hide(3.0);
    })
}

/**Esconde os paineis */

function hidePainelsOrdens(){
    $("#prof").hide();
    $("#divSuporte").hide();
    $("#divSeg").hide();
    $("#divPC").hide();
    $("#divSol").hide();
}