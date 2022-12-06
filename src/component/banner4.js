import { Component } from "react";
import styles from "../styles/banner4.module.scss";
import { CheckCircleOutlined,ArrowRightOutlined  } from "@ant-design/icons"


export default class Meet extends Component{
    render(){
        return(
            <div style={{backgroundColor:"rgb(250,231,230)",height:"800px"}}>
            <div className={styles.main} >
                <div className={styles.meet}>
                    <img className={styles.img1} src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png"/>
              
                    <p className={styles.one}>BEST FOOD MENU</p>
                    <p className={styles.two}>Meet Our Exclusive</p>
                    <p className={styles.two}>& Master Chefs</p>
                    <div style={{marginTop:"3rem"}}>
                    <p className={styles.three}><CheckCircleOutlined style={{color:"red",fontSize:"25px"}}/>25 Years of Experience in Restaurant Services</p>
                    <p className={styles.three}>in USA</p>
                    <p className={styles.three}><CheckCircleOutlined  style={{color:"red",fontSize:"25px"}}/>Any Kind Of Food Made For Customer and So </p>
                    <p className={styles.three}>Much Yamee $ Testy</p>
                    </div>
                    <div  style={{marginTop:"2rem"}}>
                    <p className={styles.four}>Sit amet consectetur adipiscing elitsue risus</p>
                    <p className={styles.four}>mauris quam adipiscing phasellus aene ante</p>
                    <p className={styles.four}>orcirat scelerisque enim ut nulla</p>
                    <button className={styles.btn}>BECOME A CHEFF<ArrowRightOutlined style={{fontSize:"20px",color:"white",marginLeft:"0.2rem"}}/></button>
                    </div>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"auto auto auto",marginRight:"5rem",gap:"1rem",marginTop:"5rem"}}>
                        <img className={styles.chefs} src="https://demo.webtend.net/html/qichen/assets/images/team/chef-1.jpg"/>
                        <img className={styles.chefs} src="https://demo.webtend.net/html/qichen/assets/images/team/chef-2.jpg"/>
                        <img className={styles.chefs} src="https://demo.webtend.net/html/qichen/assets/images/team/chef-3.jpg"/>
                        <img className={styles.chefs} src="https://demo.webtend.net/html/qichen/assets/images/team/chef-4.jpg"/>
                        <img className={styles.chefs} src="https://demo.webtend.net/html/qichen/assets/images/team/chef-5.jpg"/>
                        <img className={styles.chefs} src="https://demo.webtend.net/html/qichen/assets/images/team/chef-6.jpg"/>
                    </div>
                
            </div>
            </div>
        )
    }
}