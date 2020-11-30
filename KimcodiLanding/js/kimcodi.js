function tabWrap(){
    var tabLi = $('.tab li');

    $('.tabCon').hide();
    $('.tabCon.first').show();

    tabLi.click(function(e){
        e.preventDefault();
        var $this = $(this);
        if(tabLi.parents('.tabWrap').hasClass('kpaGwangju')){
          if($this.index()>=4){
            return false;
          }else{
            var $tabCon = $this.parents('.tab').siblings('.tabCon');
            var $thisIndex = $(this).index();
            $this.siblings('li').removeClass('on');
            $this.addClass('on');
            $tabCon.hide();
            $tabCon.eq($thisIndex).show();
            if($this.parents('.tabWrap').hasClass('tabStyle03')){
              $tabCon.eq($thisIndex).find('.linked-tab').find('li').removeClass('on');
              $tabCon.eq($thisIndex).find('.linked-tab').find('li').eq($thisIndex).addClass('on');
            }
          }
        }else{
          if($this.index()>=5){
            return false;
          }else{
            var $tabCon = $this.parents('.tab').siblings('.tabCon');
            var $thisIndex = $(this).index();
            $this.siblings('li').removeClass('on');
            $this.addClass('on');
            $tabCon.hide();
            $tabCon.eq($thisIndex).show();
            if($this.parents('.tabWrap').hasClass('tabStyle03')){
              $tabCon.eq($thisIndex).find('.linked-tab').find('li').removeClass('on');
              $tabCon.eq($thisIndex).find('.linked-tab').find('li').eq($thisIndex).addClass('on');
            }
          }
        }
    });
}

function tabWrap02(){
    var tabLi = $('.linked-tab li');
    tabLi.click(function(e){
        e.preventDefault();
        var $this = $(this);
        var $tabCon = $this.parents('.tabCon').siblings('.tab').siblings('.tabCon');
        var $thisIndex = $(this).index();
        $this.parents('.tabCon').siblings('.tab').find('li').removeClass('on');
        $this.parents('.tabCon').siblings('.tab').find('li').eq($thisIndex).addClass('on');
        $tabCon.hide();
        $tabCon.eq($thisIndex).show();
        $tabCon.eq($thisIndex).find('.linked-tab').find('li').removeClass('on');
        $tabCon.eq($thisIndex).find('.linked-tab').find('li').eq($thisIndex).addClass('on');
    });
}

function goToHash(id){
  $('html,body').animate({ scrollTop: $(id).offset().top }, 1000);
}


$(function(){
  if($('.tabWrap').length > 0){
    tabWrap();
  }

  if($('.linked-tab').length > 0){
    tabWrap02();
  }




});
