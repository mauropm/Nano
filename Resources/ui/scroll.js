(function(){
	ui.scroll = {};
	
	ui.scroll.view = Ti.UI.createView({
		height: ui.cfg.size.height - (ui.cfg.size.top + ui.cfg.size.nav),
		width: ui.cfg.size.width,
		top: ui.cfg.size.top,
		backgroundColor: ui.cfg.color.bg
	});
	
	Ti.App.addEventListener('scroll:open', function(){
		ui.win.add(ui.scroll.view);
	});
})();