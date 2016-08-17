/**
 * 2016/08/17
 */

var curMenu = null, zTree_Menu = null;
var setting = {
  view: {
    showLine: false,
    showIcon: false,
    selectedMulti: false,
    dblClickExpand: false,
    addDiyDom: addDiyDom
  },
  data: {
    simpleData: {
      enable: true
    }
  },
  callback: {
    beforeClick: beforeClick
  }
};

var zNodes =[
  { id:1, pId:0, name:"实时监控", open:true},
  { id:11, pId:1, name:"摄像头1号"},
  { id:12, pId:1, name:"摄像头2号"},
  { id:13, pId:1, name:"摄像头3号"},
  { id:14, pId:1, name:"摄像头4号"},
  { id:15, pId:1, name:"摄像头5号"},
  { id:2, pId:0, name:"历史数据"},
  { id:21, pId:2, name:"摄像头1号"},
  { id:211, pId:21, name:"昨天"},
  { id:212, pId:21, name:"前天"},
  { id:22, pId:2, name:"摄像头2号"},
  { id:23, pId:2, name:"摄像头3号"},
  { id:24, pId:2, name:"摄像头4号"},
  { id:25, pId:2, name:"摄像头5号"}
];

function addDiyDom(treeId, treeNode) {
  var spaceWidth = 5;
  var switchObj = $("#" + treeNode.tId + "_switch"),
  icoObj = $("#" + treeNode.tId + "_ico");
  switchObj.remove();
  icoObj.before(switchObj);

  if (treeNode.level > 1) {
    var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level)+ "px'></span>";
    switchObj.before(spaceStr);
  }
}

function beforeClick(treeId, treeNode) {
  if (treeNode.level == 0 ) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
    zTree.expandNode(treeNode);
    return false;
  }
  return true;
}

$(document).ready(function(){
  var treeObj = $("#monitor-list");
  $.fn.zTree.init(treeObj, setting, zNodes);
  zTree_Menu = $.fn.zTree.getZTreeObj("monitor-list");
  curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
  zTree_Menu.selectNode(curMenu);

  // treeObj.hover(function () {
  //   if (!treeObj.hasClass("showIcon")) {
  //     treeObj.addClass("showIcon");
  //   }
  // }, function() {
  //   treeObj.removeClass("showIcon");
  // });
});
