'use strict';

$(function() {
	
	if($('.ajax__counters-list').length > 0) {
		
		$('.ajax__counters-list')
			.empty()
			.each(function(index){
				
				var block = $(this);
				
				$.post('/api/v1/', {
					method : '/management/v1/counters'
				}, function(data){
					
					if(data.response) {
						
						if(data.response.counters) {
							
							for(var i = 0; i < data.response.counters.length; i++) {
								
								(function(c){
									
									var item = $('<div/>', {
										html : c.name + ' (' + c.site + ')',
									});
									
									item.appendTo(block);
									
								})(data.response.counters[i]);
								
							}
							
						}
						
					}
					
				})
				
			});
		
	}
	
	/*
	$(document.body).on('submit.azbn7', '.azbn7__auth__form_auto', null, function(event){
		event.preventDefault();
		
		var _form = $(this).clone();
		_form
			.attr('class', '')
			.css({
				display : 'none',
			})
			.appendTo($(document.body))
		;
		_form.trigger('submit');
		
		//window.open($(this).attr('action'))
		
	});
	*/
	
});