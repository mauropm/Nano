(function(){
	ui.nav = {};
	
	var count = config.nav.length;
	var navwidth = Math.round(config.size.width / count);
	
	var items = [];
	
	ui.nav.create = function() {
		var view = Ti.UI.createView({
			height: config.size.nav,
			width: config.size.width,
			backgroundColor: config.color.nav,
			bottom: 0
		});
		for(var i = 0; i < count; i++){
			items[i] = Ti.UI.createView({
				id: i,
				height: config.size.nav,
				width: navwidth,
				left: i * navwidth
			});
			items[i].addEventListener('click', function(e){
				ui.nav.click(e.source.id);
			});
			view.add(items[i]);
		}
		items[0].fireEvent('click');
		return view;
	};
	
	ui.nav.click = function(item) {
		var title = config.nav[item].title.toLowerCase();
		var url = config.nav[item].url;
		for(var i = 0; i < count; i++){ items[i].backgroundColor = config.color.nav; }
		items[item].backgroundColor = config.color.navalt;
		if(typeof(ui[title]) === 'undefined'){ Ti.include(url); }
		Ti.App.fireEvent(title + ':open');
	};
	
	Ti.App.addEventListener('ui:init', function(){
		active.nav = ui.nav.create();
		active.win.add(active.nav);
	});
})();