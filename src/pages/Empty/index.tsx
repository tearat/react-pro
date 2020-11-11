import React from 'react';
import Header from '../../components/Header';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      Это пустая страница! ({title})
    </div>
  );
};

export default EmptyPage;
