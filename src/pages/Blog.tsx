import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of SEO: AI and Machine Learning",
      date: "March 15, 2025",
      summary: "How artificial intelligence and machine learning are reshaping the SEO landscape and what it means for businesses and marketers.",
      category: "SEO Trends",
      imageEmoji: "🤖"
    },
    {
      title: "Technical SEO Checklist for 2025",
      date: "February 28, 2025",
      summary: "A comprehensive technical SEO checklist to ensure your website is optimized for search engines in 2025 with the latest best practices.",
      category: "Technical SEO",
      imageEmoji: "🔧"
    },
    {
      title: "Content Strategy That Drives Organic Traffic",
      date: "February 10, 2025",
      summary: "Learn how to develop a content strategy that not only ranks well in search engines but also engages your audience and drives conversions.",
      category: "Content Strategy",
      imageEmoji: "📝"
    },
    {
      title: "Local SEO: How to Dominate Your Local Market",
      date: "January 25, 2025",
      summary: "Strategies and tactics to improve your local search presence and attract more customers from your geographical area.",
      category: "Local SEO",
      imageEmoji: "📍"
    },
    {
      title: "Mobile SEO Best Practices for Higher Rankings",
      date: "January 12, 2025",
      summary: "With mobile-first indexing fully established, here's how to ensure your website is fully optimized for mobile users and search engines.",
      category: "Mobile SEO",
      imageEmoji: "📱"
    },
    {
      title: "E-commerce SEO: Driving Traffic That Converts",
      date: "December 30, 2024",
      summary: "Specialized SEO strategies for e-commerce websites that not only increase traffic but also improve conversion rates and sales.",
      category: "E-commerce",
      imageEmoji: "🛒"
    }
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-xl text-muted-foreground mb-8">Insights and strategies about SEO and digital marketing</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="border rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
            <div className="aspect-video bg-muted flex items-center justify-center text-4xl">
              {post.imageEmoji}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground">{post.summary}</p>
              <div className="mt-4">
                <a href="#" className="text-sm font-medium text-primary hover:underline">Read more →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">Subscribe to receive new articles in your inbox</p>
        <div className="flex max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary" />
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;