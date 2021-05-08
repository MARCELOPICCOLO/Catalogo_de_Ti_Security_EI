$(document).ready(function(){

    loadEquipe();
    loadList();
})

let Show = false;
let showDesc = false;


function hidePainel(name){
    $(name).hide(3.0);
}

function offLed(button){
    $(button).css("background-color","orange"); 
}

function showPainel(name){
    console.log(name);
    $(name).show(3.0);
}

function onLed(button){
    $(button).css("background-color","rgb(91, 245, 20)"); 
}



function ShowPainel(val){
    Show = !Show; 

    switch(val){
        case 0:
            if(!Show){
                hidePainel("#prof");
                offLed("#btnProf");
            }else{
                showPainel("#prof");
                onLed("#btnProf");
            }
        break;

        case 1:
            if(!Show){
                hidePainel("#divSuporte");
                offLed("#btnSup");
            }else{
                showPainel("#divSuporte");
                onLed("#btnSup");
            }
        break;
    } 
}


function onOffDesc(val){
 
    showDesc = !showDesc;
    console.log(showDesc);
   
    if(!showDesc){
        $('#d'+val+'').hide();
    }
    else{
        
    }
}


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


function loadList(){
  var list = [{
               "Ordem" : "Manutenção de Equipamentos",
               "icon"  : '<i class="fas fa-tools" style="font-size:36px"></i>',
               "descricao"  : 'lorem aaaaaaaa......................',
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

            ];

  var txt ="";
 
    $.each(list,function(index){
        txt+='<div class="card2"><div style="display:flex"><div class="icon">'+list[index]["icon"]+'</div>'+list[index]["Ordem"]+'</div>';
        txt+='<button type="button" id="d'+index+'" onclick="onOffDesc(this.id)">Exibir </button>';
        txt+='<hr/>';
        txt+='<div id="dd'+index+'" class=painel><pre>'+list[index]["descricao"]+'</div></div>';   
    })

   $("#divSuporte").html(txt);
}


