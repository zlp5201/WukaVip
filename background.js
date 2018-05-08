
vip_url = {
    'byg-百域阁':'http://yun.baiyug.cn/vip/?url=',
    '2gty-爱跟影院':'http://2gty.com/apiurl/yun.php?url=',
    'wmxz-无名小站':'http://www.wmxz.wang/video.php?url=',
    'vip-vip视频解析':'http://www.a305.org/yun.php?url=',
    'daidaitv-daidaitv':'https://api.daidaitv.com/index/?url=',
    'gaoduan-高端解析':'http://jx.vgoodapi.com/jx.php?url=',
    'jlsprh-免费无广告':'http://vip.jlsprh.com/',
    'aikan-免费无广告':'http://aikan-tv.com/?url=',
    'nepian-那片':'http://api.nepian.com/ckparse/?url=',
    '88gc-花园影视':'http://j.88gc.net/jx/?url=',
    'jqaaa-金桥解析':'http://jqaaa.com/jx.php?url=',
    'mt2t-云播放':'http://y.mt2t.com/lines?url=',
    '91exp-91exp':'http://api.91exp.com/svip/?url=',
    'shitou-石头免费':'http://jiexi.071811.cc/jx2.php?url=',
    'xcq91-阿莫之家':'http://api.xcq91.top/?url=',
    'ejiafarm-穷二代视频解析':'http://jx.ejiafarm.com/dy.php?url='
};

/**
<select class="wow fadeInRight animated" id="jiekou" name="jiekou" style="visibility: visible; animation-name: fadeInRight;">
                    <option value="http://000o.cc/jx/ty.php?url=">默认接口（推荐）</option>
                    <option value="http://65yw.2m.vc/chaojikan.php?url=">万能接口1</option>
                    <option value="http://000o.cc/jx/ty.php?url=">万能接口2</option>	
                    <option value="http://vip.jlsprh.com/index.php?url=">万能接口3</option>
                    <option value="http://www.82190555.com/index/qqvod.php?url=">万能接口4</option>
                    <option value="http://www.chepeijian.cn/jiexi/vip.php?url=">万能接口5</option>
                    <option value="http://yyygwz.com/index.php?url=">万能接口6</option>
                    <option value="http://www.vipjiexi.com/tong.php?url=">腾讯视频接口1</option>	
                    <option value="http://yyygwz.com/index.php?url=">爱奇艺超清接口1</option>
                    <option value="http://api.47ks.com/webcloud/?v=">爱奇艺超清接口2</option>
                    <option value="http://www.vipjiexi.com/tong.php?url=">爱奇艺超清接口3</option>
                    <option value="http://www.vipjiexi.com/yun.php?url=">芒果TV超清接口</option>
                    <option value="http://65yw.2m.vc/chaojikan.php?url=">芒果TV手机接口</option>
                    <option value="http://v.rpsofts.com/v.php?url=">优酷超清接口</option>
                    <option value="http://65yw.2m.vc/chaojikan.php?url=">搜狐视频接口</option>
                    <option value="http://2gty.com/apiurl/yun.php?url=">乐视视频接口</option> 
                </select>
 */

chrome.runtime.onInstalled.addListener(function () {
    var i = 0;
    for(x in vip_url) {
       var idTitle = x.split('-');
       chrome.contextMenus.create({
        id: idTitle[0],
        type: 'normal',
        title: '线路(' + i++ +"): " + idTitle[1],
        contexts: ['page']
      });
    }
  });


function openplayer(burl, a) {	
    
    if (!a) {
        chrome.tabs.create({
            index: 0,
            url: burl
        }, function (c) {});
        return
    }
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (c) {
        chrome.tabs.update(c[0].id, {
            url: burl + "&title=" + encodeURI(c[0].title)
        })
    })
}
var contexts = ["page", "link"];
var title = ["看VIP"];



	
	chrome.browserAction.onClicked.addListener(function(b) {
		chrome.tabs.create({
			url:'http://api.baiyug.cn/'
		})
    })
    

    // 监听菜单的点击
chrome.contextMenus.onClicked.addListener(function (menuItem) {

    var prefix = menuItem.pageUrl;
    for (x in vip_url) {
        if (x.indexOf(menuItem.menuItemId) != -1) {
            prefix = vip_url[x];
        }
    }
    openplayer(prefix + encodeURIComponent(menuItem.pageUrl));
  });
  
