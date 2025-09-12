import Card from "./card";
import { motion } from 'framer-motion';

export default function SecondBanner() {

	const updates = [
		{id: 1, label: 'Smashing Magazine'},
		{id: 2, label: 'Nielsen Norman Group'},
		{id: 3, label: 'Pinterest'},
		{id: 4, label: 'Marketing Espresso'},
		{id: 5, label: 'Learn'},
	];

	return (
		<div className="bg-testBackground px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col lg:flex-row justify-center items-center md:px-10 gap-8">
				<div className="flex justify-center lg:justify-start w-full lg:w-1/2">
					<img className="w-full max-w-[300px] md:max-w-[421px]" src="/secondBanner.svg" alt='Image second banner' />
				</div>
				<div className="flex flex-col lg:items-end gap-5 w-full lg:w-1/2">
					<h2 className="font-inter text-2xl md:text-[30px] text-text2 font-semibold lg:text-end">
						Creo design che funzionano, non solo che piacciono.
					</h2>
					<p className="font-inter text-lg text-p lg:text-end md:text-[22px]">
						10 anni tra le pagine dei libri e gli schermi digitali: dalla tipografia editoriale milanese alle startup che scalano il web. Oggi affianco i team tecnici con Figma in una mano e un caffè nell'altra.
					</p>
					<div className="lg:max-w-[510px] mt-4 w-full flex justify-center">
						<Card bg={'blueGradientVertical'}>
							<h2 className="font-inter text-lg text-testBackground font-semibold text-center md:text-[22px]">
								Mi aggiorno costantemente su
							</h2>
							<div className="flex justify-center flex-wrap gap-2">
								{updates.map((update, index) => (
									<motion.span
										key={update.id}
										className="font-inter text-testBackground text-xs md:text-base p-1 px-2 bg-text2 rounded-2xl font-semibold"
										initial={{ opacity: 0, y: 20, scale: 0.8, rotate: -5 }}
										whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
										transition={{
											type: "spring",
											stiffness: 150,
											damping: 10,
											delay: index * 0.1
										}}
										viewport={{ once: true, amount: 0.5 }}
									>
										{update.label}
									</motion.span>
								))}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
