
<script type="text/javascript">

window.onload = function()
{
 

//Seleciona o elemento body para que possamos alterar seu estilo.
var corpoDaPagina = document.querySelector('body');
var aumentarTexto = document.getElementById('aumentar-Texto');
var diminuirTexto = document .getElementById('diminuir-texto');


// O padrão de tamanho equivale a 100% do valor definido no style
var fontsize = 100;
// Valor percentual de 10% que irá aumentar ou diminuir do padrão da fonte
var qntaumentarDiminuir = 10;
 // Evento de click para aumentar a fonte
aumentarTexto.addEventListener
 ('click', function(event)
{
fontSize = fontSize + qntAumentarDiminuir;
corpoDaPagina.style.fontSize = fontSize + '%';
}
 );


// Evento de click para diminuir a fonte

diminuirTexto.addEventListener
('click', function(event)
{
fontSize = fontSize - qntAumentarDiminuir;
corpoDaPagina.style.fontsize = fontsize + '%';
}
);
}

 </script>
