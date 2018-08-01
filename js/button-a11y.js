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
		console.log(fonte);
	}
}



function contraste(){
	//var div = $("div");
	var body = $("body");
	var link = $("a");
	var button = $(".btnLogin");
	var banner = $(".imgBanner");
	var topBar = $(".topBar");
	var containerTopoMenu = $('.containerTopoMenu');
	var h = $('h2');

	var content = $('.content');

	content.css("color",'#fff');
	content.css("background",'#111');


	h.css("color",'#fff');

	
	containerTopoMenu.css("background",'#111');
	button.css("background",'#000');
	topBar.css("background",'#000');
	body.css("background",'#000');
	
	link.css("color",'#fff');

	


}
