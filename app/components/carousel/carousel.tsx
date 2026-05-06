'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import { ArtworkAndDescription } from '../artwork-and-description/artwork-and-description'

import styles from './carousel.module.css'
import { images } from '../../data/gallery-data'

const Carousel = ({ activeImageId }: { activeImageId: string }) => {
    const initialSlideIndex = images.findIndex(
        (image) => image.id === activeImageId
    )
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className={styles.swiper}
                initialSlide={initialSlideIndex}
                zoom={true}
            >
                {images.map((work) => (
                    <SwiperSlide
                        key={work.id}
                        className={styles.swiperSlide}
                    >
                        <ArtworkAndDescription artworkInfo={work} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel
