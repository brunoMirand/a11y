//aumentar fonte do site
function fonte(e) {
	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));
	var bannerResp = $(".bannerResponsive");
	var redesSociais = $(".dadosRedesSociais");
	var cadastrar = $(".bannerHumanizado .bannerResponsive .dadosRedesSociais .buttonAzulFlat");
	var content = $('.content');
	var contentTitulo = $('.vagasRecentes article section div .content h2');
	var cont = $('.vagasRecentes article section div');
	var t = $('.bannerHumanizado .bannerResponsive p');
	var boxVagas = $('.vagasRecentes');
	var depoimentosFoto = $('.fotoUsuario');
	var depoimentoTitulo = $('.geralDepoimentos article .texto h3');

	e == 'a' ? fonte++ : fonte=12;
	if(fonte < 20 && fonte > 11){
		elemento.css("fontSize", fonte);
		bannerResp.css('height', 120);
		redesSociais.css('margin-right',840);
		redesSociais.css('margin-top',0	);
		if (fonte == 12){
			window.location = "index.html"; 	
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
				boxVagas.css("background", '#f0f0f0');
				content.css("height",225);
				content.css("margin-top",'0px');
				content.css("padding-bottom",10);
				content.css("border","20px solid #f0f0f0");
				contentTitulo.css("padding-bottom", "7px");
				cont.css("width","99.7%");
				cont.css("padding","10px");
				boxVagas.css("height","845px");
				depoimentosFoto.css({'width':'120px','height': '120px'});
				depoimentoTitulo.css('margin', '-60px 0 15px 0');
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
				var subMenu = $('.header .menuHeader nav ul li ul li a, .header .menuHeader nav>ul li>ul');
				var subTituloMenu = $('.header .menuHeader nav>ul li>ul li.subTitulo');

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
				subMenu.css({'color': '#fff','background': '#111'});
				subTituloMenu.css("color", "#000");		
			}
		});
	});
		

