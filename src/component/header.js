import { Component } from "react";
import style from "../styles/header.module.scss"
import logo from "../media/logo-white.png";
import {SearchOutlined,MobileOutlined,DownOutlined } from "@ant-design/icons"
class Header extends Component {

render(){

 return(
<div className={style.container}>
<img className={style.logo} src={logo}/>

<ul className={style.list}>

<li>Home<DownOutlined style={{fontSize:"15px",marginLeft:"0.3rem"}}/></li>
<li>Menu<DownOutlined style={{fontSize:"15px",marginLeft:"0.3rem"}}/></li>
<li>About<DownOutlined style={{fontSize:"15px",marginLeft:"0.3rem"}}/></li>
<li>Shop<DownOutlined style={{fontSize:"15px",marginLeft:"0.3rem"}}/></li>
<li>Blog<DownOutlined style={{fontSize:"15px",marginLeft:"0.3rem"}}/></li>
<li>Pages<DownOutlined style={{fontSize:"15px",marginLeft:"0.3rem"}}/></li>
<li><SearchOutlined style={{fontSize:"20px"}}/></li>

</ul>

<p className={style.num}><MobileOutlined />000 (123) 456 89</p>
<p className={style.book}>BOOK A TABLE</p>

</div>

 )

}



}

export default Header