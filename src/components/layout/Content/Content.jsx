import { Aboutme } from "../../Aboutme/Aboutme";
import { Projects } from "../../Projects/Projects";

export const Content = () => {
	return (
		<div className="flex flex-column bg-gray-200 bg-opacity-5 rounded-[32px]">
			<Aboutme></Aboutme>
			<Projects></Projects>
		</div>
	);
};
