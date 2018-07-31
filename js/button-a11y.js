function fonte(e) {
	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));



	e == 'a' ? fonte++ : fonte=12;
	if(fonte < 16 && fonte > 11){
		elemento.css("fontSize", fonte);
		if(fonte > 14){
			elemento.css("height", 195);
			elemento.css("padding",2);
			rede.css("size",fonte);
		}else{
			elemento.css("height", 185);
		}
		console.log(fonte);
	}
}

