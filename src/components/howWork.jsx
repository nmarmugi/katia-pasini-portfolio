import { useState, useEffect } from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { LuArrowUpRight } from "react-icons/lu";
import { IoFlashOutline } from "react-icons/io5";
import { SlWrench } from "react-icons/sl";
import { IoMdTrendingUp } from "react-icons/io";

export default function HowWork() {
	const [activeModal, setActiveModal] = useState(null);

	const modalContent = [
		{
			src: "👥",
			title: "Troppi step, pochi utenti",
			problem: "Un'app mobile per la gestione delle finanze stava perdendo oltre il 60% degli utenti nei primi 2 minuti di utilizzo. L'onboarding era lungo, frammentato, e poco chiaro: troppe domande iniziali, poca percezione del valore.",
			sfida: "Un'app mobile per la gestione delle finanze stava perdendo oltre il 60% degli utenti nei primi 2 minuti di utilizzo. L'onboarding era lungo, frammentato, e poco chiaro: troppe domande iniziali, poca percezione del valore.",
			do: [
				"Mappatura del flusso esistente e analisi dei dati di abbandono",
				"Interviste rapide con utenti reali + heatmap",
				"Semplificazione e raggruppamento logico dei passaggi",
				"Prototipi testati con utenti + test",
			],
			result: [
				"Tempo medio per completare l'onboarding: -47%",
				"Aumento del completamento: +38%",
				'Feedback qualitativo positivo: "Finalmente un\'app che parte semplice"',
			],
		},
		{
			src: "🎨",
			title: "Come Canva, ma non troppo",
			problem: 'Il cliente voleva un editor grafico "come Canva", ma con funzionalità aggiuntive dedicate alle agenzie creative: modifica vettoriale, condivisione di prototipi, e un\'interfaccia che non fosse una copia.',
			sfida: "Come differenziarsi da un colosso senza confondere gli utenti? Serviva qualcosa che sembrasse subito familiare, ma che offrisse un vantaggio concreto in ambito professionale.",
			do: [
				"Analisi competitiva (Canva, Figma)",
				"Studio dei pattern ricorrenti e delle frizioni tipiche",
				"Progettazione di layout e flussi con approccio modular-first",
				"Introduzione di funzioni uniche: SVG editabile, condivisione rapida.",
			],
			result: [
				'Apprezzamento per l\'usabilità "già conosciuta"',
				"30% in meno di tempo per creare un prototipo",
				"Posizionamento chiaro: uno strumento per team che vogliono creare senza passare da mille tool",
			],
		},
		{
			src: "🎼",
			title: "Bach, ma con badge!",
			problem: "Il cliente desiderava un'app educativa che insegnasse a suonare e ascoltare la musica classica, con un'esperienza simile a Duolingo. Ma senza banalizzare il contenuto.",
			sfida: "Unire il rigore della musica classica con l'engagement del micro-learning. Dovevamo rendere l'apprendimento accessibile e coinvolgente, rispettando la profondità del tema.",
			do: [
				"Ricerca utenti: docenti, allievi...",
				"Ideazione di missioni tematiche, sfide audio, badge storici",
				"Creazione di una UI raffinata ma calda, con audio integrato",
				"Test con musicisti reali e iterazioni rapide",
			],
			result: [
				"+40% di completamento dei moduli rispetto al benchmark educativo",
				'Feedback positivi sul tono: "didattico ma non pesante"',
				'Tempo medio per sessione aumentato del 60%',
			],
		},
	];

	const cards = [
		{id: 1, src: '👥', title: 'Troppi step, pochi utenti', paragrph: 'Ridisegnare un onboarding che stava allontanando gli utenti prima ancora di iniziare.'},
		{id: 2, src: '🎨', title: 'Come Canva, ma non troppo', paragrph: 'Progettare un editor visivo che fosse familiare ma con superpoteri in più per le agenzie.'},
		{id: 3, src: '🎼', title: 'Bach, ma con badge!', paragrph: 'Una app per scoprire la musica classica come fosse un gioco. Gamification e bellezza...'},
	];

	useEffect(() => {
		if (activeModal !== null) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [activeModal]);

	return (
		<div className="bg-background px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:px-10 gap-10 md:gap-20">
				<div className="bg-glideBackground w-full flex flex-col items-center justify-center gap-4 py-6 px-4 rounded-xl">
					<h4 className="text-text font-inter font-semibold text-xl md:text-2xl text-center">
						Vuoi avere maggiori info sui progetti o conoscerne di nuovi?
					</h4>
					<a href={'#'} className="p-2 px-3 rounded-full text-md font-inter bg-button text-text">
						Contattami
					</a>
				</div>
				<div className="w-full flex flex-col items-start gap-2 md:gap-4">
					<h2 className="font-inter text-text font-semibold text-2xl text-center md:text-[40px]">
						Come lavoro - 3 storie vere
					</h2>
					<p className="font-inter text-text text-lg md:text-[26px] mb-2">
						Ogni progetto racconta qualcosa di diverso. Ecco come affronto le sfide reali, con metodo e un pizzico di creatività!
					</p>
					<div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3">
						{
							cards.map((card => 
								<div key={card.id} className="w-full lg:w-1/3 bg-secondBackground p-3 rounded-lg flex flex-col gap-2 text-text lg:h-[270px] justify-center text-lg md:text-[22px]">
									<span>
										{card.src}
									</span>
									<h3 className="font-semibold">
										{card.title}
									</h3>
									<p>
										{card.paragrph}
									</p>
									<button className="font-inter text-button flex items-center gap-1" onClick={() => setActiveModal(card.id - 1)}>
										Scopri il caso <LuArrowUpRight />
									</button>
								</div>
							))
						}
					</div>
				</div>
				<div className="bg-glideBackground w-full flex flex-col items-center justify-center gap-4 py-6 px-4 rounded-xl">
					<h4 className="text-text font-inter font-semibold text-xl md:text-2xl text-center">
						Vogliamo costruire un prodotto che piace davvero, a chi lo usa e a chi lo crea?
					</h4>
					<a href={'#'} className="p-2 px-3 rounded-full text-md font-inter bg-button text-text">
						Parliamo di come evitare i loop creativi
					</a>
					<span className="text-text font-inter font-light italic text-sm  md:text-base text-center">
						Perché il design migliore nasce dal dialogo tra chi lo pensa, chi lo costruisce e chi lo racconta.
					</span>
				</div>
			</div>
			{activeModal !== null && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setActiveModal(null)}>
					<div className="bg-white text-black rounded-xl p-6 w-[90%] max-w-5xl relative" onClick={(e) => e.stopPropagation()}>
						<button className="absolute top-3 right-3 text-xl" onClick={() => setActiveModal(null)}>
							<FiXCircle size={25} />
						</button>

						<div className="flex flex-col gap-4 font-inter font-light lg:text-2xl max-h-[90dvh] overflow-y-auto">
							<span className="text-2xl lg:text-[40px] lg:mt-4">
								{modalContent[activeModal].src}
							</span>
							<h2 className="font-inter font-semibold text-2xl lg:text-[40px] mt-2 mb-4 lg:mt-6 lg:mb-12">
								{modalContent[activeModal].title}
							</h2>
							<div className="bg-[#FFEEEE] flex flex-col p-3 lg:px-5 rounded-xl gap-2">
								<div className="flex items-center gap-1">
									<FiAlertCircle size={20} color="#B42318"/>
									<h3 className="font-semibold text-[#B42318]">Il problema</h3>
								</div>
								<p className="text-[#D20C0C]">{modalContent[activeModal].problem}</p>
							</div>

							<div className="bg-[#FFEFE0] flex flex-col p-3 lg:px-5 rounded-xl gap-2">
								<div className="flex items-center gap-1">
									<IoFlashOutline size={20} color="#DB6F10" />
									<h3 className="font-semibold text-[#DB6F10]">Sfida</h3>
								</div>
								<p className="text-[#F58C2F]">{modalContent[activeModal].sfida}</p>
							</div>

							<div className="flex flex-col lg:flex-row gap-4 w-full">
								<div className="bg-[#E0F6FF] flex flex-col p-3 lg:px-5 rounded-xl w-full lg:w-1/2 gap-2">
									<div className="flex items-center gap-1">
										<SlWrench size={20} color="#0D80A3" />
										<h3 className="font-semibold text-[#0D80A3]">Cosa ho fatto</h3>
									</div>
									<ul className="list-disc pl-5 text-[#3EA8C8]">
										{modalContent[activeModal].do.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</div>
								<div className="bg-[#E0FFF6] flex flex-col p-3 lg:px-5 rounded-xl w-full lg:w-1/2 gap-2">
									<div className="flex items-center gap-1">
										<IoMdTrendingUp size={20} color="#0DA36F" />
										<h3 className="font-semibold text-[#0DA36F]">Il risultato</h3>
									</div>
									<ul className="list-disc pl-5 text-[#19AE7B]">
										{modalContent[activeModal].result.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
