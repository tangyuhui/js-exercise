(
	function(){
		rootElement = document.documentElement;
		var clientRect  = rootElement.getBoundingClientRect();
		var domWidth = clientRect.width;
		var dpr = window.devicePixelRatio || 1;
		var scale=1/dpr; 
		rootElement.style.fontSize=domWidth/15+"px";
		var metaEl = document.querySelector('meta[name="viewport"]');
		metaEl.content='width=' + dpr * domWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no';
		var head = document.getElementsByTagName("head")[0];
	}
)()
