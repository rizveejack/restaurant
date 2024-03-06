import { CtaButton } from '@/utils'

export default function CtaSec() {
    return (
        <div className="mt-20">
            <div className="font-bold uppercase text-2xl text-gray-800">Lets Talk</div>
            <div className="flex justify-between items-center pb-8 border-b-2 border-white/35">
                <h3 className="font-bold text-4xl">Want To Reserve a Table?</h3>
                <CtaButton text="Reserve a Table" />
            </div>
            <p className="mt-8 max-w-2xl">
                Ready to take it to the next level? Let’s talk about your project or idea and find
                out how we can help your business grow. If you are looking for unique digital
                experiences that’s relatable to your users, drop us a line.
            </p>
        </div>
    )
}
