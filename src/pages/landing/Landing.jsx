import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "./../../assets/logo.png";
const Landing = () => {
	const navigate = useNavigate();
	return (
		<div className="w-[100vw] h-[100vh] bg-orange-50 p-12 flex  items-center flex-col">
			<nav className="h-auto flex justify-start w-full">
				<img src={Logo} alt="" className="w-24" />
			</nav>
			<div className="flex flex-col justify-center items-center h-full w-full">
				<h1 className="text-4xl font-bold my-4">
					Welcome to <span className="text-primary">H</span>ub{" "}
					<span className="text-primary">P</span>ortal
				</h1>
				<p className="text-lg">
					Connect with friends and the world around you on Social Media
				</p>
				<p className="text-lg">
					Connect with friends and the world around you on Social Media and
					allies as well
				</p>

				<div className="flex flex-col w-1/2 gap-4 m-12">
					<Button label="Signin" filled action={() => navigate("/signin")} />
					<Button label="Signup" outline action={() => navigate("/signup")}/>
				</div>
			</div>
		</div>
	);
};

export default Landing;
