/**
 * 2016/08/16
 */

$(document).ready(function() {

  // 三维地图区全屏
  $('.map3d').click(function(event) {
    $(this).toggleClass('full-screen');
  });

  // 搜索
  $('.search-box>form').submit(function(event) {
    // TODO: 地址查找，加载结果

    $('.search-result').slideDown();
    return false;
  });

  // 点击搜索框的叉号
  $('form>button').click(function(event) {
    if($('form>input').val() === ''){
      $('.search-result').slideUp(function(){
        $('.search').addClass('unexpanded');
      });
    }
  });

  // 点击搜索按钮
  $('.search-btn').click(function(event) {
    if($('form>input').val() === ''){
      $('.search').removeClass('unexpanded');
      return false;
    }
    $('.search-box>form').submit();
  });

  // 选择搜索结果项
  $('.result-list').on('click', '.list-item', function(event) {
    $(this).addClass('selected-item').siblings().removeClass('selected-item');
  });

  // 选中右侧工具栏中的视频监控
  $('.right-bar>.monitor').click(function(event) {
    $(this).addClass('selected-tool').siblings().removeClass('selected-tool');
    $('.map2d>.monitor-panel').animate({right: '70px'}, 500);
  });

  // 点击视频监控面板的退出按钮
  $('.monitor-panel').on('click', '.exit', function(event) {
    $('.right-bar>.monitor').removeClass('selected-tool');
    $('.map2d>.monitor-panel').animate({right: '-200px'}, 500);
  });

});
