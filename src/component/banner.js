import { Component } from "react";
import styles from "../styles/banner.module.scss"

export default class Banner extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <h1>Crispy Chicken Burgers</h1>
                    <p>Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle</p>
                    <div className={styles.btn}>
                        <img src="https://demo.webtend.net/html/qichen/assets/images/down-arrow.png" />

                        <button>ORDER NOW</button>
                    </div>
                </div>
                <div className={styles.bg}>
                    <img src="https://demo.webtend.net/html/qichen/assets/images/hero/hero-1.jpg" />
                </div>
            </div>
        )
    }
}








// class Banner extends Component {
//     constructor() {
//         super();
//         this.this.state = {
//             value: 0

//         }

//     }
//     render() {

//         return (
//             <div>
//                 popular
//                 <button onClick={()=>this.setState({



//                 })}></button>
//             </div >

//         )

//     }



// }

// export default Banner