$("#countdown").countdown("2016/06/11", function(event) {

if ($(window).width() < 480) {
		$(".days").text(event.strftime("%D"));
        $(".hours").text(event.strftime("%H"));
        $(".minutes").text(event.strftime("%M"));
        $(".seconds").text(event.strftime("%S"));
}
else
{
	$(this).text(event.strftime('%D days | %H hours | %M minutes | %S seconds'));
}
});
