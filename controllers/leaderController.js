//var Leader = require('../models/leader');

// Import mockjs
let Mock = require('mockjs');
const {redis_client} = require('../modules/redis');
const {check_leader_list, check_leader_detail} = require('../modules/cache');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: API Home Page');
};

// Display list of all leaders.
exports.leader_list = [check_leader_list, function(req, res) {
//    res.send('NOT IMPLEMENTED: Leader list');

var resData = Mock.mock(
  {
    "leaderList|3": [
        {
        "author|+1": [
            "李白",
            "杜甫",
            "欧阳修"
        ],
        "headImg|+1": [
            "https://s1.ax1x.com/2020/04/20/J1dSk6.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586430229704&di=f7af1d2c89c6be0f24f719a4bd57fe7d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F26%2F20150926073229_tkhja.thumb.700_0.jpeg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586430271301&di=0499f9a1cb5ad90beaae75c949950e56&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2020-3%2F2020030710475319371.jpg"
        ],
        "userName|+1": [
            "季星",
            "末那大叔",
            "院院"
        ],
        "articTitle|+1": [
            "产品思维模型，听这个就够了！",
            "我们收集了29份情感调研报告",
            "2020新媒体课程 | 限时免费！"
        ],
        "bannerImg|+1": [
            "https://s1.ax1x.com/2020/04/20/J1DeKg.png",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=661113673,403449113&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586429121666&di=149eee311cb78e921e9be69db50d1532&imgtype=0&src=http%3A%2F%2Fimg.socang.com%2FCollection%2F201307%2F24%2F56c11078-996b-4944-86fc-e827d05fb839.jpg"
        ],
        "articContent|+1": [
            "最近读到了两本与互联网产品经理相关的新书，今天向大家推荐小兄弟刘飞的《产品思维》。",
            "曾经有一份真诚的爱情摆在我的面前，我没有珍惜她！",
            "新媒体——所有人对所有人的传播，决定了它的社交本质。"
        ],
        "clickTimes|1000-30000": 1,
        "thumbUp|85-688": 1
        }
    ]
  }
)

//add data to Redis
console.log('will set redis key [leaders]');
redis_client.setex('leaders',3600, JSON.stringify(resData));

res.json(resData)
}

]

// Display detail page for a specific leader.
exports.leader_detail = [check_leader_detail, function(req, res) {
//    res.send('NOT IMPLEMENTED: Leader detail: ' + req.params.id);

var resData = Mock.mock(
  {
    "leaderInfo": function() {  
		return this.leaderList[req.params.id];
	},
    "leaderList|3": [
        {
        "headImg|+1": [
            "https://s1.ax1x.com/2020/04/20/J1dSk6.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586430229704&di=f7af1d2c89c6be0f24f719a4bd57fe7d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F26%2F20150926073229_tkhja.thumb.700_0.jpeg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586430271301&di=0499f9a1cb5ad90beaae75c949950e56&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2020-3%2F2020030710475319371.jpg"
        ],
        "userName|+1": [
            "季星",
            "末那大叔",
            "院院"
        ],
        "articTitle|+1": [
            "产品思维模型，听这个就够了！",
            "我们收集了29份情感调研报告",
            "2020新媒体课程 | 限时免费！"
        ],
        "bannerImg|+1": [
            "https://s1.ax1x.com/2020/04/20/J1DeKg.png",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=661113673,403449113&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586429121666&di=149eee311cb78e921e9be69db50d1532&imgtype=0&src=http%3A%2F%2Fimg.socang.com%2FCollection%2F201307%2F24%2F56c11078-996b-4944-86fc-e827d05fb839.jpg"
        ],
        "articContent|+1": [
            "最近读到了两本与互联网产品经理相关的新书，今天向大家推荐小兄弟刘飞的《产品思维》。",
            "曾经有一份真诚的爱情摆在我的面前，我没有珍惜她！",
            "新媒体——所有人对所有人的传播，决定了它的社交本质。"
        ],
        "clickTimes|1000-30000": 1,
        "thumbUp|85-688": 1,
        "author|+1": [
            "李白",
            "杜甫",
            "欧阳修"
        ],
        "userDes|+1": [
            "前南方周末记者",
            "情感类公号大V",
            "馒头商学院联合创始人"
        ],
        "text1|+1": [
            "产品经理是个做起来挺理工科，但谈起来又有点偏文科的岗位。想要把「产品思维」拆开了分析可不是件容易事，要么落入俗套，堆砌生硬的归纳或演绎；要么虚头巴脑，陷入毫无底蕴支撑的哲学（甚至是玄学）讨论。\n\n但刘飞这本书却在这个主题上表现非常不错，不论是整体结构，还是基于每个具体点的展开，都能做到言之有物，收放自如。",
            "情感大叔text1",
            "馒头商学院联合创始人text1"
        ],
        "text2|+1": [
            "刚开始的时候，我以为这是一本面向初学者的书，想速速翻完，但翻开之后，却不断被书中饱满的内容所吸引，调整了几次阅读节奏，沉下心耐心精读学习。\n\n这本书给了我很多启发和帮助，尤其是「用户心智」一章，虽然我们平时常会讲心智模型，但却很少有人把「心智」这个概念讲清楚。刘飞将用户心智比作函数，用户情境和感知是函数的输入，用户的理解和反应则是函数的输出。这样一来，用户心智就对应到一个动态模型，而不是用户故事的叠加，让我眼前一亮。",
            "情感大叔text2",
            "馒头商学院联合创始人text2"
        ],
        "image1|+1": [
            "https://s1.ax1x.com/2020/04/20/J1DeKg.png",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=661113673,403449113&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586429121666&di=149eee311cb78e921e9be69db50d1532&imgtype=0&src=http%3A%2F%2Fimg.socang.com%2FCollection%2F201307%2F24%2F56c11078-996b-4944-86fc-e827d05fb839.jpg"
        ],
        "image2|+1": [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587396977621&di=1fbd5b11a2a892a8a7d17f972e7c489f&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2220453877%2C1113450073%26fm%3D214%26gp%3D0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=661113673,403449113&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586429121666&di=149eee311cb78e921e9be69db50d1532&imgtype=0&src=http%3A%2F%2Fimg.socang.com%2FCollection%2F201307%2F24%2F56c11078-996b-4944-86fc-e827d05fb839.jpg"
        ],
        "updateTime|+1": [
            "2017-10-23",
            "2018-11-24",
            "2019-12-25"
        ],
        "bookCover|+1": [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587387135039&di=4284c2a49414f96e0fbdf62c62dc1e84&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F18%2F20150618194533_KTPhj.jpeg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=661113673,403449113&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586429121666&di=149eee311cb78e921e9be69db50d1532&imgtype=0&src=http%3A%2F%2Fimg.socang.com%2FCollection%2F201307%2F24%2F56c11078-996b-4944-86fc-e827d05fb839.jpg"
        ],
        "bookName|+1": [
            "《三重门》",
            "《经济学原理》",
            "《我的山野生活》"
        ],
        "bookAuthor|+1": [
            "韩寒",
            "郎咸平",
            "李子柒"
        ],
        "readerNum|1000-20000": 1
        }
    ]
  }
)

//add data to Redis
console.log('will set redis key [leader/' + req.params.id + ']');
redis_client.setex('leader/' + req.params.id ,3600, JSON.stringify(resData));

res.json(resData)
}

]
