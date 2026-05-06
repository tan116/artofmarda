import Image from 'next/image'
import { ArtworkInfo } from '../../data/gallery-data'

import styles from './artwork-and-description.module.css'

export const ArtworkAndDescription = ({
    artworkInfo,
}: {
    artworkInfo: ArtworkInfo
}) => {
    return (
        <div className={styles.artworkAndDescriptionContainer}>
            <Image
                src={artworkInfo.image}
                alt={artworkInfo.title}
                className={styles.swiperSlideImage}
                unoptimized
                loading="lazy"
            />

            <div className={styles.artworkInfoContainer}>
                <h1 className={styles.artworkName}>{artworkInfo.title}</h1>
                <div className={styles.divider}></div>
                <p className={styles.artworkSize}>{artworkInfo.size}</p>
                <p className={styles.artworkDescription}>
                    {artworkInfo.description}
                </p>
            </div>
        </div>
    )
}
