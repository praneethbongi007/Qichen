import { Component } from "react";
import styles from "../styles/banner7.module.scss";
import { UserOutlined,ArrowRightOutlined } from '@ant-design/icons';
import { Input, TimePicker } from 'antd';
import { DatePicker, Space } from 'antd';

export default class Booking extends Component {
    render() {
        const { RangePicker } = DatePicker;
        return (
            <div className={styles.container}>
                <div>
                    <img className={styles.img} src="https://demo.webtend.net/html/qichen/assets/images/contact/contact-1.jpg" />
                </div>
                <div className={styles.right}>
                <img className={styles.img1} src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />

                    <h3 style={{fontSize:"25px",display:"flex",justifyContent:"center",color:"orangered"}}>BOOKING TABLE</h3>
                    <p style= {{fontSize:"50px",display:"flex",justifyContent:"start",marginTop:"1rem",marginLeft:"5rem"}}>Make A Reservations</p>
                    <p style= {{fontSize:"20px",display:"flex",justifyContent:"start",marginTop:"1rem",marginLeft:"5rem"}}>Sit amet consectetur adipiscing elitsue risus </p>
                    <p style= {{fontSize:"20px",display:"flex",justifyContent:"start",marginTop:"1rem",marginLeft:"5rem"}}>mauris adipiscing phasellus aene ante orcirat</p>
                    <div className={styles.Input}>
                        <Input className={styles.inp} size="large" placeholder="Person" prefix={<UserOutlined className={styles.inp1}/>} />
                    </div>
                    <div className={styles.Input}>
                        <Space direction="vertical" size={20}>
                            <RangePicker  className={styles.inp} />
                        </Space>
                    </div>
                    <div className={styles.Input}>

                        <TimePicker.RangePicker  className={styles.inp} />
                    </div>
                    <div style= {{display:"flex",justifyContent:"start",marginTop:"1rem"}}>
                    <p className={styles.btn}>BOOK A TABLE<ArrowRightOutlined style={{fontSize:"20px",color:"white",marginLeft:"0.2rem"}}/></p>
                    </div>
                </div>
            </div>
        )
    }
}