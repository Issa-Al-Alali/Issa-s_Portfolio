import React from "react";
import "./Skills.css";

const skillClusters = [
  {
    icon: "fas fa-brain",
    title: "AI / ML",
    color: "var(--accent-violet)",
    colorRgb: "var(--accent-violet-rgb)",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "LoRA / PEFT",
      "CNN / RNN / LSTM",
      "NLP",
      "Computer Vision",
      "Reinforcement Learning",
      "Explainable AI (XAI)",
      "Federated Learning",
    ],
  },
  {
    icon: "fas fa-database",
    title: "Data / Cloud",
    color: "var(--accent-cyan)",
    colorRgb: "var(--accent-cyan-rgb)",
    skills: [
      "Apache Spark",
      "Apache Airflow",
      "Hadoop / HDFS",
      "HBase",
      "Kafka (basic)",
      "AWS EC2",
      "AWS S3",
      "PostgreSQL",
      "MySQL / SQLite",
      "MongoDB / Firebase",
      "Spark SQL",
    ],
  },
  {
    icon: "fas fa-cogs",
    title: "MLOps / DevOps",
    color: "var(--accent-emerald)",
    colorRgb: "var(--accent-emerald-rgb)",
    skills: [
      "Docker",
      "MLflow",
      "DVC",
      "GitHub Actions",
      "CI/CD Pipelines",
      "LangChain",
      "LangGraph",
      "Llama-index",
      "TDD / Unit Testing",
      "Git (GitHub, GitLab)",
    ],
  },
  {
    icon: "fas fa-code",
    title: "Software Eng",
    color: "var(--accent-amber)",
    colorRgb: "var(--accent-amber-rgb)",
    skills: [
      "Flutter / Dart",
      "Python (Django)",
      "JavaScript (Node/React/Next)",
      "C#",
      "SQL",
      "gRPC",
      "REST APIs",
      "WebRTC",
      "Event-driven Architecture",
      "Offline Data Sync",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-cluster-grid">
          {skillClusters.map((cluster, index) => (
            <div
              key={index}
              className="skill-cluster-card"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              style={{
                "--cluster-color": cluster.color,
                "--cluster-color-rgb": cluster.colorRgb,
              }}
            >
              <div className="cluster-header">
                <div className="cluster-icon">
                  <i className={cluster.icon}></i>
                </div>
                <h3>{cluster.title}</h3>
              </div>
              <div className="cluster-skills">
                {cluster.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
