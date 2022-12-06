import { Component } from 'react';
import styles from '../styles/footer.module.scss';

import { ArrowRightOutlined } from '@ant-design/icons';

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.container} >
                    <div>
                        <img src="https://demo.webtend.net/html/qichen/assets/images/logo/logo-white.png" style={{ height: "40px", marginTop: "10px", width: "160px", padding: "1rem", backgroundColor: "#DF3F00", fontSize: "12px" }} />
                        <p className={styles.sit}>Sit amet consectetur adipiscing</p>
                        <p className={styles.sit}>elitsue risus mauris adipis</p>
                        <p style={{ marginTop: "2rem" }}><input style={{ height: "40px", width: "180px", border: "none" }} type="mail" placeholder='Email Address' /><ArrowRightOutlined style={{ color: "orangered" }} /></p>
                    </div>
                    <div>
                        <p style={{ fontFamily: "Forum", fontSize: "26px" }}>Quick Links</p>
                        <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>About Company</a></p>
                        <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Home Shop</a></p>
                        <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Our Menu</a></p>
                        <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Shop (Ecom)</a></p>
                        <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Recipes</a></p>
                    </div>
                    <div>
                        <p style={{ fontFamily: "Forum", fontSize: "26px" }}>Products</p>
                        <div style={{ display: "flex", justifyContent: "space-around", gap: "15px" }}>
                            <div>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Hamburger</a></p>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Chicken Burger</a></p>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Vegetable Pizza</a></p>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Chicken Roll</a></p>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Ice-Cream</a></p>
                            </div>
                            <div>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Potato</a></p>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Organic Juice</a></p>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Lemon Juice</a></p>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Mutton Tikka</a></p>
                                <p><a className={styles.anc} style={{ marginTop: "1rem" }} href='#'>Seafoods</a></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p style={{ color: "gray", fontSize: "18px" }}>Call for order:</p>
                        <p className={styles.number}>+1 2586</p>
                        <p className={styles.number}>5892</p>
                        <p style={{ marginTop: "5px", fontSize: "16px", fontFamily: "sans-serif" }} className={styles.mail}>hello@example.com</p>
                        <p style={{ color: "gray", fontSize: "18px", marginTop: "20px" }}>Location :</p>
                        <p style={{ color: "black", fontSize: "19px", marginTop: "15px" }}>119 Tanglewood Lane</p>
                        <p style={{ color: "black", fontSize: "19px", marginTop: "10px" }}>Gulfport, MS 39503</p>
                    </div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.flexbox}>
                    <p style={{ color: "gray", fontSize: "17px", fontFamily: "sans-serif" }}>© 2022 Qichen, All Rights Reserved</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                        <p ><a className={styles.anc} href='#'>Setting & Privacy</a></p>
                        <p ><a className={styles.anc} href='#'>Faqs </a></p>
                        <p><a className={styles.anc} href='#'>Food Menu</a></p>
                    </div>
                </div>
            </div>
        )
    }
}