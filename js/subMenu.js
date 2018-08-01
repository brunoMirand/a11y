$.popupMensagem = function() {
    $(".msgAlertPopup").click(function() {
        if (!$(this).parent("li").hasClass("see") && !$(this).hasClass("linkBottom") && $(this).parent("li").parent("ul").hasClass("listagem")) {
            $(this).parent("li").addClass("see");
            var a = parseInt($("#qtdeNaoLidas").html()) - 1;
            if (a == 1) {
                $(".linkBottom.msgAlertPopup").html('<span class="setaRightb2c"></span>Você possui <strong><span id="qtdeNaoLidas">' + a + " mensagem</strong> não lida");
                $(".msgAlert > .numAlertb2c").html(a)
            } else {
                if (a > 1) {
                    $(".linkBottom.msgAlertPopup").html('<span class="setaRightb2c"></span>Você possui <strong><span id="qtdeNaoLidas">' + a + " mensagens</strong> não lidas");
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
var Menu = {
    defaults: {
        breakpoint: 760
    },
    variables: {
        preventEvent: {}
    },
    instances: {},
    init: function(a) {
        var a = a || {};
        Menu.options = new Utils().combineObject(Menu.defaults, a);
        Menu.variables.breakPointHamburger = Menu.options.breakpoint;
        Menu.cacheElements();
        Menu.adaptative();
        Menu.recalcularSubMenusOnResize();
        Menu.otherTooltip()
    },
    cacheElements: function() {
        Menu.variables.menuContainer = $("#menuHeader"), Menu.variables.containerTopoMenu = $(".containerTopoMenu"), Menu.variables.submenu = Menu.variables.containerTopoMenu.find(".autoResizeAndOverflow");
        Menu.variables.submenuitem = Menu.variables.containerTopoMenu.find(".subMenuItem");
        Menu.variables.totalSubmenuElmts = Menu.variables.submenu.size()
    },
    adaptative: function() {
        if (new Support().isTouchScreen()) {
            Menu.touchEvent()
        } else {
            Menu.desktopEvent()
        }
        $(window).on("click", function(a) {
            var b = $(a.target);
            if (!b.hasClass("noHref") && b.parents(".subMenuItem").size() === 0 && !b.hasClass("minhaConta") && b.parents(".menuSuspensoLogado").size() === 0 && b.parents(".minhaConta").size() === 0 && !b.hasClass("btnLogin") && b.parents(".loginSuspenso").size() === 0) {
                Menu.resetSubmenu(Menu.variables.submenu)
            }
        })
    },
    preventDuplicateEvent: function(b, a) {
        if (!Menu.variables.preventEvent[b]) {
            Menu.variables.preventEvent[b] = true;
            setTimeout(function() {
                Menu.variables.preventEvent[b] = false
            }, a);
            return true
        }
        return false
    },
    delayEventOnNativeAndroid: function(b, a) {
        if (!a) {
            a = 400
        }
        if (new Support().isNativeAndroid()) {
            setTimeout(b, a)
        } else {
            b.call()
        }
    },
    touchEvent: function() {
        Menu.instances.submenuItem = new PointerEvents(Menu.variables.submenuitem.children(".noHref").not(".minhaConta"), {
            preventDefault: true
        });
        Menu.instances.submenuItem.createPointerEvent("tap", function() {
            if (Menu.preventDuplicateEvent("tap", 500)) {
                Menu.variables.preventDualTap = true;
                var c = $(this),
                    b = c.next("ul"),
                    a = c.parent("li"),
                    d = parseFloat(b.css("opacity"));
                if ((d !== 0 && d !== 1 && !new Support().isNativeAndroid()) || new Support().onBreakPoint(Menu.variables.breakPointHamburger)) {
                    return false
                }
                Menu.resetSubmenu(a);
                Menu.setStartHeight(b);
                Menu.resizeSubMenu(b);
                if ((d === 1 && !new Support().isNativeAndroid()) || (b.is(":visible") && new Support().isNativeAndroid())) {
                    Menu.delayEventOnNativeAndroid(function() {
                        a.removeClass("open")
                    })
                } else {
                    a.addClass("open")
                }
            }
        });
        new PointerEvents(Menu.variables.submenuitem.children("ul").find("li").not(".subTitulo"), {
            preventDefault: false
        }).createPointerEvent("tap", function() {
            var a = this;
            Menu.delayEventOnNativeAndroid(function() {
                $(a).parents(".subMenuItem").removeClass("open")
            })
        })
    },
    resizeSubMenu: function(e) {
        if (Organizacao.isManager() || ($("body").hasClass("noResponsive") && new Support().isTouchScreen())) {
            return false
        }
        var f = 120,
            a = e.attr("data-startheight"),
            h = window.innerHeight,
            g = Menu.variables.menuContainer.offset().top + $(document).scrollTop(),
            d = e.offset().top + Menu.variables.containerTopoMenu.height() - g,
            c = h - d,
            b = "comScroll";
        if (c <= f) {
            c = f
        } else {
            if (c > a) {
                c = a;
                b = ""
            }
        }
        e.height(c).addClass(b)
    },
    recalcularSubMenusOnResize: function() {
        var c, b;
        $(window).on("resize", function() {
            for (b = 0; b < Menu.variables.totalSubmenuElmts; b = b + 1) {
                c = $(Menu.variables.submenu[b]);
                if (c.css("opacity") > 0) {
                    Menu.resizeSubMenu(c)
                }
            }
        })
    },
    desktopEvent: function() {
        $(".noHref").on("click", function(a) {
            a.preventDefault()
        });
        Menu.variables.submenuitem.on("mouseenter", function() {
            Menu.resizeAction($(this))
        });
        if (new BrowserCatho().getBrowser() === "msie" && new BrowserCatho().getVersion() <= 8) {
            Menu.variables.submenuitem.on({
                mouseenter: function() {
                    $(this).children("ul").css({
                        visibility: "visible",
                        opacity: 1
                    })
                },
                mouseleave: function() {
                    $(this).children("ul").css({
                        visibility: "hidden",
                        opacity: 0
                    })
                }
            })
        }
    },
    resizeAction: function(a) {
        var b = a.children("ul");
        Menu.resetSubmenu(b);
        Menu.setStartHeight(b);
        Menu.resizeSubMenu(b)
    },
    setStartHeight: function(a) {
        a.removeAttr("style");
        var b = a.height();
        a.attr("data-startheight", b)
    },
    resetSubmenu: function(a) {
        Menu.variables.submenuitem.not(a).removeClass("open");
        if (a) {
            Menu.resetOtherTooltip()
        }
    },
    resetOtherTooltip: function() {
        $(".actionsEntrar").find(".btnLogin").removeClass("active").nextAll(".loginSuspenso").css({
            display: "none",
            opacity: 0
        });
        $(".minhaConta").removeClass("open")
    },
    otherTooltip: function() {
        new PointerEvents($(".btnLogin, .boxLogadoAreaCandidato a.minhaConta"), {
            preventDefault: false
        }).createPointerEvent("tap", function() {
            Menu.variables.submenuitem.removeClass("open")
        })
    }
};
var TouchInteraction = {
    variables: {
        movePercent: 1
    },
    instances: {},
    dragMenu: function(c, b) {
        var a = this.getPosition(c, b);
        TouchInteraction.variables.movePercent = this.getMovePercent(c, b);
        MenuDispositivosPequenos.variables.overlay.css("opacity", TouchInteraction.variables.movePercent / 100);
        MenuDispositivosPequenos.variables.containerTopoMenu.css("top", a.topoMenuPosition);
        MenuDispositivosPequenos.variables.menuHeader.css("top", a.menuPosition)
    },
    getMovePercent: function(d, c) {
        var a = this.getPosition(d, c),
            e = window.innerHeight,
            b = a.topoMenuPosition * 100 / e;
        return b
    },
    getPosition: function(c, b) {
        var a = {};
        switch (c) {
            case "toTop":
                a = this.getPositionToTop(b);
                break;
            case "toBottom":
                a = this.getPositionToBottom(b);
                break;
            default:
                throw "Direction do not implemented"
        }
        return a
    },
    getInitPosition: function() {
        return {
            initPositionTopo: parseInt(MenuDispositivosPequenos.variables.containerTopoMenu.css("top"), 10),
            initPositionMenu: parseInt(MenuDispositivosPequenos.variables.menuHeader.css("top"), 10),
        }
    },
    getPositionToTop: function(c) {
        var b = this.getInitPosition(),
            d = b.initPositionTopo - c.movedy,
            a = b.initPositionMenu - c.movedy;
        if (d < 0) {
            d = 0;
            a = b.initPositionMenu
        }
        return {
            topoMenuPosition: d,
            menuPosition: a
        }
    },
    getPositionToBottom: function(c) {
        var b = this.getInitPosition(),
            d = b.initPositionTopo + c.movedy,
            a = b.initPositionMenu + c.movedy;
        if (d > MenuDispositivosPequenos.getMaxMenuHeight()) {
            d = b.initPositionTopo;
            a = b.initPositionMenu
        }
        return {
            topoMenuPosition: d,
            menuPosition: a
        }
    }
};
var MenuAnimation = {
    variables: {},
    constantes: {
        animationTime: 500
    },
    getAbaTopo: function() {
        return -(MenuDispositivosPequenos.variables.topBarResponsive.height())
    },
    closeMenu: function(a) {
        MenuAnimation.actionMenu("close", a)
    },
    openMenu: function() {
        MenuAnimation.actionMenu("open")
    },
    actionMenu: function(a, b) {
        MenuAnimation.setStyleBody(a);
        MenuAnimation.prepareAbasBar(a);
        MenuAnimation.animateMenu(a, b);
        MenuAnimation.animateOverlay(a);
        MenuAnimation.restartScroll(a)
    },
    restartScroll: function(a) {
        MenuDispositivosPequenos.variables.menuHeader.scrollTop(0)
    },
    compensaFixed: function(a) {
        if (a === "open") {
            MenuDispositivosPequenos.variables.overlay.next().css("padding-top", MenuDispositivosPequenos.variables.containerTopoMenu.outerHeight())
        } else {
            MenuDispositivosPequenos.variables.overlay.next().removeAttr("style")
        }
    },
    hideBackground: function(a) {
        if (a === "open") {
            $("body").children("div, footer").addClass("hideOnMenuOpen")
        } else {
            $(".hideOnMenuOpen").removeClass("hideOnMenuOpen")
        }
    },
    animateMenu: function(a, b) {
        if (a === "open") {
            MenuDispositivosPequenos.variables.containerTopoMenu.css("top", MenuAnimation.variables.initPosition).addClass("opened");
            MenuAnimation.compensaFixed(a)
        }
        MenuDispositivosPequenos.variables.containerTopoMenu.animate({
            top: ((a === "open") ? MenuDispositivosPequenos.getMaxMenuHeight() : MenuAnimation.variables.initPosition)
        }, MenuAnimation.getAnimateConfig(a));
        MenuDispositivosPequenos.variables.menuHeader.animate({
            top: ((a === "open") ? 0 : MenuDispositivosPequenos.getMenuHeaderInitPosition())
        }, MenuAnimation.getAnimateConfig(a, b));
        MenuAnimation.hideBackground(a)
    },
    setStyleBody: function(a) {
        if (a === "open") {
            $("body").css("overflow", "hidden")
        } else {
            $("body").css("overflow", "visible")
        }
    },
    prepareAbasBar: function(a) {
        if (a === "open") {
            MenuAnimation.animateAbasBar(a)
        } else {
            setTimeout(function() {
                MenuAnimation.animateAbasBar(a)
            }, MenuAnimation.constantes.animationTime - MenuAnimation.constantes.animationTime / 2)
        }
    },
    animateOverlay: function(a) {
        if (a === "open") {
            MenuDispositivosPequenos.variables.overlay.css("display", "block")
        }
        MenuDispositivosPequenos.variables.overlay.animate({
            opacity: ((a === "open") ? 1 : 0)
        }, {
            duration: MenuAnimation.constantes.animationTime,
            queue: false,
            complete: function() {
                if (a === "close") {
                    MenuDispositivosPequenos.variables.overlay.css("display", "none")
                }
            }
        })
    },
    animateAbasBar: function(a) {
        MenuDispositivosPequenos.variables.topBarResponsive.animate({
            opacity: ((a === "open") ? 0 : 1)
        }, {
            duration: MenuAnimation.constantes.animationTime / 2,
            queue: false
        })
    },
    getAnimateConfig: function(a, c) {
        var b = MenuAnimation.constantes.animationTime;
        if (TouchInteraction.variables.movePercent !== 1) {
            if (a === "close") {
                b = b * TouchInteraction.variables.movePercent / 100
            } else {
                b = b - b * TouchInteraction.variables.movePercent / 100
            }
        }
        return {
            duration: b,
            queue: false,
            complete: function() {
                if (a === "close") {
                    MenuDispositivosPequenos.variables.containerTopoMenu.removeClass("opened").css("top", 0);
                    MenuAnimation.compensaFixed(a)
                }
                if (c) {
                    c.call()
                }
            }
        }
    }
};
var MenuDispositivosPequenos = {
    variables: {
        menuAnimationTime: 500
    },
    cacheElements: function() {
        var a = MenuDispositivosPequenos.variables;
        a.headerContainer = $("#top");
        a.hamburguer = $("#menuHamburguer");
        a.menuHeader = $("#menuHeader");
        a.dragCloseMenu = $("#dragCloseMenu");
        a.overlay = $("#overlayMenuHamburguer");
        a.containerTopoMenu = a.headerContainer.find(".containerTopoMenu");
        a.topBarResponsive = a.headerContainer.find(".topBarResponsive");
        a.subMenuServicos = a.headerContainer.find(".subMenuServicos");
        a.subMenuMeusCurriculos = a.headerContainer.find(".subMenuMeusCurriculos")
    },
    init: function() {
        MenuDispositivosPequenos.cacheElements();
        MenuDispositivosPequenos.setBottomEvents();
        if (siteAtual == "b2c") {
            MenuDispositivosPequenos.makeMenu()
        }
        MenuDispositivosPequenos.configStartMenu();
        MenuDispositivosPequenos.setMenuHeaderHeight();
        MenuDispositivosPequenos.onResizeEvents();
        MenuDispositivosPequenos.closeMenuOnSwipe();
        MenuDispositivosPequenos.closeMenuOnOpenHeaderTooltip();
        MenuDispositivosPequenos.clickMeusCurriculos()
    },
    closeMenuOnOpenHeaderTooltip: function() {
        new PointerEvents($("#btnLogin"), {
            preventDefault: false
        }).createPointerEvent("tap", function() {
            if (MenuDispositivosPequenos.isMenuOpened()) {
                MenuAnimation.closeMenu()
            }
        });
        new PointerEvents($("a.minhaConta")).createPointerEvent("tap", function() {
            var a = $(this);
            if (MenuDispositivosPequenos.isMenuOpened()) {
                MenuAnimation.closeMenu(function() {
                    setTimeout(MenuDispositivosPequenos.menuMinhaConta, 100)
                })
            } else {
                if (!a.hasClass("open")) {
                    MenuDispositivosPequenos.menuMinhaConta()
                } else {
                    a.removeClass("open")
                }
            }
        })
    },
    isMenuOpened: function() {
        return (MenuDispositivosPequenos.variables.hamburguer.is(":visible") && MenuDispositivosPequenos.variables.containerTopoMenu.hasClass("opened"))
    },
    clickMeusCurriculos: function() {
        new PointerEvents($("a.meusCurriculos")).createPointerEvent("tap", function() {
            if (MenuDispositivosPequenos.isMenuOpened()) {
                window.location = this.href
            }
        })
    },
    menuMinhaConta: function() {
        var a = $(".minhaConta").next(".menuSuspensoLogado");
        $(".minhaConta").addClass("open");
        Menu.setStartHeight(a);
        Menu.resizeSubMenu(a)
    },
    isPageResponsive: function() {
        return $("body").hasClass("responsive")
    },
    closeMenuOnSwipe: function() {
        var a = null;
        if (new Support().isTouchScreen()) {
            new PointerEvents(MenuDispositivosPequenos.variables.dragCloseMenu).createPointerEvent("move", function(b) {
                a = (b.direction.vertical) ? b.direction.vertical : "toTop";
                switch (a) {
                    case 15:
                        TouchInteraction.dragMenu("toTop", b);
                        break;
                    case 16:
                        TouchInteraction.dragMenu("toBottom", b);
                        break;
                    default:
                        return false
                }
            });
            new PointerEvents(MenuDispositivosPequenos.variables.dragCloseMenu).createPointerEvent("swipeUp", function(b) {
                MenuAnimation.closeMenu();
                a = null
            });
            new PointerEvents(MenuDispositivosPequenos.variables.dragCloseMenu, {
                preventDefault: true
            }).createPointerEvent("pan", function(b) {
                var c = (a === 15) ? "toTop" : "toBottom";
                setTimeout(function() {
                    switch (c) {
                        case "toTop":
                            MenuAnimation.closeMenu();
                            break;
                        case "toBottom":
                            MenuAnimation.openMenu();
                            break;
                        default:
                            return false
                    }
                    TouchInteraction.variables.movePercent = 1;
                    a = null
                }, 10)
            })
        }
    },
    setBottomEvents: function() {
        new PointerEvents(MenuDispositivosPequenos.variables.hamburguer).createPointerEvent("tap", function() {
            Menu.resetOtherTooltip();
            Menu.delayEventOnNativeAndroid(function() {
                MenuDispositivosPequenos.changeStateMenu()
            })
        })
    },
    changeStateMenu: function() {
        if (new Support().isIos9()) {
            $("meta[name=viewport]").attr("content", "width=device-width,initial-scale=1.0001,maximum-scale=1.0001,user-scalable=no")
        }
        if (MenuDispositivosPequenos.variables.containerTopoMenu.hasClass("opened")) {
            MenuAnimation.closeMenu()
        } else {
            MenuAnimation.variables.initPosition = MenuDispositivosPequenos.variables.containerTopoMenu.offset().top - $(document).scrollTop();
            MenuDispositivosPequenos.setMenuHeaderHeight();
            MenuAnimation.openMenu()
        }
    },
    makeMenu: function() {
        var a = MenuDispositivosPequenos.variables.menuHeader.find("nav");
        a.append('<ul id="listMenuSmallDevices" class="listMenuSmallDevices"></ul>');
        MenuDispositivosPequenos.variables.subMenuServicos.find("li").clone().appendTo("#listMenuSmallDevices");
        if (MenuDispositivosPequenos.variables.subMenuMeusCurriculos.length > 0) {
            $("#listMenuSmallDevices").append('<li class="subTitulo">Meus Currículos</li>');
            MenuDispositivosPequenos.variables.subMenuMeusCurriculos.find("li").clone().appendTo("#listMenuSmallDevices")
        }
        if (organizacao !== "manager") {
            MenuDispositivosPequenos.setMenuTelasPequenas()
        }
    },
    setMenuTelasPequenas: function() {
        var a = MenuDispositivosPequenos.variables.containerTopoMenu.hasClass("isLogado");
        if (!a) {
            MenuDispositivosPequenos.variables.menuHeader.find("nav").children("ul:first").append($("#listMenuSmallDevices").children("li:first-child").clone())
        }
    },
    setMenuHeaderHeight: function() {
        if (MenuDispositivosPequenos.isPageResponsive() && MenuDispositivosPequenos.variables.hamburguer.is(":visible")) {
            MenuDispositivosPequenos.variables.menuHeader.height(MenuDispositivosPequenos.getMaxMenuHeight())
        }
    },
    getMaxMenuHeight: function() {
        return window.innerHeight - MenuDispositivosPequenos.variables.containerTopoMenu.height()
    },
    onResizeEvents: function() {
        $(window).on("resize", function() {
            if (MenuDispositivosPequenos.isPageResponsive() && MenuDispositivosPequenos.variables.hamburguer.is(":visible")) {
                MenuDispositivosPequenos.setMenuHeaderHeight();
                if (MenuDispositivosPequenos.variables.containerTopoMenu.hasClass("opened")) {
                    MenuDispositivosPequenos.variables.containerTopoMenu.css("top", MenuDispositivosPequenos.getMaxMenuHeight())
                }
            } else {
                MenuDispositivosPequenos.configStartMenu()
            }
        })
    },
    getMenuHeaderInitPosition: function() {
        return -1 * MenuDispositivosPequenos.getMaxMenuHeight() + MenuDispositivosPequenos.variables.topBarResponsive.height() - $(document).scrollTop()
    },
    configStartMenu: function() {
        MenuDispositivosPequenos.variables.containerTopoMenu.removeClass("opened").removeAttr("style");
        MenuDispositivosPequenos.variables.menuHeader.removeAttr("style").css("top", MenuDispositivosPequenos.getMenuHeaderInitPosition());
        MenuAnimation.setStyleBody("close");
        MenuAnimation.prepareAbasBar("close");
        MenuAnimation.compensaFixed("close");
        MenuDispositivosPequenos.variables.overlay.css({
            opacity: 0,
            display: "none"
        })
    }
};
$(document).on("ready", function() {
    MenuDispositivosPequenos.init()
});
$(document).on("ready", function() {
    Menu.init()
});
(function(b) {
    var c = -1;
    var a = {
        onVisible: function(f) {
            var d = a.isSupported();
            if (!d || !a.hidden()) {
                f();
                return d
            }
            var e = a.change(function(h, g) {
                if (!a.hidden()) {
                    a.unbind(e);
                    f()
                }
            });
            return e
        },
        change: function(e) {
            if (!a.isSupported()) {
                return false
            }
            c += 1;
            var d = c;
            a._callbacks[d] = e;
            a._listen();
            return d
        },
        unbind: function(d) {
            delete a._callbacks[d]
        },
        afterPrerendering: function(g) {
            var d = a.isSupported();
            var e = "prerender";
            if (!d || e != a.state()) {
                g();
                return d
            }
            var f = a.change(function(i, h) {
                if (e != h) {
                    a.unbind(f);
                    g()
                }
            });
            return f
        },
        hidden: function() {
            return !!(a._doc.hidden || a._doc.webkitHidden)
        },
        state: function() {
            return a._doc.visibilityState || a._doc.webkitVisibilityState || "visible"
        },
        isSupported: function() {
            return !!(a._doc.visibilityState || a._doc.webkitVisibilityState)
        },
        _doc: document || {},
        _callbacks: {},
        _change: function(e) {
            var f = a.state();
            for (var d in a._callbacks) {
                a._callbacks[d].call(a._doc, e, f)
            }
        },
        _listen: function() {
            if (a._init) {
                return
            }
            var d = "visibilitychange";
            if (a._doc.webkitVisibilityState) {
                d = "webkit" + d
            }
            var e = function() {
                a._change.apply(a, arguments)
            };
            if (a._doc.addEventListener) {
                a._doc.addEventListener(d, e)
            } else {
                a._doc.attachEvent(d, e)
            }
            a._init = true
        }
    };
    if (typeof(module) != "undefined" && module.exports) {
        module.exports = a
    } else {
        b.Visibility = a
    }
})(this);
(function(a) {
    if (a.visibilityState || a.webkitVisibilityState) {
        return
    }
    a.hidden = false;
    a.visibilityState = "visible";
    var e = null;
    var d = 0;
    var c = function() {
        if (a.createEvent) {
            if (!e) {
                e = a.createEvent("HTMLEvents");
                e.initEvent("visibilitychange", true, true)
            }
            a.dispatchEvent(e)
        } else {
            if (typeof(Visibility) == "object") {
                Visibility._change.call(Visibility, {})
            }
        }
    };
    var b = function() {
        a.hidden = false;
        a.visibilityState = "visible";
        c()
    };
    var f = function() {
        a.hidden = true;
        a.visibilityState = "hidden";
        c()
    };
    if (a.addEventListener) {
        window.addEventListener("focus", b, true);
        window.addEventListener("blur", f, true)
    } else {
        a.attachEvent("onfocusin", b);
        a.attachEvent("onfocusout", f)
    }
})(document);
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