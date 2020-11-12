import React from 'react';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return <div>Это пустая страница! ({title})</div>;
};

export default EmptyPage;
