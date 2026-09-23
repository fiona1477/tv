<?php
header("Content-type: text/xml; charset=utf-8");

// 完善后的数据源，为每部剧单独定义了 year, area, tid, type, note 等
$videos = [
    1 => [
        'id'       => 1,
        'tid'      => 1,             // 分类ID，与下面的 <ty id="1"> 对应
        'type'     => '纪录片',       // 分类名称
        'name'     => '啊！设计',
        'pic'      => 'http://192.168.31.110/img/design-ah.jpg',
        'lang'     => '国语',
        'area'     => '日本/台湾',
        'year'     => '2011',
        'state'    => '已完结',         // 连载状态
        'note'     => '共20集',         // 左上角/右上角角标提示
        'pic'      => 'http://192.168.31.110/img/design-ah.jpg',
        'actor'    => '佐藤卓/旁白',
        'director' => '中村勇吾',
        'des'      => '日本NHK出品！这是一档非常经典的儿童设计启蒙节目。通过观察日常生活中常见的物品，启发孩子们从设计的角度去思考问题，超级适合陪孩子一起看！',
        // 播放地址格式：集数名称$播放链接#集数名称2$播放链接2
        'play_url' => '第20集$http://192.168.31.110/video/design-ah-tw/EP20.mp4#第19集$http://192.168.31.110/video/design-ah-tw/EP19.mp4#第18集$http://192.168.31.110/video/design-ah-tw/EP18.mp4#第17集$http://192.168.31.110/video/design-ah-tw/EP17.mp4#第16集$http://192.168.31.110/video/design-ah-tw/EP16.mp4#第15集$http://192.168.31.110/video/design-ah-tw/EP15.mp4#第14集$http://192.168.31.110/video/design-ah-tw/EP14.mp4#第13集$http://192.168.31.110/video/design-ah-tw/EP13.mp4#第12集$http://192.168.31.110/video/design-ah-tw/EP12.mp4#第11集$http://192.168.31.110/video/design-ah-tw/EP11.mp4#第10集$http://192.168.31.110/video/design-ah-tw/EP10.mp4#第09集$http://192.168.31.110/video/design-ah-tw/EP09.mp4#第08集$http://192.168.31.110/video/design-ah-tw/EP08.mp4#第07集$http://192.168.31.110/video/design-ah-tw/EP07.mp4#第06集$http://192.168.31.110/video/design-ah-tw/EP06.mp4#第05集$http://192.168.31.110/video/design-ah-tw/EP05.mp4#第04集$http://192.168.31.110/video/design-ah-tw/EP04.mp4#第03集$http://192.168.31.110/video/design-ah-tw/EP03.mp4#第02集$http://192.168.31.110/video/design-ah-tw/EP02.mp4#第01集$http://192.168.31.110/video/design-ah-tw/EP01.mp4'
    ],
    2 => [
        'id'       => 2,
        'tid'      => 2,             // 另一类的分类ID
        'type'     => '动画片',       // 另一类的分类名称
        'name'     => '像乌鸦一样思考',
        'pic'      => 'http://192.168.31.110/video/ThinkLikeAcrow/thinklikeacrow.jpg',
        'lang'     => '日语',
        'area'     => '日本/儿童',
        'year'     => '2013',
        'state'    => '20集全',
        'note'     => '完结',
        'actor'    => '佐藤卓/旁白',
        'director' => '中村勇吾',
        'des'      => '日本NHK出品！这是一档非常经典的儿童设计启蒙节目。通过观察日常生活中常见的物品，启发孩子们从设计的角度去思考问题，超级适合陪孩子一起看！',
        // 播放地址格式：集数名称$播放链接#集数名称2$播放链接2
        'play_url' => '第20集$http://192.168.31.110/video/design-ah-tw/EP20.mp4#第19集$http://192.168.31.110/video/design-ah-tw/EP19.mp4#第18集$http://192.168.31.110/video/design-ah-tw/EP18.mp4#第17集$http://192.168.31.110/video/design-ah-tw/EP17.mp4#第16集$http://192.168.31.110/video/design-ah-tw/EP16.mp4#第15集$http://192.168.31.110/video/design-ah-tw/EP15.mp4#第14集$http://192.168.31.110/video/design-ah-tw/EP14.mp4#第13集$http://192.168.31.110/video/design-ah-tw/EP13.mp4#第12集$http://192.168.31.110/video/design-ah-tw/EP12.mp4#第11集$http://192.168.31.110/video/design-ah-tw/EP11.mp4#第10集$http://192.168.31.110/video/design-ah-tw/EP10.mp4#第09集$http://192.168.31.110/video/design-ah-tw/EP09.mp4#第08集$http://192.168.31.110/video/design-ah-tw/EP08.mp4#第07集$http://192.168.31.110/video/design-ah-tw/EP07.mp4#第06集$http://192.168.31.110/video/design-ah-tw/EP06.mp4#第05集$http://192.168.31.110/video/design-ah-tw/EP05.mp4#第04集$http://192.168.31.110/video/design-ah-tw/EP04.mp4#第03集$http://192.168.31.110/video/design-ah-tw/EP03.mp4#第02集$http://192.168.31.110/video/design-ah-tw/EP02.mp4#第01集$http://192.168.31.110/video/design-ah-tw/EP01.mp4'
    ]
];

// 3. 接收 TVBox 发来的查询参数
$ac = isset($_GET['ac']) ? $_GET['ac'] : '';
$ids = isset($_GET['ids']) ? $_GET['ids'] : '';

$result_videos = [];

// 4. 判断请求类型并处理数据
if ($ac == 'detail' && !empty($ids)) {
    // 【详情请求】：TVBox 传了 ids 参数（例如 ?ac=detail&ids=2）
    // 我们只把该 ID 对应的数据拿出来
    $id_array = explode(',', $ids); // TVBox有时会传多个id，所以用逗号分割
    foreach ($id_array as $vid) {
        if (isset($videos[$vid])) {
            $result_videos[] = $videos[$vid];
        }
    }
} else {
    // 【列表请求】：例如 ?ac=videolist 或刚打开未传参数时
    // 我们把所有的视频列表都返回回去给 TVBox 展示封面
    $result_videos = array_values($videos);
}

// 5. 拼接输出标准的 XML 结构
echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<rss version="5.0">' . "\n";
echo '  <class>' . "\n";
// 这里定义分类列表，供 TVBox 顶部导航栏筛选使用
echo '    <ty id="1">纪录片</ty>' . "\n"; 
echo '    <ty id="2">动画</ty>' . "\n"; 
echo '  </class>' . "\n";
echo '  <list page="1" pagecount="1" pagesize="'.count($result_videos).'" recordcount="'.count($result_videos).'">' . "\n";

foreach ($result_videos as $v) {
    echo '    <video>' . "\n";
    echo '      <last>' . date('Y-m-d H:i:s') . '</last>' . "\n";
    echo '      <id>' . $v['id'] . '</id>' . "\n";
    // 以下信息全部改为从数组中动态获取
    echo '      <tid>' . $v['tid'] . '</tid>' . "\n"; 
    echo '      <name><![CDATA[' . $v['name'] . ']]></name>' . "\n";
    echo '      <type>' . $v['type'] . '</type>' . "\n";
    echo '      <pic><![CDATA[' . $v['pic'] . ']]></pic>' . "\n";
    echo '      <lang><![CDATA[' . $v['lang'] . ']]></lang>' . "\n";
    echo '      <area><![CDATA[' . $v['area'] . ']]></area>' . "\n";
    echo '      <year>' . $v['year'] . '</year>' . "\n";
    echo '      <state><![CDATA[' . $v['state'] . ']]></state>' . "\n";
    echo '      <note><![CDATA[' . $v['note'] . ']]></note>' . "\n";
    echo '      <actor><![CDATA[' . $v['actor'] . ']]></actor>' . "\n";
    echo '      <director><![CDATA[' . $v['director'] . ']]></director>' . "\n";
    echo '      <des><![CDATA[' . $v['des'] . ']]></des>' . "\n";
    echo '      <dl>' . "\n";
    echo '        <dd flag="kflocal"><![CDATA[' . $v['play_url'] . ']]></dd>' . "\n";
    echo '      </dl>' . "\n";
    echo '    </video>' . "\n";
}

echo '  </list>' . "\n";
echo '</rss>';
?>
