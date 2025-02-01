import React from 'react';

const IntroductionPage = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Introduction to JusticeHub</h1>
      
      <p className="lead">
        JusticeHub is a decentralised digital platform designed to empower grassroots organizations, advocates, and communities to share, adapt, and scale proven solutions to youth justice challenges.
      </p>

      <h2>What is JusticeHub?</h2>
      <p>
        Inspired by GitHub's collaborative ethos but built for social impact, JusticeHub combines resource-sharing, storytelling, and real-time collaboration tools to accelerate systemic change in youth justice.
      </p>

      <h2>Core Features</h2>
      <ul>
        <li>
          <strong>Program Repositories:</strong> Host and share program blueprints, budgets, and cultural protocols
        </li>
        <li>
          <strong>Forking Mechanism:</strong> Adapt existing projects to local contexts
        </li>
        <li>
          <strong>Impact Tracking:</strong> Measure and visualize program outcomes
        </li>
        <li>
          <strong>Resource Library:</strong> Access templates, guides, and training materials
        </li>
      </ul>

      <h2>Key Benefits</h2>
      <ul>
        <li>Break down silos between organizations</li>
        <li>Scale successful programs across regions</li>
        <li>Preserve cultural knowledge and protocols</li>
        <li>Track and demonstrate impact</li>
      </ul>
    </div>
  );
};

export default IntroductionPage; 