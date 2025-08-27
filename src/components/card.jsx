export default function Card({children}) {
	return (
		<div className="bg-secondBackground border-2 border-[#4B527A] flex flex-col justify-center items-center rounded-lg px-6 py-5 gap-2 lg:min-h-[172px]">
			{children}
		</div>
	);
}
