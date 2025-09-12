import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import ConfettiExplosion from 'react-confetti-explosion';

export default function Form() {
    const [state, handleSubmit] = useForm("movnyywl");
    const [showSuccess, setShowSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setIsExploding(true);
            setShowSuccess(true);
            setMessage("");
            setEmail("");
            setName("");
            const timer = setTimeout(() => {
                setShowSuccess(false);
                setIsExploding(false)
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    return (
        <div id='contacts' className="bg-testBackground px-5 py-10 flex justify-center items-center">
			<div className="w-full max-w-[1440px] flex flex-col justify-center items-center md:px-10 gap-10">
                <div className="w-full">
                    <h2 className="font-inter text-text2 font-semibold text-xl md:text-[40px] text-center mb-4 md:mb-6">
                        Per chi vuole costruire insieme, non solo “spuntare” task!
                    </h2>
                    <p className="font-inter text-p text-lg md:text-[26px] text-center">
                        Allora raccontami com’è oggi, cosa non funziona, e vediamo se possiamo lavorarci insieme.
                    </p>
                    <p className="font-inter text-p text-lg md:text-[26px] font-semibold text-center">
                        Non servono certezze, basta la voglia di parlarne.
                    </p>
                </div>
                <div className="w-full flex flex-col gap-5 lg:flex-row items-center justify-center">
                    <motion.div
                        className="bg-text2 p-6 rounded-md flex flex-col gap-5 w-full lg:w-1/2"
                        initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -2 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 18, duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h3 className="font-inter text-testBackground font-semibold text-lg md:text-3xl text-center mb-4">
                            Prima di contattarmi, rispondi a questa domanda:
                        </h3>
                        <p className="font-inter text-button md:text-[28px] text-center italic">
                            "Cosa rende frustrante l'esperienza utente nel tuo prodotto oggi?"
                        </p>
                        <p className="font-inter text-testBackground text-xs md:text-base font-light italic text-center">
                            PS: Se non rispondi alla domanda, il form non si invia. Sì, è una micro-interazione UX – ma funziona.
                        </p>
                    </motion.div>
                    <div className='w-full lg:w-1/2'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor="message" className="font-inter text-text2 md:text-xl">
                                    La tua risposta alla domanda qui sopra*
                                </label>
                                <textarea id="message" name="message" placeholder='Scrivi una risposta...' className='border-gray-300 border-2 rounded-md p-2 resize-none h-32 font-inter' minLength={50} required value={message} onChange={(e) => setMessage(e.target.value)}/>
                                <p className="font-inter text-text2 text-sm">
                                    {message.length}/50 caratteri minimi per inviare
                                </p>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <div className='w-full flex flex-col gap-3 lg:flex-row items-center justify-center'>
                                <div className='w-full flex flex-col gap-1 lg:w-1/2'>
                                    <label htmlFor="email" className="font-inter text-text2 md:text-lg">
                                        Email*
                                    </label>
                                    <input id="email" type="email" name="email" placeholder='Scrivi qui...' className='border-gray-300 border-2 rounded-md pl-2 py-1 font-inter' required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>
                                <div className='w-full flex flex-col gap-1 lg:w-1/2'>
                                    <label htmlFor="name" className="font-inter text-text2 md:text-lg">
                                        Nome Azienda
                                    </label>
                                    <input id="name" type="text" name="name" placeholder='Scrivi qui...' className='border-gray-300 border-2 rounded-md pl-2 py-1 font-inter' value={name} onChange={(e) => setName(e.target.value)} />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>
                            </div>
                            {
                                showSuccess &&
                                <span className="font-inter text-text text-xs md:text-base font-light italic">
                                    Grazie per avermi contattato!
                                </span>
                            }
                            {isExploding && <ConfettiExplosion force={0.6} duration={2500} particleCount={80} width={1000} />}
                            <div className='w-full'>
                                <button type="submit" disabled={state.submitting} className='w-full bg-blueGradientOrizontal text-testBackground py-2 px-3 text-xl md:text-[22px]'>
                                    Inviami un messaggio
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
