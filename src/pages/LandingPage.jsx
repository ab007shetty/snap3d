import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Camera, Upload, Download, Zap, Star, Play, ArrowRight, Check, Menu, X, Sparkles, MousePointer2, Users, Building2, Clock, Shield } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Professional Image Capture",
      description: "Guided multi-angle photography system for consistent, high-quality 3D reconstruction results",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Batch Processing",
      description: "Upload and process multiple property images simultaneously for efficient workflow management",
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Enterprise AI Engine",
      description: "Advanced photogrammetry algorithms deliver precise 3D models with architectural accuracy",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Industry-Standard Exports",
      description: "Export to OBJ, STL, PLY, and GLTF formats compatible with all major 3D software platforms",
      color: "from-slate-600 to-slate-700"
    }
  ];

  const testimonials = [
    {
      name: "Michael Richardson",
      role: "CTO, PropertyTech Solutions",
      content: "Snap 3D has streamlined our property documentation process. The accuracy and speed of 3D model generation has improved our client deliverables significantly.",
      rating: 5,
      avatar: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      name: "Sarah Chen",
      role: "Principal Architect, Design Corp",
      content: "The precision of the 3D models meets our professional standards. Integration with our existing CAD workflow has been seamless.",
      rating: 5,
      avatar: "bg-gradient-to-br from-slate-500 to-slate-600"
    },
    {
      name: "David Martinez",
      role: "Director of Operations, BuildTech",
      content: "ROI was immediate. What used to take our team hours now takes minutes. The quality consistency across projects is exceptional.",
      rating: 5,
      avatar: "bg-gradient-to-br from-blue-500 to-blue-600"
    }
  ];

  const stats = [
    {
      number: "10,000+",
      label: "Properties Processed",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      number: "500+",
      label: "Enterprise Clients",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "5 Min",
      label: "Average Processing Time",
      icon: <Clock className="w-6 h-6" />
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Property Images
              <span className="block text-blue-600">into Professional 3D Models</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Enterprise-grade AI-powered photogrammetry solution for real estate professionals, 
              architects, and construction companies. Generate accurate 3D models in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/generate"
              className="inline-flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
            >
              <Play className="w-5 h-5" />
              <span>TRY IT NOW</span>
            </Link>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2">
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-2">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-Grade Features</h2>
            <p className="text-xl text-gray-600">Built for professional workflows and enterprise requirements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Streamlined Workflow</h2>
            <p className="text-xl text-gray-600">Professional 3D model generation in three simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Capture & Upload</h3>
              <p className="text-gray-600">Use our guided capture system or upload existing property images following our optimization guidelines</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Processing</h3>
              <p className="text-gray-600">Advanced photogrammetry algorithms analyze images and reconstruct detailed 3D geometry with texture mapping</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Export & Integrate</h3>
              <p className="text-gray-600">Download industry-standard formats or integrate directly with your existing CAD and visualization workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">See how professionals are transforming their workflows</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full ${testimonial.avatar} flex items-center justify-center text-white font-bold`}>
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that scales with your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$49<span className="text-xl text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">25 models per month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Standard export formats</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Basic analytics</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm">
                Start Free Trial
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-8 border-2 border-blue-600 relative transform scale-105 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$149<span className="text-xl text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">100 models per month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">All export formats</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">API access</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm">
                Start Free Trial
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition-all transform hover:scale-105 shadow-sm hover:shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">Custom</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Unlimited models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">24/7 dedicated support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">SLA guarantees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">On-premise deployment</span>
                </li>
              </ul>
              <button className="w-full bg-slate-600 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}