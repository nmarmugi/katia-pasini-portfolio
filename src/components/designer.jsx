import { useState } from "react";
import Card from "./card";

export default function Designer() {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className="bg-glideBackground px-5 py-10 flex justify-center items-center">
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
			</div>
		</div>
	);
}
