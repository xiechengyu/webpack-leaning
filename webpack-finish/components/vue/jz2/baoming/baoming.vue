<template>
    <div class="baoming__box">
        <ul class="baoming__boxTab">
            <li class="active">单科报名</li>
            <li class="baoming__boxTab--right">全科报名</li>
        </ul>
        <div class="baoming__boxContent">
            <ul class="baoming__boxContent--danke">
                <li class="checkbox" data-pno="83701">
                    <i></i>建设工程施工管理
                </li>
                <li class="checkbox" data-pno=" 83702">
                    <i></i>建设工程法规及相关知识
                </li>
                <br />
                <li class="radio" data-pno="83703">
                    <i></i>建筑工程管理与实务
                </li>
                <li class="radio" data-pno="83707">
                    <i></i>机电工程管理与实务
                </li>
                <li class="radio" data-pno="83710">
                    <i></i>市政公用工程管理与实务
                </li>
                <li class="radio" data-pno="83705">
                    <i></i>公路工程管理与实务
                </li>
                <li class="radio" data-pno="83712">
                    <i></i>水利水电工程管理与实务
                </li>
            </ul>
            <ul class="baoming__boxContent--quanke">
                <li class="radio" data-pno="83704">
                    <i></i>建筑工程管理与实务
                </li>
                <li class="radio" data-pno="83708">
                    <i></i>机电工程管理与实务
                </li>
                <li class="radio" data-pno="83711">
                    <i></i>市政公用工程管理与实务
                </li>
                <li class="radio" data-pno="83706">
                    <i></i>公路工程管理与实务
                </li>
                <li class="radio" data-pno="83713">
                    <i></i>水利水电工程管理与实务
                </li>
            </ul>
            <div class="baoming__btn">
                <div class="baoming__btn--baoming">立即报名</div>
                <div class="baoming__btn--kf kf">咨询助教</div>
            </div>
        </div>
    </div>
</template>
<script>
import "./js/script.js";
export default {
    name: "baoming"
};
</script>

<style lang="less" scoped>
.baoming {
    &__box {
        width: 785px;
        margin: 0 auto;
        position: relative;
        &Tab {
            width: 370px;
            height: 60px;
            font-size: 0;
            position: absolute;
            top: -18px;
            left: 0;
            z-index: 2;
            li {
                width: 179px;
                height: 60px;
                background-image: linear-gradient(
                        90deg,
                        rgba(30, 146, 255, 0.99) 0%,
                        rgba(48, 123, 255, 0.99) 50%,
                        #4164ff 100%
                    ),
                    linear-gradient(#ffffff, #ffffff);
                background-blend-mode: normal, normal;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
                border-radius: 10px 10px 0 0;
                display: inline-block;
                text-align: center;
                font-size: 24px;
                line-height: 1;
                color: #25bc70;
                cursor: pointer;
                box-sizing: border-box;
                padding-bottom: 8px;
                color: #ffffff;
                padding-top: 19px;
                &.active {
                    background-image: linear-gradient(
                            90deg,
                            rgba(254, 150, 121, 0.99) 0%,
                            #ea633e 100%
                        ),
                        linear-gradient(#ffffff, #ffffff);
                    background-blend-mode: normal, normal;
                    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
                }
            }
            &--right {
                margin-left: 11px;
            }
        }
        &Content {
            position: relative;
            width: 785px;
            height: 300px;
            background-color: #ffffff;
            border-radius: 0px 10px 10px 10px;
            background: url(http://img.wangxiao.cn/bjupload/2019-07-03/a3eb4638-8010-4529-9864-df739063943e.png)
                no-repeat center top;
            background-size: cover;
            top: 42px;
            left: 0;
            z-index: 1;
            box-sizing: border-box;
            padding: 0 38px 30px 40px;
            ul {
                width: 100%;
                font-size: 0;
                li {
                    width: 33%;
                    display: inline-block;
                    font-size: 18px;
                    line-height: 1;
                    color: #333333;
                    margin-top: 38px;
                    cursor: pointer;
                    i {
                        display: inline-block;
                        width: 16px;
                        height: 17px;
                        border: solid 1px #333333;
                        margin-right: 15px;
                        vertical-align: middle;
                        &.active {
                            background: url(http://static.wangxiao.cn/zhuanti/2019jz1/vip/img/gou.png)
                                no-repeat center top;
                            background-size: 100%;
                        }
                        &.active1 {
                            background: url(http://static.wangxiao.cn/zhuanti/2019jz1/vip/img/gou.png)
                                no-repeat center top;
                            background-size: 100%;
                        }
                    }
                }
                &.baoming__boxContent--quanke {
                    display: none;
                }
            }
        }
    }
    &__btn {
        position: absolute;
        left: 0;
        bottom: 30px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        div {
            width: 177px;
            height: 51px;
            border-radius: 26px;
            border: solid 2px #e9623d;
            box-sizing: border-box;
            text-align: center;
            line-height: 1;
            padding-top: 11px;
            cursor: pointer;
            font-size: 24px;
            display: inline-block;
            margin: 0 66px 0 66px;
            color: #eb6440;
        }
    }
}
@media screen and (max-width: 767px) {
    .baoming {
        &__box {
            width: 17.225rem;
            height: 8.875rem;
            margin-top: 1.1rem !important;
            &Tab {
                width: 4.475rem + 4.475rem + 0.275rem;
                height: 1.5rem;
                top: 0.6rem;
                li {
                    width: 4.475rem;
                    height: 1.5rem;
                    font-size: 0.6rem;
                    padding-top: 0.475rem;
                    border-radius: 0.25rem 0.25rem 0 0;
                }
                &--right {
                    margin-left: 0.275rem;
                }
            }
            &Content {
                width: 100%;
                height: 7.5rem;
                border-radius: 0px 0.25rem 0.25rem 0.25rem;
                padding: 0.25rem 0 0.675rem 0.95rem;
                ul {
                    li {
                        font-size: 0.55rem;
                        margin-top: 0.65rem;
                        width: 50%;
                        i {
                            width: 0.4rem;
                            height: 0.425rem;
                            border: solid 0.025rem #333333;
                            margin-right: 0.375rem;
                        }
                    }
                }
            }
        }
        &__btn {
            bottom: 0.5rem;
            div {
                width: 4.425rem;
                height: 1.275rem;
                border-radius: 0.638rem;
                border: solid 0.05rem #e9623d;
                font-size: 0.6rem;
                padding-top: 0.325rem;
                margin: 0 1.65rem 0 1.65rem;
            }
        }
    }
}
</style>
