/*
Верстка by MrCrooK
https://msite.top/
admin@msite.top
*/
function is_touch_device() {
    return !!('ontouchstart' in window);
}
function nav() {
    var rPop = 1;
    if(is_touch_device()){
        $('ul.top_line_menu li a').on("click", function(e){
            e.preventDefault();
        });
        $('ul.top_line_menu>li').on('click', function(e) {
            var tekItem = $(this);
            var indexItem = tekItem.data("par");
            if(rPop == 1) {
                rPop = 0;
                $('#pop').stop().fadeIn(400);
                $('#pop .pop-eb').css('margin-left', -(1270*indexItem));
            } else {
                $('#pop .pop-eb').stop().animate({"margin-left": -(1270*indexItem)}, 400);
            }
            e.stopPropagation();
        });
        $('#pop').on('mouseover', function(e) {
            e.stopPropagation();
        });
        $('body').on('mouseover', function() {
            rPop = 1;
            $('#pop').fadeOut(400);
        });
    } else {
        $('ul.top_line_menu>li').on('mouseover', function(e) {
            var tekItem = $(this);
            var indexItem = tekItem.data("par");
            if(rPop == 1) {
                rPop = 0;
                $('#pop').stop().fadeIn(400);
                $('#pop .pop-eb').css('margin-left', -(1270*indexItem));
            } else {
                $('#pop .pop-eb').stop().animate({"margin-left": -(1270*indexItem)}, 400);
            }
            $('.visList').removeClass('visList'); //chak
            e.stopPropagation();
        });
        $('#pop').on('mouseover', function(e) {
            e.stopPropagation();
        });
        $('body').on('mouseover', function() {
            rPop = 1;
            $('#pop').fadeOut(400);
        });
    }
};
$(document).on('ready', function() {
    nav();
});

// Удалить при интеграции
var menuItems = {
	'Главная':'index.html',
	'Доставка и оплата':'dost.html',
	'Нам доверяют':'trust.html',
	'Обмен':'obmen.html',
	'Оферта':'oferta.html',
	'О компании':'about.html',
	'Статьи':'stati.html',
	'Оплата':'pay.html',
	'Избранное':'fav.html',
	'Гид покупателя':'gid.html',
	'Карталог товаров':'catalog.html',
	'Карточка товара':'element.html',
	'Корзина':'cart.html',
};
var menuItemsAjax = {
	'Заказать обратный звонок':'callback.html',	
	'Заказать в один клик':'one_click_popup.html',	
	'Нам доверяют с 2005 года!':'trust_popup.html',	
}
var menu = $("<div />", {'class':'test-menu'});
menu.append($("<a />", {'text': '×', 'class': 'close'}).click(function() {menu.hide(); return false;}));
menu.append($("<b />", {'text': 'Навигация по верстке'}));
for (key in menuItems) {
	menu.append($("<a />", {'href':menuItems[key], 'text': key}));
}
menu.append($("<b />", {'text': '==== попапы ===='}));
for (key in menuItemsAjax) {
	menu.append($("<a />", {'href':menuItemsAjax[key], 'text': key, 'class':'ajaxModal'}));
}
$("body").append(menu);
// Конец временного меню

var owl = $('.owl-carousel-first');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
var indexslids1 = $('.index-slids-1');
indexslids1.owlCarousel({
    items:1,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});
var indexslids2 = $('.index-slids-2');
indexslids2.owlCarousel({
    items:1,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true
});
var indexslids3 = $('.index-slids-3');
indexslids3.owlCarousel({
    items:1,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true
});
var indexslids4 = $('.index-slids-4');
indexslids4.owlCarousel({
    items:1,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});
var indexslids5 = $('.index-slids-5');
indexslids5.owlCarousel({
    items:1,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('a.ajaxModal').on("click", function(e){
	$("#ajaxModal").find(".modal-title").text($(this).text());
	$("#ajaxModal").find(".modal-body").load($(this).attr("href"),function() {$("#ajaxModal").modal('show');});
	return false;
});
$(".header_line_menu_mobile").on("click", function(e){
	$(".line_menu").toggleClass("active");
});
$(".top_menu .select_item").on("click", function(e){
	$(".top_menu .top_line_menu").toggleClass("active");
	$(this).toggleClass("revers_ico");
	return false;
});
$(".content a.item_catalog").parent()
	.mouseenter(function() {
		if($(this).offset().left+$(this).width()+100>$("div.container").offset().left+$("div.container").width())
			$(this).find("a.item_catalog").addClass("l");			
		else
			$(this).find("a.item_catalog").addClass("r");
	})
	.mouseleave(function() {
		$(this).find("a.item_catalog").removeClass("r");
		$(this).find("a.item_catalog").removeClass("l");
	});


var catalogElementImages = $('.catalog_element .big_images');
catalogElementImages.owlCarousel({
    items:1,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:false,
	navigation: true,
});
var catalogSlider1 = $('#element_slider_1');
catalogSlider1.on('initialized.owl.carousel resized.owl.carousel', function(e) {
    $(e.target).toggleClass('hide-nav', e.item.count <= e.page.size);
});
catalogSlider1.owlCarousel({
	items: 6,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:false,
	navigation: true,
	nav: true,
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        700:{
            items:4
        },
        1000:{
            items:6
        }
    },
});

var catalogSlider2 = $('#element_slider_2');
catalogSlider2.on('initialized.owl.carousel resized.owl.carousel', function(e) {
    $(e.target).toggleClass('hide-nav', e.item.count <= e.page.size);
});
catalogSlider2.owlCarousel({
	items: 6,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:false,
	navigation: true,
	nav: true,
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        700:{
            items:4
        },
        1000:{
            items:6
        }
    }
});
catalogSlider2.hide();

var catalogSlider3 = $('#element_slider_3');
catalogSlider3.on('initialized.owl.carousel resized.owl.carousel', function(e) {
    $(e.target).toggleClass('hide-nav', e.item.count <= e.page.size);
});
catalogSlider3.owlCarousel({
	items: 6,
    loop:true,
    margin:0,
	padding: 0,
    autoplay:false,
	navigation: true,
	nav: true,
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        700:{
            items:4
        },
        1000:{
            items:6
        }
    }
});