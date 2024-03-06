import Image from 'next/image'

export default function OfferSec() {
    return (
        <div className="flex items-center justify-between mt-20">
            <div className="w-1/2">
                <h3 className="text-3xl font-bold mb-2">
                    Out team of registered nurses and skilled health care professionals provide
                    in-home nursing{' '}
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus laborum
                    ipsum suscipit sed recusandae velit quidem? Sint, neque enim?
                </p>
            </div>
            <div className="aspect-square relative w-1/3">
                <Image
                    src="/food/banner1.png"
                    alt="Offer Section"
                    fill
                    className="-z-10 drop-shadow-lg"
                />
                <div className="flex items-center justify-center align-middle p-4 bg-red-800 rounded-full aspect-square w-20 absolute right-3 font-bold text-white text-sm">
                    20% <br />
                    OFF
                </div>
            </div>
        </div>
    )
}
