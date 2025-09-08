export default function ContactMe() {
    return (
        <div className="bg-testBackground px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:px-10 gap-10 md:gap-20">
				<div className="bg-blueGradientOrizontal w-full flex flex-col items-center justify-center gap-4 py-6 px-4 rounded-xl">
					<h4 className="text-testBackground font-inter font-semibold text-xl md:text-2xl text-center">
						Vuoi avere maggiori info sui progetti o conoscerne di nuovi?
					</h4>
					<a href={'#contacts'} className="p-2 px-3 text-md font-inter bg-white/10 backdrop-blur-xl text-testBackground">
						Contattami
					</a>
				</div>
            </div>
        </div>
    );
}
