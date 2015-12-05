$("#countdown").countdown("2016/06/11", function(event) {
	$(this).text(event.strftime('%D days | %H hours | %M minutes | %S seconds'));});