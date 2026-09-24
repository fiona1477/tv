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
        "vod_play_url": "30. 数字方块们一同飞离数字岛，去往其他星球探索，开启新的未来更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP30.mp4#29. 跟着一起唱歌跳舞，学习数字的加法、乘法、负数和形状的变换更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP29.mp4#28. 10的乘法怎么计算呢，跟着数字10到太空，它将表演给你看更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP28.mp4#27. 正方形团队们通过不断打喷嚏的方式也能到达太空，太有趣了更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP27.mp4#26. 数字方块们团队合作建造更大的火箭飞向太空，看看太空有什么更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP26.mp4#25. 数字5来到摇滚之塔实现摇滚梦想，学习5倍乘法如何计算更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP25.mp4#24. 跟着数字4一起唱歌跳舞，学习数的4倍计算更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP24.mp4#23. 利用形状的变换来玩拼图游戏吧，锻炼空间逻辑更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP23.mp4#22. 一年一度的寻宝大赛开始了，梯形队VS正方形队，谁能获胜？更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP22.mp4#21. 数字32是滑雪高手，它能变出多少种数字组合一起表演花样滑冰更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP21.mp4#20. 顽皮的数字8将数字方块们带入了危险的三维世界当中更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP20.mp4#19. 跟着数字21探索世界，认识不同的数字们和形状更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP19.mp4#18. 数字3伪装变成其他的数，恰巧碰到真主来了，真的太有趣了更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP18.mp4#17. 数字3的马戏团表演不容错过，带你学习3的倍数如何计算更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP17.mp4#16. 根据数字和形状的不同，有不同的俱乐部，这些数适合什么俱乐部？更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP16.mp4#15. 疯狂的俄罗斯方块，小小的数字方块居然可以变换这么多的形状更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP15.mp4#14. 选秀大赛正在进行中，幕后却有一个绝密数字库在研究数字方块更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP14.mp4#13. 数的整除大赛，快来看看哪些数可以被哪些数给整除更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP13.mp4#12. 光线轨道速度大战，究竟谁会胜出？一起学习不同的乘法组合更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP12.mp4#11. 超级矩形变身大赛，不同的长和宽能变换成多少种矩形呢？更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP11.mp4#10. 奇数小队与偶数小队强强对决，谁也不甘于下风更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP10.mp4#09. 跟着数字2的舞蹈一起进去2的倍数世界，学习2倍乘法更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP09.mp4#08. 如果这个世界只有2没有1会发生什么？那所有的数字将都是偶数更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP08.mp4#07. 数字10跳高大赛，他们相加能得到数字10和数字几呢？你会算吗更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP07.mp4#06. 数字20一路闯关，了解自己可以由多少种不同的加法乘法组合而成更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP06.mp4#05. 让我们跟着数字方块认识乘法符号，唱响倍数1的乘法口诀歌谣更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP05.mp4#04. 快速默数大挑战，一起数一数有多少，看你能到第几关？更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP04.mp4#03. 见证数字6到10的闪耀舞台时刻，冠军究竟花落谁家呢？更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP03.mp4#02. 数字方块误入魔法颜色屋，只要写出数字，就能得到对应的颜色数量更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP02.mp4#01. 数字点登台模仿数字方块的表演秀，让我们一起回忆数字的加法更多免费资源加V15807102625.mp4$http://192.168.31.110/video/numberblocks/S5-en/S5EP01.mp4#30. 数字们聚在一起玩扔骰子游戏，他们又会学到什么有意思的知识呢？.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP30.mp4#29. 数字1、10、100聚在一起，总是有许多奇思妙想.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP29.mp4#28. 数字1通过弹簧数数，成为高塔，打开了礼盒.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP28.mp4#27. 每个数字在之前的大冒险中都有自己的作用，但这只是开始.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP27.mp4#26. 数字1遇到了一位新朋友，据他所说，他的出现离不开数字1.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP26.mp4#25. 数字21是天生的探险家，他带着数字方块们探索车站外面的世界.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP25.mp4#24. 数字50拿起金吉他在演唱会上玩起了计数游戏.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP24.mp4#23. 数字50转动控件，欢迎来到10倍数的加减法派对！.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP23.mp4#22. 正方形俱乐部收到数字21的来信，寻找比数字16更大的正方形.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP22.mp4#21. 欢迎来到马戏团，一起观看数字们的变身杂耍吧！.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP21.mp4#20. 数字18把稻草人撞毁了，意外解锁练习快速加法.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP20.mp4#19. 数字们来到卡丁车俱乐部，但是有些数字不能玩卡丁车，怎么回事呢.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP19.mp4#18. 数字2乘坐着飞船来分解其他数字，他们的计划能不能成功呢？.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP18.mp4#17. 数字方块来到分享之城，如何做才能收获宝藏？.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP17.mp4#16. 欢迎来到时光集市，这里有多种游玩设施，不过需要有代币才能玩哦.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP16.mp4#15. 数字10找到了一样喜欢跳舞的方块，他们愉快地在舞台上跳起了舞.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP15.mp4#14. 深夜前去博物馆寻找宝物，数字方块能否顺利通关呢？.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP14.mp4#13. 数字方块开小聚会，欢唱歌曲：你能数到20吗？.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP13.mp4#12. 数字方块在太空中遇见20行星，开启奇幻历险.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP12.mp4#11. 数字16-20他们长得都不一样，但是他们都有自己特殊的才艺.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP11.mp4#10. 欢迎参加正方形派对，他们每条边都有一样的方块，你能分辨吗？.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP10.mp4#09. 数字19无法组成矩形很伤心，但他意外发现可以变化奇形怪状.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP09.mp4#08. 惊险刺激的太空过山车，跟着数字方块们变换形态学习乘法.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP08.mp4#07. 速度超人数字18变换多种形态，学习数字的加法乘法.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP07.mp4#06. 艺术节开幕却没有艺术品，大画家数字17即兴创作拯救艺术节.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP06.mp4#05. 数字16闪亮登场，他是数字4的四倍，他可以变换各种形状.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP05.mp4#04. 通往宫殿的路困难重重，看数字方块们如何利用加减组合化险为夷.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP04.mp4#03. 数字方块的派对时间，学习十几的数的加减组合运算.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP03.mp4#02. 数字方块头顶的数字掉了，你能帮他们正确地对应起来吗？.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP02.mp4#01. 十五个数字的魔法表演时刻，惊喜不断，观众欢呼不停.mp4$http://192.168.31.110/video/numberblocks/S4-en/S4EP01.mp4#30. 数字15组成的阶梯小队，他们会做什么工作呢？$http://192.168.31.110/video/numberblocks/S3-en/S3EP30.mp4#29. 数字11-15都拥有自己的技能，这些技能有什么神奇魅力呢？$http://192.168.31.110/video/numberblocks/S3-en/S3EP29.mp4#28. 数字9踩着阶梯下来，但他一直都没有发现阶梯是数字15$http://192.168.31.110/video/numberblocks/S3-en/S3EP28.mp4#27. 数字14滑着彩虹滑板，梦想成为一个专业的滑板运动员$http://192.168.31.110/video/numberblocks/S3-en/S3EP27.mp4#26. 数字3和数字10踩到了一块香蕉皮，意外组成了数字13$http://192.168.31.110/video/numberblocks/S3-en/S3EP26.mp4#25. 方块星球的电池快用完了，数字12需要改变电池，拯救数字岛$http://192.168.31.110/video/numberblocks/S3-en/S3EP25.mp4#24. 长方形方块们进入光线峡谷，他们得怎么做才能全部通关呢？$http://192.168.31.110/video/numberblocks/S3-en/S3EP24.mp4#23. 长方形方块们发现他们能变换成不同的样子，但是数字4好像不行$http://192.168.31.110/video/numberblocks/S3-en/S3EP23.mp4#22. 数字2和数字10见面啦，他们合并成了数字12，开启了数组游戏$http://192.168.31.110/video/numberblocks/S3-en/S3EP22.mp4#21. 数字11的脚踩上足球，于是一场趣味的足球赛开始啦！$http://192.168.31.110/video/numberblocks/S3-en/S3EP21.mp4#20. 数字9的东西全都消失了，侦探数字1能帮他找出谁是小偷吗？$http://192.168.31.110/video/numberblocks/S3-en/S3EP20.mp4#19. 魔镜啊魔镜，我有多少数字方块朋友呢？$http://192.168.31.110/video/numberblocks/S3-en/S3EP19.mp4#18. 数字们在登山，如果幸运的话，可以遇到传说中的“大肚子”$http://192.168.31.110/video/numberblocks/S3-en/S3EP18.mp4#17. 用数学规律解锁路上重重关卡，带你学习数字认识颜色$http://192.168.31.110/video/numberblocks/S3-en/S3EP17.mp4#16. 欢迎来到平面的世界，带你认识三角形四边形很多图形$http://192.168.31.110/video/numberblocks/S3-en/S3EP16.mp4#15. 数字10变身超级火箭，带领朋友们一起变身$http://192.168.31.110/video/numberblocks/S3-en/S3EP15.mp4#14. 数字8落入坏蛋数字2手里，他的朋友们团结一起营救他$http://192.168.31.110/video/numberblocks/S3-en/S3EP14.mp4#13. 数字5和他的朋友们被邀请到双掌舞池，可以认识很多朋友$http://192.168.31.110/video/numberblocks/S3-en/S3EP13.mp4#12. 数字方块赛车大赛，最终谁能捧起奖杯$http://192.168.31.110/video/numberblocks/S3-en/S3EP12.mp4#11. 数字们想要变成比他们更高的数字，需要怎么办？$http://192.168.31.110/video/numberblocks/S3-en/S3EP11.mp4#10. 数字9打嗝不断没法拍照，数字方块们各想奇招帮助他$http://192.168.31.110/video/numberblocks/S3-en/S3EP10.mp4#09. 小的方块躲在大的后面就不见了，一起来分辨谁大谁小$http://192.168.31.110/video/numberblocks/S3-en/S3EP09.mp4#08. 数字方块为了帮助外星人回家，建造通往太空的塔楼$http://192.168.31.110/video/numberblocks/S3-en/S3EP08.mp4#07. 数字点和数字方块一起玩耍，数一数他们在做的事情.$http://192.168.31.110/video/numberblocks/S3-en/S3EP07.mp4#06. 数字10给数字6789讲睡前故事，最后大家终于进入美梦$http://192.168.31.110/video/numberblocks/S3-en/S3EP06.mp4#05. 什么都没有用什么来表示呢？欢迎来到0的世界！$http://192.168.31.110/video/numberblocks/S3-en/S3EP05.mp4#04. 一起参观数字3的水果工厂，神奇机器能够自动将水果分成两组$http://192.168.31.110/video/numberblocks/S3-en/S3EP04.mp4#03. 前方有障碍，只有数字5才能把列车停下来，如何组合变成数字5$http://192.168.31.110/video/numberblocks/S3-en/S3EP03.mp4#02. 怪物吉拉喜欢和大的数字一起玩，如何分辨数字大小呢？$http://192.168.31.110/video/numberblocks/S3-en/S3EP02.mp4#01. 数字方块的睡前故事，让我们来回顾数字1到5的辨认和加减吧$http://192.168.31.110/video/numberblocks/S3-en/S3EP01.mp4#15. 唱儿歌学习十以内数字的加减组合$http://192.168.31.110/video/numberblocks/S2-en/S2EP15.mp4#14. 数字方块闯关城堡迷宫，通力合作实现数字加减，最终闯关成功$http://192.168.31.110/video/numberblocks/S2-en/S2EP14.mp4#13. 10和9的球赛比拼学习减法，有更多的2才会胜利，会是谁赢？$http://192.168.31.110/video/numberblocks/S2-en/S2EP13.mp4#12. 毛毛怪挠痒痒实在受不了，看数字方块如何加减组合解决问题$http://192.168.31.110/video/numberblocks/S2-en/S2EP12.mp4#11. 数字方块运动会激烈球赛比拼，学习数数和数字的变换$http://192.168.31.110/video/numberblocks/S2-en/S2EP11.mp4#10. 数字9变身3个3，帮助其他的数字方块解决很多麻烦$http://192.168.31.110/video/numberblocks/S2-en/S2EP10.mp4#09. 数字方块潜入地下城堡取金苹果，不幸城堡塌陷，他们能成功逃脱吗$http://192.168.31.110/video/numberblocks/S2-en/S2EP09.mp4#08. 羊圈的羊跑了，数字6变身多组数字找回跑掉的绵羊$http://192.168.31.110/video/numberblocks/S2-en/S2EP08.mp4#07. 数字方块组成火箭登陆月球！帮助外星人成功回家$http://192.168.31.110/video/numberblocks/S2-en/S2EP07.mp4#06. 数字不断地加1就会越来越大，它可以让你加成任何数$http://192.168.31.110/video/numberblocks/S2-en/S2EP06.mp4#05. 比数字9大1的是谁？跟着数字10认识两位数，十个一就是一个十$http://192.168.31.110/video/numberblocks/S2-en/S2EP05.mp4#04. 方块9是3乘3，方块4是2乘2，他们都是正方形家族的好伙伴$http://192.168.31.110/video/numberblocks/S2-en/S2EP04.mp4#03. 数字8能飞檐走壁，究竟有什么魔力，跟着章鱼方块来探秘$http://192.168.31.110/video/numberblocks/S2-en/S2EP03.mp4#02. 下雨打断了超多美食的野餐，但彩虹色的数字7的到来给了我们好运$http://192.168.31.110/video/numberblocks/S2-en/S2EP02.mp4#01. 数字6来了，她带着超多好玩的游戏来了，教你投骰子学数学$http://192.168.31.110/video/numberblocks/S2-en/S2EP01.mp4#15. 数字5是捉迷藏高手，她只需要坐着就能轻松找到其他的数字伙伴$http://192.168.31.110/video/numberblocks/S1/en/S1EP15.mp4#14. 又大又圆的魔法洞口，悄无声息地把数字方块吸走，学习数字加减$http://192.168.31.110/video/numberblocks/S1/en/S1EP14.mp4#13. 数字4变成数字2双胞胎？他们可是麻烦制造者$http://192.168.31.110/video/numberblocks/S1/en/S1EP13.mp4#12. 唱儿歌学习数字和认识数字的拆分组合$http://192.168.31.110/video/numberblocks/S1/en/S1EP12.mp4#11. 花样形状乐园趣味无穷，学习数字的组合$http://192.168.31.110/video/numberblocks/S1/en/S1EP11.mp4#10. 小心饼干怪兽出没，数一数还剩下多少饼干$http://192.168.31.110/video/numberblocks/S1/en/S1EP10.mp4#09. 数字方块们出发去冒险，你能帮他们排对数字顺序吗$http://192.168.31.110/video/numberblocks/S1/en/S1EP09.mp4#08. 正方形大坏蛋轻松吹一吹，摧毁三只小猪的房子$http://192.168.31.110/video/numberblocks/S1/en/S1EP08.mp4#07. 数字方块的超级派对，数字5闪亮登场$http://192.168.31.110/video/numberblocks/S1/en/S1EP07.mp4#06. 超级变变变超多乐趣，欢迎来到数字4的正方形世界$http://192.168.31.110/video/numberblocks/S1/en/S1EP06.mp4#05. 用3个苹果也能表演魔术，快来跟聪明数字3一起学吧$http://192.168.31.110/video/numberblocks/S1/en/S1EP05.mp4#04. 欢迎加入数字3的演唱会，大家一起唱着歌学数学$http://192.168.31.110/video/numberblocks/S1/en/S1EP04.mp4#03. 数字1帮数字2找回了鞋子，他们唱歌跳舞，互帮互助成为好朋友$http://192.168.31.110/video/numberblocks/S1/en/S1EP03.mp4#02. 魔法镜子变出了两个数字1，它们合在一起会发生什么有趣的事？$http://192.168.31.110/video/numberblocks/S1/en/S1EP02.mp4#01. 跟着数字1认识世界，小小的身体有大大的能量$http://192.168.31.110/video/numberblocks/S1/en/S1EP01.mp4#(中)第24集 一起玩$http://192.168.31.110/video/numberblocks/S1/zh/S1EP24-zh.mp4#(中)第23集 5和她的朋友们$http://192.168.31.110/video/numberblocks/S1/zh/S1EP23-zh.mp4#(中)第22集 3和4之歌$http://192.168.31.110/video/numberblocks/S1/zh/S1EP22-zh.mp4#(中)第21集 1和2之歌$http://192.168.31.110/video/numberblocks/S1/zh/S1EP21-zh.mp4#(中)第20集 零$http://192.168.31.110/video/numberblocks/S1/zh/S1EP20-zh.mp4#(中)第19集 水果沙拉$http://192.168.31.110/video/numberblocks/S1/zh/S1EP19-zh.mp4#(中)第18集 数字积木快车$http://192.168.31.110/video/numberblocks/S1/zh/S1EP18-zh.mp4#(中)第17集 方块怪兽$http://192.168.31.110/video/numberblocks/S1/zh/S1EP17-zh.mp4#(中)第16集 从前$http://192.168.31.110/video/numberblocks/S1/zh/S1EP16-zh.mp4#(中)第15集 捉迷藏$http://192.168.31.110/video/numberblocks/S1/zh/S1EP15-zh.mp4#(中)第14集 洞$http://192.168.31.110/video/numberblocks/S1/zh/S1EP14-zh.mp4#(中)第13集 可怕的双胞胎$http://192.168.31.110/video/numberblocks/S1/zh/S1EP13-zh.mp4#(中)第12集 完整的我$http://192.168.31.110/video/numberblocks/S1/zh/S1EP12-zh.mp4#(中)第11集 弹跳乐园$http://192.168.31.110/video/numberblocks/S1/zh/S1EP11-zh.mp4#(中)第10集 如何数数$http://192.168.31.110/video/numberblocks/S1/zh/S1EP10-zh.mp4#(中)第9集 出发吧$http://192.168.31.110/video/numberblocks/S1/zh/S1EP09-zh.mp4#(中)第8集 三只小猪$http://192.168.31.110/video/numberblocks/S1/zh/S1EP08-zh.mp4#(中)第7集 五$http://192.168.31.110/video/numberblocks/S1/zh/S1EP07-zh.mp4#(中)第6集 四$http://192.168.31.110/video/numberblocks/S1/zh/S1EP06-zh.mp4#(中)第5集 一二三$http://192.168.31.110/video/numberblocks/S1/zh/S1EP05-zh.mp4#(中)第4集 三$http://192.168.31.110/video/numberblocks/S1/zh/S1EP04-zh.mp4#(中)第3集 二$http://192.168.31.110/video/numberblocks/S1/zh/S1EP03-zh.mp4#(中)第2集 又一个$http://192.168.31.110/video/numberblocks/S1/zh/S1EP02-zh.mp4#(中)第1集 一$http://192.168.31.110/video/numberblocks/S1/zh/S1EP01-zh.mp4"
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
