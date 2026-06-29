import Image from "next/image";


export default function Horses() {

    const races = [
        { id: 1, race: "Arabian", image: "/images/Arabian.png" },
        { id: 2, race: "Friesian", image: "/images/Arabian.png" },
        { id: 3, race: "Mustang", image: "/images/Arabian.png" },
        { id: 4, race: "Morgan", image: "/images/Arabian.png" },
    ]

    return (
        <div className="p-20 text-white">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {races.map((na) => (
                    <div
                        key={na.id}
                        className="bg-gradiant rounded-xl p-5 shadow-md
                                   hover:shadow-xl hover:scale-105
                                   transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex justify-center mb-3 ">

                            {na.image.startsWith("/") ? (
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/10">
                                    <Image
                                        src={na.image}
                                        alt={na.race}
                                        fill
                                        className="object-cover "
                                    />
                                </div>
                            ) : (
                                <div className="text-4xl">
                                    {na.image}
                                </div>
                            )}

                        </div>

                        <div className="text-center text-lg font-semibold">
                            {na.race}
                        </div>

                        <div className="text-center text-sm text-gray-300 mt-1">
                            Arabian Horse Breed
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}