import React from 'react'
import { Microscope, TrendingUp, Database, Users, FileText, Calendar, ArrowRight } from 'lucide-react'

const ResearchPage = () => {
  const researchGroups = [
    {
      title: 'Applied Economics',
      icon: TrendingUp,
      color: 'bg-neo-cyan',
      description: 'Investigating real-world economic phenomena and policy implications',
      focus: ['Labor Economics', 'Development Economics', 'Public Economics', 'Health Economics']
    },
    {
      title: 'Finance & Investment',
      icon: Database,
      color: 'bg-neo-yellow',
      description: 'Advancing knowledge in financial markets, corporate finance, and investment strategies',
      focus: ['Asset Pricing', 'Corporate Governance', 'Behavioral Finance', 'Fintech Innovation']
    },
    {
      title: 'Digital Business',
      icon: Microscope,
      color: 'bg-neo-pink',
      description: 'Exploring the intersection of technology, business models, and consumer behavior',
      focus: ['E-Commerce', 'Digital Marketing', 'Platform Economics', 'AI in Business']
    },
    {
      title: 'Management & Leadership',
      icon: Users,
      color: 'bg-neo-green',
      description: 'Studying organizational behavior, strategic management, and leadership effectiveness',
      focus: ['Strategic Management', 'Organizational Behavior', 'Human Resource Management', 'Entrepreneurship']
    }
  ]

  const publications = [
    {
      title: 'The Impact of Digital Transformation on SME Performance in Southeast Asia',
      authors: 'Dr. Sarah Chen, Prof. Ahmad Rahman',
      journal: 'Journal of Business Research',
      year: '2024',
      category: 'Digital Business'
    },
    {
      title: 'Behavioral Biases in Cryptocurrency Investment Decisions',
      authors: 'Dr. Li Wei, Dr. Kumar Singh',
      journal: 'Journal of Financial Economics',
      year: '2024',
      category: 'Finance'
    },
    {
      title: 'Labor Market Effects of Automation in Manufacturing Industries',
      authors: 'Prof. Maria Santos, Dr. John Tan',
      journal: 'Economic Policy Review',
      year: '2023',
      category: 'Applied Economics'
    },
    {
      title: 'Leadership Styles and Innovation Performance in Tech Startups',
      authors: 'Dr. Emily Wong, Prof. David Lee',
      journal: 'Management Science',
      year: '2023',
      category: 'Management'
    }
  ]

  const highlights = [
    {
      title: 'RM 2.5M Research Grant Awarded',
      description: 'SEM receives major funding for fintech and blockchain research initiative',
      image: 'https://images.pexels.com/photos/8761744/pexels-photo-8761744.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15'
    },
    {
      title: 'International Collaboration with Oxford',
      description: 'Joint research project on sustainable business practices launched',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-10'
    },
    {
      title: 'Best Paper Award at ICEF Conference',
      description: 'Faculty research on digital currencies recognized internationally',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-11-20'
    }
  ]

  return (
    <div className="animate-fade-in">
      <section className="bg-neo-pink text-white border-b-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center">
              <Microscope size={32} className="text-neo-pink" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">RESEARCH</h1>
              <div className="h-1 w-32 bg-white mt-2"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-mono max-w-3xl">
            Driving innovation in economics and management through cutting-edge research
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">RESEARCH GROUPS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchGroups.map((group, index) => (
            <div
              key={index}
              className={`${group.color} border-4 border-black p-8 hover-lift`}
            >
              <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center mb-6">
                <group.icon size={32} className={group.color.replace('bg-', 'text-')} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{group.title}</h3>
              <p className="font-mono mb-6">{group.description}</p>
              <div className="space-y-2">
                <h4 className="font-bold text-sm">RESEARCH FOCUS:</h4>
                <ul className="space-y-1">
                  {group.focus.map((item, idx) => (
                    <li key={idx} className="font-mono text-sm flex items-center space-x-2">
                      <span className="w-2 h-2 bg-black"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white border-t-4 border-b-4 border-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">RESEARCH HIGHLIGHTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white text-black border-4 border-white overflow-hidden hover-lift"
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="font-mono text-xs text-gray-600 mb-2">{highlight.date}</div>
                  <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                  <p className="font-mono text-sm mb-4">{highlight.description}</p>
                  <button className="inline-flex items-center space-x-2 font-bold text-sm hover:text-neo-pink transition-colors">
                    <span>READ MORE</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-neo-cyan border-3 border-black flex items-center justify-center">
            <FileText size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">RECENT PUBLICATIONS</h2>
        </div>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black p-6 hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="inline-block bg-neo-yellow border-2 border-black px-3 py-1 font-mono font-bold text-xs mb-3">
                    {pub.category.toUpperCase()}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                  <p className="font-mono text-sm text-gray-600 mb-2">{pub.authors}</p>
                  <p className="font-mono text-sm">
                    <span className="font-bold">{pub.journal}</span> • {pub.year}
                  </p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-3 bg-black text-white font-bold border-3 border-black hover-lift inline-flex items-center space-x-2">
                  <span>VIEW</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-8 py-4 bg-neo-green border-4 border-black font-bold hover-lift inline-flex items-center space-x-2">
            <span>VIEW ALL PUBLICATIONS</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="bg-neo-cyan border-t-4 border-b-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-black p-8">
              <div className="w-16 h-16 bg-neo-pink border-3 border-black flex items-center justify-center mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">WORKING PAPERS</h3>
              <p className="font-mono mb-6">
                Access our latest working papers and pre-publication research
              </p>
              <button className="inline-flex items-center space-x-2 font-bold hover:translate-x-2 transition-transform">
                <span>BROWSE PAPERS</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="bg-white border-4 border-black p-8">
              <div className="w-16 h-16 bg-neo-yellow border-3 border-black flex items-center justify-center mb-6">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">SEMINARS & CONFERENCES</h3>
              <p className="font-mono mb-6">
                Join our research seminars and international conferences
              </p>
              <button className="inline-flex items-center space-x-2 font-bold hover:translate-x-2 transition-transform">
                <span>VIEW EVENTS</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResearchPage
