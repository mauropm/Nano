(function(){
	ui.nav = {};
	
	ui.nav.view = Ti.UI.createView({
		height: ui.cfg.size.top,
		width: ui.cfg.size.width,
		backgroundColor: ui.cfg.color.top,
		bottom: 0
	});
	
	Ti.App.addEventListener('ui:init', function(){
		ui.win.add(ui.nav.view);
	});
})();