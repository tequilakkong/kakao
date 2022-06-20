$('.topLeft').click(function(){
  $('.gnb_open').animate({left:0},300);
  $('.dark').css({'display':'block'});
});

$('.dark').click(function(){
  $('.dark').css({'display':'none'});
  $('.gnb_open').animate({left:-304},300);
});

$('.btn_charactor').click(function(){
  $(this).find('span').toggleClass('on');
})