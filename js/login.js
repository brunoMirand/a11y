this.Utils = function() {
    this.getUrlParameter = function(a) {
        var c = window.location.search.substring(1),
            d = c.split("&"),
            e, b;
        for (b = 0; b < d.length; b = b + 1) {
            e = d[b].split("=");
            if (e[0] === a) {
                return e[1]
            }
        }
        return false
    };
    this.getQueryStringUrl = function(a) {
        var b = a.indexOf("?") + 1;
        if (b == 0) {
            return false
        }
        return a.slice(b)
    };
    this.htmlEntities = function(a) {
        var b = String(a);
        b = b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/Ã©/g, "&eacute").replace(/Ã‰/g, "&Eacute;").replace(/Ã¡/g, "&aacute;").replace(/Ã/g, "&Aacute;");
        return b
    };
    this.testHtmlTags = function(b) {
        var a = /(<([^>]+)>)/;
        return a.test(b)
    };
    this.combineObject = function(b, a) {
        var d = b,
            c;
        for (c in d) {
            if (typeof a[c] !== "undefined") {
                d[c] = a[c]
            }
        }
        return d
    };
    this.cloneObject = function(a) {
        var b = {},
            c;
        for (c in a) {
            b[c] = a[c]
        }
        return b
    };
    this.getKeyByValue = function(a, b) {
        for (var c in b) {
            if (b.hasOwnProperty(c)) {
                if (b[c] === a) {
                    return c
                }
            }
        }
    };
    this.getAmbientDomain = function() {
        return window.location.hostname.replace(/^\w+\./, "")
    }
};
Number.prototype.formatMoney = function() {
    var a = this.toString().replace(".", "");
    a = a.replace(/([0-9]{2})$/g, ",$1");
    if (a.length > 6) {
        a = a.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
    }
    return a
};
Number.prototype.between = function(e, d) {
    var f = Math.min.apply(Math, [e, d]),
        c = Math.max.apply(Math, [e, d]);
    return this >= f && this <= c
};
String.prototype.replaceAll = function(d, a) {
    if (typeof(d) !== "string" || typeof(a) !== "string") {
        throw "TypeError: O paramtro deve ser do tipo string"
    }
    var b = this,
        c = b.indexOf(d);
    while (c > -1) {
        b = b.replace(d, a);
        c = b.indexOf(d)
    }
    return b
};
String.prototype.pregQuote = function() {
    return this.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1")
};
String.prototype.replaceAcentos = function() {
    return this.replace(/[Ã¡|Ã£|Ã¢|Ã ]/gi, "a").replace(/[Ã©|Ãª|Ã¨]/gi, "e").replace(/[Ã­|Ã¬|Ã®]/gi, "i").replace(/[Ãµ|Ã²|Ã³|Ã´]/gi, "o").replace(/[Ãº|Ã¹|Ã»|Ã¼]/gi, "u").replace(/[Ã§]/gi, "c").replace(/[Ã±]/gi, "n")
};
String.prototype.getClearString = function() {
    return $.trim(this.toLowerCase().replaceAcentos())
};
String.prototype.formatMoney = function() {
    var a = this.replace(".", "");
    a = a.replace(/([0-9]{2})$/g, ",$1");
    if (a.length > 6) {
        a = a.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
    }
    return a
};
Array.prototype.compareArray = function(e) {
    if (typeof(e) !== "object") {
        throw "TypeError: O array deve ser do tipo array"
    }
    var a = this,
        d = a.length,
        b = true,
        c;
    if (e && d === e.length) {
        for (c = 0; c < d; c = c + 1) {
            if (a[c] instanceof Array && e[c] instanceof Array) {
                if (!a[c].compareArray(e[c])) {
                    b = false
                }
            } else {
                if (a[c] !== e[c]) {
                    b = false
                }
            }
        }
    } else {
        b = false
    }
    return b
};
Array.prototype.cleanArray = function() {
    var a = this,
        c = [];
    for (var b = 0; b < a.length; b = b + 1) {
        if (a[b]) {
            c.push(a[b])
        }
    }
    return c
};
var lastObject;
$(function() {
    $.dropDownLocalidade();
    $.menuSuspenso();
    $.menuSuspensoLogado();
    $.alertCatho();
    $.formLogin();
    $.dropDownLogin();
    $.toTop();
    $.suportPlaceholder();
    $.sendMetrics();
    $.popUpSelosSeguranca();
    $.layerAlterarFoto();
    $.initPerfil();
    $.fecharBoxMensagem(".msg", ".closeMsg");
    mudaLinkRodape();
    $(".btnAnunciarVaga").hover(function() {
        $(this).find("span").addClass("hoverAnunciarVagas")
    }, function() {
        $(this).find("span").removeClass("hoverAnunciarVagas")
    });
    if ($("#boxLoginB2b .boxLogin").length > 0) {
        fixaLogin($(".containerLogin"))
    } else {
        $(".containerLogin").hover(function() {
            $("#btnLogin").removeClass().addClass("removeBorder");
            $("#boxLoginB2b").show()
        }, function() {
            $("#btnLogin").removeClass().addClass("addBorder");
            $("#boxLoginB2b").hide()
        })
    }
    if (typeof(siteAtual) !== "undefined") {
        $("#colorbox").addClass(siteAtual)
    }
    if ($.isTouch() == false) {
        $.layersLinksFuncaoTop()
    } else {
        $(".colorbox").click(function(a) {
            a.preventDefault();
            window.open($(this).attr("href"), "_blank")
        })
    }
    $(".topBar li a").click(function(a) {
        if ($(this).attr("href") == "#") {
            return false
        }
    })
});

function mudaLinkRodape() {
    var b = $("#carreira_sucesso_rodape").parent(),
        a = $(b).html();
    $(b).html('<p class="subNivelB2B"><span class="bullet">â€¢</span>' + a + "</p>");
    $(b).parent().addClass("listaSemMargem");
    $("#nosso_numeros_rodape").parent().append('<span class="separadorSubmenu"></span>')
}
$.fazRequisicao = function(a) {
    if (s_objectID == "btn_perfil_Profissional") {
        $("#titleAreaProfissional").text("Ãrea profissional:")
    } else {
        if (s_objectID == "btn_perfil_Estagiario") {
            $("#titleAreaProfissional").text("Ãrea de formaÃ§Ã£o:")
        } else {
            if (s_objectID == "btn_perfil_Operacional") {
                $("#titleAreaProfissional").text("Cargos:")
            } else {
                if (s_objectID == "btn_perfil_PcD") {
                    $("#titleAreaProfissional").text("Ãrea profissional:")
                }
            }
        }
    }
    if (typeof(a) != "undefined") {
        if (lastObject == a.id) {
            return
        }
        lastObject = a.id
    } else {
        lastObject = ""
    }
    if (a == null || a == "" || a.tagName == "A" || a.tagName == "INPUT") {
        return
    }
    $.executaRequisicao(a)
};
$.executaRequisicao = function(l) {
    if (Organizacao.isManager()) {
        return false
    }
    try {
        var h = s.pageURL,
            a = new Date(),
            m = a.getHours(),
            d = a.getMinutes(),
            n = a.getSeconds(),
            p = a.getDate(),
            j = a.getMonth() + 1,
            o = a.getFullYear(),
            b = "http://metrics.catho.com.br/",
            g = "",
            k = "";
        if (l.href != null && l.href.substring(0, 5) == "https") {
            b = "https://smetrics.catho.com.br/"
        }
        k = (1 + m) * (1 + d) * (1 + n) * (1 + p) * (1 + j) * (1 + o);
        g = p + "/" + j + "/" + o + " " + m + ":" + d + ":" + n + " 4 120";
        var f = b + "b/ss/cathodev/1/H.17/s" + k + "?AQB=1&ndh=1&t=" + g + "&ce=" + encodeURIComponent(s.charSet) + "&ns=" + encodeURIComponent(s.visitorNamespace) + "&cdp=3&pageName=" + encodeURIComponent(s.pageName) + "&g=" + encodeURIComponent(s.pageURL) + "&cc=" + encodeURIComponent(s.currencyCode) + "&c24=" + encodeURIComponent(s.pageName) + "&s=" + encodeURIComponent(s.resolution) + "&c=24&j=" + encodeURIComponent(s.javascriptVersion) + "&v=Y&k=Y&bw=" + encodeURIComponent(s.browserWidth) + "&bh=" + encodeURIComponent(s.browserHeight) + "&p=" + encodeURIComponent(s.plugins) + "&pe=lnk_e&pev1=" + encodeURIComponent(h) + "&pid=" + encodeURIComponent(s.pageName) + "&pidt=1&oid=" + encodeURIComponent(l.id) + "&oidt=1&ot=" + encodeURIComponent(l.tagName) + "&oi=1&AQE=1";
        $("#imgCatalyst").html("<img src='" + f + "' width='0' border='0' alt='' />");
        $("#imgCatalyst").html("")
    } catch (c) {}
};
$.toTop = function() {
    $("#ir_para_topo").on({
        click: function(a) {
            a.preventDefault();
            $.animateScroll(700, $(this).attr("href"))
        }
    })
};
$.dropDownLocalidade = function() {
    $(".inputLocalidade, .dropDownLocalidade").click(function() {
        $(".layerLocalidade").toggle()
    });
    $(".btnOkLocalidade").click(function() {
        $(".layerLocalidade").hide()
    })
};
$.menuSuspenso = function() {
    if ($.isTouch() == false) {
        var a = 0;
        $(".menuSuspenso").parent().hover(function() {
            $(this).children(".menuSuspenso").show()
        }, function() {
            $(this).children(".menuSuspenso").hide()
        })
    } else {
        $(".menuSuspenso").parent().find("a:first").click(function(b) {
            b.stopPropagation();
            $(this).next(".menuSuspenso").toggle();
            $(this).parent().siblings(".itemMenuDrop").children(".menuSuspenso").hide();
            return false
        });
        $("html").click(function() {
            $(".menuSuspenso").hide()
        })
    }
};
$.supports_input_placeholder = function() {
    var a = document.createElement("input");
    return "placeholder" in a
};
$.suportPlaceholder = function() {
    if ($.supports_input_placeholder() == false) {
        $("input").each(function() {
            if ($(this).attr("placeholder") != undefined && $(this).attr("type") != "password") {
                $.placeholder(this)
            }
        });
        $("form").on({
            submit: function() {
                $("input").each(function() {
                    if (this.value == $(this).attr("placeholder")) {
                        this.value = ""
                    }
                })
            }
        });
        $('input[type="submit"]').on({
            click: function() {
                $("input").each(function() {
                    if (this.value == $(this).attr("placeholder")) {
                        this.value = ""
                    }
                })
            }
        })
    }
};
$.placeholder = function(a) {
    var c = $(a);
    var b = c.attr("placeholder");
    if (c.val() == "") {
        c.val(b)
    }
    c.on({
        focus: function() {
            if (c.val() == b) {
                c.val("")
            }
        },
        blur: function() {
            if (c.val() == "") {
                c.val(b)
            }
        }
    })
};
$.animateScroll = function(a, c, d) {
    var b = $(c).offset().top;
    if (d != undefined) {
        b += d
    }
    $("html, body").animate({
        scrollTop: b
    }, a)
};
$.cursorPerfil = function() {
    $("ul.perfis a").click(function() {
        $(this).closest("li").click();
        var c = false;
        var d = $(this).html();
        var b = $(this).parent().width();
        var e = $(this).parent().css("padding-left").replace("px", "");
        e = e * 2;
        b = (b + e) / 2;
        var a = 0;
        $("ul.perfis a").css({
            fontWeight: "normal"
        });
        $(this).css({
            fontWeight: "bold"
        });
        $("ul.perfis a").each(function() {
            if ($(this).html() != d) {
                if (!c) {
                    a = a + $(this).parent().width() + e
                }
            } else {
                c = true
            }
        });
        $(".perfilSelected").animate({
            left: a + b - 9
        }, 200);
        if ($(this).attr("data-media") == 12) {
            $('input[name="perfil_id"]').val(1);
            $('input[name^="ppd"]').attr("checked", true)
        } else {
            $('input[name="perfil_id"]').val($(this).attr("data-media"));
            $('input[name^="ppd"]').attr("checked", false)
        }
        $.verificarPerfilNivelHierarquico();
        return false
    })
};
$.dropDownLogin = function() {
    $("ul.dropDownProdutosLogado a").click(function() {
        var a = $(this);
        setTimeout(function() {
            var c = a.attr("href");
            var b = a.html();
            $.ajax({
                url: "/empresa/home/ajaxCriaCookieLoginEmpresa/",
                data: "loginHrefAreaPrincipal=" + c + "&loginAreaPrincipal=" + b,
                type: "post",
                success: function() {},
                complete: function() {
                    location.href = c
                }
            })
        }, 200);
        return false
    });
    $(document).click(function(a) {
        if (!a.target.className.indexOf) {
            return false
        }
        if (a.target.className != "labelUser clearfix" && a.target.className != "iconUser" && a.target.className.indexOf("iconsLogin") == -1 && a.target.className != "setaDropDefault") {
            $(".dropDownProdutos").hide()
        } else {
            $(".dropDownProdutos").slideToggle(20)
        }
        if (a.target.className != "linkDrop linkDropFechado" && a.target.className != "linkDrop linkDropAberto" && a.target.className != "setaDropDefault") {
            $(".dropDownProdutosLogado").hide();
            if (($(".linkDrop").attr("class") != "linkDrop linkDropFechado")) {
                $(".linkDrop").removeClass("linkDropAberto").addClass("linkDropFechado")
            }
        }
    });
    $(window).scroll(function() {
        $(".dropDownProdutos").css("display", "none");
        $(".dropDownProdutosLogado").css("display", "none");
        if ($(".linkDrop").attr("class") != "linkDrop linkDropFechado") {
            $(".linkDrop").removeClass("linkDropAberto").addClass("linkDropFechado")
        }
    });
    $.dropProdutos()
};
$.dropProdutos = function() {
    var a = $(".dropDownProdutos"),
        b = a.find("a");
    b.on({
        click: function(g) {
            var d = $(this),
                h = d.parents("ul"),
                c, f = $("form.boxLogin").attr("action");
            if (h.prev("input").attr("id") === "login") {
                g.preventDefault();
                c = h.prevAll(".iconsLogin");
                c.removeClass("iconUser iconEmpresa iconPesquisaSalarial iconAdmEstagio iconQuestoesOnline iconAreaTreinamento");
                c.addClass(d.attr("class"))
            }
            $.fazRequisicao();
            f = f.split("/");
            f = f.slice(0, 3);
            f = f.join("/");
            if ($(this).attr("data-media") == 12) {
                f = f + "/elearning/login_seguro.php";
                $("form.boxLogin").append('<input type="hidden" value="LOGAR" name="tarefa" />')
            } else {
                $("form.boxLogin").find('input[name="tarefa"]').remove();
                f = f + "/login/index.php"
            }
            $(".dropDownProdutos").toggle();
            $('input[name="redir"]').val($(this).attr("href"));
            $("form.boxLogin").attr("action", f);
            return false
        }
    });
    $(".linkDrop").click(function() {
        $(".dropDownProdutosLogado").slideToggle(20);
        $(".linkDrop").toggleClass("linkDropFechado linkDropAberto")
    })
};
$.layersLinksFuncaoTop = function() {
    $(".colorbox , .openLayer").colorbox({
        title: function() {
            var a = $(this),
                b = a.attr("title");
            if (b && b !== "") {
                return b
            } else {
                return $(a).text()
            }
        }
    });
    $(window).resize(function() {
        $(".colorbox").colorbox.resize({
            width: "55%",
            height: "55%"
        })
    })
};
$.sendMetrics = function() {
    $("#indique_catho_rodape, #nosso_numeros_rodape, #link_esqueci_senha, #link_entenda_numeros_box_numerocvs, #calculo_cvs_por_area_box_mapa, #opine_sobre_catho_rodape").click(function() {
        $.executaRequisicao(this)
    });
    $("#sair_topo_link").click(function() {
        $(this).parent().click()
    })
};
$.popUpSelosSeguranca = function() {
    $(".seloVerisign").click(function() {
        window.open("https://sealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=seguro.catho.com.br&lang=pt", "page", "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=540,height=540");
        return false
    });
    $(".seloCertisign").click(function() {
        window.open("https://www.certisign.com.br/seal/splashcerti.htm", "page", "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=540,height=500");
        return false
    })
};
$.initPerfil = function() {
    var b = $("ul.perfis");
    var a = $(".perfilSelected");
    b.children("li").each(function() {
        if ($(this).hasClass("perfilDefault")) {
            var c = 1;
            if ($("#perfilIdBusca").val() != "" && typeof($("#perfilIdBusca").val()) !== "undefined") {
                c = $("#perfilIdBusca").val()
            } else {
                c = $(this).children("a").attr("data-media")
            }
            b.children("li:first").children("a").css({
                fontWeight: "normal"
            });
            switch (c) {
                case "3":
                    a.css({
                        left: "100.5px"
                    });
                    break;
                case "9":
                    a.css({
                        left: "173px"
                    });
                    break;
                case "12":
                    a.css({
                        left: "231.5px"
                    });
                    break;
                case "99":
                    a.css({
                        left: "231.5px"
                    });
                    break;
                default:
                    a.css({
                        left: "34px"
                    });
                    break
            }
        } else {}
    })
};
$.formatNumber = function(c, e) {
    c = c + "";
    var b;
    var d = "";
    var a = 0;
    b = parseInt(c.length);
    if (b <= 3) {
        return c
    }
    for (i = 3; i < b; i = i + 3) {
        d = e + c.substring((b - i), (b - i + 3)) + d;
        a = i
    }
    d = c.substring(0, b - a) + d;
    return d
};
$.redirParent = function(a) {
    parent.window.location = a;
    return false
};
$.fecharBoxMensagem = function(a, c) {
    var b = $(a);
    b.children(c).click(function() {
        $(this).parent().hide()
    })
};
var domain = window.location.hostname;
if (domain.indexOf("catho.com.br") != -1) {
    document.domain = "catho.com.br"
} else {
    if (domain.indexOf("manager.com.br") != -1) {
        document.domain = "manager.com.br"
    } else {
        if (domain.indexOf("managerweb") !== -1) {
            document.domain = "managerweb.devel"
        } else {
            if (domain.indexOf("localhost") !== -1) {
                document.domain = "localhost"
            } else {
                if (domain.indexOf("testing.ms.vs") !== -1) {
                    document.domain = "testing.ms.vs"
                } else {
                    document.domain = "svnweb.devel"
                }
            }
        }
    }
}
$.sendCatalystEvents = function(a) {
    if (s) {
        s.events = a;
        s.tl()
    }
};
var cacheRegioesBusca = Array();
var cacheCidadesByRegiaoBusca = Array();
var cacheCidadesByEstadoBusca = Array();
var cacheAreasProfissionais;
$(function() {
    $.suggestCargoBarraBusca();
    $.iniciaLocalidade();
    $.limparMaisOpcoes();
    $.controleCheckSalarioCombinar();
    $.maisOpcoes();
    $.dropDownMaisOpcoes();
    $.controleInputDate();
    $.cursorPerfil();
    $.dropDownBuscaSalvas();
    $.tooltipMantenhaConectado();
    $.excluirBuscaSalva();
    $.carregaAreasByPerfilTop();
    $.ajaxAreasByPerfil();
    $.checkTotalArea();
    $.eventoCloseDropDown();
    salvarEmail()
});
$.eventoCloseDropDown = function() {
    $("*").click(function(a) {
        var b = a.scrElement || a.target;
        if ($(b).parents(".containerSelectPluginFake").length == 0 || $(b).attr("class") == "btnOkSelectPluginFake") {
            $(".boxTotalSelectPluginFake").hide();
            $(".divPrincipalSelectPluginFake").addClass("activeSelect")
        }
    })
};
$.dropDownMaisOpcoes = function() {
    $(".maisOpcoes").click(function(a) {
        a.preventDefault();
        if ($(this).hasClass("maisOpcoes")) {
            $(this).removeClass("maisOpcoes").addClass("menosOpcoes").children("span").html("-");
            $(this).attr("title", "Ocultar opÃ§Ãµes de busca")
        } else {
            $(this).removeClass("menosOpcoes").addClass("maisOpcoes").children("span").html("+");
            $(this).attr("title", "Abrir opÃ§Ãµes de busca")
        }
        $(".layerOpcoes").slideToggle(50)
    });
    $(".closeMaisOpcoes").click(function(a) {
        a.preventDefault();
        if ($(".opcoes").hasClass("menosOpcoes")) {
            $(".opcoes").removeClass("menosOpcoes").addClass("maisOpcoes").children("span").html("+")
        }
        $(".opcoes").attr("title", "Abrir opÃ§Ãµes de busca");
        $(".layerOpcoes").stop().slideUp("slow")
    })
};
$.suggestCargoBarraBusca = function() {
    $("#bottom").after('<div id="comUltimaBusca"></div>');
    var b = 30;
    if ($("#barraBusca").hasClass("inputLogado")) {
        var b = 40
    }
    $("#barraBusca").suggestLastSearch({
        minLength: 3,
        showLastSearch: true,
        lastSearch: $("#barraBusca").val(),
        appendTo: "#comUltimaBusca",
        link: $("#linkUltimaBusca").val(),
        limitString: b
    });
    var a = $("#barraBusca").val();
    $("#barraBusca").focus(function() {
        if ($(this).val() == a && Suggest.clickEvent != 1 && $(this).data("limpar") != false) {
            $(this).val("")
        }
        placeholder = $(this).attr("placeholder");
        if ($.supports_input_placeholder() == false && $(this).val() == placeholder) {
            $(this).val("")
        }
        if ($.supports_input_placeholder() == true) {
            $("#barraBusca").unbind("focus")
        }
    })
};
$.iniciaLocalidade = function() {
    carregaPaises();
    $('div[name^="select_regiao_id"]').hide();
    $('div[name^="select_cidade_id"]').hide();
    $('select[name="pais_id"]').parent(".select").click(function() {
        closeSelect("estado_id[]");
        closeSelect("cidade_id[]");
        closeSelect("regiao_id[]")
    });
    $('select[name="estado_id[]"]').parent(".select").click(function() {
        closeSelect("cidade_id[]");
        closeSelect("regiao_id[]")
    });
    $('select[name="cidade_id[]"]').parent(".select").click(function() {
        closeSelect("regiao_id[]")
    })
};

function closeSelectRegiaoCidade() {
    clearSelect("cidade_id[]");
    clearSelect("regiao_id[]");
    $('div[name^="cidade_id"]').remove();
    $('div[name^="regiao_id"]').remove();
    $('div[name^="cidade_id_carregando"]').remove();
    $('div[name^="regiao_id_carregando"]').remove();
    $('select[name="regiao_id[]"]').parent(".select").hide();
    $('select[name="cidade_id[]"]').parent(".select").hide()
}

function clearSelect(a) {
    $('select[name="' + a + '"]').parent(".select").find("div").each(function() {
        if ($(this).attr("class") == "btnDesmarcarSelectPlugin") {
            $(this).click()
        }
    })
}

function closeSelect(a) {
    $('select[name="' + a + '"]').parent(".select").find("div").each(function() {
        if ($(this).attr("class") == "boxTotalSelectPlugin") {
            $(this).hide()
        }
    })
}

function removeDivsPlugin() {
    $('div[name^="estado_id"]').remove();
    $('div[name^="regiao_id"]').remove();
    $('div[name^="cidade_id"]').remove()
}

function getTotalSelect(a) {
    var b = 0;
    $('select[name="' + a + '"] optgroup[class="Todos"]').find("option").each(function() {
        if ($(this).is(":selected")) {
            b++
        }
    });
    return b
}

function setTotalSelect(c, e, b, a) {
    var d = getTotalSelect(c);
    setInputLocalidade(e, b, d, a)
}

function setInputLocalidade(e, b, d, a) {
    var c = "";
    if (d > 0) {
        c = c + d + " "
    }
    if (name == "frm_pag" || name == "iframe_canvas_fb_https") {
        name = ""
    }
    c = c + name;
    if (a == 1) {
        c = e;
        if (e) {
            c = e
        } else {
            if (d > 1) {
                c = d + " RegiÃµes"
            } else {
                c = d + " RegiÃ£o"
            }
        }
    } else {
        if (d > 1) {
            c = c + b
        } else {
            c = c + e
        }
    }
    $(".inputLocalidade").val(c)
}

function carregaRegioesByEstado() {
    var d = $('select[name="estado_id[]"]').val(),
        e = $("#cidadesSelecionadas").val(),
        a = "",
        b = "",
        c = $("#regioesSelecionadas").val();
    $("#regioesSelecionadas").remove();
    if (typeof c !== "undefined" && c.length > 0) {
        c += c ? "/" : ""
    } else {
        c = ""
    }
    if (typeof e !== "undefined" && e.length > 0) {
        e += e ? "/" : ""
    } else {
        e = ""
    }
    for (i in d) {
        if (!isNaN(parseInt(i))) {
            b = b + d[i] + "-"
        }
    }
    if (cacheRegioesBusca[b] != null) {
        $('select[name^="regiao_id[]"]').next().remove();
        $('div[name^="select_regiao_id"]').show();
        $('div[name^="select_regiao_id"]').html(cacheRegioesBusca[b]);
        $('div[name^="regiao_id_carregando"]').remove();
        $('select[name="regiao_id[]"]').selectPlugin({
            firstText: "Selecione regiÃ£o",
            txtBtnOk: "Aplicar",
            showMoreOptions: true,
            okFunction: function(f) {
                if (f != "" && f != 0) {
                    setInputLocalidade("RegiÃ£o", "RegiÃµes", f);
                    $('div[name^="cidade_id"]').remove();
                    $('div[name^="select_cidade_id"]').html('<div class="loadingSmall" name="cidade_id_carregando">Carregando</div>')
                }
                carregaCidadesByRegiao()
            }
        });
        carregaCidadesByEstado();
        if ($("#configAviso").size() > 0) {
            regionEvent()
        }
        return
    }
    if (b != "") {
        $.ajax({
            url: "/util/localidade/ajaxRegioesVagasMaisBuscadasByEstadoId/" + b + "/" + c,
            success: function(f) {
                $('div[name^="regiao_id"]').remove();
                $('div[name^="select_regiao_id"]').show();
                $('div[name^="select_regiao_id"]').html(f.html);
                cacheRegioesBusca[b] = f.html
            },
            complete: function() {
                $('div[name^="regiao_id_carregando"]').remove();
                $('select[name^="regiao_id"]').selectPlugin({
                    firstText: "Selecione regiÃ£o",
                    txtBtnOk: "Aplicar",
                    showMoreOptions: true,
                    okFunction: function(k) {
                        if (k != "" && k != 0) {
                            var g = $(".inputLocalidade").attr("data-regiao");
                            var h = $("#select_Regiao").find(":checked").first().attr("value");
                            if (k == 1 && g == GeoLocalizacao.resultado.regiaoId && g == h) {
                                var j = $(".inputLocalidade").val();
                                setInputLocalidade(j, j, k, 1)
                            } else {
                                setInputLocalidade("RegiÃ£o", "RegiÃµes", k);
                                $(".inputLocalidade").attr("data-regiao", "")
                            }
                            $('div[name^="cidade_id"]').remove();
                            $('div[name^="select_cidade_id"]').html('<div class="loadingSmall" name="cidade_id_carregando">Carregando</div>')
                        } else {
                            if (k == 0) {
                                setTotalSelect("estado_id[]", "Estado", "Estados")
                            }
                        }
                        carregaCidadesByRegiao()
                    }
                });
                if (c == "" && (typeof e != "undefined" || e.length > 0)) {
                    carregaCidadesByEstado()
                } else {
                    if (c.length > 0) {
                        setInputLocalidade("RegiÃ£o", "RegiÃµes", c.split("-").length);
                        if (b.split("-")[0].match(GeoLocalizacao.estadosRegiao)) {
                            var f = GeoLocalizacao.regioes[GeoLocalizacao.resultado.regiaoId];
                            setTotalSelect("regiao_id[]", f, f, 1)
                        } else {
                            setTotalSelect("regiao_id[]", "RegiÃ£o", "RegiÃµes")
                        }
                        carregaCidadesByRegiao()
                    } else {
                        setTotalSelect("estado_id[]", "Estado", "Estados")
                    }
                }
                if ($("#configAviso").size() > 0) {
                    regionEvent()
                }
            }
        })
    } else {
        if (c == "") {
            carregaCidadesByEstado()
        } else {
            setInputLocalidade("RegiÃ£o", "RegiÃµes", c.split("-").length);
            carregaCidadesByRegiao()
        }
        closeSelectRegiaoCidade();
        if ($("#configAviso").size() > 0) {
            regionEvent()
        }
    }
}

function carregaCidadesByEstado() {
    var e = $('select[name="estado_id[]"]').val(),
        d = "",
        c = "",
        f = "",
        a = $("#cidadesSelecionadas").val();
    $("#cidadesSelecionadas").remove();
    if (typeof a !== "undefined" && a.length > 0) {
        f += a ? a + "/" : ""
    }
    for (i in e) {
        if (!isNaN(parseInt(i))) {
            c = c + e[i] + "-"
        }
    }
    if (cacheCidadesByEstadoBusca[c] != null) {
        $('select[name="cidade_id[]"]').next().remove();
        $('div[name^="select_cidade_id"]').show();
        $('div[name^="select_cidade_id"]').html(cacheCidadesByEstadoBusca[c]);
        $('div[name^="cidade_id_carregando"]').remove();
        $('select[name="cidade_id[]"]').selectPlugin({
            firstText: "Selecione cidade",
            txtBtnOk: "Aplicar",
            showMoreOptions: true,
            okFunction: function(g) {
                if (g != "" && g != 0) {
                    setInputLocalidade("Cidade", "Cidades", g)
                } else {
                    if (g == 0) {
                        setTotalSelect("estado_id[]", "Estado", "Estados")
                    }
                }
                if ($("#configAviso").size() > 0) {
                    cityEvent()
                }
            }
        });
        return
    }
    if (c != "") {
        $.ajax({
            url: "/util/localidade/ajaxCidadesVagasMaisBuscadasByEstadoId/" + c + "/" + f,
            success: function(g) {
                cacheCidadesByEstadoBusca[c] = g.html;
                $('select[name="cidade_id[]"]').next().remove();
                $('div[name^="select_cidade_id"]').show();
                $('div[name^="select_cidade_id"]').html(g.html)
            },
            complete: function() {
                $('div[name^="cidade_id_carregando"]').remove();
                $('select[name="cidade_id[]"]').selectPlugin({
                    showMoreOptions: true,
                    firstText: "Selecione cidade",
                    txtBtnOk: "Aplicar",
                    okFunction: function(h) {
                        if (h != "" && h != 0) {
                            setInputLocalidade("Cidade", "Cidades", h)
                        } else {
                            if (h == 0) {
                                setTotalSelect("estado_id[]", "Estado", "Estados")
                            }
                        }
                    }
                });
                if (f) {
                    var g = a.split("-");
                    setInputLocalidade("Cidade", "Cidades", g.length)
                }
                if ($("#configAviso").size() > 0) {
                    cityEvent()
                }
            }
        })
    } else {
        if (f != "") {
            var b = a.split("-");
            setInputLocalidade("Cidade", "Cidades", b.length)
        }
        closeSelectRegiaoCidade();
        if ($("#configAviso").size() > 0) {
            cityEvent()
        }
    }
}

function carregaCidadesByRegiao() {
    var b = $('select[name="regiao_id[]"]').val(),
        d = "",
        c = "",
        e = "",
        a = $("#cidadesSelecionadas").val();
    $("#cidadesSelecionadas").remove();
    if (typeof a !== "undefined" && a.length > 0) {
        e += a ? a + "/" : ""
    }
    for (i in b) {
        if (!isNaN(parseInt(i))) {
            d = d + b[i] + "-"
        }
    }
    if (cacheCidadesByRegiaoBusca[d] != null) {
        $('select[name="cidade_id[]"]').next().remove();
        $('div[name^="select_cidade_id"]').show();
        $('div[name^="select_cidade_id"]').html(cacheCidadesByRegiaoBusca[d]);
        $('div[name^="cidade_id_carregando"]').remove();
        $('select[name="cidade_id[]"]').selectPlugin({
            firstText: "Selecione cidade",
            txtBtnOk: "Aplicar",
            showMoreOptions: true,
            okFunction: function(f) {
                if (f != "" && f != 0) {
                    setInputLocalidade("Cidade", "Cidades", f)
                } else {
                    if (f == 0) {
                        if (getTotalSelect("regiao_id[]") > 0) {
                            setTotalSelect("regiao_id[]", "RegiÃ£o", "RegiÃµes")
                        } else {
                            setTotalSelect("estado_id[]", "Estado", "Estados")
                        }
                    }
                }
                if ($("#configAviso").size() > 0) {
                    cityEvent()
                }
            }
        });
        return
    }
    if (d == "") {
        carregaCidadesByEstado()
    } else {
        $.ajax({
            url: "/util/localidade/ajaxCidadesVagasMaisBuscadasByRegiaoId/" + d + "/" + e,
            success: function(f) {
                cacheCidadesByRegiaoBusca[d] = f.html;
                $('div[name^="select_cidade_id"]').show();
                $('div[name^="select_cidade_id"]').html(f.html)
            },
            complete: function() {
                $('div[name^="cidade_id_carregando"]').remove();
                $('select[name="cidade_id[]"]').selectPlugin({
                    firstText: "Selecione cidade",
                    txtBtnOk: "Aplicar",
                    showMoreOptions: true,
                    okFunction: function(g) {
                        if (g != "" && g != 0) {
                            setInputLocalidade("Cidade", "Cidades", g)
                        } else {
                            if (g == 0) {
                                if (getTotalSelect("regiao_id[]") > 0) {
                                    setTotalSelect("regiao_id[]", "RegiÃ£o", "RegiÃµes")
                                } else {
                                    setTotalSelect("estado_id[]", "Estado", "Estados")
                                }
                            }
                        }
                    }
                });
                if (e) {
                    var f = a.split("-");
                    setInputLocalidade("Cidade", "Cidades", f.length)
                }
                if ($("#configAviso").size() > 0) {
                    cityEvent()
                }
            }
        })
    }
}

function carregaPaises() {
    if ($(".containerHomeVagas, .containerExceptionsResultadoVagas").size() !== 0) {
        return false
    }
    var b = $("#paisIdSelecionado").val();
    var a = $("#nomePaisSelecionado").val();
    $("#paisIdSelecionado").remove();
    $("#nomePaisSelecionado").remove();
    if (typeof b == "undefined" || b.length <= 0) {
        b = "31"
    }
    if (typeof a == "undefined" || a.length <= 0) {
        a = "Brasil"
    }
    $.ajax({
        url: "/util/localidade/ajaxPaisesComVagaAtiva/" + b + "/",
        success: function(c) {
            $('div[name^="select_pais_id"]').html(c.html)
        },
        complete: function() {
            $('select[name="pais_id"]').selectPlugin({
                firstText: a,
                okFunction: function() {
                    carregaEstadosByPais()
                }
            });
            $('select[name="pais_id"]').val(b);
            carregaEstadosByPais()
        }
    })
}

function carregaEstadosByPais() {
    var b = $('select[name="pais_id"] option:selected').val(),
        c = "",
        a = $("#estadosSelecionados").val();
    $("#estadosSelecionados").remove();
    if (typeof a !== "undefined" && a.length > 0) {
        a += a ? "/" : ""
    } else {
        a = ""
    }
    if (b == 31) {
        $('div[name^="estado_id"]').parent(".select").show();
        if ($('div[name^="estado_id"]').length > 0) {
            return false
        }
        setInputLocalidade("Todo o Brasil", "", 0);
        $.ajax({
            url: "/util/localidade/ajaxEstadosVagasMaisBuscadosByPaisId/" + b + "/" + a,
            success: function(d) {
                $('div[name^="select_estado_id"]').html(d.html)
            },
            complete: function() {
                $('select[name="estado_id[]"]').selectPlugin({
                    firstText: "Selecione estado",
                    txtBtnOk: "Aplicar",
                    showMoreOptions: true,
                    okFunction: function(f) {
                        if (f != "" && f != 0) {
                            var e = $('div[name^="estado_id"]').find($(".firstTextSelectPlugin")).text();
                            setInputLocalidade(e, "Estados", (f == 1 ? "" : f));
                            $('div[name^="regiao_id"]').remove();
                            $('div[name^="cidade_id"]').remove();
                            $('div[name^="select_cidade_id"]').show();
                            $('div[name^="select_regiao_id"]').show();
                            $('div[name^="select_regiao_id"]').html('<div class="loadingSmall" name="regiao_id_carregando">Carregando</div>');
                            $('div[name^="select_cidade_id"]').html('<div class="loadingSmall" name="cidade_id_carregando">Carregando</div>');
                            carregaRegioesByEstado()
                        } else {
                            if (f == 0) {
                                setInputLocalidade("Todo o Brasil", "", 0);
                                closeSelectRegiaoCidade()
                            }
                        }
                    }
                });
                if (a != "") {
                    if (a.split("-").length == 1) {
                        var d = $('select[name="estado_id[]"] option:selected:first').text();
                        setInputLocalidade(d, d, 0)
                    } else {
                        setInputLocalidade("Estado", "Estados", a.split("-").length)
                    }
                    carregaRegioesByEstado()
                } else {
                    setInputLocalidade("Todo o Brasil", "", 0);
                    closeSelectRegiaoCidade()
                }
                if ($("#configAviso").size() > 0) {
                    stateEvent()
                }
            }
        })
    } else {
        setInputLocalidade("PaÃ­s", "PaÃ­ses", 1);
        clearSelect("estado_id[]");
        $('div[name^="estado_id"]').parent(".select").hide();
        closeSelectRegiaoCidade()
    }
}
$.limparMaisOpcoes = function() {
    $(".icoClean").click(function() {
        $("div .layerOpcoes").find("select").each(function() {
            $(this).find("option").removeAttr("selected")
        });
        $.clearDropDownArea($("#areas-profissionais .barBottomSelectPluginFake .btnDesmarcarSelectPluginFake"));
        $("div .layerOpcoes .containerSelectPlugin").each(function() {
            var a = $(this).find(".boxTotalSelectPlugin > ul > li:first").html();
            $(this).find(".divPrincipalSelectPlugin > .firstTextSelectPlugin").html(a)
        });
        $('input[name="faixa_sal_id_combinar"]').attr("checked", "checked");
        s_objectID = "select_limpar";
        $.executaRequisicao(this);
        return false
    })
};
$.controleInputDate = function() {
    $('ul > li[name="inputDate"]:first').click(function(a) {
        $('select[name="inputDate"]').find("option").removeAttr("selected");
        a.preventDefault()
    })
};
$.controleCheckSalarioCombinar = function() {
    $('input[name="faixa_sal_id_combinar"]').click(function() {
        if ($(this).is(":checked")) {
            $("#faixa_sal_id_combinar_aux").val("1")
        } else {
            $("#faixa_sal_id_combinar_aux").val("0")
        }
    })
};
$.carregaAreasByPerfilTop = function() {
    $("#areas-profissionais .barBottomSelectPluginFake .btnOkSelectPluginFake").click(function() {
        $("#areas-profissionais #areaProfissional").addClass("activeSelect");
        $("#areas-profissionais .boxTotalSelectPluginFake").css("display", "none")
    });
    $("#areas-profissionais #areaProfissional").click(function(a) {
        if ($("#areas-profissionais .boxTotalSelectPluginFake").css("display") == "block") {
            $("#areas-profissionais .boxTotalSelectPluginFake").css("display", "none");
            $("#areas-profissionais #areaProfissional").addClass("activeSelect")
        } else {
            $.ajaxAreasByPerfil(true)
        }
    })
};
$.validadoTodosCamposChecados = function() {
    $('#formFiltros input[name="area_id[]"]').each(function(b) {
        var a = $("#areas-profissionais .contentSelectPluginFake").find('ul input[name="area_id[' + $(this).val() + ']"]');
        $(a).parents(".areacontrolsel").find(".areapIdPai").attr("checked", true);
        a.prop("checked", true);
        $.validaAreasSelecionadas(a)
    });
    $.defineExibicaoFiltroAreaProfissional()
};
$.ajaxAreasByPerfil = function(b) {
    if (b) {
        $("#areas-profissionais #areaProfissional").removeClass("activeSelect");
        $("#areas-profissionais .boxTotalSelectPluginFake").css("display", "block")
    }
    if (cacheAreasProfissionais != null) {
        return false
    }
    var c = "/util/area/ajaxAreaByPerfil/?perfilId=1";
    var a = $('#formFiltros input[name="area_id[]"]');
    if (a.length > 0) {
        selected = "";
        a.each(function(d) {
            selected += $(this).val() + ","
        });
        c += "&selected=" + selected
    }
    $.ajax({
        url: c,
        success: function(d) {
            cacheAreasProfissionais = d.html;
            $("#areas-profissionais .contentSelectPluginFake").html($.conversorCampoAreaProfissionalBuscaVagas(d.html))
        },
        complete: function() {
            $.validadoTodosCamposChecados()
        }
    })
};
$.conversorCampoAreaProfissionalBuscaVagas = function(a) {
    a = a.replace(/areap_id_pai/g, "areag_id");
    a = a.replace(/areap_id/g, "area_id");
    return a
};
$.checkTotalArea = function() {
    $.desmarcarArea();
    $("#areas-profissionais").on("click", ".checkAreaSelecionado, .areapIdPai", function(a) {
        if ($(this).hasClass("areapIdPai")) {
            if ($(this).attr("checked") == "checked") {
                $(this).parents(".areacontrolsel").find("input[type=checkbox]").each(function() {
                    $(this).attr("checked", true)
                })
            } else {
                $(this).parents(".areacontrolsel").find("input:checked").each(function() {
                    $(this).removeAttr("checked")
                })
            }
        } else {
            $(this).parents(".areacontrolsel").find(".areapIdPai").attr("checked", true)
        }
        $.validaAreasSelecionadas($(this))
    })
};
$.clearDropDownArea = function(a) {
    $(".checkAreaSelecionado").removeAttr("checked");
    $(".areapIdPai").removeAttr("checked");
    $("#areas_selecionadas").val("");
    $.validaAreasSelecionadas(a)
};
$.desmarcarArea = function() {
    $(".barBottomSelectPluginFake .btnDesmarcarSelectPluginFake").click(function() {
        $.clearDropDownArea($(this))
    })
};
$.validaAreasSelecionadas = function(a) {
    total = $(".checkAreaSelecionado:checked", $(a).parents("#areas-profissionais .contentSelectPluginFake")).length;
    text = "-Selecione-";
    if (total > 0 && total < 2) {
        text = total + " Selecionado"
    } else {
        if (total > 1) {
            text = total + " Selecionados"
        }
    }
    $("#areas-profissionais .firstTextSelectPluginFake").html(text);
    totalArea = $(".checkAreaSelecionado:checked", $(a).parents("#areas-profissionais .areacontrolsel")).length;
    $(a).parents(".areacontrolsel").find(".areapIdPai").attr("checked", true);
    if (totalArea < 1) {
        $(a).parents(".areacontrolsel").find(".areapIdPai").attr("checked", false)
    }
};
$.maisOpcoes = function() {
    if (isPageResponsive) {
        return false
    }
    $(".maisOpcoesSelect").each(function() {
        var a = $(this).find("option:first").html();
        $(this).selectPlugin({
            firstText: a,
            activeSelectToggle: true,
            showFirstIfSelected: true
        });
        $(".divPrincipalSelectPlugin").addClass("activeSelect")
    })
};
$.cursorPerfil = function() {
    $("ul.perfis a").click(function() {
        var c = false;
        var d = $(this).html();
        var b = $(this).parent().width();
        var e = $(this).parent().css("padding-left").replace("px", "");
        e = e * 2;
        b = (b + e) / 2;
        var a = 0;
        $("ul.perfis a").css({
            fontWeight: "normal"
        });
        $(this).css({
            fontWeight: "bold"
        });
        $("ul.perfis a").each(function() {
            if ($(this).html() != d) {
                if (!c) {
                    a = a + $(this).parent().width() + e
                }
            } else {
                c = true
            }
        });
        $.defineExibicaoFiltroAreaProfissional($(this).attr("data-media"));
        $(".perfilSelected").animate({
            left: a + b - 9
        }, 200);
        if ($(this).attr("data-media") == 12) {
            $('input[name="perfil_id"]').val(1);
            $('input[name^="ppd"]').attr("checked", true)
        } else {
            $('input[name="perfil_id"]').val($(this).attr("data-media"));
            $('input[name^="ppd"]').attr("checked", false)
        }
        return false
    })
};
$.defineExibicaoFiltroAreaProfissional = function(a) {
    if (typeof(a) == "undefined") {
        a = $("#perfil_id").val()
    }
    if (a == 3 || a == 9) {
        $("#areas-profissionais").hide();
        $("#areas-profissionais .boxTotalSelectPluginFake").css("display", "none");
        $('#areas-profissionais input[type="checkbox"]').each(function() {
            $(this).prop("disabled", true)
        })
    } else {
        $('#areas-profissionais input[type="checkbox"]').each(function() {
            $(this).prop("disabled", false)
        });
        $("#areas-profissionais").show()
    }
};
$.dropDownBuscaSalvas = function() {
    var b = $(".buscaSalvas");
    var c = $(".layerBuscaSalvas");
    var a = $(".closeLayerBuscaSalvas");
    b.click(function() {
        c.toggle();
        return false
    });
    a.click(function() {
        c.hide()
    })
};
$.excluirBuscaSalva = function() {
    $(".deleteBusca").live("click", function() {
        var b = $(this).attr("busca_id");
        var c = $(this).parent("li");
        var a = "/aviso-vagas/excluir/" + b + "/";
        $.prompt("Deseja excluir essa busca?", {
            topBar: "Excluir Busca Salva",
            buttons: {
                ok: true,
                cancelar: false
            },
            callback: function(e, f, d, g) {
                if (e) {
                    $.ajax({
                        url: a,
                        data: {
                            from: "ajax"
                        },
                        success: function(h) {
                            if (h.status && h.status == 1) {
                                $.prompt("ExcluÃ­do com sucesso!", {
                                    topBar: "Sucesso"
                                }, "success");
                                c.remove();
                                if ($(".listBusca").children("li").size() == 0) {
                                    $(".listBusca").before("<p class='semBuscaSalva'><strong>NÃ£o hÃ¡ buscas salvas.</strong></p><p class='semBuscaSalva'>Salve suas buscas por termos especÃ­ficos e <br />ganhe  tempo em suas prÃ³ximas pesquisas.</p>")
                                }
                                $(".salvarBusca").css("display", "block")
                            } else {
                                alert("NÃ£o foi possÃ­vel excluir.")
                            }
                        }
                    })
                }
            }
        }, "confirm");
        return false
    })
};
$.tooltipMantenhaConectado = function() {
    var a = $(".helper.conectado > label");
    a.toolTipPlugin({
        extraClass: "manterConectadoDica",
        arrowPosition: "up"
    })
};

function salvarEmail() {
    if (!isUsuarioLogado || $("#emailBar").size() === 0) {
        return false
    }
    window.loader = new Loader();
    window.loader.initLoader("b2c", false, 0.7, "#000", $("#emailBar"));
    $("#emailUsuario").on({
        keypress: function() {
            if ($(this).hasClass("validar")) {
                setTimeout(function() {
                    if (!new Email().isValidEmail($("#emailUsuario").val())) {
                        $("#emailUsuario").addClass("inputError")
                    } else {
                        $("#emailUsuario").removeClass("inputError")
                    }
                }, 1)
            }
        },
        blur: function() {
            $(this).addClass("validar");
            if ($("#emailUsuario").val() !== "") {
                $("#emailUsuario").trigger("keypress")
            }
        }
    });
    $("#gravaEmail").on("submit", function(c) {
        c.preventDefault();
        var d = $("#emailUsuario"),
            b = d.val(),
            a = $(this).attr("action");
        if (!new Email().isValidEmail(b)) {
            d.addClass("inputError");
            return false
        } else {
            d.removeClass("inputError")
        }
        window.loader.publicOpenLoader();
        $.ajax({
            type: "POST",
            url: a,
            data: {
                email: b
            },
            complete: function() {
                window.loader.publicCloseLoader()
            },
            success: function(e) {
                if (e.status) {
                    feedbackEmailBar()
                } else {
                    d.addClass("error").focus()
                }
            },
            error: function() {
                d.addClass("error").focus()
            }
        })
    })
}

function feedbackEmailBar() {
    $("#emailBar").slideUp({
        duration: 350,
        queue: false,
        complete: function() {
            $("#emailBar").remove()
        }
    });
    $("#top").children(".topBar").animate({
        "margin-top": 0
    }, {
        duration: 350,
        queue: false
    });
    $("#feedbackSucesso").animate({
        top: "35px",
        opacity: 1
    }, {
        duration: 500,
        queue: false,
        complete: function() {
            setTimeout(function() {
                $("#feedbackSucesso").animate({
                    top: "-50px",
                    opacity: 0
                }, {
                    duration: 350,
                    queue: false,
                    complete: function() {
                        $("#feedbackSucesso").remove()
                    }
                })
            }, 3000)
        }
    })
}

function atualizaEstadoById(a) {
    $("div.layerLocalidade").append('<input name="estadosSelecionados" class="filtroBusca" id="estadosSelecionados" type="hidden" value="' + a + '">');
    removeDivsPlugin();
    $.iniciaLocalidade()
};
(function(a) {
    a.fn.extend({
        selectPlugin: function(b) {
            var c = {
                classContainer: "containerSelectPlugin",
                widthContainer: 180,
                classBoxTotal: "boxTotalSelectPlugin",
                widthBoxTotal: 220,
                classCheckInput: "checkBoxInputSelectPlugin",
                classLineSelect: "lineSelectPlugin",
                classTitleGroup: "titleGroupSelectPlugin",
                classBtnDesmarcar: "btnDesmarcarSelectPlugin",
                classBtnOk: "btnOkSelectPlugin",
                classFirstText: "firstTextSelectPlugin",
                classDropDown: "dropDownSelectPlugin",
                classBarBottom: "barBottomSelectPlugin",
                classDivPrincipal: "divPrincipalSelectPlugin",
                activeSelectClass: "activeSelect",
                activeSelectToggle: false,
                firstText: "Selecione",
                closeOnClickOut: true,
                limitString: "",
                closeOnScroll: false,
                inputSaveOption: "",
                checkOnClickLine: true,
                directToLink: false,
                showQtdSelecionados: true,
                setTextSelecionados: "Selecionados",
                showBarBottom: true,
                btnDesmarcar: "Desmarcar todos",
                txtBtnOk: "ok",
                btnOk: "Ok",
                showMoreOptions: false,
                textMoreOptions: "",
                classTextMoreOptions: "",
                disable: false,
                defaultValue: null,
                showFirstIfSelected: false,
                okFunction: function() {}
            };
            var b = a.extend(c, b);
            return this.each(function() {
                var m = b;
                var w = Array();
                var C = a(this).attr("name");
                var x = a(this).attr("multiple");
                var j = "";
                var t;
                var h = a(this);
                var l = 0;
                var y = "";
                var s = false;
                var k = m.firstText;
                var r = function() {
                    A();
                    if (h.find("optgroup").length > 0) {
                        h.find("optgroup").each(function() {
                            l = 0;
                            d(a(this).attr("label"));
                            if (x == "multiple") {
                                a(this).find("option").each(function() {
                                    var o = false;
                                    if (a(this).attr("selected") == "selected") {
                                        l++;
                                        o = true
                                    }
                                    B(a(this).html(), a(this).val(), o)
                                })
                            } else {
                                a(this).find("option").each(function() {
                                    g(a(this).html(), a(this).val())
                                })
                            }
                        })
                    } else {
                        h.find("option").each(function() {
                            if (x == "multiple") {
                                var o = false;
                                if (a(this).attr("selected") == "selected") {
                                    l++;
                                    o = true
                                }
                                B(a(this).html(), a(this).val(), o)
                            } else {
                                if (a(this).attr("selected") == "selected" && m.showFirstIfSelected == true) {
                                    m.firstText = a(this).html();
                                    s = true
                                }
                                g(a(this).html(), a(this).val())
                            }
                        })
                    }
                    u()
                };
                var A = function() {
                    j = j + '<div name="' + C + '" class="' + siteAtual + " " + m.classContainer + '" style="width:' + m.widthContainer + 'px;"><div name="' + C + '" class="' + m.classDivPrincipal + " " + m.activeSelectClass + ' clearfix"><div name="' + C + '" class="' + m.classFirstText + '">' + m.firstText + '</div><div name="' + C + '" class="' + m.classDropDown + '"><span name="' + C + '"></span></div></div><div name="' + C + '"  class="' + m.classBoxTotal + '" style=" display:none; position:absolute; width:' + m.widthBoxTotal + 'px;"><ul>'
                };
                var u = function() {
                    if (m.showBarBottom && x == "multiple") {
                        j = j + "</ul>";
                        j = j + '<ul name="' + C + '" class ="' + m.classBarBottom + '" style=""><li><div name="' + C + '" class="' + m.classBtnDesmarcar + '">Limpar</div><div name="' + C + '" class="' + m.classBtnOk + '">' + m.txtBtnOk + "</div></li></ul>"
                    }
                };
                var d = function(o) {
                    j = j + '<li name="' + C + '" class="' + m.classTitleGroup + '">' + o + "</li>"
                };
                var g = function(D, o) {
                    j = j + '<li name="' + C + '" data-value="' + o + '" class="' + m.classLineSelect + '">' + D + "</li>"
                };
                var i = function(D, o) {
                    htmlLineSelected = '<li name="' + C + '" data-value="' + o + '" class="' + m.classLineSelect + '">' + D + "</li>"
                };
                var B = function(E, D, o) {
                    j += '<li name="' + C + '" class="' + m.classLineSelect + "";
                    if (o) {
                        j += " selected"
                    }
                    j += '"><input id="' + C + 'input" html="' + E + '" value="' + D + '" class="' + m.classCheckInput + '" type="checkbox" ';
                    if (o) {
                        j += 'checked="checked"'
                    }
                    j += '/><span name="' + C + '">' + E + "</span></li>"
                };
                var q = function() {
                    h.css("display", "none");
                    h.after(j);
                    if (s) {
                        if (m.limitString != "" && m.firstText.length > m.limitString) {
                            m.firstText = m.firstText.substring(0, m.limitString) + "..."
                        }
                    }
                };
                r();
                q();
                if (m.disable == true || h.attr("disabled") == "disabled") {
                    h.parent().find('div[name="' + C + '"]').parent().addClass("disable");
                    h.find("option:selected").removeAttr("selected");
                    return
                }
                h.parent().find("." + m.classDivPrincipal).click(function() {
                    if (h.parent().find("." + m.classBoxTotal).css("display") == "block" && h.attr("multiple") == "multiple") {
                        m.okFunction(y)
                    }
                    h.parent().find("." + m.classBoxTotal).toggle();
                    n()
                });
                h.parent().find("." + m.classBtnOk).click(function() {
                    h.parent().find("." + m.classBoxTotal).hide();
                    n()
                });
                if (m.closeOnClickOut && !(a.browser.msie && a.browser.version < 8)) {
                    a(document).on({
                        mousedown: function(o) {
                            if (a(o.target).parent(".boxTotalSelectPlugin").length == 0) {
                                if ((o.target.attributes.name == null && o.target.attributes.id == null || (o.target.attributes.name != null && o.target.attributes.name.value != C)) || (o.target.attributes.id != null && o.target.attributes.id.value != C + "input")) {
                                    if (h.parent().find("." + m.classBoxTotal).is(":visible")) {
                                        h.parent().find("." + m.classBoxTotal).hide();
                                        if (h.attr("multiple") == "multiple") {
                                            m.okFunction(y)
                                        }
                                        n()
                                    }
                                }
                            }
                        }
                    })
                }
                if (m.closeOnScroll) {
                    a(document).scroll(function(o) {
                        h.parent().find("." + m.classBoxTotal).hide();
                        n()
                    })
                }
                var n = function() {
                    if (m.activeSelectToggle) {
                        v();
                        if ((h.parent().find("." + m.classDivPrincipal)).hasClass(m.activeSelectClass)) {
                            h.parent().find("." + m.classDivPrincipal).removeClass(m.activeSelectClass)
                        } else {
                            h.parent().find("." + m.classDivPrincipal).addClass(m.activeSelectClass)
                        }
                    }
                };
                var v = function() {
                    if (h.next().children(".boxTotalSelectPlugin").offset().top + h.next().children(".boxTotalSelectPlugin").outerHeight() > a(window).scrollTop() + a(window).height()) {
                        h.next().children(".boxTotalSelectPlugin").css({
                            top: -1 * h.next().children(".boxTotalSelectPlugin").outerHeight()
                        })
                    } else {
                        h.next().children(".boxTotalSelectPlugin").css({
                            top: "auto"
                        })
                    }
                };
                var p = function() {
                    if (l == 0) {
                        h.parent().find("." + m.classFirstText).html(m.firstText)
                    } else {
                        if (l == 1) {
                            h.parent().find("input").each(function() {
                                if (a(this).attr("checked") == "checked") {
                                    var o = a(this).attr("html");
                                    if (m.limitString != "" && o.length > m.limitString) {
                                        h.parent().find("." + m.classFirstText).html(o.substring(0, m.limitString) + "...")
                                    } else {
                                        h.parent().find("." + m.classFirstText).html(o)
                                    }
                                }
                            })
                        } else {
                            h.parent().find("." + m.classFirstText).html(l + " " + m.setTextSelecionados)
                        }
                    }
                    y = String(l);
                    m.firstText = k
                };
                p();
                if (x == "multiple") {
                    h.parent().find("." + m.classBtnOk).click(function() {
                        m.okFunction(y)
                    });
                    var z = function() {
                        h.find("option:selected").each(function() {
                            a(this).removeAttr("selected")
                        });
                        h.parent().find("input:checked").each(function() {
                            f(a(this).parent(), "");
                            a(this).removeAttr("checked")
                        });
                        l = 0;
                        p()
                    };
                    h.parent().find("." + m.classBtnDesmarcar).click(function() {
                        z()
                    });
                    var e = function(E, D) {
                        var o = false;
                        h.find("option").each(function() {
                            if (!o) {
                                if (a(this).val() == E) {
                                    if (D == "checked") {
                                        l++;
                                        a(this).attr("selected", "selected")
                                    } else {
                                        if (l > 0) {
                                            l--;
                                            a(this).removeAttr("selected")
                                        }
                                    }
                                    o = true
                                }
                            } else {
                                if (a(this).val() == E) {
                                    if (D == "checked") {
                                        a(this).attr("selected", "selected")
                                    } else {
                                        a(this).removeAttr("selected")
                                    }
                                }
                            }
                        });
                        if (m.showQtdSelecionados) {
                            p()
                        }
                    };
                    var f = function(o, D) {
                        var E = o.find("input").val();
                        if (D == "checked") {
                            h.parent().find('input[value="' + E + '"]').parent().addClass("selected");
                            h.parent().find('input[value="' + E + '"]').attr("checked", "checked")
                        } else {
                            h.parent().find('input[value="' + E + '"]').parent().removeClass("selected");
                            h.parent().find('input[value="' + E + '"]').removeAttr("checked")
                        }
                    };
                    if (m.defaultValue != null) {
                        f(h.parent().find('input[value="' + m.defaultValue + '"]').parent(), "checked");
                        e(m.defaultValue, "checked")
                    }
                    if (m.checkOnClickLine) {
                        h.parent().find("." + m.classBoxTotal).find("span").click(function() {
                            valueCheck = a(this).parent().find("input").val();
                            if (a(this).parent().find("input").attr("checked") == "checked") {
                                a(this).parent().find("input").removeAttr("checked")
                            } else {
                                a(this).parent().find("input").attr("checked", "checked")
                            }
                            checked = a(this).parent().find("input").attr("checked");
                            f(a(this).parent(), checked);
                            e(valueCheck, checked)
                        });
                        h.parent().find("." + m.classBoxTotal).find("." + m.classCheckInput).click(function() {
                            valueCheck = a(this).val();
                            checked = a(this).attr("checked");
                            f(a(this).parent(), checked);
                            e(valueCheck, checked)
                        })
                    }
                } else {
                    h.parent().find("." + m.classBoxTotal).find("li").addClass("simpleLineSelectPlugin");
                    h.parent().find("." + m.classBoxTotal).find("li").click(function() {
                        valueLine = a(this).attr("data-value");
                        if (a(this).attr("class") != m.classTitleGroup) {
                            h.parent().find("." + m.classBoxTotal).hide();
                            var o = a(this).html();
                            if (m.limitString != "" && o.length > m.limitString) {
                                h.parent().find("." + m.classFirstText).html(a(this).html().substring(0, m.limitString) + "...")
                            } else {
                                h.parent().find("." + m.classFirstText).html(a(this).html())
                            }
                            h.find("option").each(function() {
                                if (a(this).val() == valueLine) {
                                    a(this).attr("selected", "selected")
                                } else {
                                    a(this).removeAttr("selected")
                                }
                            })
                        }
                        m.okFunction(y);
                        n()
                    });
                    if (!m.directToLink) {
                        h.parent().find("." + m.classBoxTotal).find("a").click(function() {
                            return false
                        })
                    } else {
                        h.parent().find("." + m.classBoxTotal).find("a").click(function() {
                            location.href = a(this).attr("href")
                        })
                    }
                }
            })
        }
    })
})(jQuery);
this.TemplateEngine = function() {
    var b = this,
        a = [],
        c;
    this.variables = {
        cacheVersion: "1533147737508"
    };
    this.instances = {};
    this.render = function(e, d, f) {
        if (!a[e]) {
            $.get(e + "?v=" + b.variables.cacheVersion, function(g) {
                a[e] = g;
                f.call(b, c(g, d))
            })
        } else {
            f.call(b, c(a[e], d))
        }
    };
    c = function(e, d) {
        return Mustache.render(e, d)
    }
};
this.MultipleSelectionField = function() {
    var l = this,
        j = {
            cathoUtils: new Utils(),
            templateEngine: new TemplateEngine()
        },
        k = {
            TEMPLATE: "/vendor/facets/multiple-selection-field/multipleSelectionField.html",
            ANIMATION_TIME: 200,
            MAIN_CLASS: "multipleSelect"
        },
        f = {
            id: null,
            baseElement: null,
            templates: {
                selectedItens: null
            },
            callbacks: {}
        },
        d, i, g, h, e, c, a, b;
    this.options = {};
    this.validation = {
        isOpen: function() {
            return l.options.component.hasClass("open")
        }
    };
    this.init = function(m) {
        d(m);
        h()
    };
    this.addSelectedItem = function(m) {
        if (!e(m)) {
            return false
        }
        j.templateEngine.render(basePath.getHost() + l.options.templates.selectedItens, m, function(n) {
            l.options.selectedContainer.append(n);
            g(l.options.selectedContainer.children("li:last"));
            c();
            a();
            if (typeof l.options.callbacks.onAddItem === "function") {
                l.options.callbacks.onAddItem.apply(l.options.component)
            }
        })
    };
    this.removeSelectedItensFromSuggest = function(m) {
        l.options.selectedContainer.children("li").each(function() {
            var n = $(this).children("span").text();
            m.find("li:contains('" + n + "')").remove()
        })
    };
    this.open = function() {
        b();
        l.options.component.addClass("open");
        if (typeof l.options.callbacks.onOpen === "function") {
            l.options.callbacks.onOpen.apply(l.options.component)
        }
    };
    this.close = function() {
        if (l.options.component.hasClass("error")) {
            return false
        }
        l.options.selectedContainer.parent().css("max-height", 0);
        l.options.component.removeClass("open");
        if (typeof l.options.callbacks.onClose === "function") {
            l.options.callbacks.onClose.apply(l.options.component)
        }
    };
    a = function() {
        var m = l.options.selectedContainer.children("li").size();
        l.options.selectedItens.text(new SingularPlural("selecionado", "selecionados", m).render())
    };
    c = function() {
        var m = l.options.selectedContainer.children("li").size();
        l.options.component.removeClass("withSelection");
        if (m > 0) {
            l.options.component.addClass("withSelection")
        }
    };
    g = function(m) {
        new PointerEvents(m.find(".removeButton"), {
            preventDefault: false
        }).createPointerEvent("tap", function() {
            $(this).parent().slideUp({
                duration: k.ANIMATION_TIME,
                queue: false,
                complete: function() {
                    $(this).remove();
                    c();
                    a();
                    if (typeof l.options.callbacks.onRemoveItem === "function") {
                        l.options.callbacks.onRemoveItem.apply(null)
                    }
                }
            })
        })
    };
    e = function(m) {
        var n = m.search;
        return l.options.selectedContainer.children("li:contains('" + n + "')").size() === 0
    };
    h = function() {
        j.templateEngine.render(basePath.getHost() + k.TEMPLATE, {}, function(m) {
            l.options.component.prepend(m);
            l.options.removeButton = l.options.component.find("#removeButton");
            l.options.selectedItens = l.options.component.find("#totalSelectedItens");
            l.options.selectedContainer = l.options.component.find(".selectedContainer").children("ul");
            if (typeof l.options.callbacks.onReady === "function") {
                l.options.callbacks.onReady.apply(l.options.component)
            }
            i()
        })
    };
    d = function(m) {
        l.options = j.cathoUtils.combineObject(f, m);
        l.options.component = l.options.baseElement.parents("." + k.MAIN_CLASS)
    };
    b = function() {
        var m = $(window).height() - $("#smartbanner").height() - l.options.baseElement.height() - 40;
        l.options.selectedContainer.parent().css("max-height", m)
    };
    i = function() {
        l.options.baseElement.on("focus", function() {
            l.open()
        });
        var m = new PointerEvents(l.options.removeButton, {
            preventDefault: false,
            id: l.options.id
        });
        m.createPointerEvent("tap", function(n) {
            if (!l.validation.isOpen()) {
                l.options.selectedContainer.children("li").slideUp({
                    duration: k.ANIMATION_TIME,
                    queue: false,
                    complete: function() {
                        $(this).remove()
                    }
                });
                setTimeout(function() {
                    c();
                    a();
                    l.close();
                    if (typeof l.options.callbacks.onClear === "function") {
                        l.options.callbacks.onClear.apply(l)
                    }
                }, k.ANIMATION_TIME + 10);
                return false
            }
            if (typeof l.options.callbacks.onClear === "function") {
                l.options.callbacks.onClear.apply(l)
            }
        });
        m.onWindowPointer(function(n) {
            var o = EventNormalize.target(n);
            if (!l.validation.isOpen()) {
                return false
            }
            if ($(o).parents("." + k.MAIN_CLASS).size() === 0 && !$(o).hasClass(k.MAIN_CLASS)) {
                l.close()
            }
        })
    }
};
(function(K, m, Y) {
    var L = {
            tagMain: "body",
            transition: "elastic",
            speed: 250,
            width: false,
            initialWidth: "100",
            innerWidth: false,
            maxWidth: "",
            height: false,
            initialHeight: "100",
            innerHeight: false,
            maxHeight: "540",
            scalePhotos: true,
            scrolling: true,
            inline: false,
            html: false,
            iframe: false,
            fastIframe: true,
            photo: false,
            href: false,
            title: false,
            rel: false,
            opacity: 0.7,
            preloading: true,
            closeButton: true,
            modal: false,
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            open: false,
            returnFocus: true,
            reposition: true,
            loop: true,
            slideshow: false,
            slideshowAuto: true,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            onOpen: false,
            onLoad: false,
            onComplete: false,
            onCleanup: false,
            onClosed: false,
            overlayClose: true,
            escKey: true,
            arrowKey: true,
            top: false,
            bottom: false,
            left: false,
            right: false,
            fixed: false,
            data: undefined,
            autoresize: true,
            beforeCleanup: false
        },
        y = "colorbox",
        U = "cbox",
        s = U + "Element",
        X = U + "_open",
        e = U + "_load",
        W = U + "_complete",
        v = U + "_cleanup",
        ae = U + "_closed",
        i = U + "_purge",
        w = K.support.opacity === false && K.support.style === false,
        ah = w && !Y.XMLHttpRequest,
        ac = U + "_IE6",
        R, ai, aj, d, I, q, b, Q, c, ab, O, k, h, p, u, Z, t, T, A, C, ag, ak, n, g, a, x, J, o, E, aa, N, B, M, af = "div",
        ad;

    function H(al, ao, an) {
        var am = m.createElement(al);
        if (ao) {
            am.id = U + ao
        }
        if (an) {
            am.style.cssText = an
        }
        return K(am)
    }

    function F(am) {
        var al = c.length,
            an = (J + am) % al;
        return (an < 0) ? al + an : an
    }

    function P(al, am) {
        return Math.round((/%/.test(al) ? ((am === "x" ? l() : S()) / 100) : 1) * parseInt(al, 10))
    }

    function D(al) {
        return ag.photo || /\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(al)
    }

    function l() {
        return Y.innerWidth || ab.width()
    }

    function S() {
        return Y.innerHeight || ab.height()
    }

    function V() {
        var an, ap = K.data(x, y);
        if (ap == null) {
            ag = K.extend({}, L);
            if (console && console.log) {
                console.log("Error: cboxElement missing settings object")
            }
        } else {
            ag = K.extend({}, ap)
        }
        for (an in ag) {
            if (K.isFunction(ag[an]) && an.slice(0, 2) !== "on") {
                ag[an] = ag[an].call(x)
            }
        }
        ag.rel = ag.rel || x.rel || K(x).data("rel") || "nofollow";
        ag.href = ag.href || K(x).attr("href");
        ag.title = ag.title || x.title;
        if (typeof ag.href === "string") {
            ag.href = K.trim(ag.href)
        }
        var ao = /width=(\d+(px|%)?)&?/i;
        if (ao.test(ag.href)) {
            ag.width = ao.exec(ag.href)[1]
        }
        var am = /height=(\d+(px|%)?)&?/i;
        if (am.test(ag.href)) {
            ag.height = am.exec(ag.href)[1]
        }
        var ar = /iframe=(true|false)&?/i;
        if (ar.test(ag.href)) {
            ag.iframe = ar.exec(ag.href)[1]
        }
        var aq = /modal=(true|false)&?/i;
        if (aq.test(ag.href)) {
            ag.modal = aq.exec(ag.href)[1]
        }
        var al = /autoresize=(true|false)&?/i;
        if (al.test(ag.href)) {
            ag.autoresize = al.exec(ag.href)[1]
        }
    }

    function G(al, am) {
        K.event.trigger(al);
        if (am) {
            am.call(x)
        }
    }

    function z() {
        var am, ao = U + "Slideshow_",
            ap = "click." + U,
            aq, an, al;
        if (ag.slideshow && c[1]) {
            aq = function() {
                Z.text(ag.slideshowStop).unbind(ap).bind(W, function() {
                    if (ag.loop || c[J + 1]) {
                        am = setTimeout(M.next, ag.slideshowSpeed)
                    }
                }).bind(e, function() {
                    clearTimeout(am)
                }).one(ap + " " + v, an);
                ai.removeClass(ao + "off").addClass(ao + "on");
                am = setTimeout(M.next, ag.slideshowSpeed)
            };
            an = function() {
                clearTimeout(am);
                Z.text(ag.slideshowStart).unbind([W, e, v, ap].join(" ")).one(ap, function() {
                    M.next();
                    aq()
                });
                ai.removeClass(ao + "on").addClass(ao + "off")
            };
            if (ag.slideshowAuto) {
                aq()
            } else {
                an()
            }
        } else {
            ai.removeClass(ao + "off " + ao + "on")
        }
    }

    function f(al) {
        if (!N) {
            x = al;
            V();
            c = K(x);
            K(ag.tagMain).css("overflow", "hidden");
            J = 0;
            if (ag.rel !== "nofollow") {
                c = K("." + s).filter(function() {
                    var an = K.data(this, y),
                        am;
                    if (an) {
                        am = K(this).data("rel") || an.rel || this.rel
                    }
                    return (am === ag.rel)
                });
                J = c.index(x);
                if (J === -1) {
                    c = c.add(x);
                    J = c.length - 1
                }
            }
            if (!E) {
                E = aa = true;
                ai.show();
                if (ag.returnFocus) {
                    K(x).blur().one(ae, function() {
                        K(this).focus()
                    })
                }
                R.css({
                    opacity: +ag.opacity,
                    cursor: ag.overlayClose ? "pointer" : "auto"
                }).show();
                ag.w = P(ag.initialWidth, "x");
                ag.h = P(ag.initialHeight, "y");
                M.position();
                if (ah) {
                    ab.bind("resize." + ac + " scroll." + ac, function() {
                        R.css({
                            width: l(),
                            height: S(),
                            top: ab.scrollTop(),
                            left: ab.scrollLeft()
                        })
                    }).trigger("resize." + ac)
                }
                G(X, ag.onOpen);
                C.add(p).hide();
                A.html(ag.close).show();
                if (ag.modal) {
                    ag.overlayClose = false;
                    ag.escKey = false;
                    ag.closeButton = false
                }
                if (!ag.closeButton) {
                    A.css({
                        display: "none"
                    })
                }
            }
            M.load(true)
        }
    }

    function r() {
        if (!ai && m.body) {
            ad = false;
            ab = K(Y);
            ai = H(af).attr({
                id: y,
                "class": w ? U + (ah ? "IE6" : "IE") : ""
            }).hide();
            R = H(af, "Overlay", ah ? "position:absolute" : "").hide();
            h = H(af, "LoadingOverlay").add(H(af, "LoadingGraphic"));
            aj = H(af, "Wrapper");
            d = H(af, "Content").append(O = H(af, "LoadedContent", "width:0; height:0; overflow:hidden"), p = H(af, "Title"), u = H(af, "Current"), t = H(af, "Next"), T = H(af, "Previous"), Z = H(af, "Slideshow").bind(X, z), A = H(af, "Close"));
            aj.append(H(af).append(H(af, "TopLeft"), I = H(af, "TopCenter"), H(af, "TopRight")), H(af, false, "clear:left").append(q = H(af, "MiddleLeft"), d, b = H(af, "MiddleRight")), H(af, false, "clear:left").append(H(af, "BottomLeft"), Q = H(af, "BottomCenter"), H(af, "BottomRight"))).find("div div").css({
                "float": "left"
            });
            k = H(af, false, "position:absolute; width:9999px; visibility:hidden; display:none");
            C = t.add(T).add(u).add(Z);
            K(m.body).append(R, ai.append(aj, k))
        }
    }

    function j() {
        if (ai) {
            if (!ad) {
                ad = true;
                ak = I.height() + Q.height() + d.outerHeight(true) - d.height();
                n = q.width() + b.width() + d.outerWidth(true) - d.width();
                g = O.outerHeight(true);
                a = O.outerWidth(true);
                ai.css({
                    "padding-bottom": ak,
                    "padding-right": n
                });
                t.click(function() {
                    M.next()
                });
                T.click(function() {
                    M.prev()
                });
                A.click(function() {
                    M.close()
                });
                R.click(function() {
                    if (ag.overlayClose) {
                        M.close()
                    }
                });
                K(m).bind("keydown." + U, function(am) {
                    var al = am.keyCode;
                    if (E && ag.escKey && al === 27) {
                        am.preventDefault();
                        M.close()
                    }
                    if (E && ag.arrowKey && c[1]) {
                        if (al === 37) {
                            am.preventDefault();
                            T.click()
                        } else {
                            if (al === 39) {
                                am.preventDefault();
                                t.click()
                            }
                        }
                    }
                });
                K("." + s, m).live("click", function(al) {
                    if (!(al.which > 1 || al.shiftKey || al.altKey || al.metaKey)) {
                        al.preventDefault();
                        f(this)
                    }
                })
            }
            return true
        }
        return false
    }
    if (K.colorbox) {
        return
    }
    K(r);
    M = K.fn[y] = K[y] = function(al, an) {
        var am = this;
        al = al || {};
        r();
        if (j()) {
            if (!am[0]) {
                if (am.selector) {
                    return am
                }
                am = K("<a/>");
                al.open = true
            }
            if (an) {
                al.onComplete = an
            }
            am.each(function() {
                K.data(this, y, K.extend({}, K.data(this, y) || L, al))
            }).addClass(s);
            if ((K.isFunction(al.open) && al.open.call(am)) || al.open) {
                f(am[0])
            }
        }
        return am
    };
    M.position = function(an, ap) {
        var ar, au = 0,
            am = 0,
            aq = ai.offset(),
            al, ao;
        ab.unbind("resize." + U);
        ai.css({
            top: -90000,
            left: -90000
        });
        al = ab.scrollTop();
        ao = ab.scrollLeft();
        if (ag.fixed && !ah) {
            aq.top -= al;
            aq.left -= ao;
            ai.css({
                position: "fixed"
            })
        } else {
            au = al;
            am = ao;
            ai.css({
                position: "absolute"
            })
        }
        if (ag.right !== false) {
            am += Math.max(l() - ag.w - a - n - P(ag.right, "x"), 0)
        } else {
            if (ag.left !== false) {
                am += P(ag.left, "x")
            } else {
                am += Math.round(Math.max(l() - ag.w - a - n, 0) / 2)
            }
        }
        if (ag.bottom !== false) {
            au += Math.max(S() - ag.h - g - ak - P(ag.bottom, "y"), 0)
        } else {
            if (ag.top !== false) {
                au += P(ag.top, "y")
            } else {
                au += Math.round(Math.max(S() - ag.h - g - ak, 0) / 2)
            }
        }
        ai.css({
            top: aq.top,
            left: aq.left
        });
        an = (ai.width() === ag.w + a && ai.height() === ag.h + g) ? 0 : an || 0;
        aj[0].style.width = aj[0].style.height = "9999px";

        function at(av) {
            I[0].style.width = Q[0].style.width = d[0].style.width = av.style.width;
            d[0].style.height = q[0].style.height = b[0].style.height = av.style.height
        }
        ar = {
            width: ag.w + a,
            height: ag.h + g,
            top: au,
            left: am
        };
        if (an === 0) {
            ai.css(ar)
        }
        ai.dequeue().animate(ar, {
            duration: an,
            complete: function() {
                at(this);
                aa = false;
                aj[0].style.width = (ag.w + a + n) + "px";
                aj[0].style.height = (ag.h + g + ak) + "px";
                if (ag.reposition) {
                    setTimeout(function() {
                        ab.bind("resize." + U, M.position)
                    }, 1)
                }
                if (ap) {
                    ap()
                }
            },
            step: function() {
                at(this)
            }
        })
    };
    M.resize = function(al) {
        if (E) {
            if (al.width && ag.autoresize == true) {
                ag.w = P(al.width, "x") - a - n
            }
            if (al.innerWidth) {
                ag.w = P(al.innerWidth, "x")
            }
            O.css({
                width: ag.w
            });
            if (al.height && ag.autoresize == true) {
                ag.h = P(al.height, "y") - g - ak
            }
            if (al.innerHeight) {
                ag.h = P(al.innerHeight, "y")
            }
            if (!al.innerHeight && !al.height) {
                O.css({
                    height: "auto"
                });
                ag.h = O.height()
            }
            O.css({
                height: ag.h
            });
            M.position(ag.transition === "none" ? 0 : ag.speed)
        }
    };
    M.prep = function(am) {
        if (!E) {
            return
        }
        var ap, an = ag.transition === "none" ? 0 : ag.speed;
        O.remove();
        O = H(af, "LoadedContent").append(am);

        function al() {
            ag.w = ag.w || O.width();
            ag.w = ag.mw && ag.mw < ag.w ? ag.mw : ag.w;
            return ag.w
        }

        function ao() {
            ag.h = ag.h || O.height();
            ag.h = ag.mh && ag.mh < ag.h ? ag.mh : ag.h;
            return ag.h
        }
        O.hide().appendTo(k.show()).css({
            width: al(),
            overflow: ag.scrolling ? "auto" : "hidden"
        }).css({
            height: ao()
        }).prependTo(d);
        k.hide();
        K(o).css({
            "float": "none"
        });
        if (ah) {
            K("select").not(ai.find("select")).filter(function() {
                return this.style.visibility !== "hidden"
            }).css({
                visibility: "hidden"
            }).one(v, function() {
                this.style.visibility = "inherit"
            })
        }
        ap = function() {
            var aB, ay, az = c.length,
                av, aA = "frameBorder",
                au = "allowTransparency",
                ar, aq, ax, aw;
            if (!E) {
                return
            }

            function at() {
                if (w) {
                    ai[0].style.removeAttribute("filter")
                }
            }
            ar = function() {
                clearTimeout(B);
                h.detach().hide();
                G(W, ag.onComplete)
            };
            if (w) {
                if (o) {
                    O.fadeIn(100)
                }
            }
            p.html(ag.title).add(O).show();
            if (az > 1) {
                if (typeof ag.current === "string") {
                    u.html(ag.current.replace("{current}", J + 1).replace("{total}", az)).show()
                }
                t[(ag.loop || J < az - 1) ? "show" : "hide"]().html(ag.next);
                T[(ag.loop || J) ? "show" : "hide"]().html(ag.previous);
                if (ag.slideshow) {
                    Z.show()
                }
                if (ag.preloading) {
                    aB = [F(-1), F(1)];
                    while (ay = c[aB.pop()]) {
                        aw = K.data(ay, y);
                        if (aw && aw.href) {
                            aq = aw.href;
                            if (K.isFunction(aq)) {
                                aq = aq.call(ay)
                            }
                        } else {
                            aq = ay.href
                        }
                        if (D(aq)) {
                            ax = new Image();
                            ax.src = aq
                        }
                    }
                }
            } else {
                C.hide()
            }
            if (ag.iframe) {
                av = H("iframe")[0];
                if (aA in av) {
                    av[aA] = 0
                }
                if (au in av) {
                    av[au] = "true"
                }
                av.name = U + (+new Date());
                if (ag.fastIframe) {
                    ar()
                } else {
                    K(av).one("load", ar)
                }
                av.src = ag.href;
                if (!ag.scrolling) {
                    av.scrolling = "no"
                }
                K(av).addClass(U + "Iframe").appendTo(O).one(i, function() {
                    av.src = "//about:blank"
                })
            } else {
                ar()
            }
            if (ag.transition === "fade") {
                ai.fadeTo(an, 1, at)
            } else {
                at()
            }
        };
        if (ag.transition === "fade") {
            ai.fadeTo(an, 0, function() {
                M.position(0, ap)
            })
        } else {
            M.position(an, ap)
        }
    };
    M.load = function(an) {
        var am, ao, al = M.prep;
        aa = true;
        o = false;
        x = c[J];
        if (!an) {
            V()
        }
        G(i);
        G(e, ag.onLoad);
        ag.h = ag.height ? P(ag.height, "y") - g - ak : ag.innerHeight && P(ag.innerHeight, "y");
        ag.w = ag.width ? P(ag.width, "x") - a - n : ag.innerWidth && P(ag.innerWidth, "x");
        ag.mw = ag.w;
        ag.mh = ag.h;
        if (ag.maxWidth) {
            ag.mw = P(ag.maxWidth, "x") - a - n;
            ag.mw = ag.w && ag.w < ag.mw ? ag.w : ag.mw
        }
        if (ag.maxHeight) {
            ag.mh = P(ag.maxHeight, "y") - g - ak;
            ag.mh = ag.h && ag.h < ag.mh ? ag.h : ag.mh
        }
        am = ag.href;
        B = setTimeout(function() {
            h.show().appendTo(d)
        }, 100);
        if (ag.inline) {
            H(af).hide().insertBefore(K(am)[0]).one(i, function() {
                K(this).replaceWith(O.children())
            });
            al(K(am))
        } else {
            if (ag.iframe) {
                al(" ")
            } else {
                if (ag.html) {
                    al(ag.html)
                } else {
                    if (D(am)) {
                        K(o = new Image()).addClass(U + "Photo").error(function() {
                            ag.title = false;
                            al(H(af, "Error").html(ag.imgError))
                        }).load(function() {
                            var ap;
                            o.onload = null;
                            if (ag.scalePhotos) {
                                ao = function() {
                                    o.height -= o.height * ap;
                                    o.width -= o.width * ap
                                };
                                if (ag.mw && o.width > ag.mw) {
                                    ap = (o.width - ag.mw) / o.width;
                                    ao()
                                }
                                if (ag.mh && o.height > ag.mh) {
                                    ap = (o.height - ag.mh) / o.height;
                                    ao()
                                }
                            }
                            if (ag.h) {
                                o.style.marginTop = Math.max(ag.h - o.height, 0) / 2 + "px"
                            }
                            if (c[1] && (ag.loop || c[J + 1])) {
                                o.style.cursor = "pointer";
                                o.onclick = function() {
                                    M.next()
                                }
                            }
                            if (w) {
                                o.style.msInterpolationMode = "bicubic"
                            }
                            setTimeout(function() {
                                al(o)
                            }, 1)
                        });
                        setTimeout(function() {
                            o.src = am
                        }, 1)
                    } else {
                        if (am) {
                            k.load(am, ag.data, function(aq, ap, ar) {
                                al(ap === "error" ? H(af, "Error").html(ag.xhrError) : K(this).contents())
                            })
                        }
                    }
                }
            }
        }
    };
    M.next = function() {
        if (!aa && c[1] && (ag.loop || c[J + 1])) {
            J = F(1);
            M.load()
        }
    };
    M.prev = function() {
        if (!aa && c[1] && (ag.loop || J)) {
            J = F(-1);
            M.load()
        }
    };
    M.close = function() {
        if (E && !N) {
            if (ag.beforeCleanup[0] && !ag.beforeCleanup[1].call()) {
                return false
            }
            K(ag.tagMain).css("overflow", "auto");
            N = true;
            E = false;
            G(v, ag.onCleanup);
            ab.unbind("." + U + " ." + ac);
            R.fadeTo(200, 0);
            ai.stop().fadeTo(300, 0, function() {
                ai.add(R).css({
                    opacity: 1,
                    cursor: "auto"
                }).hide();
                G(i);
                O.remove();
                setTimeout(function() {
                    N = false;
                    G(ae, ag.onClosed)
                }, 1)
            })
        }
    };
    M.remove = function() {
        K([]).add(ai).add(R).remove();
        ai = null;
        K("." + s).removeData(y).removeClass(s).die()
    };
    M.element = function() {
        return K(x)
    };
    M.settings = L
}(jQuery, document, this));

function AutoComplete(B, b, n, w, h, t) {
    var g = this,
        o = [],
        p = null,
        z = null,
        y = null,
        l = "",
        d = null,
        e, a, r, i, f, k, A, q, m, v, s, x, j, c, u;
    this.dataObject = {};
    this._init = function() {
        p = $("#" + b);
        A();
        q();
        u = z.css("z-index")
    };
    A = function() {
        var E = c().width,
            D = c().height,
            C = "<div id='autoComplete" + n;
        C += "' class='autoComplete " + n + " " + t;
        C += "' style='width: " + E + "; top: ";
        C += D + ";'><ul class='autoCompleteList'>";
        C += "</ul></div>";
        p.after(C);
        z = $("#autoComplete" + n);
        if (t) {
            z.css({
                opacity: 1,
                visibility: "visible",
                display: "none"
            })
        }
    };
    c = function() {
        return {
            width: p.outerWidth() - 2 + "px",
            height: p.outerHeight() - 2 + "px"
        }
    };
    q = function() {
        var C = 1;
        if (new Support().isTouchScreen()) {
            C = 10
        }
        p.on({
            keydown: function(F) {
                var E = this,
                    D = F.keyCode;
                if (D === 38 || D === 40 || D === 27 || D === 13) {
                    F.preventDefault();
                    m(D);
                    return false
                } else {
                    if (D === 9) {
                        g.hideAutoComplete()
                    } else {
                        clearInterval(y);
                        setTimeout(function() {
                            var G = $.trim(E.value),
                                I = G.length;
                            if (l !== G) {
                                try {
                                    h.typing.call(undefined, g, p)
                                } catch (H) {}
                                l = G
                            }
                            if (I >= w) {
                                if (!f(G)) {
                                    y = setTimeout(function() {
                                        r(G)
                                    }, 200)
                                } else {
                                    a(o[G.toLowerCase()], G);
                                    try {
                                        h.completeRequest.call(undefined, g, p)
                                    } catch (H) {}
                                    g.showAutoComplete()
                                }
                            } else {
                                g.hideAutoComplete()
                            }
                        }, C)
                    }
                }
            }
        });
        $(window).on("resize", function() {
            z.width(c().width)
        })
    };
    m = function(D) {
        var F = z.children("ul"),
            C = F.children("li"),
            E = F.children(".active");
        C.removeClass("active");
        if (D === 13) {
            E.trigger("click");
            if (p.parents("form").attr("action") !== "#" && p.parents("form").attr("action") !== undefined) {
                p.parents("form").trigger("submit")
            }
        } else {
            if (D === 27) {
                g.hideAutoComplete()
            } else {
                if (D === 38 || D === 40) {
                    v(D, F, C, E)
                }
            }
        }
    };
    v = function(J, H, F, K) {
        var E, D, G = l,
            C;
        if (J === 38) {
            if (K.index() === -1) {
                D = F.size() - 1
            } else {
                if (K.index() > 0) {
                    D = K.index() - 1
                }
            }
        } else {
            if (K.index() === -1) {
                D = 0
            } else {
                if (K.index() < F.size() - 1) {
                    D = K.index() + 1
                }
            }
        }
        E = H.find("li:eq(" + D + ")");
        E.addClass("active");
        if (D !== undefined) {
            G = E.text()
        }
        p.val(G);
        if (E.index() === -1) {
            x(H, 0)
        } else {
            if (E.index() === F.size() - 1) {
                x(H, E.position().top + E.outerHeight())
            } else {
                C = s(E, H, J);
                if (C !== true) {
                    x(H, C)
                }
            }
        }
        try {
            h.arrowKeyFunction.call(undefined, g, p)
        } catch (I) {}
    };
    s = function(G, H, E) {
        var D = H.scrollTop(),
            F = H.height(),
            J = G.outerHeight(),
            I = G.position().top,
            C = true;
        if (E === 40) {
            if (I + J + D > F) {
                C = I + J + D - F
            }
        } else {
            if (I + D < D) {
                C = D + I
            }
        }
        return C
    };
    x = function(C, D) {
        C.stop().animate({
            scrollTop: D
        }, {
            duration: 150,
            complete: function() {}
        })
    };
    k = function(C, D) {
        if (!p.attr("data-noautocompletecache") || p.attr("data-noautocompletecache") === "true") {
            o[D.toLowerCase()] = C
        }
    };
    f = function(C) {
        return (o[C.toLowerCase()] === undefined) ? false : true
    };
    this.showAutoComplete = function() {
        if (z.css("opacity") <= 1) {
            $(window).trigger("resize");
            i(1)
        }
        z.css("z-index", u);
        try {
            h.show.call(p)
        } catch (C) {}
    };
    this.hideAutoComplete = function() {
        setTimeout(function() {
            if (z.css("opacity") >= 0) {
                i(0, "hidden")
            }
            z.css("z-index", "-1")
        }, 80)
    };
    i = function(D, C) {
        switch (t) {
            case "slide":
                j(D);
                break;
            default:
                z.stop().css({
                    visibility: "visible"
                }).animate({
                    opacity: D
                }, {
                    duration: 200,
                    queue: false,
                    complete: function() {
                        if (C !== undefined) {
                            z.css({
                                visibility: C
                            })
                        }
                    }
                })
        }
    };
    j = function(C) {
        if (C === 0) {
            z.slideUp({
                duration: 200,
                queue: false
            })
        } else {
            var D = "auto";
            if (p.attr("data-suggestheight")) {
                D = p.attr("data-suggestheight")
            }
            z.css("max-height", D).height("auto").slideDown({
                duration: 200,
                queue: false
            })
        }
    };
    r = function(C) {
        try {
            h.beforeSend.call(undefined, g, p)
        } catch (D) {}
        g.abortRequest();
        z.removeClass("semResultado");
        g.ajaxSender = $.ajax({
            type: "POST",
            url: B,
            data: JSON.parse(g.dataObject.replace("replaceKey", C)),
            dataType: "json",
            complete: function() {
                try {
                    h.completeRequest.call(undefined, g, p)
                } catch (E) {}
            },
            success: function(E) {
                g.successResult(C, E)
            },
            error: function() {
                g.hideAutoComplete();
                try {
                    h.errorRequest.call(undefined, g, p)
                } catch (E) {}
            }
        })
    };
    this.abortRequest = function() {
        if (g.ajaxSender != undefined) {
            g.ajaxSender.abort()
        }
    };
    this.successResult = function(D, C) {
        try {
            if (!C) {
                throw new Error("ReturnError: nÃ£o hÃ¡ retorno de dados")
            } else {
                if (!C.list || !$.isArray(C.list)) {
                    throw new Error("ReturnError: Json nÃ£o estÃ¡ correto")
                }
            }
            if (C.status) {
                a(C, D);
                k(C, D);
                if ($(":focus").attr("id") === p.attr("id")) {
                    g.showAutoComplete()
                }
                try {
                    h.getResult.call(undefined, g, p)
                } catch (E) {}
            } else {
                g.hideAutoComplete();
                try {
                    h.getEmptyResult.call(undefined, g, p)
                } catch (E) {}
            }
        } catch (E) {
            return E.message
        }
    };
    this.setDataObject = function(D) {
        try {
            g.dataObject = JSON.stringify(D);
            if (typeof D !== "object" || $.isArray(D)) {
                throw new Error("TypeError: object deve ser um JSON vÃ¡lido")
            } else {
                if (JSON.stringify(D).indexOf("replaceKey") === -1) {
                    throw new Error("ContentError: object deve possuir ao menos uma propriedade com o valor 'replaceKey'")
                }
            }
        } catch (C) {
            return C.message
        }
    };
    a = function(L, F) {
        var C = L.list,
            E = z.children("ul"),
            H = "",
            G, J, K;
        for (K = 0; K < C.length; K = K + 1) {
            if (typeof C[K] === "object") {
                if (typeof C[K].name !== "undefined") {
                    J = C[K].name
                } else {
                    J = C[K].text
                }
                G = "";
                for (var D in C[K]) {
                    if (D !== "name") {
                        G += " data-" + D + "='" + C[K][D] + "'"
                    }
                }
            } else {
                J = C[K];
                G = ""
            }
            H += "<li" + G + ">" + g.contrastSearchTerm(J, F) + "</li>"
        }
        if (C.length === 0) {
            z.addClass("semResultado")
        }
        E.html(H);
        try {
            h.renderComplete.call(E)
        } catch (I) {}
        e(E);
        x(E, 0)
    };
    e = function(D) {
        var C = new PointerEvents(D.children("li"), {
            preventDefault: false
        });
        C.createPointerEvent("tap", function() {
            g.eventHandler(this)
        });
        if (!d) {
            C.onWindowPointer(function(J) {
                d = true;
                if (z.css("opacity") === 0) {
                    return false
                }
                if (new Support().isNativeAndroid() && $(this).parents(".autoComplete").size() !== 0) {
                    var K = J.changedTouches[0],
                        I = K.pageY,
                        G = D.children("li"),
                        E = $(G[0]).outerHeight(),
                        H;
                    for (var F = 0; F < G.size(); F++) {
                        H = $(G[F]).position().top + D.offset().top - D.scrollTop();
                        if (I >= H && I <= H + E) {
                            setTimeout(function() {
                                g.eventHandler(G[F])
                            }, 1000);
                            break
                        }
                    }
                } else {
                    if ($("*:focus").attr("id") !== b && $(this).parents(".autoComplete").size() === 0) {
                        g.hideAutoComplete();
                        p.trigger("blur")
                    }
                }
            })
        }
    };
    this.eventHandler = function(D) {
        var E = $(D).text();
        g.hideAutoComplete();
        g.setValue(E);
        if (p.parents("form").attr("action") !== "#" && p.parents("form").attr("action") !== undefined && p.parents("form").attr("sendautocomplete") !== "off") {
            p.parents("form").trigger("submit")
        }
        try {
            h.selectedFunction.call(D, g, p)
        } catch (C) {}
    };
    this.setValue = function(C) {
        p.val(C);
        l = C
    };
    this.contrastSearchTerm = function(E, C) {
        C = $.trim(C.replaceAcentos());
        var D = new RegExp("(" + C.pregQuote() + ")", "gi"),
            F = E.replace(D, "<span>$1</span>");
        return F
    }
};
(function defineMustache(b, a) {
    if (typeof exports === "object" && exports && typeof exports.nodeName !== "string") {
        a(exports)
    } else {
        if (typeof define === "function" && define.amd) {
            define(["exports"], a)
        } else {
            b.Mustache = {};
            a(b.Mustache)
        }
    }
})(this, function mustacheFactory(F) {
    var x = Object.prototype.toString;
    var y = Array.isArray || function d(Q) {
        return x.call(Q) === "[object Array]"
    };

    function u(Q) {
        return typeof Q === "function"
    }

    function L(Q) {
        return y(Q) ? "array" : typeof Q
    }

    function i(Q) {
        return Q.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function J(R, Q) {
        return R != null && typeof R === "object" && Q in R
    }
    var o = RegExp.prototype.test;

    function c(R, Q) {
        return o.call(R, Q)
    }
    var s = /\S/;

    function E(Q) {
        return !c(s, Q)
    }
    var q = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };

    function z(Q) {
        return String(Q).replace(/[&<>"'`=\/]/g, function R(S) {
            return q[S]
        })
    }
    var t = /\s*/;
    var C = /\s+/;
    var l = /\s*=/;
    var N = /\s*\}/;
    var r = /#|\^|\/|>|\{|&|=|!/;

    function e(aj, Y) {
        if (!aj) {
            return []
        }
        var aa = [];
        var Z = [];
        var V = [];
        var ak = false;
        var ah = false;

        function ag() {
            if (ak && !ah) {
                while (V.length) {
                    delete Z[V.pop()]
                }
            } else {
                V = []
            }
            ak = false;
            ah = false
        }
        var ac, X, ai;

        function W(al) {
            if (typeof al === "string") {
                al = al.split(C, 2)
            }
            if (!y(al) || al.length !== 2) {
                throw new Error("Invalid tags: " + al)
            }
            ac = new RegExp(i(al[0]) + "\\s*");
            X = new RegExp("\\s*" + i(al[1]));
            ai = new RegExp("\\s*" + i("}" + al[1]))
        }
        W(Y || F.tags);
        var S = new a(aj);
        var T, R, ab, ae, U, Q;
        while (!S.eos()) {
            T = S.pos;
            ab = S.scanUntil(ac);
            if (ab) {
                for (var af = 0, ad = ab.length; af < ad; ++af) {
                    ae = ab.charAt(af);
                    if (E(ae)) {
                        V.push(Z.length)
                    } else {
                        ah = true
                    }
                    Z.push(["text", ae, T, T + 1]);
                    T += 1;
                    if (ae === "\n") {
                        ag()
                    }
                }
            }
            if (!S.scan(ac)) {
                break
            }
            ak = true;
            R = S.scan(r) || "name";
            S.scan(t);
            if (R === "=") {
                ab = S.scanUntil(l);
                S.scan(l);
                S.scanUntil(X)
            } else {
                if (R === "{") {
                    ab = S.scanUntil(ai);
                    S.scan(N);
                    S.scanUntil(X);
                    R = "&"
                } else {
                    ab = S.scanUntil(X)
                }
            }
            if (!S.scan(X)) {
                throw new Error("Unclosed tag at " + S.pos)
            }
            U = [R, ab, T, S.pos];
            Z.push(U);
            if (R === "#" || R === "^") {
                aa.push(U)
            } else {
                if (R === "/") {
                    Q = aa.pop();
                    if (!Q) {
                        throw new Error('Unopened section "' + ab + '" at ' + T)
                    }
                    if (Q[1] !== ab) {
                        throw new Error('Unclosed section "' + Q[1] + '" at ' + T)
                    }
                } else {
                    if (R === "name" || R === "{" || R === "&") {
                        ah = true
                    } else {
                        if (R === "=") {
                            W(ab)
                        }
                    }
                }
            }
        }
        Q = aa.pop();
        if (Q) {
            throw new Error('Unclosed section "' + Q[1] + '" at ' + S.pos)
        }
        return m(p(Z))
    }

    function p(V) {
        var R = [];
        var T, Q;
        for (var S = 0, U = V.length; S < U; ++S) {
            T = V[S];
            if (T) {
                if (T[0] === "text" && Q && Q[0] === "text") {
                    Q[1] += T[1];
                    Q[3] = T[3]
                } else {
                    R.push(T);
                    Q = T
                }
            }
        }
        return R
    }

    function m(V) {
        var X = [];
        var U = X;
        var W = [];
        var R, T;
        for (var Q = 0, S = V.length; Q < S; ++Q) {
            R = V[Q];
            switch (R[0]) {
                case "#":
                case "^":
                    U.push(R);
                    W.push(R);
                    U = R[4] = [];
                    break;
                case "/":
                    T = W.pop();
                    T[5] = R[2];
                    U = W.length > 0 ? W[W.length - 1][4] : X;
                    break;
                default:
                    U.push(R)
            }
        }
        return X
    }

    function a(Q) {
        this.string = Q;
        this.tail = Q;
        this.pos = 0
    }
    a.prototype.eos = function K() {
        return this.tail === ""
    };
    a.prototype.scan = function O(S) {
        var R = this.tail.match(S);
        if (!R || R.index !== 0) {
            return ""
        }
        var Q = R[0];
        this.tail = this.tail.substring(Q.length);
        this.pos += Q.length;
        return Q
    };
    a.prototype.scanUntil = function I(S) {
        var R = this.tail.search(S),
            Q;
        switch (R) {
            case -1:
                Q = this.tail;
                this.tail = "";
                break;
            case 0:
                Q = "";
                break;
            default:
                Q = this.tail.substring(0, R);
                this.tail = this.tail.substring(R)
        }
        this.pos += Q.length;
        return Q
    };

    function M(R, Q) {
        this.view = R;
        this.cache = {
            ".": this.view
        };
        this.parent = Q
    }
    M.prototype.push = function G(Q) {
        return new M(Q, this)
    };
    M.prototype.lookup = function j(T) {
        var R = this.cache;
        var V;
        if (R.hasOwnProperty(T)) {
            V = R[T]
        } else {
            var U = this,
                W, S, Q = false;
            while (U) {
                if (T.indexOf(".") > 0) {
                    V = U.view;
                    W = T.split(".");
                    S = 0;
                    while (V != null && S < W.length) {
                        if (S === W.length - 1) {
                            Q = J(V, W[S])
                        }
                        V = V[W[S++]]
                    }
                } else {
                    V = U.view[T];
                    Q = J(U.view, T)
                }
                if (Q) {
                    break
                }
                U = U.parent
            }
            R[T] = V
        }
        if (u(V)) {
            V = V.call(this.view)
        }
        return V
    };

    function k() {
        this.cache = {}
    }
    k.prototype.clearCache = function A() {
        this.cache = {}
    };
    k.prototype.parse = function v(S, R) {
        var Q = this.cache;
        var T = Q[S];
        if (T == null) {
            T = Q[S] = e(S, R)
        }
        return T
    };
    k.prototype.render = function B(T, Q, S) {
        var U = this.parse(T);
        var R = Q instanceof M ? Q : new M(Q);
        return this.renderTokens(U, R, S, T)
    };
    k.prototype.renderTokens = function n(X, Q, V, Z) {
        var T = "";
        var S, R, Y;
        for (var U = 0, W = X.length; U < W; ++U) {
            Y = undefined;
            S = X[U];
            R = S[0];
            if (R === "#") {
                Y = this.renderSection(S, Q, V, Z)
            } else {
                if (R === "^") {
                    Y = this.renderInverted(S, Q, V, Z)
                } else {
                    if (R === ">") {
                        Y = this.renderPartial(S, Q, V, Z)
                    } else {
                        if (R === "&") {
                            Y = this.unescapedValue(S, Q)
                        } else {
                            if (R === "name") {
                                Y = this.escapedValue(S, Q)
                            } else {
                                if (R === "text") {
                                    Y = this.rawValue(S)
                                }
                            }
                        }
                    }
                }
            }
            if (Y !== undefined) {
                T += Y
            }
        }
        return T
    };
    k.prototype.renderSection = function w(S, Q, V, Y) {
        var Z = this;
        var U = "";
        var W = Q.lookup(S[1]);

        function R(aa) {
            return Z.render(aa, Q, V)
        }
        if (!W) {
            return
        }
        if (y(W)) {
            for (var T = 0, X = W.length; T < X; ++T) {
                U += this.renderTokens(S[4], Q.push(W[T]), V, Y)
            }
        } else {
            if (typeof W === "object" || typeof W === "string" || typeof W === "number") {
                U += this.renderTokens(S[4], Q.push(W), V, Y)
            } else {
                if (u(W)) {
                    if (typeof Y !== "string") {
                        throw new Error("Cannot use higher-order sections without the original template")
                    }
                    W = W.call(Q.view, Y.slice(S[3], S[5]), R);
                    if (W != null) {
                        U += W
                    }
                } else {
                    U += this.renderTokens(S[4], Q, V, Y)
                }
            }
        }
        return U
    };
    k.prototype.renderInverted = function b(S, R, Q, U) {
        var T = R.lookup(S[1]);
        if (!T || y(T) && T.length === 0) {
            return this.renderTokens(S[4], R, Q, U)
        }
    };
    k.prototype.renderPartial = function H(S, R, Q) {
        if (!Q) {
            return
        }
        var T = u(Q) ? Q(S[1]) : Q[S[1]];
        if (T != null) {
            return this.renderTokens(this.parse(T), R, Q, T)
        }
    };
    k.prototype.unescapedValue = function g(R, Q) {
        var S = Q.lookup(R[1]);
        if (S != null) {
            return S
        }
    };
    k.prototype.escapedValue = function D(R, Q) {
        var S = Q.lookup(R[1]);
        if (S != null) {
            return F.escape(S)
        }
    };
    k.prototype.rawValue = function f(Q) {
        return Q[1]
    };
    F.name = "mustache.js";
    F.version = "2.3.0";
    F.tags = ["{{", "}}"];
    var P = new k;
    F.clearCache = function A() {
        return P.clearCache()
    };
    F.parse = function v(R, Q) {
        return P.parse(R, Q)
    };
    F.render = function B(S, Q, R) {
        if (typeof S !== "string") {
            throw new TypeError('Invalid template! Template should be a "string" but "' + L(S) + '" was given as the first argument for mustache#render(template, view, partials)')
        }
        return P.render(S, Q, R)
    };
    F.to_html = function h(T, R, S, U) {
        var Q = F.render(T, R, S);
        if (u(U)) {
            U(Q)
        } else {
            return Q
        }
    };
    F.escape = z;
    F.Scanner = a;
    F.Context = M;
    F.Writer = k;
    return F
});
var Switcher = {
    instances: {},
    variables: {},
    createCallback: function(b, a) {
        if (typeof a !== "function") {
            throw "TypeError: functionCallback deve ser do tipo Function"
        }
        new PointerEvents(b).createPointerEvent("tap", a)
    }
};
this.LoadingSvg = function() {
    var a = this,
        e = {
            id: "loadingSvg",
            name: "",
            container: null,
            buildMethod: "append",
            autoShow: false
        },
        d, c, b;
    this.params = {};
    d = function(f) {
        a.params = new Utils().combineObject(e, f)
    };
    b = function() {
        a.params.loadingElement = $("#" + a.params.id)
    };
    c = function() {
        var f = '<div class="loadingSvg {{ name }}" id="{{ id }}"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite" /></path></svg></div>';
        a.params.container[a.params.buildMethod](Mustache.render(f, a.params));
        b();
        if (a.params.autoShow) {
            a.show()
        }
    };
    this.createLoading = function(f) {
        d(f);
        c()
    };
    this.show = function() {
        a.params.loadingElement.addClass("show")
    };
    this.hide = function() {
        a.params.loadingElement.removeClass("show")
    }
};
var AnimateScroll = {
    defaultTarget: $("body, html"),
    target: $("body, html"),
    anchor: function(a, b, c) {
        if (new Support().isWindowsPhone()) {
            $(document).scrollTop(a)
        } else {
            this.target.animate({
                scrollTop: a
            }, {
                duration: b,
                queue: false,
                complete: c,
                start: function() {
                    AnimateScroll.setTarget(AnimateScroll.defaultTarget)
                }
            })
        }
    },
    setTarget: function(a) {
        this.target = a
    }
};
this.FunctionUtils = {
    getFunctionByName: function(e) {
        var c = e.split("."),
            d = window[c[0]],
            b;
        for (b = 1; b < c.length; b = b + 1) {
            d = d[c[b]]
        }
        return d
    }
};
var LabelController = {
    variables: {
        styles: ["success", "error", "focus", "hasContent"],
        isApplySuccessClass: true
    },
    instances: {},
    init: function(a) {
        this.config(a);
        this.setEvents(a);
        this.hasContentOnInit(a);
        $("[autofocus]").trigger("focus")
    },
    config: function(a) {
        LabelController.variables.totalFields = a.size();
        this.build(a);
        a.parent().addClass("labelController")
    },
    build: function(b) {
        var d = null,
            c = 0;
        for (c = 0; c < LabelController.variables.totalFields; c = c + 1) {
            d = $(b[c]);
            if (d.attr("data-defaultlabel") === "true") {
                d.parent().addClass("defaultlabel")
            }
            if (b[c].tagName === "SELECT" && d.attr("value") <= 0) {
                d.val(null)
            }
            this.configPosition(b[c])
        }
    },
    configPosition: function(a) {
        var c = $(a),
            b = 2;
        c.prev("span").click(function() {
            c.focus()
        });
        c.prev("span, label").css({
            "padding-right": c.css("padding-right"),
            "padding-left": parseInt(c.css("padding-left"), 10) + b + "px",
            "padding-top": c.css("padding-top"),
            "padding-bottom": c.css("padding-bottom"),
            height: c.css("height"),
            "line-height": LabelController.getLineHeight(a.tagName, c)
        })
    },
    getLineHeight: function(a, c) {
        var b;
        switch (a) {
            case "TEXTAREA":
                b = "100%";
                break;
            case "SELECT":
                b = (parseInt(c.css("height"), 10) - parseInt(c.css("padding-top"), 10) - parseInt(c.css("padding-bottom"), 10)) + "px";
                break;
            default:
                b = parseInt(c.css("line-height"), 10) + "px"
        }
        return b
    },
    setEvents: function(a) {
        a.on({
            focus: function() {
                if (!$(this).attr("data-ignorelabelcontrollerevent")) {
                    LabelController.applyFocus(this)
                }
            },
            blur: function() {
                var b = $(this).parent();
                if (!$(this).attr("data-ignorelabelcontrollerevent")) {
                    LabelController.resetClass(this);
                    LabelController.applyCallback(this)
                }
            }
        });
        $(window).on("resize", function() {
            for (var b = 0; b < LabelController.variables.totalFields; b = b + 1) {
                LabelController.configPosition(a[b])
            }
        })
    },
    resetClass: function(c) {
        var e = this.variables.styles.length,
            d = $(c).parent();
        for (var b = 0; b < e; b = b + 1) {
            d.removeClass(this.variables.styles[b])
        }
        if (c.value !== "") {
            d.addClass("hasContent")
        }
    },
    applyCallback: function(a) {
        var c = $(a).attr("data-callback");
        if (c && c !== "") {
            try {
                FunctionUtils.getFunctionByName(c).call(a)
            } catch (b) {
                throw b
            }
        }
    },
    applySuccess: function(a) {
        this.resetClass(a);
        if (LabelController.variables.isApplySuccessClass) {
            $(a).parent().addClass("success")
        }
    },
    applyFocus: function(a) {
        this.resetClass(a);
        $(a).parent().addClass("focus")
    },
    applyError: function(a) {
        this.resetClass(a);
        $(a).parent().addClass("error")
    },
    hasContentOnInit: function(a) {
        a.each(function() {
            if (!!$(this).val()) {
                $(this).parent().addClass("hasContent")
            }
        })
    }
};
var BaseForm = {
    instances: {},
    variables: {
        removeItem: false
    },
    validation: {
        job: function() {
            if (new JobSearchForm().validateSearchTerm(this.value)) {
                LabelController.applySuccess(this);
                BaseForm.instances.suggestCargo.hideAutoComplete()
            }
        },
        locality: function() {
            var a = this,
                b = function() {
                    if (!new JobSearchForm().validateLocality(BaseForm.getLocalityEntity())) {
                        LabelController.applyError(a)
                    } else {
                        if (a.value !== "") {
                            LabelController.applySuccess(a);
                            BaseForm.instances.localitySuggest.hideAutoComplete()
                        }
                    }
                };
            b();
            setTimeout(function() {
                if (!BaseForm.variables.loading) {
                    b()
                }
            }, 60)
        },
        salary: function() {
            if (this.value !== "") {
                LabelController.applySuccess(this)
            }
        },
        clearSalary: function() {
            $("#faixa_sal_id_combinar").val("1");
            $("#checkFaixaCombinar").attr("checked", "checked");
            $("#fieldFaixaCombinar").slideUp({
                duration: 200,
                queue: false
            });
            $("#faixa_sal_id").val("-1").trigger("blur");
            setTimeout(function() {
                $("#faixa_sal_id").trigger("blur").trigger("change")
            }, 50)
        },
        clearLocality: function() {
            setTimeout(function() {
                $("#cidade").trigger("blur")
            }, 50)
        }
    },
    init: function() {
        BaseForm.setCache();
        BaseForm.suggestCargo();
        BaseForm.adaptative();
        BaseForm.prepareLoading();
        BaseForm.localitySuggest();
        BaseForm.labelEventOnIE()
    },
    setCache: function() {
        BaseForm.variables.form = $("#formBuscaVagas");
        BaseForm.variables.localityField = $("#cidade");
        BaseForm.variables.salaryToMatch = $(".faixaCombinar");
        BaseForm.variables.inputFields = BaseForm.variables.form.find("input, select");
        BaseForm.variables.nativeCombobox = BaseForm.variables.form.find("select");
        BaseForm.variables.enterDataInputFields = BaseForm.variables.inputFields.not("[type='checkbox'], [type='submit'], [type='hidden']")
    },
    getEnterDataInputFields: function() {
        return BaseForm.variables.enterDataInputFields
    },
    getNativeCombobox: function() {
        return BaseForm.variables.nativeCombobox
    },
    getTextFields: function() {
        return BaseForm.getEnterDataInputFields().not("select")
    },
    getLocalityEntity: function() {
        return {
            search: document.getElementById("cidade").value,
            countryId: document.getElementById("countryId").value,
            stateId: document.getElementById("stateId").value,
            regionId: document.getElementById("regionId").value,
            cityId: document.getElementById("cityId").value
        }
    },
    salaryToMatch: function(b) {
        var a = $(b).find("input[type='checkbox']"),
            c = a[0].checked ? 0 : 1;
        $("#faixa_sal_id_combinar").val(c);
        if (c === 0) {
            a.removeAttr("checked")
        } else {
            a.attr("checked", "checked")
        }
    },
    liberaBlurDosInputs: function() {
        if (new Support().isIos()) {
            new PointerEvents($("body"), {
                preventDefault: false
            }).createPointerEvent("tap", function() {})
        }
    },
    salary: function() {
        $("#faixa_sal_id").on("change", function() {
            var b = this.value,
                a = $("#faixa_sal_id").parents(".labelController");
            if (b !== "" && b !== "-1") {
                a.addClass("withSalary");
                BaseForm.variables.salaryToMatch.slideDown({
                    duration: 200,
                    queue: false
                })
            } else {
                a.removeClass("withSalary");
                BaseForm.variables.salaryToMatch.slideUp({
                    duration: 200,
                    queue: false
                })
            }
        }).trigger("change")
    },
    anchorOnCombo: function() {
        BaseForm.variables.enterDataInputFields.not("select").not("#cidade").on("focus", function() {
            BaseForm.anchorOnField($(this).parent())
        })
    },
    adaptative: function() {
        if (new Support().isTouchScreen()) {
            BaseForm.anchorOnCombo()
        }
    },
    localityFieldBlur: function() {
        BaseForm.variables.localityField.on("blur", function() {
            var a = this;
            setTimeout(function() {
                BaseForm.variables.select = false
            }, 40)
        })
    },
    prepareLoading: function() {
        BaseForm.instances.loadingLocality = new LoadingSvg();
        BaseForm.instances.loadingLocality.createLoading({
            container: $("#cidade"),
            buildMethod: "before"
        })
    },
    suggestCargo: function() {
        BaseForm.instances.suggestCargo = new AutoComplete("//www.catho.com.br/profissoes/ajax-suggest-busca/", "cargoDesejado", "suggestCargo", 3, {}, "slide");
        BaseForm.instances.suggestCargo.setDataObject({
            cargo: "replaceKey"
        });
        BaseForm.instances.suggestCargo._init()
    },
    localitySuggest: function() {
        if (!$(".jobSearch").hasClass("filtroHomeResponsive")) {
            BaseForm.instances.localityComponent = new MultipleSelectionField();
            BaseForm.instances.localityComponent.init({
                id: "filtroLocalidade",
                baseElement: $("#cidade"),
                templates: {
                    selectedItens: "/js/busca-vagas-responsive/view/selectedItem.html"
                },
                callbacks: {
                    onOpen: function() {
                        BaseForm.anchorOnField(this)
                    },
                    onAddItem: function() {
                        BaseForm.anchorOnField(this)
                    },
                    onRemoveItem: function() {
                        BaseForm.variables.removeItem = true;
                        ResultadoBusca.sendForm()
                    },
                    onClear: function() {
                        var a = $("#cidade");
                        BaseForm.variables.removeItem = true;
                        BaseForm.instances.localitySuggest.abortRequest();
                        BaseForm.instances.localitySuggest.hideAutoComplete();
                        BaseForm.instances.loadingLocality.hide();
                        a.val("").attr("data-initialvalue", "");
                        BaseForm.resetLocality();
                        LabelController.resetClass(a[0]);
                        if (!this.validation.isOpen()) {
                            ResultadoBusca.sendForm()
                        }
                    },
                    onReady: function() {
                        var b = JSON.parse(document.getElementById("localidadeInicial").value);
                        if (Object.keys(b).length > 0) {
                            for (var a in b) {
                                if (b[a].length > 0) {
                                    b[a].forEach(function(c) {
                                        var d = {
                                            estadoId: "",
                                            regiaoId: "",
                                            cidadeId: ""
                                        };
                                        switch (c.type) {
                                            case "cidade":
                                                d.cidadeId = c.id;
                                                break;
                                            case "regiao":
                                                d.regiaoId = c.id;
                                                break;
                                            case "estado":
                                                d.estadoId = c.id;
                                                break;
                                            default:
                                                throw "Error: type not implemented"
                                        }
                                        BaseForm.instances.localityComponent.addSelectedItem({
                                            search: c.nome,
                                            localidade: d
                                        })
                                    })
                                }
                            }
                        }
                        $("#localidadeInicial").remove()
                    }
                }
            });
            $(window).on("resize", function() {
                BaseForm.anchorWindowByField($("input[name=cidade]"))
            })
        } else {
            $("#localidadeInicial").remove()
        }
        BaseForm.instances.localitySuggest = new AutoComplete("//www.catho.com.br/vagas/suggest-localidade/", "cidade", "suggestCidade", 3, {
            beforeSend: BaseForm.searching,
            selectedFunction: BaseForm.selectLocality,
            getResult: BaseForm.completeRequest,
            typing: BaseForm.typing,
            renderComplete: BaseForm.renderComplete,
            show: function() {
                BaseForm.anchorOnField(this)
            }
        }, "slide");
        BaseForm.instances.localitySuggest.setDataObject({
            palavra: "replaceKey"
        });
        BaseForm.instances.localitySuggest._init();
        BaseForm.variables.containerLocalitySuggest = $("#autoCompletesuggestCidade")
    },
    resetLocality: function() {
        document.getElementById("cityId").value = "";
        document.getElementById("stateId").value = "";
        document.getElementById("regionId").value = ""
    },
    setLocality: function(a, b) {
        BaseForm.resetLocality();
        switch ($(a).attr("data-type")) {
            case "estado":
                document.getElementById("stateId").value = $(a).attr("data-id");
                break;
            case "regiao":
                document.getElementById("regionId").value = $(a).attr("data-id");
                break;
            case "cidade":
                document.getElementById("cityId").value = $(a).attr("data-id");
                break;
            default:
                throw "Type not defined"
        }
        if (b) {
            document.getElementById("cidade").value = $(a).text()
        }
    },
    addSelectedItem: function() {
        var a = {};
        if (BaseForm.getLocalityEntity().regionId) {
            a.regiaoId = BaseForm.getLocalityEntity().regionId
        } else {
            if (BaseForm.getLocalityEntity().stateId && !BaseForm.getLocalityEntity().regionId) {
                a.estadoId = BaseForm.getLocalityEntity().stateId
            } else {
                a.cidadeId = BaseForm.getLocalityEntity().cityId
            }
        }
        BaseForm.instances.localityComponent.addSelectedItem({
            search: BaseForm.getLocalityEntity().search,
            localidade: a
        });
        setTimeout(function() {
            BaseForm.resetLocality();
            $("#cidade").val("").attr("data-initialvalue", "");
            LabelController.applySuccess($("#cidade"));
            if (!$(".jobSearch").hasClass("filtroHomeResponsive")) {
                if (!ResultadoBusca.variables.ajaxBusca) {
                    ResultadoBusca.sendForm()
                }
            }
        }, 150)
    },
    searching: function() {
        BaseForm.variables.loading = true;
        BaseForm.instances.loadingLocality.show()
    },
    selectLocality: function() {
        BaseForm.variables.select = true;
        BaseForm.setLocality(this);
        BaseForm.addSelectedItem();
        if (new Support().isNativeAndroid()) {
            BaseForm.validation.locality.apply(document.getElementById("cidade"))
        }
    },
    selectFirstLocality: function(b) {
        if (!BaseForm.variables.loading && !BaseForm.variables.select && (BaseForm.getLocalityEntity().stateId === "" && BaseForm.getLocalityEntity().cityId === "" && BaseForm.getLocalityEntity().regionId === "") && b.value !== "" && BaseForm.variables.containerLocalitySuggest.find("li").size() !== 0) {
            var a = BaseForm.variables.containerLocalitySuggest.find("li:first");
            if (BaseForm.variables.containerLocalitySuggest.find(".active").size() > 0) {
                a = BaseForm.variables.containerLocalitySuggest.find(".active")
            }
            if (!BaseForm.variables.removeItem) {
                BaseForm.setLocality(a, true);
                BaseForm.instances.localitySuggest.setValue(a.text());
                BaseForm.addSelectedItem()
            }
        }
    },
    renderComplete: function() {
        BaseForm.instances.localityComponent.removeSelectedItensFromSuggest(this)
    },
    completeRequest: function() {
        BaseForm.variables.loading = false;
        BaseForm.instances.loadingLocality.hide();
        if ($(":focus").attr("id") !== "cidade") {
            var a = BaseForm.variables.containerLocalitySuggest.find("li:first");
            if (a.size() > 0) {
                BaseForm.instances.localitySuggest.setValue(a.text());
                if (BaseForm.variables.waitingSuggestToSubmit) {
                    BaseForm.setLocality(a);
                    if (!BaseForm.variables.removeItem) {
                        BaseForm.addSelectedItem()
                    }
                    BaseForm.variables.waitingSuggestToSubmit = false;
                    BaseForm.variables.form.trigger("submit")
                }
            }
            $("#cidade").trigger("blur")
        }
    },
    typing: function() {
        BaseForm.setLocality("", "")
    },
    anchorOnField: function(a) {
        if (!new Support().isTouchScreen()) {
            return false
        }
        setTimeout(function() {
            AnimateScroll.anchor(a.offset().top - 5 - 15, 250)
        }, 300)
    },
    anchorWindowByField: function(d) {
        if ((new Support()).isTouchScreen()) {
            return false
        }
        var c = d.offset().top,
            b = $(document).scrollTop(),
            a = d.height(),
            f = $(window).height(),
            e = 10;
        if (c + a + e <= f + b) {
            return false
        }
        AnimateScroll.anchor(b + (c + a - f - b) + e, 400)
    },
    notFoundLocalities: function() {
        return $(".autoCompleteList").children().length === 0
    },
    labelEventOnIE: function() {
        var a = new BrowserCatho();
        if (a.getBrowser() === "msie") {
            var b = $(".multipleSelect");
            b.find(".label").click(function() {
                b.find("input[type=text]").focus()
            })
        }
    }
};
this.JobSearchForm = function() {
    var a = this,
        b;
    this.validateSearchTerm = function(c) {
        if (typeof c !== "string") {
            throw "TypeError: stringBusca must be a String"
        }
        return c !== ""
    };
    this.validateLocality = function(i) {
        if (typeof i !== "object") {
            throw "TypeError: localityEntity must be a JSON Object"
        }
        var f = b(i.countryId),
            c = b(i.stateId),
            l = b(i.regionId),
            g = b(i.cityId),
            e = i.search,
            h = false;
        var m = c && !g && !l,
            d = g && !c && !l,
            k = l && !g,
            j = !c && !g && !l;
        if (f) {
            if (e !== "" && (m || d || k)) {
                h = true
            } else {
                if (e === "" && j) {
                    h = true
                }
            }
        }
        return h
    };
    b = function(c) {
        return c && c !== "" && c !== 0 ? c : null
    }
};
var JobSearch = {
    variables: {},
    instances: {},
    init: function() {
        BaseForm.init();
        LabelController.init(BaseForm.getEnterDataInputFields());
        JobSearch.initFacets();
        JobSearch.salaryToMatch();
        JobSearch.searchEvent();
        JobSearch.initGeoLocalization();
        BaseForm.liberaBlurDosInputs()
    },
    initFacets: function() {
        if ("Facets" in window) {
            Facets.init()
        }
    },
    initGeoLocalization: function() {
        if (typeof GeoLocalizacao == "object") {
            var d = GeoLocalizacao.resultado.regiaoId,
                f = $("[data-localizacao-campo='estado']").attr("data-localizacao-valor"),
                c = GeoLocalizacao.resultado.estadoId,
                b = $("[data-localizacao-campo='regiao']").attr("data-localizacao-valor"),
                a = GeoLocalizacao.estadosRegiao,
                e = GeoLocalizacao.resultado.pais;
            if (c && c.match(a)) {
                $(".filtroLocalidade").addClass("hasContent success");
                $("#regionId").attr("value", d);
                $("#stateId").attr("value", c);
                $("#cidade").attr("value", b)
            } else {
                if (e && c > 0) {
                    $(".filtroLocalidade").addClass("hasContent success");
                    $("#stateId").attr("value", c);
                    $("#cidade").attr("value", f).attr("class", "estado")
                }
            }
        }
    },
    salaryToMatch: function() {
        BaseForm.salary();
        Switcher.createCallback(BaseForm.variables.salaryToMatch, function() {
            BaseForm.salaryToMatch(this)
        })
    },
    searchEvent: function() {
        BaseForm.variables.form.on("submit", function(b) {
            if (JobSearch.variables.loading) {
                BaseForm.variables.waitingSuggestToSubmit = true;
                return false
            }
            var a = BaseForm.getLocalityEntity();
            if (!new JobSearchForm().validateLocality(a)) {
                b.preventDefault()
            }
            return true
        });
        BaseForm.localityFieldBlur()
    },
    getLocalityEntity: function() {
        return {
            localitySearch: document.getElementById("cidade").value,
            countryId: document.getElementById("countryId").value,
            stateId: document.getElementById("stateId").value,
            regionId: document.getElementById("regionId").value,
            cityId: document.getElementById("cityId").value
        }
    }
};
$(document).on("ready", function() {
    JobSearch.init()
});
var BannerResponsive = {
    init: function() {
        BannerResponsive.initImage()
    },
    initImage: function() {
        var b = $(".animaBanner"),
            c, a;
        if (b.length > 0) {
            c = $(document).innerHeight();
            a = parseInt(b.height(), 10);
            $(window).scroll(function() {
                var d = $(this).scrollTop() / c;
                var e = Math.round(a * d * 1.2);
                if (e > -200) {
                    b.css("transform", "translateY(" + e + "px)")
                }
            })
        }
    }
};
"object" != typeof socialid && (socialid = {}), socialid.version = "1.0.2", socialid.loaded = !1, socialid.SSLEnv = !0, socialid.waitDOMReady = socialid.waitDOMReady || !0, socialid.hostUrl = "https://app.socialidnow.com", socialid.debugMode = socialid.debugMode || !1, socialid.console = "undefined" != typeof console && socialid.debugMode ? console : {
        log: function() {}
    }, String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }, String.prototype.camelize = function() {
        var a = this.split("_"),
            b = "";
        for (i = 0; i < a.length; i++) {
            b += a[i].capitalize()
        }
        return b
    }, socialid.helpers = socialid.helpers || {}, socialid.helpers.url = function() {
        function b(f) {
            return f = "undefined" != typeof f ? f : a, f ? c.replace(/^http:/, "https:") : c
        }

        function d(f, e) {
            return b(e) + f
        }
        var c = socialid.hostUrl,
            a = socialid.SSLEnv;
        socialid.console;
        return {
            host: b,
            get: d
        }
    }(), socialid.events = function() {
        function c(g) {
            return this[g] = new a(g), this[g]
        }

        function f(g, j, h) {
            g.addEventListener ? g.addEventListener(j, h, !1) : g.attachEvent && g.attachEvent("on" + j, h)
        }

        function d(g) {
            f(window, "message", g)
        }
        var b = socialid.console,
            a = function(j) {
                function m(n) {
                    return g.push(n), !0
                }

                function k(p) {
                    b.log("Events: calling handlers from " + j + " with data ", p);
                    for (var e = 0; e < g.length; e++) {
                        g[e](p)
                    }
                }

                function h() {
                    return g = []
                }

                function l() {
                    return g.length
                }
                var g = [],
                    j = j;
                return {
                    addHandler: m,
                    callHandlers: k,
                    clearHandlers: h,
                    size: l
                }
            };
        return {
            register: c,
            addMessageListener: d
        }
    }(), socialid.translations = {
        en: {
            login_facebook: "Login with Facebook",
            login_twitter: "Login with Twitter",
            login_linkedin: "Login with LinkedIn",
            login_gplus: "Login with Google+",
            connect_facebook: "Connect with Facebook",
            connect_twitter: "Connect with Twitter",
            connect_linkedin: "Connect with LinkedIn",
            connect_gplus: "Connect with Google+",
            disconnect_facebook: "Disconnect from Facebook",
            disconnect_twitter: "Disconnect from Twitter",
            disconnect_linkedin: "Disconnect from LinkedIn",
            disconnect_gplus: "Disconnect from Google+",
            login: "login",
            connect: "connect",
            disconnect: "disconnect",
            facebook: "Facebook",
            twitter: "Twitter",
            linkedin: "LinkedIn",
            gplus: "Google+",
            connect_facebook_account: "Connect Facebook to your account.",
            connect_twitter_account: "Connect Twitter to your account.",
            connect_linkedin_account: "Connect LinkedIn to your account.",
            connect_gplus_account: "Connect Google+ to your account.",
            disconnect_facebook_account: "Disconnect Facebook from your account.",
            disconnect_twitter_account: "Disconnect Twitter from your account.",
            disconnect_linkedin_account: "Disconnect LinkedIn from your account.",
            disconnect_gplus_account: "Disconnect Google+ from your account.",
            connect_conflict: "This credential is associated with another user. Disconnect from him first and then connect here again."
        },
        pt_br: {
            login_facebook: "Login com Facebook",
            login_twitter: "Login com Twitter",
            login_linkedin: "Login com LinkedIn",
            login_gplus: "Login com Google+",
            connect_facebook: "Conectar com Facebook",
            connect_twitter: "Conectar com Twitter",
            connect_linkedin: "Conectar com LinkedIn",
            connect_gplus: "Conectar com Google+",
            disconnect_facebook: "Desconectar do Facebook",
            disconnect_twitter: "Desconectar do Twitter",
            disconnect_linkedin: "Desconectar do LinkedIn",
            disconnect_gplus: "Desconectar do Google+",
            login: "login",
            connect: "conectar",
            disconnect: "desconectar",
            facebook: "Facebook",
            twitter: "Twitter",
            linkedin: "LinkedIn",
            gplus: "Google+",
            connect_facebook_account: "Conecte o Facebook a sua conta.",
            connect_twitter_account: "Conecte o Twitter a sua conta.",
            connect_linkedin_account: "Conecte o LinkedIn a sua conta.",
            connect_gplus_account: "Conecte o Google+ a sua conta.",
            disconnect_facebook_account: "Desconecte o Facebook de sua conta.",
            disconnect_twitter_account: "Desconecte o Twitter de sua conta.",
            disconnect_linkedin_account: "Desconecte o LinkedIn de sua conta.",
            disconnect_gplus_account: "Desconecte o Google+ de sua conta.",
            connect_conflict: "Esta credencial est\xe1 associada a outro usu\xe1rio. Desconecte dele primeiro e depois conecte aqui novamente."
        }
    }, socialid.I18n = function(g) {
        function k() {
            var a = navigator.language || navigator.browserLanguage;
            return a.match(/en/) ? "en" : a.match(/br/i) ? "pt_br" : void 0
        }

        function h(a) {
            return socialid.translations[j][a] ? socialid.translations[j][a] : (b.log("key " + a + " not found in the translations"), a)
        }

        function f(a) {
            return socialid.translations[a] ? j = a : b.log("unsupported language."), this
        }

        function d() {
            return j
        }
        var j = g,
            b = socialid.console;
        return null == j && f(k()), {
            t: h,
            setLanguage: f,
            getlanguage: d
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.Base = function(a) {
        var c = a.i18n || new socialid.I18n,
            b = c.t;
        return {
            buildContainer: function(d) {
                var f = document.createElement("li");
                return f.id = "socialid_" + d, f
            },
            buildDisconnectIcon: function(f) {
                var g = document.createElement("div"),
                    d = document.createElement("div");
                return d.className = "status-icon", d.innerHTML = "&#10006;", g.className = "disconnect " + f + "-icon", g.title = b("disconnect_" + f + "_account"), g.appendChild(d), g
            },
            buildConnectedIcon: function(g, j) {
                var h = document.createElement("img"),
                    f = document.createElement("div"),
                    d = document.createElement("div");
                return h.src = j.picture_url, d.className = "status-icon", d.innerHTML = "&#10004;", f.className = "connected", f.appendChild(d), f.appendChild(h), f
            }
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.Loading = function(h) {
        function f(a) {
            return "socialid_" + a + "_loading"
        }

        function d(a) {
            var c = document.createElement("img");
            return c.id = f(a), c.className = "loading", c.src = b + m.loading, c
        }

        function l(a) {
            var c = document.getElementById(f(a));
            c && (c.style.display = "inline")
        }

        function g(a) {
            var c = document.getElementById(f(a));
            c && (c.style.display = "none")
        }

        function j() {
            for (var a in h) {
                h.hasOwnProperty(a) && l(h[a])
            }
        }

        function k() {
            for (var a in h) {
                h.hasOwnProperty(a) && g(h[a])
            }
        }
        var h = h,
            b = socialid.helpers.url.host(),
            m = {
                loading: "/assets/load.gif"
            };
        return {
            build: d,
            show: l,
            showAll: j,
            hideAll: k
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.Events = function(k) {
        function g() {
            socialid.login.getUserInfo(p), v.showAll()
        }

        function f(a) {
            h.log("Connect Widget: new provider connected", a), g()
        }

        function w(a) {
            h.log("Connect Widget: error", a), v.hideAll()
        }

        function j(a) {
            h.log("Connect Widget: provider disconnected", a), v.hideAll(), "success" == a.status && g()
        }

        function p(l) {
            if (h.log("Connect Widget: handle user info", l), "success" == l.status) {
                for (var u in b) {
                    if (b.hasOwnProperty(u)) {
                        var r = b[u],
                            d = l.data[r],
                            a = document.getElementById("socialid_" + r);
                        if (d) {
                            var s = x(r, d)
                        } else {
                            var s = m(r)
                        }
                        a.parentNode.replaceChild(s, a)
                    }
                }
            }
            v.hideAll()
        }

        function q() {
            socialid.events.onConnectSuccess.addHandler(f), socialid.events.onConnectCancel.addHandler(w), socialid.events.onConnectError.addHandler(w), socialid.events.onLoginSuccess.addHandler(f), socialid.events.onLoginCancel.addHandler(w), socialid.events.onLoginError.addHandler(w), g()
        }
        var b = k.providers,
            x = k.onConnect,
            m = k.onDisconnect,
            h = socialid.console,
            v = new socialid.themes.Loading(b);
        return {
            load: q,
            handleDisconnect: j
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.connect = socialid.themes.connect || {}, socialid.themes.connect.Bricks = function(k) {
        function g(d, r) {
            var l = h.buildContainer(d),
                c = document.createTextNode(b("disconnect_" + d)),
                a = document.createElement("img");
            return a.className = "picture", a.src = r.picture_url, l.className = d + "-provider", l.onclick = function() {
                socialid.login.disconnect(d, v.handleDisconnect), m.show(d)
            }, l.appendChild(m.build(d)), l.appendChild(a), l.appendChild(c), l
        }

        function f(a) {
            var d = h.buildContainer(a),
                c = document.createTextNode(b("connect_" + a));
            return d.className = a + "-provider", d.onclick = function() {
                socialid.login.startConnect(a), m.show(a)
            }, d.appendChild(m.build(a)), d.appendChild(c), d
        }

        function w() {
            var c = document.createElement("div"),
                d = document.createElement("ul");
            c.className = x;
            for (var a in p) {
                p.hasOwnProperty(a) && d.appendChild(f(p[a]))
            }
            return c.appendChild(d), c
        }

        function j() {
            v.load()
        }
        var p = k.providers || [],
            q = k.i18n || new socialid.I18n,
            b = q.t,
            x = "bricks",
            m = new socialid.themes.Loading(p),
            h = new socialid.themes.Base(k),
            v = new socialid.themes.Events({
                providers: p,
                onConnect: g,
                onDisconnect: f
            });
        return {
            build: w,
            load: j
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.connect = socialid.themes.connect || {}, socialid.themes.connect.Icons = function(k) {
        function g(c, l) {
            var d = h.buildContainer(c),
                a = document.createElement("div");
            return a.className = "icon " + c + "-provider", d.onclick = function() {
                socialid.login.disconnect(c, v.handleDisconnect), m.show(c)
            }, a.appendChild(m.build(c)), a.appendChild(h.buildDisconnectIcon(c)), a.appendChild(h.buildConnectedIcon(c, l)), d.appendChild(a), d
        }

        function f(a) {
            var d = h.buildContainer(a),
                c = document.createElement("div");
            return c.className = "icon " + a + "-icon", c.title = b("connect_" + a + "_account"), d.onclick = function() {
                socialid.login.startConnect(a), m.show(a)
            }, c.appendChild(m.build(a)), d.appendChild(c), d
        }

        function w() {
            var c = document.createElement("div"),
                d = document.createElement("ul");
            c.className = x;
            for (var a in p) {
                p.hasOwnProperty(a) && d.appendChild(f(p[a]))
            }
            return c.appendChild(d), c
        }

        function j() {
            v.load()
        }
        var p = k.providers || [],
            q = k.i18n || new socialid.I18n,
            b = q.t,
            x = (socialid.console, "icons"),
            m = new socialid.themes.Loading(p),
            h = new socialid.themes.Base(k),
            v = new socialid.themes.Events({
                providers: p,
                onConnect: g,
                onDisconnect: f
            });
        return {
            build: w,
            load: j
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.connect = socialid.themes.connect || {}, socialid.themes.connect.LabeledIcons = function(m) {
        function h(u, C, A) {
            var p = document.createElement("div"),
                l = document.createElement("div"),
                B = document.createTextNode(z(u)),
                d = document.createElement("a"),
                s = document.createTextNode(C);
            return p.className = "label", d.href = "javascript:void(0);", d.appendChild(s), d.onclick = A, l.appendChild(B), p.appendChild(l), p.appendChild(d), p
        }

        function g(p, r) {
            var n = x.buildContainer(p),
                l = function() {
                    socialid.login.disconnect(p, f.handleDisconnect), j.show(p)
                },
                s = h(p, z("disconnect"), l),
                d = document.createElement("div");
            return d.className = "icon " + p + "-provider", d.onclick = l, d.appendChild(j.build(p)), d.appendChild(x.buildDisconnectIcon(p)), d.appendChild(x.buildConnectedIcon(p, r)), n.appendChild(d), n.appendChild(s), n
        }

        function y(l) {
            var n = x.buildContainer(l),
                d = function() {
                    socialid.login.startConnect(l), j.show(l)
                },
                a = h(l, z("connect"), d),
                p = document.createElement("div");
            return p.className = "icon " + l + "-icon", p.title = z("connect_" + l + "_account"), p.onclick = d, p.appendChild(j.build(l)), n.appendChild(p), n.appendChild(a), n
        }

        function k() {
            var a = document.createElement("div"),
                d = document.createElement("ul");
            a.className = q;
            for (var c in w) {
                w.hasOwnProperty(c) && d.appendChild(y(w[c]))
            }
            return a.appendChild(d), a
        }

        function v() {
            f.load()
        }
        var w = m.providers || [],
            b = m.i18n || new socialid.I18n,
            z = (socialid.console, b.t),
            q = "labeled_icons",
            j = new socialid.themes.Loading(w),
            x = new socialid.themes.Base(m),
            f = new socialid.themes.Events({
                providers: w,
                onConnect: g,
                onDisconnect: y
            });
        return {
            build: k,
            load: v
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.login = socialid.themes.login || {}, socialid.themes.login.Bricks = function(g) {
        function k(a) {
            var l = document.createElement("li"),
                c = document.createTextNode(j("login_" + a));
            return l.className = a + "-provider", l.onclick = function() {
                socialid.login.startLogin(a)
            }, l.appendChild(c), l
        }

        function h() {
            var c = document.createElement("div"),
                l = document.createElement("ul");
            c.className = b;
            for (var a in f) {
                f.hasOwnProperty(a) && l.appendChild(k(f[a]))
            }
            return c.appendChild(l), c
        }
        var f = g.providers || [],
            d = g.i18n || new socialid.I18n,
            j = d.t,
            b = "bricks";
        return {
            build: h
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.login = socialid.themes.login || {}, socialid.themes.login.Icons = function(d) {
        function h(c) {
            var k = document.createElement("li"),
                j = document.createElement("div");
            return j.className = "icon " + c + "-icon", j.onclick = function() {
                socialid.login.startLogin(c)
            }, k.appendChild(j), k
        }

        function f() {
            var j = document.createElement("div"),
                k = document.createElement("ul");
            j.className = g;
            for (var c in b) {
                b.hasOwnProperty(c) && k.appendChild(h(b[c]))
            }
            return j.appendChild(k), j
        }
        var b = d.providers || [],
            a = d.i18n || new socialid.I18n,
            g = (a.t, "icons");
        return {
            build: f
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.login = socialid.themes.login || {}, socialid.themes.login.LabeledIcons = function(g) {
        function k(u) {
            var w = document.createElement("li"),
                v = document.createElement("div"),
                m = document.createElement("div"),
                l = document.createElement("div"),
                c = document.createTextNode(j(u)),
                q = document.createElement("a"),
                p = document.createTextNode(j("login"));
            return m.className = "label", v.className = "icon " + u + "-icon", q.href = "javascript:void(0);", v.onclick = q.onclick = function() {
                socialid.login.startLogin(u)
            }, q.appendChild(p), l.appendChild(c), m.appendChild(l), m.appendChild(q), w.appendChild(v), w.appendChild(m), w
        }

        function h() {
            var c = document.createElement("div"),
                l = document.createElement("ul");
            c.className = b;
            for (var a in f) {
                f.hasOwnProperty(a) && l.appendChild(k(f[a]))
            }
            return c.appendChild(l), c
        }
        var f = g.providers || [],
            d = g.i18n || new socialid.I18n,
            j = d.t,
            b = "labeled_icons";
        return {
            build: h
        }
    }, socialid.themes = socialid.themes || {}, socialid.themes.factory = {
        getBuilder: function(b, d, c) {
            var a = socialid.themes[d][b];
            if ("function" == typeof a) {
                return new a(c)
            }
            throw "unsupported theme"
        }
    }, socialid.themes.Builder = function(h, l, j) {
        function f() {
            var a = document.createElement("div"),
                m = document.createElement("a"),
                c = document.createTextNode("Powered by Social-ID NOW");
            return a.className = "powered-by", m.href = "http://www.socialidnow.com", m.target = "_blank", m.appendChild(c), a.appendChild(m), a
        }

        function d() {
            var a = b.build();
            return g && a.appendChild(f()), a
        }

        function k() {
            "function" == typeof b.load && b.load()
        }
        var b = socialid.themes.factory.getBuilder(h, l, j),
            g = j.showSocialIdLink;
        return {
            build: d,
            load: k
        }
    }, socialid.JsonP = function(h) {
        function l(a) {
            h = a
        }

        function j(m, e) {
            var c = m.search(/\?/) < 0 ? "?" : "&",
                a = h + m + c + "id=" + e;
            return a
        }

        function f() {
            return (new Date).getTime() + "_" + Math.random()
        }

        function d(p, t) {
            var m = f();
            b[m] = t;
            var r = !1,
                o = function() {
                    r || (r = !0, g.log("JSONP script loaded:", m), setTimeout(function() {
                        q.parentNode.removeChild(q), delete b[m]
                    }, 500))
                },
                q = document.createElement("script");
            q.type = "text/javascript", q.async = !0, q.src = j(p, m), q.onload = o, q.onreadystatechange = function() {
                "loaded" == this.readyState && o()
            };
            var a = document.getElementsByTagName("head")[0];
            a.appendChild(q)
        }

        function k(a) {
            handler = b[a.id], "function" == typeof handler && (delete a.id, handler(a))
        }
        var h = h || "",
            b = {},
            g = socialid.console;
        return {
            setBase: l,
            makeRequest: d,
            responseHandler: k
        }
    }, socialid.XdReceiver = function(b) {
        function d() {
            document.body.appendChild(a)
        }

        function c() {
            a.src = b
        }
        var a = document.createElement("iframe");
        return a.style.display = "none", d(), {
            appendBody: d,
            updateSrc: c,
            contentWindow: a.contentWindow
        }
    }, socialid.transporters = socialid.transporters || {}, socialid.transporters.Iframe = function(j) {
        function g(a) {
            if (l.log("Iframe transporter: message received from:", a.origin), a.origin == b.host()) {
                try {
                    var d = JSON.parse(a.data);
                    l.log("Iframe transporter: data received:", d), "function" == typeof q && q(d)
                } catch (c) {
                    l.log("Iframe transporter: unrecognized message received:", a.data, "Do nothing.")
                }
            }
        }

        function f(c, r, d) {
            l.log("Iframe transporter: open url", c);
            var a = new socialid.XdReceiver(k);
            a.contentWindow.open(c, r, d);
            a.updateSrc()
        }

        function p(c, r, d) {
            l.log("Iframe transporter: onLoginCompleted");
            var c = JSON.stringify(c),
                r = r || "*",
                a = window.setInterval(function() {
                    window.opener.transporter && (window.clearInterval(a), window.opener.transporter.onReceiverCompleted(c, r), "function" == typeof d && d())
                }, 100)
        }

        function h(a, c) {
            l.log("Iframe transporter: xdreceiver received message:", a);
            var c = c || "*";
            window.top && window.top.postMessage(a, c)
        }
        var l = socialid.console,
            m = socialid.events,
            b = socialid.helpers.url,
            j = j || {},
            q = j.onMessageReceived,
            k = j.xdReceiverUrl;
        return l.log("Using Iframe transporter"), "function" == typeof q && m.addMessageListener(g), {
            open: f,
            onLoginCompleted: p,
            onReceiverCompleted: h
        }
    }, socialid.transporters = socialid.transporters || {}, socialid.transporters.JSONP = function(c) {
        function f(g) {
            var h = window.setInterval(function() {
                g.closed && (b.log("JSONP transporter: window popup closed"), window.clearInterval(h), "function" == typeof a && a())
            }, 500)
        }

        function d(h, j, g) {
            b.log("JSONP transporter: open url", h);
            var k = window.open(h, j, g);
            f(k)
        }
        var b = socialid.console,
            c = c || {},
            a = c.onLoginCompleted;
        return b.log("Using JSONP transporter"), {
            open: d
        }
    }, socialid.transporters = socialid.transporters || {}, socialid.transporters.LocalStorage = function(z) {
        function k(a) {
            if (x.log("LocalStorage transporter: message received from:", a.origin), a.origin == q.host()) {
                try {
                    var d = JSON.parse(a.data);
                    x.log("LocalStorage transporter: data received:", d), "function" == typeof onLoginCompletedCallback && d.socialLoginCompleted && onLoginCompletedCallback()
                } catch (c) {
                    x.log("LocalStorage transporter: unrecognized message received:", a.data, "Do nothing.")
                }
            }
        }

        function j() {
            var a, d, c;
            C(), c = window.setInterval(function() {
                B() && (x.log("LocalStorage transporter: login has completed"), v(), window.clearInterval(c), a = JSON.stringify({
                    socialLoginCompleted: !0
                }), d = "*", w(a, d))
            }, 500)
        }

        function E(c, f, d) {
            var a = new socialid.XdReceiver(xdReceiverUrl);
            x.log("LocalStorage transporter: open url", c), window.open(c, f, d), a.updateSrc()
        }

        function w(a, c) {
            x.log("LocalStorage transporter: xdreceiver posting message to window top:", a), window.top && window.top.postMessage(a, c)
        }

        function B() {
            return A() == completedStatus
        }

        function C() {
            F(startedStatus)
        }

        function b() {
            F(completedStatus)
        }

        function F(a) {
            window.localStorage.socialLoginStatus = a
        }

        function A(a) {
            var a = window.localStorage.socialLoginStatus;
            return a
        }

        function v() {
            delete window.localStorage.socialLoginStatus
        }

        function D() {
            j()
        }

        function h(a, d, c) {
            b(), "function" == typeof c && c()
        }
        var x = socialid.console,
            y = socialid.events,
            q = socialid.helpers.url;
        return completedStatus = "completed", startedStatus = "started", z = z || {}, onLoginCompletedCallback = z.onLoginCompleted, xdReceiverUrl = z.xdReceiverUrl, x.log("Using LocalStorage transporter"), "function" == typeof onLoginCompletedCallback && y.addMessageListener(k), {
            open: E,
            onReceiverStarted: D,
            onLoginCompleted: h
        }
    }, socialid.transporters = socialid.transporters || {}, socialid.transporters.PostMessage = function(h) {
        function l(a) {
            if (d.log("PostMessage transporter: message received from:", a.origin), a.origin == b.host()) {
                try {
                    var m = JSON.parse(a.data);
                    d.log("PostMessage transporter: data received:", m), "function" == typeof g && g(m)
                } catch (c) {
                    d.log("PostMessage transporter: unrecognized message received:", a.data, "Do nothing.")
                }
            }
        }

        function j(a, m, c) {
            d.log("PostMessage transporter: open url", a), window.open(a, m, c)
        }

        function f(a, m, c) {
            var a = JSON.stringify(a),
                m = m || "*";
            window.opener && window.opener.postMessage(a, m), "function" == typeof c && c()
        }
        var d = socialid.console,
            k = socialid.events,
            b = socialid.helpers.url,
            h = h || {},
            g = h.onMessageReceived;
        return d.log("Using PostMessage transporter"), "function" == typeof g && k.addMessageListener(l), {
            open: j,
            onLoginCompleted: f
        }
    }, socialid.XdTransporter = function(h) {
        function l() {
            return navigator.userAgent.match("CriOS") && "undefined" != typeof window.localStorage ? new socialid.transporters.LocalStorage(h) : navigator.userAgent.indexOf("MSIE") < 0 && "undefined" != typeof window.postMessage ? new socialid.transporters.PostMessage(h) : new socialid.transporters.JSONP(h)
        }

        function j(a) {
            return g.hasOwnProperty(a) && "function" == typeof g[a] ? g[a] : null
        }

        function f() {
            var a = j("open") || nothing;
            return a.apply(this, arguments)
        }

        function d(m, o, c) {
            var a = j("onLoginCompleted");
            return "function" == typeof a ? a.apply(this, arguments) : void c()
        }

        function k() {
            var a = j("onReceiverStarted");
            return "function" == typeof a ? a() : void 0
        }

        function b() {
            var a = j("onReceiverCompleted");
            return "function" == typeof a ? a.apply(this, arguments) : void 0
        }
        var g;
        socialid.transporters;
        return g = l(), {
            open: f,
            onLoginCompleted: d,
            onReceiverStarted: k,
            onReceiverCompleted: b
        }
    }, socialid.errors = {}, socialid.errors.required = function(a) {
        var c, b;
        for (c in a) {
            if (a.hasOwnProperty(c) && (b = a[c], void 0 == b || "" == b)) {
                throw new socialid.errors.RequiredParamError(c)
            }
        }
    }, socialid.errors.RequiredParamError = function(a) {
        this.message = "The param " + a + " is required", this.error = "RequiredParamError"
    }, socialid.facebook = function() {
        function h() {
            var a, c = "fb-root";
            return document.getElementById(c) ? !1 : (g.log("Facebook: including root element"), a = document.createElement("div"), a.id = c, document.body.appendChild(a), !0)
        }

        function l() {
            var a = "facebook-jssdk";
            return document.getElementById(a) ? !1 : (g.log("Facebook: loading SDK"), function(p, r, q) {
                var m, c = p.getElementsByTagName(r)[0];
                p.getElementById(q) || (m = p.createElement(r), m.id = q, m.src = "//connect.facebook.net/en_US/all.js", c.parentNode.insertBefore(m, c))
            }(document, "script", a), !0)
        }

        function j(a, c) {
            return window.fbAsyncInit ? !1 : (g.log("Facebook: adding fbAsyncInit"), window.fbAsyncInit = function() {
                FB.init({
                    appId: a,
                    xfbml: !0
                }), d(c)
            }, !0)
        }

        function f(a, m) {
            var c;
            "connected" === a.status ? (g.log("Facebook: connected"), c = a.authResponse.accessToken, "function" == typeof m.onConnected && m.onConnected(c)) : "not_authorized" === a.status ? (g.log("Facebook: not authorized"), "function" == typeof m.onUnauthorized && m.onUnauthorized()) : (g.log("Facebook: logged out"), "function" == typeof m.onLoggedOut && m.onLoggedOut())
        }

        function d(a) {
            g.log("Facebook: getLoginStatus"), FB.getLoginStatus(function(c) {
                f(c, a)
            })
        }

        function k(a) {
            g.log("Facebook: logout"), FB.logout(function() {
                "function" == typeof a && a()
            })
        }

        function b(a, e) {
            e = e || {}, "undefined" == typeof FB ? (h(), l(), j(a, e)) : d(e)
        }
        var g = socialid.console;
        return {
            load: b,
            logout: k
        }
    }(), socialid.login = function() {
        function ap(a) {
            for (var c = a.match(/(:[\w]*)/g), b = 0; c && b < c.length; b++) {
                a = a.replace(c[b], arguments[b + 1])
            }
            return a
        }

        function ah(a) {
            var a = ap.apply(this, arguments);
            return q.get(a)
        }

        function ag(a) {
            U.log(H[a])
        }

        function ac(a, b) {
            return x = a, b = b || {}, av = b.loginType || "event", V.setBase(ah(X.baseApi, x)), A = new socialid.XdTransporter({
                onMessageReceived: af,
                onLoginCompleted: ao,
                xdReceiverUrl: ah(X.xdReceiver, x)
            }), z = !0, !0
        }

        function al(a) {
            a.providers = a.providers || [], a.theme = a.theme || "icons", a.showSocialIdLink = a.hasOwnProperty("showSocialIdLink") ? a.showSocialIdLink : !0, a.loadCss = a.hasOwnProperty("loadCss") ? a.loadCss : !0, a.cssUrl = a.cssUrl || ah(X.css), a.loadCss && ab(a.cssUrl), a.language && j.setLanguage(a.language)
        }

        function ar(g, k) {
            if (!z) {
                return ag("init"), !1
            }
            k = k || {}, al(k);
            var d = document.getElementById(g);
            if (!d) {
                return U.log("container element " + g + " not found in your document."), !1
            }
            try {
                var h = Q.fromLogin(k),
                    b = h.build()
            } catch (f) {
                return U.log("error building widget: " + f), !1
            }
            d.appendChild(b)
        }

        function au(g, k) {
            if (!z) {
                return ag("init"), !1
            }
            k = k || {}, al(k);
            var d = document.getElementById(g);
            if (!d) {
                return U.log("container element " + g + " not found in your document."), !1
            }
            try {
                var h = Q.fromConnect(k),
                    b = h.build()
            } catch (f) {
                return U.log("error building widget: " + f), !1
            }
            d.appendChild(b), h.load()
        }

        function ae(b) {
            if (!z) {
                return ag("init"), !1
            }
            var a = ah(X.loginAuth, x, b);
            A.open(a, "connect", "width=600,height=423"), K.onLoginStart.callHandlers({
                event: "onLoginStart",
                provider: b
            })
        }

        function ad(a, c) {
            var b = document.getElementById(a);
            b.onclick = function() {
                ae(c)
            }
        }

        function aq(b) {
            if (!z) {
                return ag("init"), !1
            }
            var a = ah(X.connectAuth, x, b);
            A.open(a, "connect", "width=600,height=423"), K.onConnectStart.callHandlers({
                event: "onConnectStart",
                provider: b
            })
        }

        function aj(a, c) {
            var b = document.getElementById(a);
            b.onclick = function() {
                aq(c)
            }
        }

        function ab(a) {
            var c = document.createElement("link"),
                b = document.getElementsByTagName("script")[0];
            c.type = "text/css", c.href = a, c.rel = "stylesheet", b.parentNode.insertBefore(c, b)
        }

        function af(a) {
            "callback" == av && "onLoginSuccess" == a.event ? an(a) : a.event && K[a.event] && K[a.event].callHandlers(a)
        }

        function an(b) {
            var d = document.createElement("form"),
                c = document.createElement("input"),
                a = document.createElement("input");
            U.log("Posting to callback url:", b.callback_url), c.type = "hidden", c.name = "token", c.value = b.token, a.type = "hidden", a.name = "referrer_url", a.value = document.location, d.style.display = "none", d.method = "post", d.action = b.callback_url, d.appendChild(c), d.appendChild(a), document.body.appendChild(d), d.submit()
        }

        function ao() {
            U.log("Requesting status..."), V.makeRequest(X.api.status, function(a) {
                U.log("Status received:", a), "success" == a.status && af(a.data)
            })
        }

        function ai(a) {
            V.makeRequest(X.api.userInfo, a)
        }

        function am(c, b) {
            var a;
            G({
                provider: c
            }), a = ap(X.api.disconnect, c), V.makeRequest(a, function(d) {
                "success" == d.status ? K.onDisconnectSuccess.callHandlers({
                    event: "onDisconnectSuccess",
                    provider: c
                }) : K.onDisconnectError.callHandlers({
                    event: "onDisconnectError",
                    provider: c,
                    code: d.status
                }), "function" == typeof b && b(d)
            })
        }

        function aa(a) {
            V.makeRequest(X.api.logout, function(b) {
                "success" == b.status && K.onLogout.callHandlers(), "function" == typeof a && a(b)
            })
        }

        function Z(c, b) {
            var a;
            G({
                connectionId: c
            }), a = ap(X.api.loginConnection, c), V.makeRequest(a, b)
        }

        function W(d, c, b) {
            var a;
            G({
                userId: d,
                userToken: c
            }), a = ap(X.api.loginUserToken, d, c), V.makeRequest(a, b)
        }

        function ak(d, c, b) {
            var a;
            G({
                provider: d,
                token: c
            }), a = ap(X.api.loginCredentials, d, c), V.makeRequest(a, function(f) {
                f.data && f.data.event && af(f.data), "function" == typeof b && b(f)
            })
        }

        function Y(d, c, b) {
            var a;
            G({
                userId: d,
                userToken: c
            }), a = ap(X.api.moveTo, d, c), V.makeRequest(a, b)
        }

        function at(a, c) {
            var b;
            G({
                facebookAppId: a
            }), c = c || {}, "function" == typeof c.onConnected && (b = c.onConnected), c.onConnected = function(d) {
                ak("facebook", d, function(e) {
                    "function" == typeof b && b(d, e)
                })
            }, socialid.facebook.load(a, c)
        }

        function J(a) {
            socialid.facebook.logout(function() {
                aa(a)
            })
        }
        var av, U = socialid.console,
            K = socialid.events,
            q = socialid.helpers.url,
            G = socialid.errors.required,
            V = new socialid.JsonP,
            j = new socialid.I18n,
            x = (j.t, null),
            A = null,
            z = !1,
            X = {
                loginAuth: "/marketing/login/apps/:app_id/sign_ins/events/auths/:provider",
                connectAuth: "/marketing/login/apps/:app_id/connections/events/auths/:provider",
                xdReceiver: "/marketing/login/apps/:app_id/sign_ins/events/xd_receiver",
                css: "/assets/api/themes.css",
                baseApi: "/marketing/login/apps/:app_id/api",
                api: {
                    userInfo: "/user_info",
                    disconnect: "/disconnect/:provider",
                    logout: "/logout",
                    status: "/status",
                    moveTo: "/move_to/:user_id/:user_token",
                    loginConnection: "/login/connection/:connection_id",
                    loginUserToken: "/login/users/:user_id/token/:token",
                    loginCredentials: "/login/credentials/:provider?token=:token"
                }
            },
            H = {
                init: "You need to initialize the API. Check the init() method documentation."
            };
        K.register("onLoginSuccess"), K.register("onLoginError"), K.register("onLoginStart"), K.register("onLoginCancel"), K.register("onConnectSuccess"), K.register("onConnectError"), K.register("onConnectStart"), K.register("onConnectCancel"), K.register("onDisconnectSuccess"), K.register("onDisconnectError"), K.register("onLogout");
        var Q = function() {
            function a(d) {
                return new socialid.themes.Builder(d.theme.camelize(), d.type, {
                    providers: d.providers,
                    showSocialIdLink: d.showSocialIdLink,
                    i18n: j
                })
            }

            function c(e) {
                var d = e;
                return d.type = "login", a(d)
            }

            function b(e) {
                var d = e;
                return d.type = "connect", a(d)
            }
            return {
                fromLogin: c,
                fromConnect: b
            }
        }();
        return {
            init: ac,
            renderLoginWidget: ar,
            renderConnectWidget: au,
            startLogin: ae,
            startConnect: aq,
            startLoginClick: ad,
            startConnectClick: aj,
            getUserInfo: ai,
            disconnect: am,
            logout: aa,
            loginConnection: Z,
            loginUserToken: W,
            loginCredentials: ak,
            moveTo: Y,
            automaticFacebookLogin: at,
            logoutWithFacebook: J,
            apiHandler: V.responseHandler
        }
    }(),
    function() {
        function d() {
            var c = document.readyState;
            return a.log("> readyState: ", c), "complete" === c || "loaded" === c || !document.attachEvent && "interactive" === c ? !0 : !1
        }

        function h() {
            socialid.loaded = !0, a.log("socialid JS API loaded!"), "function" == typeof socialid.onLoad && socialid.onLoad()
        }

        function f() {
            return a.log("checking ready..."), socialid.loaded || g && !d() || h(), socialid.loaded
        }

        function b() {
            a.log("waiting DOM load..."), document.addEventListener ? (document.addEventListener("DOMContentLoaded", f, !1), window.addEventListener("load", f, !1)) : (document.attachEvent("onreadystatechange", f), window.attachEvent("onload", f))
        }
        var a = socialid.console,
            g = socialid.waitDOMReady;
        f() || b()
    }();
var Social = {
    instances: {},
    options: {},
    init: function(a) {
        Social.options = a;
        Social.coffeeBeanApiConfig();
        Social.callbackConfig();
        Social.events()
    },
    coffeeBeanApiConfig: function() {
        if (typeof window.socialid !== "object") {
            window.socialid = {}
        }
        window.socialid.login.init($("#cadastroSocial").attr("data-socialid"), {
            loginType: "event"
        })
    },
    callbackConfig: function() {
        var a = window.socialid.events;
        a.onLoginSuccess.addHandler(function(c) {
            var b = c.token;
            Social.importarDados(b)
        })
    },
    importarDados: function(a) {
        var b = "https://safe." + new Utils().getAmbientDomain() + "/get-social-info/" + a + "/";
        $.ajax({
            crossDomain: true,
            type: "GET",
            url: b,
            dataType: "jsonp"
        });
        $("#loading").fadeIn(50)
    },
    getResultado: function(a) {
        if (a.status) {
            Social.setaCookieLoginSocial(a);
            window.location = "https://seguro." + new Utils().getAmbientDomain() + "/inclusao/curriculo.php?nova_inclusao=1&tipoinclusao=" + Social.options.tipoInclusao + "&miniform=1&loginSocial=1&formData=" + Social.createUserFormData(a)
        } else {
            $("#loading").fadeOut(50)
        }
    },
    setaCookieLoginSocial: function(a) {
        if (a.dados.usrId != undefined) {
            document.cookie = "idUsuarioLoginSocial=" + a.dados.usrId + ";domain= " + new Utils().getAmbientDomain() + ";path=/"
        }
    },
    events: function() {
        var a = new PointerEvents($(Social.options.buttons.facebook), {
            preventDefault: true
        });
        a.createPointerEvent("tap", function() {
            window.socialid.login.startLogin("facebook")
        });
        var b = new PointerEvents($(Social.options.buttons.googlePlus), {
            preventDefault: true
        });
        b.createPointerEvent("tap", function() {
            window.socialid.login.startLogin("gplus")
        })
    },
    createUserFormData: function(c) {
        var d = "";
        try {
            var a = {
                usr: {
                    email: c.dados.email,
                    login: c.dados.email,
                    nome: c.dados.nome,
                    objetivo: c.dados.cargo,
                    fone_res: c.dados.telefone,
                    fone_cel: c.dados.celular,
                    estado_id: c.dados.estado,
                    cidade_id: c.dados.cidade,
                    idRemoto: c.dados.socialId.idRemoto,
                    rede: c.dados.socialId.rede,
                    usuarioIdentificado: c.usuarioIdentificado
                }
            };
            d = encodeURIComponent(btoa(JSON.stringify(a)))
        } catch (b) {
            return d
        }
        return d
    }
};
var HomeLists = (function(b) {
    var c = "lessContent";
    var e = function(f) {
        var g = f.siblings("span");
        g.removeClass("hide");
        f.addClass("hide")
    };
    var d = function() {
        var f = $(this);
        var g = f.siblings("ul");
        g.removeClass(c);
        e(f)
    };
    var a = function() {
        var g = $(this);
        var f = g.siblings("ul");
        f.addClass(c);
        e(g)
    };
    b.init = function() {
        var i = $("#viewMoreCities");
        var f = $("#viewLessCities");
        var h = $("#viewMoreUniversities");
        var g = $("#viewLessUniversities");
        i.on("click", d);
        f.on("click", a);
        h.on("click", d);
        g.on("click", a)
    };
    return b
}(HomeLists || {}));
$(function() {
    BannerResponsive.init();
    $("body").removeClass("noResponsive").addClass("responsive");
    HomeLists.init();
    Social.init({
        tipoInclusao: 820,
        buttons: {
            linkedin: "#btnLinkedin",
            facebook: "#btnFacebook",
            googlePlus: "#btnGoogle"
        }
    })
});
var GeoLocalizacao = {
    resultado: [],
    estadosRegiao: /25|13|19/,
    regioes: {
        8: "RegiÃ£o de B. Horizonte",
        10: "Vale do AÃ§o",
        13: "Grande Rio de Janeiro",
        14: "Grande SÃ£o Paulo",
        15: "Baixada Santista",
        16: "RegiÃ£o de Campinas",
        29: "Vale do ParaÃ­ba",
        30: "RegiÃ£o de Sorocaba",
        31: "Norte de Minas",
        32: "Sul de Minas",
        33: "TriÃ¢ngulo Mineiro",
        35: "RegiÃ£o de R. Preto",
        43: "Grande ABC",
        44: "RegiÃ£o de Piracicaba",
        45: "RegiÃ£o de JundiaÃ­",
        46: "RegiÃ£o de S. J. do Rio Preto",
        47: "RegiÃ£o de MacaÃ©"
    },
    init: function() {
        this.usuarioFoiLocalizado()
    },
    usuarioFoiLocalizado: function() {
        var a = $(".dadosGeoLocalizacao");
        if (a) {
            GeoLocalizacao.fechaTooltip();
            GeoLocalizacao.getDados()
        } else {
            return false
        }
    },
    getDados: function() {
        var a, c, b = $(".dadosGeoLocalizacao input");
        $.each(b, function(d, e) {
            c = $(e).attr("data-localizacao-campo");
            a = $(e).attr("data-localizacao-valor");
            GeoLocalizacao.resultado[c] = a
        });
        $(".inputLocalidade").attr("data-regiao", GeoLocalizacao.resultado.regiaoId)
    },
    fechaTooltip: function() {
        var b = $(".tooltipEstadoHome"),
            a = $(".selectEstado");
        if (b.is(":visible")) {
            b.find(".tooltipClose").click()
        }
        a.attr("data-view-tooltip", "false")
    }
};
$(document).ready(function() {
    GeoLocalizacao.init()
});

function toggleParceirosFooter() {
    $(".toggleListas").on("click", function(a) {
        a.preventDefault();
        if ($(".maisParceiros").hasClass("collapse")) {
            $(".maisParceiros").removeClass("collapse").addClass("ativo").next().children("span").html("Ver menos")
        } else {
            $(".maisParceiros").removeClass("ativo").addClass("collapse").next().children("span").html("Ver mais")
        }
        $(".maisParceiros").slideToggle(50)
    })
}
$(function() {
    toggleParceirosFooter()
});
var LoginSuspenso = {
    instance: {
        topDefault: 30,
        topDesktop: 34,
        topMobile: 34,
        breakpointMobile: 880
    },
    init: function() {
        LoginSuspenso.showHideLoginSuspenso();
        LoginSuspenso.autoHideLoginSuspenso()
    },
    isActive: function(a) {
        return a.hasClass("active")
    },
    autoHideLoginSuspenso: function() {
        $(window).bind("scroll", function() {
            var c = $("#btnLogin"),
                b = $("#loginSuspenso").offset().top,
                a = $(this).scrollTop();
            if (LoginSuspenso.isActive(c) && a > b + $("#loginSuspenso").outerHeight() + 50) {
                c.trigger("click")
            }
        })
    },
    showHideLoginSuspenso: function() {
        var a = $("#loginSuspenso"),
            b = $("#btnLogin"),
            d = $("#loginHttps"),
            c = d.attr("src");
        b.bind("click", function(e) {
            e.preventDefault();
            if (LoginSuspenso.isActive(b)) {
                b.removeClass("active");
                LoginSuspenso.animateBox(a, 0);
                LoginSuspenso.animateBox(d, 0)
            } else {
                b.addClass("active");
                LoginSuspenso.animateBox(a, 1);
                LoginSuspenso.animateBox(d, 1)
            }
        });
        $(document).bind("click", function(e) {
            if (e.target.id !== "loginSuspenso" && e.target.id !== "btnLogin") {
                if ($("#loginSuspenso").is(":visible")) {
                    b.trigger("click")
                }
            }
        })
    },
    animateBox: function(b, a) {
        LoginSuspenso.changeTopLoginOnRezise(b, a);
        LoginSuspenso.doAnimate(b, a, LoginSuspenso.getTopMenu(a))
    },
    changeTopLoginOnRezise: function(b, a) {
        $(window).resize(function() {
            b.css({
                top: LoginSuspenso.getTopMenu(a)
            })
        })
    },
    getTopMenu: function(a) {
        var b = LoginSuspenso.instance.topDefault;
        if (a === 1) {
            b = LoginSuspenso.instance.topDesktop;
            if (LoginSuspenso.isMenuTelasMenores()) {
                b = LoginSuspenso.instance.topMobile
            }
        }
        return b
    },
    doAnimate: function(b, a, c) {
        if (a === 1) {
            b.css("display", "block")
        }
        b.animate({
            opacity: a,
            top: c
        }, {
            duration: 300,
            queue: false,
            complete: function() {
                if (a === 0) {
                    b.css("display", "none")
                }
            }
        })
    },
    isMenuTelasMenores: function() {
        if (window.innerWidth > LoginSuspenso.instance.breakpointMobile) {
            return false
        }
        return true
    }
};
$("#loginSuspenso").ready(function() {
    LoginSuspenso.init()
});
$.posicionaScrollAbasTopo = function() {
    var a = $(".topBarResponsive"),
        b = 0;
    if (!a.hasClass("topoVisivel")) {
        b = a.height()
    }
    $(document).scrollTop(b)
};
$.tooltipEstadoPersonalizado = function() {
    var a = 10000;
    setTimeout(function() {
        var b = $(".selectEstado");
        if (b.attr("data-view-tooltip") === "true") {
            b.toolTipPlugin({
                arrowPosition: "up",
                align: "right",
                extraClass: "tooltipEstadoHome",
                showOnLoad: false,
                noHide: false,
                openOnClick: true,
                xOffset: 65,
                yOffset: 11,
                onShow: function() {
                    var c = $(".tooltipEstadoHome");
                    c.fadeIn(1000);
                    $.setTimer(a);
                    c.on({
                        mouseover: function() {
                            clearTimeout(timerFeedBack)
                        },
                        mouseout: function() {
                            $.setTimer(a)
                        }
                    })
                },
                onCompleteHide: function() {
                    var c = $('select[name="estadoPersonalizado"]');
                    setCookieHomeRegional(c.val(), 1);
                    b.attr("data-view-tooltip", "false")
                }
            })
        }
    }, 3000)
};
$.setTimer = function(a) {
    timerFeedBack = setTimeout(function() {
        $(".tooltipEstadoHome").fadeOut(1000, function() {
            $(".tooltipEstadoHome").remove()
        })
    }, a)
};
$.tooltipCloseOnSelect = function() {
    $(".estadosPersonalizadosHome, .estadosPersonalizadosMapa").on({
        focusin: function() {
            var b = $(".tooltipEstadoHome"),
                a = $(".selectEstado");
            if (b.is(":visible")) {
                b.find(".tooltipClose").click()
            }
            a.attr("data-view-tooltip", "false")
        }
    })
};
$.removeFirstOption = function() {
    var a = $(".selectEstado");
    if (a.is(":visible")) {
        if ($(".estadosPersonalizadosHome option:selected").val().length) {
            $(".estadosPersonalizadosHome option[value='']").remove()
        }
        $(".estadosPersonalizadosHome, .estadosPersonalizadosMapa").on("change", function() {
            $(".estadosPersonalizadosHome option[value='']").remove()
        })
    }
};
$(function() {
    $.posicionaScrollAbasTopo();
    $.tooltipEstadoPersonalizado();
    $.tooltipCloseOnSelect();
    $.removeFirstOption()
});
(function(a) {
    a.alertCatho = function() {
        window.alert = function(b) {
            a.prompt(b)
        };
        window.confirm = function(b, d, c) {
            a.prompt(b, {
                topBar: "AtenÃ§Ã£o!",
                buttons: d,
                callback: c
            }, "confirm")
        };
        window.success = function(b) {
            a.prompt(b, {
                topBar: "Sucesso",
                buttons: {
                    ok: true
                }
            }, "success")
        }
    };
    a.prompt = function(l, f, b) {
        if (l == undefined) {
            return
        }
        f = a.extend({}, a.prompt.defaults, f);
        a.prompt.currentPrefix = f.prefix;
        var i = (a.browser.msie && a.browser.version < 7);
        var q = a(document.body);
        var n = a(window);
        var d = '<div class="' + f.prefix + "box " + siteAtual + '" id="' + f.prefix + 'box">';
        if (f.useiframe && ((a("object, applet").length > 0) || i)) {
            d += '<iframe src="javascript:false;" style="display:block;position:absolute;z-index:-1;" class="' + f.prefix + 'fade" id="' + f.prefix + 'fade"></iframe>'
        } else {
            d += '<div class="' + f.prefix + 'fade" id="' + f.prefix + 'fade"></div>'
        }
        d += '<div class="' + f.prefix + '" id="' + f.prefix + '"><div class="topBar"><p>' + f.topBar + '</p><div class="' + f.prefix + 'close">&nbsp;</div></div><div class="' + f.prefix + 'container"><div id="' + f.prefix + 'states"></div>';
        d += "</div></div></div>";
        var e = a(d).appendTo(q);
        var g = e.children("#" + f.prefix);
        var c = e.children("#" + f.prefix + "fade");
        if (l.constructor == String) {
            l = {
                state0: {
                    html: l,
                    buttons: f.buttons,
                    focus: f.focus,
                    submit: f.submit
                }
            }
        }
        if (b == "success") {
            var j = "successAlert"
        } else {
            if (b == "confirm") {
                var j = "confirmAlert"
            } else {
                var j = "errorAlert"
            }
        }
        var h = "";
        a.each(l, function(u, t) {
            t = a.extend({}, a.prompt.defaults.state, t);
            l[u] = t;
            h += '<div id="' + f.prefix + "_state_" + u + '" class="' + f.prefix + '_state" style="display:none;"><div class="' + f.prefix + 'message"><p class="' + j + '">' + t.html + '</p></div><div class="' + f.prefix + 'buttons">';
            a.each(t.buttons, function(x, w) {
                h += '<button name="' + f.prefix + "_" + u + "_button" + x + '" id="' + f.prefix + "_" + u + "_button" + x + '" value="' + w + '" class="confirmButtonColor_' + j + "_" + x + '">' + (f.showText ? x : "") + "</button>"
            });
            h += "</div></div>"
        });
        g.find("#" + f.prefix + "states").html(h).children("." + f.prefix + "_state:first").css("display", "block");
        g.find("." + f.prefix + "buttons:empty").css("display", "none");
        a.each(l, function(v, u) {
            var t = g.find("#" + f.prefix + "_state_" + v);
            t.children("." + f.prefix + "buttons").children("button").click(function() {
                var y = t.children("." + f.prefix + "message");
                var w = u.buttons[a(this).text()];
                var z = {};
                a.each(g.find("#" + f.prefix + "states :input").serializeArray(), function(A, B) {
                    if (z[B.name] === undefined) {
                        z[B.name] = B.value
                    } else {
                        if (typeof z[B.name] == Array) {
                            z[B.name].push(B.value)
                        } else {
                            z[B.name] = [z[B.name], B.value]
                        }
                    }
                });
                var x = u.submit(w, y, z);
                if (x === undefined || x) {
                    k(true, w, y, z)
                }
            });
            t.find("." + f.prefix + "buttons button:eq(" + u.focus + ")").addClass(f.prefix + "defaultbutton")
        });
        var m = function() {
            e.css({
                top: n.scrollTop()
            })
        };
        var s = function() {
            if (f.persistent) {
                var u = 0;
                e.addClass(f.prefix + "warning");
                var t = setInterval(function() {
                    e.toggleClass(f.prefix + "warning");
                    if (u++ > 1) {
                        clearInterval(t);
                        e.removeClass(f.prefix + "warning")
                    }
                }, 100)
            } else {
                k()
            }
        };
        var r = function(w) {
            var v = (window.event) ? event.keyCode : w.keyCode;
            if (v == 27) {
                k()
            }
            if (v == 9) {
                var x = a(":input:enabled:visible", e);
                var u = !w.shiftKey && w.target == x[x.length - 1];
                var t = w.shiftKey && w.target == x[0];
                if (u || t) {
                    setTimeout(function() {
                        if (!x) {
                            return
                        }
                        var y = x[t === true ? x.length - 1 : 0];
                        if (y) {
                            y.focus()
                        }
                    }, 10);
                    return false
                }
            }
        };
        var o = function() {
            e.css({
                position: (i) ? "absolute" : "fixed",
                height: n.height(),
                width: "100%",
                top: (i) ? n.scrollTop() : 0,
                left: 0,
                right: 0,
                bottom: 0
            });
            c.css({
                position: "absolute",
                height: n.height(),
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            });
            g.css({
                position: "absolute",
                top: f.top,
                left: "50%",
                marginLeft: ((g.outerWidth() / 2) * -1)
            })
        };
        var p = function() {
            c.css({
                zIndex: f.zIndex,
                display: "none",
                opacity: f.opacity
            });
            g.css({
                zIndex: f.zIndex + 1,
                display: "none"
            });
            e.css({
                zIndex: f.zIndex
            })
        };
        var k = function(v, u, w, t) {
            g.remove();
            if (i) {
                q.unbind("scroll", m)
            }
            n.unbind("resize", o);
            c.fadeOut(f.overlayspeed, function() {
                c.unbind("click", s);
                c.remove();
                if (v) {
                    f.callback(u, w, t)
                }
                e.unbind("keypress", r);
                e.remove()
            })
        };
        o();
        p();
        if (i) {
            n.scroll(m)
        }
        c.click(s);
        n.resize(o);
        e.bind("keydown keypress", r);
        g.find("." + f.prefix + "close").click(k);
        c.fadeIn(f.overlayspeed);
        g[f.show](f.promptspeed, f.loaded);
        setTimeout(function() {
            g.find("#" + f.prefix + "states ." + f.prefix + "_state:first ." + f.prefix + "defaultbutton").focus()
        }, 10);
        if (f.timeout > 0) {
            setTimeout(a.prompt.close, f.timeout)
        }
        return e
    };
    a.prompt.defaults = {
        prefix: "jqi",
        buttons: {
            ok: true
        },
        showText: true,
        loaded: function() {},
        submit: function() {},
        callback: function() {},
        topBar: "Erro",
        opacity: 0.6,
        zIndex: 999,
        overlayspeed: 50,
        promptspeed: 50,
        show: "fadeIn",
        focus: 0,
        useiframe: false,
        top: "25%",
        persistent: true,
        timeout: 0,
        state: {
            html: "",
            buttons: {
                ok: true
            },
            focus: 0,
            submit: function() {}
        }
    };
    a.prompt.currentPrefix = a.prompt.defaults.prefix;
    a.prompt.setDefaults = function(b) {
        a.prompt.defaults = a.extend({}, a.prompt.defaults, b)
    };
    a.prompt.setStateDefaults = function(b) {
        a.prompt.defaults.state = a.extend({}, a.prompt.defaults.state, b)
    };
    a.prompt.getStateContent = function(b) {
        return a("#" + a.prompt.currentPrefix + "_state_" + b)
    };
    a.prompt.getCurrentState = function() {
        return a("." + a.prompt.currentPrefix + "_state:visible")
    };
    a.prompt.getCurrentStateName = function() {
        var b = a.prompt.getCurrentState().attr("id");
        return b.replace(a.prompt.currentPrefix + "_state_", "")
    };
    a.prompt.goToState = function(b) {
        a("." + a.prompt.currentPrefix + "_state").slideUp("slow");
        a("#" + a.prompt.currentPrefix + "_state_" + b).slideDown("slow", function() {
            a(this).find("." + a.prompt.currentPrefix + "defaultbutton").focus()
        })
    };
    a.prompt.nextState = function() {
        var b = a("." + a.prompt.currentPrefix + "_state:visible").next();
        a("." + a.prompt.currentPrefix + "_state").slideUp("slow");
        b.slideDown("slow", function() {
            b.find("." + a.prompt.currentPrefix + "defaultbutton").focus()
        })
    };
    a.prompt.prevState = function() {
        var b = a("." + a.prompt.currentPrefix + "_state:visible").prev();
        a("." + a.prompt.currentPrefix + "_state").slideUp("slow");
        b.slideDown("slow", function() {
            b.find("." + a.prompt.currentPrefix + "defaultbutton").focus()
        })
    };
    a.prompt.close = function() {
        a("#" + a.prompt.currentPrefix + "box").fadeOut("fast", function() {
            a(this).remove()
        })
    };
    a.prompt.closeAll = function() {
        a("." + a.prompt.currentPrefix + "box").fadeOut("fast", function() {
            a(this).remove()
        })
    }
})(jQuery);
this.Cookies = function() {
    var a = this,
        b;
    this.getCookies = function() {
        var f = document.cookie.replace(/\s/g, ""),
            d = f.split(";"),
            g = {},
            e, c;
        for (c = 0; c < d.length; c = c + 1) {
            if (d[c] !== "") {
                e = d[c].split("=");
                g[e[0]] = e[1]
            }
        }
        return g
    };
    this.getCookieByName = function(d) {
        try {
            if (typeof d !== "string") {
                throw new Error("TypeError: cookie deve ser do tipo String")
            }
            return (a.getCookies()[d]) ? a.getCookies()[d] : false
        } catch (c) {
            return c
        }
    };
    this.setCookie = function(e, g, d, f) {
        d = b(d);
        var c = f != null ? ";domain=" + f : "";
        document.cookie = e + "=" + g + ";expires=" + d + ";path=/" + c
    };
    this.removeCookieByName = function(c) {
        a.setCookie(c, null, -1)
    };
    b = function(d) {
        var c = d * 60 * 1000;
        return new Date(new Date().getTime() + c).toUTCString()
    }
};

function HttpRequest(b) {
    var a = this;
    this.defaults = {
        loaderType: "fullpage",
        persistentLoader: false,
        containerElement: null,
        async: true,
        dataType: "none"
    };
    this.settings = b || {};
    this.init = function() {
        $.ajaxPrefilter("script", function(c) {
            c.cache = true
        });
        a.settings = $.extend(a.defaults, a.settings)
    };
    this.get = function(c, d, e) {
        a.request("GET", c, d, e)
    };
    this.post = function(c, d, e) {
        a.request("POST", c, d, e)
    };
    this.request = function(d, c, e, f) {
        a.init();
        $.ajax({
            url: c,
            type: d,
            data: e,
            async: a.settings.async,
            dataType: a.settings.dataType,
            beforeSend: function(h, g) {
                if (a.settings.showLoader !== false) {
                    a.showLoader()
                }
            },
            complete: function(i, j) {
                var g = i.responseText;
                try {
                    g = JSON.parse(i.responseText)
                } catch (h) {
                    try {
                        g = $.parseJSON(i.responseText)
                    } catch (h) {}
                }
                f(g, j);
                if (!a.settings.persistentLoader) {
                    a.hideLoader()
                }
            }
        })
    };
    this.showLoader = function() {
        if (a.settings.loaderType === "fullpage") {
            if (!$("#ajaxLoaderFullPage").length) {
                $("body").append("<div id='ajaxLoaderFullPage' class='ajaxLoaderFullPage'></div>")
            } else {
                $("#ajaxLoaderFullPage").show()
            }
        } else {
            if (a.settings.loaderType === "container") {
                a.settings.containerElement.append("<div class='ajaxLoaderContainer'></div>")
            }
        }
    };
    this.hideLoader = function() {
        if (a.settings.loaderType == "fullpage") {
            if ($("#ajaxLoaderFullPage").length) {
                $("#ajaxLoaderFullPage").hide()
            }
        } else {
            if (a.settings.loaderType === "container") {
                a.settings.containerElement.find(".ajaxLoaderContainer").remove()
            }
        }
    }
};
var _gaq = _gaq || [];
$.sendCatalystEvents = function(a) {
    try {
        if (s && Organizacao.isCatho()) {
            s.events = a;
            s.tl()
        }
    } catch (b) {}
};
$.sendGAEvents = function(b, c, a) {
    if (Organizacao.isCatho()) {
        _gaq.push(["_trackEvent", b, c, a])
    }
};
$.layerDescongelamento = function(a) {
    $(a).on("click", function(c) {
        c.preventDefault();
        var b;
        if (!$(this).attr("data-hasclick")) {
            b = $(this).attr("data-link") === undefined ? $(this).attr("href") : $(this).attr("data-link");
            $.colorbox({
                href: b,
                title: $(this).attr("title"),
                height: "55%",
                width: "55%"
            });
            $(this).attr("data-hasclick", true)
        }
    })
};
$(function() {
    $.layerDescongelamento(".buttonDescongelar")
});
eval(function(h, b, i, d, g, f) {
    g = function(a) {
        return (a < b ? "" : g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (i--) {
            f[g(i)] = d[i] || g(i)
        }
        d = [function(a) {
            return f[a]
        }];
        g = function() {
            return "\\w+"
        };
        i = 1
    }
    while (i--) {
        if (d[i]) {
            h = h.replace(new RegExp("\\b" + g(i) + "\\b", "g"), d[i])
        }
    }
    return h
}('(1b(a,b){1b c(b,c){1d e=b.5m.4N();if("nU"===e){1d f=b.4p,g=f.95,h;1e!b.4o||!g||f.5m.4N()!=="5h"?!1:(h=a("8Z[nT=#"+g+"]")[0],!!h&&d(h))}1e(/1W|4b|99|1L|6b/.2i(e)?!b.1s:"a"==e?b.4o||c:c)&&d(b)}1b d(b){1e!a(b).4M().9w().2t(1b(){1e a.44(1a,"8A")==="3I"||a.9i.i1.3I(1a)}).1o}a.1c=a.1c||{};if(a.1c.43)1e;a.1X(a.1c,{43:"1.8.23",2I:{nS:18,nR:8,nL:20,nI:nG,nE:91,nC:91,nB:93,nA:17,nz:46,ai:40,eM:35,aC:13,aG:27,eH:36,ny:45,aI:37,nx:93,nt:eB,ns:nr,no:nn,fI:nm,nl:nk,nj:ni,aL:34,aN:33,nh:ng,aO:39,nf:16,aP:32,en:9,9X:38,nd:91}}),a.fn.1X({7G:a.fn.8c||a.fn.1Z,hj:a.fn.2q,2q:1b(b,c){1e 2j b=="5l"?1a.1H(1b(){1d d=1a;5u(1b(){a(d).2q(),c&&c.2g(d)},b)}):1a.hj.1P(1a,29)},1Q:1b(){1d b;1e a.3e.5G&&/(6P|2L)/.2i(1a.1j("1q"))||/2Q/.2i(1a.1j("1q"))?b=1a.4M().2t(1b(){1e/(2L|2Q|4c)/.2i(a.44(1a,"1q",1))&&/(3Q|7E)/.2i(a.44(1a,"3v",1)+a.44(1a,"3v-y",1)+a.44(1a,"3v-x",1))}).eq(0):b=1a.4M().2t(1b(){1e/(3Q|7E)/.2i(a.44(1a,"3v",1)+a.44(1a,"3v-y",1)+a.44(1a,"3v-x",1))}).eq(0),/4c/.2i(1a.1j("1q"))||!b.1o?a(1u):b},2A:1b(c){if(c!==b)1e 1a.1j("2A",c);if(1a.1o){1d d=a(1a[0]),e,f;6B(d.1o&&d[0]!==1u){e=d.1j("1q");if(e==="2Q"||e==="2L"||e==="4c"){f=1x(d.1j("2A"),10);if(!6c(f)&&f!==0)1e f}d=d.2a()}}1e 0},9m:1b(){1e 1a.2d((a.9y.ef?"ef":"6E")+".1c-9m",1b(a){a.4R()})},nc:1b(){1e 1a.31(".1c-9m")}}),a("<a>").3f(1).nb||a.1H(["e8","na"],1b(c,d){1b h(b,c,d,f){1e a.1H(e,1b(){c-=5i(a.44(b,"9f"+1a,!0))||0,d&&(c-=5i(a.44(b,"9g"+1a+"e8",!0))||0),f&&(c-=5i(a.44(b,"7Y"+1a,!0))||0)}),c}1d e=d==="e8"?["e6","e5"]:["e4","e3"],f=d.4N(),g={9s:a.fn.9s,8y:a.fn.8y,3f:a.fn.3f,3o:a.fn.3o};a.fn["e0"+d]=1b(c){1e c===b?g["e0"+d].2g(1a):1a.1H(1b(){a(1a).1j(f,h(1a,c)+"3J")})},a.fn["dZ"+d]=1b(b,c){1e 2j b!="5l"?g["dZ"+d].2g(1a,b):1a.1H(1b(){a(1a).1j(f,h(1a,b,!0,c)+"3J")})}}),a.1X(a.9i[":"],{1v:a.9i.hH?a.9i.hH(1b(b){1e 1b(c){1e!!a.1v(c,b)}}):1b(b,c,d){1e!!a.1v(b,d[3])},n9:1b(b){1e c(b,!6c(a.1Z(b,"dY")))},aX:1b(b){1d d=a.1Z(b,"dY"),e=6c(d);1e(e||d>=0)&&c(b,!e)}}),a(1b(){1d b=1u.2l,c=b.aY(c=1u.b0("2b"));c.5k,a.1X(c.3a,{3W:"dU",1k:"3Q",9f:0,gc:0}),a.9y.3W=c.5k===3U,a.9y.ef="n8"in c,b.9x(c).3a.6M="7s"}),a.44||(a.44=a.1j),a.1X(a.1c,{58:{2Z:1b(b,c,d){1d e=a.1c[b].3p;1T(1d f in d)e.8T[f]=e.8T[f]||[],e.8T[f].3n([c,d[f]])},2g:1b(a,b,c){1d d=a.8T[b];if(!d||!a.1h[0].4p)1e;1T(1d e=0;e<d.1o;e++)a.1f[d[e][0]]&&d[e][1].1P(a.1h,c)}},4I:1b(a,b){1e 1u.eW?a.eW(b)&16:a!==b&&a.4I(b)},7o:1b(b,c){if(a(b).1j("3v")==="3I")1e!1;1d d=c&&c==="1g"?"2k":"2e",e=!1;1e b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},8j:1b(a,b,c){1e a>b&&a<b+c},7m:1b(b,c,d,e,f,g){1e a.1c.8j(b,d,f)&&a.1c.8j(c,e,g)}})})(2X),1b(a,b){if(a.dT){1d c=a.dT;a.dT=1b(b){1T(1d d=0,e;(e=b[d])!=1p;d++)6L{a(e).hf("2B")}6K(f){}c(b)}}2K{1d d=a.fn.2B;a.fn.2B=1b(b,c){1e 1a.1H(1b(){1e c||(!b||a.2t(b,[1a]).1o)&&a("*",1a).2Z([1a]).1H(1b(){6L{a(1a).hf("2B")}6K(b){}}),d.2g(a(1a),b,c)})}}a.1M=1b(b,c,d){1d e=b.59(".")[0],f;b=b.59(".")[1],f=e+"-"+b,d||(d=c,c=a.4m),a.9i[":"][f]=1b(c){1e!!a.1v(c,b)},a[e]=a[e]||{},a[e][b]=1b(a,b){29.1o&&1a.dS(a,b)};1d g=2o c;g.1f=a.1X(!0,{},g.1f),a[e][b].3p=a.1X(!0,g,{n7:e,3u:b,6I:a[e][b].3p.6I||b,dQ:f},d),a.1M.f7(b,a[e][b])},a.1M.f7=1b(c,d){a.fn[c]=1b(e){1d f=2j e=="3S",g=9a.3p.dP.2g(29,1),h=1a;1e e=!f&&g.1o?a.1X.1P(1p,[!0,e].4H(g)):e,f&&e.4W(0)==="6H"?h:(f?1a.1H(1b(){1d d=a.1v(1a,c),f=d&&a.4d(d[e])?d[e].1P(d,g):d;if(f!==d&&f!==b)1e h=f,!1}):1a.1H(1b(){1d b=a.1v(1a,c);b?b.5Q(e||{}).a0():a.1v(1a,c,2o d(e,1a))}),h)}},a.4m=1b(a,b){29.1o&&1a.dS(a,b)},a.4m.3p={3u:"1M",6I:"",1f:{1s:!1},dS:1b(b,c){a.1v(c,1a.3u,1a),1a.1h=a(c),1a.1f=a.1X(!0,{},1a.1f,1a.gM(),b);1d d=1a;1a.1h.2d("2B."+1a.3u,1b(){d.3b()}),1a.4T(),1a.1B("dO"),1a.a0()},gM:1b(){1e a.hr&&a.hr.6t(1a.1h[0])[1a.3u]},4T:1b(){},a0:1b(){},3b:1b(){1a.1h.31("."+1a.3u).4C(1a.3u),1a.1M().31("."+1a.3u).3O("2Y-1s").1y(1a.dQ+"-1s "+"1c-1w-1s")},1M:1b(){1e 1a.1h},5Q:1b(c,d){1d e=c;if(29.1o===0)1e a.1X({},1a.1f);if(2j c=="3S"){if(d===b)1e 1a.1f[c];e={},e[c]=d}1e 1a.dM(e),1a},dM:1b(b){1d c=1a;1e a.1H(b,1b(a,b){c.3F(a,b)}),1a},3F:1b(a,b){1e 1a.1f[a]=b,a==="1s"&&1a.1M()[b?"1t":"1y"](1a.dQ+"-1s"+" "+"1c-1w-1s").1Z("2Y-1s",b),1a},b6:1b(){1e 1a.3F("1s",!1)},b9:1b(){1e 1a.3F("1s",!0)},1B:1b(b,c,d){1d e,f,g=1a.1f[b];d=d||{},c=a.fF(c),c.3X=(b===1a.6I?b:1a.6I+b).4N(),c.2c=1a.1h[0],f=c.bg;if(f)1T(e in f)e in c||(c[e]=f[e]);1e 1a.1h.5K(c,d),!(a.4d(g)&&g.2g(1a.1h[0],c,d)===!1||c.dz())}}}(2X),1b(a,b){1d c=!1;a(1u).7w(1b(a){c=!1}),a.1M("1c.8w",{1f:{7y:":1W,5Q",77:1,9T:0},9l:1b(){1d b=1a;1a.1h.2d("6E."+1a.3u,1b(a){1e b.h7(a)}).2d("1I."+1a.3u,1b(c){if(!0===a.1v(c.2c,b.3u+".a1"))1e a.4C(c.2c,b.3u+".a1"),c.hi(),!1}),1a.n6=!1},9t:1b(){1a.1h.31("."+1a.3u),1a.ab&&a(1u).31("dy."+1a.3u,1a.ab).31("7w."+1a.3u,1a.bh)},h7:1b(b){if(c)1e;1a.74&&1a.6F(b),1a.aj=b;1d d=1a,e=b.n5==1,f=2j 1a.1f.7y=="3S"&&b.2c.5m?a(b.2c).5r(1a.1f.7y).1o:!1;if(!e||f||!1a.8m(b))1e!0;1a.bi=!1a.1f.9T,1a.bi||(1a.n4=5u(1b(){d.bi=!0},1a.1f.9T));if(1a.du(b)&&1a.dt(b)){1a.74=1a.71(b)!==!1;if(!1a.74)1e b.4R(),!0}1e!0===a.1v(b.2c,1a.3u+".a1")&&a.4C(b.2c,1a.3u+".a1"),1a.ab=1b(a){1e d.fV(a)},1a.bh=1b(a){1e d.6F(a)},a(1u).2d("dy."+1a.3u,1a.ab).2d("7w."+1a.3u,1a.bh),b.4R(),c=!0,!0},fV:1b(b){1e!a.3e.5G||1u.n3>=9||!!b.1L?1a.74?(1a.6a(b),b.4R()):(1a.du(b)&&1a.dt(b)&&(1a.74=1a.71(1a.aj,b)!==!1,1a.74?1a.6a(b):1a.6F(b)),!1a.74):1a.6F(b)},6F:1b(b){1e a(1u).31("dy."+1a.3u,1a.ab).31("7w."+1a.3u,1a.bh),1a.74&&(1a.74=!1,b.2c==1a.aj.2c&&a.1v(b.2c,1a.3u+".a1",!0),1a.6Z(b)),!1},du:1b(a){1e 1C.2F(1C.4D(1a.aj.3h-a.3h),1C.4D(1a.aj.3k-a.3k))>=1a.1f.77},dt:1b(a){1e 1a.bi},71:1b(a){},6a:1b(a){},6Z:1b(a){},8m:1b(a){1e!0}})}(2X),1b(a,b){a.1M("1c.2n",a.1c.8w,{6I:"6j",1f:{bk:!0,2P:"2a",3x:!1,dm:!1,1U:!1,4x:"3Q",9u:!1,3c:!1,3A:!1,1r:"88",87:!1,2s:!1,6X:!1,5P:!1,f6:bn,5Y:"3m",7E:!0,4z:20,4A:20,6l:!1,dk:"7A",g4:20,9S:!1,2A:!1},4T:1b(){1a.1f.1r=="88"&&!/^(?:r|a|f)/.2i(1a.1h.1j("1q"))&&(1a.1h[0].3a.1q="2L"),1a.1f.bk&&1a.1h.1t("1c-2n"),1a.1f.1s&&1a.1h.1t("1c-2n-1s"),1a.9l()},3b:1b(){if(!1a.1h.1v("2n"))1e;1e 1a.1h.4C("2n").31(".2n").1y("1c-2n 1c-2n-5Z 1c-2n-1s"),1a.9t(),1a},8m:1b(b){1d c=1a.1f;1e 1a.1r||c.1s||a(b.2c).is(".1c-1R-3A")?!1:(1a.3A=1a.gU(b),1a.3A?(c.87&&a(c.87===!0?"a5":c.87).1H(1b(){a(\'<2b 2C="1c-2n-87" 3a="dj: #n2;"></2b>\').1j({1l:1a.6k+"3J",1k:1a.5k+"3J",1q:"2Q",2s:"0.n1",2A:ah}).1j(a(1a).1n()).2P("2l")}),!0):!1)},71:1b(b){1d c=1a.1f;1e 1a.1r=1a.bp(b),1a.1r.1t("1c-2n-5Z"),1a.9z(),a.1c.2D&&(a.1c.2D.6s=1a),1a.br(),1a.3G=1a.1r.1j("1q"),1a.1Q=1a.1r.1Q(),1a.1n=1a.3B=1a.1h.1n(),1a.1n={1i:1a.1n.1i-1a.2S.1i,1g:1a.1n.1g-1a.2S.1g},a.1X(1a.1n,{1I:{1g:b.3h-1a.1n.1g,1i:b.3k-1a.1n.1i},2a:1a.9U(),2L:1a.9W()}),1a.3Y=1a.1q=1a.8M(b),1a.8s=b.3h,1a.8l=b.3k,c.9u&&1a.bs(c.9u),c.1U&&1a.bu(),1a.1B("3D",b)===!1?(1a.7F(),!1):(1a.9z(),a.1c.2D&&!c.8W&&a.1c.2D.7r(1a,b),1a.6a(b,!0),a.1c.2D&&a.1c.2D.d7(1a,b),!0)},6a:1b(b,c){1a.1q=1a.8M(b),1a.3B=1a.5o("2Q");if(!c){1d d=1a.3q();if(1a.1B("6j",b,d)===!1)1e 1a.6F({}),!1;1a.1q=d.1q}if(!1a.1f.3x||1a.1f.3x!="y")1a.1r[0].3a.1g=1a.1q.1g+"3J";if(!1a.1f.3x||1a.1f.3x!="x")1a.1r[0].3a.1i=1a.1q.1i+"3J";1e a.1c.2D&&a.1c.2D.6j(1a,b),!1},6Z:1b(b){1d c=!1;a.1c.2D&&!1a.1f.8W&&(c=a.1c.2D.9c(1a,b)),1a.9C&&(c=1a.9C,1a.9C=!1);1d d=1a.1h[0],e=!1;6B(d&&(d=d.4p))d==1u&&(e=!0);if(!e&&1a.1f.1r==="88")1e!1;if(1a.1f.5P=="n0"&&!c||1a.1f.5P=="mZ"&&c||1a.1f.5P===!0||a.4d(1a.1f.5P)&&1a.1f.5P.2g(1a.1h,c)){1d f=1a;a(1a.1r).1V(1a.3Y,1x(1a.1f.f6,10),1b(){f.1B("3M",b)!==!1&&f.7F()})}2K 1a.1B("3M",b)!==!1&&1a.7F();1e!1},6F:1b(b){1e 1a.1f.87===!0&&a("2b.1c-2n-87").1H(1b(){1a.4p.9x(1a)}),a.1c.2D&&a.1c.2D.d5(1a,b),a.1c.8w.3p.6F.2g(1a,b)},7y:1b(){1e 1a.1r.is(".1c-2n-5Z")?1a.6F({}):1a.7F(),1a},gU:1b(b){1d c=!1a.1f.3A||!a(1a.1f.3A,1a.1h).1o?!0:!1;1e a(1a.1f.3A,1a.1h).2v("*").9w().1H(1b(){1a==b.2c&&(c=!0)}),c},bp:1b(b){1d c=1a.1f,d=a.4d(c.1r)?a(c.1r.1P(1a.1h[0],[b])):c.1r=="86"?1a.1h.86().3O("id"):1a.1h;1e d.4M("2l").1o||d.2P(c.2P=="2a"?1a.1h[0].4p:c.2P),d[0]!=1a.1h[0]&&!/(4c|2Q)/.2i(d.1j("1q"))&&d.1j("1q","2Q"),d},bs:1b(b){2j b=="3S"&&(b=b.59(" ")),a.81(b)&&(b={1g:+b[0],1i:+b[1]||0}),"1g"in b&&(1a.1n.1I.1g=b.1g+1a.2S.1g),"2O"in b&&(1a.1n.1I.1g=1a.2U.1l-b.2O+1a.2S.1g),"1i"in b&&(1a.1n.1I.1i=b.1i+1a.2S.1i),"2V"in b&&(1a.1n.1I.1i=1a.2U.1k-b.2V+1a.2S.1i)},9U:1b(){1a.3g=1a.1r.3g();1d b=1a.3g.1n();1a.3G=="2Q"&&1a.1Q[0]!=1u&&a.1c.4I(1a.1Q[0],1a.3g[0])&&(b.1g+=1a.1Q.2k(),b.1i+=1a.1Q.2e());if(1a.3g[0]==1u.2l||1a.3g[0].5C&&1a.3g[0].5C.4N()=="4k"&&a.3e.5G)b={1i:0,1g:0};1e{1i:b.1i+(1x(1a.3g.1j("7p"),10)||0),1g:b.1g+(1x(1a.3g.1j("7n"),10)||0)}},9W:1b(){if(1a.3G=="2L"){1d a=1a.1h.1q();1e{1i:a.1i-(1x(1a.1r.1j("1i"),10)||0)+1a.1Q.2e(),1g:a.1g-(1x(1a.1r.1j("1g"),10)||0)+1a.1Q.2k()}}1e{1i:0,1g:0}},br:1b(){1a.2S={1g:1x(1a.1h.1j("7I"),10)||0,1i:1x(1a.1h.1j("7j"),10)||0,2O:1x(1a.1h.1j("8J"),10)||0,2V:1x(1a.1h.1j("8K"),10)||0}},9z:1b(){1a.2U={1l:1a.1r.3f(),1k:1a.1r.3o()}},bu:1b(){1d b=1a.1f;b.1U=="2a"&&(b.1U=1a.1r[0].4p);if(b.1U=="1u"||b.1U=="2N")1a.1U=[b.1U=="1u"?0:a(2N).2k()-1a.1n.2L.1g-1a.1n.2a.1g,b.1U=="1u"?0:a(2N).2e()-1a.1n.2L.1i-1a.1n.2a.1i,(b.1U=="1u"?0:a(2N).2k())+a(b.1U=="1u"?1u:2N).1l()-1a.2U.1l-1a.2S.1g,(b.1U=="1u"?0:a(2N).2e())+(a(b.1U=="1u"?1u:2N).1k()||1u.2l.4p.7i)-1a.2U.1k-1a.2S.1i];if(!/^(1u|2N|2a)$/.2i(b.1U)&&b.1U.6e!=9a){1d c=a(b.1U),d=c[0];if(!d)1e;1d e=c.1n(),f=a(d).1j("3v")!="3I";1a.1U=[(1x(a(d).1j("7n"),10)||0)+(1x(a(d).1j("8O"),10)||0),(1x(a(d).1j("7p"),10)||0)+(1x(a(d).1j("7J"),10)||0),(f?1C.2F(d.9I,d.6k):d.6k)-(1x(a(d).1j("7n"),10)||0)-(1x(a(d).1j("8Q"),10)||0)-1a.2U.1l-1a.2S.1g-1a.2S.2O,(f?1C.2F(d.7i,d.5k):d.5k)-(1x(a(d).1j("7p"),10)||0)-(1x(a(d).1j("7K"),10)||0)-1a.2U.1k-1a.2S.1i-1a.2S.2V],1a.d4=c}2K b.1U.6e==9a&&(1a.1U=b.1U)},5o:1b(b,c){c||(c=1a.1q);1d d=b=="2Q"?1:-1,e=1a.1f,f=1a.3G=="2Q"&&(1a.1Q[0]==1u||!a.1c.4I(1a.1Q[0],1a.3g[0]))?1a.3g:1a.1Q,g=/(4k|2l)/i.2i(f[0].5C);1e{1i:c.1i+1a.1n.2L.1i*d+1a.1n.2a.1i*d-(a.3e.6y&&a.3e.43<bv&&1a.3G=="4c"?0:(1a.3G=="4c"?-1a.1Q.2e():g?0:f.2e())*d),1g:c.1g+1a.1n.2L.1g*d+1a.1n.2a.1g*d-(a.3e.6y&&a.3e.43<bv&&1a.3G=="4c"?0:(1a.3G=="4c"?-1a.1Q.2k():g?0:f.2k())*d)}},8M:1b(b){1d c=1a.1f,d=1a.3G=="2Q"&&(1a.1Q[0]==1u||!a.1c.4I(1a.1Q[0],1a.3g[0]))?1a.3g:1a.1Q,e=/(4k|2l)/i.2i(d[0].5C),f=b.3h,g=b.3k;if(1a.3Y){1d h;if(1a.1U){if(1a.d4){1d i=1a.d4.1n();h=[1a.1U[0]+i.1g,1a.1U[1]+i.1i,1a.1U[2]+i.1g,1a.1U[3]+i.1i]}2K h=1a.1U;b.3h-1a.1n.1I.1g<h[0]&&(f=h[0]+1a.1n.1I.1g),b.3k-1a.1n.1I.1i<h[1]&&(g=h[1]+1a.1n.1I.1i),b.3h-1a.1n.1I.1g>h[2]&&(f=h[2]+1a.1n.1I.1g),b.3k-1a.1n.1I.1i>h[3]&&(g=h[3]+1a.1n.1I.1i)}if(c.3c){1d j=c.3c[1]?1a.8l+1C.5T((g-1a.8l)/c.3c[1])*c.3c[1]:1a.8l;g=h?j-1a.1n.1I.1i<h[1]||j-1a.1n.1I.1i>h[3]?j-1a.1n.1I.1i<h[1]?j+c.3c[1]:j-c.3c[1]:j:j;1d k=c.3c[0]?1a.8s+1C.5T((f-1a.8s)/c.3c[0])*c.3c[0]:1a.8s;f=h?k-1a.1n.1I.1g<h[0]||k-1a.1n.1I.1g>h[2]?k-1a.1n.1I.1g<h[0]?k+c.3c[0]:k-c.3c[0]:k:k}}1e{1i:g-1a.1n.1I.1i-1a.1n.2L.1i-1a.1n.2a.1i+(a.3e.6y&&a.3e.43<bv&&1a.3G=="4c"?0:1a.3G=="4c"?-1a.1Q.2e():e?0:d.2e()),1g:f-1a.1n.1I.1g-1a.1n.2L.1g-1a.1n.2a.1g+(a.3e.6y&&a.3e.43<bv&&1a.3G=="4c"?0:1a.3G=="4c"?-1a.1Q.2k():e?0:d.2k())}},7F:1b(){1a.1r.1y("1c-2n-5Z"),1a.1r[0]!=1a.1h[0]&&!1a.8p&&1a.1r.2B(),1a.1r=1p,1a.8p=!1},1B:1b(b,c,d){1e d=d||1a.3q(),a.1c.58.2g(1a,b,[c,d]),b=="6j"&&(1a.3B=1a.5o("2Q")),a.4m.3p.1B.2g(1a,b,c,d)},8T:{},3q:1b(a){1e{1r:1a.1r,1q:1a.1q,3Y:1a.3Y,1n:1a.3B}}}),a.1X(a.1c.2n,{43:"1.8.23"}),a.1c.58.2Z("2n","dm",{3D:1b(b,c){1d d=a(1a).1v("2n"),e=d.1f,f=a.1X({},c,{1S:d.1h});d.bw=[],a(e.dm).1H(1b(){1d c=a.1v(1a,"4B");c&&!c.1f.1s&&(d.bw.3n({2f:c,ib:c.1f.5P}),c.6X(),c.1B("4V",b,f))})},3M:1b(b,c){1d d=a(1a).1v("2n"),e=a.1X({},c,{1S:d.1h});a.1H(d.bw,1b(){1a.2f.7m?(1a.2f.7m=0,d.8p=!0,1a.2f.8p=!1,1a.ib&&(1a.2f.1f.5P=!0),1a.2f.6Z(b),1a.2f.1f.1r=1a.2f.1f.4i,d.1f.1r=="88"&&1a.2f.1N.1j({1i:"3Q",1g:"3Q"})):(1a.2f.8p=!1,1a.2f.1B("6w",b,e))})},6j:1b(b,c){1d d=a(1a).1v("2n"),e=1a,f=1b(b){1d c=1a.1n.1I.1i,d=1a.1n.1I.1g,e=1a.3B.1i,f=1a.3B.1g,g=b.1k,h=b.1l,i=b.1i,j=b.1g;1e a.1c.7m(e+c,f+d,i,j,g,h)};a.1H(d.bw,1b(f){1a.2f.3B=d.3B,1a.2f.2U=d.2U,1a.2f.1n.1I=d.1n.1I,1a.2f.d1(1a.2f.54)?(1a.2f.7m||(1a.2f.7m=1,1a.2f.1N=a(e).86().3O("id").2P(1a.2f.1h).1v("4B-1S",!0),1a.2f.1f.4i=1a.2f.1f.1r,1a.2f.1f.1r=1b(){1e c.1r[0]},b.2c=1a.2f.1N[0],1a.2f.8m(b,!0),1a.2f.71(b,!0,!0),1a.2f.1n.1I.1i=d.1n.1I.1i,1a.2f.1n.1I.1g=d.1n.1I.1g,1a.2f.1n.2a.1g-=d.1n.2a.1g-1a.2f.1n.2a.1g,1a.2f.1n.2a.1i-=d.1n.2a.1i-1a.2f.1n.2a.1i,d.1B("mY",b),d.9C=1a.2f.1h,d.1N=d.1h,1a.2f.9r=d),1a.2f.1N&&1a.2f.6a(b)):1a.2f.7m&&(1a.2f.7m=0,1a.2f.8p=!0,1a.2f.1f.5P=!1,1a.2f.1B("9E",b,1a.2f.3q(1a.2f)),1a.2f.6Z(b,!0),1a.2f.1f.1r=1a.2f.1f.4i,1a.2f.1N.2B(),1a.2f.3j&&1a.2f.3j.2B(),d.1B("mX",b),d.9C=!1)})}}),a.1c.58.2Z("2n","4x",{3D:1b(b,c){1d d=a("2l"),e=a(1a).1v("2n").1f;d.1j("4x")&&(e.cW=d.1j("4x")),d.1j("4x",e.4x)},3M:1b(b,c){1d d=a(1a).1v("2n").1f;d.cW&&a("2l").1j("4x",d.cW)}}),a.1c.58.2Z("2n","2s",{3D:1b(b,c){1d d=a(c.1r),e=a(1a).1v("2n").1f;d.1j("2s")&&(e.cV=d.1j("2s")),d.1j("2s",e.2s)},3M:1b(b,c){1d d=a(1a).1v("2n").1f;d.cV&&a(c.1r).1j("2s",d.cV)}}),a.1c.58.2Z("2n","7E",{3D:1b(b,c){1d d=a(1a).1v("2n");d.1Q[0]!=1u&&d.1Q[0].5C!="bA"&&(d.6u=d.1Q.1n())},6j:1b(b,c){1d d=a(1a).1v("2n"),e=d.1f,f=!1;if(d.1Q[0]!=1u&&d.1Q[0].5C!="bA"){if(!e.3x||e.3x!="x")d.6u.1i+d.1Q[0].5k-b.3k<e.4z?d.1Q[0].2e=f=d.1Q[0].2e+e.4A:b.3k-d.6u.1i<e.4z&&(d.1Q[0].2e=f=d.1Q[0].2e-e.4A);if(!e.3x||e.3x!="y")d.6u.1g+d.1Q[0].6k-b.3h<e.4z?d.1Q[0].2k=f=d.1Q[0].2k+e.4A:b.3h-d.6u.1g<e.4z&&(d.1Q[0].2k=f=d.1Q[0].2k-e.4A)}2K{if(!e.3x||e.3x!="x")b.3k-a(1u).2e()<e.4z?f=a(1u).2e(a(1u).2e()-e.4A):a(2N).1k()-(b.3k-a(1u).2e())<e.4z&&(f=a(1u).2e(a(1u).2e()+e.4A));if(!e.3x||e.3x!="y")b.3h-a(1u).2k()<e.4z?f=a(1u).2k(a(1u).2k()-e.4A):a(2N).1l()-(b.3h-a(1u).2k())<e.4z&&(f=a(1u).2k(a(1u).2k()+e.4A))}f!==!1&&a.1c.2D&&!e.8W&&a.1c.2D.7r(d,b)}}),a.1c.58.2Z("2n","6l",{3D:1b(b,c){1d d=a(1a).1v("2n"),e=d.1f;d.5L=[],a(e.6l.6e!=8C?e.6l.2T||":1v(2n)":e.6l).1H(1b(){1d b=a(1a),c=b.1n();1a!=d.1h[0]&&d.5L.3n({1S:1a,1l:b.3f(),1k:b.3o(),1i:c.1i,1g:c.1g})})},6j:1b(b,c){1d d=a(1a).1v("2n"),e=d.1f,f=e.g4,g=c.1n.1g,h=g+d.2U.1l,i=c.1n.1i,j=i+d.2U.1k;1T(1d k=d.5L.1o-1;k>=0;k--){1d l=d.5L[k].1g,m=l+d.5L[k].1l,n=d.5L[k].1i,o=n+d.5L[k].1k;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.5L[k].bC&&d.1f.6l.h3&&d.1f.6l.h3.2g(d.1h,b,a.1X(d.3q(),{h6:d.5L[k].1S})),d.5L[k].bC=!1;6o}if(e.dk!="e0"){1d p=1C.4D(n-j)<=f,q=1C.4D(o-i)<=f,r=1C.4D(l-h)<=f,s=1C.4D(m-g)<=f;p&&(c.1q.1i=d.5o("2L",{1i:n-d.2U.1k,1g:0}).1i-d.2S.1i),q&&(c.1q.1i=d.5o("2L",{1i:o,1g:0}).1i-d.2S.1i),r&&(c.1q.1g=d.5o("2L",{1i:0,1g:l-d.2U.1l}).1g-d.2S.1g),s&&(c.1q.1g=d.5o("2L",{1i:0,1g:m}).1g-d.2S.1g)}1d t=p||q||r||s;if(e.dk!="dZ"){1d p=1C.4D(n-i)<=f,q=1C.4D(o-j)<=f,r=1C.4D(l-g)<=f,s=1C.4D(m-h)<=f;p&&(c.1q.1i=d.5o("2L",{1i:n,1g:0}).1i-d.2S.1i),q&&(c.1q.1i=d.5o("2L",{1i:o-d.2U.1k,1g:0}).1i-d.2S.1i),r&&(c.1q.1g=d.5o("2L",{1i:0,1g:l}).1g-d.2S.1g),s&&(c.1q.1g=d.5o("2L",{1i:0,1g:m-d.2U.1l}).1g-d.2S.1g)}!d.5L[k].bC&&(p||q||r||s||t)&&d.1f.6l.6l&&d.1f.6l.6l.2g(d.1h,b,a.1X(d.3q(),{h6:d.5L[k].1S})),d.5L[k].bC=p||q||r||s||t}}}),a.1c.58.2Z("2n","9S",{3D:1b(b,c){1d d=a(1a).1v("2n").1f,e=a.hn(a(d.9S)).8P(1b(b,c){1e(1x(a(b).1j("2A"),10)||0)-(1x(a(c).1j("2A"),10)||0)});if(!e.1o)1e;1d f=1x(e[0].3a.2A)||0;a(e).1H(1b(a){1a.3a.2A=f+a}),1a[0].3a.2A=f+e.1o}}),a.1c.58.2Z("2n","2A",{3D:1b(b,c){1d d=a(c.1r),e=a(1a).1v("2n").1f;d.1j("2A")&&(e.cO=d.1j("2A")),d.1j("2A",e.2A)},3M:1b(b,c){1d d=a(1a).1v("2n").1f;d.cO&&a(c.1r).1j("2A",d.cO)}})}(2X),1b(a,b){a.1M("1c.5w",{6I:"9c",1f:{62:"*",8t:!1,bk:!0,cM:!1,8a:!1,5Y:"3m",65:"7X"},4T:1b(){1d b=1a.1f,c=b.62;1a.67=0,1a.7M=1,1a.62=a.4d(c)?c:1b(a){1e a.is(c)},1a.8o={1l:1a.1h[0].6k,1k:1a.1h[0].5k},a.1c.2D.7S[b.5Y]=a.1c.2D.7S[b.5Y]||[],a.1c.2D.7S[b.5Y].3n(1a),b.bk&&1a.1h.1t("1c-5w")},3b:1b(){1d b=a.1c.2D.7S[1a.1f.5Y];1T(1d c=0;c<b.1o;c++)b[c]==1a&&b.9L(c,1);1e 1a.1h.1y("1c-5w 1c-5w-1s").4C("5w").31(".5w"),1a},3F:1b(b,c){b=="62"&&(1a.62=a.4d(c)?c:1b(a){1e a.is(c)}),a.4m.3p.3F.1P(1a,29)},fb:1b(b){1d c=a.1c.2D.6s;1a.1f.8t&&1a.1h.1t(1a.1f.8t),c&&1a.1B("4V",b,1a.1c(c))},fu:1b(b){1d c=a.1c.2D.6s;1a.1f.8t&&1a.1h.1y(1a.1f.8t),c&&1a.1B("6w",b,1a.1c(c))},cL:1b(b){1d c=a.1c.2D.6s;if(!c||(c.1N||c.1h)[0]==1a.1h[0])1e;1a.62.2g(1a.1h[0],c.1N||c.1h)&&(1a.1f.8a&&1a.1h.1t(1a.1f.8a),1a.1B("5M",b,1a.1c(c)))},cK:1b(b){1d c=a.1c.2D.6s;if(!c||(c.1N||c.1h)[0]==1a.1h[0])1e;1a.62.2g(1a.1h[0],c.1N||c.1h)&&(1a.1f.8a&&1a.1h.1y(1a.1f.8a),1a.1B("9E",b,1a.1c(c)))},fO:1b(b,c){1d d=c||a.1c.2D.6s;if(!d||(d.1N||d.1h)[0]==1a.1h[0])1e!1;1d e=!1;1e 1a.1h.2v(":1v(5w)").4F(".1c-2n-5Z").1H(1b(){1d b=a.1v(1a,"5w");if(b.1f.cM&&!b.1f.1s&&b.1f.5Y==d.1f.5Y&&b.62.2g(b.1h[0],d.1N||d.1h)&&a.1c.7X(d,a.1X(b,{1n:b.1h.1n()}),b.1f.65))1e e=!0,!1}),e?!1:1a.62.2g(1a.1h[0],d.1N||d.1h)?(1a.1f.8t&&1a.1h.1y(1a.1f.8t),1a.1f.8a&&1a.1h.1y(1a.1f.8a),1a.1B("9c",b,1a.1c(d)),1a.1h):!1},1c:1b(a){1e{2n:a.1N||a.1h,1r:a.1r,1q:a.1q,1n:a.3B}}}),a.1X(a.1c.5w,{43:"1.8.23"}),a.1c.7X=1b(b,c,d){if(!c.1n)1e!1;1d e=(b.3B||b.1q.2Q).1g,f=e+b.2U.1l,g=(b.3B||b.1q.2Q).1i,h=g+b.2U.1k,i=c.1n.1g,j=i+c.8o.1l,k=c.1n.1i,l=k+c.8o.1k;5g(d){1z"bE":1e i<=e&&f<=j&&k<=g&&h<=l;1z"7X":1e i<e+b.2U.1l/2&&f-b.2U.1l/2<j&&k<g+b.2U.1k/2&&h-b.2U.1k/2<l;1z"aq":1d m=(b.3B||b.1q.2Q).1g+(b.g5||b.1n.1I).1g,n=(b.3B||b.1q.2Q).1i+(b.g5||b.1n.1I).1i,o=a.1c.7m(n,m,k,i,c.8o.1k,c.8o.1l);1e o;1z"cH":1e(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);3m:1e!1}},a.1c.2D={6s:1p,7S:{"3m":[]},7r:1b(b,c){1d d=a.1c.2D.7S[b.1f.5Y]||[],e=c?c.3X:1p,f=(b.1N||b.1h).2v(":1v(5w)").9w();g:1T(1d h=0;h<d.1o;h++){if(d[h].1f.1s||b&&!d[h].62.2g(d[h].1h[0],b.1N||b.1h))6o;1T(1d i=0;i<f.1o;i++)if(f[i]==d[h].1h[0]){d[h].8o.1k=0;6o g}d[h].4u=d[h].1h.1j("6M")!="7s";if(!d[h].4u)6o;e=="6E"&&d[h].fb.2g(d[h],c),d[h].1n=d[h].1h.1n(),d[h].8o={1l:d[h].1h[0].6k,1k:d[h].1h[0].5k}}},9c:1b(b,c){1d d=!1;1e a.1H(a.1c.2D.7S[b.1f.5Y]||[],1b(){if(!1a.1f)1e;!1a.1f.1s&&1a.4u&&a.1c.7X(b,1a,1a.1f.65)&&(d=1a.fO.2g(1a,c)||d),!1a.1f.1s&&1a.4u&&1a.62.2g(1a.1h[0],b.1N||b.1h)&&(1a.7M=1,1a.67=0,1a.fu.2g(1a,c))}),d},d7:1b(b,c){b.1h.4M(":4F(2l,4k)").2d("7E.5w",1b(){b.1f.6X||a.1c.2D.7r(b,c)})},6j:1b(b,c){b.1f.6X&&a.1c.2D.7r(b,c),a.1H(a.1c.2D.7S[b.1f.5Y]||[],1b(){if(1a.1f.1s||1a.gh||!1a.4u)1e;1d d=a.1c.7X(b,1a,1a.1f.65),e=!d&&1a.67==1?"7M":d&&1a.67==0?"67":1p;if(!e)1e;1d f;if(1a.1f.cM){1d g=1a.1h.4M(":1v(5w):eq(0)");g.1o&&(f=a.1v(g[0],"5w"),f.gh=e=="67"?1:0)}f&&e=="67"&&(f.67=0,f.7M=1,f.cK.2g(f,c)),1a[e]=1,1a[e=="7M"?"67":"7M"]=0,1a[e=="67"?"cL":"cK"].2g(1a,c),f&&e=="7M"&&(f.7M=0,f.67=1,f.cL.2g(f,c))})},d5:1b(b,c){b.1h.4M(":4F(2l,4k)").31("7E.5w"),b.1f.6X||a.1c.2D.7r(b,c)}}}(2X),1b(a,b){a.1M("1c.1R",a.1c.8w,{6I:"4a",1f:{5a:!1,1V:!1,gq:"mW",gE:"cG",4Q:!1,gV:!1,1U:!1,5D:!1,3c:!1,2J:"e,s,52",1r:!1,51:1p,4X:1p,3W:10,4E:10,2A:ah},4T:1b(){1d b=1a,c=1a.1f;1a.1h.1t("1c-1R"),a.1X(1a,{8F:!!c.4Q,4Q:c.4Q,4r:1a.1h,7T:[],4i:c.1r||c.5D||c.1V?c.1r||"1c-1R-1r":1p}),1a.1h[0].5m.5J(/mV|99|1W|4b|1L|8Z/i)&&(1a.1h.cD(a(\'<2b 2C="1c-bL" 3a="3v: 3I;"></2b>\').1j({1q:1a.1h.1j("1q"),1l:1a.1h.3f(),1k:1a.1h.3o(),1i:1a.1h.1j("1i"),1g:1a.1h.1j("1g")})),1a.1h=1a.1h.2a().1v("1R",1a.1h.1v("1R")),1a.cz=!0,1a.1h.1j({7I:1a.4r.1j("7I"),7j:1a.4r.1j("7j"),8J:1a.4r.1j("8J"),8K:1a.4r.1j("8K")}),1a.4r.1j({7I:0,7j:0,8J:0,8K:0}),1a.hZ=1a.4r.1j("4a"),1a.4r.1j("4a","7s"),1a.7T.3n(1a.4r.1j({1q:"6P",mU:1,6M:"bN"})),1a.4r.1j({7Y:1a.4r.1j("7Y")}),1a.9H()),1a.2J=c.2J||(a(".1c-1R-3A",1a.1h).1o?{n:".1c-1R-n",e:".1c-1R-e",s:".1c-1R-s",w:".1c-1R-w",52:".1c-1R-52",63:".1c-1R-63",ne:".1c-1R-ne",nw:".1c-1R-nw"}:"e,s,52");if(1a.2J.6e==8C){1a.2J=="2R"&&(1a.2J="n,e,s,w,52,63,ne,nw");1d d=1a.2J.59(",");1a.2J={};1T(1d e=0;e<d.1o;e++){1d f=a.f0(d[e]),g="1c-1R-"+f,h=a(\'<2b 2C="1c-1R-3A \'+g+\'"></2b>\');h.1j({2A:c.2A}),"52"==f&&h.1t("1c-3i 1c-3i-mT-fa-52"),1a.2J[f]=".1c-1R-"+f,1a.1h.4Y(h)}}1a.fj=1b(b){b=b||1a.1h;1T(1d c in 1a.2J){1a.2J[c].6e==8C&&(1a.2J[c]=a(1a.2J[c],1a.1h).1K());if(1a.cz&&1a.4r[0].5m.5J(/99|1W|4b|1L/i)){1d d=a(1a.2J[c],1a.1h),e=0;e=/63|ne|nw|52|n|s/.2i(c)?d.3o():d.3f();1d f=["9f",/ne|nw|n/.2i(c)?"e4":/52|63|s/.2i(c)?"e3":/^e$/.2i(c)?"e5":"e6"].6x("");b.1j(f,e),1a.9H()}if(!a(1a.2J[c]).1o)6o}},1a.fj(1a.1h),1a.ap=a(".1c-1R-3A",1a.1h).9m(),1a.ap.90(1b(){if(!b.6V){if(1a.96)1d a=1a.96.5J(/1c-1R-(52|63|ne|nw|n|e|s|w)/i);b.3x=a&&a[1]?a[1]:"52"}}),c.gV&&(1a.ap.1J(),a(1a.1h).1t("1c-1R-cv").3L(1b(){if(c.1s)1e;a(1a).1y("1c-1R-cv"),b.ap.1K()},1b(){if(c.1s)1e;b.6V||(a(1a).1t("1c-1R-cv"),b.ap.1J())})),1a.9l()},3b:1b(){1a.9t();1d b=1b(b){a(b).1y("1c-1R 1c-1R-1s 1c-1R-6V").4C("1R").31(".1R").2v(".1c-1R-3A").2B()};if(1a.cz){b(1a.1h);1d c=1a.1h;c.aa(1a.4r.1j({1q:c.1j("1q"),1l:c.3f(),1k:c.3o(),1i:c.1j("1i"),1g:c.1j("1g")})).2B()}1e 1a.4r.1j("4a",1a.hZ),b(1a.4r),1a},8m:1b(b){1d c=!1;1T(1d d in 1a.2J)a(1a.2J[d])[0]==b.2c&&(c=!0);1e!1a.1f.1s&&c},71:1b(b){1d d=1a.1f,e=1a.1h.1q(),f=1a.1h;1a.6V=!0,1a.mS={1i:a(1u).2e(),1g:a(1u).2k()},(f.is(".1c-2n")||/2Q/.2i(f.1j("1q")))&&f.1j({1q:"2Q",1i:e.1i,1g:e.1g}),1a.g8();1d g=c(1a.1r.1j("1g")),h=c(1a.1r.1j("1i"));d.1U&&(g+=a(d.1U).2k()||0,h+=a(d.1U).2e()||0),1a.1n=1a.1r.1n(),1a.1q={1g:g,1i:h},1a.28=1a.4i?{1l:f.3f(),1k:f.3o()}:{1l:f.1l(),1k:f.1k()},1a.5j=1a.4i?{1l:f.3f(),1k:f.3o()}:{1l:f.1l(),1k:f.1k()},1a.3Y={1g:g,1i:h},1a.6A={1l:f.3f()-f.1l(),1k:f.3o()-f.1k()},1a.gk={1g:b.3h,1i:b.3k},1a.4Q=2j d.4Q=="5l"?d.4Q:1a.5j.1l/1a.5j.1k||1;1d i=a(".1c-1R-"+1a.3x).1j("4x");1e a("2l").1j("4x",i=="3Q"?1a.3x+"-4a":i),f.1t("1c-1R-6V"),1a.af("3D",b),!0},6a:1b(b){1d c=1a.1r,d=1a.1f,e={},f=1a,g=1a.gk,h=1a.3x,i=b.3h-g.1g||0,j=b.3k-g.1i||0,k=1a.4n[h];if(!k)1e!1;1d l=k.1P(1a,[b,i,j]),m=a.3e.5G&&a.3e.43<7,n=1a.6A;1a.gr(b.8x);if(1a.8F||b.8x)l=1a.gv(l,b);1e l=1a.gw(l,b),1a.af("4a",b),c.1j({1i:1a.1q.1i+"3J",1g:1a.1q.1g+"3J",1l:1a.28.1l+"3J",1k:1a.28.1k+"3J"}),!1a.4i&&1a.7T.1o&&1a.9H(),1a.cs(l),1a.1B("4a",b,1a.1c()),!1},6Z:1b(b){1a.6V=!1;1d c=1a.1f,d=1a;if(1a.4i){1d e=1a.7T,f=e.1o&&/99/i.2i(e[0].5m),g=f&&a.1c.7o(e[0],"1g")?0:d.6A.1k,h=f?0:d.6A.1l,i={1l:d.1r.1l()-h,1k:d.1r.1k()-g},j=1x(d.1h.1j("1g"),10)+(d.1q.1g-d.3Y.1g)||1p,k=1x(d.1h.1j("1i"),10)+(d.1q.1i-d.3Y.1i)||1p;c.1V||1a.1h.1j(a.1X(i,{1i:k,1g:j})),d.1r.1k(d.28.1k),d.1r.1l(d.28.1l),1a.4i&&!c.1V&&1a.9H()}1e a("2l").1j("4x","3Q"),1a.1h.1y("1c-1R-6V"),1a.af("3M",b),1a.4i&&1a.1r.2B(),!1},gr:1b(a){1d b=1a.1f,c,e,f,g,h;h={4E:d(b.4E)?b.4E:0,4X:d(b.4X)?b.4X:gF,3W:d(b.3W)?b.3W:0,51:d(b.51)?b.51:gF};if(1a.8F||a)c=h.3W*1a.4Q,f=h.4E/1a.4Q,e=h.51*1a.4Q,g=h.4X/1a.4Q,c>h.4E&&(h.4E=c),f>h.3W&&(h.3W=f),e<h.4X&&(h.4X=e),g<h.51&&(h.51=g);1a.gI=h},cs:1b(a){1d b=1a.1f;1a.1n=1a.1r.1n(),d(a.1g)&&(1a.1q.1g=a.1g),d(a.1i)&&(1a.1q.1i=a.1i),d(a.1k)&&(1a.28.1k=a.1k),d(a.1l)&&(1a.28.1l=a.1l)},gv:1b(a,b){1d c=1a.1f,e=1a.1q,f=1a.28,g=1a.3x;1e d(a.1k)?a.1l=a.1k*1a.4Q:d(a.1l)&&(a.1k=a.1l/1a.4Q),g=="63"&&(a.1g=e.1g+(f.1l-a.1l),a.1i=1p),g=="nw"&&(a.1i=e.1i+(f.1k-a.1k),a.1g=e.1g+(f.1l-a.1l)),a},gw:1b(a,b){1d c=1a.1r,e=1a.gI,f=1a.8F||b.8x,g=1a.3x,h=d(a.1l)&&e.4X&&e.4X<a.1l,i=d(a.1k)&&e.51&&e.51<a.1k,j=d(a.1l)&&e.4E&&e.4E>a.1l,k=d(a.1k)&&e.3W&&e.3W>a.1k;j&&(a.1l=e.4E),k&&(a.1k=e.3W),h&&(a.1l=e.4X),i&&(a.1k=e.51);1d l=1a.3Y.1g+1a.5j.1l,m=1a.1q.1i+1a.28.1k,n=/63|nw|w/.2i(g),o=/nw|ne|n/.2i(g);j&&n&&(a.1g=l-e.4E),h&&n&&(a.1g=l-e.4X),k&&o&&(a.1i=m-e.3W),i&&o&&(a.1i=m-e.51);1d p=!a.1l&&!a.1k;1e p&&!a.1g&&a.1i?a.1i=1p:p&&!a.1i&&a.1g&&(a.1g=1p),a},9H:1b(){1d b=1a.1f;if(!1a.7T.1o)1e;1d c=1a.1r||1a.1h;1T(1d d=0;d<1a.7T.1o;d++){1d e=1a.7T[d];if(!1a.9n){1d f=[e.1j("7p"),e.1j("cp"),e.1j("co"),e.1j("7n")],g=[e.1j("7J"),e.1j("8Q"),e.1j("7K"),e.1j("8O")];1a.9n=a.5h(f,1b(a,b){1d c=1x(a,10)||0,d=1x(g[b],10)||0;1e c+d})}if(!a.3e.5G||!a(c).is(":3I")&&!a(c).4M(":3I").1o)e.1j({1k:c.1k()-1a.9n[0]-1a.9n[2]||0,1l:c.1l()-1a.9n[1]-1a.9n[3]||0});2K 6o}},g8:1b(){1d b=1a.1h,c=1a.1f;1a.9o=b.1n();if(1a.4i){1a.1r=1a.1r||a(\'<2b 3a="3v:3I;"></2b>\');1d d=a.3e.5G&&a.3e.43<7,e=d?1:0,f=d?2:-1;1a.1r.1t(1a.4i).1j({1l:1a.1h.3f()+f,1k:1a.1h.3o()+f,1q:"2Q",1g:1a.9o.1g-e+"3J",1i:1a.9o.1i-e+"3J",2A:++c.2A}),1a.1r.2P("2l").9m()}2K 1a.1r=1a.1h},4n:{e:1b(a,b,c){1e{1l:1a.5j.1l+b}},w:1b(a,b,c){1d d=1a.1f,e=1a.5j,f=1a.3Y;1e{1g:f.1g+b,1l:e.1l-b}},n:1b(a,b,c){1d d=1a.1f,e=1a.5j,f=1a.3Y;1e{1i:f.1i+c,1k:e.1k-c}},s:1b(a,b,c){1e{1k:1a.5j.1k+c}},52:1b(b,c,d){1e a.1X(1a.4n.s.1P(1a,29),1a.4n.e.1P(1a,[b,c,d]))},63:1b(b,c,d){1e a.1X(1a.4n.s.1P(1a,29),1a.4n.w.1P(1a,[b,c,d]))},ne:1b(b,c,d){1e a.1X(1a.4n.n.1P(1a,29),1a.4n.e.1P(1a,[b,c,d]))},nw:1b(b,c,d){1e a.1X(1a.4n.n.1P(1a,29),1a.4n.w.1P(1a,[b,c,d]))}},af:1b(b,c){a.1c.58.2g(1a,b,[c,1a.1c()]),b!="4a"&&1a.1B(b,c,1a.1c())},8T:{},1c:1b(){1e{4r:1a.4r,1h:1a.1h,1r:1a.1r,1q:1a.1q,28:1a.28,5j:1a.5j,3Y:1a.3Y}}}),a.1X(a.1c.1R,{43:"1.8.23"}),a.1c.58.2Z("1R","5a",{3D:1b(b,c){1d d=a(1a).1v("1R"),e=d.1f,f=1b(b){a(b).1H(1b(){1d b=a(1a);b.1v("1R-cm",{1l:1x(b.1l(),10),1k:1x(b.1k(),10),1g:1x(b.1j("1g"),10),1i:1x(b.1j("1i"),10)})})};2j e.5a=="6b"&&!e.5a.4p?e.5a.1o?(e.5a=e.5a[0],f(e.5a)):a.1H(e.5a,1b(a){f(a)}):f(e.5a)},4a:1b(b,c){1d d=a(1a).1v("1R"),e=d.1f,f=d.5j,g=d.3Y,h={1k:d.28.1k-f.1k||0,1l:d.28.1l-f.1l||0,1i:d.1q.1i-g.1i||0,1g:d.1q.1g-g.1g||0},i=1b(b,d){a(b).1H(1b(){1d b=a(1a),e=a(1a).1v("1R-cm"),f={},g=d&&d.1o?d:b.4M(c.4r[0]).1o?["1l","1k"]:["1l","1k","1i","1g"];a.1H(g,1b(a,b){1d c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||1p)}),b.1j(f)})};2j e.5a=="6b"&&!e.5a.cl?a.1H(e.5a,1b(a,b){i(a,b)}):i(e.5a)},3M:1b(b,c){a(1a).4C("1R-cm")}}),a.1c.58.2Z("1R","1V",{3M:1b(b,c){1d d=a(1a).1v("1R"),e=d.1f,f=d.7T,g=f.1o&&/99/i.2i(f[0].5m),h=g&&a.1c.7o(f[0],"1g")?0:d.6A.1k,i=g?0:d.6A.1l,j={1l:d.28.1l-i,1k:d.28.1k-h},k=1x(d.1h.1j("1g"),10)+(d.1q.1g-d.3Y.1g)||1p,l=1x(d.1h.1j("1i"),10)+(d.1q.1i-d.3Y.1i)||1p;d.1h.1V(a.1X(j,l&&k?{1i:l,1g:k}:{}),{2m:e.gq,2z:e.gE,8f:1b(){1d c={1l:1x(d.1h.1j("1l"),10),1k:1x(d.1h.1j("1k"),10),1i:1x(d.1h.1j("1i"),10),1g:1x(d.1h.1j("1g"),10)};f&&f.1o&&a(f[0]).1j({1l:c.1l,1k:c.1k}),d.cs(c),d.af("4a",b)}})}}),a.1c.58.2Z("1R","1U",{3D:1b(b,d){1d e=a(1a).1v("1R"),f=e.1f,g=e.1h,h=f.1U,i=h mR a?h.6t(0):/2a/.2i(h)?g.2a().6t(0):h;if(!i)1e;e.9J=a(i);if(/1u/.2i(h)||h==1u)e.9K={1g:0,1i:0},e.cg={1g:0,1i:0},e.6R={1h:a(1u),1g:0,1i:0,1l:a(1u).1l(),1k:a(1u).1k()||1u.2l.4p.7i};2K{1d j=a(i),k=[];a(["e4","e5","e6","e3"]).1H(1b(a,b){k[a]=c(j.1j("9f"+b))}),e.9K=j.1n(),e.cg=j.1q(),e.bQ={1k:j.8y()-k[3],1l:j.9s()-k[1]};1d l=e.9K,m=e.bQ.1k,n=e.bQ.1l,o=a.1c.7o(i,"1g")?i.9I:n,p=a.1c.7o(i)?i.7i:m;e.6R={1h:i,1g:l.1g,1i:l.1i,1l:o,1k:p}}},4a:1b(b,c){1d d=a(1a).1v("1R"),e=d.1f,f=d.bQ,g=d.9K,h=d.28,i=d.1q,j=d.8F||b.8x,k={1i:0,1g:0},l=d.9J;l[0]!=1u&&/6P/.2i(l.1j("1q"))&&(k=g),i.1g<(d.4i?g.1g:0)&&(d.28.1l=d.28.1l+(d.4i?d.1q.1g-g.1g:d.1q.1g-k.1g),j&&(d.28.1k=d.28.1l/d.4Q),d.1q.1g=e.1r?g.1g:0),i.1i<(d.4i?g.1i:0)&&(d.28.1k=d.28.1k+(d.4i?d.1q.1i-g.1i:d.1q.1i),j&&(d.28.1l=d.28.1k*d.4Q),d.1q.1i=d.4i?g.1i:0),d.1n.1g=d.6R.1g+d.1q.1g,d.1n.1i=d.6R.1i+d.1q.1i;1d m=1C.4D((d.4i?d.1n.1g-k.1g:d.1n.1g-k.1g)+d.6A.1l),n=1C.4D((d.4i?d.1n.1i-k.1i:d.1n.1i-g.1i)+d.6A.1k),o=d.9J.6t(0)==d.1h.2a().6t(0),p=/2L|2Q/.2i(d.9J.1j("1q"));o&&p&&(m-=d.6R.1g),m+d.28.1l>=d.6R.1l&&(d.28.1l=d.6R.1l-m,j&&(d.28.1k=d.28.1l/d.4Q)),n+d.28.1k>=d.6R.1k&&(d.28.1k=d.6R.1k-n,j&&(d.28.1l=d.28.1k*d.4Q))},3M:1b(b,c){1d d=a(1a).1v("1R"),e=d.1f,f=d.1q,g=d.9K,h=d.cg,i=d.9J,j=a(d.1r),k=j.1n(),l=j.3f()-d.6A.1l,m=j.3o()-d.6A.1k;d.4i&&!e.1V&&/2L/.2i(i.1j("1q"))&&a(1a).1j({1g:k.1g-h.1g-g.1g,1l:l,1k:m}),d.4i&&!e.1V&&/6P/.2i(i.1j("1q"))&&a(1a).1j({1g:k.1g-h.1g-g.1g,1l:l,1k:m})}}),a.1c.58.2Z("1R","5D",{3D:1b(b,c){1d d=a(1a).1v("1R"),e=d.1f,f=d.28;d.5D=d.4r.86(),d.5D.1j({2s:.25,6M:"bN",1q:"2L",1k:f.1k,1l:f.1l,7Y:0,1g:0,1i:0}).1t("1c-1R-5D").1t(2j e.5D=="3S"?e.5D:""),d.5D.2P(d.1r)},4a:1b(b,c){1d d=a(1a).1v("1R"),e=d.1f;d.5D&&d.5D.1j({1q:"2L",1k:d.28.1k,1l:d.28.1l})},3M:1b(b,c){1d d=a(1a).1v("1R"),e=d.1f;d.5D&&d.1r&&d.1r.6t(0).9x(d.5D.6t(0))}}),a.1c.58.2Z("1R","3c",{4a:1b(b,c){1d d=a(1a).1v("1R"),e=d.1f,f=d.28,g=d.5j,h=d.3Y,i=d.3x,j=e.8F||b.8x;e.3c=2j e.3c=="5l"?[e.3c,e.3c]:e.3c;1d k=1C.5T((f.1l-g.1l)/(e.3c[0]||1))*(e.3c[0]||1),l=1C.5T((f.1k-g.1k)/(e.3c[1]||1))*(e.3c[1]||1);/^(52|s|e)$/.2i(i)?(d.28.1l=g.1l+k,d.28.1k=g.1k+l):/^(ne)$/.2i(i)?(d.28.1l=g.1l+k,d.28.1k=g.1k+l,d.1q.1i=h.1i-l):/^(63)$/.2i(i)?(d.28.1l=g.1l+k,d.28.1k=g.1k+l,d.1q.1g=h.1g-k):(d.28.1l=g.1l+k,d.28.1k=g.1k+l,d.1q.1i=h.1i-l,d.1q.1g=h.1g-k)}});1d c=1b(a){1e 1x(a,10)||0},d=1b(a){1e!6c(1x(a,10))}}(2X),1b(a,b){a.1M("1c.5b",a.1c.8w,{1f:{2P:"2l",hP:!0,77:0,2t:"*",65:"cH"},4T:1b(){1d b=1a;1a.1h.1t("1c-5b"),1a.cc=!1;1d c;1a.5t=1b(){c=a(b.1f.2t,b.1h[0]),c.1t("1c-cb"),c.1H(1b(){1d b=a(1a),c=b.1n();a.1v(1a,"5b-1S",{1h:1a,$1h:b,1g:c.1g,1i:c.1i,2O:c.1g+b.3f(),2V:c.1i+b.3o(),8z:!1,1F:b.4f("1c-1F"),4q:b.4f("1c-4q"),3P:b.4f("1c-3P")})})},1a.5t(),1a.a4=c.1t("1c-cb"),1a.9l(),1a.1r=a("<2b 2C=\'1c-5b-1r\'></2b>")},3b:1b(){1e 1a.a4.1y("1c-cb").4C("5b-1S"),1a.1h.1y("1c-5b 1c-5b-1s").4C("5b").31(".5b"),1a.9t(),1a},71:1b(b){1d c=1a;1a.c9=[b.3h,b.3k];if(1a.1f.1s)1e;1d d=1a.1f;1a.a4=a(d.2t,1a.1h[0]),1a.1B("3D",b),a(d.2P).4Y(1a.1r),1a.1r.1j({1g:b.f1,1i:b.mQ,1l:0,1k:0}),d.hP&&1a.5t(),1a.a4.2t(".1c-1F").1H(1b(){1d d=a.1v(1a,"5b-1S");d.8z=!0,!b.4L&&!b.49&&(d.$1h.1y("1c-1F"),d.1F=!1,d.$1h.1t("1c-3P"),d.3P=!0,c.1B("3P",b,{3P:d.1h}))}),a(b.2c).4M().9w().1H(1b(){1d d=a.1v(1a,"5b-1S");if(d){1d e=!b.4L&&!b.49||!d.$1h.4f("1c-1F");1e d.$1h.1y(e?"1c-3P":"1c-1F").1t(e?"1c-4q":"1c-3P"),d.3P=!e,d.4q=e,d.1F=e,e?c.1B("4q",b,{4q:d.1h}):c.1B("3P",b,{3P:d.1h}),!1}})},6a:1b(b){1d c=1a;1a.cc=!0;if(1a.1f.1s)1e;1d d=1a.1f,e=1a.c9[0],f=1a.c9[1],g=b.3h,h=b.3k;if(e>g){1d i=g;g=e,e=i}if(f>h){1d i=h;h=f,f=i}1e 1a.1r.1j({1g:e,1i:f,1l:g-e,1k:h-f}),1a.a4.1H(1b(){1d i=a.1v(1a,"5b-1S");if(!i||i.1h==c.1h[0])1e;1d j=!1;d.65=="cH"?j=!(i.1g>g||i.2O<e||i.1i>h||i.2V<f):d.65=="bE"&&(j=i.1g>e&&i.2O<g&&i.1i>f&&i.2V<h),j?(i.1F&&(i.$1h.1y("1c-1F"),i.1F=!1),i.3P&&(i.$1h.1y("1c-3P"),i.3P=!1),i.4q||(i.$1h.1t("1c-4q"),i.4q=!0,c.1B("4q",b,{4q:i.1h}))):(i.4q&&((b.4L||b.49)&&i.8z?(i.$1h.1y("1c-4q"),i.4q=!1,i.$1h.1t("1c-1F"),i.1F=!0):(i.$1h.1y("1c-4q"),i.4q=!1,i.8z&&(i.$1h.1t("1c-3P"),i.3P=!0),c.1B("3P",b,{3P:i.1h}))),i.1F&&!b.4L&&!b.49&&!i.8z&&(i.$1h.1y("1c-1F"),i.1F=!1,i.$1h.1t("1c-3P"),i.3P=!0,c.1B("3P",b,{3P:i.1h})))}),!1},6Z:1b(b){1d c=1a;1a.cc=!1;1d d=1a.1f;1e a(".1c-3P",1a.1h[0]).1H(1b(){1d d=a.1v(1a,"5b-1S");d.$1h.1y("1c-3P"),d.3P=!1,d.8z=!1,c.1B("f8",b,{f8:d.1h})}),a(".1c-4q",1a.1h[0]).1H(1b(){1d d=a.1v(1a,"5b-1S");d.$1h.1y("1c-4q").1t("1c-1F"),d.4q=!1,d.1F=!0,d.8z=!0,c.1B("1F",b,{1F:d.1h})}),1a.1B("3M",b),1a.1r.2B(),!1}}),a.1X(a.1c.5b,{43:"1.8.23"})}(2X),1b(a,b){a.1M("1c.4B",a.1c.8w,{6I:"8P",c8:!1,1f:{2P:"2a",3x:!1,bT:!1,1U:!1,4x:"3Q",9u:!1,fd:!0,ff:!1,c4:!1,3c:!1,3A:!1,1r:"88",2T:"> *",2s:!1,3j:!1,5P:!1,7E:!0,4z:20,4A:20,5Y:"3m",65:"7X",2A:ah},4T:1b(){1d a=1a.1f;1a.54={},1a.1h.1t("1c-4B"),1a.5t(),1a.8e=1a.2T.1o?a.3x==="x"||/1g|2O/.2i(1a.2T[0].1S.1j("c1"))||/5y|c0-fL/.2i(1a.2T[0].1S.1j("6M")):!1,1a.1n=1a.1h.1n(),1a.9l(),1a.c8=!0},3b:1b(){a.4m.3p.3b.2g(1a),1a.1h.1y("1c-4B 1c-4B-1s"),1a.9t();1T(1d b=1a.2T.1o-1;b>=0;b--)1a.2T[b].1S.4C(1a.3u+"-1S");1e 1a},3F:1b(b,c){b==="1s"?(1a.1f[b]=c,1a.1M()[c?"1t":"1y"]("1c-4B-1s")):a.4m.3p.3F.1P(1a,29)},8m:1b(b,c){1d d=1a;if(1a.bW)1e!1;if(1a.1f.1s||1a.1f.3X=="6P")1e!1;1a.dx(b);1d e=1p,f=1a,g=a(b.2c).4M().1H(1b(){if(a.1v(1a,d.3u+"-1S")==f)1e e=a(1a),!1});a.1v(b.2c,d.3u+"-1S")==f&&(e=a(b.2c));if(!e)1e!1;if(1a.1f.3A&&!c){1d h=!1;a(1a.1f.3A,e).2v("*").9w().1H(1b(){1a==b.2c&&(h=!0)});if(!h)1e!1}1e 1a.1N=e,1a.fX(),!0},71:1b(b,c,d){1d e=1a.1f,f=1a;1a.8X=1a,1a.6X(),1a.1r=1a.bp(b),1a.9z(),1a.br(),1a.1Q=1a.1r.1Q(),1a.1n=1a.1N.1n(),1a.1n={1i:1a.1n.1i-1a.2S.1i,1g:1a.1n.1g-1a.2S.1g},a.1X(1a.1n,{1I:{1g:b.3h-1a.1n.1g,1i:b.3k-1a.1n.1i},2a:1a.9U(),2L:1a.9W()}),1a.1r.1j("1q","2Q"),1a.3G=1a.1r.1j("1q"),1a.3Y=1a.8M(b),1a.8s=b.3h,1a.8l=b.3k,e.9u&&1a.bs(e.9u),1a.8Y={4v:1a.1N.4v()[0],2a:1a.1N.2a()[0]},1a.1r[0]!=1a.1N[0]&&1a.1N.1J(),1a.g3(),e.1U&&1a.bu(),e.4x&&(a("2l").1j("4x")&&(1a.bY=a("2l").1j("4x")),a("2l").1j("4x",e.4x)),e.2s&&(1a.1r.1j("2s")&&(1a.bZ=1a.1r.1j("2s")),1a.1r.1j("2s",e.2s)),e.2A&&(1a.1r.1j("2A")&&(1a.bU=1a.1r.1j("2A")),1a.1r.1j("2A",e.2A)),1a.1Q[0]!=1u&&1a.1Q[0].5C!="bA"&&(1a.6u=1a.1Q.1n()),1a.1B("3D",b,1a.3q()),1a.mP||1a.9z();if(!d)1T(1d g=1a.2p.1o-1;g>=0;g--)1a.2p[g].1B("4V",b,f.3q(1a));1e a.1c.2D&&(a.1c.2D.6s=1a),a.1c.2D&&!e.8W&&a.1c.2D.7r(1a,b),1a.5Z=!0,1a.1r.1t("1c-4B-1r"),1a.6a(b),!0},6a:1b(b){1a.1q=1a.8M(b),1a.3B=1a.5o("2Q"),1a.9B||(1a.9B=1a.3B);if(1a.1f.7E){1d c=1a.1f,d=!1;1a.1Q[0]!=1u&&1a.1Q[0].5C!="bA"?(1a.6u.1i+1a.1Q[0].5k-b.3k<c.4z?1a.1Q[0].2e=d=1a.1Q[0].2e+c.4A:b.3k-1a.6u.1i<c.4z&&(1a.1Q[0].2e=d=1a.1Q[0].2e-c.4A),1a.6u.1g+1a.1Q[0].6k-b.3h<c.4z?1a.1Q[0].2k=d=1a.1Q[0].2k+c.4A:b.3h-1a.6u.1g<c.4z&&(1a.1Q[0].2k=d=1a.1Q[0].2k-c.4A)):(b.3k-a(1u).2e()<c.4z?d=a(1u).2e(a(1u).2e()-c.4A):a(2N).1k()-(b.3k-a(1u).2e())<c.4z&&(d=a(1u).2e(a(1u).2e()+c.4A)),b.3h-a(1u).2k()<c.4z?d=a(1u).2k(a(1u).2k()-c.4A):a(2N).1l()-(b.3h-a(1u).2k())<c.4z&&(d=a(1u).2k(a(1u).2k()+c.4A))),d!==!1&&a.1c.2D&&!c.8W&&a.1c.2D.7r(1a,b)}1a.3B=1a.5o("2Q");if(!1a.1f.3x||1a.1f.3x!="y")1a.1r[0].3a.1g=1a.1q.1g+"3J";if(!1a.1f.3x||1a.1f.3x!="x")1a.1r[0].3a.1i=1a.1q.1i+"3J";1T(1d e=1a.2T.1o-1;e>=0;e--){1d f=1a.2T[e],g=f.1S[0],h=1a.gg(f);if(!h)6o;if(g!=1a.1N[0]&&1a.3j[h==1?"3C":"4v"]()[0]!=g&&!a.1c.4I(1a.3j[0],g)&&(1a.1f.3X=="mO-mF"?!a.1c.4I(1a.1h[0],g):!0)){1a.66=h==1?"56":"5I";if(1a.1f.65=="aq"||1a.gs(f))1a.bS(b,f);2K 1O;1a.1B("64",b,1a.3q());1O}}1e 1a.gD(b),a.1c.2D&&a.1c.2D.6j(1a,b),1a.1B("8P",b,1a.3q()),1a.9B=1a.3B,!1},6Z:1b(b,c){if(!b)1e;a.1c.2D&&!1a.1f.8W&&a.1c.2D.9c(1a,b);if(1a.1f.5P){1d d=1a,e=d.3j.1n();d.bW=!0,a(1a.1r).1V({1g:e.1g-1a.1n.2a.1g-d.2S.1g+(1a.3g[0]==1u.2l?0:1a.3g[0].2k),1i:e.1i-1a.1n.2a.1i-d.2S.1i+(1a.3g[0]==1u.2l?0:1a.3g[0].2e)},1x(1a.1f.5P,10)||bn,1b(){d.7F(b)})}2K 1a.7F(b,c);1e!1},7y:1b(){1d b=1a;if(1a.5Z){1a.6F({2c:1p}),1a.1f.1r=="88"?1a.1N.1j(1a.82).1y("1c-4B-1r"):1a.1N.1K();1T(1d c=1a.2p.1o-1;c>=0;c--)1a.2p[c].1B("6w",1p,b.3q(1a)),1a.2p[c].54.5M&&(1a.2p[c].1B("9E",1p,b.3q(1a)),1a.2p[c].54.5M=0)}1e 1a.3j&&(1a.3j[0].4p&&1a.3j[0].4p.9x(1a.3j[0]),1a.1f.1r!="88"&&1a.1r&&1a.1r[0].4p&&1a.1r.2B(),a.1X(1a,{1r:1p,5Z:!1,bW:!1,ca:1p}),1a.8Y.4v?a(1a.8Y.4v).aa(1a.1N):a(1a.8Y.2a).gG(1a.1N)),1a},mE:1b(b){1d c=1a.cf(b&&b.gO),d=[];1e b=b||{},a(c).1H(1b(){1d c=(a(b.1S||1a).1Z(b.gR||"id")||"").5J(b.gS||/(.+)[-=6H](.+)/);c&&d.3n((b.9R||c[1]+"[]")+"="+(b.9R&&b.gS?c[1]:c[2]))}),!d.1o&&b.9R&&d.3n(b.9R+"="),d.6x("&")},mD:1b(b){1d c=1a.cf(b&&b.gO),d=[];1e b=b||{},c.1H(1b(){d.3n(a(b.1S||1a).1Z(b.gR||"id")||"")}),d},d1:1b(a){1d b=1a.3B.1g,c=b+1a.2U.1l,d=1a.3B.1i,e=d+1a.2U.1k,f=a.1g,g=f+a.1l,h=a.1i,i=h+a.1k,j=1a.1n.1I.1i,k=1a.1n.1I.1g,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;1e 1a.1f.65=="aq"||1a.1f.mC||1a.1f.65!="aq"&&1a.2U[1a.8e?"1l":"1k"]>a[1a.8e?"1l":"1k"]?l:f<b+1a.2U.1l/2&&c-1a.2U.1l/2<g&&h<d+1a.2U.1k/2&&e-1a.2U.1k/2<i},gg:1b(b){1d c=1a.1f.3x==="x"||a.1c.8j(1a.3B.1i+1a.1n.1I.1i,b.1i,b.1k),d=1a.1f.3x==="y"||a.1c.8j(1a.3B.1g+1a.1n.1I.1g,b.1g,b.1l),e=c&&d,f=1a.cA(),g=1a.cB();1e e?1a.8e?g&&g=="2O"||f=="56"?2:1:f&&(f=="56"?2:1):!1},gs:1b(b){1d c=a.1c.8j(1a.3B.1i+1a.1n.1I.1i,b.1i+b.1k/2,b.1k),d=a.1c.8j(1a.3B.1g+1a.1n.1I.1g,b.1g+b.1l/2,b.1l),e=1a.cA(),f=1a.cB();1e 1a.8e&&f?f=="2O"&&d||f=="1g"&&!d:e&&(e=="56"&&c||e=="5I"&&!c)},cA:1b(){1d a=1a.3B.1i-1a.9B.1i;1e a!=0&&(a>0?"56":"5I")},cB:1b(){1d a=1a.3B.1g-1a.9B.1g;1e a!=0&&(a>0?"2O":"1g")},5t:1b(a){1e 1a.dx(a),1a.6X(),1a},cC:1b(){1d a=1a.1f;1e a.bT.6e==8C?[a.bT]:a.bT},cf:1b(b){1d c=1a,d=[],e=[],f=1a.cC();if(f&&b)1T(1d g=f.1o-1;g>=0;g--){1d h=a(f[g]);1T(1d i=h.1o-1;i>=0;i--){1d j=a.1v(h[i],1a.3u);j&&j!=1a&&!j.1f.1s&&e.3n([a.4d(j.1f.2T)?j.1f.2T.2g(j.1h):a(j.1f.2T,j.1h).4F(".1c-4B-1r").4F(".1c-4B-3j"),j])}}e.3n([a.4d(1a.1f.2T)?1a.1f.2T.2g(1a.1h,1p,{1f:1a.1f,1S:1a.1N}):a(1a.1f.2T,1a.1h).4F(".1c-4B-1r").4F(".1c-4B-3j"),1a]);1T(1d g=e.1o-1;g>=0;g--)e[g][0].1H(1b(){d.3n(1a)});1e a(d)},fX:1b(){1d a=1a.1N.2v(":1v("+1a.3u+"-1S)");1T(1d b=0;b<1a.2T.1o;b++)1T(1d c=0;c<a.1o;c++)a[c]==1a.2T[b].1S[0]&&1a.2T.9L(b,1)},dx:1b(b){1a.2T=[],1a.2p=[1a];1d c=1a.2T,d=1a,e=[[a.4d(1a.1f.2T)?1a.1f.2T.2g(1a.1h[0],b,{1S:1a.1N}):a(1a.1f.2T,1a.1h),1a]],f=1a.cC();if(f&&1a.c8)1T(1d g=f.1o-1;g>=0;g--){1d h=a(f[g]);1T(1d i=h.1o-1;i>=0;i--){1d j=a.1v(h[i],1a.3u);j&&j!=1a&&!j.1f.1s&&(e.3n([a.4d(j.1f.2T)?j.1f.2T.2g(j.1h[0],b,{1S:1a.1N}):a(j.1f.2T,j.1h),j]),1a.2p.3n(j))}}1T(1d g=e.1o-1;g>=0;g--){1d k=e[g][1],l=e[g][0];1T(1d i=0,m=l.1o;i<m;i++){1d n=a(l[i]);n.1v(1a.3u+"-1S",k),c.3n({1S:n,2f:k,1l:0,1k:0,1g:0,1i:0})}}},6X:1b(b){1a.3g&&1a.1r&&(1a.1n.2a=1a.9U());1T(1d c=1a.2T.1o-1;c>=0;c--){1d d=1a.2T[c];if(d.2f!=1a.8X&&1a.8X&&d.1S[0]!=1a.1N[0])6o;1d e=1a.1f.he?a(1a.1f.he,d.1S):d.1S;b||(d.1l=e.3f(),d.1k=e.3o());1d f=e.1n();d.1g=f.1g,d.1i=f.1i}if(1a.1f.cE&&1a.1f.cE.hg)1a.1f.cE.hg.2g(1a);2K 1T(1d c=1a.2p.1o-1;c>=0;c--){1d f=1a.2p[c].1h.1n();1a.2p[c].54.1g=f.1g,1a.2p[c].54.1i=f.1i,1a.2p[c].54.1l=1a.2p[c].1h.3f(),1a.2p[c].54.1k=1a.2p[c].1h.3o()}1e 1a},g3:1b(b){1d c=b||1a,d=c.1f;if(!d.3j||d.3j.6e==8C){1d e=d.3j;d.3j={1h:1b(){1d b=a(1u.b0(c.1N[0].5m)).1t(e||c.1N[0].96+" 1c-4B-3j").1y("1c-4B-1r")[0];1e e||(b.3a.8A="3I"),b},9Y:1b(a,b){if(e&&!d.ff)1e;b.1k()||b.1k(c.1N.8y()-1x(c.1N.1j("7J")||0,10)-1x(c.1N.1j("7K")||0,10)),b.1l()||b.1l(c.1N.9s()-1x(c.1N.1j("8O")||0,10)-1x(c.1N.1j("8Q")||0,10))}}}c.3j=a(d.3j.1h.2g(c.1h,c.1N)),c.1N.aa(c.3j),d.3j.9Y(c,c.3j)},gD:1b(b){1d c=1p,d=1p;1T(1d e=1a.2p.1o-1;e>=0;e--){if(a.1c.4I(1a.1N[0],1a.2p[e].1h[0]))6o;if(1a.d1(1a.2p[e].54)){if(c&&a.1c.4I(1a.2p[e].1h[0],c.1h[0]))6o;c=1a.2p[e],d=e}2K 1a.2p[e].54.5M&&(1a.2p[e].1B("9E",b,1a.3q(1a)),1a.2p[e].54.5M=0)}if(!c)1e;if(1a.2p.1o===1)1a.2p[d].1B("5M",b,1a.3q(1a)),1a.2p[d].54.5M=1;2K if(1a.8X!=1a.2p[d]){1d f=cF,g=1p,h=1a.3B[1a.2p[d].8e?"1g":"1i"];1T(1d i=1a.2T.1o-1;i>=0;i--){if(!a.1c.4I(1a.2p[d].1h[0],1a.2T[i].1S[0]))6o;1d j=1a.2p[d].8e?1a.2T[i].1S.1n().1g:1a.2T[i].1S.1n().1i;1C.4D(j-h)<f&&(f=1C.4D(j-h),g=1a.2T[i],1a.66=j-h>0?"56":"5I")}if(!g&&!1a.1f.fd)1e;1a.8X=1a.2p[d],g?1a.bS(b,g,1p,!0):1a.bS(b,1p,1a.2p[d].1h,!0),1a.1B("64",b,1a.3q()),1a.2p[d].1B("64",b,1a.3q(1a)),1a.1f.3j.9Y(1a.8X,1a.3j),1a.2p[d].1B("5M",b,1a.3q(1a)),1a.2p[d].54.5M=1}},bp:1b(b){1d c=1a.1f,d=a.4d(c.1r)?a(c.1r.1P(1a.1h[0],[b,1a.1N])):c.1r=="86"?1a.1N.86():1a.1N;1e d.4M("2l").1o||a(c.2P!="2a"?c.2P:1a.1N[0].4p)[0].aY(d[0]),d[0]==1a.1N[0]&&(1a.82={1l:1a.1N[0].3a.1l,1k:1a.1N[0].3a.1k,1q:1a.1N.1j("1q"),1i:1a.1N.1j("1i"),1g:1a.1N.1j("1g")}),(d[0].3a.1l==""||c.c4)&&d.1l(1a.1N.1l()),(d[0].3a.1k==""||c.c4)&&d.1k(1a.1N.1k()),d},bs:1b(b){2j b=="3S"&&(b=b.59(" ")),a.81(b)&&(b={1g:+b[0],1i:+b[1]||0}),"1g"in b&&(1a.1n.1I.1g=b.1g+1a.2S.1g),"2O"in b&&(1a.1n.1I.1g=1a.2U.1l-b.2O+1a.2S.1g),"1i"in b&&(1a.1n.1I.1i=b.1i+1a.2S.1i),"2V"in b&&(1a.1n.1I.1i=1a.2U.1k-b.2V+1a.2S.1i)},9U:1b(){1a.3g=1a.1r.3g();1d b=1a.3g.1n();1a.3G=="2Q"&&1a.1Q[0]!=1u&&a.1c.4I(1a.1Q[0],1a.3g[0])&&(b.1g+=1a.1Q.2k(),b.1i+=1a.1Q.2e());if(1a.3g[0]==1u.2l||1a.3g[0].5C&&1a.3g[0].5C.4N()=="4k"&&a.3e.5G)b={1i:0,1g:0};1e{1i:b.1i+(1x(1a.3g.1j("7p"),10)||0),1g:b.1g+(1x(1a.3g.1j("7n"),10)||0)}},9W:1b(){if(1a.3G=="2L"){1d a=1a.1N.1q();1e{1i:a.1i-(1x(1a.1r.1j("1i"),10)||0)+1a.1Q.2e(),1g:a.1g-(1x(1a.1r.1j("1g"),10)||0)+1a.1Q.2k()}}1e{1i:0,1g:0}},br:1b(){1a.2S={1g:1x(1a.1N.1j("7I"),10)||0,1i:1x(1a.1N.1j("7j"),10)||0}},9z:1b(){1a.2U={1l:1a.1r.3f(),1k:1a.1r.3o()}},bu:1b(){1d b=1a.1f;b.1U=="2a"&&(b.1U=1a.1r[0].4p);if(b.1U=="1u"||b.1U=="2N")1a.1U=[0-1a.1n.2L.1g-1a.1n.2a.1g,0-1a.1n.2L.1i-1a.1n.2a.1i,a(b.1U=="1u"?1u:2N).1l()-1a.2U.1l-1a.2S.1g,(a(b.1U=="1u"?1u:2N).1k()||1u.2l.4p.7i)-1a.2U.1k-1a.2S.1i];if(!/^(1u|2N|2a)$/.2i(b.1U)){1d c=a(b.1U)[0],d=a(b.1U).1n(),e=a(c).1j("3v")!="3I";1a.1U=[d.1g+(1x(a(c).1j("7n"),10)||0)+(1x(a(c).1j("8O"),10)||0)-1a.2S.1g,d.1i+(1x(a(c).1j("7p"),10)||0)+(1x(a(c).1j("7J"),10)||0)-1a.2S.1i,d.1g+(e?1C.2F(c.9I,c.6k):c.6k)-(1x(a(c).1j("7n"),10)||0)-(1x(a(c).1j("8Q"),10)||0)-1a.2U.1l-1a.2S.1g,d.1i+(e?1C.2F(c.7i,c.5k):c.5k)-(1x(a(c).1j("7p"),10)||0)-(1x(a(c).1j("7K"),10)||0)-1a.2U.1k-1a.2S.1i]}},5o:1b(b,c){c||(c=1a.1q);1d d=b=="2Q"?1:-1,e=1a.1f,f=1a.3G=="2Q"&&(1a.1Q[0]==1u||!a.1c.4I(1a.1Q[0],1a.3g[0]))?1a.3g:1a.1Q,g=/(4k|2l)/i.2i(f[0].5C);1e{1i:c.1i+1a.1n.2L.1i*d+1a.1n.2a.1i*d-(a.3e.6y&&1a.3G=="4c"?0:(1a.3G=="4c"?-1a.1Q.2e():g?0:f.2e())*d),1g:c.1g+1a.1n.2L.1g*d+1a.1n.2a.1g*d-(a.3e.6y&&1a.3G=="4c"?0:(1a.3G=="4c"?-1a.1Q.2k():g?0:f.2k())*d)}},8M:1b(b){1d c=1a.1f,d=1a.3G=="2Q"&&(1a.1Q[0]==1u||!a.1c.4I(1a.1Q[0],1a.3g[0]))?1a.3g:1a.1Q,e=/(4k|2l)/i.2i(d[0].5C);1a.3G=="2L"&&(1a.1Q[0]==1u||1a.1Q[0]==1a.3g[0])&&(1a.1n.2L=1a.9W());1d f=b.3h,g=b.3k;if(1a.3Y){1a.1U&&(b.3h-1a.1n.1I.1g<1a.1U[0]&&(f=1a.1U[0]+1a.1n.1I.1g),b.3k-1a.1n.1I.1i<1a.1U[1]&&(g=1a.1U[1]+1a.1n.1I.1i),b.3h-1a.1n.1I.1g>1a.1U[2]&&(f=1a.1U[2]+1a.1n.1I.1g),b.3k-1a.1n.1I.1i>1a.1U[3]&&(g=1a.1U[3]+1a.1n.1I.1i));if(c.3c){1d h=1a.8l+1C.5T((g-1a.8l)/c.3c[1])*c.3c[1];g=1a.1U?h-1a.1n.1I.1i<1a.1U[1]||h-1a.1n.1I.1i>1a.1U[3]?h-1a.1n.1I.1i<1a.1U[1]?h+c.3c[1]:h-c.3c[1]:h:h;1d i=1a.8s+1C.5T((f-1a.8s)/c.3c[0])*c.3c[0];f=1a.1U?i-1a.1n.1I.1g<1a.1U[0]||i-1a.1n.1I.1g>1a.1U[2]?i-1a.1n.1I.1g<1a.1U[0]?i+c.3c[0]:i-c.3c[0]:i:i}}1e{1i:g-1a.1n.1I.1i-1a.1n.2L.1i-1a.1n.2a.1i+(a.3e.6y&&1a.3G=="4c"?0:1a.3G=="4c"?-1a.1Q.2e():e?0:d.2e()),1g:f-1a.1n.1I.1g-1a.1n.2L.1g-1a.1n.2a.1g+(a.3e.6y&&1a.3G=="4c"?0:1a.3G=="4c"?-1a.1Q.2k():e?0:d.2k())}},bS:1b(a,b,c,d){c?c[0].aY(1a.3j[0]):b.1S[0].4p.bH(1a.3j[0],1a.66=="56"?b.1S[0]:b.1S[0].hk),1a.a2=1a.a2?++1a.a2:1;1d e=1a,f=1a.a2;2N.5u(1b(){f==e.a2&&e.6X(!d)},0)},7F:1b(b,c){1a.bW=!1;1d d=[],e=1a;!1a.ca&&1a.1N.2a().1o&&1a.3j.cI(1a.1N),1a.ca=1p;if(1a.1r[0]==1a.1N[0]){1T(1d f in 1a.82)if(1a.82[f]=="3Q"||1a.82[f]=="6P")1a.82[f]="";1a.1N.1j(1a.82).1y("1c-4B-1r")}2K 1a.1N.1K();1a.9r&&!c&&d.3n(1b(a){1a.1B("hs",a,1a.3q(1a.9r))}),(1a.9r||1a.8Y.4v!=1a.1N.4v().4F(".1c-4B-1r")[0]||1a.8Y.2a!=1a.1N.2a()[0])&&!c&&d.3n(1b(a){1a.1B("9Y",a,1a.3q())});if(!a.1c.4I(1a.1h[0],1a.1N[0])){c||d.3n(1b(a){1a.1B("2B",a,1a.3q())});1T(1d f=1a.2p.1o-1;f>=0;f--)a.1c.4I(1a.2p[f].1h[0],1a.1N[0])&&!c&&(d.3n(1b(a){1e 1b(b){a.1B("hs",b,1a.3q(1a))}}.2g(1a,1a.2p[f])),d.3n(1b(a){1e 1b(b){a.1B("9Y",b,1a.3q(1a))}}.2g(1a,1a.2p[f])))}1T(1d f=1a.2p.1o-1;f>=0;f--)c||d.3n(1b(a){1e 1b(b){a.1B("6w",b,1a.3q(1a))}}.2g(1a,1a.2p[f])),1a.2p[f].54.5M&&(d.3n(1b(a){1e 1b(b){a.1B("9E",b,1a.3q(1a))}}.2g(1a,1a.2p[f])),1a.2p[f].54.5M=0);1a.bY&&a("2l").1j("4x",1a.bY),1a.bZ&&1a.1r.1j("2s",1a.bZ),1a.bU&&1a.1r.1j("2A",1a.bU=="3Q"?"":1a.bU),1a.5Z=!1;if(1a.8p){if(!c){1a.1B("hw",b,1a.3q());1T(1d f=0;f<d.1o;f++)d[f].2g(1a,b);1a.1B("3M",b,1a.3q())}1e 1a.9r=!1,!1}c||1a.1B("hw",b,1a.3q()),1a.3j[0].4p.9x(1a.3j[0]),1a.1r[0]!=1a.1N[0]&&1a.1r.2B(),1a.1r=1p;if(!c){1T(1d f=0;f<d.1o;f++)d[f].2g(1a,b);1a.1B("3M",b,1a.3q())}1e 1a.9r=!1,!0},1B:1b(){a.4m.3p.1B.1P(1a,29)===!1&&1a.7y()},3q:1b(b){1d c=b||1a;1e{1r:c.1r,3j:c.3j||a([]),1q:c.1q,3Y:c.3Y,1n:c.3B,1S:c.1N,mB:b?b.1h:1p}}}),a.1X(a.1c.4B,{43:"1.8.23"})}(2X),2X.1A||1b(a,b){1b c(b){1d c;1e b&&b.6e==9a&&b.1o==3?b:(c=/cP\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*\\)/.7H(b))?[1x(c[1],10),1x(c[2],10),1x(c[3],10)]:(c=/cP\\(\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*\\)/.7H(b))?[5i(c[1])*2.55,5i(c[2])*2.55,5i(c[3])*2.55]:(c=/#([a-fA-8D-9]{2})([a-fA-8D-9]{2})([a-fA-8D-9]{2})/.7H(b))?[1x(c[1],16),1x(c[2],16),1x(c[3],16)]:(c=/#([a-fA-8D-9])([a-fA-8D-9])([a-fA-8D-9])/.7H(b))?[1x(c[1]+c[1],16),1x(c[2]+c[2],16),1x(c[3]+c[3],16)]:(c=/mA\\(0, 0, 0, 0\\)/.7H(b))?e.bx:e[a.f0(b).4N()]}1b d(b,d){1d e;do{e=(a.44||a.1j)(b,d);if(e!=""&&e!="bx"||a.5m(b,"2l"))1O;d="8G"}6B(b=b.4p);1e c(e)}1b h(){1d a=1u.ii?1u.ii.mz(1a,1p):1a.mx,b={},c,d;if(a&&a.1o&&a[0]&&a[a[0]]){1d e=a.1o;6B(e--)c=a[e],2j a[c]=="3S"&&(d=c.6p(/\\-(\\w)/g,1b(a,b){1e b.mw()}),b[d]=a[c])}2K 1T(c in a)2j a[c]=="3S"&&(b[c]=a[c]);1e b}1b i(b){1d c,d;1T(c in b)d=b[c],(d==1p||a.4d(d)||c in g||/mv/.2i(c)||!/db/i.2i(c)&&6c(5i(d)))&&bt b[c];1e b}1b j(a,b){1d c={6H:0},d;1T(d in b)a[d]!=b[d]&&(c[d]=b[d]);1e c}1b k(b,c,d,e){2j b=="6b"&&(e=c,d=1p,c=b,b=c.5R),a.4d(c)&&(e=c,d=1p,c={});if(2j c=="5l"||a.fx.7W[c])e=d,d=c,c={};1e a.4d(d)&&(e=d,d=1p),c=c||{},d=d||c.2m,d=a.fx.de?0:2j d=="5l"?d:d in a.fx.7W?a.fx.7W[d]:a.fx.7W.di,e=e||c.5v,[b,c,d,e]}1b l(b){1e!b||2j b=="5l"||a.fx.7W[b]?!0:2j b=="3S"&&!a.1A[b]?!0:!1}a.1A={},a.1H(["8G","mu","ms","mr","mq","fh","db","ml"],1b(b,e){a.fx.8f[e]=1b(a){a.fq||(a.3D=d(a.ft,e),a.4w=c(a.4w),a.fq=!0),a.ft.3a[e]="cP("+1C.2F(1C.3K(1x(a.41*(a.4w[0]-a.3D[0])+a.3D[0],10),3d),0)+","+1C.2F(1C.3K(1x(a.41*(a.4w[1]-a.3D[1])+a.3D[1],10),3d),0)+","+1C.2F(1C.3K(1x(a.41*(a.4w[2]-a.3D[2])+a.3D[2],10),3d),0)+")"}});1d e={mk:[0,3d,3d],mj:[fT,3d,3d],mi:[fW,fW,mg],mf:[0,0,0],me:[0,0,3d],md:[g1,42,42],mc:[0,3d,3d],mb:[0,0,94],ma:[0,94,94],m9:[e1,e1,e1],m7:[0,3U,0],m6:[m5,m4,eB],m1:[94,0,94],m0:[85,eB,47],lZ:[3d,e7,0],lY:[lX,50,lW],lU:[94,0,0],lQ:[lO,9j,lN],lM:[lL,0,aM],lK:[3d,0,3d],lI:[3d,lH,0],lG:[0,6S,0],lF:[75,0,lE],lD:[fT,h1,e7],lC:[lB,lA,h1],lz:[ha,3d,3d],ly:[hc,lx,hc],lw:[aM,aM,aM],lv:[3d,lu,lt],ls:[3d,3d,ha],lr:[0,3d,0],lq:[3d,0,3d],lp:[6S,0,0],lo:[0,0,6S],ln:[6S,6S,0],lm:[3d,g1,0],ll:[3d,au,lk],lj:[6S,0,6S],lh:[6S,0,6S],lg:[3d,0,0],lf:[au,au,au],le:[3d,3d,3d],ld:[3d,3d,0],bx:[3d,3d,3d]},f=["2Z","2B","6W"],g={9g:1,lb:1,fh:1,la:1,l9:1,l8:1,gc:1,7Y:1,9f:1};a.1A.9v=1b(b,c,d,e){1e a.4d(d)&&(e=d,d=1p),1a.2E(1b(){1d g=a(1a),k=g.1Z("3a")||" ",l=i(h.2g(1a)),m,n=g.1Z("2C")||"";a.1H(f,1b(a,c){b[c]&&g[c+"aF"](b[c])}),m=i(h.2g(1a)),g.1Z("2C",n),g.1V(j(l,m),{2E:!1,2m:c,2z:d,5v:1b(){a.1H(f,1b(a,c){b[c]&&g[c+"aF"](b[c])}),2j g.1Z("3a")=="6b"?(g.1Z("3a").eJ="",g.1Z("3a").eJ=k):g.1Z("3a",k),e&&e.1P(1a,29),a.3T(1a)}})})},a.fn.1X({il:a.fn.1t,1t:1b(b,c,d,e){1e c?a.1A.9v.1P(1a,[{2Z:b},c,d,e]):1a.il(b)},iq:a.fn.1y,1y:1b(b,c,d,e){1e c?a.1A.9v.1P(1a,[{2B:b},c,d,e]):1a.iq(b)},eS:a.fn.7Q,7Q:1b(c,d,e,f,g){1e 2j d=="eF"||d===b?e?a.1A.9v.1P(1a,[d?{2Z:c}:{2B:c},e,f,g]):1a.eS(c,d):a.1A.9v.1P(1a,[{6W:c},d,e,f])},l7:1b(b,c,d,e,f){1e a.1A.9v.1P(1a,[{2Z:c,2B:b},d,e,f])}}),a.1X(a.1A,{43:"1.8.23",6q:1b(a,b){1T(1d c=0;c<b.1o;c++)b[c]!==1p&&a.1v("ec.eY."+b[c],a[0].3a[b[c]])},5s:1b(a,b){1T(1d c=0;c<b.1o;c++)b[c]!==1p&&a.1j(b[c],a.1v("ec.eY."+b[c]))},5p:1b(a,b){1e b=="6W"&&(b=a.is(":3I")?"1K":"1J"),b},f4:1b(a,b){1d c,d;5g(a[0]){1z"1i":c=0;1O;1z"et":c=.5;1O;1z"2V":c=1;1O;3m:c=a[0]/b.1k}5g(a[1]){1z"1g":d=0;1O;1z"8n":d=.5;1O;1z"2O":d=1;1O;3m:d=a[1]/b.1l}1e{x:d,y:c}},6U:1b(b){if(b.2a().is(".1c-1A-bL"))1e b.2a();1d c={1l:b.3f(!0),1k:b.3o(!0),"c1":b.1j("c1")},d=a("<2b></2b>").1t("1c-1A-bL").1j({f9:"3U%",dj:"bx",9g:"7s",7Y:0,9f:0}),e=1u.aQ;6L{e.id}6K(f){e=1u.2l}1e b.cD(d),(b[0]===e||a.4I(b[0],e))&&a(e).2q(),d=b.2a(),b.1j("1q")=="6P"?(d.1j({1q:"2L"}),b.1j({1q:"2L"})):(a.1X(c,{1q:b.1j("1q"),2A:b.1j("z-4g")}),a.1H(["1i","1g","2V","2O"],1b(a,d){c[d]=b.1j(d),6c(1x(c[d],10))&&(c[d]="3Q")}),b.1j({1q:"2L",1i:0,1g:0,2O:"3Q",2V:"3Q"})),d.1j(c).1K()},6v:1b(b){1d c,d=1u.aQ;1e b.2a().is(".1c-1A-bL")?(c=b.2a().fe(b),(b[0]===d||a.4I(b[0],d))&&a(d).2q(),c):b},6n:1b(b,c,d,e){1e e=e||{},a.1H(c,1b(a,c){1d f=b.fg(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.1X({5R:1b(b,c,d,e){1d f=k.1P(1a,29),g={1f:f[1],2m:f[2],30:f[3]},h=g.1f.3r,i=a.1A[b];1e a.fx.de||!i?h?1a[h](g.2m,g.30):1a.1H(1b(){g.30&&g.30.2g(1a)}):i.2g(1a,g)},fk:a.fn.1K,1K:1b(a){if(l(a))1e 1a.fk.1P(1a,29);1d b=k.1P(1a,29);1e b[1].3r="1K",1a.5R.1P(1a,b)},fm:a.fn.1J,1J:1b(a){if(l(a))1e 1a.fm.1P(1a,29);1d b=k.1P(1a,29);1e b[1].3r="1J",1a.5R.1P(1a,b)},fo:a.fn.6W,6W:1b(b){if(l(b)||2j b=="eF"||a.4d(b))1e 1a.fo.1P(1a,29);1d c=k.1P(1a,29);1e c[1].3r="6W",1a.5R.1P(1a,c)},fg:1b(b){1d c=1a.1j(b),d=[];1e a.1H(["em","3J","%","l6"],1b(a,b){c.dW(b)>0&&(d=[5i(c),b])}),d}});1d m={};a.1H(["l5","l1","l0","kZ","kY"],1b(a,b){m[b]=1b(b){1e 1C.9P(b,a+2)}}),a.1X(m,{kX:1b(a){1e 1-1C.kV(a*1C.fR/2)},kT:1b(a){1e 1-1C.dK(1-a*a)},kD:1b(a){1e a===0||a===1?a:-1C.9P(2,8*(a-1))*1C.kC(((a-1)*80-7.5)*1C.fR/15)},kx:1b(a){1e a*a*(3*a-2)},ks:1b(a){1d b,c=4;6B(a<((b=1C.9P(2,--c))-1)/11);1e 1/1C.9P(4,3-c)-7.kr*1C.9P((b*3-2)/22-a,2)}}),a.1H(m,1b(b,c){a.2z["kq"+b]=c,a.2z["kp"+b]=1b(a){1e 1-c(1-a)},a.2z["kn"+b]=1b(a){1e a<.5?c(a*2)/2:c(a*-2+2)/-2+1}})}(2X),1b(a,b){a.1A.km=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=["1q","1i","2V","1g","2O"],e=a.1A.5p(c,b.1f.3r||"1J"),f=b.1f.66||"5f";a.1A.6q(c,d),c.1K();1d g=a.1A.6U(c).1j({3v:"3I"}),h=f=="5f"?"1k":"1l",i=f=="5f"?g.1k():g.1l();e=="1K"&&g.1j(h,0);1d j={};j[h]=e=="1K"?i:0,g.1V(j,b.2m,b.1f.2z,1b(){e=="1J"&&c.1J(),a.1A.5s(c,d),a.1A.6v(c),b.30&&b.30.1P(c[0],29),c.3T()})})}}(2X),1b(a,b){a.1A.kj=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=["1q","1i","2V","1g","2O"],e=a.1A.5p(c,b.1f.3r||"5R"),f=b.1f.66||"5I",g=b.1f.77||20,h=b.1f.dn||5,i=b.2m||ki;/1K|1J/.2i(e)&&d.3n("2s"),a.1A.6q(c,d),c.1K(),a.1A.6U(c);1d j=f=="5I"||f=="56"?"1i":"1g",k=f=="5I"||f=="1g"?"41":"bm",g=b.1f.77||(j=="1i"?c.3o(!0)/3:c.3f(!0)/3);e=="1K"&&c.1j("2s",0).1j(j,k=="41"?-g:g),e=="1J"&&(g=g/(h*2)),e!="1J"&&h--;if(e=="1K"){1d l={2s:1};l[j]=(k=="41"?"+=":"-=")+g,c.1V(l,i/2,b.1f.2z),g=g/2,h--}1T(1d m=0;m<h;m++){1d n={},p={};n[j]=(k=="41"?"-=":"+=")+g,p[j]=(k=="41"?"+=":"-=")+g,c.1V(n,i/2,b.1f.2z).1V(p,i/2,b.1f.2z),g=e=="1J"?g*2:g/2}if(e=="1J"){1d l={2s:0};l[j]=(k=="41"?"-=":"+=")+g,c.1V(l,i/2,b.1f.2z,1b(){c.1J(),a.1A.5s(c,d),a.1A.6v(c),b.30&&b.30.1P(1a,29)})}2K{1d n={},p={};n[j]=(k=="41"?"-=":"+=")+g,p[j]=(k=="41"?"+=":"-=")+g,c.1V(n,i/2,b.1f.2z).1V(p,i/2,b.1f.2z,1b(){a.1A.5s(c,d),a.1A.6v(c),b.30&&b.30.1P(1a,29)})}c.2E("fx",1b(){c.3T()}),c.3T()})}}(2X),1b(a,b){a.1A.kh=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=["1q","1i","2V","1g","2O","1k","1l"],e=a.1A.5p(c,b.1f.3r||"1J"),f=b.1f.66||"5f";a.1A.6q(c,d),c.1K();1d g=a.1A.6U(c).1j({3v:"3I"}),h=c[0].5C=="kg"?g:c,i={28:f=="5f"?"1k":"1l",1q:f=="5f"?"1i":"1g"},j=f=="5f"?h.1k():h.1l();e=="1K"&&(h.1j(i.28,0),h.1j(i.1q,j/2));1d k={};k[i.28]=e=="1K"?j:0,k[i.1q]=e=="1K"?0:j/2,h.1V(k,{2E:!1,2m:b.2m,2z:b.1f.2z,5v:1b(){e=="1J"&&c.1J(),a.1A.5s(c,d),a.1A.6v(c),b.30&&b.30.1P(c[0],29),c.3T()}})})}}(2X),1b(a,b){a.1A.9c=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=["1q","1i","2V","1g","2O","2s"],e=a.1A.5p(c,b.1f.3r||"1J"),f=b.1f.66||"1g";a.1A.6q(c,d),c.1K(),a.1A.6U(c);1d g=f=="5I"||f=="56"?"1i":"1g",h=f=="5I"||f=="1g"?"41":"bm",i=b.1f.77||(g=="1i"?c.3o(!0)/2:c.3f(!0)/2);e=="1K"&&c.1j("2s",0).1j(g,h=="41"?-i:i);1d j={2s:e=="1K"?1:0};j[g]=(e=="1K"?h=="41"?"+=":"-=":h=="41"?"-=":"+=")+i,c.1V(j,{2E:!1,2m:b.2m,2z:b.1f.2z,5v:1b(){e=="1J"&&c.1J(),a.1A.5s(c,d),a.1A.6v(c),b.30&&b.30.1P(1a,29),c.3T()}})})}}(2X),1b(a,b){a.1A.df=1b(b){1e 1a.2E(1b(){1d c=b.1f.bq?1C.5T(1C.dK(b.1f.bq)):3,d=b.1f.bq?1C.5T(1C.dK(b.1f.bq)):3;b.1f.3r=b.1f.3r=="6W"?a(1a).is(":4u")?"1J":"1K":b.1f.3r;1d e=a(1a).1K().1j("8A","3I"),f=e.1n();f.1i-=1x(e.1j("7j"),10)||0,f.1g-=1x(e.1j("7I"),10)||0;1d g=e.3f(!0),h=e.3o(!0);1T(1d i=0;i<c;i++)1T(1d j=0;j<d;j++)e.86().2P("2l").cD("<2b></2b>").1j({1q:"2Q",8A:"4u",1g:-j*(g/d),1i:-i*(h/c)}).2a().1t("1c-1A-df").1j({1q:"2Q",3v:"3I",1l:g/d,1k:h/c,1g:f.1g+j*(g/d)+(b.1f.3r=="1K"?(j-1C.7x(d/2))*(g/d):0),1i:f.1i+i*(h/c)+(b.1f.3r=="1K"?(i-1C.7x(c/2))*(h/c):0),2s:b.1f.3r=="1K"?0:1}).1V({1g:f.1g+j*(g/d)+(b.1f.3r=="1K"?0:(j-1C.7x(d/2))*(g/d)),1i:f.1i+i*(h/c)+(b.1f.3r=="1K"?0:(i-1C.7x(c/2))*(h/c)),2s:b.1f.3r=="1K"?1:0},b.2m||bn);5u(1b(){b.1f.3r=="1K"?e.1j({8A:"4u"}):e.1j({8A:"4u"}).1J(),b.30&&b.30.1P(e[0]),e.3T(),a("2b.1c-1A-df").2B()},b.2m||bn)})}}(2X),1b(a,b){a.1A.dc=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=a.1A.5p(c,b.1f.3r||"1J");c.1V({2s:d},{2E:!1,2m:b.2m,2z:b.1f.2z,5v:1b(){b.30&&b.30.1P(1a,29),c.3T()}})})}}(2X),1b(a,b){a.1A.kf=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=["1q","1i","2V","1g","2O"],e=a.1A.5p(c,b.1f.3r||"1J"),f=b.1f.28||15,g=!!b.1f.ke,h=b.2m?b.2m/2:a.fx.7W.di/2;a.1A.6q(c,d),c.1K();1d i=a.1A.6U(c).1j({3v:"3I"}),j=e=="1K"!=g,k=j?["1l","1k"]:["1k","1l"],l=j?[i.1l(),i.1k()]:[i.1k(),i.1l()],m=/([0-9]+)%/.7H(f);m&&(f=1x(m[1],10)/3U*l[e=="1J"?0:1]),e=="1K"&&i.1j(g?{1k:0,1l:f}:{1k:f,1l:0});1d n={},p={};n[k[0]]=e=="1K"?l[0]:f,p[k[1]]=e=="1K"?l[1]:0,i.1V(n,h,b.1f.2z).1V(p,h,b.1f.2z,1b(){e=="1J"&&c.1J(),a.1A.5s(c,d),a.1A.6v(c),b.30&&b.30.1P(c[0],29),c.3T()})})}}(2X),1b(a,b){a.1A.gm=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=["gn","8G","2s"],e=a.1A.5p(c,b.1f.3r||"1K"),f={8G:c.1j("8G")};e=="1J"&&(f.2s=0),a.1A.6q(c,d),c.1K().1j({gn:"7s",8G:b.1f.db||"#kd"}).1V(f,{2E:!1,2m:b.2m,2z:b.1f.2z,5v:1b(){e=="1J"&&c.1J(),a.1A.5s(c,d),e=="1K"&&!a.9y.2s&&1a.3a.gp("2t"),b.30&&b.30.1P(1a,29),c.3T()}})})}}(2X),1b(a,b){a.1A.kc=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=a.1A.5p(c,b.1f.3r||"1K"),e=(b.1f.dn||5)*2-1,f=b.2m?b.2m/2:a.fx.7W.di/2,g=c.is(":4u"),h=0;g||(c.1j("2s",0).1K(),h=1),(d=="1J"&&g||d=="1K"&&!g)&&e--;1T(1d i=0;i<e;i++)c.1V({2s:h},f,b.1f.2z),h=(h+1)%2;c.1V({2s:h},f,b.1f.2z,1b(){h==0&&c.1J(),b.30&&b.30.1P(1a,29)}),c.2E("fx",1b(){c.3T()}).3T()})}}(2X),1b(a,b){a.1A.kb=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=a.1A.5p(c,b.1f.3r||"1J"),e=1x(b.1f.by,10)||9j,f=e/3U,g={1k:c.1k(),1l:c.1l()};a.1X(b.1f,{dc:!0,3r:d,by:d=="1J"?e:3U,2w:d=="1J"?g:{1k:g.1k*f,1l:g.1l*f}}),c.5R("cT",b.1f,b.2m,b.30),c.3T()})},a.1A.cT=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=a.1X(!0,{},b.1f),e=a.1A.5p(c,b.1f.3r||"5R"),f=1x(b.1f.by,10)||(1x(b.1f.by,10)==0?0:e=="1J"?0:3U),g=b.1f.66||"7A",h=b.1f.cQ;e!="5R"&&(d.cQ=h||["et","8n"],d.5s=!0);1d i={1k:c.1k(),1l:c.1l()};c.2w=b.1f.2w||(e=="1K"?{1k:0,1l:0}:i);1d j={y:g!="6d"?f/3U:1,x:g!="5f"?f/3U:1};c.2y={1k:i.1k*j.y,1l:i.1l*j.x},b.1f.dc&&(e=="1K"&&(c.2w.2s=0,c.2y.2s=1),e=="1J"&&(c.2w.2s=1,c.2y.2s=0)),d.2w=c.2w,d.2y=c.2y,d.3r=e,c.5R("28",d,b.2m,b.30),c.3T()})},a.1A.28=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=["1q","1i","2V","1g","2O","1l","1k","3v","2s"],e=["1q","1i","2V","1g","2O","3v","2s"],f=["1l","1k","3v"],g=["f9"],h=["7p","co","7J","7K"],i=["7n","cp","8O","8Q"],j=a.1A.5p(c,b.1f.3r||"5R"),k=b.1f.5s||!1,l=b.1f.cT||"7A",m=b.1f.cQ,n={1k:c.1k(),1l:c.1l()};c.2w=b.1f.2w||n,c.2y=b.1f.2y||n;if(m){1d p=a.1A.f4(m,n);c.2w.1i=(n.1k-c.2w.1k)*p.y,c.2w.1g=(n.1l-c.2w.1l)*p.x,c.2y.1i=(n.1k-c.2y.1k)*p.y,c.2y.1g=(n.1l-c.2y.1l)*p.x}1d q={2w:{y:c.2w.1k/n.1k,x:c.2w.1l/n.1l},2y:{y:c.2y.1k/n.1k,x:c.2y.1l/n.1l}};if(l=="ka"||l=="7A")q.2w.y!=q.2y.y&&(d=d.4H(h),c.2w=a.1A.6n(c,h,q.2w.y,c.2w),c.2y=a.1A.6n(c,h,q.2y.y,c.2y)),q.2w.x!=q.2y.x&&(d=d.4H(i),c.2w=a.1A.6n(c,i,q.2w.x,c.2w),c.2y=a.1A.6n(c,i,q.2y.x,c.2y));(l=="2W"||l=="7A")&&q.2w.y!=q.2y.y&&(d=d.4H(g),c.2w=a.1A.6n(c,g,q.2w.y,c.2w),c.2y=a.1A.6n(c,g,q.2y.y,c.2y)),a.1A.6q(c,k?d:e),c.1K(),a.1A.6U(c),c.1j("3v","3I").1j(c.2w);if(l=="2W"||l=="7A")h=h.4H(["7j","8K"]).4H(g),i=i.4H(["7I","8J"]),f=d.4H(h).4H(i),c.2v("*[1l]").1H(1b(){1d c=a(1a);k&&a.1A.6q(c,f);1d d={1k:c.1k(),1l:c.1l()};c.2w={1k:d.1k*q.2w.y,1l:d.1l*q.2w.x},c.2y={1k:d.1k*q.2y.y,1l:d.1l*q.2y.x},q.2w.y!=q.2y.y&&(c.2w=a.1A.6n(c,h,q.2w.y,c.2w),c.2y=a.1A.6n(c,h,q.2y.y,c.2y)),q.2w.x!=q.2y.x&&(c.2w=a.1A.6n(c,i,q.2w.x,c.2w),c.2y=a.1A.6n(c,i,q.2y.x,c.2y)),c.1j(c.2w),c.1V(c.2y,b.2m,b.1f.2z,1b(){k&&a.1A.5s(c,f)})});c.1V(c.2y,{2E:!1,2m:b.2m,2z:b.1f.2z,5v:1b(){c.2y.2s===0&&c.1j("2s",c.2w.2s),j=="1J"&&c.1J(),a.1A.5s(c,k?d:e),a.1A.6v(c),b.30&&b.30.1P(1a,29),c.3T()}})})}}(2X),1b(a,b){a.1A.k9=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=["1q","1i","2V","1g","2O"],e=a.1A.5p(c,b.1f.3r||"5R"),f=b.1f.66||"1g",g=b.1f.77||20,h=b.1f.dn||3,i=b.2m||b.1f.2m||e7;a.1A.6q(c,d),c.1K(),a.1A.6U(c);1d j=f=="5I"||f=="56"?"1i":"1g",k=f=="5I"||f=="1g"?"41":"bm",l={},m={},n={};l[j]=(k=="41"?"-=":"+=")+g,m[j]=(k=="41"?"+=":"-=")+g*2,n[j]=(k=="41"?"-=":"+=")+g*2,c.1V(l,i,b.1f.2z);1T(1d p=1;p<h;p++)c.1V(m,i,b.1f.2z).1V(n,i,b.1f.2z);c.1V(m,i,b.1f.2z).1V(l,i/2,b.1f.2z,1b(){a.1A.5s(c,d),a.1A.6v(c),b.30&&b.30.1P(1a,29)}),c.2E("fx",1b(){c.3T()}),c.3T()})}}(2X),1b(a,b){a.1A.7k=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=["1q","1i","2V","1g","2O"],e=a.1A.5p(c,b.1f.3r||"1K"),f=b.1f.66||"1g";a.1A.6q(c,d),c.1K(),a.1A.6U(c).1j({3v:"3I"});1d g=f=="5I"||f=="56"?"1i":"1g",h=f=="5I"||f=="1g"?"41":"bm",i=b.1f.77||(g=="1i"?c.3o(!0):c.3f(!0));e=="1K"&&c.1j(g,h=="41"?6c(i)?"-"+i:-i:i);1d j={};j[g]=(e=="1K"?h=="41"?"+=":"-=":h=="41"?"-=":"+=")+i,c.1V(j,{2E:!1,2m:b.2m,2z:b.1f.2z,5v:1b(){e=="1J"&&c.1J(),a.1A.5s(c,d),a.1A.6v(c),b.30&&b.30.1P(1a,29),c.3T()}})})}}(2X),1b(a,b){a.1A.gH=1b(b){1e 1a.2E(1b(){1d c=a(1a),d=a(b.1f.2y),e=d.1n(),f={1i:e.1i,1g:e.1g,1k:d.8y(),1l:d.9s()},g=c.1n(),h=a(\'<2b 2C="1c-1A-gH"></2b>\').2P(1u.2l).1t(b.1f.96).1j({1i:g.1i,1g:g.1g,1k:c.8y(),1l:c.9s(),1q:"2Q"}).1V(f,b.2m,b.1f.2z,1b(){h.2B(),b.30&&b.30.1P(c[0],29),c.3T()})})}}(2X),1b(a,b){a.1M("1c.3l",{1f:{1G:0,9q:"7k",7t:!0,gQ:!1,4S:!1,4O:"1I",bO:!1,4J:"> li > :5q-k8,> :4F(li):k3",4t:{4J:"1c-3i-98-1-e",am:"1c-3i-98-1-s"},h4:!1,h5:1b(){1e 1a.4o.4N()===bV.4o.4N()}},4T:1b(){1d b=1a,c=b.1f;b.92=0,b.1h.1t("1c-3l 1c-1M 1c-1r-6h").3R("li").1t("1c-3l-li-jY"),b.3z=b.1h.2v(c.4J).1t("1c-3l-4J 1c-1r-6h 1c-1w-3m 1c-26-2R").2d("c2.3l",1b(){if(c.1s)1e;a(1a).1t("1c-1w-3L")}).2d("c3.3l",1b(){if(c.1s)1e;a(1a).1y("1c-1w-3L")}).2d("2q.3l",1b(){if(c.1s)1e;a(1a).1t("1c-1w-2q")}).2d("5e.3l",1b(){if(c.1s)1e;a(1a).1y("1c-1w-2q")}),b.3z.3C().1t("1c-3l-2W 1c-1r-6h 1c-1M-2W 1c-26-2V");if(c.h4){1d d=b.1h.2v("a").2t(c.h5).eq(0);if(d.1o){1d e=d.5r(".1c-3l-4J");e.1o?b.1G=e:b.1G=d.5r(".1c-3l-2W").4v()}}b.1G=b.c5(b.1G||c.1G).1t("1c-1w-3m 1c-1w-1G").7Q("1c-26-2R").7Q("1c-26-1i"),b.1G.3C().1t("1c-3l-2W-1G"),b.c6(),b.4a(),b.1h.1Z("4U","jX"),b.3z.1Z("4U","ho").2d("6f.3l",1b(a){1e b.hq(a)}).3C().1Z("4U","jW"),b.3z.4F(b.1G||"").1Z({"2Y-9V":"7B","2Y-1F":"7B",6r:-1}).3C().1J(),b.1G.1o?b.1G.1Z({"2Y-9V":"7C","2Y-1F":"7C",6r:0}):b.3z.eq(0).1Z("6r",0),a.3e.6y||b.3z.2v("a").1Z("6r",-1),c.4O&&b.3z.2d(c.4O.59(" ").6x(".3l ")+".3l",1b(a){b.bP.2g(b,a,1a),a.4R()})},c6:1b(){1d b=1a.1f;b.4t&&(a("<2M></2M>").1t("1c-3i "+b.4t.4J).ch(1a.3z),1a.1G.3R(".1c-3i").7Q(b.4t.4J).7Q(b.4t.am),1a.1h.1t("1c-3l-4t"))},ci:1b(){1a.3z.3R(".1c-3i").2B(),1a.1h.1y("1c-3l-4t")},3b:1b(){1d b=1a.1f;1a.1h.1y("1c-3l 1c-1M 1c-1r-6h").3O("4U"),1a.3z.31(".3l").1y("1c-3l-4J 1c-3l-1s 1c-1r-6h 1c-1w-3m 1c-26-2R 1c-1w-1G 1c-1w-1s 1c-26-1i").3O("4U").3O("2Y-9V").3O("2Y-1F").3O("6r"),1a.3z.2v("a").3O("6r"),1a.ci();1d c=1a.3z.3C().1j("6M","").3O("4U").1y("1c-1r-6h 1c-1M-2W 1c-26-2V 1c-3l-2W 1c-3l-2W-1G 1c-3l-1s 1c-1w-1s");1e(b.7t||b.jV)&&c.1j("1k",""),a.4m.3p.3b.2g(1a)},3F:1b(b,c){a.4m.3p.3F.1P(1a,29),b=="1G"&&1a.4V(c),b=="4t"&&(1a.ci(),c&&1a.c6()),b=="1s"&&1a.3z.2Z(1a.3z.3C())[c?"1t":"1y"]("1c-3l-1s 1c-1w-1s")},hq:1b(b){if(1a.1f.1s||b.cj||b.49)1e;1d c=a.1c.2I,d=1a.3z.1o,e=1a.3z.4g(b.2c),f=!1;5g(b.2I){1z c.aO:1z c.ai:f=1a.3z[(e+1)%d];1O;1z c.aI:1z c.9X:f=1a.3z[(e-1+d)%d];1O;1z c.aP:1z c.aC:1a.bP({2c:b.2c},b.2c),b.4R()}1e f?(a(b.2c).1Z("6r",-1),a(f).1Z("6r",0),f.2q(),!1):!0},4a:1b(){1d b=1a.1f,c;if(b.bO){if(a.3e.5G){1d d=1a.1h.2a().1j("3v");1a.1h.2a().1j("3v","3I")}c=1a.1h.2a().1k(),a.3e.5G&&1a.1h.2a().1j("3v",d),1a.3z.1H(1b(){c-=a(1a).3o(!0)}),1a.3z.3C().1H(1b(){a(1a).1k(1C.2F(0,c-a(1a).8y()+a(1a).1k()))}).1j("3v","3Q")}2K b.7t&&(c=0,1a.3z.3C().1H(1b(){c=1C.2F(c,a(1a).1k("").1k())}).1k(c));1e 1a},4V:1b(a){1a.1f.1G=a;1d b=1a.c5(a)[0];1e 1a.bP({2c:b},b),1a},c5:1b(b){1e b?2j b=="5l"?1a.3z.2t(":eq("+b+")"):1a.3z.4F(1a.3z.4F(b)):b===!1?a([]):1a.3z.2t(":eq(0)")},bP:1b(b,c){1d d=1a.1f;if(d.1s)1e;if(!b.2c){if(!d.4S)1e;1a.1G.1y("1c-1w-1G 1c-26-1i").1t("1c-1w-3m 1c-26-2R").3R(".1c-3i").1y(d.4t.am).1t(d.4t.4J),1a.1G.3C().1t("1c-3l-2W-1G");1d e=1a.1G.3C(),f={1f:d,hQ:a([]),hR:d.1G,hU:a([]),hY:e},g=1a.1G=a([]);1a.ck(g,e,f);1e}1d h=a(b.jU||c),i=h[0]===1a.1G[0];d.1G=d.4S&&i?!1:1a.3z.4g(h);if(1a.92||!d.4S&&i)1e;1d j=1a.1G,g=h.3C(),e=1a.1G.3C(),f={1f:d,hQ:i&&d.4S?a([]):h,hR:1a.1G,hU:i&&d.4S?a([]):g,hY:e},k=1a.3z.4g(1a.1G[0])>1a.3z.4g(h[0]);1a.1G=i?a([]):h,1a.ck(g,e,f,i,k),j.1y("1c-1w-1G 1c-26-1i").1t("1c-1w-3m 1c-26-2R").3R(".1c-3i").1y(d.4t.am).1t(d.4t.4J),i||(h.1y("1c-1w-3m 1c-26-2R").1t("1c-1w-1G 1c-26-1i").3R(".1c-3i").1y(d.4t.4J).1t(d.4t.am),h.3C().1t("1c-3l-2W-1G"));1e},ck:1b(b,c,d,e,f){1d g=1a,h=g.1f;g.5z=b,g.6m=c,g.1v=d;1d i=1b(){if(!g)1e;1e g.i8.1P(g,29)};g.1B("jT",1p,g.1v),g.92=c.28()===0?b.28():c.28();if(h.9q){1d j={};h.4S&&e?j={5z:a([]),6m:c,5v:i,56:f,7t:h.7t||h.bO}:j={5z:b,6m:c,5v:i,56:f,7t:h.7t||h.bO},h.ao||(h.ao=h.9q),h.al||(h.al=h.2m),h.9q=a.4d(h.ao)?h.ao(j):h.ao,h.2m=a.4d(h.al)?h.al(j):h.al;1d k=a.1c.3l.ie,l=h.2m,m=h.9q;m&&!k[m]&&!a.2z[m]&&(m="7k"),k[m]||(k[m]=1b(a){1a.7k(a,{2z:m,2m:l||jS})}),k[m](j)}2K h.4S&&e?b.6W():(c.1J(),b.1K()),i(!0);c.4v().1Z({"2Y-9V":"7B","2Y-1F":"7B",6r:-1}).5e(),b.4v().1Z({"2Y-9V":"7C","2Y-1F":"7C",6r:0}).2q()},i8:1b(a){1a.92=a?0:--1a.92;if(1a.92)1e;1a.1f.gQ&&1a.5z.2Z(1a.6m).1j({1k:"",3v:""}),1a.6m.1y("1c-3l-2W-1G"),1a.6m.1o&&(1a.6m.2a()[0].96=1a.6m.2a()[0].96),1a.1B("64",1p,1a.1v)}}),a.1X(a.1c.3l,{43:"1.8.23",ie:{7k:1b(b,c){b=a.1X({2z:"cG",2m:cr},b,c);if(!b.6m.28()){b.5z.1V({1k:"1K",7J:"1K",7K:"1K"},b);1e}if(!b.5z.28()){b.6m.1V({1k:"1J",7J:"1J",7K:"1J"},b);1e}1d d=b.5z.1j("3v"),e=0,f={},g={},h=["1k","7J","7K"],i,j=b.5z;i=j[0].3a.1l,j.1l(j.2a().1l()-5i(j.1j("8O"))-5i(j.1j("8Q"))-(5i(j.1j("7n"))||0)-(5i(j.1j("cp"))||0)),a.1H(h,1b(c,d){g[d]="1J";1d e=(""+a.1j(b.5z[0],d)).5J(/^([\\d+-.]+)(.*)$/);f[d]={2u:e[1],ig:e[2]||"3J"}}),b.5z.1j({1k:0,3v:"3I"}).1K(),b.6m.2t(":3I").1H(b.5v).4w().2t(":4u").1V(g,{8f:1b(a,c){c.8c=="1k"&&(e=c.4w-c.3D===0?0:(c.jR-c.3D)/(c.4w-c.3D)),b.5z[0].3a[c.8c]=e*f[c.8c].2u+f[c.8c].ig},2m:b.2m,2z:b.2z,5v:1b(){b.7t||b.5z.1j("1k",""),b.5z.1j({1l:i,3v:d}),b.5v()}})},jQ:1b(a){1a.7k(a,{2z:a.56?"jO":"cG",2m:a.56?ah:jN})}}})}(2X),1b(a,b){1d c=0;a.1M("1c.4e",{1f:{2P:"2l",im:!1,9T:cr,io:1,1q:{my:"1g 1i",at:"1g 2V",cy:"7s"},69:1p},bM:0,4T:1b(){1d b=1a,c=1a.1h[0].9D,d;1a.eX=1a.1h.is("99"),1a.1h.1t("1c-4e-1W").1Z("4e","de").1Z({4U:"jM","2Y-4e":"7R","2Y-eZ":"7C"}).2d("6f.4e",1b(c){if(b.1f.1s||b.1h.7G("jL"))1e;d=!1;1d e=a.1c.2I;5g(c.2I){1z e.aN:b.bI("f2",c);1O;1z e.aL:b.bI("f3",c);1O;1z e.9X:b.8u("7v",c);1O;1z e.ai:b.8u("3C",c);1O;1z e.aC:1z e.fI:b.2r.1G&&(d=!0,c.4R());1z e.en:if(!b.2r.1G)1e;b.2r.4b(c);1O;1z e.aG:b.1h.48(b.7d),b.4y(c);1O;3m:8g(b.cN),b.cN=5u(1b(){b.7d!=b.1h.48()&&(b.ad=1p,b.bD(1p,c))},b.1f.9T)}}).2d("a3.4e",1b(a){d&&(d=!1,a.4R())}).2d("2q.4e",1b(){if(b.1f.1s)1e;b.ad=1p,b.7v=b.1h.48()}).2d("5e.4e",1b(a){if(b.1f.1s)1e;8g(b.cN),b.bB=5u(1b(){b.4y(a),b.4n(a)},9j)}),1a.cR(),1a.2r=a("<cS></cS>").1t("1c-4e").2P(a(1a.1f.2P||"2l",c)[0]).6E(1b(c){1d d=b.2r.1h[0];a(c.2c).5r(".1c-2r-1S").1o||5u(1b(){a(1u).fi("6E",1b(c){c.2c!==b.1h[0]&&c.2c!==d&&!a.1c.4I(d,c.2c)&&b.4y()})},1),5u(1b(){8g(b.bB)},13)}).2r({2q:1b(a,c){1d d=c.1S.1v("1S.4e");!1!==b.1B("2q",a,{1S:d})&&/^9R/.2i(a.bg.3X)&&b.1h.48(d.2u)},1F:1b(a,d){1d e=d.1S.1v("1S.4e"),f=b.7v;b.1h[0]!==c.aQ&&(b.1h.2q(),b.7v=f,5u(1b(){b.7v=f,b.ad=e},1)),!1!==b.1B("4b",a,{1S:e})&&b.1h.48(e.2u),b.7d=b.1h.48(),b.4y(a),b.ad=e},5e:1b(a,c){b.2r.1h.is(":4u")&&b.1h.48()!==b.7d&&b.1h.48(b.7d)}}).2A(1a.1h.2A()+1).1j({1i:0,1g:0}).1J().1v("2r"),a.fn.7L&&1a.2r.1h.7L(),b.cU=1b(){b.1h.3O("4e")},a(2N).2d("fl",b.cU)},3b:1b(){1a.1h.1y("1c-4e-1W").3O("4e").3O("4U").3O("2Y-4e").3O("2Y-eZ"),1a.2r.1h.2B(),a(2N).31("fl",1a.cU),a.4m.3p.3b.2g(1a)},3F:1b(b,c){a.4m.3p.3F.1P(1a,29),b==="69"&&1a.cR(),b==="2P"&&1a.2r.1h.2P(a(c||"2l",1a.1h[0].9D)[0]),b==="1s"&&c&&1a.6Q&&1a.6Q.8b()},cR:1b(){1d b=1a,c,d;a.81(1a.1f.69)?(c=1a.1f.69,1a.69=1b(b,d){d(a.1c.4e.2t(c,b.7d))}):2j 1a.1f.69=="3S"?(d=1a.1f.69,1a.69=1b(c,e){b.6Q&&b.6Q.8b(),b.6Q=a.fp({cX:d,1v:c,jK:"jI",cY:1b(a,b){e(a)},cZ:1b(){e([])}})}):1a.69=1a.1f.69},bD:1b(a,b){a=a!=1p?a:1a.1h.48(),1a.7d=1a.1h.48();if(a.1o<1a.1f.io)1e 1a.4y(b);8g(1a.bB);if(1a.1B("bD",b)===!1)1e;1e 1a.fv(a)},fv:1b(a){1a.bM++,1a.1h.1t("1c-4e-fw"),1a.69({7d:a},1a.fy())},fy:1b(){1d a=1a,b=++c;1e 1b(d){b===c&&a.fz(d),a.bM--,a.bM||a.1h.1y("1c-4e-fw")}},fz:1b(a){!1a.1f.1s&&a&&a.1o?(a=1a.fB(a),1a.fC(a),1a.1B("bz")):1a.4y()},4y:1b(a){8g(1a.bB),1a.2r.1h.is(":4u")&&(1a.2r.1h.1J(),1a.2r.6w(),1a.1B("4y",a))},4n:1b(a){1a.7v!==1a.1h.48()&&1a.1B("64",a,{1S:1a.ad})},fB:1b(b){1e b.1o&&b[0].4j&&b[0].2u?b:a.5h(b,1b(b){1e 2j b=="3S"?{4j:b,2u:b}:a.1X({4j:b.4j||b.2u,2u:b.2u||b.4j},b)})},fC:1b(b){1d c=1a.2r.1h.a7().2A(1a.1h.2A()+1);1a.fG(c,b),1a.2r.6w(),1a.2r.5t(),c.1K(),1a.fH(),c.1q(a.1X({8V:1a.1h},1a.1f.1q)),1a.1f.im&&1a.2r.3C(2o a.fF("90"))},fH:1b(){1d a=1a.2r.1h;a.3f(1C.2F(a.1l("").3f()+1,1a.1h.3f()))},fG:1b(b,c){1d d=1a;a.1H(c,1b(a,c){d.fJ(b,c)})},fJ:1b(b,c){1e a("<li></li>").1v("1S.4e",c).4Y(a("<a></a>").4K(c.4j)).2P(b)},bI:1b(a,b){if(!1a.2r.1h.is(":4u")){1a.bD(1p,b);1e}if(1a.2r.5q()&&/^7v/.2i(a)||1a.2r.5F()&&/^3C/.2i(a)){1a.1h.48(1a.7d),1a.2r.6w();1e}1a.2r[a](b)},1M:1b(){1e 1a.2r.1h},8u:1b(a,b){if(!1a.eX||1a.2r.1h.is(":4u"))1a.bI(a,b),b.4R()}}),a.1X(a.1c.4e,{fM:1b(a){1e a.6p(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")},2t:1b(b,c){1d d=2o fN(a.1c.4e.fM(c),"i");1e a.d6(b,1b(a){1e d.2i(a.4j||a.2u||a)})}})}(2X),1b(a){a.1M("1c.2r",{4T:1b(){1d b=1a;1a.1h.1t("1c-2r 1c-1M 1c-1M-2W 1c-26-2R").1Z({4U:"jH","2Y-jG":"1c-1G-d8"}).1I(1b(c){if(!a(c.2c).5r(".1c-2r-1S a").1o)1e;c.4R(),b.4b(c)}),1a.5t()},5t:1b(){1d b=1a,c=1a.1h.3R("li:4F(.1c-2r-1S):fS(a)").1t("1c-2r-1S").1Z("4U","d8");c.3R("a").1t("1c-26-2R").1Z("dY",-1).c2(1b(c){b.4V(c,a(1a).2a())}).c3(1b(){b.6w()})},4V:1b(a,b){1a.6w();if(1a.7o()){1d c=b.1n().1i-1a.1h.1n().1i,d=1a.1h.2e(),e=1a.1h.1k();c<0?1a.1h.2e(d+c):c>=e&&1a.1h.2e(d+c-e+b.1k())}1a.1G=b.eq(0).3R("a").1t("1c-1w-3L").1Z("id","1c-1G-d8").4w(),1a.1B("2q",a,{1S:b})},6w:1b(){if(!1a.1G)1e;1a.1G.3R("a").1y("1c-1w-3L").3O("id"),1a.1B("5e"),1a.1G=1p},3C:1b(a){1a.d9("3C",".1c-2r-1S:5q",a)},7v:1b(a){1a.d9("4v",".1c-2r-1S:5F",a)},5q:1b(){1e 1a.1G&&!1a.1G.jF(".1c-2r-1S").1o},5F:1b(){1e 1a.1G&&!1a.1G.jE(".1c-2r-1S").1o},d9:1b(a,b,c){if(!1a.1G){1a.4V(c,1a.1h.3R(b));1e}1d d=1a.1G[a+"jD"](".1c-2r-1S").eq(0);d.1o?1a.4V(c,d):1a.4V(c,1a.1h.3R(b))},f3:1b(b){if(1a.7o()){if(!1a.1G||1a.5F()){1a.4V(b,1a.1h.3R(".1c-2r-1S:5q"));1e}1d c=1a.1G.1n().1i,d=1a.1h.1k(),e=1a.1h.3R(".1c-2r-1S").2t(1b(){1d b=a(1a).1n().1i-c-d+a(1a).1k();1e b<10&&b>-10});e.1o||(e=1a.1h.3R(".1c-2r-1S:5F")),1a.4V(b,e)}2K 1a.4V(b,1a.1h.3R(".1c-2r-1S").2t(!1a.1G||1a.5F()?":5q":":5F"))},f2:1b(b){if(1a.7o()){if(!1a.1G||1a.5q()){1a.4V(b,1a.1h.3R(".1c-2r-1S:5F"));1e}1d c=1a.1G.1n().1i,d=1a.1h.1k(),e=1a.1h.3R(".1c-2r-1S").2t(1b(){1d b=a(1a).1n().1i-c+d-a(1a).1k();1e b<10&&b>-10});e.1o||(e=1a.1h.3R(".1c-2r-1S:5q")),1a.4V(b,e)}2K 1a.4V(b,1a.1h.3R(".1c-2r-1S").2t(!1a.1G||1a.5q()?":5F":":5q"))},7o:1b(){1e 1a.1h.1k()<1a.1h[a.fn.8c?"8c":"1Z"]("7i")},4b:1b(a){1a.1B("1F",a,{1S:1a.1G})}})}(2X),1b(a,b){1d c,d,e,f,g="1c-1L 1c-1M 1c-1w-3m 1c-26-2R",h="1c-1w-3L 1c-1w-1G ",i="1c-1L-4t-8R 1c-1L-3i-8R 1c-1L-4K-4t 1c-1L-4K-3i-6C 1c-1L-4K-3i-6D 1c-1L-4K-8R",j=1b(){1d b=a(1a).2v(":1c-1L");5u(1b(){b.1L("5t")},1)},k=1b(b){1d c=b.95,d=b.dg,e=a([]);1e c&&(d?e=a(d).2v("[95=\'"+c+"\']"):e=a("[95=\'"+c+"\']",b.9D).2t(1b(){1e!1a.dg})),e};a.1M("1c.1L",{1f:{1s:1p,4K:!0,4j:1p,4t:{6C:1p,6D:1p}},4T:1b(){1a.1h.5r("dg").31("6h.1L").2d("6h.1L",j),2j 1a.1f.1s!="eF"?1a.1f.1s=!!1a.1h.7G("1s"):1a.1h.7G("1s",1a.1f.1s),1a.fZ(),1a.dh=!!1a.3w.1Z("3N");1d b=1a,h=1a.1f,i=1a.3X==="83"||1a.3X==="84",l="1c-1w-3L"+(i?"":" 1c-1w-1G"),m="1c-1w-2q";h.4j===1p&&(h.4j=1a.3w.4k()),1a.3w.1t(g).1Z("4U","1L").2d("c2.1L",1b(){if(h.1s)1e;a(1a).1t("1c-1w-3L"),1a===c&&a(1a).1t("1c-1w-1G")}).2d("c3.1L",1b(){if(h.1s)1e;a(1a).1y(l)}).2d("1I.1L",1b(a){h.1s&&(a.4R(),a.hi())}),1a.1h.2d("2q.1L",1b(){b.3w.1t(m)}).2d("5e.1L",1b(){b.3w.1y(m)}),i&&(1a.1h.2d("64.1L",1b(){if(f)1e;b.5t()}),1a.3w.2d("6E.1L",1b(a){if(h.1s)1e;f=!1,d=a.3h,e=a.3k}).2d("7w.1L",1b(a){if(h.1s)1e;if(d!==a.3h||e!==a.3k)f=!0})),1a.3X==="83"?1a.3w.2d("1I.1L",1b(){if(h.1s||f)1e!1;a(1a).7Q("1c-1w-1G"),b.3w.1Z("2Y-6Y",b.1h[0].bl)}):1a.3X==="84"?1a.3w.2d("1I.1L",1b(){if(h.1s||f)1e!1;a(1a).1t("1c-1w-1G"),b.3w.1Z("2Y-6Y","7C");1d c=b.1h[0];k(c).4F(c).5h(1b(){1e a(1a).1L("1M")[0]}).1y("1c-1w-1G").1Z("2Y-6Y","7B")}):(1a.3w.2d("6E.1L",1b(){if(h.1s)1e!1;a(1a).1t("1c-1w-1G"),c=1a,a(1u).fi("7w",1b(){c=1p})}).2d("7w.1L",1b(){if(h.1s)1e!1;a(1a).1y("1c-1w-1G")}).2d("6f.1L",1b(b){if(h.1s)1e!1;(b.2I==a.1c.2I.aP||b.2I==a.1c.2I.aC)&&a(1a).1t("1c-1w-1G")}).2d("9F.1L",1b(){a(1a).1y("1c-1w-1G")}),1a.3w.is("a")&&1a.3w.9F(1b(b){b.2I===a.1c.2I.aP&&a(1a).1I()})),1a.3F("1s",h.1s),1a.dr()},fZ:1b(){1a.1h.is(":83")?1a.3X="83":1a.1h.is(":84")?1a.3X="84":1a.1h.is("1W")?1a.3X="1W":1a.3X="1L";if(1a.3X==="83"||1a.3X==="84"){1d a=1a.1h.4M().2t(":5F"),b="4j[1T=\'"+1a.1h.1Z("id")+"\']";1a.3w=a.2v(b),1a.3w.1o||(a=a.1o?a.g6():1a.1h.g6(),1a.3w=a.2t(b),1a.3w.1o||(1a.3w=a.2v(b))),1a.1h.1t("1c-1r-3I-g7");1d c=1a.1h.is(":bl");c&&1a.3w.1t("1c-1w-1G"),1a.3w.1Z("2Y-6Y",c)}2K 1a.3w=1a.1h},1M:1b(){1e 1a.3w},3b:1b(){1a.1h.1y("1c-1r-3I-g7"),1a.3w.1y(g+" "+h+" "+i).3O("4U").3O("2Y-6Y").4k(1a.3w.2v(".1c-1L-4K").4k()),1a.dh||1a.3w.3O("3N"),a.4m.3p.3b.2g(1a)},3F:1b(b,c){a.4m.3p.3F.1P(1a,29);if(b==="1s"){c?1a.1h.7G("1s",!0):1a.1h.7G("1s",!1);1e}1a.dr()},5t:1b(){1d b=1a.1h.is(":1s");b!==1a.1f.1s&&1a.3F("1s",b),1a.3X==="84"?k(1a.1h[0]).1H(1b(){a(1a).is(":bl")?a(1a).1L("1M").1t("1c-1w-1G").1Z("2Y-6Y","7C"):a(1a).1L("1M").1y("1c-1w-1G").1Z("2Y-6Y","7B")}):1a.3X==="83"&&(1a.1h.is(":bl")?1a.3w.1t("1c-1w-1G").1Z("2Y-6Y","7C"):1a.3w.1y("1c-1w-1G").1Z("2Y-6Y","7B"))},dr:1b(){if(1a.3X==="1W"){1a.1f.4j&&1a.1h.48(1a.1f.4j);1e}1d b=1a.3w.1y(i),c=a("<2M></2M>",1a.1h[0].9D).1t("1c-1L-4K").4k(1a.1f.4j).2P(b.a7()).4K(),d=1a.1f.4t,e=d.6C&&d.6D,f=[];d.6C||d.6D?(1a.1f.4K&&f.3n("1c-1L-4K-3i"+(e?"s":d.6C?"-6C":"-6D")),d.6C&&b.gG("<2M 2C=\'1c-1L-3i-6C 1c-3i "+d.6C+"\'></2M>"),d.6D&&b.4Y("<2M 2C=\'1c-1L-3i-6D 1c-3i "+d.6D+"\'></2M>"),1a.1f.4K||(f.3n(e?"1c-1L-4t-8R":"1c-1L-3i-8R"),1a.dh||b.1Z("3N",c))):f.3n("1c-1L-4K-8R"),b.1t(f.6x(" "))}}),a.1M("1c.bj",{1f:{2T:":1L, :jC, :6h, :83, :84, a, :1v(1L)"},4T:1b(){1a.1h.1t("1c-bj")},a0:1b(){1a.5t()},3F:1b(b,c){b==="1s"&&1a.8i.1L("5Q",b,c),a.4m.3p.3F.1P(1a,29)},5t:1b(){1d b=1a.1h.1j("66")==="dv";1a.8i=1a.1h.2v(1a.1f.2T).2t(":1c-1L").1L("5t").4w().4F(":1c-1L").1L().4w().5h(1b(){1e a(1a).1L("1M")[0]}).1y("1c-26-2R 1c-26-1g 1c-26-2O").2t(":5q").1t(b?"1c-26-2O":"1c-26-1g").4w().2t(":5F").1t(b?"1c-26-1g":"1c-26-2O").4w().4w()},3b:1b(){1a.1h.1y("1c-bj"),1a.8i.5h(1b(){1e a(1a).1L("1M")[0]}).1y("1c-26-1g 1c-26-2O").4w().1L("3b"),a.4m.3p.3b.2g(1a)}})}(2X),1b($,ba){1b 8E(){1a.ge=!1,1a.6g=1p,1a.8u=!1,1a.76=[],1a.6G=!1,1a.7V=!1,1a.bd="1c-1m-2b",1a.b8="1c-1m-5y",1a.gl="1c-1m-4Y",1a.b7="1c-1m-5K",1a.dF="1c-1m-1Y",1a.jB="1c-1m-1s",1a.dH="1c-1m-jA",1a.dJ="1c-1m-6s-jz",1a.b2="1c-1m-jv-fL-5M",1a.dN=[],1a.dN[""]={ae:"ju",gy:"js",gA:"jr",gC:"jq",7g:["jp","jo","jn","jk","gJ","jj","ji","jh","jg","je","jd","jb"],7f:["ja","j9","j8","j7","gJ","j6","j5","j4","j2","iZ","iY","iX"],72:["iW","iV","iU","iT","iS","iR","iQ"],6T:["iP","iO","iN","iM","iL","iK","iJ"],hh:["iI","iH","iD","iC","iB","iA","iz"],hp:"iy",6z:"mm/dd/8k",ht:0,8B:!1,hu:!1,hv:""},1a.5c={hx:"2q",ew:"hy",ex:{},hA:1p,hB:"",hC:"...",hD:"",hE:!1,hF:!1,hG:!1,ey:!1,hI:!1,hJ:!1,hK:"c-10:c+10",hL:!1,hM:!1,hN:!1,ez:1a.eA,ak:"+10",eC:1p,eD:1p,2m:"ix",hS:1p,hT:1p,aJ:1p,hV:1p,hW:1p,hX:1,eG:0,8q:1,9M:12,i2:"",i3:"",i4:!0,i5:!1,i6:!1,1s:!1},$.1X(1a.5c,1a.dN[""]),1a.2H=eI($(\'<2b id="\'+1a.bd+\'" 2C="1c-1m 1c-1M 1c-1M-2W 1c-1r-8v 1c-26-2R"></2b>\'))}1b eI(a){1d b="1L, .1c-1m-4v, .1c-1m-3C, .1c-1m-aD 8I a";1e a.2d("ic",1b(a){1d c=$(a.2c).5r(b);if(!c.1o)1e;c.1y("1c-1w-3L 1c-1m-4v-3L 1c-1m-3C-3L")}).2d("90",1b(c){1d d=$(c.2c).5r(b);if($.1m.a9(aA.5y?a.2a()[0]:aA.1W[0])||!d.1o)1e;d.4M(".1c-1m-aD").2v("a").1y("1c-1w-3L"),d.1t("1c-1w-3L"),d.4f("1c-1m-4v")&&d.1t("1c-1m-4v-3L"),d.4f("1c-1m-3C")&&d.1t("1c-1m-3C-3L")})}1b a6(a,b){$.1X(a,b);1T(1d c in b)if(b[c]==1p||b[c]==ba)a[c]=b[c];1e a}1b 81(a){1e a&&($.3e.6y&&2j a=="6b"&&a.1o||a.6e&&a.6e.ay().5J(/\\9a\\(\\)/))}$.1X($.1c,{1m:{43:"1.8.23"}});1d be="1m",73=(2o 2x).3E(),aA;$.1X(8E.3p,{5O:"iu",8L:4,ar:1b(){1a.ge&&it.ar.1P("",29)},lc:1b(){1e 1a.2H},ir:1b(a){1e a6(1a.5c,a||{}),1a},ip:1b(a,b){1d c=1p;1T(1d d in 1a.5c){1d e=a.ac("eQ:"+d);if(e){c=c||{};6L{c[d]=iv(e)}6K(iw){c[d]=e}}}1d f=a.5m.4N(),5y=f=="2b"||f=="2M";a.id||(1a.7O+=1,a.id="dp"+1a.7O);1d g=1a.es($(a),5y);g.57=$.1X({},b||{},c||{}),f=="1W"?1a.hm(a,g):5y&&1a.hl(a,g)},es:1b(a,b){1d c=a[0].id.6p(/([^A-iE-iF-iG-])/g,"\\\\\\\\$1");1e{id:c,1W:a,5U:0,5n:0,5H:0,7a:0,7l:0,5y:b,2H:b?eI($(\'<2b 2C="\'+1a.b8+\' 1c-1m 1c-1M 1c-1M-2W 1c-1r-8v 1c-26-2R"></2b>\')):1a.2H}},hm:1b(a,b){1d c=$(a);b.4Y=$([]),b.5K=$([]);if(c.4f(1a.5O))1e;1a.ej(c,b),c.1t(1a.5O).6f(1a.aR).a3(1a.eh).9F(1a.eg).2d("h9.1m",1b(a,c,d){b.57[c]=d}).2d("h8.1m",1b(a,c){1e 1a.1E(b,c)}),1a.ed(b),$.1v(a,be,b),b.57.1s&&1a.eb(a)},ej:1b(a,b){1d c=1a.1E(b,"hB"),d=1a.1E(b,"8B");b.4Y&&b.4Y.2B(),c&&(b.4Y=$(\'<2M 2C="\'+1a.gl+\'">\'+c+"</2M>"),a[d?"cI":"aa"](b.4Y)),a.31("2q",1a.7z),b.5K&&b.5K.2B();1d e=1a.1E(b,"hx");(e=="2q"||e=="7A")&&a.2q(1a.7z);if(e=="1L"||e=="7A"){1d f=1a.1E(b,"hC"),g=1a.1E(b,"hD");b.5K=$(1a.1E(b,"hE")?$("<8Z/>").1t(1a.b7).1Z({e9:g,h2:f,3N:f}):$(\'<1L 3X="1L"></1L>\').1t(1a.b7).4k(g==""?f:$("<8Z/>").1Z({e9:g,h2:f,3N:f}))),a[d?"cI":"aa"](b.5K),b.5K.1I(1b(){1e $.1m.6G&&$.1m.7Z==a[0]?$.1m.6i():$.1m.6G&&$.1m.7Z!=a[0]?($.1m.6i(),$.1m.7z(a[0])):$.1m.7z(a[0]),!1})}},ed:1b(a){if(1a.1E(a,"i6")&&!a.5y){1d b=2o 2x(j0,11,20),c=1a.1E(a,"6z");if(c.5J(/[j1]/)){1d d=1b(a){1d b=0,c=0;1T(1d d=0;d<a.1o;d++)a[d].1o>b&&(b=a[d].1o,c=d);1e c};b.gZ(d(1a.1E(a,c.5J(/j3/)?"7g":"7f"))),b.9k(d(1a.1E(a,c.5J(/gX/)?"72":"6T"))+20-b.9Q())}a.1W.1Z("28",1a.79(a,b).1o)}},hl:1b(a,b){1d c=$(a);if(c.4f(1a.5O))1e;c.1t(1a.5O).4Y(b.2H).2d("h9.1m",1b(a,c,d){b.57[c]=d}).2d("h8.1m",1b(a,c){1e 1a.1E(b,c)}),$.1v(a,be,b),1a.aU(b,1a.aW(b),!0),1a.7b(b),1a.8U(b),b.57.1s&&1a.eb(a),b.2H.1j("6M","bN")},jc:1b(a,b,c,d,e){1d f=1a.gP;if(!f){1a.7O+=1;1d g="dp"+1a.7O;1a.6J=$(\'<1W 3X="4K" id="\'+g+\'" 3a="1q: 2Q; 1i: -dU; 1l: jf;"/>\'),1a.6J.6f(1a.aR),$("2l").4Y(1a.6J),f=1a.gP=1a.es(1a.6J,!1),f.57={},$.1v(1a.6J[0],be,f)}a6(f.57,d||{}),b=b&&b.6e==2x?1a.79(f,b):b,1a.6J.48(b),1a.5x=e?e.1o?e:[e.3h,e.3k]:1p;if(!1a.5x){1d h=1u.5E.gL,i=1u.5E.gK,j=1u.5E.2k||1u.2l.2k,k=1u.5E.2e||1u.2l.2e;1a.5x=[h/2-3U+j,i/2-9j+k]}1e 1a.6J.1j("1g",1a.5x[0]+20+"3J").1j("1i",1a.5x[1]+"3J"),f.57.aJ=c,1a.7V=!0,1a.2H.1t(1a.dF),1a.7z(1a.6J[0]),$.9O&&$.9O(1a.2H),$.1v(1a.6J[0],be,f),1a},jl:1b(a){1d b=$(a),c=$.1v(a,be);if(!b.4f(1a.5O))1e;1d d=a.5m.4N();$.4C(a,be),d=="1W"?(c.4Y.2B(),c.5K.2B(),b.1y(1a.5O).31("2q",1a.7z).31("6f",1a.aR).31("a3",1a.eh).31("9F",1a.eg)):(d=="2b"||d=="2M")&&b.1y(1a.5O).a7()},jm:1b(a){1d b=$(a),c=$.1v(a,be);if(!b.4f(1a.5O))1e;1d d=a.5m.4N();if(d=="1W")a.1s=!1,c.5K.2t("1L").1H(1b(){1a.1s=!1}).4w().2t("8Z").1j({2s:"1.0",4x:""});2K if(d=="2b"||d=="2M"){1d e=b.3R("."+1a.b8);e.3R().1y("1c-1w-1s"),e.2v("4b.1c-1m-8h, 4b.1c-1m-8d").3O("1s")}1a.76=$.5h(1a.76,1b(b){1e b==a?1p:b})},eb:1b(a){1d b=$(a),c=$.1v(a,be);if(!b.4f(1a.5O))1e;1d d=a.5m.4N();if(d=="1W")a.1s=!0,c.5K.2t("1L").1H(1b(){1a.1s=!0}).4w().2t("8Z").1j({2s:"0.5",4x:"3m"});2K if(d=="2b"||d=="2M"){1d e=b.3R("."+1a.b8);e.3R().1t("1c-1w-1s"),e.2v("4b.1c-1m-8h, 4b.1c-1m-8d").1Z("1s","1s")}1a.76=$.5h(1a.76,1b(b){1e b==a?1p:b}),1a.76[1a.76.1o]=a},a9:1b(a){if(!a)1e!1;1T(1d b=0;b<1a.76.1o;b++)if(1a.76[b]==a)1e!0;1e!1},4P:1b(a){6L{1e $.1v(a,be)}6K(b){7u"gB 2f 1v 1T 1a 1m"}},gz:1b(a,b,c){1d d=1a.4P(a);if(29.1o==2&&2j b=="3S")1e b=="jt"?$.1X({},$.1m.5c):d?b=="2R"?$.1X({},d.57):1a.1E(d,b):1p;1d e=b||{};2j b=="3S"&&(e={},e[b]=c);if(d){1a.6g==d&&1a.6i();1d f=1a.gx(a,!0),g=1a.7c(d,"3K"),h=1a.7c(d,"2F");a6(d.57,e),g!==1p&&e.6z!==ba&&e.eC===ba&&(d.57.eC=1a.79(d,g)),h!==1p&&e.6z!==ba&&e.eD===ba&&(d.57.eD=1a.79(d,h)),1a.ej($(a),d),1a.ed(d),1a.aU(d,f),1a.8U(d),1a.7b(d)}},jw:1b(a,b,c){1a.gz(a,b,c)},jx:1b(a){1d b=1a.4P(a);b&&1a.7b(b)},jy:1b(a,b){1d c=1a.4P(a);c&&(1a.aU(c,b),1a.7b(c),1a.8U(c))},gx:1b(a,b){1d c=1a.4P(a);1e c&&!c.5y&&1a.b4(c,b),c?1a.b5(c):1p},aR:1b(a){1d b=$.1m.4P(a.2c),c=!0,d=b.2H.is(".1c-1m-dv");b.8u=!0;if($.1m.6G)5g(a.2I){1z 9:$.1m.6i(),c=!1;1O;1z 13:1d e=$("8I."+$.1m.b2+":4F(."+$.1m.dJ+")",b.2H);e[0]&&$.1m.dG(a.2c,b.5n,b.5H,e[0]);1d f=$.1m.1E(b,"aJ");if(f){1d g=$.1m.79(b);f.1P(b.1W?b.1W[0]:1p,[g,b])}2K $.1m.6i();1e!1;1z 27:$.1m.6i();1O;1z 33:$.1m.5A(a.2c,a.49?-$.1m.1E(b,"9M"):-$.1m.1E(b,"8q"),"M");1O;1z 34:$.1m.5A(a.2c,a.49?+$.1m.1E(b,"9M"):+$.1m.1E(b,"8q"),"M");1O;1z 35:(a.49||a.4L)&&$.1m.fU(a.2c),c=a.49||a.4L;1O;1z 36:(a.49||a.4L)&&$.1m.da(a.2c),c=a.49||a.4L;1O;1z 37:(a.49||a.4L)&&$.1m.5A(a.2c,d?1:-1,"D"),c=a.49||a.4L,a.bg.cj&&$.1m.5A(a.2c,a.49?-$.1m.1E(b,"9M"):-$.1m.1E(b,"8q"),"M");1O;1z 38:(a.49||a.4L)&&$.1m.5A(a.2c,-7,"D"),c=a.49||a.4L;1O;1z 39:(a.49||a.4L)&&$.1m.5A(a.2c,d?-1:1,"D"),c=a.49||a.4L,a.bg.cj&&$.1m.5A(a.2c,a.49?+$.1m.1E(b,"9M"):+$.1m.1E(b,"8q"),"M");1O;1z 40:(a.49||a.4L)&&$.1m.5A(a.2c,7,"D"),c=a.49||a.4L;1O;3m:c=!1}2K a.2I==36&&a.49?$.1m.7z(1a):c=!1;c&&(a.4R(),a.fP())},eh:1b(a){1d b=$.1m.4P(a.2c);if($.1m.1E(b,"i4")){1d c=$.1m.fs($.1m.1E(b,"6z")),d=8C.jJ(a.fr==ba?a.2I:a.fr);1e a.49||a.4L||d<" "||!c||c.dW(d)>-1}},eg:1b(a){1d b=$.1m.4P(a.2c);if(b.1W.48()!=b.bJ)6L{1d c=$.1m.bK($.1m.1E(b,"6z"),b.1W?b.1W.48():1p,$.1m.7e(b));c&&($.1m.b4(b),$.1m.8U(b),$.1m.7b(b))}6K(d){$.1m.ar(d)}1e!0},7z:1b(a){a=a.2c||a,a.5m.4N()!="1W"&&(a=$("1W",a.4p)[0]);if($.1m.a9(a)||$.1m.7Z==a)1e;1d b=$.1m.4P(a);$.1m.6g&&$.1m.6g!=b&&($.1m.6g.2H.3M(!0,!0),b&&$.1m.6G&&$.1m.6i($.1m.6g.1W[0]));1d c=$.1m.1E(b,"hT"),d=c?c.1P(a,[a,b]):{};if(d===!1)1e;a6(b.57,d),b.bJ=1p,$.1m.7Z=a,$.1m.b4(b),$.1m.7V&&(a.2u=""),$.1m.5x||($.1m.5x=$.1m.ij(a),$.1m.5x[1]+=a.5k);1d e=!1;$(a).4M().1H(1b(){1e e|=$(1a).1j("1q")=="4c",!e}),e&&$.3e.jP&&($.1m.5x[0]-=1u.5E.2k,$.1m.5x[1]-=1u.5E.2e);1d f={1g:$.1m.5x[0],1i:$.1m.5x[1]};$.1m.5x=1p,b.2H.a7(),b.2H.1j({1q:"2Q",6M:"bN",1i:"-ct"}),$.1m.7b(b),f=$.1m.ih(b,f,e),b.2H.1j({1q:$.1m.7V&&$.9O?"6P":e?"4c":"2Q",6M:"7s",1g:f.1g+"3J",1i:f.1i+"3J"});if(!b.5y){1d g=$.1m.1E(b,"ew"),h=$.1m.1E(b,"2m"),i=1b(){1d a=b.2H.2v("a5.1c-1m-cq");if(!!a.1o){1d c=$.1m.cn(b.2H);a.1j({1g:-c[0],1i:-c[1],1l:b.2H.3f(),1k:b.2H.3o()})}};b.2H.2A($(a).2A()+1),$.1m.6G=!0,$.1A&&$.1A[g]?b.2H.1K(g,$.1m.1E(b,"ex"),h,i):b.2H[g||"1K"](g?h:1p,i),(!g||!h)&&i(),b.1W.is(":4u")&&!b.1W.is(":1s")&&b.1W.2q(),$.1m.6g=b}},7b:1b(a){1d b=1a;b.8L=4;1d c=$.1m.cn(a.2H);aA=a,a.2H.a7().4Y(1a.i0(a)),1a.hO(a);1d d=a.2H.2v("a5.1c-1m-cq");!d.1o||d.1j({1g:-c[0],1i:-c[1],1l:a.2H.3f(),1k:a.2H.3o()}),a.2H.2v("."+1a.b2+" a").90();1d e=1a.bR(a),f=e[1],g=17;a.2H.1y("1c-1m-a8-2 1c-1m-a8-3 1c-1m-a8-4").1l(""),f>1&&a.2H.1t("1c-1m-a8-"+f).1j("1l",g*f+"em"),a.2H[(e[0]!=1||e[1]!=1?"2Z":"2B")+"aF"]("1c-1m-a8"),a.2H[(1a.1E(a,"8B")?"2Z":"2B")+"aF"]("1c-1m-dv"),a==$.1m.6g&&$.1m.6G&&a.1W&&a.1W.is(":4u")&&!a.1W.is(":1s")&&a.1W[0]!=1u.aQ&&a.1W.2q();if(a.5B){1d h=a.5B;5u(1b(){h===a.5B&&a.5B&&a.2H.2v("4b.1c-1m-8d:5q").fe(a.5B),h=a.5B=1p},0)}},cn:1b(a){1d b=1b(a){1e{jZ:1,k0:2,k1:3}[a]||a};1e[5i(b(a.1j("9g-1g-1l"))),5i(b(a.1j("9g-1i-1l")))]},ih:1b(a,b,c){1d d=a.2H.3f(),e=a.2H.3o(),f=a.1W?a.1W.3f():0,g=a.1W?a.1W.3o():0,h=1u.5E.gL+(c?0:$(1u).2k()),i=1u.5E.gK+(c?0:$(1u).2e());1e b.1g-=1a.1E(a,"8B")?d-f:0,b.1g-=c&&b.1g==a.1W.1n().1g?$(1u).2k():0,b.1i-=c&&b.1i==a.1W.1n().1i+g?$(1u).2e():0,b.1g-=1C.3K(b.1g,b.1g+d>h&&h>d?1C.4D(b.1g+d-h):0),b.1i-=1C.3K(b.1i,b.1i+e>i&&i>e?1C.4D(e+g):0),b},ij:1b(a){1d b=1a.4P(a),c=1a.1E(b,"8B");6B(a&&(a.3X=="3I"||a.cl!=1||$.9i.i1.3I(a)))a=a[c?"k2":"hk"];1d d=$(a).1n();1e[d.1g,d.1i]},6i:1b(a){1d b=1a.6g;if(!b||a&&b!=$.1v(a,be))1e;if(1a.6G){1d c=1a.1E(b,"ew"),d=1a.1E(b,"2m"),e=1b(){$.1m.h0(b)};$.1A&&$.1A[c]?b.2H.1J(c,$.1m.1E(b,"ex"),d,e):b.2H[c=="k4"?"k5":c=="hy"?"k6":"1J"](c?d:1p,e),c||e(),1a.6G=!1;1d f=1a.1E(b,"hW");f&&f.1P(b.1W?b.1W[0]:1p,[b.1W?b.1W.48():"",b]),1a.7Z=1p,1a.7V&&(1a.6J.1j({1q:"2Q",1g:"0",1i:"-dU"}),$.9O&&($.k7(),$("2l").4Y(1a.2H))),1a.7V=!1}},h0:1b(a){a.2H.1y(1a.dF).31(".1c-1m-aD")},gY:1b(a){if(!$.1m.6g)1e;1d b=$(a.2c),c=$.1m.4P(b[0]);(b[0].id!=$.1m.bd&&b.4M("#"+$.1m.bd).1o==0&&!b.4f($.1m.5O)&&!b.5r("."+$.1m.b7).1o&&$.1m.6G&&(!$.1m.7V||!$.9O)||b.4f($.1m.5O)&&$.1m.6g!=c)&&$.1m.6i()},5A:1b(a,b,c){1d d=$(a),e=1a.4P(d[0]);if(1a.a9(d[0]))1e;1a.bG(e,b+(c=="M"?1a.1E(e,"eG"):0),c),1a.7b(e)},da:1b(a){1d b=$(a),c=1a.4P(b[0]);if(1a.1E(c,"ey")&&c.5X)c.5U=c.5X,c.7a=c.5n=c.7q,c.7l=c.5H=c.6N;2K{1d d=2o 2x;c.5U=d.4l(),c.7a=c.5n=d.4s(),c.7l=c.5H=d.3H()}1a.an(c),1a.5A(b)},dl:1b(a,b,c){1d d=$(a),e=1a.4P(d[0]);e["1F"+(c=="M"?"gb":"g9")]=e["kk"+(c=="M"?"gb":"g9")]=1x(b.1f[b.kl].2u,10),1a.an(e),1a.5A(d)},dG:1b(a,b,c,d){1d e=$(a);if($(d).4f(1a.dH)||1a.a9(e[0]))1e;1d f=1a.4P(e[0]);f.5U=f.5X=$("a",d).4k(),f.5n=f.7q=b,f.5H=f.6N=c,1a.ds(a,1a.79(f,f.5X,f.7q,f.6N))},fU:1b(a){1d b=$(a),c=1a.4P(b[0]);1a.ds(b,"")},ds:1b(a,b){1d c=$(a),d=1a.4P(c[0]);b=b!=1p?b:1a.79(d),d.1W&&d.1W.48(b),1a.8U(d);1d e=1a.1E(d,"aJ");e?e.1P(d.1W?d.1W[0]:1p,[b,d]):d.1W&&d.1W.5K("64"),d.5y?1a.7b(d):(1a.6i(),1a.7Z=d.1W[0],2j d.1W[0]!="6b"&&d.1W.2q(),1a.7Z=1p)},8U:1b(a){1d b=1a.1E(a,"i2");if(b){1d c=1a.1E(a,"i3")||1a.1E(a,"6z"),d=1a.b5(a),e=1a.8S(c,d,1a.7e(a));$(b).1H(1b(){$(1a).48(e)})}},ko:1b(a){1d b=a.9Q();1e[b>0&&b<6,""]},eA:1b(a){1d b=2o 2x(a.3E());b.9k(b.4l()+4-(b.9Q()||7));1d c=b.3E();1e b.gZ(0),b.9k(1),1C.7x(1C.5T((c-b)/g2)/7)+1},bK:1b(a,b,c){if(a==1p||b==1p)7u"dA 29";b=2j b=="6b"?b.ay():b+"";if(b=="")1e 1p;1d d=(c?c.ak:1p)||1a.5c.ak;d=2j d!="3S"?d:(2o 2x).3H()%3U+1x(d,10);1d e=(c?c.6T:1p)||1a.5c.6T,f=(c?c.72:1p)||1a.5c.72,g=(c?c.7f:1p)||1a.5c.7f,h=(c?c.7g:1p)||1a.5c.7g,i=-1,j=-1,k=-1,l=-1,m=!1,n=1b(b){1d c=s+1<a.1o&&a.4W(s+1)==b;1e c&&s++,c},o=1b(a){1d c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=2o fN("^\\\\d{1,"+d+"}"),f=b.dC(r).5J(e);if(!f)7u"gB 5l at 1q "+r;1e r+=f[0].1o,1x(f[0],10)},p=1b(a,c,d){1d e=$.5h(n(a)?d:c,1b(a,b){1e[[b,a]]}).8P(1b(a,b){1e-(a[1].1o-b[1].1o)}),f=-1;$.1H(e,1b(a,c){1d d=c[1];if(b.kt(r,d.1o).4N()==d.4N())1e f=c[0],r+=d.1o,!1});if(f!=-1)1e f+1;7u"ku 95 at 1q "+r},q=1b(){if(b.4W(r)!=a.4W(s))7u"kv kw at 1q "+r;r++},r=0;1T(1d s=0;s<a.1o;s++)if(m)a.4W(s)=="\'"&&!n("\'")?m=!1:q();2K 5g(a.4W(s)){1z"d":k=o("d");1O;1z"D":p("D",e,f);1O;1z"o":l=o("o");1O;1z"m":j=o("m");1O;1z"M":j=p("M",g,h);1O;1z"y":i=o("y");1O;1z"@":1d t=2o 2x(o("@"));i=t.3H(),j=t.4s()+1,k=t.4l();1O;1z"!":1d t=2o 2x((o("!")-1a.dD)/cF);i=t.3H(),j=t.4s()+1,k=t.4l();1O;1z"\'":n("\'")?q():m=!0;1O;3m:q()}if(r<b.1o)7u"ky/kz kA kB in eQ: "+b.dC(r);i==-1?i=(2o 2x).3H():i<3U&&(i+=(2o 2x).3H()-(2o 2x).3H()%3U+(i<=d?0:-3U));if(l>-1){j=1,k=l;do{1d u=1a.89(i,j-1);if(k<=u)1O;j++,k-=u}6B(!0)}1d t=1a.4G(2o 2x(i,j-1,k));if(t.3H()!=i||t.4s()+1!=j||t.4l()!=k)7u"dA eQ";1e t},kE:"8k-mm-dd",kF:"D, dd M 8k",kG:"8k-mm-dd",kH:"D, d M y",kI:"gX, dd-M-y",kJ:"D, d M y",kK:"D, d M 8k",kL:"D, d M 8k",kM:"D, d M y",kN:"!",kO:"@",kP:"8k-mm-dd",dD:(kQ+1C.7x(kR.5)-1C.7x(19.7)+1C.7x(4.kS))*24*60*60*kU,8S:1b(a,b,c){if(!b)1e"";1d d=(c?c.6T:1p)||1a.5c.6T,e=(c?c.72:1p)||1a.5c.72,f=(c?c.7f:1p)||1a.5c.7f,g=(c?c.7g:1p)||1a.5c.7g,h=1b(b){1d c=m+1<a.1o&&a.4W(m+1)==b;1e c&&m++,c},i=1b(a,b,c){1d d=""+b;if(h(a))6B(d.1o<c)d="0"+d;1e d},j=1b(a,b,c,d){1e h(a)?d[b]:c[b]},k="",l=!1;if(b)1T(1d m=0;m<a.1o;m++)if(l)a.4W(m)=="\'"&&!h("\'")?l=!1:k+=a.4W(m);2K 5g(a.4W(m)){1z"d":k+=i("d",b.4l(),2);1O;1z"D":k+=j("D",b.9Q(),d,e);1O;1z"o":k+=i("o",1C.5T(((2o 2x(b.3H(),b.4s(),b.4l())).3E()-(2o 2x(b.3H(),0,0)).3E())/g2),3);1O;1z"m":k+=i("m",b.4s()+1,2);1O;1z"M":k+=j("M",b.4s(),f,g);1O;1z"y":k+=h("y")?b.3H():(b.fQ()%3U<10?"0":"")+b.fQ()%3U;1O;1z"@":k+=b.3E();1O;1z"!":k+=b.3E()*cF+1a.dD;1O;1z"\'":h("\'")?k+="\'":l=!0;1O;3m:k+=a.4W(m)}1e k},fs:1b(a){1d b="",c=!1,d=1b(b){1d c=e+1<a.1o&&a.4W(e+1)==b;1e c&&e++,c};1T(1d e=0;e<a.1o;e++)if(c)a.4W(e)=="\'"&&!d("\'")?c=!1:b+=a.4W(e);2K 5g(a.4W(e)){1z"d":1z"m":1z"y":1z"@":b+="kW";1O;1z"D":1z"M":1e 1p;1z"\'":d("\'")?b+="\'":c=!0;1O;3m:b+=a.4W(e)}1e b},1E:1b(a,b){1e a.57[b]!==ba?a.57[b]:1a.5c[b]},b4:1b(a,b){if(a.1W.48()==a.bJ)1e;1d c=1a.1E(a,"6z"),d=a.bJ=a.1W?a.1W.48():1p,e,f;e=f=1a.aW(a);1d g=1a.7e(a);6L{e=1a.bK(c,d,g)||f}6K(h){1a.ar(h),d=b?"":d}a.5U=e.4l(),a.7a=a.5n=e.4s(),a.7l=a.5H=e.3H(),a.5X=d?e.4l():0,a.7q=d?e.4s():0,a.6N=d?e.3H():0,1a.bG(a)},aW:1b(a){1e 1a.b3(a,1a.b1(a,1a.1E(a,"hA"),2o 2x))},b1:1b(a,b,c){1d d=1b(a){1d b=2o 2x;1e b.9k(b.4l()+a),b},e=1b(b){6L{1e $.1m.bK($.1m.1E(a,"6z"),b,$.1m.7e(a))}6K(c){}1d d=(b.4N().5J(/^c/)?$.1m.b5(a):1p)||2o 2x,e=d.3H(),f=d.4s(),g=d.4l(),h=/([+-]?[0-9]+)\\s*(d|D|w|W|m|M|y|Y)?/g,i=h.7H(b);6B(i){5g(i[2]||"d"){1z"d":1z"D":g+=1x(i[1],10);1O;1z"w":1z"W":g+=1x(i[1],10)*7;1O;1z"m":1z"M":f+=1x(i[1],10),g=1C.3K(g,$.1m.89(e,f));1O;1z"y":1z"Y":e+=1x(i[1],10),g=1C.3K(g,$.1m.89(e,f))}i=h.7H(b)}1e 2o 2x(e,f,g)},f=b==1p||b===""?c:2j b=="3S"?e(b):2j b=="5l"?6c(b)?c:d(b):2o 2x(b.3E());1e f=f&&f.ay()=="dA 2x"?c:f,f&&(f.fE(0),f.l2(0),f.l3(0),f.l4(0)),1a.4G(f)},4G:1b(a){1e a?(a.fE(a.fD()>12?a.fD()+2:0),a):1p},aU:1b(a,b,c){1d d=!b,e=a.5n,f=a.5H,g=1a.b3(a,1a.b1(a,b,2o 2x));a.5U=a.5X=g.4l(),a.7a=a.5n=a.7q=g.4s(),a.7l=a.5H=a.6N=g.3H(),(e!=a.5n||f!=a.5H)&&!c&&1a.an(a),1a.bG(a),a.1W&&a.1W.48(d?"":1a.79(a))},b5:1b(a){1d b=!a.6N||a.1W&&a.1W.48()==""?1p:1a.4G(2o 2x(a.6N,a.7q,a.5X));1e b},hO:1b(a){1d b=1a.1E(a,"8q"),c="#"+a.id.6p(/\\\\\\\\/g,"\\\\");a.2H.2v("[1v-6O]").5h(1b(){1d a={4v:1b(){2N["7P"+73].1m.5A(c,-b,"M")},3C:1b(){2N["7P"+73].1m.5A(c,+b,"M")},1J:1b(){2N["7P"+73].1m.6i()},eK:1b(){2N["7P"+73].1m.da(c)},ia:1b(){1e 2N["7P"+73].1m.dG(c,+1a.ac("1v-8h"),+1a.ac("1v-8d"),1a),!1},i9:1b(){1e 2N["7P"+73].1m.dl(c,1a,"M"),!1},i7:1b(){1e 2N["7P"+73].1m.dl(c,1a,"Y"),!1}};$(1a).2d(1a.ac("1v-4O"),a[1a.ac("1v-6O")])})},i0:1b(a){1d b=2o 2x;b=1a.4G(2o 2x(b.3H(),b.4s(),b.4l()));1d c=1a.1E(a,"8B"),d=1a.1E(a,"i5"),e=1a.1E(a,"hF"),f=1a.1E(a,"hG"),g=1a.bR(a),h=1a.1E(a,"eG"),i=1a.1E(a,"8q"),j=g[0]!=1||g[1]!=1,k=1a.4G(a.5X?2o 2x(a.6N,a.7q,a.5X):2o 2x(nV,9,9)),l=1a.7c(a,"3K"),m=1a.7c(a,"2F"),n=a.7a-h,o=a.7l;n<0&&(n+=12,o--);if(m){1d p=1a.4G(2o 2x(m.3H(),m.4s()-g[0]*g[1]+1,m.4l()));p=l&&p<l?l:p;6B(1a.4G(2o 2x(o,n,1))>p)n--,n<0&&(n=11,o--)}a.7a=n,a.7l=o;1d q=1a.1E(a,"gy");q=f?1a.8S(q,1a.4G(2o 2x(o,n-i,1)),1a.7e(a)):q;1d r=1a.eL(a,-1,o,n)?\'<a 2C="1c-1m-4v 1c-26-2R" 1v-6O="4v" 1v-4O="1I" 3N="\'+q+\'"><2M 2C="1c-3i 1c-3i-az-98-\'+(c?"e":"w")+\'">\'+q+"</2M></a>":e?"":\'<a 2C="1c-1m-4v 1c-26-2R 1c-1w-1s" 3N="\'+q+\'"><2M 2C="1c-3i 1c-3i-az-98-\'+(c?"e":"w")+\'">\'+q+"</2M></a>",s=1a.1E(a,"gA");s=f?1a.8S(s,1a.4G(2o 2x(o,n+i,1)),1a.7e(a)):s;1d t=1a.eL(a,1,o,n)?\'<a 2C="1c-1m-3C 1c-26-2R" 1v-6O="3C" 1v-4O="1I" 3N="\'+s+\'"><2M 2C="1c-3i 1c-3i-az-98-\'+(c?"w":"e")+\'">\'+s+"</2M></a>":e?"":\'<a 2C="1c-1m-3C 1c-26-2R 1c-1w-1s" 3N="\'+s+\'"><2M 2C="1c-3i 1c-3i-az-98-\'+(c?"w":"e")+\'">\'+s+"</2M></a>",u=1a.1E(a,"gC"),v=1a.1E(a,"ey")&&a.5X?k:b;u=f?1a.8S(u,v,1a.7e(a)):u;1d w=a.5y?"":\'<1L 3X="1L" 2C="1c-1m-4y 1c-1w-3m 1c-eN-6C 1c-26-2R" 1v-6O="1J" 1v-4O="1I">\'+1a.1E(a,"ae")+"</1L>",x=d?\'<2b 2C="1c-1m-aw 1c-1M-2W">\'+(c?w:"")+(1a.eO(a,v)?\'<1L 3X="1L" 2C="1c-1m-6s 1c-1w-3m 1c-eN-6D 1c-26-2R" 1v-6O="eK" 1v-4O="1I">\'+u+"</1L>":"")+(c?"":w)+"</2b>":"",y=1x(1a.1E(a,"ht"),10);y=6c(y)?0:y;1d z=1a.1E(a,"hN"),A=1a.1E(a,"72"),B=1a.1E(a,"6T"),C=1a.1E(a,"hh"),D=1a.1E(a,"7g"),E=1a.1E(a,"7f"),F=1a.1E(a,"hS"),G=1a.1E(a,"hL"),H=1a.1E(a,"hM"),I=1a.1E(a,"ez")||1a.eA,J=1a.aW(a),K="";1T(1d L=0;L<g[0];L++){1d M="";1a.8L=4;1T(1d N=0;N<g[1];N++){1d O=1a.4G(2o 2x(o,n,a.5U)),P=" 1c-26-2R",Q="";if(j){Q+=\'<2b 2C="1c-1m-bF\';if(g[1]>1)5g(N){1z 0:Q+=" 1c-1m-bF-5q",P=" 1c-26-"+(c?"2O":"1g");1O;1z g[1]-1:Q+=" 1c-1m-bF-5F",P=" 1c-26-"+(c?"1g":"2O");1O;3m:Q+=" 1c-1m-bF-et",P=""}Q+=\'">\'}Q+=\'<2b 2C="1c-1m-4J 1c-1M-4J 1c-1r-8v\'+P+\'">\'+(/2R|1g/.2i(P)&&L==0?c?t:r:"")+(/2R|2O/.2i(P)&&L==0?c?r:t:"")+1a.hd(a,n,o,l,m,L>0||N>0,D,E)+\'</2b><c0 2C="1c-1m-aD"><hb>\'+"<aB>";1d R=z?\'<aE 2C="1c-1m-aH-gW">\'+1a.1E(a,"hp")+"</aE>":"";1T(1d S=0;S<7;S++){1d T=(S+y)%7;R+="<aE"+((S+y+6)%7>=5?\' 2C="1c-1m-aH-4w"\':"")+">"+\'<2M 3N="\'+A[T]+\'">\'+C[T]+"</2M></aE>"}Q+=R+"</aB></hb><gT>";1d U=1a.89(o,n);o==a.5H&&n==a.5n&&(a.5U=1C.3K(a.5U,U));1d V=(1a.gN(o,n)-y+7)%7,W=1C.lJ((V+U)/7),X=j?1a.8L>W?1a.8L:W:W;1a.8L=X;1d Y=1a.4G(2o 2x(o,n,1-V));1T(1d Z=0;Z<X;Z++){Q+="<aB>";1d 6H=z?\'<8I 2C="1c-1m-aH-gW">\'+1a.1E(a,"ez")(Y)+"</8I>":"";1T(1d S=0;S<7;S++){1d bf=F?F.1P(a.1W?a.1W[0]:1p,[Y]):[!0,""],bb=Y.4s()!=n,bc=bb&&!H||!bf[0]||l&&Y<l||m&&Y>m;6H+=\'<8I 2C="\'+((S+y+6)%7>=5?" 1c-1m-aH-4w":"")+(bb?" 1c-1m-lP-8h":"")+(Y.3E()==O.3E()&&n==a.5n&&a.8u||J.3E()==Y.3E()&&J.3E()==O.3E()?" "+1a.b2:"")+(bc?" "+1a.dH+" 1c-1w-1s":"")+(bb&&!G?"":" "+bf[1]+(Y.3E()==k.3E()?" "+1a.dJ:"")+(Y.3E()==b.3E()?" 1c-1m-eK":""))+\'"\'+((!bb||G)&&bf[2]?\' 3N="\'+bf[2]+\'"\':"")+(bc?"":\' 1v-6O="ia" 1v-4O="1I" 1v-8h="\'+Y.4s()+\'" 1v-8d="\'+Y.3H()+\'"\')+">"+(bb&&!G?"&#ep;":bc?\'<2M 2C="1c-1w-3m">\'+Y.4l()+"</2M>":\'<a 2C="1c-1w-3m\'+(Y.3E()==b.3E()?" 1c-1w-gm":"")+(Y.3E()==k.3E()?" 1c-1w-1G":"")+(bb?" 1c-eN-6D":"")+\'" 4o="#">\'+Y.4l()+"</a>")+"</8I>",Y.9k(Y.4l()+1),Y=1a.4G(Y)}Q+=6H+"</aB>"}n++,n>11&&(n=0,o++),Q+="</gT></c0>"+(j?"</2b>"+(g[0]>0&&N==g[1]-1?\'<2b 2C="1c-1m-lR-1O"></2b>\':""):""),M+=Q}K+=M}1e K+=x+($.3e.5G&&1x($.3e.43,10)<7&&!a.5y?\'<a5 e9="lS:7B;" 2C="1c-1m-cq" lT="0"></a5>\':""),a.8u=!1,K},hd:1b(a,b,c,d,e,f,g,h){1d i=1a.1E(a,"hI"),j=1a.1E(a,"hJ"),k=1a.1E(a,"hu"),l=\'<2b 2C="1c-1m-3N">\',m="";if(f||!i)m+=\'<2M 2C="1c-1m-8h">\'+g[b]+"</2M>";2K{1d n=d&&d.3H()==c,o=e&&e.3H()==c;m+=\'<4b 2C="1c-1m-8h" 1v-6O="i9" 1v-4O="64">\';1T(1d p=0;p<12;p++)(!n||p>=d.4s())&&(!o||p<=e.4s())&&(m+=\'<5Q 2u="\'+p+\'"\'+(p==b?\' 1F="1F"\':"")+">"+h[p]+"</5Q>");m+="</4b>"}k||(l+=m+(f||!i||!j?"&#ep;":""));if(!a.5B){a.5B="";if(f||!j)l+=\'<2M 2C="1c-1m-8d">\'+c+"</2M>";2K{1d q=1a.1E(a,"hK").59(":"),r=(2o 2x).3H(),s=1b(a){1d b=a.5J(/c[+-].*/)?c+1x(a.dC(1),10):a.5J(/[+-].*/)?r+1x(a,10):1x(a,10);1e 6c(b)?r:b},t=s(q[0]),u=1C.2F(t,s(q[1]||""));t=d?1C.2F(t,d.3H()):t,u=e?1C.3K(u,e.3H()):u,a.5B+=\'<4b 2C="1c-1m-8d" 1v-6O="i7" 1v-4O="64">\';1T(;t<=u;t++)a.5B+=\'<5Q 2u="\'+t+\'"\'+(t==c?\' 1F="1F"\':"")+">"+t+"</5Q>";a.5B+="</4b>",l+=a.5B,a.5B=1p}}1e l+=1a.1E(a,"hv"),k&&(l+=(f||!i||!j?"&#ep;":"")+m),l+="</2b>",l},bG:1b(a,b,c){1d d=a.7l+(c=="Y"?b:0),e=a.7a+(c=="M"?b:0),f=1C.3K(a.5U,1a.89(d,e))+(c=="D"?b:0),g=1a.b3(a,1a.4G(2o 2x(d,e,f)));a.5U=g.4l(),a.7a=a.5n=g.4s(),a.7l=a.5H=g.3H(),(c=="M"||c=="Y")&&1a.an(a)},b3:1b(a,b){1d c=1a.7c(a,"3K"),d=1a.7c(a,"2F"),e=c&&b<c?c:b;1e e=d&&e>d?d:e,e},an:1b(a){1d b=1a.1E(a,"hV");b&&b.1P(a.1W?a.1W[0]:1p,[a.5H,a.5n+1,a])},bR:1b(a){1d b=1a.1E(a,"hX");1e b==1p?[1,1]:2j b=="5l"?[1,b]:b},7c:1b(a,b){1e 1a.b1(a,1a.1E(a,b+"2x"),1p)},89:1b(a,b){1e 32-1a.4G(2o 2x(a,b,32)).4l()},gN:1b(a,b){1e(2o 2x(a,b,1)).9Q()},eL:1b(a,b,c,d){1d e=1a.bR(a),f=1a.4G(2o 2x(c,d+(b<0?b:e[0]*e[1]),1));1e b<0&&f.9k(1a.89(f.3H(),f.4s())),1a.eO(a,f)},eO:1b(a,b){1d c=1a.7c(a,"3K"),d=1a.7c(a,"2F");1e(!c||b.3E()>=c.3E())&&(!d||b.3E()<=d.3E())},7e:1b(a){1d b=1a.1E(a,"ak");1e b=2j b!="3S"?b:(2o 2x).3H()%3U+1x(b,10),{ak:b,6T:1a.1E(a,"6T"),72:1a.1E(a,"72"),7f:1a.1E(a,"7f"),7g:1a.1E(a,"7g")}},79:1b(a,b,c,d){b||(a.5X=a.5U,a.7q=a.5n,a.6N=a.5H);1d e=b?2j b=="6b"?b:1a.4G(2o 2x(d,c,b)):1a.4G(2o 2x(a.6N,a.7q,a.5X));1e 1a.8S(1a.1E(a,"6z"),e,1a.7e(a))}}),$.fn.1m=1b(a){if(!1a.1o)1e 1a;$.1m.eo||($(1u).6E($.1m.gY).2v("2l").4Y($.1m.2H),$.1m.eo=!0);1d b=9a.3p.dP.2g(29,1);1e 2j a!="3S"||a!="lV"&&a!="4l"&&a!="1M"?a=="5Q"&&29.1o==2&&2j 29[1]=="3S"?$.1m["6H"+a+"8E"].1P($.1m,[1a[0]].4H(b)):1a.1H(1b(){2j a=="3S"?$.1m["6H"+a+"8E"].1P($.1m,[1a].4H(b)):$.1m.ip(1a,a)}):$.1m["6H"+a+"8E"].1P($.1m,[1a[0]].4H(b))},$.1m=2o 8E,$.1m.eo=!1,$.1m.7O=(2o 2x).3E(),$.1m.43="1.8.23",2N["7P"+73]=$}(2X),1b(a,b){1d c="1c-1Y 1c-1M 1c-1M-2W 1c-26-2R ",d={8i:!0,1k:!0,51:!0,4X:!0,3W:!0,4E:!0,1l:!0},e={51:!0,4X:!0,3W:!0,4E:!0};a.1M("1c.1Y",{1f:{gt:!0,8i:{},ei:!0,ae:"4y",aS:"",2n:!0,1J:1p,1k:"3Q",51:!1,4X:!1,3W:9j,4E:9j,9d:!1,1q:{my:"8n",at:"8n",cy:"bE",9Z:1b(b){1d c=a(1a).1j(b).1n().1i;c<0&&a(1a).1j("1i",b.1i-c)}},1R:!0,1K:1p,9S:!0,3N:"",1l:cr,2A:ah},4T:1b(){1a.9b=1a.1h.1Z("3N"),2j 1a.9b!="3S"&&(1a.9b=""),1a.1f.3N=1a.1f.3N||1a.9b;1d b=1a,d=b.1f,e=d.3N||"&#gj;",f=a.1c.1Y.gi(b.1h),g=(b.3y=a("<2b></2b>")).2P(1u.2l).1J().1t(c+d.aS).1j({2A:d.2A}).1Z("6r",-1).1j("m2",0).6f(1b(c){d.ei&&!c.dz()&&c.2I&&c.2I===a.1c.2I.aG&&(b.4y(c),c.4R())}).1Z({4U:"1Y","2Y-m3":f}).6E(1b(a){b.e2(!1,a)}),h=b.1h.1K().3O("3N").1t("1c-1Y-2W 1c-1M-2W").2P(g),i=(b.gf=a("<2b></2b>")).1t("1c-1Y-aV 1c-1M-4J 1c-26-2R 1c-1r-8v").ch(g),j=a(\'<a 4o="#"></a>\').1t("1c-1Y-aV-4y 1c-26-2R").1Z("4U","1L").3L(1b(){j.1t("1c-1w-3L")},1b(){j.1y("1c-1w-3L")}).2q(1b(){j.1t("1c-1w-2q")}).5e(1b(){j.1y("1c-1w-2q")}).1I(1b(a){1e b.4y(a),!1}).2P(i),k=(b.gd=a("<2M></2M>")).1t("1c-3i 1c-3i-m8").4K(d.ae).2P(j),l=a("<2M></2M>").1t("1c-1Y-3N").1Z("id",f).4k(e).ch(i);a.4d(d.dX)&&!a.4d(d.aZ)&&(d.aZ=d.dX),i.2v("*").2Z(i).9m(),d.2n&&a.fn.2n&&b.dV(),d.1R&&a.fn.1R&&b.dL(),b.dI(d.8i),b.9N=!1,a.fn.7L&&g.7L()},a0:1b(){1a.1f.gt&&1a.bz()},3b:1b(){1d a=1a;1e a.3s&&a.3s.3b(),a.3y.1J(),a.1h.31(".1Y").4C("1Y").1y("1c-1Y-2W 1c-1M-2W").1J().2P("2l"),a.3y.2B(),a.9b&&a.1h.1Z("3N",a.9b),a},1M:1b(){1e 1a.3y},4y:1b(b){1d c=1a,d,e;if(!1===c.1B("aZ",b))1e;1e c.3s&&c.3s.3b(),c.3y.31("a3.1c-1Y"),c.9N=!1,c.1f.1J?c.3y.1J(c.1f.1J,1b(){c.1B("4y",b)}):(c.3y.1J(),c.1B("4y",b)),a.1c.1Y.3s.4a(),c.1f.9d&&(d=0,a(".1c-1Y").1H(1b(){1a!==c.3y[0]&&(e=a(1a).1j("z-4g"),6c(e)||(d=1C.2F(d,e)))}),a.1c.1Y.5S=d),c},mh:1b(){1e 1a.9N},e2:1b(b,c){1d d=1a,e=d.1f,f;1e e.9d&&!b||!e.9S&&!e.9d?d.1B("2q",c):(e.2A>a.1c.1Y.5S&&(a.1c.1Y.5S=e.2A),d.3s&&(a.1c.1Y.5S+=1,d.3s.$el.1j("z-4g",a.1c.1Y.3s.5S=a.1c.1Y.5S)),f={2e:d.1h.2e(),2k:d.1h.2k()},a.1c.1Y.5S+=1,d.3y.1j("z-4g",a.1c.1Y.5S),d.1h.1Z(f),d.1B("2q",c),d)},bz:1b(){if(1a.9N)1e;1d b=1a,c=b.1f,d=b.3y;1e b.3s=c.9d?2o a.1c.1Y.3s(b):1p,b.dE(),b.dB(c.1q),d.1K(c.1K),b.e2(!0),c.9d&&d.2d("6f.1c-1Y",1b(b){if(b.2I!==a.1c.2I.en)1e;1d c=a(":aX",1a),d=c.2t(":5q"),e=c.2t(":5F");if(b.2c===e[0]&&!b.8x)1e d.2q(1),!1;if(b.2c===d[0]&&b.8x)1e e.2q(1),!1}),a(b.1h.2v(":aX").6t().4H(d.2v(".1c-1Y-aw :aX").6t().4H(d.6t()))).eq(0).2q(),b.9N=!0,b.1B("bz"),b},dI:1b(b){1d c=1a,d=!1,e=a("<2b></2b>").1t("1c-1Y-aw 1c-1M-2W 1c-1r-8v"),f=a("<2b></2b>").1t("1c-1Y-bj").2P(e);c.3y.2v(".1c-1Y-aw").2B(),2j b=="6b"&&b!==1p&&a.1H(b,1b(){1e!(d=!0)}),d&&(a.1H(b,1b(b,d){d=a.4d(d)?{1I:d,4K:b}:d;1d e=a(\'<1L 3X="1L"></1L>\').1I(1b(){d.1I.1P(c.1h[0],29)}).2P(f);a.1H(d,1b(a,b){if(a==="1I")1e;a in e?e[a](b):e.1Z(a,b)}),a.fn.1L&&e.1L()}),e.2P(c.3y))},dV:1b(){1b f(a){1e{1q:a.1q,1n:a.1n}}1d b=1a,c=b.1f,d=a(1u),e;b.3y.2n({7y:".1c-1Y-2W, .1c-1Y-aV-4y",3A:".1c-1Y-aV",1U:"1u",3D:1b(d,g){e=c.1k==="3Q"?"3Q":a(1a).1k(),a(1a).1k(a(1a).1k()).1t("1c-1Y-5Z"),b.1B("d7",d,f(g))},6j:1b(a,c){b.1B("6j",a,f(c))},3M:1b(g,h){c.1q=[h.1q.1g-d.2k(),h.1q.1i-d.2e()],a(1a).1y("1c-1Y-5Z").1k(e),b.1B("d5",g,f(h)),a.1c.1Y.3s.4a()}})},dL:1b(c){1b h(a){1e{3Y:a.3Y,5j:a.5j,1q:a.1q,28:a.28}}c=c===b?1a.1f.1R:c;1d d=1a,e=d.1f,f=d.3y.1j("1q"),g=2j c=="3S"?c:"n,e,s,w,52,63,ne,nw";d.3y.1R({7y:".1c-1Y-2W",1U:"1u",5a:d.1h,4X:e.4X,51:e.51,4E:e.4E,3W:d.dw(),2J:g,3D:1b(b,c){a(1a).1t("1c-1Y-6V"),d.1B("mn",b,h(c))},4a:1b(a,b){d.1B("4a",a,h(b))},3M:1b(b,c){a(1a).1y("1c-1Y-6V"),e.1k=a(1a).1k(),e.1l=a(1a).1l(),d.1B("mo",b,h(c)),a.1c.1Y.3s.4a()}}).1j("1q",f).2v(".1c-1R-52").1t("1c-3i 1c-3i-mp-fa-52")},dw:1b(){1d a=1a.1f;1e a.1k==="3Q"?a.3W:1C.3K(a.3W,a.1k)},dB:1b(b){1d c=[],d=[0,0],e;if(b){if(2j b=="3S"||2j b=="6b"&&"0"in b)c=b.59?b.59(" "):[b[0],b[1]],c.1o===1&&(c[1]=c[0]),a.1H(["1g","1i"],1b(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.6x(" "),at:c.6x(" "),1n:d.6x(" ")};b=a.1X({},a.1c.1Y.3p.1f.1q,b)}2K b=a.1c.1Y.3p.1f.1q;e=1a.3y.is(":4u"),e||1a.3y.1K(),1a.3y.1j({1i:0,1g:0}).1q(a.1X({8V:2N},b)),e||1a.3y.1J()},dM:1b(b){1d c=1a,f={},g=!1;a.1H(b,1b(a,b){c.3F(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&1a.dE(),1a.3y.is(":1v(1R)")&&1a.3y.1R("5Q",f)},3F:1b(b,d){1d e=1a,f=e.3y;5g(b){1z"dX":b="aZ";1O;1z"8i":e.dI(d);1O;1z"ae":e.gd.4K(""+d);1O;1z"aS":f.1y(e.1f.aS).1t(c+d);1O;1z"1s":d?f.1t("1c-1Y-1s"):f.1y("1c-1Y-1s");1O;1z"2n":1d g=f.is(":1v(2n)");g&&!d&&f.2n("3b"),!g&&d&&e.dV();1O;1z"1q":e.dB(d);1O;1z"1R":1d h=f.is(":1v(1R)");h&&!d&&f.1R("3b"),h&&2j d=="3S"&&f.1R("5Q","2J",d),!h&&d!==!1&&e.dL(d);1O;1z"3N":a(".1c-1Y-3N",e.gf).4k(""+(d||"&#gj;"))}a.4m.3p.3F.1P(e,29)},dE:1b(){1d b=1a.1f,c,d,e=1a.3y.is(":4u");1a.1h.1K().1j({1l:"3Q",3W:0,1k:0}),b.4E>b.1l&&(b.1l=b.4E),c=1a.3y.1j({1k:"3Q",1l:b.1l}).1k(),d=1C.2F(0,b.3W-c);if(b.1k==="3Q")if(a.9y.3W)1a.1h.1j({3W:d,1k:"3Q"});2K{1a.3y.1K();1d f=1a.1h.1j("1k","3Q").1k();e||1a.3y.1J(),1a.1h.1k(1C.2F(f,d))}2K 1a.1h.1k(1C.2F(b.1k-c,0));1a.3y.is(":1v(1R)")&&1a.3y.1R("5Q","3W",1a.dw())}}),a.1X(a.1c.1Y,{43:"1.8.23",7O:0,5S:0,gi:1b(a){1d b=a.1Z("id");1e b||(1a.7O+=1,b=1a.7O),"1c-1Y-3N-"+b},3s:1b(b){1a.$el=a.1c.1Y.3s.dO(b)}}),a.1X(a.1c.1Y.3s,{78:[],dq:[],5S:0,fc:a.5h("2q,6E,7w,6f,a3,1I".59(","),1b(a){1e a+".1Y-3s"}).6x(" "),dO:1b(b){1a.78.1o===0&&(5u(1b(){a.1c.1Y.3s.78.1o&&a(1u).2d(a.1c.1Y.3s.fc,1b(b){if(a(b.2c).2A()<a.1c.1Y.3s.5S)1e!1})},1),a(1u).2d("6f.1Y-3s",1b(c){b.1f.ei&&!c.dz()&&c.2I&&c.2I===a.1c.2I.aG&&(b.4y(c),c.4R())}),a(2N).2d("4a.1Y-3s",a.1c.1Y.3s.4a));1d c=(1a.dq.mt()||a("<2b></2b>").1t("1c-1M-3s")).2P(1u.2l).1j({1l:1a.1l(),1k:1a.1k()});1e a.fn.7L&&c.7L(),1a.78.3n(c),c},3b:1b(b){1d c=a.9A(b,1a.78);c!=-1&&1a.dq.3n(1a.78.9L(c,1)[0]),1a.78.1o===0&&a([1u,2N]).31(".1Y-3s"),b.2B();1d d=0;a.1H(1a.78,1b(){d=1C.2F(d,1a.1j("z-4g"))}),1a.5S=d},1k:1b(){1d b,c;1e a.3e.5G&&a.3e.43<7?(b=1C.2F(1u.5E.7i,1u.2l.7i),c=1C.2F(1u.5E.5k,1u.2l.5k),b<c?a(2N).1k()+"3J":b+"3J"):a(1u).1k()+"3J"},1l:1b(){1d b,c;1e a.3e.5G?(b=1C.2F(1u.5E.9I,1u.2l.9I),c=1C.2F(1u.5E.6k,1u.2l.6k),b<c?a(2N).1l()+"3J":b+"3J"):a(1u).1l()+"3J"},4a:1b(){1d b=a([]);a.1H(a.1c.1Y.3s.78,1b(){b=b.2Z(1a)}),b.1j({1l:0,1k:0}).1j({1l:a.1c.1Y.3s.1l(),1k:a.1c.1Y.3s.1k()})}}),a.1X(a.1c.1Y.3s.3p,{3b:1b(){a.1c.1Y.3s.3b(1a.$el)}})}(2X),1b(a,b){a.1c=a.1c||{};1d c=/1g|8n|2O/,d=/1i|8n|2V/,e="8n",f={},g=a.fn.1q,h=a.fn.1n;a.fn.1q=1b(b){if(!b||!b.8V)1e g.1P(1a,29);b=a.1X({},b);1d h=a(b.8V),i=h[0],j=(b.cy||"eV").59(" "),k=b.1n?b.1n.59(" "):[0,0],l,m,n;1e i.cl===9?(l=h.1l(),m=h.1k(),n={1i:0,1g:0}):i.5u?(l=h.1l(),m=h.1k(),n={1i:h.2e(),1g:h.2k()}):i.4R?(b.at="1g 1i",l=m=0,n={1i:b.8V.3k,1g:b.8V.3h}):(l=h.3f(),m=h.3o(),n=h.1n()),a.1H(["my","at"],1b(){1d a=(b[1a]||"").59(" ");a.1o===1&&(a=c.2i(a[0])?a.4H([e]):d.2i(a[0])?[e].4H(a):[e,e]),a[0]=c.2i(a[0])?a[0]:e,a[1]=d.2i(a[1])?a[1]:e,b[1a]=a}),j.1o===1&&(j[1]=j[0]),k[0]=1x(k[0],10)||0,k.1o===1&&(k[1]=k[0]),k[1]=1x(k[1],10)||0,b.at[0]==="2O"?n.1g+=l:b.at[0]===e&&(n.1g+=l/2),b.at[1]==="2V"?n.1i+=m:b.at[1]===e&&(n.1i+=m/2),n.1g+=k[0],n.1i+=k[1],1a.1H(1b(){1d c=a(1a),d=c.3f(),g=c.3o(),h=1x(a.44(1a,"7I",!0))||0,i=1x(a.44(1a,"7j",!0))||0,o=d+h+(1x(a.44(1a,"8J",!0))||0),p=g+i+(1x(a.44(1a,"8K",!0))||0),q=a.1X({},n),r;b.my[0]==="2O"?q.1g-=d:b.my[0]===e&&(q.1g-=d/2),b.my[1]==="2V"?q.1i-=g:b.my[1]===e&&(q.1i-=g/2),f.eU||(q.1g=1C.5T(q.1g),q.1i=1C.5T(q.1i)),r={1g:q.1g-h,1i:q.1i-i},a.1H(["1g","1i"],1b(c,e){a.1c.1q[j[c]]&&a.1c.1q[j[c]][e](q,{d3:l,d2:m,d0:d,cJ:g,7h:r,cx:o,ce:p,1n:k,my:b.my,at:b.at})}),a.fn.7L&&c.7L(),c.1n(a.1X(q,{9Z:b.9Z}))})},a.1c.1q={bE:{1g:1b(b,c){1d d=a(2N),e=c.7h.1g+c.cx-d.1l()-d.2k();b.1g=e>0?b.1g-e:1C.2F(b.1g-c.7h.1g,b.1g)},1i:1b(b,c){1d d=a(2N),e=c.7h.1i+c.ce-d.1k()-d.2e();b.1i=e>0?b.1i-e:1C.2F(b.1i-c.7h.1i,b.1i)}},eV:{1g:1b(b,c){if(c.at[0]===e)1e;1d d=a(2N),f=c.7h.1g+c.cx-d.1l()-d.2k(),g=c.my[0]==="1g"?-c.d0:c.my[0]==="2O"?c.d0:0,h=c.at[0]==="1g"?c.d3:-c.d3,i=-2*c.1n[0];b.1g+=c.7h.1g<0?g+h+i:f>0?g+h+i:0},1i:1b(b,c){if(c.at[1]===e)1e;1d d=a(2N),f=c.7h.1i+c.ce-d.1k()-d.2e(),g=c.my[1]==="1i"?-c.cJ:c.my[1]==="2V"?c.cJ:0,h=c.at[1]==="1i"?c.d2:-c.d2,i=-2*c.1n[1];b.1i+=c.7h.1i<0?g+h+i:f>0?g+h+i:0}}},a.1n.c7||(a.1n.c7=1b(b,c){/6P/.2i(a.44(b,"1q"))&&(b.3a.1q="2L");1d d=a(b),e=d.1n(),f=1x(a.44(b,"1i",!0),10)||0,g=1x(a.44(b,"1g",!0),10)||0,h={1i:c.1i-e.1i+f,1g:c.1g-e.1g+g};"9Z"in c?c.9Z.2g(b,h):d.1j(h)},a.fn.1n=1b(b){1d c=1a[0];1e!c||!c.9D?1p:b?a.4d(b)?1a.1H(1b(c){a(1a).1n(b.2g(1a,c,a(1a).1n()))}):1a.1H(1b(){a.1n.c7(1a,b)}):h.2g(1a)}),a.44||(a.44=a.1j),1b(){1d b=1u.mG("2l")[0],c=1u.b0("2b"),d,e,g,h,i;d=1u.b0(b?"2b":"2l"),g={8A:"3I",1l:0,1k:0,9g:0,7Y:0,dj:"7s"},b&&a.1X(g,{1q:"2Q",1g:"-ct",1i:"-ct"});1T(1d j in g)d.3a[j]=g[j];d.aY(c),e=b||1u.5E,e.bH(d,e.mH),c.3a.eJ="1q: 2Q; 1g: 10.mI; 1i: 10.mJ; 1k: mK; 1l: mL;",h=a(c).1n(1b(a,b){1e b}).1n(),d.mM="",e.9x(d),i=h.1i+h.1g+(b?mN:0),f.eU=i>21&&i<22}()}(2X),1b(a,b){a.1M("1c.97",{1f:{2u:0,2F:3U},3K:0,4T:1b(){1a.1h.1t("1c-97 1c-1M 1c-1M-2W 1c-26-2R").1Z({4U:"97","2Y-ga":1a.3K,"2Y-f5":1a.1f.2F,"2Y-cd":1a.7D()}),1a.cu=a("<2b 2C=\'1c-97-2u 1c-1M-4J 1c-26-1g\'></2b>").2P(1a.1h),1a.cw=1a.7D(),1a.68()},3b:1b(){1a.1h.1y("1c-97 1c-1M 1c-1M-2W 1c-26-2R").3O("4U").3O("2Y-ga").3O("2Y-f5").3O("2Y-cd"),1a.cu.2B(),a.4m.3p.3b.1P(1a,29)},2u:1b(a){1e a===b?1a.7D():(1a.3F("2u",a),1a)},3F:1b(b,c){b==="2u"&&(1a.1f.2u=c,1a.68(),1a.7D()===1a.1f.2F&&1a.1B("5v")),a.4m.3p.3F.1P(1a,29)},7D:1b(){1d a=1a.1f.2u;1e 2j a!="5l"&&(a=0),1C.3K(1a.1f.2F,1C.2F(1a.3K,a))},hz:1b(){1e 3U*1a.7D()/1a.1f.2F},68:1b(){1d a=1a.2u(),b=1a.hz();1a.cw!==a&&(1a.cw=a,1a.1B("64")),1a.cu.6W(a>1a.3K).7Q("1c-26-2O",a===1a.1f.2F).1l(b.gu(0)+"%"),1a.1h.1Z("2Y-cd",a)}}),a.1X(a.1c.97,{43:"1.8.23"})}(2X),1b(a,b){1d c=5;a.1M("1c.3Z",a.1c.8w,{6I:"7k",1f:{1V:!1,77:0,2F:3U,3K:0,5d:"6d",3V:!1,8f:1,2u:0,2h:1p},4T:1b(){1d b=1a,d=1a.1f,e=1a.1h.2v(".1c-3Z-3A").1t("1c-1w-3m 1c-26-2R"),f="<a 2C=\'1c-3Z-3A 1c-1w-3m 1c-26-2R\' 4o=\'#\'></a>",g=d.2h&&d.2h.1o||1,h=[];1a.9p=!1,1a.bo=!1,1a.70=!0,1a.8N=1p,1a.bX(),1a.9l(),1a.1h.1t("1c-3Z 1c-3Z-"+1a.5d+" 1c-1M"+" 1c-1M-2W"+" 1c-26-2R"+(d.1s?" 1c-3Z-1s 1c-1s":"")),1a.3V=a([]),d.3V&&(d.3V===!0&&(d.2h||(d.2h=[1a.4Z(),1a.4Z()]),d.2h.1o&&d.2h.1o!==2&&(d.2h=[d.2h[0],d.2h[0]])),1a.3V=a("<2b></2b>").2P(1a.1h).1t("1c-3Z-3V 1c-1M-4J"+(d.3V==="3K"||d.3V==="2F"?" 1c-3Z-3V-"+d.3V:"")));1T(1d i=e.1o;i<g;i+=1)h.3n(f);1a.2J=e.2Z(a(h.6x("")).2P(b.1h)),1a.3A=1a.2J.eq(0),1a.2J.2Z(1a.3V).2t("a").1I(1b(a){a.4R()}).3L(1b(){d.1s||a(1a).1t("1c-1w-3L")},1b(){a(1a).1y("1c-1w-3L")}).2q(1b(){d.1s?a(1a).5e():(a(".1c-3Z .1c-1w-2q").1y("1c-1w-2q"),a(1a).1t("1c-1w-2q"))}).5e(1b(){a(1a).1y("1c-1w-2q")}),1a.2J.1H(1b(b){a(1a).1v("4g.1c-3Z-3A",b)}),1a.2J.6f(1b(d){1d e=a(1a).1v("4g.1c-3Z-3A"),f,g,h,i;if(b.1f.1s)1e;5g(d.2I){1z a.1c.2I.eH:1z a.1c.2I.eM:1z a.1c.2I.aN:1z a.1c.2I.aL:1z a.1c.2I.9X:1z a.1c.2I.aO:1z a.1c.2I.ai:1z a.1c.2I.aI:d.4R();if(!b.9p){b.9p=!0,a(1a).1t("1c-1w-1G"),f=b.dR(d,e);if(f===!1)1e}}i=b.1f.8f,b.1f.2h&&b.1f.2h.1o?g=h=b.2h(e):g=h=b.2u();5g(d.2I){1z a.1c.2I.eH:h=b.4Z();1O;1z a.1c.2I.eM:h=b.61();1O;1z a.1c.2I.aN:h=b.5N(g+(b.61()-b.4Z())/c);1O;1z a.1c.2I.aL:h=b.5N(g-(b.61()-b.4Z())/c);1O;1z a.1c.2I.9X:1z a.1c.2I.aO:if(g===b.61())1e;h=b.5N(g+i);1O;1z a.1c.2I.ai:1z a.1c.2I.aI:if(g===b.4Z())1e;h=b.5N(g-i)}b.aT(d,e,h)}).9F(1b(c){1d d=a(1a).1v("4g.1c-3Z-3A");b.9p&&(b.9p=!1,b.ea(c,d),b.4n(c,d),a(1a).1y("1c-1w-1G"))}),1a.68(),1a.70=!1},3b:1b(){1e 1a.2J.2B(),1a.3V.2B(),1a.1h.1y("1c-3Z 1c-3Z-6d 1c-3Z-5f 1c-3Z-1s 1c-1M 1c-1M-2W 1c-26-2R").4C("3Z").31(".3Z"),1a.9t(),1a},8m:1b(b){1d c=1a.1f,d,e,f,g,h,i,j,k,l;1e c.1s?!1:(1a.ee={1l:1a.1h.3f(),1k:1a.1h.3o()},1a.9o=1a.1h.1n(),d={x:b.3h,y:b.3k},e=1a.ek(d),f=1a.61()-1a.4Z()+1,h=1a,1a.2J.1H(1b(b){1d c=1C.4D(e-h.2h(b));f>c&&(f=c,g=a(1a),i=b)}),c.3V===!0&&1a.2h(1)===c.3K&&(i+=1,g=a(1a.2J[i])),j=1a.dR(b,i),j===!1?!1:(1a.bo=!0,h.8N=i,g.1t("1c-1w-1G").2q(),k=g.1n(),l=!a(b.2c).4M().9w().is(".1c-3Z-3A"),1a.9h=l?{1g:0,1i:0}:{1g:b.3h-k.1g-g.1l()/2,1i:b.3k-k.1i-g.1k()/2-(1x(g.1j("7p"),10)||0)-(1x(g.1j("co"),10)||0)+(1x(g.1j("7j"),10)||0)},1a.2J.4f("1c-1w-3L")||1a.aT(b,i,e),1a.70=!0,!0))},71:1b(a){1e!0},6a:1b(a){1d b={x:a.3h,y:a.3k},c=1a.ek(b);1e 1a.aT(a,1a.8N,c),!1},6Z:1b(a){1e 1a.2J.1y("1c-1w-1G"),1a.bo=!1,1a.ea(a,1a.8N),1a.4n(a,1a.8N),1a.8N=1p,1a.9h=1p,1a.70=!1,!1},bX:1b(){1a.5d=1a.1f.5d==="5f"?"5f":"6d"},ek:1b(a){1d b,c,d,e,f;1e 1a.5d==="6d"?(b=1a.ee.1l,c=a.x-1a.9o.1g-(1a.9h?1a.9h.1g:0)):(b=1a.ee.1k,c=a.y-1a.9o.1i-(1a.9h?1a.9h.1i:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),1a.5d==="5f"&&(d=1-d),e=1a.61()-1a.4Z(),f=1a.4Z()+d*e,1a.5N(f)},dR:1b(a,b){1d c={3A:1a.2J[b],2u:1a.2u()};1e 1a.1f.2h&&1a.1f.2h.1o&&(c.2u=1a.2h(b),c.2h=1a.2h()),1a.1B("3D",a,c)},aT:1b(a,b,c){1d d,e,f;1a.1f.2h&&1a.1f.2h.1o?(d=1a.2h(b?0:1),1a.1f.2h.1o===2&&1a.1f.3V===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==1a.2h(b)&&(e=1a.2h(),e[b]=c,f=1a.1B("7k",a,{3A:1a.2J[b],2u:c,2h:e}),d=1a.2h(b?0:1),f!==!1&&1a.2h(b,c,!0))):c!==1a.2u()&&(f=1a.1B("7k",a,{3A:1a.2J[b],2u:c}),f!==!1&&1a.2u(c))},ea:1b(a,b){1d c={3A:1a.2J[b],2u:1a.2u()};1a.1f.2h&&1a.1f.2h.1o&&(c.2u=1a.2h(b),c.2h=1a.2h()),1a.1B("3M",a,c)},4n:1b(a,b){if(!1a.9p&&!1a.bo){1d c={3A:1a.2J[b],2u:1a.2u()};1a.1f.2h&&1a.1f.2h.1o&&(c.2u=1a.2h(b),c.2h=1a.2h()),1a.1B("64",a,c)}},2u:1b(a){if(29.1o){1a.1f.2u=1a.5N(a),1a.68(),1a.4n(1p,0);1e}1e 1a.7D()},2h:1b(b,c){1d d,e,f;if(29.1o>1){1a.1f.2h[b]=1a.5N(c),1a.68(),1a.4n(1p,b);1e}if(!29.1o)1e 1a.er();if(!a.81(29[0]))1e 1a.1f.2h&&1a.1f.2h.1o?1a.er(b):1a.2u();d=1a.1f.2h,e=29[0];1T(f=0;f<d.1o;f+=1)d[f]=1a.5N(e[f]),1a.4n(1p,f);1a.68()},3F:1b(b,c){1d d,e=0;a.81(1a.1f.2h)&&(e=1a.1f.2h.1o),a.4m.3p.3F.1P(1a,29);5g(b){1z"1s":c?(1a.2J.2t(".1c-1w-2q").5e(),1a.2J.1y("1c-1w-3L"),1a.2J.7G("1s",!0),1a.1h.1t("1c-1s")):(1a.2J.7G("1s",!1),1a.1h.1y("1c-1s"));1O;1z"5d":1a.bX(),1a.1h.1y("1c-3Z-6d 1c-3Z-5f").1t("1c-3Z-"+1a.5d),1a.68();1O;1z"2u":1a.70=!0,1a.68(),1a.4n(1p,0),1a.70=!1;1O;1z"2h":1a.70=!0,1a.68();1T(d=0;d<e;d+=1)1a.4n(1p,d);1a.70=!1}},7D:1b(){1d a=1a.1f.2u;1e a=1a.5N(a),a},er:1b(a){1d b,c,d;if(29.1o)1e b=1a.1f.2h[a],b=1a.5N(b),b;c=1a.1f.2h.dP();1T(d=0;d<c.1o;d+=1)c[d]=1a.5N(c[d]);1e c},5N:1b(a){if(a<=1a.4Z())1e 1a.4Z();if(a>=1a.61())1e 1a.61();1d b=1a.1f.8f>0?1a.1f.8f:1,c=(a-1a.4Z())%b,d=a-c;1e 1C.4D(c)*2>=b&&(d+=c>0?b:-b),5i(d.gu(5))},4Z:1b(){1e 1a.1f.3K},61:1b(){1e 1a.1f.2F},68:1b(){1d b=1a.1f.3V,c=1a.1f,d=1a,e=1a.70?!1:c.1V,f,g={},h,i,j,k;1a.1f.2h&&1a.1f.2h.1o?1a.2J.1H(1b(b,i){f=(d.2h(b)-d.4Z())/(d.61()-d.4Z())*3U,g[d.5d==="6d"?"1g":"2V"]=f+"%",a(1a).3M(1,1)[e?"1V":"1j"](g,c.1V),d.1f.3V===!0&&(d.5d==="6d"?(b===0&&d.3V.3M(1,1)[e?"1V":"1j"]({1g:f+"%"},c.1V),b===1&&d.3V[e?"1V":"1j"]({1l:f-h+"%"},{2E:!1,2m:c.1V})):(b===0&&d.3V.3M(1,1)[e?"1V":"1j"]({2V:f+"%"},c.1V),b===1&&d.3V[e?"1V":"1j"]({1k:f-h+"%"},{2E:!1,2m:c.1V}))),h=f}):(i=1a.2u(),j=1a.4Z(),k=1a.61(),f=k!==j?(i-j)/(k-j)*3U:0,g[d.5d==="6d"?"1g":"2V"]=f+"%",1a.3A.3M(1,1)[e?"1V":"1j"](g,c.1V),b==="3K"&&1a.5d==="6d"&&1a.3V.3M(1,1)[e?"1V":"1j"]({1l:f+"%"},c.1V),b==="2F"&&1a.5d==="6d"&&1a.3V[e?"1V":"1j"]({1l:3U-f+"%"},{2E:!1,2m:c.1V}),b==="3K"&&1a.5d==="5f"&&1a.3V.3M(1,1)[e?"1V":"1j"]({1k:f+"%"},c.1V),b==="2F"&&1a.5d==="5f"&&1a.3V[e?"1V":"1j"]({1k:3U-f+"%"},{2E:!1,2m:c.1V}))}}),a.1X(a.1c.3Z,{43:"1.8.23"})}(2X),1b(a,b){1b e(){1e++c}1b f(){1e++d}1d c=0,d=0;a.1M("1c.1D",{1f:{2Z:1p,aK:1p,7N:!1,53:1p,4S:!1,b9:1p,1s:[],b6:1p,4O:"1I",fx:1p,fY:"1c-1D-",5W:1p,eu:"<2b></2b>",2B:1p,4b:1p,1K:1p,ev:"<em>np&#nq;</em>",ik:"<li><a 4o=\'#{4o}\'><2M>#{4j}</2M></a></li>"},4T:1b(){1a.9G(!0)},3F:1b(a,b){if(a=="1F"){if(1a.1f.4S&&b==1a.1f.1F)1e;1a.4b(b)}2K 1a.1f[a]=b,1a.9G()},eE:1b(a){1e a.3N&&a.3N.6p(/\\s/g,"6H").6p(/[^\\w\\nu-\\nv-]/g,"")||1a.1f.fY+e()},9e:1b(a){1e a.6p(/:/g,"\\\\:")},8r:1b(){1d b=1a.53||(1a.53=1a.1f.53.95||"1c-1D-"+f());1e a.53.1P(1p,[b].4H(a.hn(29)))},5V:1b(a,b){1e{ho:a,ag:b,4g:1a.2G.4g(a)}},ax:1b(){1a.3t.2t(".1c-1w-av").1y("1c-1w-av").2v("2M:1v(4j.1D)").1H(1b(){1d b=a(1a);b.4k(b.1v("4j.1D")).4C("4j.1D")})},9G:1b(c){1b m(b,c){b.1j("6M",""),!a.9y.2s&&c.2s&&b[0].3a.gp("2t")}1d d=1a,e=1a.1f,f=/^#.+/;1a.7R=1a.1h.2v("nD,cS").eq(0),1a.3t=a(" > li:fS(a[4o])",1a.7R),1a.2G=1a.3t.5h(1b(){1e a("a",1a)[0]}),1a.4h=a([]),1a.2G.1H(1b(b,c){1d g=a(c).1Z("4o"),h=g.59("#")[0],i;h&&(h===bV.ay().59("#")[0]||(i=a("nF")[0])&&h===i.4o)&&(g=c.7U,c.4o=g);if(f.2i(g))d.4h=d.4h.2Z(d.1h.2v(d.9e(g)));2K if(g&&g!=="#"){a.1v(c,"4o.1D",g),a.1v(c,"5W.1D",g.6p(/#.*$/,""));1d j=d.eE(c);c.4o="#"+j;1d k=d.1h.2v("#"+j);k.1o||(k=a(e.eu).1Z("id",j).1t("1c-1D-ag 1c-1M-2W 1c-26-2V").nH(d.4h[b-1]||d.7R),k.1v("3b.1D",!0)),d.4h=d.4h.2Z(k)}2K e.1s.3n(b)}),c?(1a.1h.1t("1c-1D 1c-1M 1c-1M-2W 1c-26-2R"),1a.7R.1t("1c-1D-go 1c-1r-6h 1c-1r-8v 1c-1M-4J 1c-26-2R"),1a.3t.1t("1c-1w-3m 1c-26-1i"),1a.4h.1t("1c-1D-ag 1c-1M-2W 1c-26-2V"),e.1F===b?(bV.7U&&1a.2G.1H(1b(a,b){if(b.7U==bV.7U)1e e.1F=a,!1}),2j e.1F!="5l"&&e.53&&(e.1F=1x(d.8r(),10)),2j e.1F!="5l"&&1a.3t.2t(".1c-1D-1F").1o&&(e.1F=1a.3t.4g(1a.3t.2t(".1c-1D-1F"))),e.1F=e.1F||(1a.3t.1o?0:-1)):e.1F===1p&&(e.1F=-1),e.1F=e.1F>=0&&1a.2G[e.1F]||e.1F<0?e.1F:0,e.1s=a.nJ(e.1s.4H(a.5h(1a.3t.2t(".1c-1w-1s"),1b(a,b){1e d.3t.4g(a)}))).8P(),a.9A(e.1F,e.1s)!=-1&&e.1s.9L(a.9A(e.1F,e.1s),1),1a.4h.1t("1c-1D-1J"),1a.3t.1y("1c-1D-1F 1c-1w-1G"),e.1F>=0&&1a.2G.1o&&(d.1h.2v(d.9e(d.2G[e.1F].7U)).1y("1c-1D-1J"),1a.3t.eq(e.1F).1t("1c-1D-1F 1c-1w-1G"),d.1h.2E("1D",1b(){d.1B("1K",1p,d.5V(d.2G[e.1F],d.1h.2v(d.9e(d.2G[e.1F].7U))[0]))}),1a.5W(e.1F)),a(2N).2d("nK",1b(){d.3t.2Z(d.2G).31(".1D"),d.3t=d.2G=d.4h=1p})):e.1F=1a.3t.4g(1a.3t.2t(".1c-1D-1F")),1a.1h[e.4S?"1t":"1y"]("1c-1D-4S"),e.53&&1a.8r(e.1F,e.53);1T(1d g=0,h;h=1a.3t[g];g++)a(h)[a.9A(g,e.1s)!=-1&&!a(h).4f("1c-1D-1F")?"1t":"1y"]("1c-1w-1s");e.7N===!1&&1a.2G.4C("7N.1D"),1a.3t.2Z(1a.2G).31(".1D");if(e.4O!=="90"){1d i=1b(a,b){b.is(":4F(.1c-1w-1s)")&&b.1t("1c-1w-"+a)},j=1b(a,b){b.1y("1c-1w-"+a)};1a.3t.2d("90.1D",1b(){i("3L",a(1a))}),1a.3t.2d("ic.1D",1b(){j("3L",a(1a))}),1a.2G.2d("2q.1D",1b(){i("2q",a(1a).5r("li"))}),1a.2G.2d("5e.1D",1b(){j("2q",a(1a).5r("li"))})}1d k,l;e.fx&&(a.81(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);1d n=l?1b(b,c){a(b).5r("li").1t("1c-1D-1F 1c-1w-1G"),c.1J().1y("1c-1D-1J").1V(l,l.2m||"fK",1b(){m(c,l),d.1B("1K",1p,d.5V(b,c[0]))})}:1b(b,c){a(b).5r("li").1t("1c-1D-1F 1c-1w-1G"),c.1y("1c-1D-1J"),d.1B("1K",1p,d.5V(b,c[0]))},o=k?1b(a,b){b.1V(k,k.2m||"fK",1b(){d.3t.1y("1c-1D-1F 1c-1w-1G"),b.1t("1c-1D-1J"),m(b,k),d.1h.3T("1D")})}:1b(a,b,c){d.3t.1y("1c-1D-1F 1c-1w-1G"),b.1t("1c-1D-1J"),d.1h.3T("1D")};1a.2G.2d(e.4O+".1D",1b(){1d b=1a,c=a(b).5r("li"),f=d.4h.2t(":4F(.1c-1D-1J)"),g=d.1h.2v(d.9e(b.7U));if(c.4f("1c-1D-1F")&&!e.4S||c.4f("1c-1w-1s")||c.4f("1c-1w-av")||d.4h.2t(":9q").1o||d.1B("4b",1p,d.5V(1a,g[0]))===!1)1e 1a.5e(),!1;e.1F=d.2G.4g(1a),d.8b();if(e.4S){if(c.4f("1c-1D-1F"))1e e.1F=-1,e.53&&d.8r(e.1F,e.53),d.1h.2E("1D",1b(){o(b,f)}).3T("1D"),1a.5e(),!1;if(!f.1o)1e e.53&&d.8r(e.1F,e.53),d.1h.2E("1D",1b(){n(b,g)}),d.5W(d.2G.4g(1a)),1a.5e(),!1}e.53&&d.8r(e.1F,e.53);if(g.1o)f.1o&&d.1h.2E("1D",1b(){o(b,f)}),d.1h.2E("1D",1b(){n(b,g)}),d.5W(d.2G.4g(1a));2K 7u"2X nM nN: nO nP nQ.";a.3e.5G&&1a.5e()}),1a.2G.2d("1I.1D",1b(){1e!1})},8H:1b(a){1e 2j a=="3S"&&(a=1a.2G.4g(1a.2G.2t("[4o$=\'"+a+"\']"))),a},3b:1b(){1d b=1a.1f;1e 1a.8b(),1a.1h.31(".1D").1y("1c-1D 1c-1M 1c-1M-2W 1c-26-2R 1c-1D-4S").4C("1D"),1a.7R.1y("1c-1D-go 1c-1r-6h 1c-1r-8v 1c-1M-4J 1c-26-2R"),1a.2G.1H(1b(){1d b=a.1v(1a,"4o.1D");b&&(1a.4o=b);1d c=a(1a).31(".1D");a.1H(["4o","5W","7N"],1b(a,b){c.4C(b+".1D")})}),1a.3t.31(".1D").2Z(1a.4h).1H(1b(){a.1v(1a,"3b.1D")?a(1a).2B():a(1a).1y(["1c-1w-3m","1c-26-1i","1c-1D-1F","1c-1w-1G","1c-1w-3L","1c-1w-2q","1c-1w-1s","1c-1D-ag","1c-1M-2W","1c-26-2V","1c-1D-1J"].6x(" "))}),b.53&&1a.8r(1p,b.53),1a},2Z:1b(c,d,e){e===b&&(e=1a.2G.1o);1d f=1a,g=1a.1f,h=a(g.ik.6p(/#\\{4o\\}/g,c).6p(/#\\{4j\\}/g,d)),i=c.dW("#")?1a.eE(a("a",h)[0]):c.6p("#","");h.1t("1c-1w-3m 1c-26-1i").1v("3b.1D",!0);1d j=f.1h.2v("#"+i);1e j.1o||(j=a(g.eu).1Z("id",i).1v("3b.1D",!0)),j.1t("1c-1D-ag 1c-1M-2W 1c-26-2V 1c-1D-1J"),e>=1a.3t.1o?(h.2P(1a.7R),j.2P(1a.7R[0].4p)):(h.bH(1a.3t[e]),j.bH(1a.4h[e])),g.1s=a.5h(g.1s,1b(a,b){1e a>=e?++a:a}),1a.9G(),1a.2G.1o==1&&(g.1F=0,h.1t("1c-1D-1F 1c-1w-1G"),j.1y("1c-1D-1J"),1a.1h.2E("1D",1b(){f.1B("1K",1p,f.5V(f.2G[0],f.4h[0]))}),1a.5W(0)),1a.1B("2Z",1p,1a.5V(1a.2G[e],1a.4h[e])),1a},2B:1b(b){b=1a.8H(b);1d c=1a.1f,d=1a.3t.eq(b).2B(),e=1a.4h.eq(b).2B();1e d.4f("1c-1D-1F")&&1a.2G.1o>1&&1a.4b(b+(b+1<1a.2G.1o?1:-1)),c.1s=a.5h(a.d6(c.1s,1b(a,c){1e a!=b}),1b(a,c){1e a>=b?--a:a}),1a.9G(),1a.1B("2B",1p,1a.5V(d.2v("a")[0],e[0])),1a},b6:1b(b){b=1a.8H(b);1d c=1a.1f;if(a.9A(b,c.1s)==-1)1e;1e 1a.3t.eq(b).1y("1c-1w-1s"),c.1s=a.d6(c.1s,1b(a,c){1e a!=b}),1a.1B("b6",1p,1a.5V(1a.2G[b],1a.4h[b])),1a},b9:1b(a){a=1a.8H(a);1d b=1a,c=1a.1f;1e a!=c.1F&&(1a.3t.eq(a).1t("1c-1w-1s"),c.1s.3n(a),c.1s.8P(),1a.1B("b9",1p,1a.5V(1a.2G[a],1a.4h[a]))),1a},4b:1b(a){a=1a.8H(a);if(a==-1)if(1a.1f.4S&&1a.1f.1F!=-1)a=1a.1f.1F;2K 1e 1a;1e 1a.2G.eq(a).5K(1a.1f.4O+".1D"),1a},5W:1b(b){b=1a.8H(b);1d c=1a,d=1a.1f,e=1a.2G.eq(b)[0],f=a.1v(e,"5W.1D");1a.8b();if(!f||1a.1h.2E("1D").1o!==0&&a.1v(e,"7N.1D")){1a.1h.3T("1D");1e}1a.3t.eq(b).1t("1c-1w-av");if(d.ev){1d g=a("2M",e);g.1v("4j.1D",g.4k()).4k(d.ev)}1e 1a.6Q=a.fp(a.1X({},d.aK,{cX:f,cY:1b(f,g){c.1h.2v(c.9e(e.7U)).4k(f),c.ax(),d.7N&&a.1v(e,"7N.1D",!0),c.1B("5W",1p,c.5V(c.2G[b],c.4h[b]));6L{d.aK.cY(f,g)}6K(h){}},cZ:1b(a,f,g){c.ax(),c.1B("5W",1p,c.5V(c.2G[b],c.4h[b]));6L{d.aK.cZ(a,f,b,e)}6K(g){}}})),c.1h.3T("1D"),1a},8b:1b(){1e 1a.1h.2E([]),1a.4h.3M(!1,!0),1a.1h.2E("1D",1a.1h.2E("1D").9L(-2,2)),1a.6Q&&(1a.6Q.8b(),bt 1a.6Q),1a.ax(),1a},cX:1b(a,b){1e 1a.2G.eq(a).4C("7N.1D").1v("5W.1D",b),1a},1o:1b(){1e 1a.2G.1o}}),a.1X(a.1c.1D,{43:"1.8.23"}),a.1X(a.1c.1D.3p,{as:1p,g0:1b(a,b){1d c=1a,d=1a.1f,e=c.eP||(c.eP=1b(b){8g(c.as),c.as=5u(1b(){1d a=d.1F;c.4b(++a<c.2G.1o?a:0)},a),b&&b.fP()}),f=c.eR||(c.eR=b?1b(a){e()}:1b(a){a.f1&&c.g0(1p)});1e a?(1a.1h.2d("eT",e),1a.2G.2d(d.4O+".1D",f),e()):(8g(c.as),1a.1h.31("eT",e),1a.2G.31(d.4O+".1D",f),bt 1a.eP,bt 1a.eR),1a}})}(2X);', 62, 1484, "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|function|ui|var|return|options|left|element|top|css|height|width|datepicker|offset|length|null|position|helper|disabled|addClass|document|data|state|parseInt|removeClass|case|effects|_trigger|Math|tabs|_get|selected|active|each|click|hide|show|button|widget|currentItem|break|apply|scrollParent|resizable|item|for|containment|animate|input|extend|dialog|attr|||||||corner||size|arguments|parent|div|target|bind|scrollTop|instance|call|values|test|typeof|scrollLeft|body|duration|draggable|new|containers|focus|menu|opacity|filter|value|find|from|Date|to|easing|zIndex|remove|class|ddmanager|queue|max|anchors|dpDiv|keyCode|handles|else|relative|span|window|right|appendTo|absolute|all|margins|items|helperProportions|bottom|content|jQuery|aria|add|callback|unbind|||||||||style|destroy|grid|255|browser|outerWidth|offsetParent|pageX|icon|placeholder|pageY|accordion|default|push|outerHeight|prototype|_uiHash|mode|overlay|lis|widgetName|overflow|buttonElement|axis|uiDialog|headers|handle|positionAbs|next|start|getTime|_setOption|cssPosition|getFullYear|hidden|px|min|hover|stop|title|removeAttr|unselecting|auto|children|string|dequeue|100|range|minHeight|type|originalPosition|slider||pos||version|curCSS||||val|ctrlKey|resize|select|fixed|isFunction|autocomplete|hasClass|index|panels|_helper|label|html|getDate|Widget|_change|href|parentNode|selecting|originalElement|getMonth|icons|visible|prev|end|cursor|close|scrollSensitivity|scrollSpeed|sortable|removeData|abs|minWidth|not|_daylightSavingAdjust|concat|contains|header|text|metaKey|parents|toLowerCase|event|_getInst|aspectRatio|preventDefault|collapsible|_create|role|activate|charAt|maxWidth|append|_valueMin||maxHeight|se|cookie|containerCache||down|settings|plugin|split|alsoResize|selectable|_defaults|orientation|blur|vertical|switch|map|parseFloat|originalSize|offsetHeight|number|nodeName|selectedMonth|_convertPositionTo|setMode|first|closest|restore|refresh|setTimeout|complete|droppable|_pos|inline|toShow|_adjustDate|yearshtml|tagName|ghost|documentElement|last|msie|selectedYear|up|match|trigger|snapElements|over|_trimAlignValue|markerClassName|revert|option|effect|maxZ|round|selectedDay|_ui|load|currentDay|scope|dragging||_valueMax|accept|sw|change|tolerance|direction|isover|_refreshValue|source|_mouseDrag|object|isNaN|horizontal|constructor|keydown|_curInst|reset|_hideDatepicker|drag|offsetWidth|snap|toHide|setTransition|continue|replace|save|tabIndex|current|get|overflowOffset|removeWrapper|deactivate|join|safari|dateFormat|sizeDiff|while|primary|secondary|mousedown|_mouseUp|_datepickerShowing|_|widgetEventPrefix|_dialogInput|catch|try|display|currentYear|handler|static|xhr|parentData|128|dayNamesShort|createWrapper|resizing|toggle|refreshPositions|pressed|_mouseStop|_animateOff|_mouseStart|dayNames|dpuuid|_mouseStarted||_disabledInputs|distance|instances|_formatDate|drawMonth|_updateDatepicker|_getMinMaxDate|term|_getFormatConfig|monthNamesShort|monthNames|collisionPosition|scrollHeight|marginTop|slide|drawYear|isOver|borderLeftWidth|hasScroll|borderTopWidth|currentMonth|prepareOffsets|none|autoHeight|throw|previous|mouseup|floor|cancel|_showDatepicker|both|false|true|_value|scroll|_clear|propAttr|exec|marginLeft|paddingTop|paddingBottom|bgiframe|isout|cache|uuid|DP_jQuery_|toggleClass|list|droppables|_proportionallyResizeElements|hash|_inDialog|speeds|intersect|margin|_lastInput||isArray|_storedCSS|checkbox|radio||clone|iframeFix|original|_getDaysInMonth|hoverClass|abort|prop|year|floating|step|clearTimeout|month|buttons|isOverAxis|yy|originalPageY|_mouseCapture|center|proportions|cancelHelperRemoval|stepMonths|_cookie|originalPageX|activeClass|_keyEvent|clearfix|mouse|shiftKey|innerHeight|startselected|visibility|isRTL|String|F0|Datepicker|_aspectRatio|backgroundColor|_getIndex|td|marginRight|marginBottom|maxRows|_generatePosition|_handleIndex|paddingLeft|sort|paddingRight|only|formatDate|plugins|_updateAlternate|of|dropBehaviour|currentContainer|domPosition|img|mouseover||running||139|name|className|progressbar|triangle|textarea|Array|originalTitle|drop|modal|_sanitizeSelector|padding|border|_clickOffset|expr|150|setDate|_mouseInit|disableSelection|borderDif|elementOffset|_keySliding|animated|fromOutside|innerWidth|_mouseDestroy|cursorAt|animateClass|andSelf|removeChild|support|_cacheHelperProportions|inArray|lastPositionAbs|dropped|ownerDocument|out|keyup|_tabify|_proportionallyResize|scrollWidth|containerElement|containerOffset|splice|stepBigMonths|_isOpen|blockUI|pow|getDay|key|stack|delay|_getParentOffset|expanded|_getRelativeOffset|UP|update|using|_init|preventClickEvent|counter|keypress|selectees|iframe|extendRemove|empty|multi|_isDisabledDatepicker|after|_mouseMoveDelegate|getAttribute|selectedItem|closeText|_propagate|panel|1e3|DOWN|_mouseDownEvent|shortYearCutoff|proxiedDuration|headerSelected|_notifyChange|proxied|_handles|pointer|log|rotation||192|processing|buttonpane|_cleanup|toString|circle|instActive|tr|ENTER|calendar|th|Class|ESCAPE|week|LEFT|onSelect|ajaxOptions|PAGE_DOWN|211|PAGE_UP|RIGHT|SPACE|activeElement|_doKeyDown|dialogClass|_slide|_setDate|titlebar|_getDefaultDate|tabbable|appendChild|beforeClose|createElement|_determineDate|_dayOverClass|_restrictMinMax|_setDateFromField|_getDate|enable|_triggerClass|_inlineClass|disable||||_mainDivId|||originalEvent|_mouseUpDelegate|mouseDelayMet|buttonset|addClasses|checked|neg|500|_mouseSliding|_createHelper|pieces|_cacheMargins|_adjustOffsetFromHelper|delete|_setContainment|526|sortables|transparent|percent|open|HTML|closing|snapping|search|fit|group|_adjustInstDate|insertBefore|_move|lastVal|parseDate|wrapper|pending|block|fillSpace|_clickHandler|containerSize|_getNumberOfMonths|_rearrange|connectWith|_storedZIndex|location|reverting|_detectOrientation|_storedCursor|_storedOpacity|table|float|mouseenter|mouseleave|forceHelperSize|_findActive|_createIcons|setOffset|ready|opos|_noFinalSort|selectee|dragged|valuenow|collisionHeight|_getItemsAsjQuery|containerPosition|prependTo|_destroyIcons|altKey|_toggle|nodeType|alsoresize|_getBorders|borderBottomWidth|borderRightWidth|cover|300|_updateCache|1000px|valueDiv|autohide|oldValue|collisionWidth|collision|elementIsWrapper|_getDragVerticalDirection|_getDragHorizontalDirection|_connectWith|wrap|custom|1e4|swing|touch|before|elemHeight|_out|_over|greedy|searching|_zIndex|rgb|origin|_initSource|ul|scale|beforeunloadHandler|_opacity|_cursor|url|success|error|elemWidth|_intersectsWith|targetHeight|targetWidth|relative_container|dragStop|grep|dragStart|menuitem|move|_gotoToday|color|fade||off|explode|form|hasTitle|_default|background|snapMode|_selectMonthYear|connectToSortable|times|||oldInstances|_resetButton|_selectDate|_mouseDelayMet|_mouseDistanceMet|rtl|_minHeight|_refreshItems|mousemove|isDefaultPrevented|Invalid|_position|substring|_ticksTo1970|_size|_dialogClass|_selectDay|_unselectableClass|_createButtons|_currentClass|sqrt|_makeResizable|_setOptions|regional|create|slice|widgetBaseClass|_start|_createWidget|cleanData|100px|_makeDraggable|indexOf|beforeclose|tabindex|outer|inner|169|moveToTop|Bottom|Top|Right|Left|140|Width|src|_stop|_disableDatepicker||_autoSize|elementSize|selectstart|_doKeyUp|_doKeyPress|closeOnEscape|_attachments|_normValueFromMouse|||TAB|initialized|xa0||_values|_newInst|middle|panelTemplate|spinner|showAnim|showOptions|gotoCurrent|calculateWeek|iso8601Week|107|minDate|maxDate|_tabId|boolean|showCurrentAtPos|HOME|bindHover|cssText|today|_canAdjustMonth|END|priority|_isInRange|_rotate|date|_unrotate|_toggleClass|tabsshow|fractions|flip|compareDocumentPosition|isMultiLine|storage|haspopup|trim|clientX|previousPage|nextPage|getBaseline|valuemax|revertDuration|bridge|unselected|fontSize|diagonal|_activate|events|dropOnEmpty|replaceWith|forcePlaceholderSize|cssUnit|borderColor|one|_renderAxis|_show|beforeunload|_hide||__toggle|ajax|colorInit|charCode|_possibleChars|elem|_deactivate|_search|loading||_response|__response||_normalize|_suggest|getHours|setHours|Event|_renderMenu|_resizeMenu|NUMPAD_ENTER|_renderItem|normal|cell|escapeRegex|RegExp|_drop|stopPropagation|getYear|PI|has|240|_clearDate|_mouseMove|245|_removeCurrentsFromItems|idPrefix|_determineButtonType|rotate|165|864e5|_createPlaceholder|snapTolerance|clickOffset|siblings|accessible|_renderProxy|Year|valuemin|Month|borderWidth|uiDialogTitlebarCloseText|debug|uiDialogTitlebar|_intersectsWithPointer|greedyChild|getTitleId|160|originalMousePosition|_appendClass|highlight|backgroundImage|nav|removeAttribute|animateDuration|_updateVirtualBoundaries|_intersectsWithSides|autoOpen|toFixed|_updateRatio|_respectSize|_getDateDatepicker|prevText|_optionDatepicker|nextText|Missing|currentText|_contactContainers|animateEasing|Infinity|prepend|transfer|_vBoundaries|May|clientHeight|clientWidth|_getCreateOptions|_getFirstDayOfMonth|connected|_dialogInst|clearStyle|attribute|expression|tbody|_getHandle|autoHide|col|DD|_checkExternalClick|setMonth|_tidyDialog|230|alt|release|navigation|navigationFilter|snapItem|_mouseDown|getData|setData|224|thead|144|_generateMonthYearHeader|toleranceElement|triggerHandler|refreshContainers|dayNamesMin|stopImmediatePropagation|_focus|nextSibling|_inlineDatepicker|_connectDatepicker|makeArray|tab|weekHeader|_keydown|metadata|receive|firstDay|showMonthAfterYear|yearSuffix|beforeStop|showOn|fadeIn|_percentage|defaultDate|appendText|buttonText|buttonImage|buttonImageOnly|hideIfNoPrevNext|navigationAsDateFormat|createPseudo|changeMonth|changeYear|yearRange|showOtherMonths|selectOtherMonths|showWeek|_attachHandlers|autoRefresh|newHeader|oldHeader|beforeShowDay|beforeShow|newContent|onChangeMonthYear|onClose|numberOfMonths|oldContent|originalResizeStyle|_generateHTML|filters|altField|altFormat|constrainInput|showButtonPanel|autoSize|selectYear|_completed|selectMonth|selectDay|shouldRevert|mouseout||animations||unit|_checkOffset|defaultView|_findPos|tabTemplate|_addClass|autoFocus||minLength|_attachDatepicker|_removeClass|setDefaults||console|hasDatepicker|eval|err|fast|Wk|Sa|Fr|Th|We|Tu|Za|z0|9_|Mo|Su|Sat|Fri|Thu|Wed|Tue|Mon|Sun|Saturday|Friday|Thursday|Wednesday|Tuesday|Monday|Sunday|Dec|Nov|Oct|2009|DM|Sep|MM|Aug|Jul|Jun|Apr|Mar|Feb|Jan|December|_dialogDatepicker|November|October|0px|September|August|July|June|April|_destroyDatepicker|_enableDatepicker|March|February|January|Today|Next|Prev|defaults|Done|days|_changeDatepicker|_refreshDatepicker|_setDateDatepicker|day|unselectable|_disableClass|submit|All|nextAll|prevAll|activedescendant|listbox|json|fromCharCode|dataType|readOnly|textbox|200|easeOutBounce|opera|bounceslide|now|700|changestart|currentTarget|fillHeight|tabpanel|tablist|fix|thin|medium|thick|previousSibling|even|slideDown|slideUp|fadeOut|unblockUI|child|shake|box|puff|pulsate|ffff99|horizFirst|fold|IMG|clip|250|bounce|draw|selectedIndex|blind|easeInOut|noWeekends|easeOut|easeIn|5625|Bounce|substr|Unknown|Unexpected|literal|Back|Extra|unparsed|characters|found|sin|Elastic|ATOM|COOKIE|ISO_8601|RFC_822|RFC_850|RFC_1036|RFC_1123|RFC_2822|RSS|TICKS|TIMESTAMP|W3C|718685|492|925|Circ|1e7|cos|0123456789|Sine|Expo|Quint|Quart|Cubic|setMinutes|setSeconds|setMilliseconds|Quad|pt|switchClass|borderTop|borderRight|borderLeft|borderBottom|_widgetDatepicker|yellow|white|silver|red|violet||purple|203|pink|orange|olive|navy|maroon|magenta|lime|lightyellow|193|182|lightpink|lightgrey|238|lightgreen|lightcyan|216|173|lightblue|khaki|130|indigo|green|215|gold|ceil|fuchsia|148|darkviolet|122|233|other|darksalmon|row|javascript|frameborder|darkred|isDisabled|204|153|darkorchid|darkorange|darkolivegreen|darkmagenta|outline|labelledby|183|189|darkkhaki|darkgreen|closethick|darkgrey|darkcyan|darkblue|cyan|brown|blue|black|220|isOpen|beige|azure|aqua|outlineColor||resizeStart|resizeStop|grip|borderTopColor|borderRightColor|borderLeftColor|pop|borderBottomColor|scrollbar|toUpperCase|currentStyle||getComputedStyle|rgba|sender|forcePointerForContainers|toArray|serialize|dynamic|getElementsByTagName|firstChild|7432222px|432325px|30px|201px|innerHTML|2e3|semi|_preserveHelperProportions|clientY|instanceof|documentScroll|gripsmall|zoom|canvas|slow|fromSortable|toSortable|valid|invalid|001|fff|documentMode|_mouseDelayTimer|which|started|namespace|onselectstart|focusable|Height|jquery|enableSelection|WINDOWS||SHIFT|190|PERIOD|109|NUMPAD_SUBTRACT|106|NUMPAD_MULTIPLY|108|111|NUMPAD_DIVIDE|Loading|8230|110|NUMPAD_DECIMAL|NUMPAD_ADD|u00c0|uFFFF||MENU|INSERT|DELETE|CONTROL|COMMAND_RIGHT|COMMAND_LEFT|ol|COMMAND|base|188|insertAfter|COMMA|unique|unload|CAPS_LOCK|UI|Tabs|Mismatching|fragment|identifier|BACKSPACE|ALT|usemap|area|9999".split("|"), 0, {}));
$.popupMensagem = function() {
    $(".msgAlertPopup").click(function() {
        if (!$(this).parent("li").hasClass("see") && !$(this).hasClass("linkBottom") && $(this).parent("li").parent("ul").hasClass("listagem")) {
            $(this).parent("li").addClass("see");
            var a = parseInt($("#qtdeNaoLidas").html()) - 1;
            if (a == 1) {
                $(".linkBottom.msgAlertPopup").html('<span class="setaRightb2c"></span>VocÃª possui <strong><span id="qtdeNaoLidas">' + a + " mensagem</strong> nÃ£o lida");
                $(".msgAlert > .numAlertb2c").html(a)
            } else {
                if (a > 1) {
                    $(".linkBottom.msgAlertPopup").html('<span class="setaRightb2c"></span>VocÃª possui <strong><span id="qtdeNaoLidas">' + a + " mensagens</strong> nÃ£o lidas");
                    $(".msgAlert > .numAlertb2c").html(a)
                } else {
                    $(".linkBottom.msgAlertPopup").html('<span class="setaRightb2c"></span>Ir para Caixa de Mensagens');
                    $(".msgAlert > .numAlertb2c").remove()
                }
            }
        }
        window.open($(this).attr("href"), "page", "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=740,height=540");
        return false
    })
};
$.layerEntrevista = function() {
    if ($.isTouch() == false) {
        $(".calendarAlert").colorbox({
            width: "700",
            height: "500",
            iframe: true,
            href: function() {
                return $(this).attr("href")
            },
            title: function() {
                return "Agendamento de Entrevistas Catho"
            }
        })
    }
};
$.menuSuspensoLogado = function() {
    $(".closeMenuSuspensoLogado").click(function(a) {
        a.preventDefault();
        $(this).parent(".menuSuspensoLogado").hide();
        return false
    });
    if (($("#top").hasClass("cursos") || $("#top").hasClass("b2b")) && $(".boxLogadoAreaCandidato").size() > 0) {
        $(".minhaConta").on("click", function() {
            $(this).toggleClass("open")
        });
        $(window).on("click", function(a) {
            var b = $(a.target);
            if (!b.hasClass("minhaConta") && b.parents(".menuSuspensoLogado").size() === 0 && b.parents(".minhaConta").size() === 0 && !b.hasClass("btnLogin") && b.parents(".loginSuspenso").size() === 0) {
                if ($(".minhaConta").hasClass("open")) {
                    $(".minhaConta").removeClass("open")
                }
            }
        })
    }
};
$.isTouch = function() {
    var a = $("body");
    if (a.hasClass("isTablet") || a.hasClass("isMobile")) {
        return true
    } else {
        return false
    }
};
$.layerAlterarFoto = function() {
    if ($.isTouch() == false) {
        if (!$(".layerAvisoPhoto").hasClass("linkLayerPhoto")) {
            var a = "650",
                b = "290"
        } else {
            var a = "800",
                b = "700"
        }
        if ($(".layerAvisoPhoto").length > 0) {
            $(".layerAvisoPhoto").colorbox({
                width: a,
                height: b,
                iframe: true,
                autoresize: true,
                href: function() {
                    return $(".layerAvisoPhoto").attr("href")
                }
            })
        }
    }
};

function fixaLogin(a) {
    var b = a.find("input");
    $(document).on({
        click: function(c) {
            if (c.target.id !== "boxLoginB2b" && c.target.className.indexOf("iconsLogin") === -1 && c.target.parentNode.className !== "labelUserContainer" && c.target.parentNode.className !== "labelPasswordContainer" && c.target.id !== "password" && c.target.id !== "login") {
                a.removeClass("fixed")
            }
        }
    });
    b.on({
        focus: function() {
            a.addClass("fixed")
        },
        blur: function() {
            setTimeout(function() {
                if (a.find(":focus").size() === 0) {
                    a.removeClass("fixed")
                }
            }, 10)
        }
    })
}
$.formLogin = function() {
    var a = true;
    $(".boxLogin").on({
        submit: function() {
            if ($("#login").val() == "" || $("#password").val() == "") {
                alert("Preencha os dados de login e senha corretamente.");
                return false
            }
            if (a && $(".boxLogin").find('input[name="redir"]').length > 0) {
                setTimeout(function() {
                    var d = $('input[name="redir"]').val();
                    var c = typeof($(".labelUser #iconUser").html()) == "undefined" ? $(".boxLogin a.selected").text() : $(".labelUser #iconUser").html();
                    $.ajax({
                        url: "/empresa/home/ajaxCriaCookieLoginEmpresa/",
                        data: "loginHrefAreaPrincipal=" + d + "&loginAreaPrincipal=" + c,
                        type: "post",
                        success: function() {},
                        complete: function() {
                            a = false;
                            $("form.boxLogin").submit()
                        }
                    })
                }, 200);
                return false
            } else {
                if ($(this).hasClass("redir")) {
                    var b = new Loader();
                    b.initLoader("body", 0.5, "loaderLogin");
                    $.ajax({
                        url: $(this).attr("action"),
                        data: "login=" + $("#login").val() + "&senha=" + $("#password").val() + "&fromAjax=1",
                        type: "post",
                        dataType: "jsonp",
                        crossDomain: true,
                        jsonp: false,
                        async: false,
                        jsonpCallback: "jsonUsuarioId",
                        beforeSend: function() {
                            b.openLoader()
                        },
                        success: function(c) {
                            b.closeLoader();
                            if (c > 0) {
                                parent.$.colorbox.close();
                                parent.location.reload();
                                return false
                            } else {
                                alert("Login ou Senha incorretos!");
                                return false
                            }
                        }
                    });
                    return false
                }
            }
        }
    })
};
Suggest = {
    clickEvent: 0
};
$.fn.extend({
    suggestLastSearch: function(b) {
        var c = {
            showLastSearch: false,
            minLength: 2,
            lastSearch: "",
            pathAjax: "/util/cargo/suggest/%%term%%/",
            typeEvent: "AutoComplete",
            appendTo: "",
            link: "",
            limitString: "",
            submitOnClickLastSearch: false
        };
        var b = $.extend(c, b);
        return this.each(function() {
            var h = siteAtual;
            var g = b;
            var k = $(this);
            var d = {},
                t;
            var n = g.lastSearch;
            var i = g.lastSearch;
            var s = g.appendTo;
            var q = g.link;
            var e;
            var p;
            var j;
            k.autocomplete({
                minLength: 0,
                appendTo: s,
                source: function(v, o) {
                    var u = filterData(v.term);
                    if (u.length < g.minLength) {
                        $(".lastsearch-autocomplete").hide();
                        $(".ui-autocomplete").hide();
                        return
                    }
                    $(".ui-autocomplete").css({
                        position: "absolute"
                    });
                    if (u in d) {
                        o(d[u]);
                        if (m) {
                            m()
                        }
                        l(u);
                        $(".ui-autocomplete, .lastsearch-autocomplete").css({
                            width: k.outerWidth() - 2 + "px"
                        }).addClass(h)
                    }
                    searchPath = g.pathAjax.replace(/%%term%%/g, u);
                    t = $.getJSON(searchPath, "", function(x, w, y) {
                        if (x.length == 0) {
                            f();
                            return
                        }
                        d[u] = x;
                        if (y === t) {
                            o(x);
                            $(".ui-autocomplete").css({
                                width: k.outerWidth() - 5 + "px"
                            }).addClass(h)
                        }
                        if (m) {
                            m()
                        }
                        l(u)
                    })
                }
            });
            var m = function() {
                $(".autoCompleteBusca").find(".ui-autocomplete").css("z-index", "100");
                var o = k.attr("placeholder");
                if (n != "" && n != o) {
                    if (g.limitString != "") {
                        if (n.length > g.limitString) {
                            i = n.substring(0, g.limitString) + "..."
                        }
                    }
                    if ($(".lastsearch-autocomplete").length > 0) {
                        $(".lastsearch-autocomplete").show();
                        r()
                    } else {
                        if (q != "") {
                            $(s + " .ui-autocomplete").after('<div class="lastsearch-autocomplete" style="position: absolute; z-index: 999;"><b>Sua Ãºltima busca:</b> <span><a onclick="s_objectID = \'suggest_ultima_busca\'" href=' + q + ' title="' + n + '">' + i + "</a></span></div>")
                        } else {
                            $(s + " .ui-autocomplete").after('<div class="lastsearch-autocomplete" style="position: absolute; z-index: 999;"><b>Sua Ãºltima busca:</b> <span id="suggest_ultima_busca" onclick="s_objectID = \'suggest_ultima_busca\'">' + i + "</span></div>")
                        }
                        r()
                    }
                    autoCompleteHeight = $(s + " .ui-autocomplete").css("height").replace("px", "");
                    lastSearchWidth = $(s + " .ui-autocomplete").css("width");
                    lastSearchTop = $(s + " .ui-autocomplete").css("top").replace("px", "").replace("-", "");
                    lastSearchLeft = $(s + " .ui-autocomplete").css("left");
                    lastSearchTop = parseInt(autoCompleteHeight) + parseInt(lastSearchTop);
                    if ($(s + " .ui-autocomplete").css("display") == "none") {
                        lastSearchTop = parseInt(lastSearchTop)
                    }
                    $(".lastsearch-autocomplete").css({
                        width: k.outerWidth() - 7 + "px",
                        top: lastSearchTop + "px",
                        left: parseInt($(s + " .ui-autocomplete").css("left")) + 2 + "px"
                    }).addClass(h);
                    $(".lastsearch-autocomplete").show()
                }
            };
            var r = function() {
                e = 1;
                $(".ui-autocomplete li").click(function() {
                    Suggest.clickEvent = 1;
                    k.val($(this).find("a").html());
                    f();
                    setTimeout(function() {
                        Suggest.clickEvent = 0
                    }, 100)
                });
                $("html").click(function(o) {
                    if (o.target.id != k.attr("id")) {
                        f()
                    }
                });
                $("ul.ui-autocomplete").scroll(function() {
                    clearTimeout(p)
                });
                k.blur(function() {
                    p = setTimeout(f, 400)
                });
                k.bind({
                    keyup: function(o) {
                        if (o.keyCode == 13 || o.keyCode == 27) {
                            f()
                        }
                    }
                });
                $(".lastsearch-autocomplete").click(function() {
                    k.val(n);
                    if (g.submitOnClickLastSearch) {
                        k.closest("form").submit()
                    }
                    f()
                })
            };
            var f = function() {
                clearTimeout(p);
                $(".ui-autocomplete").hide();
                $(".lastsearch-autocomplete").hide()
            };
            var l = function(o) {
                if (g.typeEvent == "AutoComplete") {
                    $(".ui-autocomplete li a").each(function() {
                        var u = filterData($(this).html());
                        $(this).html("<b>" + u.substring(0, o.length) + "</b>" + u.substring(o.length))
                    })
                } else {
                    if (g.typeEvent == "Suggest") {
                        $(".ui-autocomplete li a").each(function() {
                            var x = $(this).html();
                            var u = filterData(x).split(o.toLowerCase());
                            var w = 0;
                            var A = "";
                            for (a = 0; a < u.length; a++) {
                                var z = u[a].length;
                                var y = x.substring(w, z + w);
                                var v = x.substring(w + z, w + z + o.length);
                                A += y;
                                if (a < u.length - 1) {
                                    A += "<b>" + v + "</b>"
                                }
                                w = A.stripHTML().length
                            }
                            $(this).html(A)
                        })
                    }
                }
            }
        })
    }
});
String.prototype.stripHTML = function() {
    return this.replace(/<.*?>/g, "")
};

function filterData(b) {
    b = b.toLowerCase();
    b = b.replace(/Ã¡/g, "a");
    b = b.replace(/Ã£/g, "a");
    b = b.replace(/Ã¢/g, "a");
    b = b.replace(/Ã³/g, "o");
    b = b.replace(/Ãµ/g, "o");
    b = b.replace(/Ã´/g, "o");
    b = b.replace(/Ã§/g, "c");
    b = b.replace(/Ã©/g, "e");
    b = b.replace(/Ãª/g, "e");
    b = b.replace(/áº½/g, "e");
    b = b.replace(/Ã­/g, "i");
    b = b.replace(/Ã®/g, "i");
    b = b.replace(/Ãº/g, "u");
    b = b.replace(/Ã§/g, "c");
    return b
};
(function(a) {
    a.fn.toolTipPlugin = function(b) {
        var c = {
                closeTipBtn: "tooltipClose",
                toolTipId: "tooltipPlugin",
                toolTipContainerClass: "tooltipPlugin",
                extraClass: "",
                fixed: true,
                openOnClick: false,
                toolTipClass: "tooltipFormat",
                xOffset: 0,
                yOffset: 0,
                layout: "",
                arrowPosition: "down",
                align: "right",
                delayHover: 0,
                delayHoverOut: 0,
                showOnLoad: false,
                noHide: false,
                onShow: null,
                onHide: null,
                onCompleteShow: null,
                onCompleteHide: null
            },
            b = a.extend(c, b);
        return this.each(function() {
            var e = b;
            var i = a(this);
            var q = i.next(".toolTipContainer").html();
            i.next(".toolTipContainer").remove();
            var l = e.arrowPosition;
            var p = function() {
                    i.append("<div id='" + e.toolTipId + "' class='" + e.toolTipContainerClass + " " + e.extraClass + "'><div class='" + e.layout + " " + e.toolTipClass + "'><span class='arrow " + e.arrowPosition + "'></span>" + q + "</div></div>");
                    if (q && e.openOnClick || q && e.noHide) {
                        i.children("." + e.toolTipContainerClass).children("." + e.toolTipClass).append("<a class='" + e.closeTipBtn + "' href='#' alt='Fechar'></a>").outerHeight()
                    }
                },
                j = function() {
                    i.children("." + e.toolTipContainerClass).css({
                        top: (e.arrowPosition == "down") ? (i.position().top - i.children("." + e.toolTipContainerClass).outerHeight() + e.yOffset) + "px" : (i.position().top + e.yOffset) + i.outerHeight() + "px",
                        left: (e.align == "right") ? (i.position().left - e.xOffset + i.width() - i.children("." + e.toolTipContainerClass).width()) + "px" : (i.position().left + e.xOffset) + "px"
                    })
                },
                g = function() {
                    if (i.offset().top + i.children("." + e.toolTipContainerClass).outerHeight() > a(window).scrollTop() + a(window).height() - 20) {
                        e.arrowPosition = "down";
                        i.children("." + e.toolTipContainerClass).children("div").children("span.arrow").removeClass("up").addClass("down")
                    } else {
                        if (l == "down") {
                            e.arrowPosition = "down";
                            i.children("." + e.toolTipContainerClass).children("div").children("span.arrow").removeClass("up").addClass("down")
                        } else {
                            e.arrowPosition = "up";
                            i.children("." + e.toolTipContainerClass).children("div").children("span.arrow").removeClass("down").addClass("up")
                        }
                    }
                },
                f = function() {
                    if (i.offset().left + i.children("." + e.toolTipContainerClass).outerWidth() > a(window).width() - a("#content").offset().left) {
                        e.align = "right";
                        i.children("." + e.toolTipContainerClass).children("div").children("span.arrow").removeClass("left").addClass("right")
                    } else {
                        e.align = "left";
                        i.children("." + e.toolTipContainerClass).children("div").children("span.arrow").removeClass("right").addClass("left")
                    }
                },
                d = function() {
                    g();
                    f()
                },
                n = function() {
                    j();
                    i.children("." + e.toolTipContainerClass).stop().fadeIn(100, function() {
                        if (a.isFunction(e.onShow)) {
                            e.onShow(i)
                        }
                    })
                },
                m = function() {
                    i.children("." + e.toolTipContainerClass).fadeOut(100, function() {
                        a(this).hide();
                        if (e.onHide !== null) {
                            e.onHide()
                        }
                        if (a.isFunction(e.onCompleteHide)) {
                            e.onCompleteHide(i)
                        }
                    })
                };
            p();
            n();
            var k = i.children("." + e.toolTipContainerClass);
            if (q && !e.openOnClick && !e.noHide) {
                i.children("." + e.toolTipContainerClass).hide();
                var h = 0;
                i.hover(function() {
                    clearTimeout(i.data("timeout"));
                    i.data("timeout", setTimeout(function() {
                        if (h == 0) {
                            m();
                            k.stop().css({
                                display: "block"
                            }).animate({
                                opacity: 1
                            }, {
                                duration: 100,
                                complete: function() {
                                    if (a.isFunction(e.onShow)) {
                                        e.onShow(i)
                                    }
                                }
                            });
                            h = 1;
                            d();
                            j()
                        }
                    }, e.delayHover))
                }, function() {
                    clearTimeout(i.data("timeout"));
                    if (h == 1) {
                        i.data("timeout", setTimeout(function() {
                            m();
                            h = 0
                        }, e.delayHoverOut))
                    }
                })
            }
            if (e.noHide || e.showOnLoad) {
                i.children("." + e.toolTipContainerClass).show()
            }
            if (q && e.openOnClick) {
                i.click(function(o) {
                    if (a(k).is(":visible")) {
                        k.fadeOut(100);
                        if (a.isFunction(e.onCompleteHide)) {
                            e.onCompleteHide(i)
                        }
                    } else {
                        k.fadeIn(100);
                        if (a.isFunction(e.onCompleteShow)) {
                            e.onCompleteShow(i)
                        }
                    }
                    j();
                    return false
                });
                k.click(function(o) {
                    o.preventDefault();
                    return false
                });
                if (!e.showOnLoad) {
                    i.children("." + e.toolTipContainerClass).hide()
                }
            }
            if (e.noHide || e.openOnClick) {
                k.find("." + e.closeTipBtn).click(function(o) {
                    o.preventDefault();
                    m();
                    return false
                })
            }
            if (!e.fixed && !e.openOnClick) {
                i.mousemove(function(o) {
                    k.css({
                        top: (e.arrowPosition == "down") ? (o.pageY - e.yOffset) : (o.pageY - e.yOffset),
                        left: (o.pageX - i.offset().left + e.xOffset)
                    })
                })
            }
        })
    }
})(jQuery);