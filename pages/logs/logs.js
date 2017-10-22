//logs.js
var util = require('../../utils/util.js')
var roles = {
"lyqadmin": "590b4721315c1e0056354c77",
"applyAdmin": "598353adfe88c200571b8636",
"sessionuser": "59af7119ac502e006abee06a",
"au01": "592e7f8f7a1ff90032531b62",
"au02": "592e7fb77a1ff90032531b65",
"au10": "592e8107315c1e0050c9b214",
"au11": "592e8148315c1e0050c9b222",
"au12": "592e82627a1ff90032531bb1",
"au20": "592e8343315c1e0050c9b30c",
"au21": "592e8350315c1e0050c9b30d",
"au22": "592e83577a1ff90032531bb4",
"au30": "592e8366315c1e0050c9b314",
"au31": "592e83737a1ff90032531bb5",
"au32": "592e837a315c1e0050c9b31a",
"bu00": "592e8414315c1e0050c9b348",
"bu10": "592e841c7a1ff90032531bb9",
"bu11": "592e84227a1ff90032531bba",
"bu01": "592e842d7a1ff90032531bbc",
"bu02": "592e8438315c1e0050c9b352",
"bu12": "592e8440315c1e0050c9b353",
"bu20": "592e8450315c1e0050c9b354",
"bu21": "592e8458315c1e0050c9b35a",
"bu22": "592e845e315c1e0050c9b35b",
"bu30": "592e84687a1ff90032531bbd",
"bu31": "592e846e7a1ff90032531bbe",
"bu32": "592e84767a1ff90032531bbf",
"cu00": "59ce950d9545040067999f95",
"cu01": "59ce951217d0090063a0f6d3",
"cu02": "59ce9520a22b9d0061333f33",
"cu10": "59ce9576570c35088c8a56b2",
"cu11": "59ce9584128fe1529c2c35f1",
"cu12": "59ce9593ee920a0044c16116",
"cu20": "59ce959817d0090063a0f7ae",
"cu21": "59ce95a2570c35088c8a56ee",
"cu22": "59ce95ac67f356003a603989",
"cu30": "59ce95b8fe88c2003c3ef616",
"cu31": "59ce95c317d0090063a0f7f2",
"cu32": "59ce95cb67f356003a6039bb"}
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})


