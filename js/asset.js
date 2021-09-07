/*
 * @Author: 黄灿民
 * @Date: 2021-02-21 22:52:02
 * @LastEditTime: 2021-02-22 21:42:37
 * @LastEditors: 黄灿民
 * @Description: 歌曲静态文件
 * @FilePath: \05.网易云音乐\js\asset.js
 */
const songList = [
    { name: "清明雨上", album: "Vae新歌+精选珍藏", url: "./video/清明雨上.mp3", pic: "img/许嵩_Vae新歌+精选珍藏合辑_4.jpg", singer: "许嵩", time: "03:40", songid: "qmys" },
    { name: "海阔天空", album: "海阔天空", url: "./video/海阔天空.mp3", pic: "img/BEYOND_海阔天空_4.jpg", singer: "BEYOND", time: "05:27", songid: "hktk" },
    { name: "老街", album: "小黄", url: "./video/老街.mp3", pic: "img/李荣浩_小黄_4.jpg", singer: "李荣浩", time: "05:19", songid: "ls" },
    { name: "一万次悲伤", album: "世界", url: "./video/一万次悲伤.mp3", pic: "img/逃跑计划.jpg", singer: "逃跑计划", time: "04:15", songid: "tpjh" }
];
const lrcs = [
    { "song": "qmys", "lyric": [{ "time": 0, "lineLyric": "" }, { "time": 26, "lineLyric": "窗透初晓 日照西桥 云自摇" }, { "time": 33, "lineLyric": "想你当年荷风微摆的衣角" }, { "time": 40, "lineLyric": "木雕流金 岁月涟漪 七年前封笔" }, { "time": 46, "lineLyric": "因为我今生挥毫只为你" }, { "time": 51, "lineLyric": "雨打湿了眼眶 年年倚井盼归堂" }, { "time": 59, "lineLyric": "最怕不觉泪已拆两行" }, { "time": 66, "lineLyric": "我在人间彷徨 寻不到你的天堂" }, { "time": 73, "lineLyric": "东瓶西镜放 恨不能遗忘" }, { "time": 80, "lineLyric": "又是清明雨上 折菊寄到你身旁" }, { "time": 85, "lineLyric": "把你最爱的歌来轻轻唱" }, { "time": 108, "lineLyric": "远方有琴 愀然空灵 声声催天雨" }, { "time": 113, "lineLyric": "涓涓心事说给自己听" }, { "time": 119, "lineLyric": "月影憧憧 烟火几重 烛花红" }, { "time": 125, "lineLyric": "红尘旧梦 梦断都成空" }, { "time": 132, "lineLyric": "雨打湿了眼眶 年年倚井盼归堂" }, { "time": 140, "lineLyric": "最怕不觉泪已拆两行" }, { "time": 145, "lineLyric": "我在人间彷徨 寻不到你的天堂" }, { "time": 152, "lineLyric": "东瓶西镜放 恨不能遗忘" }, { "time": 158, "lineLyric": "又是清明雨上 折菊寄到你身旁" }, { "time": 165, "lineLyric": "把你最爱的歌来轻轻唱" }, { "time": 172, "lineLyric": "我在人间彷徨 寻不到你的天堂" }, { "time": 178, "lineLyric": "东瓶西镜放 恨不能遗忘" }, { "time": 185, "lineLyric": "又是清明雨上 折菊寄到你身旁" }, { "time": 192, "lineLyric": "把你最爱的歌来轻轻唱" }, { "time": 200, "lineLyric": "" }, { "time": 204, "lineLyric": "" }, { "time": 1768, "lineLyric": "" }] },
    { "song": "hktk", "lyric": [{ "time": 0, "lineLyric": "" }, { "time": 0, "lineLyric": "词：黄家驹" }, { "time": 0, "lineLyric": "曲：黄家驹" }, { "time": 2, "lineLyric": "" }, { "time": 18, "lineLyric": "今天我 寒夜里看雪飘过" }, { "time": 25, "lineLyric": "怀着冷却了的心窝漂远方" }, { "time": 29, "lineLyric": "" }, { "time": 31, "lineLyric": "风雨里追赶 雾里分不清影踪" }, { "time": 36, "lineLyric": "" }, { "time": 37, "lineLyric": "天空海阔你与我" }, { "time": 40, "lineLyric": "可会变 (谁没在变)" }, { "time": 43, "lineLyric": "多少次迎着冷眼与嘲笑" }, { "time": 50, "lineLyric": "从没有放弃过心中的理想" }, { "time": 54, "lineLyric": "" }, { "time": 55, "lineLyric": "一刹那恍惚 若有所失的感觉" }, { "time": 62, "lineLyric": "不知不觉已变淡" }, { "time": 65, "lineLyric": "心里爱 (谁明白我)" }, { "time": 68, "lineLyric": "" }, { "time": 68, "lineLyric": "原谅我这一生不羁放纵爱自由" }, { "time": 74, "lineLyric": "" }, { "time": 75, "lineLyric": "也会怕有一天会跌倒" }, { "time": 80, "lineLyric": "" }, { "time": 82, "lineLyric": "背弃了理想 谁人都可以" }, { "time": 87, "lineLyric": "" }, { "time": 88, "lineLyric": "哪会怕有一天只你共我" }, { "time": 91, "lineLyric": "" }, { "time": 103, "lineLyric": "今天我 寒夜里看雪飘过" }, { "time": 108, "lineLyric": "" }, { "time": 109, "lineLyric": "怀着冷却了的心窝漂远方" }, { "time": 114, "lineLyric": "" }, { "time": 115, "lineLyric": "风雨里追赶 雾里分不清影踪" }, { "time": 120, "lineLyric": "" }, { "time": 121, "lineLyric": "天空海阔你与我" }, { "time": 124, "lineLyric": "可会变 (谁没在变)" }, { "time": 127, "lineLyric": "" }, { "time": 128, "lineLyric": "原谅我这一生不羁放纵爱自由" }, { "time": 133, "lineLyric": "" }, { "time": 135, "lineLyric": "也会怕有一天会跌倒" }, { "time": 140, "lineLyric": "" }, { "time": 141, "lineLyric": "背弃了理想 谁人都可以" }, { "time": 146, "lineLyric": "" }, { "time": 147, "lineLyric": "哪会怕有一天只你共我" }, { "time": 151, "lineLyric": "" }, { "time": 188, "lineLyric": "仍然自由自我 永远高唱我歌" }, { "time": 194, "lineLyric": "" }, { "time": 195, "lineLyric": "走遍千里" }, { "time": 199, "lineLyric": "" }, { "time": 200, "lineLyric": "原谅我这一生不羁放纵爱自由" }, { "time": 205, "lineLyric": "" }, { "time": 207, "lineLyric": "也会怕有一天会跌倒" }, { "time": 211, "lineLyric": "" }, { "time": 213, "lineLyric": "背弃了理想 谁人都可以" }, { "time": 218, "lineLyric": "" }, { "time": 219, "lineLyric": "哪会怕有一天只你共我" }, { "time": 224, "lineLyric": "" }, { "time": 225, "lineLyric": "背弃了理想 谁人都可以" }, { "time": 230, "lineLyric": "" }, { "time": 231, "lineLyric": "哪会怕有一天只你共我" }, { "time": 236, "lineLyric": "" }, { "time": 237, "lineLyric": "原谅我这一生不羁放纵爱自由" }, { "time": 242, "lineLyric": "" }, { "time": 244, "lineLyric": "也会怕有一天会跌倒" }, { "time": 248, "lineLyric": "" }, { "time": 250, "lineLyric": "背弃了理想 谁人都可以" }, { "time": 255, "lineLyric": "" }, { "time": 256, "lineLyric": "哪会怕有一天只你共我" }, { "time": "", "lineLyric": "" }] },
    { "song": "ls", "lyric": [{ "time": 0, "lineLyric": "" }, { "time": 16, "lineLyric": "一张褪色的照片" }, { "time": 20, "lineLyric": "好像带给我一点点怀念" }, { "time": 23, "lineLyric": "巷尾老爷爷卖的热汤面" }, { "time": 27, "lineLyric": "味道弥漫过旧旧的后院" }, { "time": 31, "lineLyric": "流浪猫睡熟在摇晃秋千" }, { "time": 35, "lineLyric": "夕阳照了一遍他眯着眼" }, { "time": 40, "lineLyric": "那张同桌寄的明信片" }, { "time": 44, "lineLyric": "安静的躺在课桌的里面" }, { "time": 49, "lineLyric": "快要过完的春天" }, { "time": 51, "lineLyric": "还有雕刻着图案的门帘" }, { "time": 55, "lineLyric": "窄窄的长长的过道两边" }, { "time": 59, "lineLyric": "老房子依然升起了炊烟" }, { "time": 63, "lineLyric": "刚刚下完了小雨的季节" }, { "time": 67, "lineLyric": "爸妈又一起走过的老街" }, { "time": 72, "lineLyric": "记不得哪年的哪一天" }, { "time": 75, "lineLyric": "很漫长又很短暂的岁月" }, { "time": 80, "lineLyric": "现在已经回不去" }, { "time": 84, "lineLyric": "早已流逝的光阴" }, { "time": 88, "lineLyric": "手里的那一张渐渐模糊不清的车票" }, { "time": 93, "lineLyric": "成了回忆的信号" }, { "time": 97, "lineLyric": "忘不掉的是什么我也不知道" }, { "time": 102, "lineLyric": "想不起当年模样" }, { "time": 106, "lineLyric": "看也看不到 去也去不了的地方" }, { "time": 114, "lineLyric": "也许那老街的腔调是属于我的忧伤" }, { "time": 122, "lineLyric": "嘴角那点微笑越来越勉强" }, { "time": 128, "lineLyric": "" }, { "time": 129, "lineLyric": "忘不掉的是什么我也不知道" }, { "time": 134, "lineLyric": "放不下熟悉片段" }, { "time": 138, "lineLyric": "回头望一眼 已经很多年的时间" }, { "time": 145, "lineLyric": "透过手指间看着天" }, { "time": 150, "lineLyric": "我又回到那老街" }, { "time": 154, "lineLyric": "靠在你们身边渐行渐远" }, { "time": 162, "lineLyric": "" }, { "time": 190, "lineLyric": "快要过完的春天" }, { "time": 193, "lineLyric": "还有雕刻着图案的门帘" }, { "time": 197, "lineLyric": "窄窄的长长的过道两边" }, { "time": 201, "lineLyric": "老房子依然升起了炊烟" }, { "time": 205, "lineLyric": "刚刚下完了小雨的季节" }, { "time": 209, "lineLyric": "爸妈又一起走过的老街" }, { "time": 214, "lineLyric": "记不得哪年的哪一天" }, { "time": 217, "lineLyric": "很漫长又很短暂的岁月" }, { "time": 222, "lineLyric": "现在已经回不去" }, { "time": 226, "lineLyric": "早已流逝的光阴" }, { "time": 230, "lineLyric": "手里的那一张渐渐模糊不清的车票" }, { "time": 235, "lineLyric": "成了回忆的信号" }, { "time": 239, "lineLyric": "忘不掉的是什么我也不知道" }, { "time": 244, "lineLyric": "想不起当年模样" }, { "time": 248, "lineLyric": "看也看不到 去也去不了的地方" }, { "time": 255, "lineLyric": "也许那老街的腔调是属于我的忧伤" }, { "time": 264, "lineLyric": "嘴角那点微笑越来越勉强" }, { "time": 271, "lineLyric": "忘不掉的是什么我也不知道" }, { "time": 276, "lineLyric": "放不下熟悉片段" }, { "time": 280, "lineLyric": "回头望一眼 已经很多年的时间" }, { "time": 287, "lineLyric": "透过手指间看着天" }, { "time": 292, "lineLyric": "我又回到那老街" }, { "time": 296, "lineLyric": "靠在你们身边渐行渐远" }] },
	{ "song": "tpjh", "lyric": [{ "time": 0, "lineLyric": "Oh honey" }, { "time": 2, "lineLyric": "我脑海里全都是你" }, { "time": 7, "lineLyric": "Oh 无法抗拒的心悸" }, { "time": 12, "lineLyric": "难以呼吸" }, { "time": 15, "lineLyric": "Tonight" }, { "time": 18, "lineLyric": "是否又要错过一个夜晚" }, { "time": 23, "lineLyric": "是否还要掩饰最后的期待" }, { "time": 28, "lineLyric": "Oh tonight" }, { "time": 30, "lineLyric": "一万次悲伤" }, { "time": 33, "lineLyric": "依然会有dream" }, { "time": 35, "lineLyric": "我一直在最温暖的地方等你" }, { "time": 40, "lineLyric": "似乎只能这样" }, { "time": 43, "lineLyric": "停留一个方向" }, { "time": 46, "lineLyric": "已不能改变" }, { "time": 51, "lineLyric": "每一颗眼泪是遗忘的光" }, { "time": 56, "lineLyric": "最昏暗的地方也变得明亮" }, { "time": 61, "lineLyric": "我奔涌的暖流" }, { "time": 64, "lineLyric": "寻找你的海洋" }, { "time": 67, "lineLyric": "我注定这样" }, { "time": 73, "lineLyric": "Oh honey" }, { "time": 77, "lineLyric": "你目光里充满忧郁" }, { "time": 81, "lineLyric": "就像经历一片废墟" }, { "time": 85, "lineLyric": "难以逃避" }, { "time": 89, "lineLyric": "Tonight" }, { "time": 91, "lineLyric": "是否还要错过这个夜晚" }, { "time": 96, "lineLyric": "是否还要熄灭所有的期待" }, { "time": 101, "lineLyric": "Oh tonight" },{ "time": 103, "lineLyric": "一万次悲伤" }, { "time": 106, "lineLyric": "依然会有dream" }, { "time": 108, "lineLyric": "我一直在最温暖的地方等你" }, { "time": 113, "lineLyric": "似乎只能这样" }, { "time": 116, "lineLyric": "停留一个方向" }, { "time": 119, "lineLyric": "已不能改变" }, { "time": 124, "lineLyric": "每一颗眼泪是遗忘的光" }, { "time": 129, "lineLyric": "最昏暗的地方也变得明亮" }, { "time": 135, "lineLyric": "我奔涌的暖流" }, { "time": 137, "lineLyric": "寻找你的海洋" }, { "time": 140, "lineLyric": "我注定这样" },{ "time": 186, "lineLyric": "一万次悲伤" }, { "time": 189, "lineLyric": "依然会有dream" }, { "time": 192, "lineLyric": "我一直在最温暖的地方等你" }, { "time": 197, "lineLyric": "似乎只能这样" }, { "time": 200, "lineLyric": "停留一个方向" }, { "time": 202, "lineLyric": "已不能改变" }, { "time": 208, "lineLyric": "每一颗眼泪是遗忘的光" }, { "time": 212, "lineLyric": "最昏暗的地方也变得明亮" }, { "time": 218, "lineLyric": "我奔涌的暖流" }, { "time": 220, "lineLyric": "寻找你的海洋" }, { "time": 224, "lineLyric": "我注定这样" },{ "time": 234, "lineLyric": "Oh honey" }, { "time": 237, "lineLyric": "我脑海里全都是你" }, { "time": 242, "lineLyric": "Oh 无法抗拒的心悸" }, { "time": 247, "lineLyric": "难以呼吸" }] },
]
