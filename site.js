$(document).ready(function(){

    loadEquipe();
    loadList();
})

let Show = false;


function hidePainel(name){
    $(name).hide(3.0);
}

function offLed(button){
    $(button).css("background-color","orange"); 
}

function showPainel(name){
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
  var list = [{"Ordem" : "Suporte Técnico",
               "icon"  : '<i class="fas fa-tools" style="font-size:36px"></i>',
               "descricao"  : 'lorem ...............................',
               "permitidos" : "aaaa",
              }
            ];
  var txt ="";


    $.each(list,function(index){
        txt+='<div class="card"><div class="icon">'+list[index]["icon"]+'</div>'+list[index]["Ordem"]+'</div>';
        txt+='<div class=painel>'+list[index]["descricao"]+'</div>';
    })
   
   $("#divSuporte").html(txt);
}

