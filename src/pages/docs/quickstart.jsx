import React from 'react';

const QuickStartPage = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Quick Start Guide</h1>

      <p className="lead">
        Get up and running with JusticeHub in minutes. This guide will walk you through the essential steps to start collaborating and sharing your program.
      </p>

      <h2>1. Create Your Account</h2>
      <ol>
        <li>Visit the JusticeHub registration page</li>
        <li>Complete your organization profile</li>
        <li>Set up two-factor authentication (recommended)</li>
      </ol>

      <h2>2. Create Your First Program Repository</h2>
      <ol>
        <li>Click "New Program" from your dashboard</li>
        <li>Choose a template or start from scratch</li>
        <li>Add your program documentation</li>
        <li>Set visibility and access controls</li>
      </ol>
    </div>
  );
};

export default QuickStartPage; 