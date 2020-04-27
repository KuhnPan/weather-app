var express = require('express')
var router = express.Router()
// Import mockjs
let Mock = require('mockjs');

router.get('/', function (req, res, next) {
  //res.send('api leaders page')

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

res.json(resData)
})

module.exports = router
