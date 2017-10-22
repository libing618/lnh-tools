const AV = require('../../libs/leancloud-storage.js');

Page({
  data: {
    addclist: require('../../libs/addresclass.js'),
    assclist: require('../../libs/assetsclass.js'),
    apdclist: [],
    apdv: {},
    adcvalue: [0,0,0],
    assvalue: [0,0,0],
    apdvalue: [0,0,0]
    },
  onLoad:function(options){
    var that = this;
    // that.setData({addclist: wx.getStorageSync('addresclass') }) ;   //读取行政区划分类数据
    // if (!that.data.addclist){
    //   let adclass=[];
    //   for (var i=11;i<66;i++){
    //     if (i in ad){
    //       let ad2=[];
    //       for (var j=i*100;j<(i+1)*100;j++){
    //         if (j in ad){
    //           let ad3=[];
    //           for (var k=j*100;k<(j+1)*100;k++){
    //             if (k in ad){
    //               ad3.push({"c":k,"n":ad[k]})
    //             }
    //           }
    //           if (ad3.length==0){ ad3.push( {"c":j*100+1,"n":ad[j]} ) }
    //           ad2.push({"n":ad[j],"ct":ad3})
    //         }
    //       }
    //       adclass.push({"n":ad[i],"st":ad2})
    //     }
    //   }
    //     that.setData({ addclist: adclass });
    //     wx.setStorage({ key:'addresclass', data:adclass });
    // };

    var ass1 = require('../../libs/assetsclass.js');   //读取固定资产分类数据
    let ass2 = {};
    for (var i=0;i<66;i++){
      if (ass1[i]){
        for (var j = 0; j < 100; j++) {
          if (ass1[i].st[j]){
            if (ass1[i].st[j].ct){
              let c3l = ass1[i].st[j].ct.length;
              if (c3l>0){
                for (let k = 0; k < c3l; k++) {
                  let code3 = ass1[i].st[j].ct[k].c;
                  ass2[code3] = ass1[i].st[j].ct[k].n;
                  ass1[i].st[j].ct[k] = code3;
                }
              } else {
              let code2 = ass1[i].st[j].c*100;
              ass2[code2] = ass1[i].st[j].n;
              ass1[i].st[j].ct.push(code2);
              }
            }
          delete ass1[i].st[j].c;
          }
        }
        delete ass1[i].c;
      }
    };
//        that.setData({ addclist: adclass });
    wx.setStorage({ key:'ass1', data:ass1 });
    wx.setStorage({ key: 'ass2', data: ass2 });


    var apd1 = require('../../libs/productsclass.js');   //读取行业产品分类数据
    let apd2 = {},apdc3l=0,code2=0,code3=0;
    for (var i = 0; i < 97; i++) {
      if (apd1[i]) {
 //       delete apd1[i].c;
        for (var j = 0; j < 100; j++) {
          if (apd1[i].st[j]) {
            if (apd1[i].st[j].ct) {
              apdc3l = apd1[i].st[j].ct.length;
              if (apdc3l>0) {
              for (let k = 0; k < apdc3l; k++) {
//                console.log(i,'--',j,'---',k,'----',apd1[i].st[j].ct[k])
                code3 = apd1[i].st[j].ct[k].c;
                apd2[code3] = apd1[i].st[j].ct[k].n;
                apd1[i].st[j].ct[k] = code3;
              }
              } else {
                code2 = apd1[i].st[j].c * 100;
                apd2[code2] = apd1[i].st[j].n;
                apd1[i].st[j].ct.push(code2);
              }
            }
            delete apd1[i].st[j].c;
          }
        }
      }
    };
    that.setData({ apdclist: apd1,apdv: apd2 });
       wx.setStorage({ key: 'apd1', data: apd1 });
       wx.setStorage({ key: 'apd2', data: apd2 });
  },

  faddclass: function(e) {                         //选择行政区划
		var val = e.detail.value;
//		let saddv = this.data.addclist[val[0]][1][val[1]][1][val[2][1]] ;
		for (var i=0; i<3; i++){
			if ( this.data.adcvalue[i]!=val[i] ) {
				for (var j=i+1; j<3; j++) {	val[j]=0;	}
//				saddv=0;	
			}
		}
		this.setData({	adcvalue: val	});
  },
  fassclass: function(e) {                         //选择固定资产分类
		var val = e.detail.value;
		let sassv = this.data.assclist[val[0]].st[val[1]].ct[val[2]].c ;
		for (var i=0; i<3; i++){
			if ( this.data.assvalue[i]!=val[i] ) {
				for (var j=i+1; j<3; j++) {	val[j]=0;	}
			  sassv=0;
			}
		}
		this.setData({	assvalue: val	});
  },
  fapdclass: function(e) {                         //选择行业产品类型
		var val = e.detail.value;
		let sapdv = this.data.apdclist[val[0]].st[val[1]].ct[val[2]] ;
		for (var i=0; i<3; i++){
			if ( this.data.apdvalue[i]!=val[i] ) {
				for (var j=i+1; j<3; j++) {	val[j]=0;	}
				sapdv=0;
			}
		}
		this.setData({	apdvalue: val	});
  },
  faddsave: function(){
    let initadd = AV.Object.extend('userInit');
    let addsave=new initadd();
    addsave.set({'initName':"addresclass",'initVale':this.data.addclist})
    addsave.save().then((res)=> {console.log(res)
    }).catch((error)=>{console.log(error)})
  },
  fasssave: function(){
    let initass = AV.Object.extend('userInit');
    let asssave=new initass();
    asssave.set({'initName':"assetsclass",'initVale':this.data.assclist})
    asssave.save().then((res)=> {console.log(res)
    }).catch((error)=>{console.log(error)})
  },
  fapdsave: function(){
    let initapd = AV.Object.extend('userInit');
    let apdsave=new initapd();
    apdsave.set({'initName':"prodctsclass",'initVale':this.data.apdclist})
    apdsave.save().then((res)=> {console.log(res)
    }).catch((error)=>{console.log(error)})
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})