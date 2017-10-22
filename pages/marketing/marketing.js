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
    var sI = that.data.sindex;
    let cr = AV.Object.extend(that.data.structure[sI].className);
    let crS = new cr();
    let cValue = JSON.parse(e.detail.value.classValue)
    crS.set(cValue);
    crS.save().then( (sw)=>{
      console.log(sw);
    }).catch((error)=>{console.log(error)});
  }
})