/**
 * 2016/08/16
 */

$(document).ready(function() {
  // alert($('.map3d').attr('data-full'));

  $('.map3d').click(function(event) {
    $(this).toggleClass('full-screen');
  });

  $('.search-box>form').submit(function(event) {
    // TODO: 地址查找，加载结果

    $('.search-result').slideDown();
    return false;
  });

  $('form>button').click(function(event) {
    if($('form>input').val() === ''){
      $('.search-result').slideUp(function(){
        $('.search').addClass('unexpanded');
      });
    }
  });

  $('.search-btn').click(function(event) {
    if($('form>input').val() === ''){
      $('.search').removeClass('unexpanded');
      return false;
    }
    $('.search-box>form').submit();
  });

  $('.result-list').on('click', '.list-item', function(event) {
    $(this).addClass('selected-item').siblings().removeClass('selected-item');
  });

});
