<template>
    <div class="slickWap">
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
                <img class="slickBot__item--img" :src="item" alt />
            </div>
        </div>
    </div>
</template>
<script>
import slick from "./js/slick.js";
export default {
    name: "slickWap",
    props: ["slickList", "smallImgList"],
    mounted() {
        //content7的轮播图
        const content7Slick = $(".slickWap .slickBox");
        const teacherSmall = $(".slickBot__item");
        content7Slick
            .slick({
                fade: true,
                arrows: false,
                autoplay: true
            })
            .on("afterChange", (slick, currentSlicde) => {
                const index = currentSlicde.currentSlide;
                teacherSmall
                    .eq(index)
                    .addClass("slick-active")
                    .siblings()
                    .removeClass("slick-active");
            });
        teacherSmall.each(index => {
            teacherSmall.eq(index).click(() => {
                teacherSmall
                    .eq(index)
                    .addClass("slick-active")
                    .siblings()
                    .removeClass("slick-active");
                content7Slick.slick("slickGoTo", index, false);
            });
        });
    },
    methods: {}
};
</script>

<style lang="less" scoped>
@import "./css/style.css";
.slick-active .slickBot__item--img {
    border: solid 0.05rem #e9663e;
    box-sizing: border-box;
    border-radius: 50%;
    opacity: 1 !important;
}
.slickWap {
    width: 17.25rem;
    position: relative;
    margin: 0 auto;
}
.slickBox {
    width: 17.25rem;
    // height: 8.05rem;
    margin: 0 auto;
    position: relative;
    &__item {
        width: 17.25rem;
        height: 8.05rem;
        background: url(http://img.wangxiao.cn/bjupload/2019-07-03/bf06e3a3-5296-41f7-b97f-4e7a6f001bdb.jpg)
            no-repeat center bottom;
        background-size: cover;
        position: relative;
        margin-top: 0.9rem;
        &--bigImg {
            margin-left: 0.45rem;
            height: 100%;
            width: auto;
        }
        &--right {
            width: 11rem;
            top: 0;
            vertical-align: top;
            box-sizing: border-box;
            padding-left: 0.7rem;
            position: absolute;
            right: 0;
        }
        &--name {
            font-size: 0.7rem;
            font-weight: bold;
            line-height: 1;
            color: #ff7800;
            margin-top: 0.6rem;
            margin-bottom: 0.3rem;
            span {
                font-size: 0.55rem;
                font-weight: normal;
                line-height: 1;
                color: #a8a8a8;
                vertical-align: bottom;
            }
        }
        &--word {
            span {
                font-size: 0.55rem;
                font-weight: bold;
                line-height: 1.2;
                color: #ff7800;
            }
            font-size: 0.55rem;
            line-height: 1.2;
            color: #ffffff;
            margin-bottom: 0.2rem;
        }
        &--btn {
            width: 3.1rem;
            height: 0.975rem;
            background-image: linear-gradient(
                0deg,
                #ea633e 0%,
                rgba(254, 150, 121, 0.99) 100%
            );
            box-shadow: 0rem 0rem 0.25rem 0rem rgba(0, 0, 0, 0.2);
            border-radius: 0.488rem;
            box-sizing: border-box;
            padding-top: 0.2rem;
            font-size: 0.6rem;
            line-height: 1;
            color: #ffffff;
            text-align: center;
            position: absolute;
            text-decoration: none;
            right: 0.425rem;
            top: 0.3rem;
        }
    }
}
.slickBot {
    width: 17.25rem;
    height: 5.7rem;
    margin-left: 0.5rem;
    margin-top: 0.625rem;
    &__item {
        width: 2.4rem;
        height: 2.4rem;
        display: inline-block;
        margin: 0 1.015rem 0.45rem 0;
        img {
            width: 100%;
            height: 100%;
            opacity: 0.5;
        }
        &--active {
            img {
                border: solid 0.05rem #e9663e;
                box-sizing: border-box;
                border-radius: 50%;
                opacity: 1 !important;
            }
        }
    }
}
.slick-dots {
    width: 17.25rem;
    height: 5.7rem;
    margin-left: 0.5rem;
    margin-top: 0.625rem;
    li {
        width: 2.4rem;
        height: 2.4rem;
        display: inline-block;
        margin: 0 1.015rem 0.45rem 0;
        button {
            display: none;
        }
        &--active {
            img {
                border: solid 0.05rem #e9663e;
                box-sizing: border-box;
                border-radius: 50%;
                opacity: 1 !important;
            }
        }
    }
}
</style>
<style scoped></style>
