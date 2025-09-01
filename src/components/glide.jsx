import { useEffect } from "react";
import GlideJs from "@glidejs/glide";

export default function Glide() {
	useEffect(() => {
		const glide = new GlideJs(".glide", {
			type: "carousel",
			startAt: 0,
			perView: 1,
		});

		const updateBullets = () => {
			const bullets = document.querySelectorAll(".glide__bullet");
			bullets.forEach((b) => b.classList.remove("bg-text"));
			const currentIndex = glide.index;
			if (bullets[currentIndex]) bullets[currentIndex].classList.add("bg-text");
		};

		glide.on(["mount.after", "move.after"], updateBullets);

		glide.mount();

		return () => glide.destroy();
	}, []);

	const glide = [
		{id: 1, src: '/glide1.png', title: 'App di Musica Classica', paragraph: "Sistema gamificato per l'apprendimento della musica classica con livelli, premi e percorsi personalizzati. Come Duolingo, ma per Mozart.", array: ['UX/UI Design', 'Mobile APP', 'Gamification'], secondTitle: 'Anno 2025', secondParagraph: 'Ruolo: UX/UI Designer freelance'},
		{id: 2, src: '/glide2.png', title: 'Mindfulness & Meditation App', paragraph: "App per meditazione e benessere mentale con programmi personalizzati, esercizi di respirazione e library di attività fisiche.", array: ['UX/UI Design', 'Mobile APP', 'Mental Health'], secondTitle: 'Anno 2023', secondParagraph: 'Ruolo: UX/UI Designer'},
		{id: 3, src: '/glide3.png', title: 'Easy Cassa', paragraph: "Interfaccia progettata per il registro di cassa con test condotti direttamente nei bar e ristoranti per garantire velocità e facilità d’uso nelle situazioni reali.", array: ['POS System', 'Dashboard', 'Cloud'], secondTitle: 'Anno 2019', secondParagraph: 'Ruolo: UI Designer e junior UX'},
		{id: 4, src: '/glide4.png', title: 'Dashboard farmacia', paragraph: "Piattaforma completa per la gestione di ordini, magazzino, fidelizzazione clienti e canali digitali. Design system scalabile e interfaccia ottimizzata.", array: ['Saas', 'Dashboard', 'UX/UI Design'], secondTitle: 'Anno 2021', secondParagraph: 'Ruolo: UX/UI Designer freelance'},
		{id: 5, src: '/glide5.png', title: 'Sito ristorante argentino', paragraph: "Sito web completo per ristorante argentino con focus sull'esperienza gastronomica autentica. Design che trasmette la passione e tradizione.", array: ['Website design', 'UX/UI Design'], secondTitle: 'Anno 2022', secondParagraph: 'Ruolo: UX/UI Designer'},
	];

	return (
		<div className="bg-glideBackground px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:px-10 gap-10">
				<div className="flex flex-col gap-4">
					<h2 className="font-inter text-text font-semibold text-2xl text-center md:text-[40px]">
						I miei progetti
					</h2>
					<p className="font-inter text-text text-lg text-center md:text-[26px]">
						Ogni progetto nasce da un’esigenza reale. Qui ti racconto come ho affrontato problemi concreti, collaborato con i team e raggiunto risultati, sempre con l’utente al centro.
					</p>
				</div>
				<div className="glide mb-0">
					<div className="glide__track mb-0" data-glide-el="track">
						<div className="glide__slides mb-0">
							{
								glide.map((gli => 
									<div key={gli.id} className="glide__slide flex flex-col md:flex-row justify-center items-center gap-5">
										<div className="w-full md:w-1/3 lg:w-1/2">
											<img src={gli.src} alt="Image Projects" />
										</div>
										<div className="flex flex-col gap-4 w-full md:w-2/3 lg:w-1/2">
											<div className="text-center md:text-start">
												<h3 className="font-inter text-text text-lg md:text-3xl font-semibold md:mb-2">
													{gli.title}
												</h3>
												<p className="font-inter text-text md:text-[22px]">
													{gli.paragraph}
												</p>
											</div>

											<div className="flex flex-wrap justify-center md:justify-start gap-2 md:mt-4 md:mb-4">
												{gli.array.map((tag, i) => (
													<span key={i} className="px-3 py-1 bg-text text-background rounded-full text-xs md:text-sm">
														{tag}
													</span>
												))}
											</div>

											<div className="bg-purpleGradient p-3 rounded-xl font-inter text-text text-xs font-light italic flex flex-col gap-1 md:text-lg">
												<h4>
													{gli.secondTitle}
												</h4>
												<p>
													{gli.secondParagraph}
												</p>
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>

					<div className="glide__bullets flex justify-center mt-7 md:mt-4 lg:mt-3 gap-3 !static !transform-none" data-glide-el="controls[nav]">
						{
							glide.map((gli, i) => 
								<button key={gli.id} className="glide__bullet w-3 h-3 rounded-full bg-gray-400 data-[active=true]:bg-text transition-colors" data-glide-dir={`=${i}`}></button>
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}
