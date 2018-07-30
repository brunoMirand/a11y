function fonte(e) {
	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));
	e == 'a' ? fonte++ : fonte--;
	if(fonte < 17 && fonte > 10){
		elemento.css("fontSize", fonte);
		if(fonte > 14){
			elemento.css("height", 195);
			elemento.css("padding",2);
		}else{
			elemento.css("height", 185);
		}
		console.log(fonte);
	}
}

