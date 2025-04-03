import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-16 text-center">
      <div className="text-9xl font-bold text-primary mb-4">404</div>
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link 
          to="/" 
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Go Home
        </Link>
        <Link 
          to="/contact" 
          className="px-6 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          Contact Me
        </Link>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
        <div className="text-center">
          <h2 className="text-lg font-medium mb-2">Looking for my work?</h2>
          <Link to="/projects" className="text-primary hover:underline">View my projects</Link>
        </div>
        
        <div className="text-center">
          <h2 className="text-lg font-medium mb-2">Want to learn about SEO?</h2>
          <Link to="/blog" className="text-primary hover:underline">Check out my blog</Link>
        </div>
        
        <div className="text-center">
          <h2 className="text-lg font-medium mb-2">Need SEO expertise?</h2>
          <Link to="/contact" className="text-primary hover:underline">Get in touch</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;