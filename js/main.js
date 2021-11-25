$(function(){
  $('#js-burgerBtn , .nav-menu-bg').on('click',function(){
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
      $('.js-globalMenu').attr('aria-hidden',true)
    }
  });
});