import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce SEO Overhaul",
      client: "FashionRetail Inc.",
      description: "Complete SEO strategy implementation for a major fashion e-commerce platform with over 10,000 products. Included technical SEO fixes, category optimization, and content strategy.",
      results: "163% increase in organic traffic and 78% increase in sales from organic channels within 6 months.",
      skills: ["Technical SEO", "E-commerce Optimization", "Content Strategy", "Keyword Research"]
    },
    {
      title: "Local SEO Campaign",
      client: "City Dental Network",
      description: "Developed and implemented a comprehensive local SEO strategy for a chain of dental clinics across 5 locations.",
      results: "Achieved top 3 Google Map rankings for all locations and 94% increase in appointment bookings from search.",
      skills: ["Local SEO", "Google Business Profile Optimization", "Citation Building", "Review Management"]
    },
    {
      title: "SaaS SEO Growth Strategy",
      client: "CloudManage Solutions",
      description: "Created an enterprise-level SEO roadmap for a B2B SaaS platform targeting competitive keywords in the project management space.",
      results: "Ranked for 230+ new keywords, including 15 high-value terms with 10k+ monthly searches. Increased MQLs by 45%.",
      skills: ["B2B SEO", "SaaS Marketing", "Content Creation", "Competitive Analysis"]
    },
    {
      title: "International SEO Expansion",
      client: "Global Education Platform",
      description: "Led the SEO strategy for expansion into 3 new international markets, including hreflang implementation, localized keyword research, and content adaptation.",
      results: "Successfully established search presence in all target markets within 4 months, generating 12,000+ monthly organic visitors.",
      skills: ["International SEO", "Hreflang Implementation", "Cultural Adaptation", "Market Research"]
    },
    {
      title: "Content Optimization Program",
      client: "Finance News Network",
      description: "Analyzed and optimized existing content across a financial news website with 5,000+ articles. Implemented structured data and improved internal linking.",
      results: "50% improvement in average position for target keywords and 86% increase in organic traffic year-over-year.",
      skills: ["Content Optimization", "Structured Data", "Internal Linking", "SEO Auditing"]
    },
    {
      title: "Technical SEO Recovery",
      client: "HomeGoods Marketplace",
      description: "Led technical SEO recovery after a site migration that resulted in significant traffic loss. Identified and fixed indexing issues, redirect chains, and critical errors.",
      results: "Recovered 95% of lost traffic within 2 months and improved site speed by 40%.",
      skills: ["Technical SEO", "Site Migration", "Performance Optimization", "Indexing Strategy"]
    }
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-2">My Projects</h1>
      <p className="text-xl text-muted-foreground mb-8">A selection of my most successful SEO campaigns and projects</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-1">{project.title}</h2>
            <p className="text-muted-foreground mb-4">Client: {project.client}</p>
            <p className="mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h3 className="font-medium">Results:</h3>
              <p className="text-emerald-600 dark:text-emerald-400">{project.results}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-muted text-xs px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;