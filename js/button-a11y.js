function fonte(e) {
	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));
	var bannerResp = $(".bannerResponsive");
	var redesSociais = $(".dadosRedesSociais");

	e == 'a' ? fonte++ : fonte=12;
	if(fonte < 16 && fonte > 11){
		elemento.css("fontSize", fonte);
		bannerResp.css('height', 120);
		redesSociais.css('margin-right',840);
		redesSociais.css('margin-top',0	);
		if (fonte == 12){
			bannerResp.css('height', 75);
			redesSociais.css('margin-top',20);
			redesSociais.css('margin-right',0);
		}
		if(fonte > 14){
			elemento.css("height", 195);
			elemento.css("padding",2);		
		}else{
			elemento.css("height", 185);
		}
	}
}

function contraste(){
	var topBar = $(".topBar, .bannerDfp");
	var containerTopoMenu = $('.containerTopoMenu');
	var body = $("body");
	var link = $("a, h3, .bottomBar p");
	var button = $(".btnLogin");
	var subtitulo = $('h2');
	var texto = $('.texto');
	var textoEmpresas = $('p');	
	var group = $('.bottomParceiros ul li span, .toggleListas span, .groupTitle b, .branco, i');
	var footer = $('.bottomBarContainer,.navContainer,.titleFooter');
	var content = $('.content');
	
	textoEmpresas.css('color',"#000");
	group.css("color", '#fff');
	footer.css("background", '#111');	
	topBar.css("background",'#000');
	texto.css("background", '#111');
	containerTopoMenu.css("background",'#111');
	body.css("background",'#000');
	link.css("color",'#fff');
	subtitulo.css("color",'#fff');
	button.css("background",'#000');
	content.css({'color':'#fff','background': '#111'});
}