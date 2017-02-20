$(function(){
	//头部新闻那部分
	var swiper1 = new Swiper("#header",{
		freeMode:true,//自由滑动内容
		slidesPerView:"auto",//自动根据slides的宽度来设定显示的数量
	});
	$("#header .swiper-slide").click(function(){
		$("#header .swiper-slide").removeClass("header-active");
		$(this).addClass("header-active");
	});


//中间的banner图
	var swiper2 = new Swiper("#banner",{
		// pagination:".swiper-pagination",//此处为点的缩略图
		// paginationClickable:true,//此处为点的缩略图
		prevButton:".swiper-button-prev",
		nextButton:".swiper-button-next",
		loop:true,
		
		autoplay:1000,
		loopedSlides:3,
		autoplayDisableOnInteraction:false,//鼠标移出 回到自动轮播
	});


	var swiper22 = new Swiper("#pic",{
		loop:true,
		slidesPerView:3,
		spaceBetween:10,
		loopedSlides:3,
		centeredSlides:true,//当前slide居中
		autoplayDisableOnInteraction:false,
	})

	swiper2.params.control=swiper22;
	swiper22.params.control=swiper2;



	//tabs部分
	$("#tabs a").bind("touchstart",function(e){
		e.preventDefault();//阻止相关联的事件
		$("#tabs a").removeClass("active");
		$(this).addClass("active");
		swiper3.slideTo($(this).index());
	})



	//tabs-container部分
	var swiper3 = new Swiper("#tabs-container",{
	
		onSlideChangeStart:function(swiper){
			$("#tabs a").removeClass("active");
			// console.log(swiper.activeIndex); //返回当前活动silde的索引
			$("#tabs a").eq(swiper.activeIndex).addClass("active");
		},
	})
});

