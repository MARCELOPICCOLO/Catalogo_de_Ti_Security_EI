<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de TI da Security E&I</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="site.js"></script>
    <link rel="stylesheet" href="style.css?v=2">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
</head>
<body>
<div class="container">
    <h3>Catáligo de TI da Security E&I</h3>
    <div class="barra-titulos">Equipe de TI da Security E&I
        <button type="button" id="btnProf" class="but" onClick="ShowPainel(0)"></button>
    </div>
    <hr/>
    <div  id="prof" class="profis">
    </div>
    <div class="barra-titulos">Suporte Técnico
        <button type="button" id="btnSup" class="but" onClick="ShowPainel(1)"></button>
    </div>
    <hr/>
    <div id="divSuporte" class="suporte"></div>
    
</div>
</body>
</html>