<template>
    <div class="slickPc">
        <div class="slickBox">
            <div class="slickBox__item" v-for="item in slickList" :key="item">
                <img :src="item.bigImg" alt class="slickBox__item--bigImg" />
                <div class="slickBox__item--right">
                    <h3 class="slickBox__item--name">
                        {{ item.bigName }}
                        <span>{{ item.smallName }}</span>
                    </h3>
                    <p class="slickBox__item--word">
                        <span>主讲课程：</span>
                        {{ item.className }}
                    </p>
                    <p class="slickBox__item--word">
                        <span>教师资历：</span>
                        {{ item.introduction }}
                    </p>
                    <a
                        :href="item.url"
                        target="blank"
                        class="slickBox__item--btn"
                        >免费试听</a
                    >
                </div>
            </div>
        </div>
        <div class="slickBot">
            <div
                class="slickBot__item"
                v-for="item in smallImgList"
                :key="item"
            >
                <img :src="item" alt />
            </div>
        </div>
    </div>
</template>
<script>
import slick from "./js/slick.js";
export default {
    name: "slickBox",
    props: ["slickList", "smallImgList"],
    mounted() {
        $(".slickPc .slickBox").slick({
            arrows: false,
            asNavFor: ".slickBot",
            autoplay: true
        });
        $(".slickPc .slickBot").slick({
            slidesToShow: 4,
            prevArrow: '<div class="slickBot__left"></div>',
            nextArrow: '<div class="slickBot__right"></div>',
            asNavFor: ".slickBox",
            autoplay: true
        });
    }
};
</script>
<style lang="less" scoped>
@import "./css/style.css";
.slickPc {
    width: 1000px;
    height: 433px;
    position: relative;
    margin: 0 auto;
    margin-top: 80px;
}
.slickBox {
    width: 1000px;
    height: 433px;
    margin: 0 auto;
    position: relative;
    &__item {
        width: 1000px;
        height: 433px;
        background: url(http://img.wangxiao.cn/bjupload/2019-07-03/bf06e3a3-5296-41f7-b97f-4e7a6f001bdb.jpg)
            no-repeat center bottom;
        background-size: 100%;
        position: relative;
        &--bigImg {
            margin-left: 50px;
            height: 100%;
            width: auto;
        }
        &--right {
            width: 620px;
            vertical-align: top;
            box-sizing: border-box;
            padding-left: 40px;
            position: absolute;
            right: 0;
            top: 22px;
        }
        &--name {
            font-size: 36px;
            font-weight: bold;
            line-height: 1;
            color: #ff7800;
            margin-top: 38px;
            margin-bottom: 15px;
            span {
                font-size: 18px;
                font-weight: normal;
                line-height: 1;
                color: #a8a8a8;
                vertical-align: bottom;
            }
        }
        &--word {
            span {
                font-size: 18px;
                font-weight: bold;
                line-height: 1.3;
                color: #ff7800;
            }
            font-size: 18px;
            line-height: 1.3;
            color: #ffffff;
            margin-bottom: 10px;
        }
        &--btn {
            width: 129px;
            height: 41px;
            background-image: linear-gradient(
                0deg,
                #ea633e 0%,
                rgba(254, 150, 121, 0.99) 100%
            );
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
            border-radius: 21px;
            box-sizing: border-box;
            padding-top: 10px;
            font-size: 18px;
            line-height: 1;
            color: #ffffff;
            text-align: center;
            position: absolute;
            text-decoration: none;
            right: 45px;
            top: 55px;
        }
    }
}
.slickBot {
    width: 440px;
    height: 95px;
    position: absolute;
    bottom: 28px;
    right: 94px;
    &__item {
        img {
            opacity: 0.5;
        }
    }
}
</style>
<style>
.slick-arrow {
    width: 30px;
    height: 25px;
    position: absolute;
    top: 34px;
    cursor: pointer;
}
.slick-current img {
    opacity: 1 !important;
}
.slickBot .slick-current img {
    border: solid 2px #e9663e;
    box-sizing: border-box;
    border-radius: 50%;
}
.slickBot__left {
    background: url(http://img.wangxiao.cn/bjupload/2019-07-03/e6aa26cd-d7a4-4d3c-8013-4af01ff55163.png)
        no-repeat center top;
    background-size: 100%;
    left: 0;
    margin-left: -50px;
}
.slickBot__right {
    background: url(http://img.wangxiao.cn/bjupload/2019-07-03/2fc3df0b-6542-412a-a113-b630dbb7819a.png)
        no-repeat center top;
    background-size: 100%;
    right: 0;
    margin-right: -35px;
}
</style>
