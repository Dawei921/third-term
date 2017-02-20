$(function(){
	var swiper1=new Swiper("#header",{
		freeMode:true,
		slidesPerView:"auto",
	});
	$("#header .swiper-slide").on("touchstart",function(){
		$("#header .swiper-slide").removeClass("header-active");
		$(this).addClass("header-active");
	});

	var swiper2=new Swiper("#banner",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		loop:true,
		autoplay:3000,
	});

	$("#tabs a").on("touchstart",function(e){
		e.preventDefault();
		$("#tabs a").removeClass("active");
		$(this).addClass("active");
		// console.log($(this).index()); //返回当前元素在同辈中的索引位置
		swiper3.slideTo($(this).index()); //切换到指定索引的slide
	});

	var swiper3=new Swiper("#tabs-container",{
		onSlideChangeStart:function(swiper){
			$("#tabs a").removeClass("active");
			// console.log(swiper.activeIndex); //返回当前活动silde的索引
			$("#tabs a").eq(swiper.activeIndex).addClass("active");

		},
	});

});