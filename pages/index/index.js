const AV = require('../../libs/leancloud-storage.js');

var app = getApp()
Page({
  data: {
    rindex: 29,
    allMenu: require('../../libs/allmenu.js'),
    mData: {},
    allRole: [[], [], [], []],
    auserRole: []
  },
  

  submit: function(){
    var that = this;
    var wmenu = [ [],[],[],[] ];
    var userNo = parseInt(that.data.rindex);
    for (let i=0 ; i<4 ; i++){
      let md = that.data.allMenu[i],qm=[];
      for (let j=0 ; j<md.length ; j++){
        if (that.data.auserRole[userNo].roleArray[i][j]) { 
          qm.push( { "tourl": md[j].tourl, "mIcon": md[j].mIcon, "mName": md[j].mName } );
        }
      }
      wmenu[i] = qm;        
    }
    let initmenu = AV.Object.createWithoutData('userInit',that.data.auserRole[userNo].objectId);
    initmenu.set('initVale',wmenu);
    initmenu.set('roleArray', that.data.auserRole[userNo].roleArray)
    initmenu.save().then( (sw)=>{console.log('菜单保存成功');
    }).catch((error)=>{console.log(error)})
  },

  saveStorage: function(){
    wx.setStorageSync('auserRole', this.data.auserRole);
  },

  bindPickerChange: function(e) {
    var userNo = parseInt(e.detail.value);
    this.setData({ rindex: userNo })
  },
  
  fenedit: function(e){
    var that = this;
    let menuIndex = parseInt(e.currentTarget.id.substring(3));      //选择菜单的编号
    let m = parseInt(menuIndex/100-1);
    let ma = that.data.auserRole[that.data.rindex].roleArray[m];
    var iMenu = parseInt(e.currentTarget.dataset.i);
    ma[iMenu] = ( ma[iMenu]==0 ) ? menuIndex : 0 ;
    that.data.auserRole[that.data.rindex].roleArray[m]=ma;
    that.setData({auserRole: that.data.auserRole});
  },

  getRole: function () {
    var that = this;
    var aRole = [];
    new AV.Query('userInit')
        .select(['initName','roleArray'])
        .find().then( (userRole) =>{
        aRole = userRole.map((uM)=>{
          let userMenu = uM.toJSON();
          return { objectId: userMenu.objectId , roleArray: userMenu.roleArray ? userMenu.roleArray : that.data.allRole , initName: userMenu.initName }
        })
        that.setData({ auserRole: aRole });
      }).catch((error)=>{console.log(error)})
  },

  onReady: function () {
    var that = this;
    let allRole = [[], [], [], []], mData = {};
    for (let m = 0; m < 4; m++) {
      let qmenu = that.data.allMenu[m];
      for (let i = 0; i < qmenu.length; i++) {
        mData[qmenu[i].menuNumber] = { "menuNumber": qmenu[i].menuNumber, "tourl": qmenu[i].tourl, "mIcon": qmenu[i].mIcon, "mName": qmenu[i].mName };
        allRole[m].push(qmenu[i].menuNumber)
      }
    }
    let auserRole=wx.getStorageSync('auserRole');
    that.setData({
      allRole: allRole,
      mData: mData,
      auserRole: auserRole
    });
  }
  
})