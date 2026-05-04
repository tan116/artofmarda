import Image from 'next/image'
import trophy from '../../../public/trophy.svg'

export const Awards = () => {
    const awards = [
        {
            title: 'Select 40',
            description: 'Portraits Society of America',
        },
        {
            title: "Hon'ble Mention Award",
            description: 'Strokes of Genius 17',
        },
        {
            title: 'Finalist',
            description: '18th Arc Salon',
        },
        {
            title: "Published under 'Master Showcase'",
            description: 'International Artist Magazine',
        },
        {
            title: "Published in 'Best of Drawing'",
            description: "Artist's Network",
        },
        {
            title: 'Exhibit at',
            description: 'The Royal Society of Portrait Painters, London',
        },
    ]

    return (
        <div className="mt-8 px-8 w-full">
            <div className="space-y-4 flex flex-row w-full justify-center flex-wrap gap-4">
                {awards.map((award, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-4"
                    >
                        {/* TODO: use different icon */}
                        <Image
                            src={trophy}
                            alt="Trophy"
                            className="w-12 h-12 mb-2"
                        />
                        <h3 className="font-semibold w-[15ch] mt-2">
                            {award.title}
                        </h3>
                        <p className="text-s font-light mt-1 w-[20ch]">
                            {award.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
