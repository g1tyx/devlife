/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    '! Reset game': '! 重置游戏',
    'A wild pixel appeared!': '一个野生像素出现了!',
    'Achievements': '成就',
    'Achievements unlocked': '成就解锁',
    'Backend Web developer (+8¢/min': '后端Web开发人员（+8¢/分钟',
    'Billy the kid': '比利小子',
    'Buy a ticket (1¢': '购买彩票 (1¢',
    'Buy coffee (5¢': '购买咖啡 (5¢',
    'Buy energy drink (15¢': '购买能量饮料(15¢',
    'Caffeine addict': '咖啡因上瘾',
    'Command prompt addict': '命令提示符成瘾者',
    'Company name change (5.000¢': '公司名称变更(5000¢',
    'Computer Model': '计算机模型',
    'Computer Version': '计算机版本',
    'dev II': '开发 II',
    'Developed by naoxink': '作者 naoxink',
    'devlife intranet': '开发人生内部网',
    'devlife Intranet': '开发人生内部网',
    'Energy Partner (20.000¢': '能源合伙人(20.000¢',
    'Fully upgraded': '完全升级',
    'Gambler': '赌徒',
    'Holy sh--': '神圣的sh——',
    'Improvements': '提升',
    'Infinite coffee contract (20.000¢': '无限咖啡合约(20.000¢',
    'Issue tracker': '问题跟踪器',
    'Job search status': '求职状态',
    'Jobs': '工作',
    'Just for me': '只为我',
    'Key spammer': '垃圾邮件发送者',
    'Load (Beta': '加载(测试版',
    'Locked': '未解锁',
    'Lottery': '彩票',
    'Lottery addict': '买彩票上瘾',
    'Marketing campaign (2.000¢': '营销活动(2.000¢',
    'Menu': '菜单',
    'Millionaire': '百万富翁',
    'Money': '钱',
    'Money per pulse': '每个脉搏的钱',
    'Money spent': '花掉金额',
    'Money won': '中奖金额',
    'Nope, absolutelly nothing': '不，绝对没有',
    'Not searching': '没有搜索',
    'Projects': '项目',
    'Projects completed': '完成的项目',
    'Pulse speed': '脉搏速度',
    'Quit job': '辞职',
    'Save (Beta': '保存（测试版',
    'Serious gambler': '严肃的赌徒',
    'Shine bright like a diamond': '像钻石一样闪耀',
    'Shop': '商店',
    'Showcase': '陈列柜',
    'Start job search': '开始求职',
    'Start project': '开始项目',
    'Starter': '起动机',
    'Stats': '统计',
    'Take job oportunity': '抓住工作机会',
    'Take quick project': '采取快速项目',
    'Taurine addict': '牛磺酸瘾',
    'The lucky guy': '幸运的家伙',
    'The new one': '新的那一个',
    'The pro': '专业人士',
    'Upgrade computer (114¢) (Development time': '升级计算机(114美分)(开发时间',
    'v': 'v',
    'Welcome to devlife. You can now become the richest rich in the world.': '欢迎来到开发人生。 您现在可以成为世界上最富有的富人。',
    'Wiki': 'Wiki',
    'Wild pixels poped': '弹出狂野像素',
    'Win percent': '胜率',
    'Win something': '获得的东西',
    'With 4 hands': '用4只手',
    'Your showcase is still empty': '你的陈列柜还是空的',
    '"I\'m a rich b**ch" diamond plate (100 Million ¢': '“我是一个富有的b**ch”钻石盘子(100 Million ¢',
    'Achievement unlocked!': '成就解锁了!',
    'Cursed Pixel': '诅咒像素',
    'Digital Security manager (+9¢/min': '数字安全经理(+9¢/分钟',
    'Everyone has the right to be millionaire. Win a 1.000.000¢ prize!': '每个人都有权成为百万富翁。赢得1.000.000¢ 的奖金!',
    'Glorius pixel': '荣耀像素',
    'Have a coffee and temporarily increase your money rate': '喝杯咖啡，暂时提高你的利率',
    'Hidden': '隐藏',
    'lose': '输了',
    'Lucky Pixel': '幸运像素',
    'Money +3% ¢/pulse': '钱+ 3%¢/脉搏',
    'Number of jobs you have. Maximum 4 jobs.': '你有多少份工作。最大4工作。',
    'Passive Pixel': '被动像素',
    'Project': '项目',
    'Projects completed. You earn money by completing projects': '项目已完成。 你通过完成项目赚钱',
    'Quick Project': '快速项目',
    'Rage pixel': '愤怒像素',
    'Rushy Pixel': '蔺制的像素',
    'Searching': '搜索中',
    'Speed of making money during projects': '在项目期间赚钱的速度',
    'This is the computer model you have at the moment': '这是你现在用的电脑模型',
    'Unlocked': '解锁',
    'Your computer version. The higher the better.': '你的电脑版本。越高越好。',
    'Close': '关闭',
    'Achieve the minimum pulse speed': '达到最小脉搏速度',
    'Buy 200 coffees': '购买200咖啡',
    'Buy 200 energy drinks': '购买200瓶能量饮料',
    'Buy the "Dev-550sx PRO"': '购买“Dev-550sx PRO”',
    'Buy the "Dev-MX300"': '购买“Dev-MX300”',
    'Buy the "I\'m a rich b**ch" diamond plate': '购买“我是一个富有的b**ch”钻石盘',
    'Buy your first ticket for the lottery': '买你的第一张彩票',
    'Click 1 wild pixel': '点击1个野生像素',
    'Complete your first project': '完成你的第一个项目',
    'Drop all your jobs': '丢掉你所有的工作',
    'Energy Drink time left': '能量饮料时间还剩',
    'Get the ultimate dev-mainframe': '获得最终的开发主机',
    'Have an energy drink to boost your pulse speed': '喝能量饮料来加速脉搏',
    'Just a Passive Pixel can do it': '只有一个被动像素可以做到这一点',
    'Make 1.000¢ with the command prompt': '使用命令提示符得到1.000¢',
    'Press 200 keys in the command prompt': '在命令提示符中按200个键',
    'Pulse speed +': '脉搏速度+',
    'Raise your money up to 1 Million ¢': '把你的钱增加到1 Million ¢',
    'Unlock a parallel project': '解锁并行项目',
    'Upgrade your computer to version': '将您的计算机升级到版本',
    'Win a partial in the lottery': '中了部分彩票',
    'Win the lottery': '赢得彩票',
    'You have to hack this achievement': '你要破解这一成就',
    'Increased your proyect profits by 200% for 15 seconds!': '增加你的预期利润200%，持续15秒!',
    'Buy Coffee (5¢': '购买咖啡 (5¢',
    'Buy Energy Drink (15¢': '购买能量饮料 (15¢',
    'Success!': '成功!',
    'Your game is saved in this browser!': '您的游戏保存在这个浏览器!',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^Completed (.+)\% \((.+)\/$/, '已完成 $1\% \($2\/'],
    [/^Coffee time left:  (.+)$/, '咖啡时间剩余：$1'],
    [/^Spend (.+) in the lottery$/, '花$1买彩票'],
    [/^Energy Drink time left:  (.+)$/, '能量饮料时间还剩：$1'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);
