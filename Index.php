<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de TI da Security E&I</title>
    <link rel="stylesheet" type="text/css" href="./estilo.css?v=13"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>
<body>
<div class="container">
    <div  class="banner">
        <i class='fas fa-shield-alt' style='font-size:80px; color:rgb(206, 194, 85)'></i>
        <h1>SECURTY E&I</h1>
    </div>

    <H2 style="text-align: center; margin-top:20px; font-size: 2.1rem;color:#555"> Catálogo de Serviços de TI</h2>

    <div class="barra-titulos">Equipe de TI da Security E&I
        <button type="button" id="btnProf" class="but" onClick="ShowPainel(0)"></button>
    </div>
    <hr/>
    <div  id="prof" class="profis"></div>
    <div class="barra-titulos">Suporte Técnico
        <button type="button" id="btnSup" class="but" onClick="ShowPainel(1)"></button>
    </div>
    <hr/>
    <div id="divSuporte" class="suporte"></div>

    <div class="barra-titulos">Plano de Continuídade
        <button type="button" id="btnPc" class="but" onClick="ShowPainel(2)"></button>
    </div>
    <hr/>
    <div id="divPC" class="suporte"></div>

    <div class="barra-titulos">Segurança da Informação
        <button type="button" id="btnSg" class="but" onClick="ShowPainel(3)"></button>
    </div>
    <hr/>
    <div id="divSeg" class="suporte"></div>

    <div class="barra-titulos">Novas Soluções
        <button type="button" id="btnSol" class="but" onClick="ShowPainel(4)"></button>
    </div>
    <hr/>
    <div id="divSol" class="suporte"></div>

    <div  class="footer">
        <li>Marcelo Ciabatari Piccolo</li>
        <li>Larissa Camila Santos de Lima</li>
        <li> Antônio Marcelino Alves Dos Santos</li>
        <li> João vitor Batista Marques</li>
    </div>
    
</div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="site.js?v=3"></script>
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
</body>
</html>