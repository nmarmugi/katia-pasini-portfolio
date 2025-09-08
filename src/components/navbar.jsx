import { useState, useEffect } from "react";
import Hamburger from "./hamburger";
import CV from '../Curriculum-Vitae-Katia-P.pdf'

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const links = [
		{ href: "#about", label: "Chi sono" },
		{ href: "#projects", label: "Progetti" },
		{ href: "#references", label: "Referenze" },
		{ href: "#contacts", label: "Contatti" },
	];

	useEffect(() => {
		if (isOpen) {
			setShowMenu(true);
		} else {
			const timeout = setTimeout(() => setShowMenu(false), 500);
			return () => clearTimeout(timeout);
		}
	}, [isOpen]);

	return (
		<>
			<div className={`${isOpen ? "bg-text2" : 'bg-[#97D1E6]/70 backdrop-blur-xl'} h-[88px] md:h-[60px] flex justify-center items-center px-5 fixed top-0 w-full z-50`}>
				<div className="w-full max-w-[1440px] flex justify-between items-center">
					<h2 className={`font-caladea text-testBackground font-bold text-lg md:text-base transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
						Katia - UX/UI Designer
					</h2>

					<Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
					<div className={`hidden md:flex justify-center items-center gap-5 text-testBackground font-caladea font-bold text-base`}>
						{links.map((link) => (
							<a key={link.href} href={link.href}>
								{link.label}
							</a>
						))}
						<a href={CV} download className="p-2 px-3 text-md font-inter bg-white/10 backdrop-blur-xl text-testBackground">
							Scarica il mio CV
						</a>
					</div>
				</div>
			</div>

			{showMenu && (
				<div className={`fixed z-10 inset-0 bg-text2 flex flex-col justify-center items-center gap-8 text-testBackground font-caladea font-bold text-2xl transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}>
					{links.map((link, index) => (
						<a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`transition-all duration-500 ease-out transform ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${index * 100}ms` }}>
							{link.label}
						</a>
					))}
					<a href={CV} download className="p-2 px-3 text-md font-inter bg-white/10 backdrop-blur-xl text-testBackground">
						Scarica il mio CV
					</a>
				</div>
			)}
		</>
	);
}
