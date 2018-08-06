//aumentar fonte do site
function fonte(e) {
	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));
	var bannerResp = $(".bannerResponsive");
	var redesSociais = $(".dadosRedesSociais");
	var cadastrar = $(".buttonAzulFlat");
	var content = $('.content');

	var t = $('.bannerHumanizado .bannerResponsive p');

	var boxVagas = $('.vagasRecentes');

	e == 'a' ? fonte++ : fonte=12;
	if(fonte < 20 && fonte > 11){
		elemento.css("fontSize", fonte);
		bannerResp.css('height', 120);
		redesSociais.css('margin-right',840);
		redesSociais.css('margin-top',0	);

		console.log(fonte);
		if (fonte == 12){
			bannerResp.css('height', 75);
			redesSociais.css('margin-top',20);
			redesSociais.css('margin-right',0);
		}
		if(fonte > 14){
			elemento.css("height", 195);
			elemento.css("padding",2);
			if(fonte > 16){
				bannerResp.css('height', 150);
				cadastrar.css('width',185);
				cadastrar.css('margin-top','-35px');
				cadastrar.css('margin-left',140);
				t.css('margin-top', '30px');
				t.css('margin-left', '-2px');
				t.css('line-height', '32px');
				t.css('text-align', 'left');
				boxVagas.css("height",550);
				boxVagas.css("background", "red");
				content.css("height",225);
				content.css("margin-top",'55px');
				content.css("padding-bottom",10);
				content.css("border","2px solid blue");
			}		
		}else{
			elemento.css("height", 185);
			cadastrar.css('width',145); 
		}
	}
}

// Função mudança do contraste do site 
var contador =0;
	$(function contraste(){ 
		$(".buttonContraste").click(function(){

			contador++;

			if ((contador % 2) == 0){
				window.location = "index.html";
			}else{
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
		});
	});
		

