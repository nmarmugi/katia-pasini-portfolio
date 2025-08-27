export default function Hamburger({ isOpen, setIsOpen }) {
	return (
		<div onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 flex justify-center items-center cursor-pointer relative bg-secondBackground rounded-full md:hidden">
			<svg className="w-8 h-8 absolute" viewBox="0 0 64 64">
				<circle cx="32" cy="32" r="30" fill="none" stroke="white" strokeWidth="2" strokeDasharray="188.4" strokeDashoffset={isOpen ? 0 : 188.4} className="transition-all duration-500 ease-out" />
			</svg>

			<div className="flex flex-col gap-1.5 relative z-10">
				<span className={`block h-0.5 bg-text rounded-sm transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 w-3" : "w-6"}`}></span>
				<span className={`block h-0.5 bg-text rounded-sm transition-all duration-300 ${isOpen ? "opacity-0 w-3" : "opacity-100 w-6"}`}></span>
				<span className={`block h-0.5 bg-text rounded-sm transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 w-3" : "w-6"}`}></span></div>
			</div>
	);
}
