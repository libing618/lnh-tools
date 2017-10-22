const AV = require('../../libs/leancloud-storage.js');
Page({
  data:{
    structure: [],
    sindex: 0
  },
  
  onLoad:function(options){
    var that = this;
    that.setData({structure:wx.getStorageSync('structure')});
    if (!that.data.structure) { that.getCloud() };
  },

  bindPickerClass:function(e){
    var sI = parseInt(e.detail.value);
    this.setData({ sindex: sI })
  },

  getCloud:function(){
    var that = this;
    return new AV.Query('structure')
            .select('className','classValue')
            .find().then( (structure) =>{
              var st = structure.map((stru)=>{
                let s = stru.toJSON();
                s.classValue=JSON.stringify(s.classValue,null,1)
                return s
                })
      that.setData({structure : st});
    }).catch((error)=>{console.log(error)})
  },

  saveStorage:function(){
    wx.setStorageSync('structure', this.data.structure);
  },

  fsubmit:function(e){
    var that = this;
    var sI = that.data.sindex;                 //class的选择
    let cr = AV.Object.extend(that.data.structure[sI].className);    //class的名称
    let crArray = e.detail.value.count;              //测试数据数量
    let cValue = JSON.parse(e.detail.value.classValue);            //修改的数据JSON序列化
    let keyArray = [];
    for (var key in cValue){keyArray.push(key)};    //获取所有字段名
    let crSa = [];
    for (var i=0 ; i<crArray ; i++){
      keyArray.map((ikey)=>{
        if (typeof cValue[ikey] == 'number') {cValue[ikey]=cValue[ikey]+1}            //数值型字段自动加1
      });
      let crSave=new cr();
      crSave.set(cValue);
      crSa.push(crSave);
    };
    AV.Object.saveAll(crSa).then( (sw)=>{
      console.log(sw);
    }).catch((error)=>{console.log(error)});
  }
})