$(document).ready(function() {
	$('.vl').css({'height':$('.timeL').height()-20});
	// $('#particles-js').css({'height':$('#B1').height()});
	// $('#particles-js').css({'width':$('#B1').width()});
	// INITIATE THE FOOTER
  siteFooter();
	// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
	$(window).resize(function() {
		siteFooter();
	});
	
	function siteFooter() {
		var siteContent = $('.container-fluid');
		var siteContentHeight = siteContent.height();
		var siteContentWidth = siteContent.width();

		var siteFooter = $('#site-footer');
		var siteFooterHeight = siteFooter.height();
		var siteFooterWidth = siteFooter.width();

		console.log('Content Height = ' + siteContentHeight + 'px');
		console.log('Content Width = ' + siteContentWidth + 'px');
		console.log('Footer Height = ' + siteFooterHeight + 'px');
		console.log('Footer Width = ' + siteFooterWidth + 'px');

		siteContent.css({
			"margin-bottom" : siteFooterHeight + 70
		});
	};
	$('.nav-link').click(function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top-70
		}, 1000);
		return false;
	});

	const words = ["Software Engineer", "Data Science", "Machine Learning", "Conversational AI"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('type').innerHTML += word.shift();
		} else {
			setTimeout(function() {
  //your code to be executed after 1 second
				deletingEffect();
}, 2300);
			
			return false;
		};
		timer = setTimeout(loopTyping, 40);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('type').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 40);
	};
	loopDeleting();
};

typingEffect();
});