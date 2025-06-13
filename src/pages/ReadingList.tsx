export default function ReadingList() {
	return (
		<section className="max-w-2xl mx-auto mt-10 px-4 space-y-6">
			<h1 className="text-2xl font-semibold text-gray-900">Recommended Reading</h1>

			<p className="text-sm leading-relaxed text-gray-700">
				These are papers, references, and books I revisit often — for their foundational insights, theoretical clarity,
				or relevance to my work in machine learning, robotics, and systems design.
			</p>

			<p className="text-sm leading-relaxed text-gray-700">
				I also spend time listening to and learning from researchers whose work and thinking have shaped the field.
				I regularly follow talks and writing by{" "}
				<span className="font-medium text-gray-900">Andrej Karpathy</span> and{" "}
				<span className="font-medium text-gray-900">Ilya Sutskever</span>, and I closely track the research of others
				like <span className="font-medium text-gray-900">Geoffrey Hinton</span>,{" "}
				<span className="font-medium text-gray-900">Yann LeCun</span>,{" "}
				<span className="font-medium text-gray-900">Jitendra Malik</span>, and{" "}
				<span className="font-medium text-gray-900">Sergey Levine</span>. Their perspectives continue to influence
				how I think about deep learning, representation, and real-world applicability.
			</p>

			{/* Foundational Papers */}
			<h2 className="text-lg font-semibold text-gray-900 mt-10">Foundational Papers</h2>
			<ul className="list-disc list-inside space-y-3 text-sm text-gray-700">
				<li>
					<a
						href="https://arxiv.org/abs/1706.03762"
						className="underline hover:text-gray-900"
						target="_blank"
						rel="noopener noreferrer"
					>
						Attention Is All You Need (Vaswani et al., 2017)
					</a>{" "}
					— the original Transformer paper, foundational for sequence modeling and modern deep learning.
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

				<li>
					<a
						href="https://proceedings.neurips.cc/paper_files/paper/2015/file/1068c6e4c8051cfd1eaf6c3be5a5a930-Paper.pdf"
						className="underline hover:text-gray-900"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dueling Network Architectures for Deep Reinforcement Learning (Wang et al., 2015)
					</a>{" "}
					— a clever way to decouple state values and advantages in deep Q-learning.
				</li>

				<li>
					<a
						href="https://arxiv.org/abs/1606.00915"
						className="underline hover:text-gray-900"
						target="_blank"
						rel="noopener noreferrer"
					>
						Understanding LSTM Networks (Chris Olah)
					</a>{" "}
					— an intuitive guide to recurrent networks; useful even if you don’t work with RNNs.
				</li>
			</ul>

			{/* Practical References */}
			<h2 className="text-lg font-semibold text-gray-900 mt-10">Practical References</h2>
			<ul className="list-disc list-inside space-y-3 text-sm text-gray-700">
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
						href="https://cs231n.stanford.edu/"
						className="underline hover:text-gray-900"
						target="_blank"
						rel="noopener noreferrer"
					>
						Stanford CS231n: Convolutional Neural Networks for Visual Recognition
					</a>{" "}
					— lecture notes and assignments that shaped how many learn DL today.
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

			{/* Book Recommendations */}
			<h2 className="text-lg font-semibold text-gray-900 mt-10">Books I Recommend</h2>
			<ul className="list-disc list-inside space-y-3 text-sm text-gray-700">
				<li>
					<span className="font-medium text-gray-900">C++ Primer</span> by Stanley B. Lippman, Josée Lajoie, and Barbara E. Moo —
					a thorough and well-paced guide to modern C++, ideal for building foundational systems knowledge.
				</li>
				<li>
					<span className="font-medium text-gray-900">Designing Machine Learning Systems</span> by Chip Huyen —
					great for connecting ML theory to real-world system design, especially in production pipelines.
				</li>
				<li>
					<span className="font-medium text-gray-900">Mathematics for Machine Learning</span> by Marc Peter Deisenroth, A. Aldo Faisal, and Cheng Soon Ong —
					covers linear algebra, calculus, probability, and optimization with clean motivation for ML applications.
				</li>
				<li>
					<span className="font-medium text-gray-900">Introduction to Linear Algebra</span> by Gilbert Strang —
					a foundational text for understanding vector spaces, matrix operations, and the structure of linear systems; highly recommended for building ML intuition.
				</li>
			</ul>
		</section>
	);
}