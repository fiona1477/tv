// ==========================================
// NAS本地影视数据配置区
// 包含完整详情字段，并区分了电影、动画片、纪录片
// ==========================================
var localData = [
    {
        // === 基础核心信息 ===
        "vod_id": "1",                    // 视频唯一ID（确保每个视频的ID不重复）
        "type_id": "1",                   // 对应底部分类中的ID，1代表“纪录片”，2代表“动画片”，3代表“电影”
        "type_name": "纪录片",            // 分类名称
        "vod_name": "像乌鸦一样思考",     // 视频名称
        "vod_pic": "http://192.168.31.110/video/ThinkLikeAcrow/thinklikeacrow.jpg", // 封面图片
        "vod_remarks": "共20集",      // 右下角/右上角的角标（通常写清晰度或集数）

        // === 补充的详情元数据（导演/演员/地区等） ===
        "vod_director": "佐藤雅彦",       // 导演
        "vod_actor": "苍井优，斋藤工",    // 演员（多个演员用逗号或空格隔开）
        "vod_year": "2013",            // 上映年份
        "vod_area": "日本/儿童",        // 地区
        "vod_lang": "日语",            // 语言
        "vod_content": "片名取自于伊索寓言中的乌鸦巧妙地利用鹅卵石喝到罐子底部的水的故事，本系列旨在教导孩子科学方法的四个步骤：观察、假设、实验和评估。幽默的片段展示了科学方法的前三个步骤，而第四个步骤评估，则留给观众自己思考。例如，两支点燃的长短不一的蜡烛放在一个倒置的花瓶中，哪一支将先熄灭？我们看到了结果，但故事最后仅仅提示了氧气和二氧化碳的相对重量", // 剧情简介

        // === 播放线路信息 ===
        "vod_play_from": "Local", // 播放源名称（即播放页面的“线路名称”）
        // 播放地址格式：集数名称$播放链接#集数名称2$播放链接2
        "vod_play_url": "第20集$http://192.168.31.110/video/ThinkLikeAcrow/EP20_720p.flv#第19集$http://192.168.31.110/video/ThinkLikeAcrow/EP19_720p.flv#第18集$http://192.168.31.110/video/ThinkLikeAcrow/EP18_720p.flv#第17集$http://192.168.31.110/video/ThinkLikeAcrow/EP17_720p.flv#第16集$http://192.168.31.110/video/ThinkLikeAcrow/EP16_720p.flv#第15集$http://192.168.31.110/video/ThinkLikeAcrow/EP15_720p.flv#第14集$http://192.168.31.110/video/ThinkLikeAcrow/EP14_720p.flv#第13集$http://192.168.31.110/video/ThinkLikeAcrow/EP13_720p.flv#第12集$http://192.168.31.110/video/ThinkLikeAcrow/EP12_720p.flv#第11集$http://192.168.31.110/video/ThinkLikeAcrow/EP11_720p.flv#第10集$http://192.168.31.110/video/ThinkLikeAcrow/EP10_720p.flv#第09集$http://192.168.31.110/video/ThinkLikeAcrow/EP09_720p.flv#第08集$http://192.168.31.110/video/ThinkLikeAcrow/EP08_720p.flv#第07集$http://192.168.31.110/video/ThinkLikeAcrow/EP07_720p.flv#第06集$http://192.168.31.110/video/ThinkLikeAcrow/EP06_720p.flv#第05集$http://192.168.31.110/video/ThinkLikeAcrow/EP05_720p.flv#第04集$http://192.168.31.110/video/ThinkLikeAcrow/EP04_720p.flv#第03集$http://192.168.31.110/video/ThinkLikeAcrow/EP03_720p.flv#第02集$http://192.168.31.110/video/ThinkLikeAcrow/EP02_720p.flv#第01集$http://192.168.31.110/video/ThinkLikeAcrow/EP01_1080p.flv" 
    },
    {
        // === 基础核心信息 ===
        "vod_id": "2",
        "type_id": "1",                 // 对应底部分类中的ID，1代表“纪录片”，2代表“动画片”，3代表“电影”
        "type_name": "纪录片",
        "vod_name": "‎啊！设计",
        "vod_pic": "http://192.168.31.110/video/design-ah-tw/design-ah.jpg",
        "vod_remarks": "共20集",

        // === 补充的详情元数据 ===
        "vod_director": "中村勇吾",
        "vod_actor": "佐藤卓/旁白",
        "vod_year": "2011",
        "vod_area": "日本/台湾/儿童",
        "vod_lang": "国语",
        "vod_content": "日本NHK出品！这是一档非常经典的儿童设计启蒙节目。通过观察日常生活中常见的物品，启发孩子们从设计的角度去思考问题，超级适合陪孩子一起看！",

        // === 播放线路信息 ===
        "vod_play_from": "Local",
        "vod_play_url": "第20集$http://192.168.31.110/video/design-ah-tw/EP20.mp4#第19集$http://192.168.31.110/video/design-ah-tw/EP19.mp4#第18集$http://192.168.31.110/video/design-ah-tw/EP18.mp4#第17集$http://192.168.31.110/video/design-ah-tw/EP17.mp4#第16集$http://192.168.31.110/video/design-ah-tw/EP16.mp4#第15集$http://192.168.31.110/video/design-ah-tw/EP15.mp4#第14集$http://192.168.31.110/video/design-ah-tw/EP14.mp4#第13集$http://192.168.31.110/video/design-ah-tw/EP13.mp4#第12集$http://192.168.31.110/video/design-ah-tw/EP12.mp4#第11集$http://192.168.31.110/video/design-ah-tw/EP11.mp4#第10集$http://192.168.31.110/video/design-ah-tw/EP10.mp4#第09集$http://192.168.31.110/video/design-ah-tw/EP09.mp4#第08集$http://192.168.31.110/video/design-ah-tw/EP08.mp4#第07集$http://192.168.31.110/video/design-ah-tw/EP07.mp4#第06集$http://192.168.31.110/video/design-ah-tw/EP06.mp4#第05集$http://192.168.31.110/video/design-ah-tw/EP05.mp4#第04集$http://192.168.31.110/video/design-ah-tw/EP04.mp4#第03集$http://192.168.31.110/video/design-ah-tw/EP03.mp4#第02集$http://192.168.31.110/video/design-ah-tw/EP02.mp4#第01集$http://192.168.31.110/video/design-ah-tw/EP01.mp4"
    },
    {
        // === 基础核心信息 ===
        "vod_id": "3",
        "type_id": "2",                 // 对应底部分类中的ID，1代表“纪录片”，2代表“动画片”，3代表“电影”
        "type_name": "动画片",
        "vod_name": "数字积木1～5季",
        "vod_pic": "http://192.168.31.110/video/numberblocks/s1numberblocks.jpg",
        "vod_remarks": "120集",

        // === 补充的详情元数据 ===
        "vod_director": "Simon Taylor",
        "vod_actor": "Beth Chalmers, Marcel McCalla, Teresa Gallagher, David Holt, Emma Tate",
        "vod_year": "2017",
        "vod_area": "英国/儿童",
        "vod_lang": "国语/英语",
        "vod_content": "BBC优秀动画！五个头上带有数字的小盒子，通过一系列生动的故事，给孩子们感性、形象的数学认知。中文只有第1季共24集，英文有1～5季共120集",

        // === 播放线路信息 ===
        "vod_play_from": "Local",
        "vod_play_url": "第一集 一$http://192.168.31.110/video/numberblocks/第1季中文配音24集/第一集 一.mp4#第二集 又一个$http://192.168.31.110/video/numberblocks/第1季中文配音24集/第二集 又一个.mp4"
    }
];

// ==========================================
// TVBox 爬虫标准接口代码（内置了分类筛选逻辑）
// ==========================================
function init(ext) {}

// home 函数：定义 TVBox 顶部导航栏的分类
function home(filter) {
    return JSON.stringify({
        class: [
            {"type_id": "1", "type_name": "纪录片"},
            {"type_id": "2", "type_name": "动画片"},
            {"type_id": "3", "type_name": "电影"}
        ],
        filters: {},
        // 将所有 NAS 数据作为首页推荐列表直接展示！
        // 如果你的片子几百上千部，可以用 localData.slice(0, 20) 只显示前20部最新更新的
        list: localData
    });
}

// category 函数：用户点击顶部导航栏时，根据分类ID筛选数据展示
function category(tid, pg, filter, extend) {
    var resultList = [];
    // 遍历所有数据，把符合当前点击分类(tid)的视频挑出来
    for (var i = 0; i < localData.length; i++) {
        if (localData[i].type_id == tid) {
            resultList.push(localData[i]);
        }
    }
    
    return JSON.stringify({
        page: 1,
        pagecount: 1,
        limit: resultList.length,
        total: resultList.length,
        list: resultList
    });
}

// detail 函数：用户点击某一部剧进入详情页时触发
function detail(id) {
    var item = null;
    // 根据传入的 vod_id，精确提取对应的视频所有详情信息
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

// play 函数：解析播放地址并直接丢给播放器
function play(flag, id, flags) {
    return JSON.stringify({
        parse: 0, // 0表示这是直链（如mp4/m3u8），不需要通过外部嗅探解析
        url: id
    });
}

// search 函数：搜索功能（如果要在NAS里搜片，可以保留这个逻辑）
function search(wd, quick) {
    var searchList = [];
    for (var i = 0; i < localData.length; i++) {
        // 如果片名包含搜索关键字，就加入结果
        if (localData[i].vod_name.indexOf(wd) !== -1) {
            searchList.push(localData[i]);
        }
    }
    return JSON.stringify({ list: searchList });
}

// 导出方法，供 TVBox / 影视仓内核调用
export default {
    init: init,
    home: home,
    category: category,
    detail: detail,
    play: play,
    search: search
};
