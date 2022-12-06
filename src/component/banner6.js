import { Component } from "react";
import logo from "../media/org.png"
import styles from "../styles/banner6.module.scss";

export default class Working extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.right}>
                <img className={styles.img1} src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />

                   <h3 style={{fontSize:"25px",display:"flex",justifyContent:"center",color:"orangered"}}>WORKING HOUR</h3>
                   <p className={styles.font} style= {{fontSize:"50px",display:"flex",justifyContent:"center"}}>Enjoy Our Foods From </p>
                   <p className={styles.font} style={{fontSize:"50px",display:"flex",justifyContent:"start",marginLeft:"1rem"}}>6 Days In a Week</p>
                   <p className={styles.date} >Monday - Friday................. 09am-6pm</p>
                   {/* <img className={styles.bg} src={logo}/> */}
                   <p className={styles.date}>Saturday .............................08am-7pm</p>
                   <p className={styles.date}>Sunday .....................................Closed</p>
                </div>
                <div className={styles.left}>
                    <img className={styles.img} src="https://demo.webtend.net/html/qichen/assets/images/bg/hours-bg-1.jpg "/>
                </div>
            </div>
        )
    }
}