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

var search = false;
getId("search-button").onclick = function() {
	if (!search) {
		getId("container-header").classList.add('show-search');
		search = true;
	}else{
		var id = this.getAttribute("data-menu");
		getId("container-header").classList.remove('show-search');
		search = false;
	}
};

getId("go-search").onclick = function() {
getId("container-header").classList.remove('show-search');
};