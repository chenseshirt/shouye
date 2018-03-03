//头部导航悬停
//var i = $(".on").parents("li").index();
//$(".nav")

//window._bd_share_config = {
//		"common": {
//			"bdSnsKey": {},
//			"bdText": "",
//			"bdMini": "1",
//			"bdMiniList": ["tieba", "bdhome", "thx", "meilishuo", "mogujie", "diandian", "huaban", "duitang", "hx", "fx", "youdao", "sdo", "qingbiji", "people", "xinhua", "mail", "isohu", "yaolan", "wealink", "ty", "iguba", "fbook", "twi", "linkedin", "h163", "evernotecn", "copy", "print"],
//			"bdPic": "",
//			"bdStyle": "2",
//			"bdSize": "24"
//		},
//		"share": {}
//	};

var i = $(".kong").parents("li").index();
console.log(i);
$(".classifyList li").hover(function(){
		$(this).find("span").animate({
			width:"366px"
		});
	},function(){
		var y = $(this).index();
		console.log(y);
		if(y==i){
			$(this).find("span").animate({
			width:"366px"
			},300);
		}else{
			$(this).find("span").animate({
			width:"0px"
		},300);
		}
		
	})

window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":["tieba","bdhome","thx","meilishuo","mogujie","diandian","huaban","duitang","hx","fx","youdao","sdo","qingbiji","people","xinhua","mail","isohu","yaolan","wealink","ty","iguba","fbook","twi","linkedin","h163","evernotecn","copy","print"],"bdPic":"","bdStyle":"2","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];


