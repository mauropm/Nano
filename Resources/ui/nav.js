(function(){
	var items = [];
	var icons = [];
	var hints = [];
	
	ui.nav = {};
	
	ui.nav.view = Ti.UI.createView({
		height: ui.cfg.size.nav,
		width: ui.cfg.size.width,
		backgroundColor: ui.cfg.color.nav,
		bottom: 0
	});
	
	ui.nav.populate = function(){
		var i;
		var nav = ui.cfg.nav;
		var count = nav.length;
		var navwidth = Math.round(ui.cfg.size.width / count);
		for(i = 0; i < count; i++){
			items[i] = Ti.UI.createView({
				id: i,
				height: ui.cfg.size.nav,
				width: navwidth,
				left: i * navwidth
			});
			items[i].addEventListener('click', function(e){
				Ti.App.fireEvent('nav:click', {id: e.source.id});
			});
			
			ui.nav.view.add(items[i]);
		}
	};
	
	Ti.App.addEventListener('nav:click', function(item){
		var i;
		for(i in items){ if (items.hasOwnProperty(i)){ items[i].backgroundColor = ui.cfg.color.nav; } }
		items[item.id].backgroundColor = ui.cfg.color.navalt;
	});
	
	Ti.App.addEventListener('ui:init', function(){
		ui.nav.populate();
		Ti.App.fireEvent('nav:click', {id: 0});
		ui.win.add(ui.nav.view);
	});
})();