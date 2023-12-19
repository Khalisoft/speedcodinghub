const Button = (props) => {
	return <button onClick={()=>props.action()} className={`
    ${props?.filled && 'bg-primary text-white'} 
    ${props?.outline && 'border-2 border-primary text-primary'} 
    px-4 py-2 rounded-md hover:opacity-80 duration-300 w-full`}>{props?.label}</button>;
};

export default Button;
