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
		nav: '#ff0000',
		navalt: '#000000'
	};
	
	ui.cfg.nav = [
	    {title: 'Scroll', url: 'ui/scroll.js'},
	    {title: 'Table', url: 'ui/table.js'},
	    {title: 'Settings', url: 'ui/settings.js'}
	];
	
	ui.cfg.orientation = [Ti.UI.PORTRAIT,Ti.UI.UPSIDE_PORTRAIT];
})();