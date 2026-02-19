import React from "react";
import "./FeaturedProjects.css";

const featuredProjects = [
  {
    title: "AI-Powered Marketplace Vendor Analysis Agent",
    tag: "Agentic AI",
    tagColor: "violet",
    description:
      "End-to-end Agentic AI system using Groq (Llama 3.3) and Google Gemini to evaluate e-commerce vendor performance on the Olist marketplace dataset (100K+ records).",
    highlights: [
      "Multi-step Evaluator-Optimizer loop",
      "Chain-of-Thought & Few-Shot prompting",
      "5+ prompting techniques",
    ],
    architecture: [
      { label: "Olist Dataset", sub: "100K+ Records", icon: "fas fa-database" },
      {
        label: "Data Processing",
        sub: "Pandas / Analysis",
        icon: "fas fa-filter",
      },
      { label: "LLM Agent", sub: "Groq · Gemini", icon: "fas fa-robot" },
      {
        label: "Evaluator-Optimizer",
        sub: "Agentic Loop",
        icon: "fas fa-sync-alt",
      },
      {
        label: "Vendor Report",
        sub: "Insights & Scores",
        icon: "fas fa-chart-bar",
      },
    ],
    github: "https://github.com/Issa-Al-Alali",
  },
  {
    title: "News ETL Pipeline",
    tag: "Data Engineering",
    tagColor: "cyan",
    description:
      "Robust data engineering pipeline for ingesting, processing, and indexing news data using the Bronze-Silver-Gold architecture pattern.",
    highlights: [
      "Bronze → Silver → Gold layers",
      "Apache Airflow orchestration",
      "ElasticSearch indexing",
    ],
    architecture: [
      { label: "News Sources", sub: "Raw Ingestion", icon: "fas fa-rss" },
      {
        label: "Bronze Layer",
        sub: "LocalStack / MySQL",
        icon: "fas fa-layer-group",
      },
      {
        label: "Silver Layer",
        sub: "Cleaning / Transform",
        icon: "fas fa-broom",
      },
      { label: "Gold Layer", sub: "MongoDB Aggregates", icon: "fas fa-gem" },
      { label: "ElasticSearch", sub: "Search Index", icon: "fas fa-search" },
    ],
    orchestrator: "Apache Airflow",
    github: "https://github.com/Issa-Al-Alali",
  },
  {
    title: "Brain Tumor Detection Models",
    tag: "Deep Learning",
    tagColor: "emerald",
    description:
      "Computer vision system for MRI classification, comparing a custom CNN against a fine-tuned ResNet50 model built with PyTorch.",
    highlights: [
      "ResNet50 fine-tuning",
      "Custom CNN baseline",
      "PyTorch training pipeline",
    ],
    architecture: [
      { label: "MRI Dataset", sub: "Image Input", icon: "fas fa-x-ray" },
      { label: "Preprocessing", sub: "Augmentation", icon: "fas fa-magic" },
      { label: "Model Training", sub: "CNN vs ResNet50", icon: "fas fa-brain" },
      { label: "PyTorch", sub: "Training Loop", icon: "fas fa-fire" },
      {
        label: "Classification",
        sub: "Tumor Detection",
        icon: "fas fa-diagnoses",
      },
    ],
    github: "https://github.com/Issa-Al-Alali",
  },
];

const tagColors = {
  violet: {
    bg: "rgba(139, 92, 246, 0.12)",
    color: "#a78bfa",
    border: "rgba(139, 92, 246, 0.25)",
  },
  cyan: {
    bg: "rgba(6, 182, 212, 0.12)",
    color: "#22d3ee",
    border: "rgba(6, 182, 212, 0.25)",
  },
  emerald: {
    bg: "rgba(16, 185, 129, 0.12)",
    color: "#34d399",
    border: "rgba(16, 185, 129, 0.25)",
  },
};

const FeaturedProjects = () => {
  return (
    <section id="featured" className="section featured-projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-tag">The Future</span>
          <h2 className="section-title">Featured AI & Data Projects</h2>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project, index) => {
            const tc = tagColors[project.tagColor];
            return (
              <div
                key={index}
                className="featured-card"
                data-aos="fade-up"
                data-aos-delay={150 * (index + 1)}
              >
                <div className="featured-card-header">
                  <span
                    className="featured-tag"
                    style={{
                      background: tc.bg,
                      color: tc.color,
                      borderColor: tc.border,
                    }}
                  >
                    {project.tag}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                {/* Architecture Diagram */}
                <div className="arch-diagram">
                  <div className="arch-label">System Architecture</div>
                  <div className="arch-flow">
                    {project.architecture.map((step, i) => (
                      <React.Fragment key={i}>
                        <div className="arch-node">
                          <div className="arch-node-icon">
                            <i className={step.icon}></i>
                          </div>
                          <div className="arch-node-text">
                            <strong>{step.label}</strong>
                            <span>{step.sub}</span>
                          </div>
                        </div>
                        {i < project.architecture.length - 1 && (
                          <div className="arch-arrow">
                            <i className="fas fa-chevron-right"></i>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  {project.orchestrator && (
                    <div className="arch-orchestrator">
                      <i className="fas fa-stream"></i>
                      Orchestrated by {project.orchestrator}
                    </div>
                  )}
                </div>

                <div className="featured-card-footer">
                  <div className="featured-highlights">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="featured-highlight-pill">
                        {h}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-featured"
                  >
                    <i className="fab fa-github"></i>
                    View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
