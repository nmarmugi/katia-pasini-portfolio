export default function ContactMeTwo() {
    return (
        <div className="bg-testBackground px-5 py-10 flex justify-center items-center">
            <div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:px-10 gap-10 md:gap-20">
                <div className="bg-blueGradientOrizontal w-full flex flex-col items-center justify-center gap-4 py-6 px-4 rounded-xl">
                    <h4 className="text-testBackground font-inter font-semibold text-xl md:text-2xl text-center">
                        Vogliamo costruire un prodotto che piace davvero, a chi lo usa e a chi lo crea?
                    </h4>
                    <a href={'#contacts'} className="p-2 px-3 text-md font-inter bg-white/10 backdrop-blur-xl text-testBackground">
                        Parliamo di come evitare i loop creativi
                    </a>
                    <span className="text-testBackground font-inter font-light italic text-sm  md:text-base text-center">
                        Perché il design migliore nasce dal dialogo tra chi lo pensa, chi lo costruisce e chi lo racconta.
                    </span>
                </div>
            </div>
        </div>
    );
}
