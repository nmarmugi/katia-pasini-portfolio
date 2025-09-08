import { useEffect, useRef, useState } from "react";
import GlideJs from "@glidejs/glide";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Reviews() {
	const glideRef = useRef(null);
	const glideInstance = useRef(null);
	const [isDesktop, setIsDesktop] = useState(false);
	const [expandedCardId, setExpandedCardId] = useState(null);
	const [showAllMobile, setShowAllMobile] = useState(false);

	const reviews = [
		{ id: 1, iniziale: "P", name: "Pablo P.", role: "Software Engineer", review: "I have the pleasure of working with Katia Pasini, a highly skilled UX/UI designer. Katia consistently demonstrated exceptional design skills and a deep understanding of user experience principles. Her ability to translate complex requirements into intuitive and visually appealing designs is truly impressive. Katia's attention to detail and commitment to delivering high-quality work make her an invaluable asset to our team. She is always proactive in seeking feedback and iterating on her designs to ensure they met the needs of our users." },
		{ id: 2, iniziale: "I", name: "Iacopo B.", role: "Full Stack Developer", review: "Katia è una UX/UI Designer straordinaria. Ho avuto il piacere di lavorare con lei e ogni progetto condiviso è stato un'esperienza fluida e gratificante. La sua capacità di unire estetica e funzionalità è impressionante: le sue creazioni non sono solo belle da vedere, ma sono anche intuitive e perfettamente strutturate.Precisione, velocità e attenzione ai dettagli sono tra i suoi punti di forza. Katia non si limita a realizzare un design accattivante, ma fornisce anche prototipi ben strutturati che facilitano il processo di sviluppo. Per chi, come me, si occupa del lato tecnico, lavorare con lei è un piacere: i suoi lavori sono chiari, ben organizzati e pensati per essere facilmente trasformati in codice.Apertura al confronto e crescita continua: uno degli aspetti che più ho apprezzato di Katia è la sua capacità di ascolto attivo. Accoglie feedback con entusiasmo e li trasforma in opportunità di miglioramento, rendendo il lavoro di squadra stimolante e leggero. La sua curiosità e voglia di perfezionarsi la rendono una professionista sempre in evoluzione.Se state cercando una UX/UI Designer capace di coniugare creatività e funzionalità con un approccio professionale e collaborativo, Katia è senza dubbio la persona giusta.”" },
		{ id: 3, iniziale: "A", name: "Azzurra D.", role: "Creative Copywriter", review: "Katia è una professionista puntuale e precisa, con un occhio attento a ogni dettaglio. La sua affidabilità e cura la rendono una collaboratrice preziosa, perfetta per rispettare le scadenze e rendere ogni pausa di lavoro un momento di ricarica. Non si basa mai solo sull'intuizione, preferendo supportare le sue decisioni con dati concreti che raccoglie direttamente sul campo. La sua energia è inesauribile: non si accontenta finché non ha testato le sue UX su centinaia di utenti, garantendo che ogni dettaglio sia impeccabile. La sua passione per l'analisi e la verifica continua la rende una risorsa inestimabile, sempre alla ricerca di miglioramenti e innovazioni basati su feedback reali.”" },
		{ id: 4, iniziale: "F", name: "Francesca B.", role: "Customer Success Specialist", review: "Katia è una collega molto professionale e competente nel campo del UX/UI design. Sa comprendere le esigenze degli utenti e tradurle in interfacce intuitive e funzionali. Sempre aggiornata sulle ultime tendenze, i suoi design sono moderni e pertinenti. È collaborativa e sfrutta al massimo i feedback dei clienti, trasformandoli in soluzioni pratiche ed efficaci. La sua dedizione e competenza la rendono una risorsa preziosa per il team.”" },
		{ id: 5, iniziale: "A", name: "Alessio F.", role: "Full Stack Developer", review: "Lavorare con Katia è stato un vero piacere sotto ogni punto di vista: umanamente e professionalmente parlando è una professionista a tutto tondo che non lascia spazio alle imprecisioni, posso testimoniare di aver raramente visto un'attenzione al dettaglio pari alla sua, che unita alla sua esperienza e alle sue soft skills compongono un profilo professionale che, a mio avviso, è un must-to-have di ogni azienda. È una grande lavoratrice che ha sempre dato il massimo per il team, e la suggerirei per ogni futuro impiego in questo ruolo o affini." },
		{ id: 6, iniziale: "A", name: "Andrea L.", role: "Sales Manager", review: "Katia è una seria professionista nel nostro team di prodotto. Come Direttore Commerciale, ho avuto modo di apprezzare il suo talento unico e il suo gusto raffinato. È puntuale, rigorosa e sempre all'altezza, superando spesso le aspettative.La sua attenzione ai dettagli e la dedizione nel garantire la massima qualità si riflettono in tutti i suoi lavori. È un equilibrio perfetto tra diritti e doveri.”" },
	];

	useEffect(() => {
		const checkScreenSize = () => {
			setIsDesktop(window.innerWidth >= 1024);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	useEffect(() => {
		if (isDesktop && glideRef.current && !glideInstance.current) {
			glideInstance.current = new GlideJs(glideRef.current, {
				type: "carousel",
				perView: 3,
				startAt: 0,
				focusAt: 0,
				gap: 20,
				rewind: false,
				perSwipe: 1,
			});
			glideInstance.current.mount();
		}
		return () => {
			if (glideInstance.current && !isDesktop) {
				glideInstance.current.destroy();
				glideInstance.current = null;
			}
		};
	}, [isDesktop]);

	useEffect(() => {
		if (glideInstance.current && isDesktop) {
			setTimeout(() => {
				glideInstance.current.update();
			}, 300);
		}
	}, [expandedCardId, isDesktop]);

	useEffect(() => {
		return () => {
			if (glideInstance.current) {
				glideInstance.current.destroy();
				glideInstance.current = null;
			}
		};
	}, []);

	const mobileReviews = showAllMobile ? reviews : reviews.slice(0, 3);

	return (
		<div id="references" className="bg-testBackground px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:px-10 gap-10">
				<div className="flex flex-col gap-4">
					<h2 className="font-inter text-text2 font-semibold text-2xl md:text-[40px] md:mb-2">
						Cosa dicono di me
					</h2>
					<p className="font-inter text-p text-lg md:text-[26px]">
						Collaborare bene è parte del mio lavoro. Ecco cosa raccontano di me le persone con cui ho condiviso processi, problemi e soluzioni.
					</p>
				</div>
				{isDesktop ? (
					<div ref={glideRef} className="glide w-full relative">
						<div className="glide__track overflow-hidden relative lg:pb-20" data-glide-el="track">
							<div className="glide__slides h-full">
								{reviews.map((r) => (
									<div key={r.id} className={`glide__slide bg-text2 rounded-xl p-5 min-h-[267px] flex flex-col gap-2 items-start font-inter relative transition-all duration-500 ease-in-out ${expandedCardId === r.id ? "max-h-[350px] overflow-y-auto shadow-lg" : "max-h-[300px] overflow-hidden justify-center"}`}>
										<img className="absolute right-4 top-2" src="/linkedin.svg" alt="Linkedin logo" />
										<div className="flex gap-2 items-center">
											<span className="text-xl font-semibold bg-testBackground rounded-full flex w-11 h-11 justify-center items-center">
												{r.iniziale}
											</span>
											<div className="text-sm font-medium text-testBackground">
												<h3>{r.name}</h3>
												<p>{r.role}</p>
												<img src="/stars.png" alt="Stars" />
											</div>
										</div>
										<p className="mt-2 whitespace-pre-line text-testBackground">
											"{expandedCardId === r.id ? r.review : r.review.length > 86 ? r.review.slice(0, 86) + "..." : r.review}
										</p>
										<button className="font-inter text-button underline mt-2" onClick={() => {setExpandedCardId(expandedCardId === r.id ? null : r.id);}}>
											{expandedCardId === r.id ? "Mostra meno" : "Leggi recensione completa"}
										</button>
									</div>
								))}
							</div>
						</div>
						{isDesktop && (
							<div className="glide__arrows absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-5 w-full z-10" data-glide-el="controls" style={{ pointerEvents: 'none' }}>
								<button data-glide-dir="<" className="text-3xl text-button hover:text-button transition-colors duration-200 focus:outline-none rounded-full p-1 shadow-md" aria-label="Previous slide" style={{ pointerEvents: 'auto' }}>
									<FaArrowCircleLeft />
								</button>
								<button data-glide-dir=">" className="text-3xl text-button hover:text-button transition-colors duration-200 focus:outline-none rounded-full p-1 shadow-md" aria-label="Next slide" style={{ pointerEvents: 'auto' }}>
									<FaArrowCircleRight />
								</button>
							</div>
						)}
					</div>
				) : (
					<div className="flex flex-col gap-5 w-full">
						{mobileReviews.map((r) => (
							<div key={r.id} className={`bg-text2 rounded-xl p-5 flex flex-col gap-2 text-text items-start font-inter relative overflow-hidden transition-all duration-500 ease-in-out ${expandedCardId === r.id ? "max-h-[1000px]" : "max-h-[300px]"}`}>
								<img className="absolute right-4 top-2" src="/linkedin.svg" alt="Linkedin logo"/>
								<div className="flex gap-2 items-center">
									<span className="text-xl font-semibold bg-background rounded-full text-testBackground flex w-11 h-11 justify-center items-center">
										{r.iniziale}
									</span>
									<div className="text-sm font-medium text-testBackground">
										<h3>{r.name}</h3>
										<p>{r.role}</p>
										<img src="/stars.png" alt="Stars" />
									</div>
								</div>
								<p className="mt-2 whitespace-pre-line text-testBackground">
									"{expandedCardId === r.id ? r.review : r.review.length > 86 ? r.review.slice(0, 86) + "..." : r.review}
								</p>
								<button className="font-inter text-button underline mt-2" onClick={() => {setExpandedCardId(expandedCardId === r.id ? null : r.id);}}>
									{expandedCardId === r.id ? "Mostra meno" : "Leggi recensione completa"}
								</button>
							</div>
						))}
						{reviews.length > 3 && (
							<button
								className="font-inter text-testBackground bg-button self-center px-3 py-2"
								onClick={() => setShowAllMobile((prev) => !prev)}
							>
								{showAllMobile ? "Mostra meno" : "Mostra tutte"}
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
