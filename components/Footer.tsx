import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/monyflowersolo.id">
                        <FaInstagram className="text-white w-6 h-6" />
                    </a>
                    <a className="flex flex-col items-center justify-center" href="https://wa.me/6285608472865">
                        <FaWhatsapp className="text-white w-6 h-6" />
                        <span className="text-center mt-1">UMS</span>
                    </a>
                    <a className="flex flex-col items-center justify-center" href="https://wa.me/6285601654833">
                        <FaWhatsapp className="text-white w-6 h-6" />
                        <span className="text-center mt-1">UNS</span>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Website design & development: Endra Agustino</p>
            </aside>
        </footer>
    );
}