import { LogoUtils } from '@/utils'

export default function Footer() {
    return (
        <footer className="grid grid-cols-4 items-center mt-28">
            <LogoUtils />
            <div>
                <h3 className="font-black mb-2">Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                </ul>
            </div>
            <div>
                <h3 className="font-black mb-2">Community</h3>
                <ul>
                    <li>Blog</li>
                    <li>Forum</li>
                    <li>Help & Support</li>
                </ul>
            </div>
            <div>
                <h3 className="font-black mb-2">Legal</h3>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </footer>
    )
}
