import { FiUser } from "react-icons/fi";
const AuthLayout = (props) => {
	return (
		<div className="w-[100vw] h-[100vh] bg-primary flex justify-center items-center ">
			<div className="w-[50%] h-[88%] bg-white rounded-xl">
				<div className="flex gap-2 items-center justify-center p-4">
					<div className="bg-primary w-12 h-12 flex justify-center items-center rounded-full">
						<FiUser className="text-white" size={24} />
					</div>
                    <h1 className="text-2xl text-center text-primary">{props.title}</h1>
				</div>
				<div className="px-8 py-4 flex flex-col gap-2"> {props.children}</div>
			</div>
		</div>
	);
};

export default AuthLayout;
