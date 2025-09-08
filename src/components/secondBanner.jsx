import Card from "./card";

export default function SecondBanner() {

	const updates = [
		{id: 1, label: 'Smashing Magazine'},
		{id: 2, label: 'Nielsen Norman Group'},
		{id: 3, label: 'Pinterest'},
		{id: 4, label: 'Marketing Espresso'},
		{id: 5, label: 'Learn'},
	];

	return (
		<div className="bg-thirdBackground px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-center items-center md:px-10 gap-8">
				<div className="flex justify-center md:justify-start w-full md:w-1/2">
					<img className="w-full max-w-[421px]" src="/secondBanner.png" alt='Image second banner' />
				</div>
				<div className="flex flex-col md:items-end gap-5 w-full md:w-1/2">
					<h2 className="font-inter text-2xl md:text-3xl text-text font-semibold md:text-end">
						Creo design che funzionano, non solo che piacciono.
					</h2>
					<p className="font-inter text-lg text-text md:text-end md:text-[22px]">
						10 anni tra le pagine dei libri e gli schermi digitali: dalla tipografia editoriale milanese alle startup che scalano il web. Oggi affianco i team tecnici con Figma in una mano e un caffè nell'altra.
					</p>
					<div className="md:max-w-[510px] mt-4 w-full flex justify-center">
						<Card bg={'fourthBackground'}>
							<h2 className="font-inter text-lg text-thirdBackground font-semibold text-center md:text-[22px]">
								Mi aggiorno costantemente su
							</h2>
							<div className="flex justify-center flex-wrap gap-2">
								{
									updates.map((update =>
									<span key={update.id} className="font-inter font-light text-text text-xs md:text-base p-1 bg-thirdBackground rounded-2xl">
										{update.label}
									</span>))
								}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
