import Card from "./card";

export default function UtilsAndLanguages() {

	const design = [
		{id: 1, label: 'Figma'},
		{id: 2, label: 'Sketch'},
		{id: 3, label: 'Adobe XD'},
		{id: 4, label: 'Photoshop'},
		{id: 5, label: 'Indesign'},
		{id: 6, label: 'Illustrator'},
		{id: 7, label: 'Lightroom'},
		{id: 8, label: 'Canva'}
	];

	const res = [
		{id: 1, label: 'Google Analytics'},
		{id: 2, label: 'Miro'},
		{id: 3, label: 'Maze'},
		{id: 4, label: 'Hotjar'},
		{id: 5, label: 'Bluedot'}
	];

	const orga = [
		{id: 1, label: 'Linear'},
		{id: 2, label: 'Slack'},
		{id: 3, label: 'GitHub'},
		{id: 4, label: 'Trello'},
		{id: 5, label: 'Notion'},
		{id: 6, label: 'Calendly'},
		{id: 7, label: 'WeTransfer'}
	];
    return (
        <div className="bg-testBackground px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:px-10 gap-10 md:gap-20">
                <div className="flex flex-col gap-6 lg:gap-10 w-full">
					<h3 className="font-inter text-text2 font-semibold text-2xl md:text-[40px] text-center">
						I miei strumenti di lavoro
					</h3>
					<div className="w-full flex flex-col items-center gap-8 lg:flex-wrap lg:flex-row lg:justify-center">
						<div className="w-full max-w-[356px] rounded-md">
							<Card bg={'blueGradientVertical'}>
								<div className="lg:min-h-[155px]">
									<div className="flex justify-start w-full mb-2">
										<h3 className="font-inter text-testBackground font-bold text-lg md:text-xl">
											Design & prototipazione
										</h3>
									</div>
									<div className="flex justify-start w-full flex-wrap gap-2 gap-y-3">
										{
											design.map((des =>
											<span key={des.id} className="font-inter text-testBackground bg-text2 text-xs md:text-base p-1 px-2 rounded-2xl font-semibold">
												{des.label}
											</span>))
										}
									</div>
								</div>
							</Card>
						</div>
						<div className="w-full max-w-[356px] rounded-md">
							<Card bg={'blueGradientVertical'}>
								<div className="lg:min-h-[155px]">
									<div className="flex justify-start w-full mb-2">
										<h3 className="font-inter text-testBackground font-bold text-lg md:text-xl">
											Ricerca e test
										</h3>
									</div>
									<div className="flex justify-start w-full flex-wrap gap-2 gap-y-3">
										{
											res.map((re =>
											<span key={re.id} className="font-inter text-testBackground bg-text2 text-xs px-2 md:text-base p-1 rounded-2xl font-semibold">
												{re.label}
											</span>))
										}
									</div>
								</div>
							</Card>
						</div>
						<div className="w-full max-w-[356px] rounded-md">
							<Card bg={'blueGradientVertical'}>
								<div className="lg:min-h-[155px]">
									<div className="flex justify-start w-full mb-2">
										<h3 className="font-inter text-testBackground font-bold text-lg md:text-xl">
											Organizzazione e sviluppo
										</h3>
									</div>
									<div className="flex justify-start w-full flex-wrap gap-2 gap-y-3">
										{
											orga.map((or =>
											<span key={or.id} className="font-inter px-2 text-testBackground bg-text2 text-xs md:text-base p-1 font-semibold rounded-2xl">
												{or.label}
											</span>))
										}
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6 lg:gap-10 w-full">
					<h3 className="font-inter text-text2 font-semibold text-2xl md:text-[40px] text-center">
						Competenze linguistiche
					</h3>
					<div className="w-full flex flex-col items-center gap-8 md:flex-row md:justify-center">
						<div className="w-full md:w-1/2">
							<Card bg={'greenish'}>
								<div className="flex justify-start w-full">
									<h3 className="font-inter text-text2 font-semibold text-[22px]">
										🇮🇹 Italiano
									</h3>
								</div>
								<div className="flex justify-start w-full">
									<h3 className="font-inter text-text2 font-medium text-lg">
										Madrelingua
									</h3>
								</div>
							</Card>
						</div>
						<div className="w-full md:w-1/2">
							<Card bg={'england'}>
								<div className="flex justify-start w-full">
									<h3 className="font-inter text-text2 font-semibold text-[22px]">
										🇬🇧 Inglese
									</h3>
								</div>
								<div className="flex justify-start w-full">
									<h3 className="font-inter text-text2 font-medium text-lg">
										Livello B2
									</h3>
								</div>
							</Card>
						</div>
					</div>
				</div>
            </div>
        </div>
    );
}
