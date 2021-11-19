$(function(){
  $('#js-burgerBtn').on('click',function(){
    $('body').addClass('is-drawerActive');
    if($(this).attr('aria-expanded') == 'false'){
      $(this).attr('aria-expanded',true);
      $('.js-globalMenu').css('visibility','visible');
      $('.nav-menu-bg').css('visibility','visible');
      $('#js-globalMenu').attr('aria-hidden',false);
    } else {
      $(this).attr('aria-expanded',false);
      $('.js-globalMenu').css('visibility','hidden');
      $('.nav-menu-bg').css('visibility','hidden');
      $('#js-globalMenu').attr('aria-hidden',true);
    }
  });
  $('.nav-menu-bg').on('click',function(){
    $('body').addClass('is-drawerActive');
  if($('#js-burgerBtn').attr('aria-expanded') == 'false'){
    $('#js-burgerBtn').attr('aria-expanded',true);
  } else {
    $('#js-burgerBtn').attr('aria-expanded',false);
    $('.js-globalMenu').css('visibility','hidden');
    $('.nav-menu-bg').css('visibility','hidden');
    $('#js-globalMenu').attr('aria-hidden',true);
  }});
});