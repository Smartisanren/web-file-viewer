// 配置PDF.js
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.min.js';
}

// 文件数据结构
const fileData = {
    // 根目录PDF文件
    rootPdfs: [
        {
            name: "Autopoiesis and Cognition The Realization of the Living",
            path: "../Autopoiesis and Cognition The Realization of the Living (Humberto R. Maturana etc.) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "自创生理论文献",
            path: "../自创生理论文献.pdf",
            type: "pdf",
            category: "books"
        }
    ],
    
    // Book文件夹中的PDF文件
    books: [
        {
            name: "一万小时天才理论（经典版）",
            path: "../Book/一万小时天才理论（经典版） (丹尼尔·科伊尔 (Daniel Coyle)) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "世界文明史 宗教改革 下",
            path: "../Book/世界文明史 宗教改革 下 (（美）威尔·杜兰特著) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "世界文明史 宗教改革上",
            path: "../Book/世界文明史 宗教改革上 (威尔杜兰特) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "丝绸之路大历史：当古代中国遭遇世界",
            path: "../Book/丝绸之路大历史：当古代中国遭遇世界【文字版】 (郭建龙) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "中国的宗教：儒教与道教",
            path: "../Book/中国的宗教：儒教与道教 (马克斯·韦伯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "为何越爱越孤独（升级版）",
            path: "../Book/为何越爱越孤独（升级版） (武志红) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "人性中的善与恶",
            path: "../Book/人性中的善与恶 (阿比盖尔·马什（ abigaiermashi）) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "人性中的善良天使",
            path: "../Book/人性中的善良天使 ([美] 斯蒂芬·平克 Steven Pinker) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "人性悖论：人类进化中的美德与暴力",
            path: "../Book/人性悖论：人类进化中的美德与暴力（哈佛大学生物人类学家理查德·兰厄姆研究人类进化的一部巨著。虽然世界越来越和平，个体更加友善，但人类... (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "人性论：全两册",
            path: "../Book/人性论：全两册 (休谟) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "传习录",
            path: "../Book/传习录 (（明）王阳明) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "你会杀死那个胖子吗？一个关于对与错的哲学谜题",
            path: "../Book/你会杀死那个胖子吗？一个关于对与错的哲学谜题 ( etc.) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "光荣与梦想-1932-1972年美国实录",
            path: "../Book/光荣与梦想-1932-1972年美国实录 (威廉·曼彻斯特) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "动机与人格",
            path: "../Book/动机与人格 (亚伯拉罕·马斯洛) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "印加帝国的末日（甲骨文丛书）",
            path: "../Book/印加帝国的末日（甲骨文丛书） (金·麦夸里 (Kim MacQuarrie) , 冯璇 译) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "原则",
            path: "../Book/原则 (Ray Dalio) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "只需倾听：与所有人都能沟通的秘密",
            path: "../Book/只需倾听：与所有人都能沟通的秘密 ((美)马克·郭士顿) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "好人为什么会作恶",
            path: "../Book/好人为什么会作恶 (托马斯·布拉斯(Thomas Blass)) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "实践理性批判",
            path: "../Book/实践理性批判 (康德,邓晓芒) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "帝国",
            path: "../Book/帝国 (Niall Ferguson, 尼尔·弗格森, 雨珂) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "康德哲学讲演录",
            path: "../Book/康德哲学讲演录 (邓晓芒著) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "当良知沉睡：辨认身边的反社会人格者",
            path: "../Book/当良知沉睡：辨认身边的反社会人格者 (【美】玛莎·斯托特) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "思维的囚徒：活出生命的意义7原则",
            path: "../Book/思维的囚徒：活出生命的意义7原则 (亚历克斯·佩塔克斯, 伊莱恩·丹顿) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "恐惧：推动全球运转的隐藏力量",
            path: "../Book/恐惧：推动全球运转的隐藏力量 = How Fear Works ([英] 弗兰克•菲雷迪 (Frank Furedi)；吴万伟 译) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "新教伦理与资本主义精神",
            path: "../Book/新教伦理与资本主义精神 (Max Weber 马克斯·韦伯 康乐(译) 简惠美(译)) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "有限管教：如何培养独立、自信、上进的孩子",
            path: "../Book/有限管教：如何培养独立、自信、上进的孩子（日本精英父母广泛认同的育儿法！采铜、憨爸、常青藤爸爸盛赞推荐！！） (三谷宏治) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "朝贡贸易与仗剑经商 全球经济视角下的明清外贸政策",
            path: "../Book/朝贡贸易与仗剑经商 全球经济视角下的明清外贸政策 (骆昭东著, Luo Zhaodong zhu, 骆昭东, author, 骆, 昭东) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "正义之心",
            path: "../Book/正义之心 (〔美〕乔纳森·海特著；舒明月，胡晓旭译) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "每当我找到生命的意义，它就又变了：珍藏版",
            path: "../Book/每当我找到生命的意义，它就又变了：珍藏版 (丹尼尔·克莱恩著,李鹏程) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "洞察人性",
            path: "../Book/洞察人性 = Understanding Human Nature The Psychology of Personality ([奥地利] 阿尔弗雷德 · 阿德勒 (Alfred Adler) 著  张晓晨 译) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "活出生命的意义",
            path: "../Book/活出生命的意义 (维克多·E·弗兰克尔 [维克多·E·弗兰克尔]) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "疯狂人体进化史",
            path: "../Book/疯狂人体进化史 (史钧 著) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "真实的幸福",
            path: "../Book/真实的幸福 (洪兰) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "美国不平等的起源",
            path: "../Book/美国不平等的起源 (伊莎贝尔·威尔克森 [伊莎贝尔·威尔克森]) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "美国人的性格",
            path: "../Book/美国人的性格【（费孝通先生经典作品） 中国社会学、人类学奠基人之一费孝通学术经典赢得《纽约时报》《时代周刊》赞誉探索美国人的性格特征... (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "美国四百年：冒险、创新与财富塑造的历史",
            path: "../Book/美国四百年：冒险、创新与财富塑造的历史 ([美] 布·斯里尼瓦桑 著；扈喜林 译) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "老子今注今译 参照简帛本最新修订版",
            path: "../Book/老子今注今译 参照简帛本最新修订版 (陈鼓应注译) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "自卑与超越",
            path: "../Book/自卑与超越 (阿尔弗雷德.阿德勒 [adele]) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "自由论",
            path: "../Book/自由论 ([英] 以赛亚·伯林) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "英格兰的商业冒险史",
            path: "../Book/英格兰的商业冒险史 (巴特曼) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "裸猿三部曲（套装共三册）",
            path: "../Book/裸猿三部曲（套装共三册）【上海译文出品！裸猿三部曲被翻译成28种语言，全球销量超过2000万册，莫利斯以动物学家的眼光，揭示现代人的宿... (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "西方的困局：欧洲与美国的当下危机",
            path: "../Book/西方的困局：欧洲与美国的当下危机 ([德]海因里希·奥古斯特·温克勒) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "许倬云说美国",
            path: "../Book/许倬云说美国 (许倬云) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "谁是美国人？——美国国民特性面临的挑战",
            path: "../Book/谁是美国人？——美国国民特性面临的挑战（用文明的冲突的思维框架分析全球化时代美国人的身份认同危机） (塞缪尔·亨廷顿) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "象与骑象人：幸福的假设",
            path: "../Book/象与骑象人：幸福的假设 (湛庐文化•心视界) (乔纳森·海特) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "逃避自由",
            path: "../Book/逃避自由 ([美]艾里希 弗洛姆； 刘林海 译) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "道歉的力量",
            path: "../Book/道歉的力量 (（美）艾伦·拉扎尔著；林凯雄，叶织茵译) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        // Book/已上传/ 文件夹中的PDF文件
        {
            name: "世纪人文系列·世纪文库·经济与社会 第一卷",
            path: "../Book/已上传/[世纪人文系列·世纪文库]经济与社会 第一卷 ([德] 马克斯·韦伯； 阎克文译) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "世界重启",
            path: "../Book/已上传/世界重启 (路易斯·达特内尔) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "丝绸之路：一部全新的世界史",
            path: "../Book/已上传/丝绸之路：一部全新的世界史 (（英）彼得•弗兰科潘 (Peter Frankopan)) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "丧家狗",
            path: "../Book/已上传/丧家狗 (李零) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "中华经典名著全本全注全译庄子",
            path: "../Book/已上传/中华经典名著全本全注全译庄子 (方勇　译注) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "中国哲学十九讲",
            path: "../Book/已上传/中国哲学十九讲 (牟宗三(撰)) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "中国通史大师课（全3册）",
            path: "../Book/已上传/中国通史大师课（全3册） (许宏  刘国忠  等) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "乌合之众：群体心理学",
            path: "../Book/已上传/乌合之众：群体心理学 (古斯塔夫·勒庞, Gustave Le Bon) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "交往行为理论 第一卷 行为合理性与社会合理化",
            path: "../Book/已上传/交往行为理论 第一卷 行为合理性与社会合理化 (尤尔根.哈贝马斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "交换之物",
            path: "../Book/已上传/交换之物（史料罕见。重新解释科学革命的原因，理清近代科学发展与商业全球化之间的复杂关系。荣获美国科学史学会辉瑞奖，揭示科学革命真正... (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "人口原理",
            path: "../Book/已上传/人口原理 ([英]马尔萨斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "人类的算法",
            path: "../Book/已上传/人类的算法 (罗宾·邓巴) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "人类简史：从动物到上帝（完整版）",
            path: "../Book/已上传/人类简史：从动物到上帝（完整版） (哈拉里·尤瓦尔·诺亚·哈拉里, 林俊宏) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "从祖先到算法：加速进化的人类文化",
            path: "../Book/已上传/从祖先到算法：加速进化的人类文化 (【美】亚历山大·本特利, 【美】迈克尔·奥布莱恩, 任烨 etc.) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "企业的人性面",
            path: "../Book/已上传/企业的人性面 (道格拉斯·麦格雷戈) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "伟大的博弈：华尔街金融帝国的崛起",
            path: "../Book/已上传/伟大的博弈：华尔街金融帝国的崛起 (约翰·S·戈登) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "传播的偏向",
            path: "../Book/已上传/传播的偏向 (哈罗德·伊尼斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "何为良好生活",
            path: "../Book/已上传/何为良好生活 (陈嘉映) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "信息简史",
            path: "../Book/已上传/信息简史 (詹姆斯·格雷克) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "全球通史：从史前史到21世纪（第7版 上册）",
            path: "../Book/已上传/全球通史：从史前史到21世纪（第7版 上册） (L.S.斯塔夫里阿诺斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "全球通史：从史前史到21世纪（第7版 下册）",
            path: "../Book/已上传/全球通史：从史前史到21世纪（第7版 下册） (L.S.斯塔夫里阿诺斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "公正：该如何做是好？",
            path: "../Book/已上传/公正：该如何做是好？ (迈克尔·桑德尔) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "关键对话：如何高效能沟通（原书第2版）",
            path: "../Book/已上传/关键对话：如何高效能沟通（原书第2版） (科里·帕特森, 约瑟夫·格雷尼, 罗恩·麦克米兰, 艾尔·史威茨勒) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "冥想正念指南",
            path: "../Book/已上传/冥想正念指南 (杰克·康菲尔德) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "创新者的窘境",
            path: "../Book/已上传/创新者的窘境 (克莱顿·克里斯坦森) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "创新者的解答",
            path: "../Book/已上传/创新者的解答 (克莱顿·克里斯坦森, 迈克尔·雷纳) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "创造知识的企业",
            path: "../Book/已上传/创造知识的企业 (野中郁次郎, 竹内弘高) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "制度经济学",
            path: "../Book/已上传/制度经济学 (约翰·R·康芒斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "动机与人格",
            path: "../Book/已上传/动机与人格 (亚伯拉罕·马斯洛) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "卓有成效的管理者",
            path: "../Book/已上传/卓有成效的管理者 (彼得·德鲁克) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "历史研究",
            path: "../Book/已上传/历史研究 (阿诺德·汤因比) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "原则",
            path: "../Book/已上传/原则 (瑞·达利欧) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "反脆弱",
            path: "../Book/已上传/反脆弱 (纳西姆·尼古拉斯·塔勒布) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "古代人的自由与现代人的自由",
            path: "../Book/已上传/古代人的自由与现代人的自由 (贡斯当) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "哲学的慰藉",
            path: "../Book/已上传/哲学的慰藉 (阿兰·德波顿) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "国富论",
            path: "../Book/已上传/国富论 (亚当·斯密) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "基业长青",
            path: "../Book/已上传/基业长青 (吉姆·柯林斯, 杰里·波拉斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "复杂",
            path: "../Book/已上传/复杂 (梅拉妮·米歇尔) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "大数据时代",
            path: "../Book/已上传/大数据时代 (维克托·迈尔-舍恩伯格, 肯尼思·库克耶) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "失控",
            path: "../Book/已上传/失控 (凯文·凯利) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "学会提问",
            path: "../Book/已上传/学会提问 (尼尔·布朗, 斯图尔特·基利) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "学习之道",
            path: "../Book/已上传/学习之道 (乔希·维茨金) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "定位",
            path: "../Book/已上传/定位 (艾·里斯, 杰克·特劳特) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "实用主义",
            path: "../Book/已上传/实用主义 (威廉·詹姆斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "对伪心理学说不",
            path: "../Book/已上传/对伪心理学说不 (基思·斯坦诺维奇) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "工业社会的未来",
            path: "../Book/已上传/工业社会的未来 (丹尼尔·贝尔) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "影响力",
            path: "../Book/已上传/影响力 (罗伯特·西奥迪尼) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "心流",
            path: "../Book/已上传/心流 (米哈里·契克森米哈赖) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "思考，快与慢",
            path: "../Book/已上传/思考，快与慢 (丹尼尔·卡尼曼) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "技术的本质",
            path: "../Book/已上传/技术的本质 (布莱恩·阿瑟) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "文明的冲突与世界秩序的重建",
            path: "../Book/已上传/文明的冲突与世界秩序的重建 (塞缪尔·亨廷顿) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "新教伦理与资本主义精神",
            path: "../Book/已上传/新教伦理与资本主义精神 (马克斯·韦伯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "智能时代",
            path: "../Book/已上传/智能时代 (吴军) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "有闲阶级论",
            path: "../Book/已上传/有闲阶级论 (托斯丹·凡勃伦) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "枪炮、病菌与钢铁",
            path: "../Book/已上传/枪炮、病菌与钢铁 (贾雷德·戴蒙德) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "正义论",
            path: "../Book/已上传/正义论 (约翰·罗尔斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "民主的细节",
            path: "../Book/已上传/民主的细节 (刘瑜) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "沟通的艺术",
            path: "../Book/已上传/沟通的艺术 (罗纳德·阿德勒, 拉塞尔·普罗科特) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "游戏改变世界",
            path: "../Book/已上传/游戏改变世界 (简·麦戈尼格尔) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "理解媒介",
            path: "../Book/已上传/理解媒介 (马歇尔·麦克卢汉) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "社会学的想象力",
            path: "../Book/已上传/社会学的想象力 (C.赖特·米尔斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "科学革命的结构",
            path: "../Book/已上传/科学革命的结构 (托马斯·库恩) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "第五项修炼",
            path: "../Book/已上传/第五项修炼 (彼得·圣吉) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "管理的实践",
            path: "../Book/已上传/管理的实践 (彼得·德鲁克) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "经济学原理",
            path: "../Book/已上传/经济学原理 (N.格里高利·曼昆) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "组织行为学",
            path: "../Book/已上传/组织行为学 (斯蒂芬·P·罗宾斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "网络社会的崛起",
            path: "../Book/已上传/网络社会的崛起 (曼纽尔·卡斯特) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "自私的基因",
            path: "../Book/已上传/自私的基因 (理查德·道金斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "营销管理",
            path: "../Book/已上传/营销管理 (菲利普·科特勒, 凯文·莱恩·凯勒) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "认知盈余",
            path: "../Book/已上传/认知盈余 (克莱·舍基) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "货币金融学",
            path: "../Book/已上传/货币金融学 (弗雷德里克·S·米什金) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "资本论 第一卷",
            path: "../Book/已上传/资本论 第一卷 (卡尔·马克思) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "超越左右",
            path: "../Book/已上传/超越左右 (安东尼·吉登斯) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "长尾理论",
            path: "../Book/已上传/长尾理论 (克里斯·安德森) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        },
        {
            name: "黑天鹅",
            path: "../Book/已上传/黑天鹅 (纳西姆·尼古拉斯·塔勒布) (Z-Library).pdf",
            type: "pdf",
            category: "books"
        }
    ],
    
    // 文档文件
    documents: [
        {
            name: "《超链接学习者》阅读摘抄",
            path: "../《超链接学习者》阅读摘抄.docx",
            type: "docx",
            category: "documents"
        },
        {
            name: "超链接学习法理解",
            path: "../超链接学习法理解.docx",
            type: "docx",
            category: "documents"
        },
        {
            name: "超链接学习者之认知旅程 全集240126",
            path: "../超链接学习者之认知旅程 全集240126.docx",
            type: "docx",
            category: "documents"
        },
        {
            name: "超链接学习者书籍目录",
            path: "../超链接学习者书籍目录.docx",
            type: "docx",
            category: "documents"
        },
        {
            name: "超链接学习者收获回顾及未来发展看法",
            path: "../超链接学习者收获回顾及未来发展看法.docx",
            type: "docx",
            category: "documents"
        },
        {
            name: "超链接学习认知之旅GPT总结",
            path: "../超链接学习认知之旅GPT总结.docx",
            type: "docx",
            category: "documents"
        }
    ],
    
    // 图片文件
    images: [
        {
            name: "北美橡树",
            path: "../image/北美橡树.png",
            type: "png",
            category: "images"
        },
        {
            name: "北美红杉",
            path: "../image/北美红杉.png",
            type: "png",
            category: "images"
        },
        {
            name: "小菩提树",
            path: "../image/小菩提树.png",
            type: "png",
            category: "images"
        },
        {
            name: "成熟菩提树",
            path: "../image/成熟菩提树.png",
            type: "png",
            category: "images"
        },
        {
            name: "成长中菩提树",
            path: "../image/成长中菩提树.png",
            type: "png",
            category: "images"
        },
        {
            name: "日本枫树",
            path: "../image/日本枫树.png",
            type: "png",
            category: "images"
        },
        {
            name: "枫叶",
            path: "../image/枫叶.png",
            type: "png",
            category: "images"
        },
        {
            name: "枫叶分解",
            path: "../image/枫叶分解.mp4",
            type: "mp4",
            category: "images"
        },
        {
            name: "树叶分解",
            path: "../image/树叶分解.mp4",
            type: "mp4",
            category: "images"
        },
        {
            name: "欧洲橄榄树",
            path: "../image/欧洲橄榄树.png",
            type: "png",
            category: "images"
        },
        {
            name: "猴面包树",
            path: "../image/猴面包树.png",
            type: "png",
            category: "images"
        },
        {
            name: "菩提树叶",
            path: "../image/菩提树叶.png",
            type: "png",
            category: "images"
        },
        {
            name: "迎客松",
            path: "../image/迎客松.png",
            type: "png",
            category: "images"
        },
        {
            name: "银杏树",
            path: "../image/银杏树.png",
            type: "png",
            category: "images"
        },
        {
            name: "风",
            path: "../image/风.png",
            type: "png",
            category: "images"
        },
        {
            name: "图标",
            path: "../图标.png",
            type: "png",
            category: "images"
        },
        {
            name: "核心名词云",
            path: "../核心名词云.png",
            type: "png",
            category: "images"
        },
        {
            name: "超链接图标",
            path: "../超链接图标.png",
            type: "png",
            category: "images"
        }
    ],
    
    // 讨论文件
    discussions: [
        {
            name: "《如何在 AI 时代实现高效成长》",
            path: "../我的讨论文件/已上传/《如何在 AI 时代实现高效成长》.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "超链接学习法的传播方式和推广方法探讨稿",
            path: "../我的讨论文件/已上传/超链接学习法的传播方式和推广方法探讨稿.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "一个超越管理学的小女孩故事",
            path: "../鲍老师交流文件/已上传/一个超越管理学的小女孩故事.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "从知识服务到智慧服务的商业模式探讨",
            path: "../鲍老师交流文件/已上传/从知识服务到智慧服务的商业模式探讨.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "关于对真问题的疑惑与思考",
            path: "../鲍老师交流文件/已上传/关于对真问题的疑惑与思考.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "地缘政治何去何从",
            path: "../鲍老师交流文件/已上传/地缘政治何去何从.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "学习海贤老师大课听想变用实操作业",
            path: "../鲍老师交流文件/已上传/学习海贤老师大课听想变用实操作业.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "海贤老师大课学习心得",
            path: "../鲍老师交流文件/已上传/海贤老师大课学习心得.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "科学之根与人文之根的对话",
            path: "../鲍老师交流文件/已上传/科学之根与人文之根的对话.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "超链接学习法商业模式探讨",
            path: "../鲍老师交流文件/已上传/超链接学习法商业模式探讨.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "生物场发生器可以成为现实吗",
            path: "../鲍老师交流文件/生物场发生器可以成为现实吗.docx",
            type: "docx",
            category: "discussions"
        },
        {
            name: "超链接学习者商业模式探讨",
            path: "../鲍老师交流文件/超链接学习者商业模式探讨.docx",
            type: "docx",
            category: "discussions"
        }
    ]
};

// 全局变量
let currentCategory = 'all';
let currentView = 'grid';
let allFiles = [];
let filteredFiles = [];

// DOM元素
const fileGrid = document.getElementById('fileGrid');
const categoryTitle = document.getElementById('categoryTitle');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('fileModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const loadingIndicator = document.getElementById('loadingIndicator');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeFiles();
    bindEvents();
    displayFiles();
});

// 初始化文件数据
function initializeFiles() {
    allFiles = [
        ...fileData.rootPdfs,
        ...fileData.books,
        ...fileData.documents,
        ...fileData.images,
        ...fileData.discussions
    ];
    filteredFiles = [...allFiles];
}

// 绑定事件
function bindEvents() {
    // 分类按钮事件
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            switchCategory(category);
            
            // 更新按钮状态
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 视图切换事件
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            switchView(view);
            
            // 更新按钮状态
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 搜索事件
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        filterFiles(searchTerm);
    });
    
    // 模态框关闭事件
    closeModal.addEventListener('click', closeFileModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeFileModal();
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeFileModal();
        }
    });
}

// 切换分类
function switchCategory(category) {
    currentCategory = category;
    
    if (category === 'all') {
        filteredFiles = [...allFiles];
        categoryTitle.textContent = '全部文件';
    } else {
        filteredFiles = allFiles.filter(file => file.category === category);
        const categoryNames = {
            'books': '图书文献',
            'documents': '文档资料',
            'images': '图片素材',
            'discussions': '讨论交流'
        };
        categoryTitle.textContent = categoryNames[category] || '全部文件';
    }
    
    // 如果有搜索词，重新应用搜索
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filterFiles(searchTerm);
    } else {
        displayFiles();
    }
}

// 切换视图
function switchView(view) {
    currentView = view;
    fileGrid.className = view === 'list' ? 'file-grid list-view' : 'file-grid';
}

// 过滤文件
function filterFiles(searchTerm) {
    if (!searchTerm) {
        switchCategory(currentCategory);
        return;
    }
    
    let baseFiles = currentCategory === 'all' ? allFiles : allFiles.filter(file => file.category === currentCategory);
    filteredFiles = baseFiles.filter(file => 
        file.name.toLowerCase().includes(searchTerm)
    );
    
    displayFiles();
}

// 显示文件
function displayFiles() {
    fileGrid.innerHTML = '';
    
    if (filteredFiles.length === 0) {
        fileGrid.innerHTML = `
            <div class="no-files">
                <i class="fas fa-folder-open" style="font-size: 3rem; color: #bdc3c7; margin-bottom: 20px;"></i>
                <p style="color: #7f8c8d; font-size: 1.1rem;">没有找到匹配的文件</p>
            </div>
        `;
        return;
    }
    
    filteredFiles.forEach(file => {
        const fileElement = createFileElement(file);
        fileGrid.appendChild(fileElement);
    });
}

// 创建文件元素
function createFileElement(file) {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item fade-in';
    fileItem.addEventListener('click', () => openFile(file));
    
    const iconClass = getFileIcon(file.type);
    const categoryName = getCategoryName(file.category);
    
    fileItem.innerHTML = `
        <div class="file-info">
            <i class="${iconClass} file-icon ${file.type}"></i>
            <div class="file-name">${file.name}</div>
            <div class="file-path">${file.path}</div>
            <span class="file-category ${file.category}">${categoryName}</span>
        </div>
    `;
    
    return fileItem;
}

// 获取文件图标
function getFileIcon(type) {
    const icons = {
        'pdf': 'fas fa-file-pdf',
        'docx': 'fas fa-file-word',
        'png': 'fas fa-file-image',
        'jpg': 'fas fa-file-image',
        'jpeg': 'fas fa-file-image',
        'mp4': 'fas fa-file-video'
    };
    return icons[type] || 'fas fa-file';
}

// 获取分类名称
function getCategoryName(category) {
    const names = {
        'books': '图书文献',
        'documents': '文档资料',
        'images': '图片素材',
        'discussions': '讨论交流'
    };
    return names[category] || '其他';
}

// 打开文件
function openFile(file) {
    modalTitle.textContent = file.name;
    modalBody.innerHTML = '';
    
    showLoading();
    modal.style.display = 'block';
    
    setTimeout(() => {
        hideLoading();
        
        if (file.type === 'pdf') {
            openPDFFile(file);
        } else if (file.type === 'docx') {
            openDocumentFile(file);
        } else if (['png', 'jpg', 'jpeg'].includes(file.type)) {
            openImageFile(file);
        } else if (file.type === 'mp4') {
            openVideoFile(file);
        } else {
            modalBody.innerHTML = `
                <div class="document-viewer">
                    <div style="text-align: center; padding: 50px;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #f39c12; margin-bottom: 20px;"></i>
                        <h3>暂不支持此文件类型</h3>
                        <p>文件类型：${file.type}</p>
                        <p>文件路径：${file.path}</p>
                        <button onclick="downloadFile('${file.path}', '${file.name}')" class="nav-btn" style="margin-top: 20px;">
                            <i class="fas fa-download"></i> 下载文件
                        </button>
                    </div>
                </div>
            `;
        }
    }, 500);
}

// 打开PDF文件
function openPDFFile(file) {
    modalBody.innerHTML = `
        <iframe class="pdf-viewer" src="${file.path}" type="application/pdf">
            <div class="document-viewer">
                <div style="text-align: center; padding: 50px;">
                    <i class="fas fa-file-pdf" style="font-size: 3rem; color: #e74c3c; margin-bottom: 20px;"></i>
                    <h3>无法显示PDF文件</h3>
                    <p>您的浏览器不支持内嵌PDF查看器</p>
                    <button onclick="window.open('${file.path}', '_blank')" class="nav-btn" style="margin-top: 20px;">
                        <i class="fas fa-external-link-alt"></i> 在新窗口中打开
                    </button>
                </div>
            </div>
        </iframe>
    `;
}

// 打开文档文件
function openDocumentFile(file) {
    showLoading();
    
    // 尝试使用Office Online预览
    const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(window.location.origin + '/' + file.path)}`;
    
    modalBody.innerHTML = `
        <div class="document-viewer">
            <div class="document-header" style="padding: 15px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; color: #2c3e50;">
                    <i class="fas fa-file-word" style="color: #2980b9; margin-right: 10px;"></i>
                    ${file.name}
                </h3>
                <div>
                    <button onclick="downloadFile('${file.path}', '${file.name}')" class="nav-btn" style="margin-right: 10px; padding: 8px 15px; font-size: 14px;">
                        <i class="fas fa-download"></i> 下载
                    </button>
                    <button onclick="openWithOffice('${file.path}')" class="nav-btn" style="padding: 8px 15px; font-size: 14px;">
                        <i class="fas fa-external-link-alt"></i> 外部打开
                    </button>
                </div>
            </div>
            <div class="document-content" style="height: 70vh; position: relative;">
                <iframe 
                    src="${officeViewerUrl}" 
                    style="width: 100%; height: 100%; border: none;"
                    onload="hideLoading()"
                    onerror="showDocumentError('${file.name}', '${file.path}')"
                ></iframe>
                <div id="document-fallback" style="display: none; text-align: center; padding: 50px;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #f39c12; margin-bottom: 20px;"></i>
                    <h3>无法预览文档</h3>
                    <p>该文档可能需要下载后使用本地应用程序打开</p>
                    <div style="margin-top: 30px;">
                        <button onclick="downloadFile('${file.path}', '${file.name}')" class="nav-btn" style="margin-right: 10px;">
                            <i class="fas fa-download"></i> 下载文件
                        </button>
                        <button onclick="tryAlternativeViewer('${file.path}', '${file.name}')" class="nav-btn">
                            <i class="fas fa-eye"></i> 尝试其他预览方式
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 打开图片文件
function openImageFile(file) {
    showLoading();
    
    modalBody.innerHTML = `
        <div class="image-viewer">
            <div class="image-header" style="padding: 15px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; color: #2c3e50;">
                    <i class="fas fa-image" style="color: #27ae60; margin-right: 10px;"></i>
                    ${file.name}
                </h3>
                <div>
                    <button onclick="downloadFile('${file.path}', '${file.name}')" class="nav-btn" style="margin-right: 10px; padding: 8px 15px; font-size: 14px;">
                        <i class="fas fa-download"></i> 下载
                    </button>
                    <button onclick="openImageInNewTab('${file.path}')" class="nav-btn" style="padding: 8px 15px; font-size: 14px;">
                        <i class="fas fa-external-link-alt"></i> 新窗口打开
                    </button>
                </div>
            </div>
            <div class="image-content" style="height: 70vh; display: flex; align-items: center; justify-content: center; background: #f8f9fa;">
                <img 
                    src="${file.path}" 
                    alt="${file.name}" 
                    style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); opacity: 0; transition: opacity 0.3s ease;" 
                    onload="hideLoading(); this.style.opacity='1';" 
                    onerror="showImageError('${file.name}', '${file.path}')"
                >
                <div id="image-error" style="display: none; text-align: center; padding: 50px;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #f39c12; margin-bottom: 20px;"></i>
                    <h3>图片加载失败</h3>
                    <p>无法显示图片：${file.name}</p>
                    <div style="margin-top: 30px;">
                        <button onclick="retryImageLoad('${file.path}', '${file.name}')" class="nav-btn" style="margin-right: 10px;">
                            <i class="fas fa-redo"></i> 重新加载
                        </button>
                        <button onclick="downloadFile('${file.path}', '${file.name}')" class="nav-btn">
                            <i class="fas fa-download"></i> 下载图片
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 打开视频文件
function openVideoFile(file) {
    modalBody.innerHTML = `
        <div class="video-viewer">
            <video controls style="opacity:0; transition: opacity 0.3s ease;" onloadeddata="this.style.opacity=1" onerror="this.parentElement.innerHTML='<div style=\"text-align: center; padding: 50px;\"><i class=\"fas fa-exclamation-triangle\" style=\"font-size: 3rem; color: #f39c12; margin-bottom: 20px;\"></i><h3>视频加载失败</h3><p>无法加载视频：${file.name}</p></div>'">
                <source src="${file.path}" type="video/mp4">
                您的浏览器不支持视频播放。
            </video>
        </div>
    `;
}

// 关闭文件模态框
function closeFileModal() {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
}

// 显示加载指示器
function showLoading() {
    loadingIndicator.style.display = 'block';
}

// 隐藏加载指示器
function hideLoading() {
    loadingIndicator.style.display = 'none';
}

// 下载文件
function downloadFile(path, name) {
    const link = document.createElement('a');
    link.href = path;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 用Office打开
function openWithOffice(path) {
    // 尝试用系统默认应用打开文件
    window.open(path, '_blank');
}

// 显示文档错误并切换到备用显示
function showDocumentError(fileName, filePath) {
    hideLoading();
    const iframe = document.querySelector('.document-content iframe');
    const fallback = document.getElementById('document-fallback');
    if (iframe && fallback) {
        iframe.style.display = 'none';
        fallback.style.display = 'block';
    }
}

// 尝试替代预览方式
function tryAlternativeViewer(filePath, fileName) {
    // 尝试使用Google Docs Viewer
    const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(window.location.origin + '/' + filePath)}&embedded=true`;
    
    const iframe = document.querySelector('.document-content iframe');
    const fallback = document.getElementById('document-fallback');
    
    if (iframe && fallback) {
        showLoading();
        iframe.src = googleViewerUrl;
        iframe.style.display = 'block';
        fallback.style.display = 'none';
        
        // 设置超时，如果Google Viewer也失败，显示最终错误
        setTimeout(() => {
            iframe.onerror = () => showFinalDocumentError(fileName, filePath);
        }, 3000);
    }
}

// 显示最终文档错误
function showFinalDocumentError(fileName, filePath) {
    hideLoading();
    const fallback = document.getElementById('document-fallback');
    if (fallback) {
        fallback.innerHTML = `
            <i class="fas fa-times-circle" style="font-size: 3rem; color: #e74c3c; margin-bottom: 20px;"></i>
            <h3>无法在线预览</h3>
            <p>此文档格式不支持在线预览，请下载后使用相应软件打开</p>
            <div style="margin-top: 30px;">
                <button onclick="downloadFile('${filePath}', '${fileName}')" class="nav-btn">
                    <i class="fas fa-download"></i> 下载文件
                </button>
            </div>
        `;
        fallback.style.display = 'block';
    }
}

// 显示图片错误
function showImageError(fileName, filePath) {
    hideLoading();
    const img = document.querySelector('.image-content img');
    const errorDiv = document.getElementById('image-error');
    if (img && errorDiv) {
        img.style.display = 'none';
        errorDiv.style.display = 'block';
    }
}

// 重新加载图片
function retryImageLoad(filePath, fileName) {
    showLoading();
    const img = document.querySelector('.image-content img');
    const errorDiv = document.getElementById('image-error');
    if (img && errorDiv) {
        errorDiv.style.display = 'none';
        img.style.display = 'block';
        img.style.opacity = '0';
        // 添加时间戳强制重新加载
        img.src = filePath + '?t=' + new Date().getTime();
    }
}

// 在新标签页打开图片
function openImageInNewTab(filePath) {
    window.open(filePath, '_blank');
}

// 添加键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + F 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // 数字键快速切换分类
    if (e.key >= '1' && e.key <= '5') {
        const categories = ['all', 'books', 'documents', 'images', 'discussions'];
        const index = parseInt(e.key) - 1;
        if (index < categories.length) {
            const btn = document.querySelector(`[data-category="${categories[index]}"]`);
            if (btn) btn.click();
        }
    }
});

// 添加文件统计信息
function updateFileStats() {
    const stats = {
        total: allFiles.length,
        books: allFiles.filter(f => f.category === 'books').length,
        documents: allFiles.filter(f => f.category === 'documents').length,
        images: allFiles.filter(f => f.category === 'images').length,
        discussions: allFiles.filter(f => f.category === 'discussions').length
    };
    
    // 更新导航按钮显示统计
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const category = btn.dataset.category;
        const count = stats[category] || 0;
        const text = btn.innerHTML;
        if (!text.includes('(')) {
            btn.innerHTML = text + ` <span style="opacity: 0.7; font-size: 0.8em;">(${count})</span>`;
        }
    });
}

// 在初始化时更新统计
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateFileStats, 100);
});