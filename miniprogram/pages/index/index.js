//Page Object

import { request } from "../../request/index.js";
Page({
  data: {
    swiperList: [],
    catesList:[],
    floorList:[],
  },
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     result.data.message[0].image_src="https://wx1.sinaimg.cn/mw1024/e31a81d8ly1gbr603pae5j23k02o0u0z.jpg"
    //     result.data.message[1].image_src="https://wx3.sinaimg.cn/mw1024/e31a81d8ly1gbr60bealej23k02o04qs.jpg"
    //     result.data.message[2].image_src="https://wx1.sinaimg.cn/mw1024/e31a81d8ly1gbr60d53rqj23k02o0qv7.jpg"
    //     this.setData({
    //       swiperList:result.data.message,
    //     })
    //     // console.log(result.data.message[0].image_src);
    //     // console.log(result.data);
    //   }
    // });
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();
  },

  getSwiperList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
    }).then((result) => {
      result.data.message[0].image_src =
        "https://wx1.sinaimg.cn/mw1024/e31a81d8ly1gbr603pae5j23k02o0u0z.jpg";
      result.data.message[1].image_src =
        "https://wx3.sinaimg.cn/mw1024/e31a81d8ly1gbr60bealej23k02o04qs.jpg";
      result.data.message[2].image_src =
        "https://wx1.sinaimg.cn/mw1024/e31a81d8ly1gbr60d53rqj23k02o0qv7.jpg";

      this.setData({
        swiperList: result.data.message,
      });
    });
  }, 

  getCatesList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
    }).then((result) => {
     
      this.setData({
        catesList: result.data.message,
      });
    });
  },

  getFloorList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
    }).then((result) => {
     
      this.setData({
        floorList: result.data.message,
      });
    });
  },
});
