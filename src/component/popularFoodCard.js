import { Component } from "react";
import style from "../styles/popularFoodCard.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons"

export default class PopularFoodCard extends Component {
    constructor() {
        super();

    }
    handleClick = (args) => {

        console.log(args)

    }


    render() {
        const { data } = this.props
        console.log(data)

        return (
            <div className={style.imgg} style={{ display: "grid", gridTemplateColumns: "auto auto auto", backgroundColor: "orangered" }}>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", height: "150px", width: "350px", borderRadius: "10px", marginTop: "1rem", marginLeft: "3.5rem" }}>

                    <img style={{ marginRight: "1rem" }} src={data.img} />
                    <p style={{ fontFamily: "sans-serif", fontSize: "30px" }}>{data.text}</p>
                    <button style={{ border: "1px solid", height: "50px", width: "50px", borderRadius: "3px", marginLeft: "2rem" }} onClick={this.handleClick.bind(this, data)}><ArrowRightOutlined /></button>
                </div>
            </div>
        )

    }



}