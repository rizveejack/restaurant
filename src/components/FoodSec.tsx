import { ItemCard } from '@/utils'

export default function FoodSec() {
    return (
        <div className="grid grid-cols-2 mt-20">
            <div className="flex flex-wrap gap-6">
                <ItemCard />
                <ItemCard />
            </div>
            <div>
                <h3 className="font-bold text-3xl mb-3">
                    We have Delicious food <br /> Testy food in town
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum, justo
                    in ultrices pretium, libero libero auctor libero, nec malesuada magna libero et
                    elit. Donec et malesuada magna. Donec et malesuada magna. Donec et malesuada
                </p>
            </div>
        </div>
    )
}
