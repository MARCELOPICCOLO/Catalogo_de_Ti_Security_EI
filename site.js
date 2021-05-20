

var suporte = [{
    "Ordem" : "Manutenção de Equipamentos",
    "icon"  : '<i class="fas fa-tools" style="font-size:36px"></i>',
    "descricao"  : '<p> esta ordem de serviço deve ser acionada em caso de defeitos no equipamento como:'
                    +'mau funcionamento, queima, travamento, ruídos internos e outros.., para aciona-lo, o usuário'
                    +' deverá abrir uma ordem de serviço descrevendo nome de quem está solicitando, departamento'
                    +' e descrição prévia do defeito, onde a mesma será encaminhada para o departmaneto de TI'
                    + '</p>',
                    
   },
   {
     "Ordem" : "instalação e atualização de softwares",
     "icon"  : '<i class="fas fa-redo-alt" style="font-size:36px"></i>',
     "descricao"  : '<p>Para instalar um sofetware ou atualizar, deverá ser encaminhada uma ordem de serviço'
     +'preenchendo o formulário conforme o modelo abaixo com nome do usuário, departamento e descrição do software a ser instalado</p>',
     
   },
   {
    "Ordem" : "Recuperar Backup",
    "icon"  : '<i class="fas fa-database" style="font-size:36px"></i>',
    "descricao"  : '<p>Os backups são realizados todo dia após o término do expediente, sendo possível recuperar todos os dados do dia anterior'
    +'para recuperar um bkup deverá ser encaminhada uma ordem ao departamento de Ti conforme modelo abaixo com nome do usuário, departamento e descrição do prblema</p>',                      
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
        txt+='<div style="display:flex; text-align:center; justify-content: space-around; margin:20px 20px;width:20rem; padding:10px">'
            +'<img src="./Assets/'+equipe[index]["foto"]+'"  style="width:100px; height:100px; border-radius: 50%">'
            +'<div style="margin-left="20px">'
            +'<h3>'+equipe[index]["nome"]+'</h3>'
            +'<p style="font-size:1.2rem">'+equipe[index]["cargo"]+'</p>'
            +'</div>'
            +'</div>';
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
        txt+='<div id="'+varIdentify+varIdentify+index+'" class=painel>'+list[index]["descricao"]+'</div></div>';
           
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

}