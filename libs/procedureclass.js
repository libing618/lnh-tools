module.exports = [
{
  "pNo": 0,
  "pName": "单位名称和负责人审批流程",
  "pSuccess": [
    { n: 0, inclose: false, gname: "proType", glabel: '主营业务', t: "producttype", apdclist:require('./productsclass.js'), apdvalue:[0, 0, 0] },
    { n: 1, inclose: true, gname:"nick", glabel:'单位简称',t:"h3", c:"单位简称" },
    { n: 2, inclose: true, gname:"title", glabel:'单位简介',t:"p", c:"简介" },
    { n: 3, inclose: true, gname:"desc", glabel:'单位描述',t:"p", c:"单位描述" },
    { n: 4, inclose: true, gname:"bulletin", glabel:'公告',t:"p", c:"公告" },
    { n: 5, inclose: true, gname:"thumbnail", glabel: '图片简介',t: "thb64", c:"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4="  },
    { n: 6, inclose: true, gname:"addGeoPoint", glabel:'地理位置',t:"Adrs", c:{ latitude: 23.10229, longitude: 113.3345211 }, e:'详细地址' },
    { n: 7, inclose: true, gname:"pPhoto", glabel:'申请人手持身份证的照片',t:"pic", c:'http://ady3cqpl0902fnph-10007535.file.myqcloud.com/667b99d135e2d8fa876d.jpg' },
    { n: 8, inclose: true, gname:"uPhoto", glabel:'单位营业执照或个人身份证背面的照片',t:"pic", c:'http://ady3cqpl0902fnph-10007535.file.myqcloud.com/80b1db6d2b4f0a1cc7cf.jpg' },
    { n: 9, inclose: true, gname:"sUnit", glabel:'选择上级单位',t:"mapSunit", c:'', e:'单位名称',suArray:{} }
  ],
  "uState": 0,
  "puRoles": [],
  "pEcomm": false,
  "pBewrite": "新设单位负责人提出岗位和单位设置申请，提交单位或个人身份证明文件的照片，由电子商务服务公司或工商局进行审批。",
  "suRoles": [
    "bu31",
    "bcadmin"
  ],
  "pFinallyRole": "lnhsxadmin",
  "pModle": "_Role"
},
{
  "pNo": 1,
  "pName": "服务机构文章审批流程",
  "pSuccess": [
    "afamily",
    "name",
    "title",
    "artbreft",
    "artdata",
    "unitid",
    "thumbnail"
  ],
  "puRoles": [
    "bu21",
    "buadmin"
  ],
  "pEcomm": true,
  "pBewrite": "服务机构员工编写新闻、品牌、扶持政策类文章，经单位领导审批后发布。个人编写的此类文章由所属服务机构审批。",
  "suRoles": [
    "bu20",
    "bcadmin"
  ],
  "pFinallyRole": "lnhsxadmin",
  "pModle": "articles"
},
{
  "pNo": 2,
  "pName": "企业宣传文章审批流程",
  "pSuccess": [
    "afamily",
    "name",
    "title",
    "artbreft",
    "artdata",
    "unitid",
    "thumbnail"
  ],
  "puRoles": [
    "au21",
    "auadmin"
  ],
  "pEcomm": true,
  "pBewrite": "企业员工编写产品宣传类文章，经单位领导审批后发布。个人编写的宣传文章由所属服务机构审批。",
  "suRoles": [
    "bu20",
    "bcadmin"
  ],
  "pFinallyRole": "lnhsxadmin",
  "pModle": "articles"
}
]
