import Card from "./card";

export default function About() {

	const contentCards = [
		{ number: "10+", label: "Anni di sperimentazione e studio" },
		{ number: "500+", label: "Progetti tra wireframe, test, prototipi" },
		{ number: "100%", label: "Clienti con cui ho ”discusso” per un bottone" }
	];

	return (
		<div id="about" className="pt-[110px] pb-10 md:pb-20 bg-blueGradientOrizontal px-5 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex justify-between items-center md:px-10">
				<div className="flex flex-col items-center gap-4 w-full">
					<div className="flex items-center gap-5">
						<div className="flex flex-col items-center gap-1 md:gap-6">
							<h2 className="font-inter italic text-testBackground font-extralight mb-3 md:mb-0 md:text-[30px]">
								Dietro ogni pixel c'è una persona
							</h2>
							<div className="flex gap-2 items-end">
								<h2 className="font-inter text-testBackground font-semibold text-3xl md:text-[70px] md:h-12 h-10">
									Ciao
								</h2>
								<div className="flex justify-end md:w-28 md:h-12 w-20 h-10 rounded-full bg-[#97D1E6] p-[2px]">
									<img src="/katia-mobile.png" alt="Avatar Katia" />
								</div>
								<h1 className="font-inter text-testBackground font-semibold text-3xl md:text-[70px] md:h-12 h-10">
									sono Katia
								</h1>
							</div>
							<h2 className="font-inter text-testBackground font-semibold text-3xl md:text-[70px]">
								una UX/UI Designer
							</h2>
						</div>
					</div>
					<h3 className="font-inter text-center text-testBackground font-light md:text-2xl md:mt-8">
						Sono quella che ti chiederà: <span className="font-inter text-text font-medium">“Perché hai messo quel bottone proprio lì?”</span>
					</h3>
					<h3 className="font-inter text-center text-testBackground font-light md:text-2xl -mt-4">
						e che testerà la tua app con la nonna, per capire se è davvero intuitiva!
					</h3>
					<h3 className="font-inter text-testBackground text-center  font-light md:text-2xl">
						Quando non sono su Figma, <span className="font-inter text-text font-medium">recensisco ristoranti o passeggio con Brando,</span>
					</h3>
					<h3 className="font-inter text-testBackground text-center  font-light md:text-2xl -mt-4">
						il mio Jack Russell (molto critico).
					</h3>
					<div className="flex flex-col lg:flex-row items-start gap-4 w-full md:mt-8">
						{contentCards.map((card) => (
							<div className="lg:w-1/3 w-full flex flex-col items-center justify-center">
								<h4 className="font-inter text-testBackground font-bold text-3xl md:text-6xl">
									{card.number}
								</h4>
								<h4 className="font-inter text-testBackground italic font-light md:text-[30px] text-center">
									{card.label}
								</h4>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
