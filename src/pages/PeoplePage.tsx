import React, { useState } from 'react'
import { Users, Mail, BookOpen } from 'lucide-react'

const PeoplePage = () => {
  const [filter, setFilter] = useState('all')

  const faculty = [
    {
      name: 'Prof. Dr. Sarah Chen',
      title: 'Dean & Professor of Economics',
      specialization: 'Applied Economics, Labor Markets',
      category: 'academic',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 's.chen@xmu.edu.my'
    },
    {
      name: 'Prof. Ahmad Rahman',
      title: 'Professor of Finance',
      specialization: 'Corporate Finance, Investment Analysis',
      category: 'academic',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'a.rahman@xmu.edu.my'
    },
    {
      name: 'Dr. Li Wei',
      title: 'Associate Professor',
      specialization: 'Behavioral Finance, Fintech',
      category: 'academic',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'l.wei@xmu.edu.my'
    },
    {
      name: 'Dr. Maria Santos',
      title: 'Senior Lecturer',
      specialization: 'International Business, Trade Policy',
      category: 'academic',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'm.santos@xmu.edu.my'
    },
    {
      name: 'Dr. Kumar Singh',
      title: 'Senior Lecturer',
      specialization: 'Digital Marketing, E-Commerce',
      category: 'academic',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'k.singh@xmu.edu.my'
    },
    {
      name: 'Dr. Emily Wong',
      title: 'Lecturer',
      specialization: 'Management, Organizational Behavior',
      category: 'academic',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'e.wong@xmu.edu.my'
    },
    {
      name: 'Dr. John Tan',
      title: 'Research Fellow',
      specialization: 'Econometrics, Data Analytics',
      category: 'research',
      image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'j.tan@xmu.edu.my'
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Research Fellow',
      specialization: 'Development Economics, Policy Analysis',
      category: 'research',
      image: 'https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'p.sharma@xmu.edu.my'
    },
    {
      name: 'Ms. Rachel Lim',
      title: 'Administrative Manager',
      specialization: 'Operations, Student Affairs',
      category: 'admin',
      image: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'r.lim@xmu.edu.my'
    },
    {
      name: 'Mr. David Lee',
      title: 'Programme Coordinator',
      specialization: 'Academic Administration',
      category: 'admin',
      image: 'https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'd.lee@xmu.edu.my'
    }
  ]

  const filteredFaculty = filter === 'all' 
    ? faculty 
    : faculty.filter(person => person.category === filter)

  return (
    <div className="animate-fade-in">
      <section className="bg-neo-green border-b-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center">
              <Users size={32} className="text-neo-green" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">OUR PEOPLE</h1>
              <div className="h-1 w-32 bg-black mt-2"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-mono max-w-3xl">
            Meet our world-class faculty and dedicated staff
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-8 border-4 border-black p-4 bg-white">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 font-bold border-3 border-black transition-all hover-lift ${
              filter === 'all' ? 'bg-neo-cyan' : 'bg-white'
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => setFilter('academic')}
            className={`px-6 py-3 font-bold border-3 border-black transition-all hover-lift ${
              filter === 'academic' ? 'bg-neo-yellow' : 'bg-white'
            }`}
          >
            ACADEMIC STAFF
          </button>
          <button
            onClick={() => setFilter('research')}
            className={`px-6 py-3 font-bold border-3 border-black transition-all hover-lift ${
              filter === 'research' ? 'bg-neo-pink' : 'bg-white'
            }`}
          >
            RESEARCH STAFF
          </button>
          <button
            onClick={() => setFilter('admin')}
            className={`px-6 py-3 font-bold border-3 border-black transition-all hover-lift ${
              filter === 'admin' ? 'bg-neo-green' : 'bg-white'
            }`}
          >
            ADMINISTRATION
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((person, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black hover-lift overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="font-mono text-sm text-gray-600 mb-3">{person.title}</p>
                <div className="flex items-start space-x-2 mb-4">
                  <BookOpen size={16} className="mt-1 flex-shrink-0" />
                  <p className="font-mono text-sm">{person.specialization}</p>
                </div>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center space-x-2 font-mono text-sm hover:text-neo-pink transition-colors"
                >
                  <Mail size={16} />
                  <span>{person.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white border-t-4 border-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">JOIN OUR TEAM</h2>
          <p className="text-xl font-mono mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our faculty and staff
          </p>
          <button className="px-8 py-4 bg-neo-cyan text-black font-bold border-3 border-white hover-lift">
            VIEW OPEN POSITIONS
          </button>
        </div>
      </section>
    </div>
  )
}

export default PeoplePage
