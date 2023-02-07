/**
 * 国际化工具类
 * 优点：只在非中文简体环境下才加载language文件，节约资源
 * 缺点：在非中文简体状环境下，前端渲染速度不够快可能会出现前端开始显示中文描述，加载完毕后才切换到英文描述
 * @author eko.zhan
 * @required
 *	jquery.min.js
 *	jquery.cookie.js
 */
;(function($){
	'use strict';
	
	$.i18n = $.i18n || {};
	
	$.extend($.i18n, {
		/* 获取当前环境语言 */
		getLocale: function(){
			return Cookies.get('locale')==undefined?'zh':Cookies.get('locale');
		},
		/** 
		 * 设置语言类型，参数为空时默认从浏览器里获取 
		 * key zh/zh-tw/en 
		 **/
		setLocale: function(key){
			if (typeof(key)=='undefined' || key==null || key==''){
				var type = navigator.appName;
				if (type=="Netscape"){
					key = navigator.language;
				}else{
					key = navigator.userLanguage;
				}
				//取得浏览器语言的前两个字母
				key = key.toLowerCase();
				key = key=='zh-hk'?'zh-tw':key;
				if (key!='zh-tw'){
					key = key.substr(0, 2);
				}
			}
			if (Cookies.get('locale')!=key){
                Cookies.set('locale', key, { expires: 7 });
			}
		},
		/**
		 * 加载多语言资源文件
		 * 资源文件格式 
		 *	$.i18n.lang = $.extend(true, $.i18n.lang || {}, {
		 *		zh: {
		 *			test: '测试'
		 *		},
		 *		en: {
		 *			test: 'Test'
		 *		},
		 *		'zh-tw': {
		 *			test: '測試'
		 *		}
		 *	});
		 * @param langScript 以/开头，相对于 contextPath 的路径 /resource/kbase/base/login/language.js
		 */
		load: function(langScript, callback){
			var success = false;
			var b = $.i18n.getLocale()!='zh'; //非中文环境才加载资源文件
			if (langScript!=null && b){
				if (typeof(langScript)==='object' && !isNaN(langScript.length)){
					$(langScript).each(function(i, item){
						_appendScript(item);
					});
				}else{
					_appendScript(langScript);
				}
				success = true;
			}
			if (typeof(callback)=='function') callback(success);
		},
		/**
		 * 参数可以传入元素标识，或者 资源id
		 * 获取元素的多语言资源 <span k-resid="zh">中文</span>
		 * 优先返回id对应的资源，如果为null，则返回defaultValue，否则返回id
		 * 用法：
		 * $.i18n.prop('username_is_null')
		 * $.i18n.prop('username_is_null', '用户名不能为空')
		 * 
		 */
		prop: function(elem, defaultValue){
			var id = '';
			var res = '';
			var locale = $.i18n.getLocale();
			if (typeof($.i18n.lang)=='undefined'){
				$.i18n.lang = {};
				$.i18n.lang[locale] = {};
			}
			if ($(elem).attr('k-resid')==undefined){
				//传入的是资源id
				id = elem;
				res = $.i18n.lang[locale][elem];
				if (res!=undefined && res.indexOf('{0}')!=-1){
					//需要填充占位符，如果参数未填满，会显示undefined
					//不支持参数是资源id的情况，如果需要适配语言，参数可以使用 alert($.i18n.prop('username', '你好', $.i18n.prop('login'), '测试'));$.i18n.prop('msg_hello', '你好', $.i18n.prop('login'), '测试');
					var args = arguments;
					return res.replace(/\{(\d+)\}/g, function(m, i){
						i++;
						return args[i];
					});
				}
			}else{
				//传入的是元素
				id = $(elem).attr('k-resid');
				res = $.i18n.lang[locale][id];
			}
			return res || defaultValue || id;
		}
	});

	/**
	 * 向页面加载javascript文件
	 */
	function _appendScript(langScript){
		var _key = langScript.substring(0, langScript.length-3).replace(/\//gi, '_');
		if ($('script[_key="' + _key + '"]').length==0){
			$('head').append('<script _key="' + _key + '" src="' + langScript + '" charset="utf-8" type="text/javascript"><\/script>');
		}
	}
})(jQuery);