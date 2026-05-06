import headhunter from '../../public/images/headhunter.png'
import rajasthan from '../../public/images/between-the-fair-and-farewell.png'
import portraitOfHeadhunter from '../../public/images/portrait-of-headhunter.png'
import ao from '../../public/images/ao.png'
import potatoMonk from '../../public/images/monk-with-potatoes.png'
import outsideThePrayerHall from '../../public/images/outside-the-prayer-hall.png'
import { StaticImageData } from 'next/image'

export interface ArtworkInfo {
    id: string
    title: string
    size: string
    image: StaticImageData
    description: React.ReactNode
}

export const images: ArtworkInfo[] = [
    {
        id: 'the-last-headhunter',
        title: 'The Last Headhunter',
        size: "18'' x 20''",
        image: headhunter,
        description: (
            <>
                Nyeiwang Wangsa&apos;s face holds the weight of a fading era—one
                where the Konyak headhunters of Nagaland were warriors,
                protectors, and living symbols of their tribe&apos;s strength.
                Every deep line etched into his skin, every tattoo across his
                chest, speaks of a life shaped by tradition, conflict, and
                honor. His story is not just history; it is lived experience,
                carried with quiet dignity.
            </>
        ),
    },
    {
        id: 'between-the-fair-and-farewell',
        title: 'Between the Fair and Farewell',
        size: "24'' x 30''",
        image: rajasthan,
        description: (
            <>
                &apos;&apos;At the Pushkar Fair, he stood beside the camel
                he&apos;d cared for over the years. It might be time to bid
                farewell to his companion.&apos;&apos;
            </>
        ),
    },
    {
        id: 'portrait-of-a-headhunter',
        title: 'Portrait of a Headhunter',
        size: "18'' x 24''",
        image: portraitOfHeadhunter,
        description: (
            <>
                Portrait of a Headhunter i, 30”*24”, charcoal on canvas panel.
                Fun fact: The horn plugs (horns of an animal mithun) were
                inserted into stretched earlobes, a practice started in youth.
                The larger the plug, the greater the prestige of the warrior.
            </>
        ),
    },
    {
        id: 'ao',
        title: 'Ao',
        size: "36'' x 48''",
        image: ao,
        description: (
            <>
                The Ao Nagas are a major ethnic group native to mokokchung
                district of Nagaland. Traditional ornaments worn my women of
                this tribe includes necklace made of translucent carnelian glass
                beads and brass bugles. Ear rings are made with a tuft of cotton
                wool.
            </>
        ),
    },
    {
        id: 'monk-with-potatoes',
        title: 'Monk with Potatoes',
        size: "18'' x 24''",
        image: potatoMonk,
        description: (
            <>
                I met this young monk holding a bowl of sliced potatoes at
                Tawang monastery. He looked so calm and present, like he carried
                an old kind of wisdom. There was something so peaceful about
                that moment, the way he looked at me and the way he held the
                bowl.
            </>
        ),
    },
    {
        id: 'outside-the-prayer-hall',
        title: 'Outside the Prayer Hall',
        size: "18'' x 24''",
        image: outsideThePrayerHall,
        description: (
            <>
                This is a drawing of a young monk from Tawang monastery in
                Arunachal pradesh. He was quitely waiting outside the prayer
                hall before the morning rituals began. The sunlight hitting his
                face and his expression caught my attention.
            </>
        ),
    },
]
