export default function Footer() {

    const links = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "Chi sono" },
		{ href: "#projects", label: "Progetti" },
		{ href: "#references", label: "Referenze" },
		{ href: "#contacts", label: "Contatti" },
	];

    return (
        <div className="bg-thirdBackground px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:px-10 gap-5">
                <div className="w-full flex flex-col items-center lg:hidden gap-5">
                    <h2 className='font-caladea text-text font-bold text-lg'>
						Katia - UX/UI Designer
					</h2>
                    <div className="flex gap-3 items-center">
                        <a className="text-[25px]" href="#">
                            ✉️
                        </a>
                        <a className="text-[19px]" href="#">
                            📞
                        </a>
                        <a href="#">
                            <img className="w-6" src="/instagram.svg" alt="Instagram Logo" />
                        </a>
                        <a href="#">
                            <img className="w-7" src="/linkedin.svg" alt="Linkedin Logo" />
                        </a>
                    </div>
                    <div className={`flex flex-col justify-center items-center text-text font-caladea text-xl`}>
                        {links.map((link) => (
                            <a key={link.href} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="w-full hidden justify-between lg:flex gap-10">
                    <div className="w-1/2 flex flex-col items-start gap-2">
                        <h2 className='font-caladea text-text font-bold text-3xl'>
                            Katia - UX/UI Designer
                        </h2>
                        <p className='font-inter text-text text-lg'>
                            Dal cuore della Sicilia al cuore dei prodotti digitali. Amo semplificare, progettare con le persone, e affrontare ogni sfida con curiosità (e qualche post-it).
                        </p>
                    </div>
                    <div className="flex w-1/2">
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <h2 className='font-caladea text-text font-bold text-3xl'>
                                Navigazione
                            </h2>
                            <div className={`flex flex-col justify-center items-start text-text font-caladea text-lg`}>
                                {links.map((link) => (
                                    <a key={link.href} href={link.href}>
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-start gap-2">
                            <h2 className='font-caladea text-text font-bold text-3xl'>
                                Connessioni
                            </h2>
                            <div className="flex flex-col gap-2">
                                <a className="text-sm font-inter text-text" href="#">
                                    ✉️ pasini.katia94@gmail.com
                                </a>
                                <a className="text-sm font-inter text-text" href="#">
                                    📞 +39 3283024887
                                </a>
                                <a className="flex items-center gap-2 font-inter text-text" href="#">
                                    <img className="w-6" src="/instagram.svg" alt="Instagram Logo" />
                                    <span>
                                        Katia Pasini
                                    </span>
                                </a>
                                <a className="flex items-center gap-2 font-inter text-text" href="#">
                                    <img className="w-7" src="/linkedin.svg" alt="Linkedin Logo" />
                                    <span>
                                        katia_pasini_
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border border-text w-full" />
                <h4 className="text-text font-inter">
                    © 2025 Katia – Tutti i diritti riservati
                </h4>
            </div>
        </div>
    );
}
