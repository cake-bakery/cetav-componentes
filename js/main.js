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

getId("search-button").onclick = function() {
		getId("container-header").classList.toggle('show-search');	
};

getId("go-search").onclick = function() {
getId("container-header").classList.toggle('show-search');
};

getId("show-pay-form").onclick = function() {
		getId("pay-form").classList.toggle('show-pay-form');	
};