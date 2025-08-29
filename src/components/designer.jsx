import { useState } from "react";
import Card from "./card";

export default function Designer() {
	const [showTooltip, setShowTooltip] = useState(false);

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
		<div className="bg-background px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:px-10 gap-10 md:gap-20">
				<div className="flex flex-col gap-3 w-full">
					<h2 className="font-inter text-text font-semibold text-2xl text-center md:text-[40px]">
						Dietro la Designer
					</h2>
					<p className="font-inter text-text text-lg text-center md:text-[26px]">
						Ogni grande designer ha un team. Il mio include <span className="font-bold">Brando, Chief Happiness Officer</span> e UX Consultant non ufficiale.
					</p>
					<div className="flex flex-col items-center lg:flex-row-reverse mt-3 lg:justify-center lg:mt-6 gap-4 lg:gap-10">
						<div className="flex w-full relative max-w-[470px]" onClick={() => setShowTooltip(!showTooltip)}>
							<img className="w-full max-w-[470px] lg:w-[470px] lg:min-h-[432.39px] cursor-pointer" src="/katia-brando.png" alt="Katia e Brando" />
							{
								showTooltip &&
									<img src="/Tooltip.png" alt="tooltip" className="absolute right-32 -top-5 w-52 lg:right-32 lg:-top-5"/>
							}
						</div>
						<div className="w-full flex justify-center max-w-[470px] lg:w-[470px] lg:min-w-[470px] lg:min-h-[432.39px]">
							<Card bg={'thirdBackground'}>
								<div className="flex justify-start w-full lg:mb-3">
									<h3 className="font-inter text-text font-semibold text-lg md:text-3xl">
										La Mia Design Philosophy
									</h3>
								</div>
								<div className="flex justify-start w-full lg:mb-5">
									<p className="font-inter text-text text-sm md:text-[22px] md:leading-[1.2]">
										Brando mi ha insegnato che le migliori interazioni sono quelle spontanee, genuine e che creano un sorriso. Ecco perché ogni mio progetto parte dalle emozioni, non dalle metriche.
									</p>
								</div>
								<div className="flex justify-start w-full p-2 bg-secondBackground rounded-md">
									<p className="font-inter text-text text-sm font-light italic md:text-lg">
										"Se un design non farebbe scodinzolare Brando di gioia, probabilmente non farà sorridere nemmeno i tuoi utenti."
									</p>
								</div>
							</Card>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6 lg:gap-10 w-full">
					<h3 className="font-inter text-text font-semibold text-2xl md:text-[40px] text-center">
						I miei strumenti di lavoro
					</h3>
					<div className="w-full flex flex-col items-center gap-8 lg:flex-wrap lg:flex-row lg:justify-center">
						<div className="w-full max-w-[356px] lg:min-h-[202px] bg-card1 rounded-md">
							<Card bg={'card1'}>
								<div className="flex justify-start w-full mb-2">
									<h3 className="font-inter text-text font-bold text-lg md:text-xl">
										Design & prototipazione
									</h3>
								</div>
								<div className="flex justify-start w-full flex-wrap gap-2">
									{
										design.map((des =>
										<span key={des.id} className="font-inter text-background bg-text text-xs md:text-base p-1 border border-text rounded-2xl">
											{des.label}
										</span>))
									}
								</div>
							</Card>
						</div>
						<div className="w-full max-w-[356px] lg:min-h-[202px] bg-card2 rounded-md">
							<Card bg={'card2'}>
								<div className="flex justify-start w-full mb-2">
									<h3 className="font-inter text-text font-bold text-lg md:text-xl">
										Ricerca e test
									</h3>
								</div>
								<div className="flex justify-start w-full flex-wrap gap-2">
									{
										res.map((re =>
										<span key={re.id} className="font-inter text-background bg-text text-xs md:text-base p-1 border border-text rounded-2xl">
											{re.label}
										</span>))
									}
								</div>
							</Card>
						</div>
						<div className="w-full max-w-[356px] lg:min-h-[202px] bg-card3 rounded-md">
							<Card bg={'card3'}>
								<div className="flex justify-start w-full mb-2">
									<h3 className="font-inter text-text font-bold text-lg md:text-xl">
										Organizzazione e sviluppo
									</h3>
								</div>
								<div className="flex justify-start w-full flex-wrap gap-2">
									{
										orga.map((or =>
										<span key={or.id} className="font-inter text-background bg-text text-xs md:text-base p-1 border border-text rounded-2xl">
											{or.label}
										</span>))
									}
								</div>
							</Card>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6 lg:gap-10 w-full">
					<h3 className="font-inter text-text font-semibold text-2xl md:text-[40px] text-center">
						Competenze linguistiche
					</h3>
					<div className="w-full flex flex-col items-center gap-8 md:flex-row md:justify-center">
						<div className="w-full md:w-1/2">
							<Card bg={'greenish'}>
								<div className="flex justify-start w-full">
									<h3 className="font-inter text-background font-semibold text-[22px]">
										🇮🇹 Italiano
									</h3>
								</div>
								<div className="flex justify-start w-full">
									<h3 className="font-inter text-background font-medium text-lg">
										Madrelingua
									</h3>
								</div>
							</Card>
						</div>
						<div className="w-full md:w-1/2">
							<Card bg={'england'}>
								<div className="flex justify-start w-full">
									<h3 className="font-inter text-background font-semibold text-[22px]">
										🇬🇧 Inglese
									</h3>
								</div>
								<div className="flex justify-start w-full">
									<h3 className="font-inter text-background font-medium text-lg">
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
