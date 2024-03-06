import IconArrow from './icons'

export default function CtaButton({ text, link }: { text: string; link?: string }) {
    return (
        <button className="bg-black text-white py-3 px-8 styleButton flex items-center space-x-3">
            <span>{text}</span>
            <IconArrow />
        </button>
    )
}
