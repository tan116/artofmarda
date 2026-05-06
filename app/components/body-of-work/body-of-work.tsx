'use client'

import Image from 'next/image'
import { images } from '../../data/gallery-data'
import Link from 'next/link'

interface BodyOfWorkProps {
    showTitle?: boolean
}

const BodyOfWork = (props: BodyOfWorkProps) => {
    const { showTitle = true } = props

    return (
        <div className="container mx-auto py-12 flex flex-col items-center">
            {showTitle && (
                <h2 className="text-6xl font-bold my-8">Body of Work</h2>
            )}

            <div className="flex flex-row flex-wrap justify-center gap-16">
                {images.map((work, index) => (
                    <Link
                        key={index}
                        href={`/gallery/${work.id}`}
                        className="h-[75vh] mt-10 flex flex-col items-left"
                    >
                        <Image
                            src={work.image}
                            alt={work.title}
                            className="w-auto h-13/14 cursor-pointer object-cover shadow-lg"
                            unoptimized
                            loading="eager"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">
                                {work.title}
                            </h3>
                            <p className="text-gray-600">{work.size}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BodyOfWork
