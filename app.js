const AV = require('./libs/leancloud-storage.js');
// 初始化存储 SDK
AV.init({
  appId: "kUsS8QFC8BLXbueQYwiYPfUF-gzGzoHsz",                    // 初始化存储 SDK
  appKey: "hCxPWp7TGfQWs6OShmL2uB1g"
});

App({
  globalData:{
    user: {"userRolName":"0","unit":"0","city":"Taiyuan","username":"fxlnh","emailVerified":false,"nickName":"fxlnh","language":"zh_CN","gender":1,"province":"Shanxi","avatarUrl":"../../images/index.png","country":"CN","superiorUnit":"fxlnh","mobilePhoneVerified":false,"objectId":"fxlnh"},
    logData: [],
    sysinfo: null
  },

  openWxLogin: function(that) {            //注册登录u:"ee42d9bcd8351a974d6abb31ed6b1a3c3f37993cc44fdd1454e64a4c30a30891"
    let lgname="adminlyq";//服务平台
    let lgpasw="qzp19931121.";
    return new Promise((resolve, reject) => {
      AV.User.logIn(lgname,lgpasw).then( function(cuser){
        cuser.set(userSet).save().then( (wxuser) =>{
          that.globalData.user = wxuser.toJSON();
          return Promise.resolve(that.globalData.user);
        }).catch((error)=>{return Promise.reject('客户注册失败')});
      });
    }).catch((error)=>{return Promise.reject(error)});
  },

  onLaunch: function () {
    var that = this ;
    that.globalData.sysinfo = wx.getSystemInfoSync();                     //读设备信息
    let lcuser = AV.User.current();                          //本机登录状态
    if ( lcuser ) {                         //用户如已注册并在本机登录过,则有数据缓存，否则进行注册登录。
      that.globalData.user = lcuser.toJSON();           //读缓存的用户信息
    }else{
      that.openWxLogin(that).then( (lcuser) =>{
        console.log(lcuser.toJSON);
      }).catch((error)=>{console.log(error)})
    }
  },

  onShow: function () {
    var that = this;
    that.globalData.logData = wx.getStorageSync('loguser') || []
    that.globalData.logData.unshift(Date.now())
  }

})
