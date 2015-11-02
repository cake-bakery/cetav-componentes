Function.prototype.method = function(name, func){
  if(!this.prototype[name]){
      this.prototype[name] = func;
  } 
  return this;
}

function getId(c){
  var elElemento = document.getElementById(c);
 return elElemento;
}

getId("show-pay-form").onclick = function() {
	this.classList.toggle('hide-button');
	getId("pay-form").classList.toggle('show-pay-form');
	setTimeout(function(){
		getId("show-pay-form").style.display='none';
	}, 1000);	
};