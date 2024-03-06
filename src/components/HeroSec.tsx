import { CtaButton } from '@/utils'
import { IconBeer, IconIceCream, IconNoodles, IconPizza } from '@/utils/icons'
import Image from 'next/image'
export default function HeroSec() {
    return (
        <div className="grid grid-cols-2">
            <div className="flex flex-col">
                <h3 className="font-bold text-6xl mt-10">
                    Delicious
                    <br /> Food is Wading
                    <br /> For you
                </h3>
                <div className="my-10">
                    <CtaButton text="View Menu" />
                </div>
                <div className="flex space-x-4 ">
                    <div className="flex items-center justify-center p-2 rounded-lg bg-white/25 shadow-md ring-1 ring-black/5">
                        <IconBeer />
                    </div>
                    <div className="flex items-center justify-center p-2 rounded-lg bg-white/25 shadow-md ring-1 ring-black/5">
                        <IconPizza />
                    </div>
                    <div className="flex items-center justify-center p-2 rounded-lg bg-white/25 shadow-md ring-1 ring-black/5">
                        <IconIceCream />
                    </div>
                    <div className="flex items-center justify-center p-2 rounded-lg bg-white/25 shadow-md ring-1 ring-black/5">
                        <IconNoodles />
                    </div>
                </div>
            </div>
            <div className="relative aspect-square -mr-36 -mt-36">
                <Image
                    src="/food/banner.png"
                    alt="banner"
                    fill
                    className="object-contain drop-shadow"
                />
            </div>
        </div>
    )
}
