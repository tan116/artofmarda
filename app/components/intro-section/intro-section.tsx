"use client";

import Image from 'next/image';
import bg from '../../../public/images/background.jpg';
import headhunter from '../../../public/images/headhunter.avif';
import styles from './intro-section.module.css';

export const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.backgroundImage} />
      <div className={styles.introSectionContent}>
        <div className={styles.introTextWrapper}>
        
          <h4 className="text-4xl font-bold mb-4 border-b py-6">The Last Headhunter</h4>
          <p className='max-w-lg'>
            Nyeiwang Wangsa&apos;s face holds the weight of a fading era—one where the Konyak headhunters of Nagaland were warriors, protectors, and living symbols of their tribe&apos;s strength. Every deep line etched into his skin, every tattoo across his chest, speaks of a life shaped by tradition, conflict, and honor. His story is not just history; it is lived experience, carried with quiet dignity.
            His hands, weathered by time and battle, bear the cost of his past. Nyeiwang lost his fingers in combat, each missing piece a silent testament to the fights he endured and survived. In one hand, he grips his dao—a blade once wielded in decisive moments of life and death. On his shoulder rests a rifle, a stark symbol of change, where old ways and modernity stand at odds yet coexist. The headdress, adorned with hornbill feathers, was worn only by warriors of rank—each feather a symbol of achievement.

            As I rendered every detail of this portrait, I felt the weight of his presence—his resilience, his identity, his transition from warrior to witness of a world that no longer resembles the one he once knew. Nyeiwang is among the last of his kind, carrying a legacy that may soon live only in stories, in ink, and on canvas.
          </p>
        </div>
        <Image src={headhunter} alt="Head Hunter" loading="eager"
        className={styles.introFeatureImage} unoptimized />
      </div>
    </section>
  );
};
