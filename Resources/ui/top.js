(function(){
	ui.top = {};
	
	ui.top.view = Ti.UI.createView({
		height: ui.cfg.size.top,
		width: ui.cfg.size.width,
		backgroundColor: ui.cfg.color.top,
		top: 0
	});
	
	Ti.App.addEventListener('ui:init', function(){
		ui.win.add(ui.top.view);
	});
})();