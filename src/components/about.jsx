import { useState, useEffect } from "react";

export default function About() {
	const [isSwitchOn, setIsSwitchOn] = useState(false);
	const [typedCiao, setTypedCiao] = useState("");
	const [typedSonoKatia, setTypedSonoKatia] = useState("");
	const [typedDesigner, setTypedDesigner] = useState("");

	useEffect(() => {
		const ciao = "Ciao";
		if (typedCiao.length < ciao.length) {
			const timeout = setTimeout(() => {
				setTypedCiao(ciao.slice(0, typedCiao.length + 1));
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [typedCiao]);

	useEffect(() => {
		const sonoKatia = "sono Katia,";
		if (typedCiao === "Ciao" && typedSonoKatia.length < sonoKatia.length) {
			const timeout = setTimeout(() => {
				setTypedSonoKatia(sonoKatia.slice(0, typedSonoKatia.length + 1));
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [typedCiao, typedSonoKatia]);

	useEffect(() => {
		const designer = "una UX/UI Designer";
		if (typedSonoKatia === "sono Katia," && typedDesigner.length < designer.length) {
			const timeout = setTimeout(() => {
				setTypedDesigner(designer.slice(0, typedDesigner.length + 1));
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [typedSonoKatia, typedDesigner]);

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
									{typedCiao}
								</h2>
								<div onClick={() => setIsSwitchOn(!isSwitchOn)} className="flex items-center cursor-pointer md:w-[100px] md:h-12 w-[84px] h-10 rounded-full bg-[#97D1E6] p-[2px]">
									<img src="/katia-mobile.png" alt="Avatar Katia" className={`w-10 h-10 md:w-12 md:h-12 transform transition-transform duration-300 ${isSwitchOn ? 'translate-x-0' : 'translate-x-full'}`} />
								</div>
								<h1 className="font-inter text-testBackground font-semibold text-3xl md:text-[70px] md:h-12 h-10">
									{typedSonoKatia}
								</h1>
							</div>
							<h2 className="font-inter text-testBackground font-semibold text-3xl md:text-[70px]">
								{typedDesigner}
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
