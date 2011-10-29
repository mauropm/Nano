(function(){
	ui.scroll = {};
	
	ui.scroll.create = function() { 
		var view = Ti.UI.createView({
			height: config.size.height - (config.size.top + config.size.nav),
			width: config.size.width,
			top: config.size.top,
			backgroundColor: config.color.bg
		});
		return view;
	}
	
	Ti.App.addEventListener('scroll:open', function(){
		if(typeof(active.view) !== 'undefined'){ active.win.remove(active.view); }
		active.view = ui.scroll.create();
		active.win.add(active.view);
	});
})();