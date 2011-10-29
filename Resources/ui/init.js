(function(){
	ui.win = Ti.UI.createWindow({
		backgroundColor: ui.cfg.color.bg, 
		orientationModes: ui.cfg.orientation
	});
	ui.win.orientationModes = ui.cfg.orientation; // Android Orientation Bug Fix
	ui.win.open();
	
	Ti.include('top.js','nav.js');
	Ti.App.fireEvent('ui:init');
})();