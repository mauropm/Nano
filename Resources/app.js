var config = {};
Ti.include('config.js');

var active = {};
active.win = Ti.UI.createWindow({
	backgroundColor: config.color.bg, 
	orientationModes: config.orientation,
	opacity: 0
});
active.win.orientationModes = config.orientation; // Android Orientation Bug Fix
active.win.open();

var ui = {};
Ti.include('ui/top.js','ui/nav.js');

Ti.App.fireEvent('ui:init');
active.win.animate({ opacity: 1, duration: 1500 });