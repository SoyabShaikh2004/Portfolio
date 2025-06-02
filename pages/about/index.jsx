import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { FaHtml5, FaCss3, FaJs, FaJava } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
	{
		title: "Skills",
		info: [
			{
				title: "Frontend Development",
				icons: [FaHtml5, FaCss3, SiTailwindcss, FaJs],
			},
			{
				title: "Backend Development",
				icons: [FaJava, SiSpringboot, SiMysql],
			},
		],
	},
	{
		title: "Projects",
		info: [
			{
				title: "Shoes Store",
				stage: (
					<a
						href="https://shoes-store-nike.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						shoes-store-nike.vercel.app
					</a>
				),
			},
			{
				title: "Kirana Billing",
				stage: (
					<a
						href="https://malik-kirana.netlify.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						malik-kirana.netlify.app
					</a>
				),
			},
			{
				title: "Cloth Store",
				stage: (
					<a
						href="https://looksay.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						looksay.vercel.app
					</a>
				),
			},
			{
				title: "Free Fire",
				stage: (
					<a
						href="https://freefiregame.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						freefiregame.vercel.app
					</a>
				),
			},
		],
	},
	{
		title: "Experience",
		info: [
			{
				title: "IT Teacher",
				stage: "One year of teaching experience at Shree Sai Classes.",
			},
		],
	},
	{
		title: "Education",
		info: [
			{
				title: "S.S.C",
				stage: "Z.P Kakani Vidyalaya, Malegaon. ➢ [ 75.40% ]",
			},
			{
				title: "H.S.C",
				stage: "Holy Family Jr College, Vasai East. ➢ [ 54.17% ]",
			},
			{
				title: "BSc IT",
				stage: "SKC Degree College Vasai West. ➢ [ 8.82 CGPI ]",
			},
		],
	},
];

const About = () => {
	const [index, setIndex] = useState(0);

	return (
		<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />

			{/* avatar img */}
			<motion.div
				variants={fadeIn("right", 0.2)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className="hidden xl:flex absolute bottom-0 -left-[370px]"
			>
				<Avatar />
			</motion.div>

			<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
				{/* text */}
				<div className="flex-1 flex flex-col justify-center">
					<motion.h2
						variants={fadeIn("right", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2"
					>
						Write <span className="text-accent">once,</span>
						<br /> Run anywhere.
					</motion.h2>
					<motion.p
						variants={fadeIn("right", 0.4)}
						initial="hidden"
						animate="show"
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
					>
						As a passionate developer, I began building websites and digital
						products during my academic years. Since then, I've completed
						multiple live projects, deployed on vercel, and continuously
						honed my skills to become industry-ready.
					</motion.p>

					{/* counters */}
					<motion.div
						variants={fadeIn("right", 0.6)}
						initial="hidden"
						animate="show"
						className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
					>
						<div className="flex flex-1 xl:gap-x-6">
							{/* experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={1} duration={5} />
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									Years of experience.
								</div>
							</div>

							{/* clients */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={2} duration={5} />
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									Satisfied clients.
								</div>
							</div>

							{/* projects */}
							<div className="relative flex-1">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={4} duration={5} />
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									Finished projects.
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* info */}
				<motion.div
					variants={fadeIn("left", 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
				>
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
						{aboutData.map((item, itemI) => (
							<div
								key={itemI}
								className={`${
									index === itemI &&
									"text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
								} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
								onClick={() => setIndex(itemI)}
							>
								{item.title}
							</div>
						))}
					</div>

					<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
						{aboutData[index].info.map((item, itemI) => (
							<div
								key={itemI}
								className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
							>
								{/* title */}
								<div className="font-light mb-2 md:mb-0">{item.title}</div>
								<div className="hidden md:flex">-</div>
								<div>{item.stage}</div>

								<div className="flex gap-x-4">
									{/* icons */}
									{item.icons?.map((Icon, iconI) => (
										<div key={iconI} className="text-2xl text-white">
											<Icon />
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
