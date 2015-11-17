(function (window, undefined) {
  function getId(c){
    var elElemento = document.getElementById(c);
   return elElemento;
  }

  getId("show-pay-form").onclick = function() {
    this.classList.toggle('hide-button');
    getId("flip-wrap").classList.toggle('hide-flip-wrap');
    getId("pay-form").classList.toggle('show-pay-form');
    setTimeout(function(){
      getId("show-pay-form").style.display='none';
    }, 2000);
  };

  getId("play-gen-video").onclick = function() {
    var iframe = getId('gen-video');
    var player = $f(iframe);
    player.api("play");
    getId("video-generation-info").style.display='none';
    console.log('play-video');
  };

  getId("play-descripcion-video").onclick = function() {
    var iframe = getId('description-video');
    var player = $f(iframe);
    player.api("play");
    getId("video-descripcion-info").style.display='none';
    console.log('play-video');
  };
})(window);