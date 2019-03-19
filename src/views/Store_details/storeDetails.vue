<template>
    <div class="storeDetails pt15">
        <!-- 轮播 -->
        <div class="pr_pl15">
            <van-swipe :autoplay="3000" indicator-color="white" class="header_swiper ">
                <van-swipe-item v-for="(item,index) in swiperImgs" :key="index">
                    <img :src="item.oneImg" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        
        <!-- 地址 -->
        <div class="addres pr_pl15">
            <ul>
                <li>
                    <span>深圳松岗满京华店</span>
                    <span>营业：周一至周日 10:00～22:00</span>
                </li>
                <li>
                    <span class="Dividing_line"></span>
                    <span @click="tell">电话图标</span>
                </li>
                <span class="before"></span>
            </ul>
        </div>
        <!-- 详细地址 -->
        <div class="details_addres pr_pl15">
            <ul>
                <li>图标</li>
                <li>
                    <span>深圳市宝安区永福大道松岗满京华SOHO3</span>
                    <span>距您4km</span>
                </li>
                <li>图标</li>
            </ul>
        </div>
        <!-- 场馆简历 -->
        <div class="resume p15">
            <dt class="title_text">场馆简历</dt>
            <dt>可容纳100人同时健身，当前健身人数30人。热门项目是减脂 训练营和体能训练营。</dt>
            <dt>
                 主要设施：跑步机、动感单车、智能储物柜、WIFI、淋浴
            </dt>
            <span class="before"></span>
        </div>
        <!-- 团体课 -->
        <div class="Group_course pr_pl15">
            <span class="title_text">团体课</span>
            <div class="cours_list">
                <van-tabs v-model="active" class="tabs_group" :swipe-threshold="8" :swipeable="false">
                    <span id="time">2.19</span>
                    <van-tab title="今日" class="var_tab">
                        
                        <!-- 课程列表 -->
                        <div class="Course_list">
                            <ul>
                                <li>
                                    <img :src="oneImg" alt="">
                                </li>
                                <li>
                                    <span>FHIT-中强度有氧搏击操LOP</span>
                                    <span>icon图标+Hussey</span>
                                    <span>icon+19:30~20:30</span>
                                </li>
                                <van-button type="primary">预约</van-button>
                                <span class="before"></span>
                            </ul>
                            <ul>
                                <li>
                                    <img :src="oneImg" alt="">
                                </li>
                                <li>
                                    <span>FHIT-中强度有氧搏击操LOP</span>
                                    <span>icon图标+Hussey</span>
                                    <span>icon+19:30~20:30</span>
                                </li>
                                <van-button type="default" style="background-color:#CDCDCD">已满</van-button>
                                <span class="before"></span>
                            </ul>
                        </div>
                    </van-tab>
                    
                    <van-tab title="周日">周日</van-tab>
                    <van-tab title="周一">周一</van-tab>
                    <van-tab title="周二">周二</van-tab>
                    <van-tab title="周三">周三</van-tab>
                    <van-tab title="周四">周四</van-tab>
                    <van-tab title="周五">周五</van-tab>
                </van-tabs>
            </div>
        </div>
        <!-- 门店私教 -->
        <div class="Private_education_stores pl15">
            <div class="title_text">门店私教</div>
            <div class="swiper_list">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="swiper_list_dt" style="background:#1DCE74">
                                <ul>
                                    <li>
                                        <img :src="oneImg" alt="">
                                    </li>
                                    <li>
                                        <span>
                                            M.Wang
                                        </span>
                                    </li>
                                    <li>
                                        <span>¥300/节</span>
                                    </li>
                                    <li>
                                        <span>已约200节课</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="swiper_list_dt" style="background:#F2C057">
                                <ul>
                                    <li>
                                        <img :src="oneImg" alt="">
                                    </li>
                                    <li>
                                        <span>
                                            M.Wang
                                        </span>
                                    </li>
                                    <li>
                                        <span>¥300/节</span>
                                    </li>
                                    <li>
                                        <span>已约400节课</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="swiper_list_dt" style="background-color:#1DCE74">
                                <ul>
                                    <li>
                                        <img :src="oneImg" alt="">
                                    </li>
                                    <li>
                                        <span>
                                            M.Wang
                                        </span>
                                    </li>
                                    <li>
                                        <span>¥300/节</span>
                                    </li>
                                    <li>
                                        <span>已约300节课</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="swiper_list_dt" style="background:#F2C057">
                                <ul>
                                    <li>
                                        <img :src="oneImg" alt="">
                                    </li>
                                    <li>
                                        <span>
                                            M.Wang
                                        </span>
                                    </li>
                                    <li>
                                        <span>¥300/节</span>
                                    </li>
                                    <li>
                                        <span>已约200节课</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="swiper_list_dt" style="background-color:#1DCE74">
                                <ul>
                                    <li>
                                        <img :src="oneImg" alt="">
                                    </li>
                                    <li>
                                        <span>
                                            M.Wang
                                        </span>
                                    </li>
                                    <li>
                                        <span>¥300/节</span>
                                    </li>
                                    <li>
                                        <span>已约400节课</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- 门店训练营 -->
        <div class="Training_camp pr_pl15">
            <span class="title_text">
                门店训练营
            </span>
            <div class="Training_camp_list">
                <ul>
                    <li>
                        <img :src="oneImg" alt="">
                        <span>仅剩8人开班</span>
                    </li>
                    <li>
                        <span>
                            GRIT高间歇LOVE FITT-03.
                        </span>
                        <span>
                            ¥1300 / 10课时
                        </span>
                    </li>
                    <li>
                        <span>周一/周三/周五 19:00～20:00</span>
                        <span @click="appointment">预约</span>
                        <span>icon+Wander</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img :src="twoImg" alt="">
                        <span>仅剩8人开班</span>
                    </li>
                    <li>
                        <span>
                            GRIT高间歇LOVE FITT-03.
                        </span>
                        <span>
                            ¥1300 / 10课时
                        </span>
                    </li>
                    <li>
                        <span>周一/周三/周五 19:00～20:00</span>
                        <span>预约</span>
                        <span>icon+Wander</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import { Button,Popup,Swipe, SwipeItem, Tab, Tabs } from 'vant';

export default {
    data(){
        return{
            swiper:4,
            active:0,
            oneImg:require("../../assets/images/1.jpg"),
            twoImg:require('../../assets/images/2.jpg'),
            swiperImgs:[
                {
                    oneImg:require('../../assets/images/2.jpg'),
                },
                {
                    oneImg:require('../../assets/images/3.jpg'),
                },
                {
                    oneImg:require('../../assets/images/4.jpg'),
                },
                {
                    oneImg:require('../../assets/images/5.jpg'),
                }
               
            ]
        }
        
    },
    components:{
        [Button.name]:Button,
        [Popup.name]:Popup,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [Tab.name]:Tab,
        [Tabs.name]:Tabs,
    },
    mounted(){
        this._initSwiper();
    },
    created(){
        
    },
    methods:{
        tell(){
            alert("0755-88889889")
        },
        appointment(){
            alert("预约")
        },
        // swiper
        _initSwiper(){
            var mySwiper2 = new Swiper('.swiper-container',{
                slidesPerView : 'auto',
                 paginationClickable: true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                })
        }
    }
}
</script>
<style scoped lang=less>
    .storeDetails{
        font-size: 18px;
        /* padding: 15px; */
        overflow: hidden;
        .header_swiper{
            border-radius: 4px;
            height: 200px;
            .van-swipe-item:nth-child(odd){
                background-color: aqua
            }
            .van-swipe-item:nth-child(even){
                background-color: aquamarine
            }
            img{
                display: block;
                width: 100%;
            }
        }
        .addres{
            ul{
                position: relative;
                padding: 20px 0px;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-items: center;
                li:first-child{
                    display: flex;
                    justify-content:flex-start;
                    flex-flow: column wrap;
                    align-items: flex-start;
                    letter-spacing: 1px;
                    span:first-child{
                        font-size: 20px;
                        color:#101D37;
                        font-weight: 600;
                        padding-bottom: 5px;
                    }
                    span:last-child{
                        font-size: 12px;
                        font-size: #101D37
                    }
                }
                li:nth-child(2){
                    padding:8px;
                    position: relative;
                    .Dividing_line{
                        position: absolute;
                        height: 100%;
                        width:1px;
                        background-color: #ccc;
                        top:0;
                        bottom:0;
                    }
                }
            }
        }
        .details_addres{
            ul{
                padding: 15px 0;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                li:nth-child(1){
                    align-self: flex-start;
                }
                li:nth-child(2){
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: flex-start;
                    align-content: space-between;
                    font-size: 12px;
                    span:nth-child(2){
                        font-size: 10px;
                        text-align: left
                    }
                }
                li:nth-child(3){
                    align-self: flex-start
                }
            }
        }
        .resume{
            position: relative;
            line-height: 20px;
            .title_text{
                font-size: 15px;
                color: #101D37;
                font-weight: bold;
                text-align: left;
                padding-bottom: 8px;
            }
            dt{
                font-size: 13px;
                color: #515A6B
            }
            
        }
        .Group_course{
            padding-top: 25px;
            .title_text{
                font-size: 17px;
                font-weight: bold;
                color: #101D37
            }
            #time{
                position: absolute;
                font-size:10px;
                color: red;
                top: 5px;
                z-index: 33;
            }
            .cours_list{
                .tabs_group{
                }
            }
        }
        .Private_education_stores{
                /* width: 100%; */
                /* position: relative; */
                height: 215px;
            .swiper_list{
            padding: 20px 0;
            /* position:absolute; */
            .swiper-slide{
                width:130px;
                margin-right: 10px;
                .swiper_list_dt{
                    border-radius: 5px;
                    ul{
                        display:flex;
                        flex-flow: column wrap;
                        justify-content: center;
                        align-content: center;
                        padding: 10px 0;
                        /* background-color: #1DCE74; */
                        border-radius: 5px;
                        color: #fff;
                        text-align: center;
                        li:nth-child(1){
                            width: 54px;
                            height: 54px;
                            border:2px solid #fff;
                            border-radius: 100%;
                            margin: 0 auto;
                            img{
                                width: 100%;
                                display: block;
                                height: 100%;
                                border-radius: 100%;
                            }
                        }
                        li:nth-child(2){
                            padding: 10px 0;
                            text-align: center;
                            span{
                                font-size: 15px;
                                font-weight:500
                            }
                        }
                        li:nth-child(3),
                        li:nth-child(4){
                            font-size: 12px;
                            padding-bottom: 5px;
                            text-align: center;
                            span{
                                text-align: center
                            }
                        }
                        li:nth-child(3){
                            span{
                                font-weight:500;
                            }
                        }
                        li:nth-child(4){
                            span{
                                font-size: 10px;
                            }
                            
                        }
                    }
                }
            }
        }
        }
        
        .Course_list{
            
            ul{
                padding: 15px 0;
                display: flex;
                justify-content: flex-start;
                flex-flow: row wrap;
                position: relative;
                li:nth-child(1){
                    width: 100px;
                    height: 80px;
                    padding-right: 15px;
                    border-radius: 5px;
                    img{
                        display: block;
                        max-width: 100%;
                        height: 100%;
                        border-radius: 5px;
                    }
                }
                li:nth-child(2){
                    display:flex;
                    flex-flow: column wrap;
                    justify-content: space-around;
                    align-content: space-between;
                    font-size: 12px;
                    color: #515A6B;
                    span:nth-child(1){
                        font-size: 15px;
                        color: #101D37;
                        font-weight: bold;
                    }
                }
                
                    .van-button{
                        height: 22px;
                        width: 60px;
                        border-radius: 30px;
                        position:absolute;
                        bottom: 15px;
                        right: 10px;
                        line-height: 0;
                        font-size: 10px;
                        color:#fff;
                    }
                
            }
            ul:last-child{
                .before{
                    height: 0;
                }
            }
        }
        .Training_camp{
            padding-top:25px;
            .title_text{
                font-size:17px;
                color: #101D37;
                font-weight: bold;
            }
            .Training_camp_list{
            
            padding-top:20px;
            ul{
                display:flex;
                flex-flow: column wrap;
                justify-content: flex-start;
                margin-bottom: 15px;
                border-radius: 5px;
                box-shadow: 0 3px 5px #ccc;
                padding-bottom: 5px;
                li:nth-child(1){
                    height: 130px;
                    position:relative;
                    img{
                        width:100%;
                        border-radius: 5px 5px 0 0;
                        display: block;
                        height: 100%;
                    }
                    span{
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        background-color: rgba(0,0,0,.5);
                        font-size:10px;
                        color: #fff;
                        padding: 3px;
                        z-index: 22;
                        padding-left:10px;
                    }
                }
                li:nth-child(2){
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: flex-start;
                    padding: 8px 10px 8px;
                    span:nth-child(1){
                        font-size: 15px;
                        color: #101D37;
                        font-weight: 600;
                        padding-bottom: 5px;
                    }
                    span:nth-child(2){
                        font-size: 12px;
                        color:#1DCE74
                    }
                }
                li:nth-child(3){
                    padding: 8px 10px 10px;
                    font-size: 12px;
                    color: #515A6B;
                    display:flex;
                    flex-flow: column wrap;
                    justify-content: flex-start;
                    align-items: flex-start;
                    position: relative;
                    span:nth-child(1){
                        padding-bottom: 5px;
                    }
                    span:nth-child(2){
                        position: absolute;
                        right: 0;
                        top: 4px;
                        font-size: 10px;
                        z-index: 22;
                        height: 25px;
                        width: 65px;
                        background-color: #1DCE74;
                        color: #fff;
                        text-align: center;
                        line-height: 25px;
                        letter-spacing: 1px;
                    }
                }
            }
        }
        }
    }
</style>