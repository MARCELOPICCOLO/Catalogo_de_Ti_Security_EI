<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de TI da Security E&I</title>
    <link rel="stylesheet" type="text/css" href="./estilo.css?v=5"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>
<body>
<div class="container">
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
    
</div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="site.js?v=3"></script>
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
</body>
</html>