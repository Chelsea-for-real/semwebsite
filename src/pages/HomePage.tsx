import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, GraduationCap, Microscope, TrendingUp, Users, Award, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const newsItems = [
    {
      title: 'SEM Students Win National Economics Competition',
      date: '2024-01-15',
      category: 'Achievement',
      image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Our undergraduate team secured first place in the Malaysia Economics Challenge 2024'
    },
    {
      title: 'New Research Center for Digital Finance Launched',
      date: '2024-01-10',
      category: 'Research',
      image: 'https://images.pexels.com/photos/8761744/pexels-photo-8761744.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'SEM establishes cutting-edge facility to advance fintech and blockchain research'
    },
    {
      title: 'International Business Seminar Series Begins',
      date: '2024-01-05',
      category: 'Event',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Monthly seminars featuring industry leaders and academic experts from around the world'
    },
    {
      title: 'Alumni Success: CEO of Tech Startup Visits Campus',
      date: '2023-12-20',
      category: 'Alumni',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Graduate shares entrepreneurial journey with current students'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Finance Manager, HSBC',
      year: '2020',
      quote: 'The analytical skills and global perspective I gained at SEM have been instrumental in my career growth.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ahmad Rahman',
      role: 'Data Scientist, Grab',
      year: '2019',
      quote: 'SEM prepared me not just academically, but gave me the confidence to tackle real-world business challenges.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Li Wei',
      role: 'Investment Analyst, Goldman Sachs',
      year: '2021',
      quote: 'The rigorous curriculum and supportive faculty at SEM opened doors to opportunities I never imagined.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  return (
    <div className="animate-fade-in">
      <section className="relative bg-xmum-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="XMUM Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-neo-pink border-3 border-white px-4 py-2 mb-6 font-mono font-bold">
              SCHOOL OF ECONOMICS & MANAGEMENT
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              INSPIRING<br />
              <span className="text-neo-cyan">ANALYTICAL</span><br />
              <span className="text-neo-yellow">THINKERS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-mono max-w-2xl">
              FOR A GLOBAL FUTURE
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/study"
                className="px-8 py-4 bg-neo-cyan text-black font-bold border-3 border-white hover-lift inline-flex items-center space-x-2"
              >
                <span>STUDY WITH US</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/research"
                className="px-8 py-4 bg-neo-yellow text-black font-bold border-3 border-white hover-lift inline-flex items-center space-x-2"
              >
                <span>EXPLORE RESEARCH</span>
                <Microscope size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-neo-pink text-white font-bold border-3 border-white hover-lift inline-flex items-center space-x-2"
              >
                <span>CONTACT SEM</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-brutal-lg">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-neo-green border-3 border-black flex items-center justify-center flex-shrink-0">
              <Users size={32} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">DEAN'S MESSAGE</h2>
              <div className="h-1 w-24 bg-neo-pink"></div>
            </div>
          </div>
          <p className="text-lg mb-6 font-mono leading-relaxed">
            Welcome to the School of Economics and Management at Xiamen University Malaysia. We are committed to nurturing the next generation of business leaders, economists, and innovators who will shape the future of our global economy. Our rigorous academic programs, world-class faculty, and cutting-edge research facilities provide students with the knowledge, skills, and networks needed to excel in today's dynamic business environment.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 font-bold text-black hover:text-neo-pink transition-colors"
          >
            <span>READ FULL MESSAGE</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neo-cyan border-4 border-black p-8 hover-lift group cursor-pointer">
            <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center mb-6">
              <GraduationCap size={32} className="text-neo-cyan" />
            </div>
            <h3 className="text-2xl font-bold mb-4">UNDERGRADUATE PROGRAMMES</h3>
            <p className="font-mono mb-6">
              Bachelor degrees in Accounting, E-Commerce, Finance, and International Business
            </p>
            <Link
              to="/study"
              className="inline-flex items-center space-x-2 font-bold group-hover:translate-x-2 transition-transform"
            >
              <span>EXPLORE PROGRAMMES</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="bg-neo-yellow border-4 border-black p-8 hover-lift group cursor-pointer">
            <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center mb-6">
              <BookOpen size={32} className="text-neo-yellow" />
            </div>
            <h3 className="text-2xl font-bold mb-4">POSTGRADUATE PROGRAMMES</h3>
            <p className="font-mono mb-6">
              Master's degree in Economics and Management with research focus
            </p>
            <Link
              to="/study"
              className="inline-flex items-center space-x-2 font-bold group-hover:translate-x-2 transition-transform"
            >
              <span>LEARN MORE</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="bg-neo-pink border-4 border-black p-8 hover-lift group cursor-pointer">
            <div className="w-16 h-16 bg-black border-3 border-white flex items-center justify-center mb-6">
              <Microscope size={32} className="text-neo-pink" />
            </div>
            <h3 className="text-2xl font-bold mb-4">RESEARCH & INNOVATION</h3>
            <p className="font-mono mb-6 text-white">
              Cutting-edge research in applied economics, finance, and digital business
            </p>
            <Link
              to="/research"
              className="inline-flex items-center space-x-2 font-bold text-white group-hover:translate-x-2 transition-transform"
            >
              <span>VIEW RESEARCH</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-neo-green border-3 border-white flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">NEWS & EVENTS</h2>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-3 bg-neo-cyan border-3 border-white hover-lift"
              >
                <ChevronLeft size={24} className="text-black" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-neo-pink border-3 border-white hover-lift"
              >
                <ChevronRight size={24} className="text-black" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white text-black border-4 border-white overflow-hidden hover-lift">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="h-64 md:h-auto">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="inline-block bg-neo-yellow border-3 border-black px-3 py-1 font-mono font-bold text-sm mb-4 w-fit">
                          {item.category.toUpperCase()}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="font-mono mb-4 text-gray-700">{item.summary}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm text-gray-600">{item.date}</span>
                          <Link
                            to="/news"
                            className="inline-flex items-center space-x-2 font-bold hover:text-neo-pink transition-colors"
                          >
                            <span>READ MORE</span>
                            <ArrowRight size={20} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 border-2 border-white ${
                  currentSlide === index ? 'bg-neo-cyan' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center space-x-4 mb-12">
          <div className="w-12 h-12 bg-neo-pink border-3 border-black flex items-center justify-center">
            <Award size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">ALUMNI SUCCESS STORIES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black p-6 hover-lift"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover border-3 border-black"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="font-mono text-sm text-gray-600">{testimonial.role}</p>
                  <p className="font-mono text-xs text-neo-pink">Class of {testimonial.year}</p>
                </div>
              </div>
              <p className="font-mono text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neo-green border-t-4 border-b-4 border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">1200+</div>
              <div className="font-mono font-semibold">STUDENTS</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="font-mono font-semibold">FACULTY MEMBERS</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">95%</div>
              <div className="font-mono font-semibold">EMPLOYMENT RATE</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">30+</div>
              <div className="font-mono font-semibold">PARTNER UNIVERSITIES</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-xmum-blue text-white border-4 border-black p-12 text-center shadow-brutal-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">READY TO START YOUR JOURNEY?</h2>
          <p className="text-xl font-mono mb-8 max-w-2xl mx-auto">
            Join a community of ambitious students and world-class faculty at XMUM School of Economics and Management
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/study"
              className="px-8 py-4 bg-neo-cyan text-black font-bold border-3 border-white hover-lift inline-flex items-center space-x-2"
            >
              <span>APPLY NOW</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-black font-bold border-3 border-white hover-lift inline-flex items-center space-x-2"
            >
              <span>REQUEST INFO</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
