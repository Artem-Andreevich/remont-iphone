$(document).ready(function(){
	$(".slide-one").owlCarousel({
		loop: false,
		margin: 10,
		autoplay: true,
		autoplayTimeout:2500,
		autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop: true,
        },
        500:{
            items:2,
            loop: true,
        },
        800:{
            items:3,
        }
    	}
	});

	$(".slide-two").owlCarousel({
		loop: true,
		margin: 0,
		center: true,
		autoplay: true,
		dots:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
   	    responsiveClass:true,
        responsive:{
        0:{
            items:1,
            loop: true,
        },
        600:{
            items:2,
            loop: true,
        },
        900:{
            items:3,
            loop: true,
        },
        1200:{
            items:3,
            loop: true,
        }
    	}
	});
});


function popup() {
	$("#parent_popup").fadeIn(200);
	$("#popup_send").slideDown(700);
}
function popup2() {
	$("#parent_popup").fadeIn(200);
	$("#popup_send2").slideDown(700);
}
function close_all() {
	$("#parent_popup").fadeOut(700);
	$("#popup_send").slideUp(700);
	$("#popup_send2").slideUp(700);
	$("#transc").html(
				"<div class='input_cont'><div class='us_n'>Напишите Ваш телефон:</div>\
				<div class='inputsu'><input type='text' id='us_phi' class='usphone' placeholder='+7 ( ___ ) ___ - __ - __'></div>\
				<div class='send_inu'><span onclick='sendudatas();'>Консультация</span></div></div>");
	$("#transc2").html(
				"<div class='input_cont'><div class='us_n'>Напишите Ваш телефон:</div>\
				<div class='inputsu'><input type='text' id='us_phi2' class='usphone' placeholder='+7-917-422-22-24'></div>\
				<div class='send_inu'><span onclick='sendudatas(1);'>Узнать стоимость</span></div></div>");
	$("#transc3").html(
				"<div class='input_cont'><div class='us_n'>Напишите Ваш телефон:</div>\
				<div class='inputsu'><input type='text' id='us_phi3' class='usphone' placeholder='+7-917-422-22-24'></div>\
				<div class='send_inu'><span onclick='sendudatas(2);'>Узнать стоимость</span></div></div>");

}

function sendudatas(indez) {
	if(indez == 1) {
		var phone = $("#us_phi2").val();
		var name = "Получить скидку !"
	}
	else if(indez == 2) {
		var phone = $("#us_phi3").val();
		var name = "Узнать стоимость"
	}
	else {
		var phone = $("#us_phi").val();
		var name = "Срочный ремонт"
	}

	if(phone.length != 0) {
		$.post("handlers.php", {us_phone: phone, us_name: name}, function(data) {
			if(data == 7) {
				if(indez == 1) $("#transc2").html("<div class='tr_cont'>Спасибо за Вашу заявку!</div>");
                                else if(indez == 2) $("#transc3").html("<div class='tr_cont'>Спасибо за Вашу заявку!</div>");
				else $("#transc").html("<div class='tr_cont'>Спасибо за Вашу заявку!</div>");

			}
			else {
				if(indez == 1) $("#transc2").html("<div class='tr_cont_err'>Возникла ошибка, повторите операцию позже</div>");
                                else if(indez == 2) $("#transc3").html("<div class='tr_cont'>Спасибо за Вашу заявку!</div>");
				else $("#transc").html("<div class='tr_cont_err'>Возникла ошибка, повторите операцию позже</div>");

			}

		});
	}
	else {
		if(phone.length == 0) {
			if(indez == 1) {
				$("#us_phi2").css({"border":"1px solid #F96767"});
				$("#us_phi2").val("Введите ваш телефон");
			}
			if(indez == 2) {
				$("#us_phi3").css({"border":"1px solid #F96767"});
				$("#us_phi3").val("Введите ваш телефон");
			}
			else {
				$("#us_phi").css({"border":"1px solid #F96767"});
				$("#us_phi").val("Введите ваш телефон");
			}

		}
	
	}
}