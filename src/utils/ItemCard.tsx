import Image from 'next/image'
import { CartButton } from '.'
import { IconHeart } from './icons'

export default function ItemCard() {
    return (
        <div className="w-52 isolate bg-white/25 rounded-3xl">
            <div className="relative aspect-square -mt-20">
                <Image src="/food/1.png" alt="food" fill />
            </div>
            <div className="px-3 relative pb-8">
                <div className="flex justify-between items-center align-middle">
                    <h3 className="font-bold text-lg line-clamp-1">Crab Ramen</h3>
                    <div className="isolate bg-white/25 p-2 flex items-center justify-center rounded-full">
                        <IconHeart />
                    </div>
                </div>
                <p className="text-sm my-2 line-clamp-2">Testy food in town</p>
                <p className="font-bold">$24.00</p>
                <div className="absolute -bottom-5 right-3">
                    <CartButton />
                </div>
            </div>
        </div>
    )
}
