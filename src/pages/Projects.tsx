import * as React from "react";

type Project = {
  name: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "Cortex — CNN from Scratch",
    description:
      "A convolutional neural network framework built entirely with NumPy. Implements backpropagation, convolution layers, pooling, activations, and optimizers. Achieves 98% accuracy on MNIST without using any deep learning libraries.",
    link: "https://github.com/kaanrkaraman/cortex",
  },
  {
    name: "Autonomous UAV System",
    description:
      "Designed and deployed an autonomous flight system using ROS 2, YOLOv8, and Kalman filtering. Integrated perception, control, and sensor fusion pipelines for real-time operation on NVIDIA Jetson hardware.",
  },
  {
    name: "Planetary Rover Perception Stack",
    description:
      "Developed rock segmentation and classification models using U-Net and CNNs. Deployed detection and navigation logic on Jetson with OpenCV and PyTorch, achieving 88% accuracy on a custom dataset.",
  },
];

function PageLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-section">
      <h1 className="section-heading">{title}</h1>
      {intro && (
        <p className="text-sm text-gray-700 leading-relaxed">{intro}</p>
      )}
      {children}
    </section>
  );
}

export default function Projects() {
  return (
    <PageLayout
      title="Projects"
      intro="A few selected projects that reflect my focus on embedded ML, robotics, and real-time perception systems. Some are research-inspired; all are grounded in deployment constraints."
    >
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
    </PageLayout>
  );
}
