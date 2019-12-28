import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./style.css"
import { Carousel } from 'antd';

export default class view extends Component {
    state={
        style:{
            background:"linear-gradient(rgba(1, 1, 1, 0.2) 0%, rgba(255, 255, 255, 0) 100%)"
        }
    }
    scrollFun=()=>{
        //console.log(document.getElementsByClassName("index")[0].scrollTop)
        if(document.getElementsByTagName("section")[0].scrollTop>100){
            this.setState({
                style:{
                    background:"linear-gradient(rgb(235, 22, 37) 0%, rgba(255, 255, 255, 0) 100%)"
                }
            })
        }else{
            this.setState({
                style:{
                    background:"linear-gradient(rgba(1, 1, 1, 0.2) 0%, rgba(255, 255, 255, 0) 100%)"
                }
            })
        }
    }
    render() {
        let {style}=this.state
        return (
            <div className="index" >
                <header style={style}>
                    <div className="h-kinds">
                        <i className="iconfont icon-fenlei"></i>
                    </div>
                    <div className="h-search">
                        <p>
                            <i className="iconfont icon-sousuo"></i>
                            <input type="text" placeholder="输入喜欢的宝贝名称"/>
                        </p>
                    </div>
                    <div className="h-login">
                        登录
                    </div>
                </header>
                <section   onScroll={()=>this.scrollFun()}>
                    <div className="banner">
                        <Carousel autoplay>
                            <div>
                                <img src="./img/b1.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/b1.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/b1.jpg" alt=""/>
                            </div>
                            
                        </Carousel>
                    </div>
                    <div className="s-kinds">
                        <dl>
                            <dt><img src="./img/1.png" alt=""/></dt>
                            <dd>分类</dd>
                        </dl>
                        <dl>
                            <dt><img src="./img/2.png" alt=""/></dt>
                            <dd>潮流女装</dd>
                        </dl>
                        <dl>
                            <dt><img src="./img/3.png" alt=""/></dt>
                            <dd>品牌男装</dd>
                        </dl>
                        <dl>
                            <dt><img src="./img/4.png" alt=""/></dt>
                            <dd>电脑办公</dd>
                        </dl>
                        <dl>
                            <dt><img src="./img/5.png" alt=""/></dt>
                            <dd>手机数码</dd>
                        </dl>
                    </div>
                    <h1>
                        ————潮流女装————
                    </h1>
                    <div className="shoe">
                        <div className="shoe-left">
                            <h1>高跟鞋女2018新款春季单鞋</h1>
                            <h2>精品打折</h2>
                            <img src="./img/s1.jpg" alt=""/>
                        </div>
                        <div className="shoe-right">
                            <dl>
                                <dd>
                                    <h1>欧美尖头蝴蝶</h1>
                                    <h2>品质精挑</h2>
                                </dd>
                                <dt>
                                    <img src="./img/s2.jpg" alt=""/>
                                </dt>
                            </dl>
                            <dl>
                                <dd>
                                    <h1>老爹鞋女韩版</h1>
                                    <h2>品质精挑4折起</h2>
                                </dd>
                                <dt>
                                    <img src="./img/s3.jpg" alt=""/>
                                </dt>
                            </dl>
                        </div>
                    </div>
                    <div className="shoe-btm">
                        <div>
                            <h1>小白鞋女2018</h1>
                            <div className="shoe-logo">
                                <img src="./img/d1.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥360.00</h3>
                        </div>
                        <div>
                            <h1>雪兰黛2018春</h1>
                            <div className="shoe-logo">
                                <img src="./img/d2.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥350.00</h3>
                        </div>
                        <div>
                            <h1>2018夏季新款</h1>
                            <div className="shoe-logo">
                                <img src="./img/d3.jpg" alt=""/>
                            </div>
                            <h2>￥300</h2>
                            <h3>￥375.00</h3>
                        </div>
                        <div>
                            <h1>2018新款韩版</h1>
                            <div className="shoe-logo">
                                <img src="./img/d4.jpg" alt=""/>
                            </div>
                            <h2>￥200</h2>
                            <h3>￥360.00</h3>
                        </div>
                    </div>
                    <h1>
                        ————品牌男装————
                    </h1>
                    <div className="shoe">
                        <div className="shoe-left">
                            <h1>新款短袖男是夏季3D立体图案</h1>
                            <h2 style={{textAlign:"center"}}>火爆开售</h2>
                            <img src="./img/y1.jpg" alt=""/>
                        </div>
                        <div className="shoe-left">
                            <h1>成人五分裤海边度假短裤男士</h1>
                            <h2 style={{textAlign:"center"}}>火爆开售</h2>
                            <img src="./img/y2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="shoe-btm">
                        <div>
                            <h1>男装棉麻休闲</h1>
                            <div className="shoe-logo">
                                <img src="./img/h1.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥360.00</h3>
                        </div>
                        <div>
                            <h1>牛仔裤男宽松</h1>
                            <div className="shoe-logo">
                                <img src="./img/h1.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥360.00</h3>
                        </div>
                        <div>
                            <h1>衣长：常规领</h1>
                            <div className="shoe-logo">
                                <img src="./img/h1.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥360.00</h3>
                        </div>
                        <div>
                            <h1>HARSHCREI</h1>
                            <div className="shoe-logo">
                                <img src="./img/d1.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥360.00</h3>
                        </div>
                    </div>
                    
                    <h1 style={{color:"green"}}>
                        ————电脑办公————
                    </h1>
                    <div className="shoe">
                        <div className="shoe-left">
                            <h1>酷睿i5四核GTX1060独显台</h1>
                            <h2>精品打折</h2>
                            <img src="./img/s1.jpg" alt=""/>
                        </div>
                        <div className="shoe-right">
                            <dl>
                                <dd>
                                    <h1>金属鼠标</h1>
                                    <h2>品质精挑</h2>
                                </dd>
                                <dt>
                                    <img src="./img/s2.jpg" alt=""/>
                                </dt>
                            </dl>
                            <dl>
                                <dd>
                                    <h1>微软ARC</h1>
                                    <h2>品质精挑4折起</h2>
                                </dd>
                                <dt>
                                    <img src="./img/s3.jpg" alt=""/>
                                </dt>
                            </dl>
                        </div>
                    </div>
                    <div className="shoe-btm">
                        <div>
                            <h1>美国</h1>
                            <div className="shoe-logo">
                                <img src="./img/d1.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥360.00</h3>
                        </div>
                        <div>
                            <h1>以诺双肩电脑</h1>
                            <div className="shoe-logo">
                                <img src="./img/d1.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥360.00</h3>
                        </div>
                        <div>
                            <h1>联想华硕神州</h1>
                            <div className="shoe-logo">
                                <img src="./img/d1.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥360.00</h3>
                        </div>
                        <div>
                            <h1>ETS六代 笔记</h1>
                            <div className="shoe-logo">
                                <img src="./img/d1.jpg" alt=""/>
                            </div>
                            <h2>￥288</h2>
                            <h3>￥360.00</h3>
                        </div>
                    </div>
                    <div className="tuijian">
                        <span>————————</span>&nbsp;&nbsp; 为您推荐&nbsp;&nbsp;  <span>————————</span>
                    </div>
                    <div className="clothes">
                        <dl>
                            <dt><img src="./img/c1.jpg" /></dt>
                            <dd>
                                <h1>
                                    冬装新品雪纺拼接流苏腰带长款连衣裙女
                                </h1>
                                <h2>
                                    ￥399.00
                                </h2>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="./img/c1.jpg" /></dt>
                            <dd>
                                <h1>
                                    冬装新品雪纺拼接流苏腰带长款连衣裙女
                                </h1>
                                <h2>
                                    ￥399.00
                                </h2>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="./img/c1.jpg" /></dt>
                            <dd>
                                <h1>
                                    冬装新品雪纺拼接流苏腰带长款连衣裙女
                                </h1>
                                <h2>
                                    ￥399.00
                                </h2>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="./img/c1.jpg" /></dt>
                            <dd>
                                <h1>
                                    冬装新品雪纺拼接流苏腰带长款连衣裙女
                                </h1>
                                <h2>
                                    ￥399.00
                                </h2>
                            </dd>
                        </dl>
                    </div>
                </section>
                <footer>
                    <NavLink exact to="/">
                        <dl>
                            <dt><i className="iconfont icon-shouye"></i></dt>
                            <dd>首页</dd>
                        </dl>
                    </NavLink>
                    <NavLink exact to="/shopcar">
                        <dl>
                            <dt><i className="iconfont icon-gouwuchekong"></i></dt>
                            <dd>购物车</dd>
                        </dl>
                    </NavLink>
                    <NavLink exact to="/my">
                        <dl>
                            <dt><i className="iconfont icon-wode"></i></dt>
                            <dd>我的</dd>
                        </dl>
                    </NavLink>
                </footer>
            </div>
        )
    }
}
