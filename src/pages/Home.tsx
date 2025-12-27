import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import type { Post } from "../lib/posts";

type Project = {
	name: string;
	description: string;
	link?: string;
};

type Experience = {
	company: string;
	title: string;
	start: string;
	end: string;
	description?: string;
};

const experience: Experience[] = [
	{
		company: "TÜBİTAK",
		title: "Undergraduate Researcher (2247-C STAR)",
		start: "December 2025",
		end: "Present",
		description:
			"Investigating generative modeling approaches (GANs, diffusion models) for high-fidelity synthetic histopathology image generation. Building reproducible end-to-end experimentation workflows.",
	},
	{
		company: "Hagia Labs",
		title: "AI Engineer Working Student",
		start: "October 2025",
		end: "Present",
		description:
			"Developing agentic workflows and RAG systems for internal automation. Improved query accuracy by 38% and reduced manual review times significantly through AI-powered process efficiency.",
	},
	{
		company: "Sema Aviation",
		title: "Team Lead — AI Engineer",
		start: "March 2025",
		end: "December 2025",
		description:
			"Led a 30-member interdisciplinary team to design autonomous UAVs. Implemented real-time object tracking (YOLO-Seg + MobileSAM) and fault detection pipelines on NVIDIA Jetson hardware.",
	},
];

const projects: Project[] = [
	{
		name: "Python Documentation RAG Assistant",
		description:
			"A lightweight RAG assistant for Python docs using semantic chunking, transformer embeddings, and cross-encoder reranking. Achieved 77% top-3 accuracy and visualizes the pipeline via Streamlit.",
		link: "https://github.com/kaanrkaraman/rag-assistant", // Placeholder link based on project name if known, otherwise user can edit
	},
	{
		name: "Cortex — CNN from Scratch",
		description:
			"A modular CNN framework built entirely in pure NumPy. Implements backpropagation, convolution, pooling, and optimizers from first principles, achieving 89% accuracy on MNIST.",
		link: "https://github.com/kaanrkaraman/cortex",
	},
	{
		name: "Autonomous UAV System",
		description:
			"Real-time perception stack using ROS 2, RF-DETR, and Kalman filtering. Integrated sensor fusion and control pipelines for autonomous flight on embedded NVIDIA Jetson platforms.",
	},
];

function SectionHeading({ id, title }: { id: string; title: string }) {
	return (
		<h2 className="section-heading mb-6 group relative">
			<span className="absolute -left-6 opacity-0 group-hover:opacity-100 transition-opacity">
				<a href={`#${id}`} className="text-gray-400 hover:text-gray-900">
					#
				</a>
			</span>
			{title}
		</h2>
	);
}

export default function Home() {
	const [posts, setPosts] = useState<Post[]>([]);
	const { hash } = useLocation();

	useEffect(() => {
		(async () => setPosts(await getAllPosts()))();
	}, []);

	useEffect(() => {
		if (hash) {
			const element = document.getElementById(hash.replace("#", ""));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [hash]);

	const hasPosts = posts.length > 0;

	return (
		<div className="space-y-16">
			{/* Intro Section */}
			<section className="page-section">
				<div className="space-y-1 mb-6">
					<h1 className="section-heading">R. Kaan Karaman</h1>
					<p className="text-sm text-gray-600">B.Sc. in Computer Engineering</p>
					<div className="flex space-x-4 text-sm text-gray-500 pt-2">
						<a href="mailto:kaanrkaraman@gmail.com" className="hover:text-gray-900 hover:underline">
							Email
						</a>
						<a
							href="/CV.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-900 hover:underline"
						>
							CV
						</a>
						<a
							href="https://scholar.google.com/citations?user=KxUOqCMAAAAJ"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-900 hover:underline"
						>
							Scholar
						</a>
						<a
							href="https://linkedin.com/in/kaanrkaraman"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-900 hover:underline"
						>
							Linkedin
						</a>
					</div>
				</div>

				<p className="text-block">
					I am a Computer Engineering undergraduate and researcher specializing in Generative AI and
					Autonomous Systems. Currently, I serve as an Undergraduate Researcher at{" "}
					<strong>TÜBİTAK</strong>, investigating high-fidelity histopathology image generation
					using GANs and diffusion models.
				</p>

				<p className="text-block">
					Simultaneously, I work as an AI Engineer at <strong>Hagia Labs</strong>, where I develop
					agentic workflows and RAG pipelines to automate complex enterprise processes. My
					background is deeply rooted in robotics and embedded systems; I previously led a 30 member
					engineering team at <strong>Sema Aviation</strong>, deploying real-time perception stacks
					on NVIDIA Jetson hardware.
				</p>
			</section>

			<section id="publications" className="page-section pt-8">
				<SectionHeading id="publications" title="Publications" />
				<ul className="space-y-5 text-sm text-gray-700">
					<li>
						<a
							href="https://arxiv.org/abs/2512.18748"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-gray-900 hover:underline block group"
						>
							Code2Doc: A Quality-First Curated Dataset for Code Documentation
							<span className="inline-block ml-1 text-gray-400 group-hover:text-gray-900 transition-colors">
								↗
							</span>
						</a>
						<p className="mt-1 leading-relaxed">
							<span className="font-medium text-gray-800">Recep Kaan Karaman</span>, Meftun Akarsu
							<span className="text-gray-400 mx-2">•</span>
							2025
							<span className="text-gray-400 mx-2">•</span>
							arXiv:2512.18748 [cs.SE]
						</p>
					</li>
					<li>
						<a
							href="https://arxiv.org/abs/2511.16700"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-gray-900 hover:underline block group"
						>
							RAG-Driven Data Quality Governance for Enterprise ERP Systems
							<span className="inline-block ml-1 text-gray-400 group-hover:text-gray-900 transition-colors">
								↗
							</span>
						</a>
						<p className="mt-1 leading-relaxed">
							Sedat Bin Vedat, Enes Kutay Yarkan, Meftun Akarsu,{" "}
							<span className="font-medium text-gray-800">Recep Kaan Karaman</span>, Arda Sar, Çağrı
							Çelikbilek, Savaş Saygılı
							<span className="text-gray-400 mx-2">•</span>
							2025
							<span className="text-gray-400 mx-2">•</span>
							arXiv:2511.16700 [cs.DB]
						</p>
					</li>
				</ul>
			</section>

			{/* Experience Section */}
			<section id="experience" className="page-section pt-8">
				<SectionHeading id="experience" title="Experience" />
				<ul className="space-y-6 text-sm text-gray-700">
					{experience.map((exp, index) => (
						<li key={index} className="group">
							<div className="flex justify-between items-baseline mb-1">
								<h3 className="font-medium text-gray-900">{exp.company}</h3>
								<span className="text-sm text-gray-500 tabular-nums">
									{exp.start} — {exp.end}
								</span>
							</div>
							<div className="text-gray-800 mb-2">{exp.title}</div>
							{exp.description && <p className="leading-relaxed">{exp.description}</p>}
						</li>
					))}
				</ul>
			</section>

			{/* Projects Section */}
			<section id="projects" className="page-section pt-8">
				<SectionHeading id="projects" title="Projects" />
				<ul className="space-y-6 text-sm text-gray-700">
					{projects.map((project) => (
						<li key={project.name}>
							<p className="font-medium text-gray-900 flex items-baseline gap-2">
								{project.name}
								{project.link && (
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-gray-500 hover:underline tracking-tight font-normal"
									>
										source ↗
									</a>
								)}
							</p>
							<p className="mt-1 leading-relaxed">{project.description}</p>
						</li>
					))}
				</ul>
			</section>

			{/* Blog Section */}
			<section id="blog" className="page-section pt-8">
				<SectionHeading id="blog" title="Blog" />

				{hasPosts && (
					<p className="text-sm text-gray-700 leading-relaxed mb-6">
						I also publish technical writing on{" "}
						<a
							href="https://medium.com/@rkaankaraman"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-gray-900"
						>
							Medium
						</a>
						, where I write about model deployment, deep learning internals, and lessons from
						building embedded ML systems. The content here is cross-posted from there (and open
						source).
					</p>
				)}

				{hasPosts ? (
					<ul className="space-y-3">
						{posts.map((post) => (
							<li key={post.slug} className="text-sm">
								<span className="text-gray-500 mr-4">{post.date}</span>
								<Link to={`/${post.slug}`} className="text-gray-800 hover:underline">
									{post.title}
								</Link>
							</li>
						))}
					</ul>
				) : (
					<p className="text-sm text-gray-500 italic">
						Check{" "}
						<a
							href="https://medium.com/@rkaankaraman"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-gray-900"
						>
							Medium
						</a>{" "}
						for my latest writing.
					</p>
				)}
			</section>

			{/* Reading List Section */}
			<section id="reading" className="page-section pt-8">
				<SectionHeading id="reading" title="Recommended Reading" />

				<p className="text-block">
					These are papers, references, and books I revisit often — for their foundational insights,
					theoretical clarity, or relevance to my work in machine learning, robotics, and systems
					design.
				</p>

				<p className="text-block">
					I also spend time listening to and learning from researchers whose work and thinking have
					shaped the field. I regularly follow talks and writing by{" "}
					<span className="font-medium text-gray-900">Ilya Sutskever</span>, and I closely track the
					research of others like{" "}
					<span className="font-medium text-gray-900">Transformer Explainer</span>,{" "}
					<span className="font-medium text-gray-900">
						Neural Networks and Deep Learning (Michael Nielsen)
					</span>
					, <span className="font-medium text-gray-900">Chip Huyen&apos;s Blog</span>,{" "}
					<span className="font-medium text-gray-900">Lilian Weng&apos;s Blog</span>.
				</p>

				<h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Foundational Papers</h3>
				<ul className="reading-list">
					<li>
						<a
							href="https://arxiv.org/abs/1706.03762"
							className="underline hover:text-gray-900"
							target="_blank"
							rel="noopener noreferrer"
						>
							Attention Is All You Need (Vaswani et al., 2017)
						</a>{" "}
						— the original Transformer paper, foundational for sequence modeling and modern deep
						learning.
					</li>
					<li>
						<a
							href="https://arxiv.org/abs/1412.6980"
							className="underline hover:text-gray-900"
							target="_blank"
							rel="noopener noreferrer"
						>
							Adam: A Method for Stochastic Optimization (Kingma & Ba, 2014)
						</a>{" "}
						— widely-used optimizer with adaptive moment estimates; practically indispensable.
					</li>
				</ul>

				<h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Practical References</h3>
				<ul className="reading-list">
					<li>
						<a
							href="https://pytorch.org/tutorials/beginner/ptcheat.html"
							className="underline hover:text-gray-900"
							target="_blank"
							rel="noopener noreferrer"
						>
							PyTorch Cheat Sheet
						</a>{" "}
						— a quick reference I still glance at during prototyping.
					</li>
					<li>
						<a
							href="https://poloclub.github.io/transformer-explainer/"
							className="underline hover:text-gray-900"
							target="_blank"
							rel="noopener noreferrer"
						>
							Transformer Explainer (Polo Club of Data Science)
						</a>{" "}
						— an interactive visualization to learn how the Transformer model works.
					</li>
					<li>
						<a
							href="https://colah.github.io/posts/2015-09-Visual-Information/"
							className="underline hover:text-gray-900"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visual Information Theory (Chris Olah)
						</a>{" "}
						— a visual explanation of entropy, KL divergence, and information theory concepts.
					</li>
					<li>
						<a
							href="https://distill.pub/2016/misread-tsne/"
							className="underline hover:text-gray-900"
							target="_blank"
							rel="noopener noreferrer"
						>
							How to Use t-SNE Effectively (Distill.pub)
						</a>{" "}
						— a hands-on guide to interpreting and using t-SNE responsibly.
					</li>
					<li>
						<a
							href="https://github.com/rasbt/deeplearning-models"
							className="underline hover:text-gray-900"
							target="_blank"
							rel="noopener noreferrer"
						>
							Sebastian Raschka’s Deep Learning Model Implementations
						</a>{" "}
						— minimal PyTorch examples of ResNet, VGG, GANs, and others.
					</li>
					<li>
						<a
							href="https://karpathy.github.io/2019/04/25/recipe/"
							className="underline hover:text-gray-900"
							target="_blank"
							rel="noopener noreferrer"
						>
							A Recipe for Training Neural Networks (Karpathy)
						</a>{" "}
						— a distilled set of practical tips and pitfalls for neural net training.
					</li>
					<li>
						<a
							href="https://github.com/pytorch/examples"
							className="underline hover:text-gray-900"
							target="_blank"
							rel="noopener noreferrer"
						>
							PyTorch Official Examples Repository
						</a>{" "}
						— solid, idiomatic examples of classic models and training pipelines.
					</li>
				</ul>

				<h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Books I Recommend</h3>
				<ul className="reading-list">
					<li>
						<span className="font-medium text-gray-900">C++ Primer</span> by Stanley B. Lippman,
						Josée Lajoie, and Barbara E. Moo — a thorough and well-paced guide to modern C++, ideal
						for building foundational systems knowledge.
					</li>
					<li>
						<span className="font-medium text-gray-900">Designing Machine Learning Systems</span> by
						Chip Huyen — great for connecting ML theory to real-world system design, especially in
						production pipelines.
					</li>
					<li>
						<span className="font-medium text-gray-900">Mathematics for Machine Learning</span> by
						Marc Peter Deisenroth, A. Aldo Faisal, and Cheng Soon Ong — covers linear algebra,
						calculus, probability, and optimization with clean motivation for ML applications.
					</li>
					<li>
						<span className="font-medium text-gray-900">Introduction to Linear Algebra</span> by
						Gilbert Strang — a foundational text for understanding vector spaces, matrix operations,
						and the structure of linear systems; highly recommended for building ML intuition.
					</li>
					<li>
						<span className="font-medium text-gray-900">Neural Networks and Deep Learning</span> by
						Michael Nielsen — a clear, code-first introduction to the core concepts of neural
						networks and deep learning.
					</li>
				</ul>
			</section>
		</div>
	);
}
