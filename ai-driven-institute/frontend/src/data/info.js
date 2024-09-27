import aiInspection from "../assets/image/info_01.jpg";
import benefits from "../assets/image/info_02.jpg";
import technology from "../assets/image/info_03.jpg";
import implementation from "../assets/image/info_04.jpg";
import getstarted from "../assets/image/info_05.jpg";

const sections = [
	{
		title: "What is AI-Driven Inspection System?",
		content: [
			"An AI-driven inspection system utilizes artificial intelligence technologies to automate and enhance the accuracy of institutional inspections. It leverages image recognition, natural language processing, and machine learning to analyze data and provide actionable insights.",
			"By integrating AI into the inspection process, institutions can achieve higher efficiency, consistency, and accuracy in their evaluations, leading to improved outcomes and better decision-making.",
		],
		img: aiInspection,
		reverse: false,
	},
	{
		title: "Benefits of AI-Driven Inspections",
		content: [
			"Improved Accuracy: AI algorithms reduce human error and provide precise analysis.",
			"Enhanced Efficiency: Automated inspections save time and resources compared to manual methods.",
			"Consistency: AI ensures uniformity in inspections, minimizing variability.",
			"Data-Driven Insights: AI systems offer deep insights through data analysis, supporting informed decisions.",
		],
		img: benefits,
		reverse: true,
	},
	{
		title: "How Does the Technology Work?",
		content: [
			"AI-driven inspection systems utilize a combination of computer vision, machine learning, and data analytics to perform inspections.",
			"Computer vision algorithms analyze images and videos to detect anomalies or compliance issues.",
			"Machine learning models are trained on historical inspection data to improve accuracy and predict potential issues.",
			"Data analytics provide insights and trends to support strategic decision-making.",
		],
		img: technology,
		reverse: false,
	},
	{
		title: "Implementing AI in Inspections",
		content: [
			"Integration: Implementing AI involves integrating AI tools with existing inspection processes and systems.",
			"Training: Staff need training on how to use AI tools and interpret their results.",
			"Customization: AI systems may be customized to fit the specific needs and requirements of the institution.",
			"Evaluation: Regular evaluation and updates ensure the AI system continues to meet inspection goals effectively.",
		],
		img: implementation,
		reverse: true,
	},
	{
		title: "Get Started with AI-Driven Inspection System",
		content: [
			"Transform your institutional inspections with our advanced AI-driven system. Enhance accuracy, efficiency, and data-driven decision-making with cutting-edge technology.",
			"Contact us to learn more about implementation and how our system can benefit your institution.",
		],
		img: getstarted,
		reverse: false,
	},
];

export default sections;
