const AV = require('../../libs/leancloud-storage.js');
const {allMenu,mIcon} = require('../../libs/allmenu.js')
var app = getApp()
Page({
  data: {
    rindex: 29,
    aMenu: allMenu,
    mIcom: mIcon,
    allRole: [[], [], [], []],
    auserRole: []
  },

  onReady: function () {
    var that = this;
    let allRole = [[], [], [], []];
    for (let m = 0; m < 4; m++) {
      allMenu[m].forEach ( mr=> { allRole[m].push(mr.menuNumber) })
    }
    let auserRole=wx.getStorageSync('auserRole');
    that.setData({
      allRole: allRole,
      auserRole: auserRole
    });
  },

  submit: function(){
    var that = this;
    var wmenu = [ [],[],[],[] ];
    var userNo = parseInt(that.data.rindex);
    for (let i=0 ; i<4 ; i++){
      let qm=[];
      for (let j = 0; j < allMenu[i].length ; j++){
        if (that.data.auserRole[userNo].roleArray[i][j]) {
          qm.push( { "tourl": allMenu[i][j].tourl, "mIcon": mIcon['m'+allMenu[i][j].menuNumber], "mName": allMenu[i][j].mName } );
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

  bindPickerChange: function({detail:{value}}) {
    this.setData({ rindex: parseInt(value) })
  },

  fenedit: function(e){
    var that = this;
    let i = parseInt(e.currentTarget.id.substring(3));      //选择菜单的编号
    let ma = that.data.auserRole[that.data.rindex].roleArray[i];
    let j = parseInt(e.currentTarget.dataset.j);
    ma[j] = ( ma[j]==0 ) ? allMenu[i][j].menuNumber : 0 ;
    that.data.auserRole[that.data.rindex].roleArray[i]=ma;
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
      }).catch(console.error)
  }

})
