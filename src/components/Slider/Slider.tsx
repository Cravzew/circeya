import styles from './Slider.module.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import swiper1 from '../../assets/images/swiper1.jpg'
import swiper2 from '../../assets/images/swiper2.jpg'
import swiper3 from '../../assets/images/swiper3.jpg'
import swiper4 from '../../assets/images/swiper4.jpg'
import swiper5 from '../../assets/images/swiper5.jpg'
import swiper6 from '../../assets/images/swiper6.jpg'
import swiper7 from '../../assets/images/swiper7.jpg'
import swiper8 from '../../assets/images/swiper8.jpg'

function Slider() {

    // state ismobile isdesktop is planshet i tak dalee
    return (
        <section className={styles.swiper}>
            <div className='container'>
                <h2 className={styles.swiperHeader}>
                    Lorem ipsum dolor sit amet
                </h2>
            </div>
            <Swiper
                slidesPerView={
                    matchMedia('(min-width: 1024px)').matches ? 4.5 : 1.2
                }
                spaceBetween={20}
                className={styles.swipers}
            >
                <SwiperSlide>
                    <div className={styles.swiperImageContent}>
                        <img src={swiper1} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperImageContent}>
                        <img src={swiper2} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperImageContent}>
                        <img src={swiper3} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperImageContent}>
                        <img src={swiper4} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperImageContent}>
                        <img src={swiper5} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperImageContent}>
                        <img src={swiper6} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperImageContent}>
                        <img src={swiper7} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiperImageContent}>
                        <img src={swiper8} alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Slider;