import React from 'react';

const CV: React.FC = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Sudip Kumar</h1>
      <h2 className="text-2xl text-muted-foreground mb-8">SEO Specialist</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <div className="space-y-2">
              <p>Email: sudipkumar211@gmail.com</p>
              <p>LinkedIn: linkedin.com/in/sudipkumar</p>
              <p>Location: New Delhi, India</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Skills</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Search Engine Optimization (SEO)</li>
              <li>Content Strategy</li>
              <li>Keyword Research</li>
              <li>Technical SEO</li>
              <li>Link Building</li>
              <li>Google Analytics</li>
              <li>Google Search Console</li>
              <li>SEO Auditing</li>
              <li>Competitive Analysis</li>
              <li>WordPress SEO</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium">MBA in Digital Marketing</p>
                <p className="text-sm text-muted-foreground">Delhi University, 2015-2017</p>
              </div>
              <div>
                <p className="font-medium">Bachelor of Commerce</p>
                <p className="text-sm text-muted-foreground">Delhi University, 2012-2015</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
            <p>
              Results-driven SEO specialist with over 10 years of experience developing and implementing successful search strategies for businesses worldwide. Proven track record of increasing organic traffic, improving rankings, and driving conversions through data-driven optimization techniques and content strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Work Experience</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Senior SEO Strategist</h4>
                  <span className="text-sm text-muted-foreground">2019 - Present</span>
                </div>
                <p className="text-muted-foreground mb-2">Digital Marketing Solutions, New Delhi</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Lead SEO strategies for enterprise clients across various industries</li>
                  <li>Increased organic traffic by 150% for key clients within 6 months</li>
                  <li>Developed and implemented comprehensive technical SEO audits</li>
                  <li>Managed a team of 5 SEO specialists and content writers</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">SEO Specialist</h4>
                  <span className="text-sm text-muted-foreground">2015 - 2019</span>
                </div>
                <p className="text-muted-foreground mb-2">Global Web Solutions, Bangalore</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Executed SEO campaigns for 15+ clients across e-commerce and SaaS sectors</li>
                  <li>Improved search rankings by an average of 35% within 3 months</li>
                  <li>Conducted comprehensive keyword research and content optimization</li>
                  <li>Collaborated with development teams to implement technical SEO improvements</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">Digital Marketing Intern</h4>
                  <span className="text-sm text-muted-foreground">2014 - 2015</span>
                </div>
                <p className="text-muted-foreground mb-2">TechStart Digital, New Delhi</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Assisted in implementing SEO strategies for small business clients</li>
                  <li>Conducted keyword research and competitive analysis</li>
                  <li>Created and optimized content for SEO performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;