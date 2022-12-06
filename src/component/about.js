


import { Component } from "react";

import styles from "../styles/about.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";

export default class About extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <img className={styles.arrow} src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                    <p className={styles.text1}>ABOUT QICHEN</p>
                    <p className={styles.text2}>The Best Tasty & Yamee</p>
                    <p className={styles.text}>Food and Chief Based on</p>
                    <p className={styles.text}>Italiano</p>
                    <p className={styles.text3}>Sit amet consectetur adipiscing elitsue risus mauris quam</p>
                    <p className={styles.text4}>neque adipiscing phasellus aenean ante orcirat scelerisque</p>
                    <p className={styles.text4}>enim ut nulla vestibulum velvitae ut at elementum mauris,</p>
                    <p className={styles.text4}>etiam ornare diame</p>
                    <button className={styles.button}>LEARN MORE<ArrowRightOutlined style={{ fontSize: "16px", color: "white" }} /></button>
                </div>
                <div style={{ marginLeft: "5rem", width: "420" }}><img className={styles.image1} src="https://demo.webtend.net/html/qichen/assets/images/about/image-1.jpg" /></div>
                <div style={{ width: "420", marginRight: "4rem" }} > <img className={styles.image2} src="https://demo.webtend.net/html/qichen/assets/images/about/image-2.jpg" /></div>
            </div>
        )
    }
}