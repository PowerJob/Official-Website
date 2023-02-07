$(function() {
	
	//切换到中文的
	$('#btnZh').click(function() {
		$.i18n.setLocale('zh');
		location.reload();
	});
	
	//切换到英文
	$('#btnEn').click(function() {
		$.i18n.setLocale('en');
		location.reload();
	});

	// 加载默认语言配置文件
	let localLang = window.localStorage.getItem('pw_lang');
	if(localLang != null){
		localLang = localLang.substr(0, 2);//这里取两位比较，因为香港和台湾都是 ‘zh’开头
		console.log("language from localStorage is %o", localLang);
	}
	
	if (localLang == null) {
		let lang = navigator.language;
		if(lang != null){
			lang = lang.substr(0,2);//这里取两位比较，因为香港和台湾都是 ‘zh’开头
			console.log("language from system is %o", lang);
		}
		
		if(lang == "zh"){
			$.i18n.setLocale('zh');
			window.localStorage.setItem('pw_lang','zh')
			localLang = window.localStorage.getItem('pw_lang');
			console.log("language from localStorage is %o", localLang);
			// location.reload();
			// $('btnZh').click();
		}else{
			$.i18n.setLocale('en');
			// $('btnEn').click();
			window.localStorage.setItem('pw_lang','en')
			localLang = window.localStorage.getItem('pw_lang');
			console.log("language from localStorage is %o", localLang);
			// location.reload();
		}
	};



	$.i18n.load(['./lang/language.js', './lang/language2.js'], function(success) {
		//$.i18n.load('../lang/language.js', function(success){
		if (success) {
			$('#btnOk').text($.i18n.prop('#btnOk'));
			$('#btn1k').text($.i18n.prop('#btn1k'));
			$('#btn2k').text($.i18n.prop('#btn2k'));
			$('#btn3k').text($.i18n.prop('#btn3k'));
			$('#btn4k').text($.i18n.prop('#btn4k'));
			$('#btn5k').text($.i18n.prop('#btn5k'));
			$('#btn6k').text($.i18n.prop('#btn6k'));
			$('#btn7k').text($.i18n.prop('#btn7k'));
			$('#btn8k').text($.i18n.prop('#btn8k'));
			$('#btn9k').text($.i18n.prop('#btn9k'));
			$('#btn10k').text($.i18n.prop('#btn10k'));
			$('#btn11k').text($.i18n.prop('#btn11k'));
			$('#btn12k').text($.i18n.prop('#btn12k'));
			$('#btn13k').text($.i18n.prop('#btn13k'));
			$('#btn14k').text($.i18n.prop('#btn14k'));
			$('#btn15k').text($.i18n.prop('#btn15k'));
			$('#btn16k').text($.i18n.prop('#btn16k'));
			$('#btn17k').text($.i18n.prop('#btn17k'));
			$('#btn18k').text($.i18n.prop('#btn18k'));
			$('#btn19k').text($.i18n.prop('#btn19k'));
			$('#btn20k').text($.i18n.prop('#btn20k'));
			$('#btn21k').text($.i18n.prop('#btn21k'));
			$('#btn22k').text($.i18n.prop('#btn22k'));
			$('#btn23k').text($.i18n.prop('#btn23k'));
			$('#btn24k').text($.i18n.prop('#btn24k'));
			$('#btn25k').text($.i18n.prop('#btn25k'));
			$('#btn26k').text($.i18n.prop('#btn26k'));
			$('#btn27k').text($.i18n.prop('#btn27k'));
			$('#btn28k').text($.i18n.prop('#btn28k'));
			$('#btn29k').text($.i18n.prop('#btn29k'));
			$('#btn30k').text($.i18n.prop('#btn30k'));
			$('#btn31k').text($.i18n.prop('#btn31k'));
			$('#btn32k').text($.i18n.prop('#btn32k'));
			$('#btn33k').text($.i18n.prop('#btn33k'));
			$('#btn34k').text($.i18n.prop('#btn34k'));
			$('#btn35k').text($.i18n.prop('#btn35k'));
			$('#btn36k').text($.i18n.prop('#btn36k'));
			$('#btn37k').text($.i18n.prop('#btn37k'));
			$('#btn38k').text($.i18n.prop('#btn38k'));
			$('#btn39k').text($.i18n.prop('#btn39k'));
			$('#btn40k').text($.i18n.prop('#btn40k'));
			$('#btn41k').text($.i18n.prop('#btn41k'));
			$('#btn42k').text($.i18n.prop('#btn42k'));
			$('#btn43k').text($.i18n.prop('#btn43k'));
			$('#btn44k').text($.i18n.prop('#btn44k'));
			$('#btn45k').text($.i18n.prop('#btn45k'));
			$('#btn46k').text($.i18n.prop('#btn46k'));
			$('#btn47k').text($.i18n.prop('#btn47k'));
			$('#btn48k').text($.i18n.prop('#btn48k'));
			$('#btn49k').text($.i18n.prop('#btn49k'));
			$('#btn50k').text($.i18n.prop('#btn50k'));
			$('#btn51k').text($.i18n.prop('#btn51k'));
			$('#btn52k').text($.i18n.prop('#btn52k'));
			$('#btn53k').text($.i18n.prop('#btn53k'));
			$('#btn54k').text($.i18n.prop('#btn54k'));
			$('#btn55k').text($.i18n.prop('#btn55k'));
			$('#btn56k').text($.i18n.prop('#btn56k'));
			$('#btn57k').text($.i18n.prop('#btn57k'));
			$('#btn58k').text($.i18n.prop('#btn58k'));
			$('#btn59k').text($.i18n.prop('#btn59k'));
			$('#btn60k').text($.i18n.prop('#btn60k'));
			$('#btn61k').text($.i18n.prop('#btn61k'));
			$('#btn62k').text($.i18n.prop('#btn62k'));
			$('#btn63k').text($.i18n.prop('#btn63k'));
			$('#btn64k').text($.i18n.prop('#btn64k'));
			$('#btn65k').text($.i18n.prop('#btn65k'));
			$('#btn66k').text($.i18n.prop('#btn66k'));
			$('#btn67k').text($.i18n.prop('#btn67k'));
			$('#btn68k').text($.i18n.prop('#btn68k'));
			$('#btn69k').text($.i18n.prop('#btn69k'));
			$('#btn70k').text($.i18n.prop('#btn70k'));
			$('#btn71k').text($.i18n.prop('#btn71k'));
			$('#btn72k').text($.i18n.prop('#btn72k'));
			$('#btn73k').text($.i18n.prop('#btn73k'));
			$('#btn74k').text($.i18n.prop('#btn74k'));
			$('#btn75k').text($.i18n.prop('#btn75k'));
			$('#btn76k').text($.i18n.prop('#btn76k'));
			$('#btn77k').text($.i18n.prop('#btn77k'));
			$('#btn78k').text($.i18n.prop('#btn78k'));
			$('#btn79k').text($.i18n.prop('#btn79k'));
			$('#btn80k').text($.i18n.prop('#btn80k'));
			$('#btn81k').text($.i18n.prop('#btn81k'));
			$('#btn82k').text($.i18n.prop('#btn82k'));
			$('#btn83k').text($.i18n.prop('#btn83k'));
			$('#btn84k').text($.i18n.prop('#btn84k'));
			$('#btn85k').text($.i18n.prop('#btn85k'));
			$('#btn86k').text($.i18n.prop('#btn86k'));
			$('#btn87k').text($.i18n.prop('#btn87k'));
			$('#btn88k').text($.i18n.prop('#btn88k'));
			$('#btn89k').text($.i18n.prop('#btn89k'));
			$('#btn90k').text($.i18n.prop('#btn90k'));
			$('#btn91k').text($.i18n.prop('#btn91k'));
			$('#btn92k').text($.i18n.prop('#btn92k'));
			$('#btn93k').text($.i18n.prop('#btn93k'));
			$('#btn94k').text($.i18n.prop('#btn94k'));
			$('#btn95k').text($.i18n.prop('#btn95k'));
			$('#btn96k').text($.i18n.prop('#btn96k'));
			$('#btn97k').text($.i18n.prop('#btn97k'));
			$('#btn98k').text($.i18n.prop('#btn98k'));
			$('#btn99k').text($.i18n.prop('#btn99k'));
			$('#btn100k').text($.i18n.prop('#btn100k'));

			$('label[k-resid]').each(function(i, item) {
				//下面两种方法都支持
				$(item).text($.i18n.prop(item));
				//$(item).text($.i18n.prop($(item).attr('k-resid')));
			});
		}

	});
});
