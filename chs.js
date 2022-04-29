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
    'Frontend Web developer (+8¢/min': '前端Web开发人员(+ 8¢/分钟',
    "per pulse": "每脉冲",
    "spent": "花费",
    "won": "获胜",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
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
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Completed ": "已完成 ",
    "Money ": "金钱 ",
    "Cursed Pixel:": "被诅咒的像素：",
    "Glorius pixel:": "光辉像素：",
    "Lucky Pixel:": "幸运像素：",
    "Passive Pixel:": "被动像素：",
    "Rage pixel:": "愤怒像素：",
    "Rushy Pixel:": "匆忙像素：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "/pulse": "/脉冲",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Upgrade computer (.+) \(Development time:  (.+)$/, '升级电脑$1（开发时间：$2'],
    [/^Secretary (.+)min$/, '秘书 $1分钟'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Completed (.+)\% \((.+)\/$/, '已完成 $1\% \($2\/'],
    [/^Coffee time left:  (.+)$/, '咖啡时间剩余：$1'],
    [/^Spend (.+) in the lottery$/, '花$1买彩票'],
    [/^Energy Drink time left:  (.+)$/, '能量饮料时间还剩：$1'],
    [/^workers: (\d+)\/$/, '工人：$1\/']
]);