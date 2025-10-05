import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, BookOpen, TrendingUp, Globe, Users, Award, ArrowRight, CheckCircle } from 'lucide-react'

const StudyPage = () => {
  const [activeTab, setActiveTab] = useState('undergraduate')

  const undergraduateProgrammes = [
    {
      title: 'Bachelor of Accounting',
      icon: TrendingUp,
      color: 'bg-neo-cyan',
      description: 'Develop expertise in financial reporting, auditing, taxation, and management accounting',
      modules: ['Financial Accounting', 'Management Accounting', 'Auditing & Assurance', 'Taxation', 'Corporate Finance'],
      careers: ['Chartered Accountant', 'Financial Analyst', 'Tax Consultant', 'Audit Manager', 'CFO'],
      duration: '4 years',
      intake: 'February & September'
    },
    {
      title: 'Bachelor of E-Commerce',
      icon: Globe,
      color: 'bg-neo-yellow',
      description: 'Master digital business strategies, online marketing, and technology-driven commerce',
      modules: ['Digital Marketing', 'E-Business Strategy', 'Web Analytics', 'Supply Chain Management', 'Consumer Behavior'],
      careers: ['E-Commerce Manager', 'Digital Marketing Specialist', 'Business Analyst', 'Product Manager', 'Entrepreneur'],
      duration: '4 years',
      intake: 'February & September'
    },
    {
      title: 'Bachelor of Finance',
      icon: TrendingUp,
      color: 'bg-neo-pink',
      description: 'Build strong foundations in investment, corporate finance, and financial markets',
      modules: ['Investment Analysis', 'Corporate Finance', 'Financial Markets', 'Risk Management', 'Portfolio Management'],
      careers: ['Investment Banker', 'Financial Planner', 'Risk Analyst', 'Portfolio Manager', 'Wealth Manager'],
      duration: '4 years',
      intake: 'February & September'
    },
    {
      title: 'Bachelor of International Business',
      icon: Globe,
      color: 'bg-neo-green',
      description: 'Prepare for global business challenges with cross-cultural management skills',
      modules: ['International Trade', 'Global Strategy', 'Cross-Cultural Management', 'International Marketing', 'Business Law'],
      careers: ['International Business Manager', 'Export Manager', 'Global Brand Manager', 'Trade Analyst', 'Consultant'],
      duration: '4 years',
      intake: 'February & September'
    }
  ]

  const postgraduateProgramme = {
    title: 'Master of Economics and Management',
    icon: BookOpen,
    color: 'bg-neo-pink',
    description: 'Advanced research-focused programme combining economic theory with management practice',
    modules: ['Advanced Microeconomics', 'Advanced Macroeconomics', 'Econometrics', 'Research Methodology', 'Strategic Management'],
    specializations: ['Applied Economics', 'Financial Economics', 'Business Analytics', 'International Economics'],
    careers: ['Economist', 'Policy Analyst', 'Research Director', 'University Lecturer', 'Consultant'],
    duration: '2 years (Full-time) / 3 years (Part-time)',
    intake: 'September'
  }

  return (
    <div className="animate-fade-in">
      <section className="bg-neo-yellow border-b-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center">
              <GraduationCap size={32} className="text-neo-yellow" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">STUDY WITH US</h1>
              <div className="h-1 w-32 bg-black mt-2"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-mono max-w-3xl">
            Shape your future with world-class education in economics and management at XMUM
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex border-4 border-black mb-8">
          <button
            onClick={() => setActiveTab('undergraduate')}
            className={`flex-1 py-4 px-6 font-bold text-lg transition-all ${
              activeTab === 'undergraduate'
                ? 'bg-neo-cyan text-black'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            UNDERGRADUATE PROGRAMMES
          </button>
          <button
            onClick={() => setActiveTab('postgraduate')}
            className={`flex-1 py-4 px-6 font-bold text-lg border-l-4 border-black transition-all ${
              activeTab === 'postgraduate'
                ? 'bg-neo-pink text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            POSTGRADUATE PROGRAMME
          </button>
        </div>

        {activeTab === 'undergraduate' && (
          <div className="space-y-8 animate-fade-in">
            {undergraduateProgrammes.map((programme, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black shadow-brutal hover-lift"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className={`${programme.color} p-8 flex flex-col justify-center border-r-0 md:border-r-4 border-black`}>
                    <div className="w-20 h-20 bg-black border-3 border-white flex items-center justify-center mb-6">
                      <programme.icon size={40} className={programme.color.replace('bg-', 'text-')} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{programme.title}</h3>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} />
                        <span>Duration: {programme.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} />
                        <span>Intake: {programme.intake}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 p-8">
                    <p className="text-lg mb-6 font-mono">{programme.description}</p>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-neo-green border-2 border-black"></div>
                        <span>KEY MODULES</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {programme.modules.map((module, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 border-2 border-black font-mono text-sm"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-neo-pink border-2 border-black"></div>
                        <span>CAREER OUTCOMES</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {programme.careers.map((career, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 border-2 border-black font-mono text-sm"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="px-6 py-3 bg-black text-white font-bold border-3 border-black hover-lift inline-flex items-center space-x-2">
                      <span>APPLY NOW</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'postgraduate' && (
          <div className="animate-fade-in">
            <div className="bg-white border-4 border-black shadow-brutal-lg">
              <div className="grid md:grid-cols-3 gap-0">
                <div className={`${postgraduateProgramme.color} text-white p-8 flex flex-col justify-center border-r-0 md:border-r-4 border-black`}>
                  <div className="w-20 h-20 bg-black border-3 border-white flex items-center justify-center mb-6">
                    <postgraduateProgramme.icon size={40} className="text-neo-pink" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{postgraduateProgramme.title}</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} />
                      <span>Duration: {postgraduateProgramme.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} />
                      <span>Intake: {postgraduateProgramme.intake}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 p-8">
                  <p className="text-lg mb-6 font-mono">{postgraduateProgramme.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                      <div className="w-6 h-6 bg-neo-cyan border-2 border-black"></div>
                      <span>CORE MODULES</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {postgraduateProgramme.modules.map((module, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 border-2 border-black font-mono text-sm"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                      <div className="w-6 h-6 bg-neo-yellow border-2 border-black"></div>
                      <span>SPECIALIZATIONS</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {postgraduateProgramme.specializations.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 border-2 border-black font-mono text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center space-x-2">
                      <div className="w-6 h-6 bg-neo-green border-2 border-black"></div>
                      <span>CAREER PATHS</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {postgraduateProgramme.careers.map((career, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 border-2 border-black font-mono text-sm"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-black text-white font-bold border-3 border-black hover-lift inline-flex items-center space-x-2">
                    <span>APPLY NOW</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="bg-black text-white border-t-4 border-b-4 border-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neo-cyan text-black border-4 border-white p-8">
              <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center mb-6">
                <Users size={32} className="text-neo-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-4">ASK ADMISSIONS</h3>
              <p className="font-mono mb-6">
                Have questions about our programmes? Our admissions team is here to help you make the right choice.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 font-bold hover:translate-x-2 transition-transform"
              >
                <span>CONTACT US</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-neo-yellow text-black border-4 border-white p-8">
              <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center mb-6">
                <Award size={32} className="text-neo-yellow" />
              </div>
              <h3 className="text-2xl font-bold mb-4">SCHOLARSHIPS & FINANCIAL AID</h3>
              <p className="font-mono mb-6">
                Explore various scholarship opportunities and financial aid options available to support your education.
              </p>
              <button className="inline-flex items-center space-x-2 font-bold hover:translate-x-2 transition-transform">
                <span>VIEW SCHOLARSHIPS</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudyPage
