<?php
header('Content-Type: application/json; charset=utf-8');

// 1. 填入大佬 GitHub Raw 链接，并在前面加上 ghproxy 加速前缀
$online_url = 'https://ghproxy.net/https://raw.githubusercontent.com/qist/tvbox/refs/heads/master/fty.json'; 
$backup_file = 'backup.json'; // 缓存文件名

// 2. 模拟浏览器请求，并设置 3 秒超时限制，防止电视一直卡住等待
$opts = [
    "http" => [
        "method" => "GET",
        "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\r\n",
        "timeout" => 3 
    ]
];
$context = stream_context_create($opts);

// 尝试抓取在线配置（加 @ 隐藏警告）
$json_string = @file_get_contents($online_url, false, $context);

// 3. 核心机制：检查是否抓取成功，并更新/读取缓存
if ($json_string && json_decode($json_string) !== null) {
    // 抓取成功，而且数据是合法的 JSON，把这份最新数据保存到 NAS 本地留作备用
    file_put_contents($backup_file, $json_string);
} else {
    // 抓取失败（超时或没网），赶紧去看看有没有之前的缓存
    if (file_exists($backup_file)) {
        $json_string = file_get_contents($backup_file);
    } else {
        // 连缓存都没有（第一次运行就没网），强行生成一个只有本地站点的极简配置，保底不出错
        $json_string = '{"sites":[]}';
    }
}

// 4. 解析最终的数据包
$data = json_decode($json_string, true);

// 5. 准备你自己的 NAS 专属数据
$my_nas_site = array(
    "key" => "MyNAS",
    "name" => "🎬 本地",
    "type" => 0,
    "api" => "http://192.168.31.110/api/mylib-api.php", // 指向你旁边的 api.php 交警文件
    "searchable" => 0,
    "quickSearch" => 0,
    "filterable" => 0,
    "changeable" => 0
);

// 6. 强行把你的 NAS 站点插到第一位
if (isset($data['sites']) && is_array($data['sites'])) {
    array_unshift($data['sites'], $my_nas_site);
} else {
    $data['sites'] = array($my_nas_site);
}

// 7. 发送给电视
echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>
