import { Component } from "react"
import PopularFoodCard from "./popularFoodCard";
import styles from "../styles/popular.module.scss"

const data = [
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-1.png",
        text: "Pizza"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-2.png",
        text: "Burger"
    },

    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-3.png",
        text: "Bread"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-4.png",
        text: "Sea Food"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-5.png",
        text: "Coffe"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-6.png",
        text: "Chicken"
    }
]


class Popular extends Component {
    constructor() {
        super();
        this.state = {
            value: data

        }

    }
    render() {

        return (
            <div className={styles.bg} >
                <div style={{ backgroundColor: "orangered", width: "100%", paddingBottom: "5rem", textAlign: "center" }}>
                    <img className={styles.img1} src="https://demo.webtend.net/html/qichen/assets/images/white-prev-arrow.png" />
                    <img  className={styles.img2} src="https://demo.webtend.net/html/qichen/assets/images/white-next-arrow.png" />
                    <p style={{ paddingTop: "1rem", color: "white" }}>OUR POPULAR FOOD</p>
                    <h1 style={{ marginTop: "1rem", color: "white" }}>Best Category Foods Menu</h1>

                </div>

                <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
                    {this.state.value.map(e => {
                        return (


                            <PopularFoodCard data={e} />



                        )
                    })}
                </div>

                <div style={{ display: "flex", justifyContent: "center", backgroundColor: "orangered", width: "100%", paddingTop: "3rem", paddingBottom: "3rem" }}>
                    <p className="bg1" style={{ backgroundColor: "orangered", width: "400px", textAlign: "center", paddingTop: "3rem", border: "2px solid white", padding: "1rem", color: "white", width: "500px" }}>Need any Special Food or Any Birthday Cakes? Order Now</p>
                </div>
            </div >

        )

    }



}

export default Popular