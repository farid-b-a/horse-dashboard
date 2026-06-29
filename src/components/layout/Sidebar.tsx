"use client";

import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const menu = [
    { label: "Home", icon: "🏠", path: "/" },
    { label: "Horses", icon: "🐎", path: "/horses" },
    { label: "Health", icon: "❤️", path: "/health" },
    { label: "Settings", icon: "⚙️", path: "/settings" },
];

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="absolute top-6 left-6">
            <Sheet open={open} onOpenChange={setOpen}>

                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="w-6 h-6" />
                    </Button>
                </SheetTrigger>

                <SheetContent
                    side="left"
                    className="!w-64 bg-zinc-950 text-white border-zinc-800"
                >
                    <div className="mt-10 space-y-6">

                        <h2 className="text-xl font-bold pl-3">
                            Menu
                        </h2>

                        <nav className="space-y-6">
                            {menu.map((item) => {
                                const active = pathname === item.path;

                                return (
                                    <div
                                        key={item.path}
                                        onClick={() => {
                                            router.push(item.path);
                                            setOpen(false);
                                        }}
                                        className={`
                                                  flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer
                                                  backdrop-blur-md transition-all duration-200 ease-out
                                                  hover:translate-x-1 hover:bg-white/10 text-xl hover:mx-2
                                                  ${active ? "bg-white/15 mx-2 text-white" : "text-zinc-300"}
                                                `}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                );
                            })}
                        </nav>

                    </div>
                </SheetContent>

            </Sheet>
        </div>
    );
}