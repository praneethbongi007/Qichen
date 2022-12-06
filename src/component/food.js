// import { Component } from "react";
// import { StarOutlined } from "@ant-design/icons"
// import style from "../styles/about.module.scss"
// class Food extends Component {

//     render() {

//         return (
//             <div className={style.main}>
//                 <p>BEST FOOD MENU</p>
//                 <h1>Choose Your Best Menus</h1>
//                 <div className={style.container}>
//                     <div className="container1">
//                         <img src="https://demo.webtend.net/html/qichen/assets/images/menu/menu-single-1.jpg" />

//                     </div>
//                     <div className="container2">

//                         <div>

//                             <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-1.png" />
//                         </div>

//                         <div>
//                             <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-2.png" />

//                         </div>

//                         <div>
//                             <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-3.png" />

//                         </div>
//                         <div>
//                             <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-4.png" />

//                         </div>


//                     </div>
//                     <div className="container3">
//                         <div>
//                         <h1>Hamburger....................$25</h1>
//                         <p>Roasted langoustine, consommé</p>
//                         <p><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></p>
//                         </div>

//                         <div>
//                         <h1>Pizza...............................$25</h1>
//                         <p>Roasted langoustine, consommé</p>
//                         <p><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></p>
//                         </div>

//                         <div>
//                         <h1>Baked Chicken Wings..$25</h1>
//                         <p>Roasted langoustine, consommé</p>
//                         <p><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></p>
//                         </div>
//                         <div>
//                         <h1>Seafood Pizza.................$25</h1>
//                         <p>Roasted langoustine, consommé</p>
//                         <p><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></p>
//                         </div>

//                     </div>
//                 </div>

//             </div>


//         )

//     }



// }

// export default Food


import { Component } from "react";
import { StarFilled } from "@ant-design/icons"

import styles from "../styles/food.module.scss";

export default class Menu extends Component {
    render() {
        return (
            <div className={styles.menu}>
                <img className={styles.img1} src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                <img className={styles.img2} src="https://demo.webtend.net/html/qichen/assets/images/next-arrow.png"/>

                <div className={styles.food}><p >BEST FOOD MENU</p>
                </div>
                <div className={styles.choose}><p>Choose Your Best Menus</p></div>
                <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "5rem" }}>
                    <img className={styles.menuimg} src="https://demo.webtend.net/html/qichen/assets/images/menu/menu-single-1.jpg" />
                    <div className={styles.page} style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "space-evenly" }}><img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-1.png" />
                            <div style={{ marginLeft: "2rem" }}>
                                <p style={{ fontSize: "25px", marginTop: "1rem" }}>Hamburger.............................................................$25</p>
                                <p>Roasted langoustine, consommé</p>
                                <p style={{ fontSize: "20px", color: "orangered" }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />(5k REVIEWS)</p>
                            </div>
                        </div>



                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-2.png" />
                            <div style={{ marginLeft: "2rem" }}>
                                <p style={{ fontSize: "25px", marginTop: "1rem", marginLeft: "1rem" }}>Pizza.........................................................................$63</p>
                                <p style={{ marginLeft: "1rem" }}>Roasted langoustine, consommé</p>
                                <p style={{ marginLeft: "1rem", fontSize: "20px", color: "orangered" }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />(5k REVIEWS)</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-3.png" />
                            <div style={{ marginLeft: "2rem" }}>
                                <p style={{ fontSize: "25px", marginLeft: "1rem", marginTop: "1rem" }}>Baked Chicken Wings..........................................$199</p>
                                <p style={{ marginLeft: "1rem" }}>Roasted langoustine, consommé</p>
                                <p style={{ marginLeft: "1rem", fontSize: "20px", color: "orangered" }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />(5k REVIEWS)</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-4.png" />
                            <div style={{ marginLeft: "2rem" }}>
                                <p style={{ fontSize: "25px", marginTop: "1rem" }}>Seafood Pizza......................................................$352</p>
                                <p>Roasted langoustine, consommé</p>
                                <p style={{ fontSize: "20px", color: "orangered" }}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />(5k REVIEWS)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}