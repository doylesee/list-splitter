/*
List Splitter JS
By Doyle See / http://doylesee.com
*/
(function($) {
	$.fn.listSplitter = function(total_column) {
		return this.each(function(i) {
			var li_total = $(this).find('li').length;
			var li_per_column = Math.ceil(parseFloat(li_total/total_column));

			for (var aa=0; aa<li_total; aa+=li_per_column) {
				$(this).find('li').slice(aa, aa+li_per_column).wrapAll('<div class="list-split__item"><ul></ul></div>');
			}
			$(this).append('<div style="clear:both;"></div>');
			$(this).find('div').unwrap();
		});
	};
})(jQuery)

