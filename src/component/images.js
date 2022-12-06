import { Component } from "react";
import styles from "../styles/images.module.scss";



export default class Images extends Component{
    render(){
        return(
            <div className={styles.instamain}>
                <div className={styles.insta}>
                <div><img className={styles.imgs}  src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-1.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-2.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-3.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-4.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-5.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-6.jpg"/></div>
                
                </div>
                <div className={styles.insta}>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-7.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-8.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-9.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-10.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-11.jpg"/></div>
                <div><img className={styles.imgs} src="https://demo.webtend.net/html/qichen/assets/images/instagram/insta-12.jpg"/></div>
                </div>
            </div>
        )
    }
}