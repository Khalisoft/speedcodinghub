import { FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";
import Input from "../../components/Input";
import AuthLayout from "../../components/layouts/AuthLayout";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const Signup = () => {
	return (
		<AuthLayout title="Signup">
			<Input
				label="Fullname"
				placeholder="Enter your fullname"
				icon={<FiUser />}
			/>
			<div className="flex gap-2">
				<Input
					label="Password"
					placeholder="Enter your password"
					icon={<FiLock />}
					password
				/>
				<Input
					label="Confirm Password"
					placeholder="Enter your password again"
					icon={<FiLock />}
					password
				/>
			</div>
			<Input
				label="Email"
				placeholder="Enter your Email address"
				icon={<FiMail />}
			/>
			<Input
				label="Phone number"
				placeholder="Enter your Phone number"
				icon={<FiPhone />}
			/>
			<div className="my-4 flex items-center">
				<p className="w-full">
					Already have an account? <Link className="text-blue-800" to="/signin">Signin</Link>
				</p>
				<Button label="Signup" filled />
			</div>
		</AuthLayout>
	);
};

export default Signup;
