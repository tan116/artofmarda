import Carousel from '@/app/components/carousel/carousel'

const ArtworkPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params

    return <Carousel activeImageId={id} />
    // return (
    //     <div>
    //         <div className="flex items-center justify-center h-[75vh] gap-24">
    //             <Image
    //                 src={images.find((work) => work.id === id)?.image || ''}
    //                 alt={images.find((work) => work.id === id)?.title || ''}
    //                 className="w-auto h-[100%] mx-10 overflow-scroll"
    //                 unoptimized
    //                 loading="lazy"
    //             />

    //             <div className="flex flex-col h-[100%]">
    //                 <h1>
    //                     {images.find((work) => work.id === id)?.title || ''}
    //                 </h1>
    //                 <p>{images.find((work) => work.id === id)?.size || ''}</p>
    //                 <p>
    //                     {images.find((work) => work.id === id)?.description ||
    //                         ''}
    //                 </p>
    //             </div>
    //         </div>

    //         <div className="h-20 flex flex-row fixed bottom-10 left-0 right-0 justify-center gap-10">
    //             {images.map((work) => {
    //                 return (
    //                     <Link
    //                         key={work.id}
    //                         href="/gallery/[id]"
    //                         as={`/gallery/${work.id}`}
    //                     >
    //                         <Image
    //                             src={work.image}
    //                             alt={work.title}
    //                             className="w-auto h-20 mx-10 overflow-scroll"
    //                             unoptimized
    //                             loading="lazy"
    //                         />
    //                     </Link>
    //                 )
    //             })}
    //         </div>
    //     </div>
    // )
}

export default ArtworkPage
