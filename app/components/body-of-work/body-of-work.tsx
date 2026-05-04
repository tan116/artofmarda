'use client'

import Image from 'next/image'
import headhunter from '../../../public/images/headhunter.avif'
import rajasthan from '../../../public/images/between-the-fair-and-farewell.avif'
import portraitOfHeadhunter from '../../../public/images/portrait-of-headhunter.avif'
import ao from '../../../public/images/ao.avif'
import potatoMonk from '../../../public/images/monk-with-potatoes.avif'
import outsideThePrayerHall from '../../../public/images/outside-the-prayer-hall.avif'

const BodyOfWork = () => {
    const works = [
        {
            title: 'The Last Headhunter',
            description: "18'' x 20''",
            image: headhunter,
        },
        {
            title: 'Between the Fair and Farewell',
            description: "24'' x 30''",
            image: rajasthan,
        },
        {
            title: 'Portrait of a Headhunter',
            description: "18'' x 24''",
            image: portraitOfHeadhunter,
        },
        {
            title: 'Ao',
            description: "36'' x 48''",
            image: ao,
        },
        {
            title: 'Monk with Potatoes',
            description: "18'' x 24''",
            image: potatoMonk,
        },
        {
            title: 'Outside the Prayer Hall',
            description: "18'' x 24''",
            image: outsideThePrayerHall,
        },
    ]

    return (
        <div className="container mx-auto py-12">
            <h2 className="text-5xl font-bold my-8">Body of Work</h2>

            <div className="flex flex-row flex-wrap justify-center gap-16">
                {works.map((work, index) => (
                    <div
                        key={index}
                        className="h-[75vh] mt-10 flex flex-col items-left"
                    >
                        <Image
                            src={work.image}
                            alt={work.title}
                            className="w-auto h-13/14 cursor-pointer object-cover shadow-lg transition-transform duration-300 hover:scale-107"
                            unoptimized
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">
                                {work.title}
                            </h3>
                            <p className="text-gray-600">{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BodyOfWork
