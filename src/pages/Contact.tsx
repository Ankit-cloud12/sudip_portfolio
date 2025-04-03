import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
      <p className="text-xl text-muted-foreground mb-8">Get in touch for consultations, collaborations, or questions</p>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">📧</div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">sudipkumar211@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">📱</div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">📍</div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Connect</h2>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/sudipkumar" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/sudipkumar" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Availability</h2>
            <p className="text-muted-foreground">
              I'm currently available for consultations, freelance projects, and speaking engagements. Please reach out with details about your project for a prompt response.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Subject of your message"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message" 
                rows={6}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;