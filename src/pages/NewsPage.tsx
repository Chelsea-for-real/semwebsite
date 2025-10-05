import React, { useState } from 'react'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState('news')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const newsItems = [
    {
      title: 'SEM Students Win National Economics Competition',
      date: '2024-01-15',
      category: 'Achievement',
      type: 'news',
      image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Our undergraduate team secured first place in the Malaysia Economics Challenge 2024, competing against teams from 15 universities nationwide. The winning team presented innovative solutions to address income inequality in Southeast Asia.'
    },
    {
      title: 'New Research Center for Digital Finance Launched',
      date: '2024-01-10',
      category: 'Research',
      type: 'news',
      image: 'https://images.pexels.com/photos/8761744/pexels-photo-8761744.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'SEM establishes cutting-edge facility to advance fintech and blockchain research. The center will focus on cryptocurrency markets, digital payment systems, and regulatory frameworks for emerging financial technologies.'
    },
    {
      title: 'International Business Seminar Series Begins',
      date: '2024-01-05',
      category: 'Seminar',
      type: 'news',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Monthly seminars featuring industry leaders and academic experts from around the world. First session covers global supply chain resilience in post-pandemic era.'
    },
    {
      title: 'Alumni Success: CEO of Tech Startup Visits Campus',
      date: '2023-12-20',
      category: 'Student Life',
      type: 'news',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Graduate shares entrepreneurial journey with current students. The alumnus founded a successful fintech company that recently secured Series B funding.'
    },
    {
      title: 'Faculty Member Receives Best Paper Award',
      date: '2023-12-15',
      category: 'Achievement',
      type: 'news',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Dr. Li Wei honored at International Conference on Financial Economics for groundbreaking research on behavioral biases in cryptocurrency investment decisions.'
    },
    {
      title: 'Guest Lecture: "The Future of Work in AI Era"',
      date: '2024-02-15',
      category: 'Seminar',
      type: 'event',
      venue: 'Lecture Hall A, Block C',
      time: '2:00 PM - 4:00 PM',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Join us for an insightful discussion on how artificial intelligence is reshaping the workplace and what skills future business leaders need to develop.'
    },
    {
      title: 'Career Fair 2024',
      date: '2024-02-20',
      category: 'Student Life',
      type: 'event',
      venue: 'University Sports Complex',
      time: '9:00 AM - 5:00 PM',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Meet with representatives from over 50 leading companies across finance, consulting, technology, and more. Bring your resume and dress professionally!'
    },
    {
      title: 'Research Symposium: Digital Transformation',
      date: '2024-03-05',
      category: 'Research',
      type: 'event',
      venue: 'Conference Center',
      time: '9:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Annual research symposium featuring presentations from faculty and graduate students on digital transformation in business and economics.'
    },
    {
      title: 'Workshop: Financial Modeling with Python',
      date: '2024-03-12',
      category: 'Seminar',
      type: 'event',
      venue: 'Computer Lab 3',
      time: '10:00 AM - 1:00 PM',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Hands-on workshop teaching practical financial modeling techniques using Python. Open to all students with basic programming knowledge.'
    }
  ]

  const categories = ['all', 'Research', 'Achievement', 'Seminar', 'Student Life']

  const filteredItems = newsItems.filter(item => {
    const matchesTab = item.type === activeTab
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesTab && matchesCategory
  })

  return (
    <div className="animate-fade-in">
      <section className="bg-neo-yellow border-b-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center">
              <Calendar size={32} className="text-neo-yellow" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">NEWS & EVENTS</h1>
              <div className="h-1 w-32 bg-black mt-2"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-mono max-w-3xl">
            Stay updated with the latest happenings at SEM
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex border-4 border-black mb-8">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex-1 py-4 px-6 font-bold text-lg transition-all ${
              activeTab === 'news'
                ? 'bg-neo-cyan text-black'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            NEWS
          </button>
          <button
            onClick={() => setActiveTab('event')}
            className={`flex-1 py-4 px-6 font-bold text-lg border-l-4 border-black transition-all ${
              activeTab === 'event'
                ? 'bg-neo-pink text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            EVENTS
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 border-4 border-black p-4 bg-white">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-mono font-bold text-sm border-3 border-black transition-all hover-lift ${
                selectedCategory === category ? 'bg-neo-green' : 'bg-white'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black hover-lift overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-block bg-neo-yellow border-2 border-black px-3 py-1 font-mono font-bold text-xs">
                    {item.category.toUpperCase()}
                  </div>
                  <div className="flex items-center space-x-2 font-mono text-sm text-gray-600">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                {item.type === 'event' && (
                  <div className="mb-3 space-y-1 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <Tag size={14} />
                      <span>{item.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                )}
                <p className="font-mono text-sm mb-4 text-gray-700">{item.summary}</p>
                <button className="inline-flex items-center space-x-2 font-bold text-sm hover:text-neo-pink transition-colors">
                  <span>{item.type === 'event' ? 'REGISTER' : 'READ MORE'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default NewsPage
