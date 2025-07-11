import { useState } from 'react';
import { Camera, Upload, Download, Zap, Star, Play, ArrowRight, Check } from 'lucide-react';

export default function Snap3DLanding() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prev => [...prev, ...imageUrls]);
  };

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // This would open camera interface - simplified for demo
      alert('Camera feature would open here');
    } catch (error) {
      alert('Camera access denied');
    }
  };

  const processImages = async () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('3D model generated! Download ready.');
    }, 3000);
  };

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Smart Camera Capture",
      description: "Capture multiple angles with our guided camera interface for optimal 3D reconstruction"
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Bulk Image Upload",
      description: "Upload multiple images at once from your device gallery for faster processing"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Processing",
      description: "Advanced AI algorithms transform your 2D images into realistic 3D house models"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Multiple Export Formats",
      description: "Download your 3D models in various formats including OBJ, STL, and GLTF"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Real Estate Agent",
      content: "Snap 3D has revolutionized how I showcase properties. Clients love the immersive 3D models!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Architect",
      content: "The accuracy and detail of the 3D models are impressive. It's saved me hours of manual modeling.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Home Inspector",
      content: "Perfect for creating detailed property documentation. The export options are exactly what I need.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent block">
                Photos into 3D Models
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Upload multiple images or use your camera to create stunning, realistic 3D models of houses 
              with our advanced AI technology. Professional results in minutes, not hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-50 transition-all flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Demo */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Try It Now</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-teal-300 rounded-xl p-8 text-center hover:border-teal-400 transition-colors">
                    <Upload className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Upload multiple images</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="bg-teal-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-teal-700 transition-colors"
                    >
                      Choose Images
                    </label>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-gray-500">OR</span>
                  </div>
                  
                  <button
                    onClick={handleCameraCapture}
                    className="w-full border-2 border-teal-300 rounded-xl p-8 hover:border-teal-400 transition-colors flex flex-col items-center"
                  >
                    <Camera className="w-12 h-12 text-teal-500 mb-4" />
                    <span className="text-gray-600">Use Camera</span>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Selected Images</h4>
                    {selectedImages.length > 0 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {selectedImages.slice(0, 4).map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`Selected ${index + 1}`}
                            className="w-full h-20 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No images selected</p>
                    )}
                  </div>
                  
                  <button
                    onClick={processImages}
                    disabled={selectedImages.length === 0 || isProcessing}
                    className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      'Generate 3D Model'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to create professional 3D models</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-teal-600 group-hover:bg-teal-100 transition-colors">
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
      <section id="how-it-works" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple 3-step process to create your 3D model</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Capture or Upload</h3>
              <p className="text-gray-600">Take photos from multiple angles or upload existing images of your house</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Processing</h3>
              <p className="text-gray-600">Our advanced AI analyzes your images and creates a detailed 3D model</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600 text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Download & Use</h3>
              <p className="text-gray-600">Download your 3D model in various formats ready for any application</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-teal-50 rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-teal-600 text-sm">{testimonial.role}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works for you</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <p className="text-4xl font-bold text-teal-600 mb-6">$9<span className="text-xl text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>10 models per month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>Basic export formats</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-teal-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <p className="text-4xl font-bold text-teal-600 mb-6">$29<span className="text-xl text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>50 models per month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>All export formats</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>Advanced editing tools</span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-teal-600 mb-6">$99<span className="text-xl text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>Unlimited models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>API access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}