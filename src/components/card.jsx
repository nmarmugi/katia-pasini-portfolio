export default function Card({children, border = false, bg}) {
	return (
		<div className={`bg-${bg ? bg : 'secondBackground'} ${border ? 'border' : ''} border-[#4B527A] flex flex-col justify-center items-center rounded-lg px-6 py-5 gap-2`}>
			{children}
		</div>
	);
}
