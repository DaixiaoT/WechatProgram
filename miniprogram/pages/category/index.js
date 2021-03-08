// pages/category/index.js
import { request } from "../../request/index.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightContent:[],

    currentIndex:0
    

  },
  
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates();

  },

  getCates() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
    }).then(res => {
      this.Cates=res.data.message;

      let leftMenuList=this.Cates.map(v=>v.cat_name);
      let rightContent=this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContent
      })
    })   
  },
});
