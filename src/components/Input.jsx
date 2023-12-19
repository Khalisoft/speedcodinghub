const Input = (props) => {
	return (
		<div className="w-full relative">
			{props.label && <label className="text-gray-500">{props.label}</label>}
			<input
				type={props.password?"password":"text"}
                placeholder={props.placeholder}
				className="border-2 border-primary rounded-md w-full p-2 px-8"
			/>
			{props.icon && (
				<div className="absolute top-10 left-3 text-gray-500">{props.icon}</div>
			)}
		</div>
	);
};

export default Input;
