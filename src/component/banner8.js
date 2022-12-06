import { Component } from "react";
import styles from "../styles/banner8.module.scss"

export default class Reviews extends Component {
    render() {
        return(
            <>
                <div className={styles.bg}>
                    <p style={{textAlign:"center",color:"white",fontFamily:"sans-serif",paddingTop:"5rem"}}>FOODS REVIEWS</p>
                    <p style={{textAlign:"center",color:"white",fontFamily:"sans-serif",fontSize:"38px",margin:"0"}}>Global Customer Feedback</p>

                    <div className={styles.img1}><img style={{borderRadius:"50%"}} src="https://demo.webtend.net/html/qichen/assets/images/testimonial/thumb-1.jpg" /></div>
                    <div className={styles.img2}><img src="https://demo.webtend.net/html/qichen/assets/images/testimonial/thumb-2.jpg" /></div>
                    <div className={styles.img3}><img style={{borderRadius:"50%"}} src="https://demo.webtend.net/html/qichen/assets/images/testimonial/thumb-3.jpg" /></div>
                    <div><img src="https://demo.webtend.net/html/qichen/assets/images/shape/line-1.png" /></div>
                    <div className={styles.img4}><img src="https://demo.webtend.net/html/qichen/assets/images/shape/element-1.png" /></div>

                    <div className={styles.reviews}>
                    Lorem Ipsum is simply dummy text of t<br></br>
                    and typesetting industry. Lorem Ipsum<br></br>
                    industry's standard dummy text ever <br></br>
                    when an unknown printer took a galley<br></br>
                    and typesetting industry. Lorem Ipsum<br></br>
                    scrambled it to make a specimen book. 

                    <div className={styles.sub}>
                        <div><img style={{borderRadius:"50%",marginRight:"3rem"}} src="https://demo.webtend.net/html/qichen/assets/images/testimonial/author-thumb-1.jpg" /></div>
                        <div><p style={{fontSize:"30px",margin:"0"}}>Brian A.Barnes</p><p style={{fontSize:"16px",margin:"0"}}>CEO and Founder</p></div>
                    </div>

                    </div>
                </div>
            </>
        )
    }
}