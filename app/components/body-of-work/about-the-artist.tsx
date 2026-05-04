'use client'

import Image from 'next/image'
import sumanthmarda from '../../../public/images/sumanth-marda.png'

export const AboutTheArtist = () => {
    return (
        <div className="container mx-auto px-12 py-12 mt-16 flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-16">About the Artist</h2>
            <div className="flex flex-row flex-wrap gap-8 items-top justify-center">
                <Image
                    src={sumanthmarda}
                    alt="Sumanth Marda"
                    className="h-[80vh] w-auto"
                />
                <div className="text-lg max-w-[50ch]">
                    Sumanth Marda is a fine artist based in Mumbai, India. He
                    works primarily in charcoal and oil, creating portraits that
                    explore the subtleties of emotion, identity, and culture.
                    With a Bachelor of Fine Art in Character Animation from the
                    Academy of Art University, San Francisco, Marda draws on his
                    background in gesture and expression to bring a deep sense
                    of life and presence to his subjects. His work is rooted in
                    classical technique yet shaped by contemporary observation,
                    often focusing on the quiet strength and dignity found in
                    everyday people. He received the Exceptional Merit Award
                    from the Portrait Society of America, was selected for the
                    Royal Society of Portrait Painters&apos; Drawing Prize
                    exhibition Revealing the Human, and earned an Honourable
                    Mention in Artists Network&apos;s Strokes of Genius 17: The
                    Best of Drawing. Marda&apos;s first solo exhibition, Art in
                    Reality, was held at Gallery 78 in Hyderabad in 2020. He is
                    currently exploring cultural, traditional, and tribal
                    identities across northern India, portraying communities
                    still deeply connected to their heritage, customs, and
                    beliefs.
                </div>
            </div>
        </div>
    )
}

export default AboutTheArtist
