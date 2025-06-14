import { Link } from "react-router-dom";

export default function Home() {
	return (
		<section className="page-section">
      <div className="space-y-1">
        <h1 className="section-heading">R. Kaan Karaman</h1>
        <p className="text-sm text-gray-600">B.Sc. in Computer Science</p>
      </div>

			<p className="text-block">
				I'm a machine learning engineer working on autonomous UAV systems. My work focuses on real-time
				perception and control, sensor fusion, and deployment to embedded platforms like NVIDIA Jetson using
				ROS 2. Previously, I developed object detection and navigation systems for planetary robotics, and built
				a convolutional neural network framework from scratch in Python. I prioritize robustness, low-latency
				inference, and deployable systems.
			</p>

			<p className="text-block">
				I enjoy exploring the mathematical foundations that underpin machine learning — particularly linear
				algebra, optimization, probability, and numerical methods. Understanding these systems from first
				principles has shaped how I approach both model development and implementation.
			</p>

			<p className="text-block">
				A regular part of my learning involves reading academic papers and technical articles. I’m especially
				interested in work at the intersection of deep learning and robotics, including perception pipelines,
				control under uncertainty, and real-time inference. When I build something, I try to ground it in both
				theory and practical performance trade-offs.
			</p>

			<p className="text-block">
				I also publish technical writing on{ " " }
				<a href="https://medium.com/@rkaankaraman" className="underline hover:text-gray-900" target="_blank"
				   rel="noopener noreferrer">
					Medium
				</a>, where I write about model deployment, deep learning internals, and lessons from building embedded
				ML systems. The content here is cross-posted from there, but under my control — no tracking, no
				paywalls.
			</p>

			<p className="text-block">
				For a closer look at the kinds of systems I build, visit the{" "}
        <Link to="/projects" className="underline hover:text-gray-900">projects</Link> page. If you're interested in the ideas that influence my work — from research papers to implementation guides — the{" "}
				<Link to="/reading" className="underline hover:text-gray-900">reading list</Link> is a curated selection worth exploring.
			</p>
		</section>
	);
}