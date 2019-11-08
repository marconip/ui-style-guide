$(function () {
	
	//TOOLTIP BOOTSTRAP
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	//PEGA NOME ÍCONES ALTOMATICOS PARA TOOTIPS
	var iconeList = document.querySelectorAll('.icones span')
	iconeList.forEach(function (e) {
		var iconeNome = e.getAttribute("class");
		e.setAttribute("data-toggle", "tooltip");
		e.setAttribute("title", iconeNome);
	});

	//GERA LEGENDA AUTOMATICAS NAS IMAGENS
	var imageList = document.querySelectorAll('.img-cut img, .img-cut2 img')
	imageList.forEach(function (e) {
		var p = document.createElement('p')
		p.setAttribute("class", "pag small");
		p.textContent = e.title

		var container = e.parentElement.parentElement
		container.appendChild(p)
	});

	//MENU CLASSE ATIVO
	$(".nav-item, .navbar-brand").click(function () {
		$(".nav-item, .navbar-brand").removeClass("active");
		$(this).toggleClass("active");
	});

	//MENU SELECIONA CONFORME ROLAGEM DA SCROLL PEGANDO TITULO ATUAL DA PÁGINA
	$(document).on("scroll", function () {

		var scrollPos = $(document).scrollTop() + 40;
		var conteinerAtual = 'manual';
		$(".container-fluid").each(function () {
			if (scrollPos >= this.offsetTop)
				conteinerAtual = this.id;
		});
		$(".nav-link[href$='#" + conteinerAtual + "']").click();
	});

	//MENU FECHA AO CLICK NO MOBILE
	$(".nav-item, .navbar-brand").click(function () {
		$('.navbar-collapse').removeClass("show");
	});

	//MENU MOBILE COPIA COR DE FUNDO DO MENU DESKTOP
	var corCopia = $(".navbar").css("background-color");
	$(".navbar-collapse").css("background-color", corCopia);

	//FUNÇÃO PARA MUDAR VALORES EM NUMEROS RGB
	function rgbHex(valoresCor) {
		var listaRgb = valoresCor.match(/^rgb[a]?\((\d+),\s*(\d+),\s*(\d+)(,\s*)?((\d+([.]\d)?))?\)$/);

		if (!listaRgb) {
			return
		}
		return "#" + hex(listaRgb[1]) + hex(listaRgb[2]) + hex(listaRgb[3]);
		function hex(x) {
			return ("0" + parseInt(x).toString(16)).slice(-2);
		}
	};

	//CORES
	$('.blocos-cor').each(function () {
		var cor = window.getComputedStyle($(this)[0]);
		var corColor = rgbHex(cor.backgroundColor);
		$(this.nextElementSibling).html(corColor);
	});

	//TIPOGRAFIA
	$('.textos').each(function () {
		var txt = window.getComputedStyle($(this)[0]);
		var color = rgbHex(txt.color);
		$(this.children).html(txt.fontFamily + " " + txt.fontSize + " " + color);
	});

	//BOTÃO PRIMÁRIO
	var botoes = window.getComputedStyle($('.pag-btn')[0]);
	var botoesHover = window.getComputedStyle($('.btn-primario .pag-hover')[0]);

	var botoesBackgroundColor = rgbHex(botoes.backgroundColor);
	var botoesColor = rgbHex(botoes.color);
	var botoesborderBottomColor = rgbHex(botoes.backgroundColor);

	var botoesHoverBackgroundColor = rgbHex(botoesHover.backgroundColor);
	var botoesHoverColor = rgbHex(botoesHover.color);

	//BOTÃO SECUNDÁRIO
	var btn_second_ = window.getComputedStyle($('.pag-btn-outline')[0]);
	var btn_second_Hover_ = window.getComputedStyle($('.btn-outline.pag-hover')[0]);

	var btn_second_Color = rgbHex(btn_second_.color);
	var btn_second_borderBottomColor = rgbHex(btn_second_.borderBottomColor);

	var btn_second_Hover_BackgroundColor = rgbHex(btn_second_Hover_.backgroundColor);
	var btn_second_Hover_Color = rgbHex(btn_second_Hover_.color);

	$(".detalhes-btn").html(
		"<div class='col-12 col-md-6'> <p class='pag'>" +
		"<strong>Primary </strong>" + "<br />" +
		"Height: " + botoes.height + "<br/>" +
		"Font: " + botoes.fontFamily + " / " + botoes.fontSize + " / " + botoesColor + "<br/>" +
		"Background color: " + botoesBackgroundColor + "<br/>" +
		"Border: " + botoes.borderBlockEndWidth + " " + botoes.borderBlockEndStyle + " " + botoesborderBottomColor + " / radius " + botoes.borderBottomLeftRadius + "<br/>" +
		"Shadow: " + botoes.boxShadow + "<br/><br/>" +

		"Hover/Focus bg color: " + botoesHoverBackgroundColor + "<br/>" +
		"Hover/Focus text color: " + botoesHoverColor + "<br/>" +
		"</p></div>" +

		"<div class='col-12 col-md-6'> <p class='pag'>" +
		"<strong>Secundary </strong>" + "<br />" +
		"Height: " + btn_second_.height + "<br/>" +
		"Font: " + btn_second_.fontFamily + " / " + btn_second_.fontSize + " / " + btn_second_Color + "<br/>" +
		"Background color: " + btn_second_.backgroundColor + "<br/>" +
		"Border: " + btn_second_.borderBlockEndWidth + " / " + btn_second_.borderBlockEndStyle + " " + btn_second_borderBottomColor + " / radius " + btn_second_.borderBottomLeftRadius + "<br/>" +
		"Shadow: " + btn_second_.boxShadow + "<br/><br/>" +

		"Hover/Focus bg color: " + btn_second_Hover_BackgroundColor + "<br/>" +
		"Hover/Focus text color: " + btn_second_Hover_Color + "<br/>" +
		"</p></div>"
	);

	//INPUTS
	var input = window.getComputedStyle($('.form-control')[0]);
	var inputFocus_ = window.getComputedStyle($('.input-focus')[0]);
	var inputInativo_ = window.getComputedStyle($('.form-control:disabled')[0]);
	var inputErro_ = window.getComputedStyle($('.form-control.form-erro')[0]);
	var inputValido_ = window.getComputedStyle($('.form-control.form-valido')[0]);

	var inputColor = rgbHex(input.color);
	var inputBackgroundCor = rgbHex(input.backgroundColor);
	var inputborderBottomColor = rgbHex(input.borderBottomColor);

	var inputFocus_Color = rgbHex(inputFocus_.color);
	var inputFocus_BackgroundCor = rgbHex(inputFocus_.backgroundColor);
	var inputFocus_BordaCor = rgbHex(inputFocus_.borderBottomColor);

	var inputInativo_Color = rgbHex(inputInativo_.color);
	var inputInativo_BackgroundCor = rgbHex(inputInativo_.backgroundColor);
	var inputInativo_BordaCor = rgbHex(inputInativo_.borderBottomColor);

	var inputValido_BordaCor = rgbHex(inputValido_.borderBottomColor);
	var inputErro_BordaCor = rgbHex(inputErro_.borderBottomColor);

	//DROPBOX E SELECT
	var dropdown = window.getComputedStyle($('.dropdown-customizado')[0]);
	var dropdown_hovfoc_ = window.getComputedStyle($('.pag-drop-hover .dropdown-customizado')[0]);

	var dropdowntColor = rgbHex(dropdown.color);
	var dropdownBackgroundCor = rgbHex(dropdown.backgroundColor);
	var dropdownBordaCor = rgbHex(dropdown.borderBottomColor);
	var dropdown_hovfoc_Color = rgbHex(dropdown_hovfoc_.color);
	var dropdown_hovfoc_BackgroundCor = rgbHex(dropdown_hovfoc_.backgroundColor);
	var dropdown_hovfoc_BordaCor = rgbHex(dropdown_hovfoc_.borderBottomColor);

	$(".detalhes-input").html(
		"<div class='col-12 col-md-6'> <p class='pag'>" +
		"<strong>Campo de texto/área de texto </strong>" + "<br />" +
		"Height: " + input.height + "<br/>" +
		"Font: " + input.fontFamily + " / " + input.fontSize + " / " + inputColor + "<br/>" +
		"Background color: " + inputBackgroundCor + "<br/>" +
		"Border: " + input.borderBlockEndWidth + " " + input.borderBlockEndStyle + " " + inputborderBottomColor + " / radius " + input.borderBottomLeftRadius + "<br/>" +
		"Shadow: " + input.boxShadow + "<br/><br/>" +

		"Focus bg color: " + inputFocus_BackgroundCor + "<br/>" +
		"Focus text color: " + inputFocus_Color + "<br/>" +
		"Focus border color: " + inputFocus_BordaCor + "<br/><br/>" +

		"Disabled bg color: " + inputInativo_BackgroundCor + "<br/>" +
		"Disabled text color: " + inputInativo_Color + "<br/>" +
		"Disabled border color: " + inputInativo_BordaCor + "<br/><br/>" +

		"Valid border color: " + inputValido_BordaCor + "<br/>" +
		"Erro border color: " + inputErro_BordaCor + "<br/>" +
		"</p></div>" +

		"<div class='col-12 col-md-6'> <p class='pag'>" +
		"<strong>Dropdown/select</strong>" + "<br />" +
		"Height: " + dropdown.height + "<br/>" +
		"Font: " + dropdown.fontFamily + " / " + dropdown.fontSize + " / " + dropdowntColor + "<br/>" +
		"Background color: " + dropdownBackgroundCor + "<br/>" +
		"Border: " + dropdown.borderBlockEndWidth + " " + dropdown.borderBlockEndStyle + " " + dropdownBordaCor + " / radius " + dropdown.borderBottomLeftRadius + "<br/>" +
		"Shadow: " + dropdown.boxShadow + "<br/><br/>" +

		"Hover/Focus bg color: " + inputFocus_BackgroundCor + "<br/>" +
		"Hover/Focus text color: " + dropdown_hovfoc_Color + "<br/>" +
		"Hover/Focus border color: " + dropdown_hovfoc_BordaCor + "<br/><br/>" +
		"</p></div>"
	);

	//SELEÇÃO E NAVEGAÇÃO
	//checkbox e radio
	var checkbox = window.getComputedStyle($('.copia-checkbox')[0]);
	var checkboxHover_ = window.getComputedStyle($('.copia-checkbox-selecionado')[0]);
	var checkboxInativo_ = window.getComputedStyle($('.copia-checkbox-inativo')[0]);

	var checkboxBackgroundColor = rgbHex(checkbox.backgroundColor);
	var checkboxborderBottomColor = rgbHex(checkbox.borderBottomColor);

	var checkboxHover_Color = rgbHex(checkboxHover_.color);
	var checkboxHover_BackgroundColor = rgbHex(checkboxHover_.backgroundColor);
	var checkboxHover_borderBottomColor = rgbHex(checkboxHover_.borderBottomColor);

	var checkboxInativo_BackgroundColor = rgbHex(checkboxInativo_.backgroundColor);
	var checkboxInativo_borderBottomColor = rgbHex(checkboxInativo_.borderBottomColor);

	//switch
	var switchs = window.getComputedStyle($('.copia-switch')[0]);
	var switchHover_ = window.getComputedStyle($('.copia-switch-selecionado')[0]);
	var switchInativo_ = window.getComputedStyle($('.copia-switch-inativo')[0]);

	var switchsBackgroundColor = rgbHex(switchs.backgroundColor);
	var switchsborderBottomColor = rgbHex(switchs.borderBottomColor);

	var switchHover_BackgroundColor = rgbHex(switchHover_.backgroundColor);
	var switchInativo_BackgroundColor = rgbHex(switchInativo_.backgroundColor);

	//Breadcrumbs
	var breadcrumbs = window.getComputedStyle($('.breadcrumb a')[0]);
	var breadHover_ = window.getComputedStyle($('.pag-breadcrumb-hover .breadhover')[0]);

	var breadcrumbsColor = rgbHex(breadcrumbs.color);
	var breadcrumbsBackgroundColor = rgbHex(breadcrumbs.backgroundColor);

	var breadHover_color = rgbHex(breadHover_.color);
	var breadHover_BackgroundColor = rgbHex(breadHover_.backgroundColor);

	//Paginação
	var paginacaoSpace = window.getComputedStyle($('.pagination .page-item')[1]);
	var paginacao = window.getComputedStyle($('.pagination .active a')[0]);

	$(".detalhes-selecao").html(
		"<div class='col-12 col-md-4'> <p class='pag'>" +
		"<strong>Checkbox and radio </strong>" + "<br />" +
		"Height: " + checkbox.height + "<br/>" +
		"Background color: " + checkboxBackgroundColor + "<br/>" +
		"Border: " + checkbox.borderBlockEndWidth + " " + checkbox.borderBlockEndStyle + " " + checkboxborderBottomColor + " / radius " + checkbox.borderBottomLeftRadius + "<br/><br/>" +

		"Select bg color: " + checkboxHover_BackgroundColor + "<br/>" +
		"Select border color: " + checkboxHover_borderBottomColor + "<br/>" +
		"Select icon color: " + checkboxHover_Color + "<br/><br/>" +

		"Disabled bg color: " + checkboxInativo_BackgroundColor + "<br/>" +
		"Disabled border color: " + checkboxInativo_borderBottomColor + "<br/>" +
		"</p></div>" +

		"<div class='col-12 col-md-4'> <p class='pag'>" +
		"<strong>Switch </strong>" + "<br />" +
		"Height: " + switchs.height + "<br/>" +
		"Border: " + switchs.borderBlockEndWidth + " / radius " + switchs.borderBottomLeftRadius + "<br/>" +
		"Background color: " + switchsBackgroundColor + "<br/>" +
		"Shadow: " + switchs.boxShadow + "<br/>" +
		"Internal control: " + checkboxHover_BackgroundColor + "<br/><br/>" +///

		"Select bg color: " + switchHover_BackgroundColor + "<br/>" +
		"Selected Internal Control: " + checkboxHover_BackgroundColor + "<br/><br/>" +///

		"Disabled bg color: " + switchInativo_BackgroundColor + "<br/>" +
		"Inactive Internal Control: " + checkboxInativo_borderBottomColor + "<br/>" +///
		"</p></div>" +

		"<div class='col-12 col-md-4'> <p class='pag'>" +
		"<strong>Breadcrumbs </strong>" + "<br />" +
		"Height: " + breadcrumbs.height + "<br/>" +
		"Font: " + breadcrumbs.fontFamily + " / " + breadcrumbs.fontSize + " / " + breadcrumbsColor + "<br/>" +
		"Background color: " + breadcrumbsBackgroundColor + "<br/><br/>" +

		"Hover color: " + breadHover_color + "<br/>" +
		"Hover bg color: " + breadHover_BackgroundColor + "<br/><br/>" +

		"<strong>Range slider </strong>" + "<br />" +
		"Internal control: " + checkboxHover_BackgroundColor + "<br/>" +///
		"Line: " + checkboxInativo_borderBottomColor + "<br/>" +///
		"Line focus: " + checkboxHover_BackgroundColor + "<br/>" +///
		"</p></div>" +

		"<div class='col-12'> <p class='pag'>" +
		"<strong>Páginação </strong>" + "<br />" +
		"Height: " + paginacao.height + "<br/>" +
		"Font: " + paginacao.fontFamily + " / " + paginacao.fontSize + " / " + btn_second_Color + "<br/>" +

		"Background color: " + btn_second_.backgroundColor + "<br/>" +
		"Border: " + btn_second_.borderBlockEndWidth + " " + btn_second_.borderBlockEndStyle + " " + btn_second_borderBottomColor + " / radius " + btn_second_.borderBottomLeftRadius + "<br/>" +
		"Margin: " + paginacaoSpace.margin + "<br/>" +
		"Shadow: " + btn_second_.boxShadow + "<br/><br/>" +

		"Hover/selected text color: " + btn_second_Hover_Color + "<br/>" +
		"Hover/selected bg color: " + btn_second_Hover_BackgroundColor + "<br/><br/>" +

		"Disabled text color: " + inputInativo_Color + "<br/>" +
		"Disabled border color: " + inputInativo_BordaCor + "<br/>" +
		"Disabled bg color: " + inputInativo_BackgroundCor + "<br/>" +
		"</p></div>"
	);

	//Tabela
	var tabela = window.getComputedStyle($('.table-responsive table')[0]);
	var tabelaLinha = window.getComputedStyle($('.table-responsive table tr + tr')[0]);

	var tabelaColor = rgbHex(tabela.color);
	var tabelaborderBottomColor = rgbHex(tabela.borderBottomColor);
	var tabelaBackgroundColor = rgbHex(tabela.backgroundColor);
	var tabelaBackgroundColor2 = rgbHex(tabelaLinha.backgroundColor);

	$('.detalhes-table').html(
		"<div class='col-12'> <p class='pag'>" +
		"<p class='pag'>" +
		"Font: " + tabela.fontFamily + " / " + tabela.fontSize + " / " + tabelaColor + "<br/>" +
		"Border: " + tabela.borderBlockEndWidth + " " + tabela.borderBlockEndStyle + " " + tabelaborderBottomColor + " / radius " + tabela.borderBottomLeftRadius + "<br/>" +
		"Background color: " + tabelaBackgroundColor + " with " + tabelaBackgroundColor2 +
		"</p></div>"
	);

	//PÁGINA GERAL
	var pagina = window.getComputedStyle($('body')[0]);
	var paginaColor = rgbHex(pagina.color);
	var paginaBackgroundColor = rgbHex(pagina.backgroundColor);

	$(".detalhes-pagina").html(
		"<p class='pag'>" +
		"Font: " + pagina.fontFamily + " / " + pagina.fontSize + " / " + paginaColor + "<br/>" +
		"Background color: " + paginaBackgroundColor + "<br/>" +
		"</p>"
	);
});

//MODAL PARA AMPLIAR AS IMAGENS
var imagens = document.querySelectorAll(".clickimg");
imagens.forEach(function (este) {
	este.onclick = function () {
		document.getElementById("modal").style.display = "block";
		document.getElementById("imgs").src = this.src;
		document.getElementById("caption").innerHTML = this.title;
	}
});