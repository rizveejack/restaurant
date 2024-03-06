import { CartButton, LogoUtils } from '@/utils'

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <LogoUtils />
            <CartButton />
        </header>
    )
}
