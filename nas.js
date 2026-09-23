// ==========================================
// 这里把你的视频数据直接写在本地 JS 数组里
// ==========================================
var localData = [
    {
        "vod_id": "1",
        "vod_name": "http://192.168.31.110/img/design-ah.jpg",
        "vod_pic": "http://你的NAS_IP:端口/pic1.jpg",
        "vod_remarks": "更新至02集",
        "vod_play_from": "NAS直连",
        "vod_play_url": "第20集$http://192.168.31.110/video/design-ah-tw/EP20.mp4#第19集$http://192.168.31.110/video/design-ah-tw/EP19.mp4#第18集$http://192.168.31.110/video/design-ah-tw/EP18.mp4#第17集$http://192.168.31.110/video/design-ah-tw/EP17.mp4#第16集$http://192.168.31.110/video/design-ah-tw/EP16.mp4#第15集$http://192.168.31.110/video/design-ah-tw/EP15.mp4#第14集$http://192.168.31.110/video/design-ah-tw/EP14.mp4#第13集$http://192.168.31.110/video/design-ah-tw/EP13.mp4#第12集$http://192.168.31.110/video/design-ah-tw/EP12.mp4#第11集$http://192.168.31.110/video/design-ah-tw/EP11.mp4#第10集$http://192.168.31.110/video/design-ah-tw/EP10.mp4#第09集$http://192.168.31.110/video/design-ah-tw/EP09.mp4#第08集$http://192.168.31.110/video/design-ah-tw/EP08.mp4#第07集$http://192.168.31.110/video/design-ah-tw/EP07.mp4#第06集$http://192.168.31.110/video/design-ah-tw/EP06.mp4#第05集$http://192.168.31.110/video/design-ah-tw/EP05.mp4#第04集$http://192.168.31.110/video/design-ah-tw/EP04.mp4#第03集$http://192.168.31.110/video/design-ah-tw/EP03.mp4#第02集$http://192.168.31.110/video/design-ah-tw/EP02.mp4#第01集$http://192.168.31.110/video/design-ah-tw/EP01.mp4",
        "vod_content": "这是第一部的简介说明，放在 NAS 里的。"
    },
    {
        "vod_id": "2",
        "vod_name": "第二部测试剧集",
        "vod_pic": "http://192.168.31.110/video/ThinkLikeAcrow/thinklikeacrow.jpg",
        "vod_remarks": "全集完结",
        "vod_play_from": "NAS直连",
        "vod_play_url": "第20集$http://192.168.31.110/video/design-ah-tw/EP20.mp4#第19集$http://192.168.31.110/video/design-ah-tw/EP19.mp4#第18集$http://192.168.31.110/video/design-ah-tw/EP18.mp4#第17集$http://192.168.31.110/video/design-ah-tw/EP17.mp4#第16集$http://192.168.31.110/video/design-ah-tw/EP16.mp4#第15集$http://192.168.31.110/video/design-ah-tw/EP15.mp4#第14集$http://192.168.31.110/video/design-ah-tw/EP14.mp4#第13集$http://192.168.31.110/video/design-ah-tw/EP13.mp4#第12集$http://192.168.31.110/video/design-ah-tw/EP12.mp4#第11集$http://192.168.31.110/video/design-ah-tw/EP11.mp4#第10集$http://192.168.31.110/video/design-ah-tw/EP10.mp4#第09集$http://192.168.31.110/video/design-ah-tw/EP09.mp4#第08集$http://192.168.31.110/video/design-ah-tw/EP08.mp4#第07集$http://192.168.31.110/video/design-ah-tw/EP07.mp4#第06集$http://192.168.31.110/video/design-ah-tw/EP06.mp4#第05集$http://192.168.31.110/video/design-ah-tw/EP05.mp4#第04集$http://192.168.31.110/video/design-ah-tw/EP04.mp4#第03集$http://192.168.31.110/video/design-ah-tw/EP03.mp4#第02集$http://192.168.31.110/video/design-ah-tw/EP02.mp4#第01集$http://192.168.31.110/video/design-ah-tw/EP01.mp4",
        "vod_content": "这是第二部的简介，点击我，再也不会显示第一部了！"
    }
];

// ==========================================
// 下面是 TVBox 爬虫标准接口代码（不用改动）
// ==========================================
function init(ext) {}

function home(filter) {
    return JSON.stringify({
        class: [{"type_id": "1", "type_name": "我的NAS影视"}],
        filters: {}
    });
}

function category(tid, pg, filter, extend) {
    return JSON.stringify({
        page: 1,
        pagecount: 1,
        limit: localData.length,
        total: localData.length,
        list: localData
    });
}

function detail(id) {
    var item = null;
    // 这里的循环会在 TVBox 内存里执行，精准匹配你点击的 ID
    for (var i = 0; i < localData.length; i++) {
        if (localData[i].vod_id == id) {
            item = localData[i];
            break;
        }
    }
    return JSON.stringify({
        list: [item]
    });
}

function play(flag, id, flags) {
    return JSON.stringify({
        parse: 0, // 0表示直接播放直链
        url: id
    });
}

function search(wd, quick) {
    return JSON.stringify({ list: [] });
}

// 兼容不同的播放器内核导出规范
export default {
    init: init,
    home: home,
    category: category,
    detail: detail,
    play: play,
    search: search
};
