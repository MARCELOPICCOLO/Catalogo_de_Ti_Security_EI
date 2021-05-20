<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de TI da Security E&I</title>
    <link rel="stylesheet" type="text/css" href="./estilo.css?v=14"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
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
    
    <div class="formulario my-5">
    <h2>Ordem de Serviço</h2>
            <form>
        <div class="form-group">
            <label for="exampleFormControlInput1" style="font-size:1.5rem">Nome:</label>
            <input type="text" class="form-control" id="exampleFormControlInput1">
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1" style="font-size:1.5rem">Departamento:</label>
            <select class="form-control" id="exampleFormControlSelect1" style="font-size:1.2rem">
            <option style="font-size:1.2rem">RH</option>
            <option style="font-size:1.2rem">Admin</option>
            <option style="font-size:1.2rem">Monitoramento</option>
            <option style="font-size:1.2rem">Marketing</option>
            <option style="font-size:1.2rem">Call Center</option>
            <option style="font-size:1.2rem">Vendas</option>
            <option style="font-size:1.2rem">Presidência</option>
            <option style="font-size:1.2rem">Direito</option>
            </select>
         </div>
         <div class="form-group">
            <label for="exampleFormControlTextarea1" style="font-size:1.5rem">Descreva o motivo da ordem de serviço:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" ></textarea>
            
        </div>   
        <button type="button" class="btn btn-primary my-3">Enviar</button>
    </div>
    

    <div  class="footer">
        <li>Marcelo Ciabatari Piccolo</li>
        <li>Larissa Camila Santos de Lima</li>
        <li> Antônio Marcelino Alves Dos Santos</li>
        <li> João vitor Batista Marques</li>
    </div>
    
</div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="site.js?v=3"></script>
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
</body>
</html>