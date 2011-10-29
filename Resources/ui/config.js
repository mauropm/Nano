(function(){
	var height = Ti.Platform.displayCaps.platformHeight -= ((Ti.Platform.osname === 'android') ? Math.round((25 * Ti.Platform.displayCaps.dpi)/160) : 20);
	
	ui.cfg = {};
	
	ui.cfg.size = {
		height: height,
		width: Ti.Platform.displayCaps.platformWidth,
		top: Math.round(height * 0.1),
		nav: Math.round(height * 0.1)
	};
	
	ui.cfg.color = {
		bg: '#ffffff',
		top: '#ff0000',
		nav: '#ff0000'
	};
	
	ui.cfg.nav = [
	    {title: 'View 1', img: 'img/1.png', url: 'views/1.js'},
	    {title: 'View 2', img: 'img/2.png', url: 'views/2.js'},
	    {title: 'View 3', img: 'img/3.png', url: 'views/3.js'}
	];
	
	ui.cfg.orientation = [Ti.UI.PORTRAIT,Ti.UI.UPSIDE_PORTRAIT];
})();