function tabWrap(){
    var tabLi = $('.tab li');

    $('.tabCon').hide();
    $('.tabCon.first').show();

    tabLi.click(function(e){
      e.preventDefault();
      var $this = $(this);
      var $tabCon = $this.parents('.tab').siblings('.tabCon');
      var $thisIndex = $(this).index();
      $this.siblings('li').removeClass('on');
      $this.addClass('on');
      $tabCon.hide();
      $tabCon.eq($thisIndex).show();
    });
}

function goToHash(id){
  $('html,body').animate({ scrollTop: $(id).offset().top }, 1000);
}

//팝업  또는 sldWrap을 브라우저 중앙에 위치시킴
function popTopPosition(obj){
	var wHeight = $(window).height();
	var contHeight = obj.outerHeight();

	if(wHeight <= contHeight){
		//브라우저 크기가 팝업 사이즈 보다 작을 경우 팝업 위치를 top:15px에 고정
			obj.css({
				'top': '15px'
			});
	} else {
		//브라우저 크기가 팝업 사이즈 보다 클 경우 팝업을 브라우저 중앙에 고정
			obj.css({
				'top': (wHeight/2) - (contHeight/2)
			});
	}
}

//버튼 클릭 시 팝업을 호출
function popOpen(popup){
	$('body').attr('style','');
	var posY = $(window).scrollTop();

	$('.'+ popup).fadeIn(100);

	setTimeout(function(){
		popTopPosition($('.'+ popup +' .popWrap'));
	}, 0);

	$('.'+ popup).addClass('open').find('.dim').show();
	$('body').addClass('bodyFixed').css('top', -posY);

	var objPopWrap = $('.'+ popup +' .popWrap');

	$(window).resize(function(){
		setTimeout(function(){
			//var windowHeight = $(window).height();
				popTopPosition(objPopWrap);
		}, 0);
	});
}

//팝업 내 닫기 버튼 클릭 시 팝업을 닫음
//팝업 열기 전의 바디스크롤 위치를 계산하여, 팝업을 열었다가 닫았을때 바디스크롤이 원래 위치로 돌아오게 함
function popClose(e){
	var posTop = Math.abs(parseInt($('body').css('top')));
	$('body').removeClass('bodyFixed').css('top', 0);
	$(window).scrollTop(posTop);
	e.parents('.popFixedWrap').removeClass('open').fadeOut(300);
}


$(function(){
  if($('.tabWrap').length > 0){
    tabWrap();
  }

});
