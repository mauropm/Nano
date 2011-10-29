(function(){
	ui.top = {};
	
	ui.top.create = function() {
		var view = Ti.UI.createView({
			height: config.size.top,
			width: config.size.width,
			backgroundColor: config.color.top,
			top: 0
		});
		return view;
	};
	
	Ti.App.addEventListener('ui:init', function(){
		active.top = ui.top.create();
		active.win.add(active.top);
	});
})();