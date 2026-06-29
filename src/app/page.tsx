import Image from "next/image";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white">

            <Sidebar />

            <div className="container mx-auto min-h-screen px-16 ">
                <div className="grid min-h-screen grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Equipment */}
                    <div className="group flex flex-col items-center text-center cursor-pointer">
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <Image
                                src="/images/Equipment.png"
                                alt="Horse Equipment"
                                width={500}
                                height={600}
                                className="h-[550px] w-full object-contain transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Center */}
                    <div className="group flex flex-col items-center text-center cursor-pointer">
                        <div className="overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src="/images/Breeds.png"
                                alt="Horse Breeds"
                                width={500}
                                height={600}
                                className="h-[600px] w-full object-contain  transition-all duration-500 group-hover:scale-105"
                            />
                        </div>

                    </div>

                    {/* Health */}
                    <div className="group flex flex-col items-center text-center cursor-pointer">
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <Image
                                src="/images/Healthcare.png"
                                alt="Horse Health"
                                width={500}
                                height={600}
                                className="w-full h-[550px] object-cover  transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                </div>

                <div>

                </div>
            </div>

        </div>
    );
}








// import Sidebar from "@/components/layout/Sidebar";
//
// export default function Home() {
//     return (
//         <div className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white">
//
//             <Sidebar />
//
//             <div className="flex min-h-screen items-center justify-center">
//                 <div className="text-center space-y-4">
//                     <h1 className="text-4xl font-bold">
//                         Horse Management System
//                     </h1>
//                     <p className="text-zinc-400">
//                         Modern dashboard with sidebar navigation
//                     </p>
//                 </div>
//             </div>
//
//         </div>
//     );
// }