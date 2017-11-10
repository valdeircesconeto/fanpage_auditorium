var posicao = 0;
var mensagem = "$ vim nome_do_arquivo  </br> <ol> <li> <span style='color: blue';> public function</span> __construct() </li> <li> { </li> <li>  $this->middleware(<span style='color=green';>'auth'</span>);</li> <li> } </li> </ol> "; // Digite entre as aspas o que você quiser, inclusive tags HTML.

function rola() {
  document.getElementById("lugar").innerHTML = mensagem.substring(posicao, mensagem, length);
  posicao++;
  if (posicao == mensagem.length) {
    posicao = 0;
  }
  setTimeout("rola()", 170); // O número mencionado pode ser alterado, pois ele indica a velocidade com que a mensagem irá surgir. Quanto maior, mais lento.
}
