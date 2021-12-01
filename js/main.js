$(function(){
  $('#js-burgerBtn').on('click',function(){
    //body　アクティブクラスの付け外し
    $('body').toggleClass('is-drawerActive');
    //ボタンが押され、ナビが出現するとき
    if($(this).attr('aria-expanded') == 'false'){
      //aria-expandedをtrueにし、ボタンのデザインを変更
      $(this).attr('aria-expanded',true);
      //ナビメニュー、背景を出現させる
      $('.js-globalMenu').css('visibility','visible');
      $('.js-globalMenu').attr('aria-hidden',false);
    } else {
      //aria-expandedをfalseにし、ボタンのデザインを変更
      $(this).attr('aria-expanded',false);
      //ナビメニュー、背景を隠す
      $('.js-globalMenu').css('visibility','hidden');
      $('.js-globalMenu').attr('aria-hidden',true);
    }
  });

  $('.nav-menu-bg').on('click',function(){
    //body　アクティブクラスの付け外し
    $('body').toggleClass('is-drawerActive');
    //ボタンが押され、ナビが出現するとき
    if($('#js-burgerBtn').attr('aria-expanded') == 'false'){
      //aria-expandedをtrueにし、ボタンのデザインを変更
      $('#js-burgerBtn').attr('aria-expanded',true);
      //ナビメニュー、背景を出現させる
      $('.js-globalMenu').css('visibility','visible');
      $('.js-globalMenu').attr('aria-hidden',false);
    } else {
      //aria-expandedをfalseにし、ボタンのデザインを変更
      $('#js-burgerBtn').attr('aria-expanded',false);
      //ナビメニュー、背景を隠す
      $('.js-globalMenu').css('visibility','hidden');
      $('.js-globalMenu').attr('aria-hidden',true);
    }
  });
  
  //スムーススクロール
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href = $(this).attr('href');
    let target = $(href == '#' || href == '' ? 'html' : href);
    let position = target.offset().top - 72;
    $('html').animate({
      scrollTop: position
    },speed,'swing');

    if($('body').hasClass('is-drawerActive')){
      $('body').removeClass('is-drawerActive');
      $('#js-burgerBtn').attr('aria-expanded',false);
      $('.js-globalMenu').css('visibility','hidden');
      $('.js-globalMenu').attr('aria-hidden',true);
    }
    return false;
  });
});