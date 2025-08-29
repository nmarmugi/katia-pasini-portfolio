import Card from "./card";

export default function About() {

		const contentCards = [
		{ number: "10+", label: "Anni di sperimentazione e studio" },
		{ number: "500+", label: "Progetti tra wireframe, test, prototipi" },
		{ number: "100%", label: "Clienti con cui ho ”discusso” per un bottone" }
	];

	return (
		<div id="about" className="pt-[93px] md:pt-[65px] pb-10 md:pb-20 bg-background px-5 flex justify-center items-center relative">
			<img className="hidden md:block absolute right-0 top-0 w-[30vw] max-w-[390px]" src="/katia.png" alt="Katia image" />
			<div className="w-full max-w-[1440px] flex justify-between items-center md:px-10">
				<div className="flex flex-col gap-4 w-full md:w-2/3">
					<div className="flex items-center gap-5">
						<img className="w-24 h-24 block md:hidden" src="/katia-mobile.png" alt='Katia image' />
						<div>
							<h2 className="font-inter italic text-text font-extralight text-sm md:text-2xl">
								Dietro ogni pixel c'è una persona
							</h2>
							<h1 className="font-inter text-text font-semibold text-3xl md:text-[40px]">
								Sono Katia, UX/UI Designer
							</h1>
						</div>
					</div>
					<h3 className="font-inter text-text font-light md:text-2xl">
						Sono quella che ti chiederà: <span className="font-inter text-text font-medium">“Perché hai messo quel bottone proprio lì?”</span> e che testerà la tua app con la nonna, per capire se è davvero intuitiva!
					</h3>
					<h3 className="font-inter text-text font-light md:text-2xl">
						🐶 Quando non sono su Figma, <span className="font-inter text-text font-medium">recensisco ristoranti o passeggio con Brando,</span> il mio Jack Russell (molto critico).
					</h3>
					<div className="flex flex-col lg:flex-row gap-4 w-full">
						{contentCards.map((card) => (
							<div key={card.number} className="w-full lg:w-1/3">
								<Card border={true}>
									<h4 className="font-inter text-text font-bold text-3xl">
										{card.number}
									</h4>
									<h4 className="font-inter text-text italic font-light text-xl text-center">
										{card.label}
									</h4>
								</Card>
							</div>
						))}
					</div>
					<div className="flex flex-col md:flex-row gap-4">
						<a href='#' className="p-2 rounded-md font-inter font-medium text-xl border-2 border-button bg-background flex justify-center text-button">
							Parliamo di UX/UI
						</a>
						<a href='#projects' className="p-2 rounded-md font-inter font-medium text-xl bg-button flex justify-center text-text">
							Scopri i miei progetti
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
