window.$crisp=[];window.CRISP_WEBSITE_ID="4c3564b5-198e-4b32-b622-3b1ef3d545db";
(function(){
	d=document;s=d.createElement("script");
	s.src="https://client.crisp.chat/l.js";
	s.async=1;d.getElementsByTagName("head")[0].appendChild(s);
})();

// if old URL is detected
if (window.location.pathname == '/kaleidoscope.html' || window.location.pathname == '/kaleidoscope')
	window.location.href = window.location.origin + '/pages/kaleidoscope';
else if (window.location.pathname == '/enrich.html' || window.location.pathname == '/enrich')
	window.location.href = window.location.origin + '/pages/enrich';