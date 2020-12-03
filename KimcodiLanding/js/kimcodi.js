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


$(function(){
  if($('.tabWrap').length > 0){
    tabWrap();
  }

});
