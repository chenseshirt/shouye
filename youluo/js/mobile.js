$(".mr").click(function(){
	var _this = $(this);

	$(this).parents("li").find(".sonList").slideToggle(300,function(){
		if(_this.parents("li").find(".sonList").css("display") == "block"){
			
				_this.attr("src","img/mt.png");
		}else{
				_this.attr("src","img/mr.png");
			}
	});
		if(_this.parents("li").find(".sonList").css("display") == "block"){
			
				_this.attr("src","img/mt.png");
		}else{
				_this.attr("src","img/mr.png");
			}
	
	$(this).parents("li").siblings().find(".sonList").slideUp(300,function(){
		_this.parents("li").siblings().find("img").attr("src","img/mr.png")
	})
});

$(".search img").click(function(){
	$(".search").css({
		border:"1px solid #fff"
	});
	$(".search input").show();
});
$(".search input").blur(function(){
	    $(this).hide();
		$(".search").css({
		border:"1px solid #000"
		});
})
