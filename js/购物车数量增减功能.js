//增减商品数量模块，首先声明一个变量，当点击"+"号时，变量值++,然后赋值给文本框。
$(".increment").click(function(){
	var n = $(this).siblings(".itxt").val();
	n++;
	$(this).siblings(".itxt").val(n);
	//计算小计模块，根据文本框的值乘以当前商品的价格就是商品的小计。
	var p = $(this).parent().parent().siblings(".p-price").html();
	p = p.substr(1);
	$(this).parent().parent().siblings(".p-sum").html("￥"+ (p * n).toFixed());

});
$(".decrement").click(function(){
	var n = $(this).siblings(".itxt").val();
	if(n==1){
		return false;
	}
	n--;
	$(this).siblings(".itxt").val(n);
	var p = $(this).parents(".p-num").siblings(".p-price").html();
	p = p.substr(1);
	$(this).parent().parent().siblings(".p-sum") .html("￥"+ (p * n).toFixed(2));
});

$(".itxt").change(function(){
	var n = $(this).val();
	var p = $(this).parents(".p-num").siblings(".p-price").html();
	p = p.substr(1);
    $(this).parents(".p-num").siblings(".p-sum") .html("￥"+ (p * n).toFixed(2));
});