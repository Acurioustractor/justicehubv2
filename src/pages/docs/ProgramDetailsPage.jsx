import React from 'react';
import { useParams } from 'react-router-dom';

const ProgramDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Program Details</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Details for program {id} will go here...</p>
      </div>
    </div>
  );
};

export default ProgramDetailsPage; 