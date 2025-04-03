import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
        <div>
          <div className="rounded-lg overflow-hidden mb-4">
            <div className="aspect-square bg-muted flex items-center justify-center">
              <span className="text-3xl">🧑‍💻</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Location</h3>
              <p className="text-muted-foreground">New Delhi, India</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Languages</h3>
              <p className="text-muted-foreground">English (Fluent), Hindi (Native)</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Interests</h3>
              <p className="text-muted-foreground">Digital Marketing, Web Development, Data Analysis, Content Creation</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg">
            Hello! I'm Sudip Kumar, an SEO Specialist with over 10 years of experience in the digital marketing industry. I specialize in helping businesses improve their online visibility and drive organic traffic through effective search engine optimization strategies.
          </p>
          
          <p>
            My journey in SEO began in 2014 when I was fascinated by how search engines work and how websites can be optimized to rank higher in search results. Since then, I've worked with numerous clients across various industries, from small local businesses to large e-commerce platforms and SaaS companies.
          </p>
          
          <p>
            I believe in a holistic approach to SEO that combines technical optimization, high-quality content creation, and strategic link building. My strategies are always data-driven, focusing on measurable results and ROI for clients.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">My Approach to SEO</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Technical Foundation</h3>
              <p className="text-muted-foreground">I ensure websites are technically sound with proper indexing, fast loading speeds, mobile-friendliness, and structured data implementation.</p>
            </div>
            
            <div>
              <h3 className="font-medium">Content Strategy</h3>
              <p className="text-muted-foreground">I develop content strategies based on comprehensive keyword research and user intent analysis, creating valuable content that ranks well and engages users.</p>
            </div>
            
            <div>
              <h3 className="font-medium">Off-Page Optimization</h3>
              <p className="text-muted-foreground">I build high-quality backlinks through ethical outreach, strategic partnerships, and valuable content that naturally attracts links.</p>
            </div>
            
            <div>
              <h3 className="font-medium">Analytics & Reporting</h3>
              <p className="text-muted-foreground">I provide detailed reports on key performance metrics, making data-driven recommendations for continuous improvement.</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p>
              I'm always open to discussing new projects, sharing SEO knowledge, or exploring collaboration opportunities. Feel free to reach out through the contact form or connect with me on LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;