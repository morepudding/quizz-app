'use client'

import { useState, useEffect } from 'react';

const slides = [
  {
    title: "Romain",
    subtitle: "Application Designer at Beneteau",
    content: "27 years old, married, expecting our first child next year. I've been transforming legacy systems into modern applications for the past year.",
    icon: "dev",
    bgColor: "from-blue-500 via-purple-500 to-pink-500",
    accentColor: "text-blue-400",
    category: "personal",
    animation: "fadeInUp"
  },
  {
    title: "My Journey",
    subtitle: "One Year of Digital Transformation",
    content: "Joined Beneteau, the legendary boat manufacturer founded in 1884. My mission: modernize their digital infrastructure while preserving decades of maritime expertise.",
    icon: "journey",
    bgColor: "from-emerald-500 via-teal-500 to-cyan-500",
    accentColor: "text-emerald-400",
    category: "professional",
    animation: "slideInLeft"
  },
  {
    title: "What I Do",
    subtitle: "Application Migration Specialist",
    content: "I migrate Power Apps to modern Next.js applications and maintain critical VBA systems that manage the hierarchical structure of boat components.",
    icon: "work",
    bgColor: "from-amber-500 via-orange-500 to-red-500",
    accentColor: "text-amber-400",
    category: "tech",
    animation: "slideInRight"
  },
  {
    title: "Real Project",
    subtitle: "User Access Rights Migration",
    content: "Recently migrated a complex Power Apps system controlling employee access to internal tools. The challenge was preserving years of accumulated business rules while creating a modern, maintainable interface.",
    icon: "project",
    bgColor: "from-violet-500 via-purple-500 to-fuchsia-500",
    accentColor: "text-violet-400",
    category: "creative",
    animation: "zoomIn"
  },
  {
    title: "The Data Challenge",
    subtitle: "Boat Component Hierarchies",
    content: "Every boat is a complex assembly of thousands of parts. I work with data representing complete hierarchical structures - from major hull sections down to individual screws and fittings.",
    icon: "data",
    bgColor: "from-rose-500 via-pink-500 to-purple-500",
    accentColor: "text-rose-400",
    category: "tech",
    animation: "fadeInUp"
  },
  {
    title: "Migration Process",
    subtitle: "From Legacy to Modern",
    content: "Each migration takes 1-4 days depending on complexity. I analyze existing business logic, recreate user interfaces in Next.js, and ensure zero data loss during the transition.",
    icon: "process",
    bgColor: "from-indigo-500 via-blue-500 to-cyan-500",
    accentColor: "text-indigo-400",
    category: "professional",
    animation: "slideInLeft"
  },
  {
    title: "VBA Systems",
    subtitle: "Maintaining Critical Infrastructure",
    content: "I maintain Visual Basic applications that have been running Beneteau's operations for years. These systems handle the instantiation of boat parts in their proper hierarchical relationships.",
    icon: "vba",
    bgColor: "from-lime-500 via-green-500 to-emerald-500",
    accentColor: "text-lime-400",
    category: "tech",
    animation: "slideInRight"
  },
  {
    title: "The Challenge",
    subtitle: "Complex Business Rules",
    content: "The biggest obstacle I face is deciphering business rules that have evolved over decades. Each rule represents years of maritime manufacturing expertise that must be preserved.",
    icon: "challenge",
    bgColor: "from-yellow-500 via-amber-500 to-orange-500",
    accentColor: "text-yellow-400",
    category: "professional",
    animation: "bounceIn"
  },
  {
    title: "My Approach",
    subtitle: "Careful and Methodical",
    content: "I spend significant time understanding existing processes before making changes. Every modification is thoroughly tested in development environments before touching production systems.",
    icon: "approach",
    bgColor: "from-teal-500 via-cyan-500 to-blue-500",
    accentColor: "text-teal-400",
    category: "personal",
    animation: "fadeInUp"
  },
  {
    title: "Technology Stack",
    subtitle: "Modern Tools for Timeless Craftsmanship",
    content: "Next.js for modern web applications, Visual Basic for legacy maintenance, Power Apps for business tools, and various database technologies for seamless data migration.",
    icon: "tech",
    bgColor: "from-cyan-500 via-blue-500 to-indigo-500",
    accentColor: "text-cyan-400",
    category: "tech",
    animation: "rotateIn"
  },
  {
    title: "Looking Forward",
    subtitle: "Continuous Evolution",
    content: "I'm constantly learning about boat manufacturing processes while improving migration techniques. The goal is to modernize systems without losing the craftsmanship knowledge built over generations.",
    icon: "future",
    bgColor: "from-purple-500 via-pink-500 to-rose-500",
    accentColor: "text-purple-400",
    category: "creative",
    animation: "slideInUp"
  },
  {
    title: "Why I Love This",
    subtitle: "Bridging Past and Future",
    content: "There's something magical about breathing new life into legacy systems while preserving the maritime expertise they contain. Each successful migration connects Beneteau's rich history with its digital future.",
    icon: "passion",
    bgColor: "from-pink-500 via-red-500 to-orange-500",
    accentColor: "text-pink-400",
    category: "personal",
    animation: "heartBeat"
  }
];

export default function About() {
  // États de base
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // États avancés Phase 2
  const [isPlaying, setIsPlaying] = useState(false);
  const [slideTimer, setSlideTimer] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([]);
  
  // États premium Phase 3
  const [presentationMode, setPresentationMode] = useState(false);
  const [slideStats, setSlideStats] = useState<Array<{slideIndex: number, timeSpent: number, interactions: number}>>([]);
  const [currentTheme, setCurrentTheme] = useState<'default' | 'ocean' | 'sunset' | 'forest' | 'cosmic'>('default');
  const [isRecording, setIsRecording] = useState(false);
  const [sessionStartTime] = useState(Date.now());
  const [totalInteractions, setTotalInteractions] = useState(0);

  const currentSlideData = slides[currentSlide];

  // Enhanced icon mapping with theme support
  const getIcon = (iconType: string) => {
    const themeIcons = {
      default: {
        dev: "💻", journey: "🚀", work: "⚡", project: "🎯", data: "🔷",
        process: "🔄", vba: "🛠️", challenge: "⚔️", approach: "🎨",
        tech: "⚙️", future: "🌟", passion: "❤️"
      },
      ocean: {
        dev: "🌊", journey: "⛵", work: "🐙", project: "🏝️", data: "🐚",
        process: "🌀", vba: "⚓", challenge: "🦈", approach: "🧭",
        tech: "🔱", future: "🐋", passion: "💙"
      },
      sunset: {
        dev: "🌅", journey: "🦅", work: "🔥", project: "🌋", data: "💎",
        process: "🌪️", vba: "⭐", challenge: "🦁", approach: "🎭",
        tech: "☀️", future: "🌈", passion: "🧡"
      },
      forest: {
        dev: "🌲", journey: "🦋", work: "⚡", project: "🍄", data: "🌿",
        process: "🌱", vba: "🌰", challenge: "🐺", approach: "🦉",
        tech: "🌳", future: "🌙", passion: "💚"
      },
      cosmic: {
        dev: "🌌", journey: "🚀", work: "⭐", project: "🪐", data: "🌟",
        process: "🌠", vba: "🛸", challenge: "👽", approach: "🔮",
        tech: "🌑", future: "🌕", passion: "💜"
      }
    };
    const icons = themeIcons[currentTheme];
    return icons[iconType as keyof typeof icons] || "✨";
  };

  // Get category-specific styling
  const getCategoryStyle = (category: string, isDarkMode: boolean) => {
    const styles = {
      personal: {
        border: isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40',
        glow: isDarkMode ? 'shadow-pink-400/20' : 'shadow-pink-500/30'
      },
      professional: {
        border: isDarkMode ? 'border-blue-400/30' : 'border-blue-500/40', 
        glow: isDarkMode ? 'shadow-blue-400/20' : 'shadow-blue-500/30'
      },
      tech: {
        border: isDarkMode ? 'border-cyan-400/30' : 'border-cyan-500/40',
        glow: isDarkMode ? 'shadow-cyan-400/20' : 'shadow-cyan-500/30'
      },
      creative: {
        border: isDarkMode ? 'border-purple-400/30' : 'border-purple-500/40',
        glow: isDarkMode ? 'shadow-purple-400/20' : 'shadow-purple-500/30'
      }
    };
    return styles[category as keyof typeof styles] || styles.professional;
  };

  // Animation CSS classes
  const animationClasses = {
    fadeInUp: 'animate-fadeInUp',
    slideInLeft: 'animate-slideInLeft', 
    slideInRight: 'animate-slideInRight',
    slideInUp: 'animate-slideInUp',
    zoomIn: 'animate-zoomIn',
    bounceIn: 'animate-bounceIn',
    rotateIn: 'animate-rotateIn',
    heartBeat: 'animate-heartBeat'
  };

  // Theme configurations
  const getThemeConfig = (theme: string) => {
    const themes = {
      default: {
        bgGradient: 'from-slate-50 via-blue-50 to-purple-50',
        darkBgGradient: 'from-gray-900 via-slate-900 to-black',
        primaryColor: 'blue',
        secondaryColor: 'purple'
      },
      ocean: {
        bgGradient: 'from-cyan-50 via-blue-50 to-teal-50',
        darkBgGradient: 'from-slate-900 via-blue-900 to-teal-900',
        primaryColor: 'cyan',
        secondaryColor: 'teal'
      },
      sunset: {
        bgGradient: 'from-orange-50 via-red-50 to-pink-50',
        darkBgGradient: 'from-gray-900 via-red-900 to-pink-900',
        primaryColor: 'orange',
        secondaryColor: 'pink'
      },
      forest: {
        bgGradient: 'from-green-50 via-emerald-50 to-teal-50',
        darkBgGradient: 'from-gray-900 via-green-900 to-emerald-900',
        primaryColor: 'green',
        secondaryColor: 'emerald'
      },
      cosmic: {
        bgGradient: 'from-purple-50 via-pink-50 to-indigo-50',
        darkBgGradient: 'from-black via-purple-900 to-pink-900',
        primaryColor: 'purple',
        secondaryColor: 'pink'
      }
    };
    return themes[theme as keyof typeof themes] || themes.default;
  };

  const themeConfig = getThemeConfig(currentTheme);

  // Effet d'animation principale
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Effet parallax souris
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-play
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentSlide < slides.length - 1) {
      interval = setInterval(() => {
        setSlideTimer(prev => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    } else {
      setSlideTimer(0);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  // Gestures tactiles
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.x || !touchStart.y) return;
      
      const xDiff = touchStart.x - e.changedTouches[0].clientX;
      const yDiff = touchStart.y - e.changedTouches[0].clientY;
      
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 50 && currentSlide < slides.length - 1) {
          nextSlide();
        } else if (xDiff < -50 && currentSlide > 0) {
          prevSlide();
        }
      }
      
      setTouchStart({ x: 0, y: 0 });
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStart, currentSlide]);

  // Analytics tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideStats(prev => {
        const existingIndex = prev.findIndex(stat => stat.slideIndex === currentSlide);
        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex].timeSpent += 1;
          return updated;
        } else {
          return [...prev, { slideIndex: currentSlide, timeSpent: 1, interactions: 0 }];
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Navigation au clavier
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && currentSlide > 0) {
        prevSlide();
      } else if (event.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        nextSlide();
      } else if (event.key === 'Home') {
        goToSlide(0);
      } else if (event.key === 'End') {
        goToSlide(slides.length - 1);
      } else if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        toggleAutoplay();
      } else if (event.key === 'f' || event.key === 'F') {
        toggleFullscreen();
      } else if (event.key === 'd' || event.key === 'D') {
        toggleDarkMode();
      } else if (event.key === 'p' || event.key === 'P') {
        togglePresentationMode();
      } else if (event.key === 'r' || event.key === 'R') {
        startRecording();
      } else if (event.key === 't' || event.key === 'T') {
        cycleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
      createRippleEffect(window.innerWidth - 100, 100);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      createRippleEffect(100, 100);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    createRippleEffect(window.innerWidth / 2, window.innerHeight / 2);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
    setSlideTimer(0);
  };

  const createRippleEffect = (x: number, y: number) => {
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    setTotalInteractions(prev => prev + 1);
    
    // Update slide stats
    setSlideStats(prev => {
      const existingIndex = prev.findIndex(stat => stat.slideIndex === currentSlide);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].interactions += 1;
        return updated;
      } else {
        return [...prev, { slideIndex: currentSlide, timeSpent: 0, interactions: 1 }];
      }
    });
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

  const togglePresentationMode = () => {
    setPresentationMode(!presentationMode);
    if (!presentationMode) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const exportToPDF = async () => {
    const exportData = {
      slides: slides.length,
      totalTime: Date.now() - sessionStartTime,
      interactions: totalInteractions,
      slideStats: slideStats,
      theme: currentTheme
    };
    
    console.log('📄 Exporting presentation...', exportData);
    alert('📄 PDF export would start here!\n\nData:\n' + JSON.stringify(exportData, null, 2));
  };

  const startRecording = () => {
    setIsRecording(!isRecording);
    console.log(isRecording ? '⏹️ Recording stopped' : '🎥 Recording started');
  };

  const cycleTheme = () => {
    const themes: Array<'default' | 'ocean' | 'sunset' | 'forest' | 'cosmic'> = ['default', 'ocean', 'sunset', 'forest', 'cosmic'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-1000 ${
      isDarkMode ? themeConfig.darkBgGradient : themeConfig.bgGradient
    } bg-gradient-to-br`}>
      
      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.95); }
          60% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-10deg); }
          to { opacity: 1; transform: rotate(0); }
        }
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes shimmer {
          0% { background-position: -468px 0; }
          100% { background-position: 468px 0; }
        }
        @keyframes rippleEffect {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes morphing {
          0%, 100% { border-radius: 50%; }
          25% { border-radius: 20% 60% 40% 80%; }
          50% { border-radius: 80% 20% 60% 40%; }
          75% { border-radius: 40% 80% 20% 60%; }
        }
        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(100px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 1s ease-out; }
        .animate-slideInRight { animation: slideInRight 1s ease-out; }
        .animate-slideInUp { animation: slideInUp 1s ease-out; }
        .animate-zoomIn { animation: zoomIn 1s ease-out; }
        .animate-bounceIn { animation: bounceIn 1.2s ease-out; }
        .animate-rotateIn { animation: rotateIn 1s ease-out; }
        .animate-heartBeat { animation: heartBeat 2s ease-in-out infinite; }
        .animate-gradientShift { animation: gradientShift 8s ease infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-shimmer { 
          animation: shimmer 2s infinite linear;
          background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
          background-size: 468px 100%;
        }
        .animate-ripple { animation: rippleEffect 1s ease-out forwards; }
        .animate-morphing { animation: morphing 8s ease-in-out infinite; }
        .animate-textReveal { animation: textReveal 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

        .glass-morphism {
          background: ${isDarkMode 
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)'
          };
          backdrop-filter: blur(20px);
          border: 1px solid ${isDarkMode 
            ? 'rgba(255, 255, 255, 0.2)' 
            : 'rgba(255, 255, 255, 0.3)'
          };
        }

        .mesh-gradient {
          background: 
            radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), transparent),
            radial-gradient(ellipse 80% 80% at 80% 60%, rgba(255, 119, 198, 0.3), transparent),
            radial-gradient(ellipse 80% 80% at 0% 80%, rgba(255, 216, 119, 0.3), transparent);
        }
      `}</style>

      {/* Background effects */}
      <div className="fixed inset-0 mesh-gradient opacity-30 animate-gradientShift"></div>
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float animate-morphing ${
              isDarkMode ? 'bg-white/20' : 'bg-black/10'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              transform: `translate(${mousePosition.x * (i % 3)}px, ${mousePosition.y * (i % 3)}px)`
            }}
          />
        ))}
      </div>

      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-50"
          style={{ left: ripple.x, top: ripple.y }}
        >
          <div className={`w-4 h-4 border-2 ${currentSlideData.accentColor.replace('text-', 'border-')} rounded-full animate-ripple`}></div>
        </div>
      ))}

      {/* Presentation Mode Indicator */}
      {(presentationMode || isRecording) && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
          {presentationMode && (
            <div className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold animate-pulse">
              📊 Presentation Mode
            </div>
          )}
          {isRecording && (
            <div className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold animate-pulse">
              🎥 Recording
            </div>
          )}
        </div>
      )}

      <div 
        className={`max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden relative transition-all duration-1000 glass-morphism ${
          isDarkMode ? 'text-white border-2 border-white/20 shadow-2xl shadow-purple-500/20' : 'text-gray-900 border-2 border-white/30 shadow-2xl shadow-blue-500/20'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        
        {/* Premium Controls */}
        <div className="absolute top-6 right-6 z-30 flex space-x-2">
          {/* Theme Selector */}
          <button
            onClick={cycleTheme}
            className={`group w-12 h-12 rounded-full transition-all duration-500 shadow-xl hover:scale-110 glass-morphism hover:shadow-2xl text-purple-400 hover:text-purple-300 border-2 border-purple-400/50`}
            title={`Theme: ${currentTheme} (T)`}
          >
            <span className="text-lg group-hover:animate-pulse">🎨</span>
          </button>

          {/* Recording Control */}
          <button
            onClick={startRecording}
            className={`group w-12 h-12 rounded-full transition-all duration-500 shadow-xl hover:scale-110 glass-morphism hover:shadow-2xl ${
              isRecording
                ? 'text-red-400 hover:text-red-300 border-2 border-red-400/50' 
                : 'text-gray-400 hover:text-gray-300 border-2 border-gray-400/50'
            }`}
            title="Record (R)"
          >
            <span className="text-lg group-hover:animate-pulse">{isRecording ? '⏺️' : '🎬'}</span>
          </button>

          {/* Presentation Mode */}
          <button
            onClick={togglePresentationMode}
            className={`group w-12 h-12 rounded-full transition-all duration-500 shadow-xl hover:scale-110 glass-morphism hover:shadow-2xl ${
              presentationMode
                ? 'text-blue-400 hover:text-blue-300 border-2 border-blue-400/50' 
                : 'text-gray-400 hover:text-gray-300 border-2 border-gray-400/50'
            }`}
            title="Presentation Mode (P)"
          >
            <span className="text-lg group-hover:animate-pulse">📊</span>
          </button>

          {/* Auto-play control */}
          <button
            onClick={toggleAutoplay}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className={`group relative w-12 h-12 rounded-full transition-all duration-500 shadow-xl hover:scale-110 glass-morphism hover:shadow-2xl ${
              isPlaying
                ? 'text-red-400 hover:text-red-300 border-2 border-red-400/50' 
                : 'text-green-400 hover:text-green-300 border-2 border-green-400/50'
            }`}
            title="Play/Pause (Space)"
          >
            <span className="text-lg group-hover:animate-pulse">{isPlaying ? '⏸️' : '▶️'}</span>
            {isPlaying && (
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-100"
                  style={{ width: `${slideTimer}%` }}
                ></div>
              </div>
            )}
          </button>

          <button
            onClick={toggleDarkMode}
            className={`group w-12 h-12 rounded-full transition-all duration-500 shadow-xl hover:scale-110 glass-morphism hover:shadow-2xl ${
              isDarkMode 
                ? 'text-yellow-300 hover:text-yellow-200 border-2 border-yellow-400/50' 
                : 'text-amber-600 hover:text-amber-700 border-2 border-amber-500/50'
            }`}
            title="Dark Mode (D)"
          >
            <span className="text-lg group-hover:animate-pulse">{isDarkMode ? '☀️' : '🌙'}</span>
          </button>
          
          <button
            onClick={toggleFullscreen}
            className={`group w-12 h-12 rounded-full transition-all duration-500 shadow-xl hover:scale-110 glass-morphism hover:shadow-2xl ${
              isDarkMode 
                ? 'text-blue-300 hover:text-blue-200 border-2 border-blue-400/50' 
                : 'text-blue-600 hover:text-blue-700 border-2 border-blue-500/50'
            }`}
            title="Fullscreen (F)"
          >
            <span className="text-lg group-hover:animate-pulse">🚀</span>
          </button>

          {/* Export PDF */}
          <button
            onClick={exportToPDF}
            className={`group w-12 h-12 rounded-full transition-all duration-500 shadow-xl hover:scale-110 glass-morphism hover:shadow-2xl text-orange-400 hover:text-orange-300 border-2 border-orange-400/50`}
            title="Export PDF"
          >
            <span className="text-lg group-hover:animate-pulse">📄</span>
          </button>
        </div>

        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgColor} opacity-10 animate-gradientShift transition-all duration-1000`} 
             style={{ backgroundSize: '400% 400%' }}></div>
        
        {/* Category indicator */}
        <div className="absolute top-6 left-6 z-20">
          <div className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide glass-morphism border-2 ${getCategoryStyle(currentSlideData.category, isDarkMode).border} shadow-lg ${getCategoryStyle(currentSlideData.category, isDarkMode).glow}`}>
            <span className={currentSlideData.accentColor}>{currentSlideData.category}</span>
          </div>
        </div>

        <div className="relative z-10 p-12">
          {/* Header */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h1 className={`text-3xl font-bold bg-gradient-to-r ${currentSlideData.bgColor} bg-clip-text text-transparent animate-shimmer`}>
                  Professional Presentation
                </h1>
                <p className={`text-base mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  🚢 Digital transformation at Beneteau • Theme: {currentTheme}
                </p>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${currentSlideData.accentColor} mb-2`}>
                  {currentSlide + 1} / {slides.length}
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${currentSlideData.accentColor.replace('text-', 'bg-')} animate-pulse`}></div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {totalInteractions} interactions
                  </span>
                </div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className={`relative w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-200/50'} overflow-hidden`}>
              <div 
                className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${currentSlideData.bgColor} transition-all duration-1000 animate-shimmer`}
                style={{ 
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                  backgroundSize: '200% 100%'
                }}
              ></div>
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    index <= currentSlide 
                      ? `${currentSlideData.accentColor.replace('text-', 'bg-')} border-white shadow-lg scale-110` 
                      : `${isDarkMode ? 'bg-gray-600 border-gray-500' : 'bg-gray-300 border-gray-400'}`
                  }`}
                  style={{ left: `${(index / (slides.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                />
              ))}
            </div>
          </div>

          {/* Slide content */}
          <div className={`slide-content min-h-[500px] flex flex-col justify-center transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            
            {/* Icon with 3D effects */}
            <div className="text-center mb-10">
              <div 
                className={`relative inline-block text-8xl mb-8 ${animationClasses[currentSlideData.animation as keyof typeof animationClasses] || 'animate-fadeInUp'}`}
                style={{
                  transform: `perspective(500px) rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <div className={`animate-float filter drop-shadow-2xl hover:scale-125 transition-all duration-500 cursor-pointer`}
                     onClick={() => createRippleEffect(window.innerWidth / 2, window.innerHeight / 2)}>
                  {getIcon(currentSlideData.icon)}
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 blur-2xl opacity-60 ${currentSlideData.accentColor.replace('text-', 'text-')} animate-pulse`}>
                  {getIcon(currentSlideData.icon)}
                </div>
                {/* Orbital rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 border-2 ${currentSlideData.accentColor.replace('text-', 'border-')} rounded-full opacity-30 animate-spin`} style={{ animationDuration: '10s' }}></div>
                  <div className={`absolute w-40 h-40 border ${currentSlideData.accentColor.replace('text-', 'border-')} border-dashed rounded-full opacity-20 animate-spin`} style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                </div>
              </div>
            </div>
            
            {/* Title and subtitle */}
            <div className="text-center mb-12">
              <h2 className={`text-6xl font-bold mb-6 ${isAnimating ? 'animate-textReveal' : ''} bg-gradient-to-r ${currentSlideData.bgColor} bg-clip-text text-transparent animate-shimmer hover:scale-105 transition-transform duration-300 cursor-pointer`}
                  style={{ backgroundSize: '200% 100%' }}
                  onClick={() => createRippleEffect(window.innerWidth / 2, 200)}>
                {currentSlideData.title}
              </h2>
              <p className={`text-2xl font-light ${currentSlideData.accentColor} animate-pulse hover:animate-bounce transition-all duration-300`}>
                {currentSlideData.subtitle}
              </p>
            </div>
            
            {/* Content */}
            <div 
              className={`max-w-4xl mx-auto text-center glass-morphism rounded-3xl p-10 border-2 ${getCategoryStyle(currentSlideData.category, isDarkMode).border} shadow-2xl ${getCategoryStyle(currentSlideData.category, isDarkMode).glow} hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden`}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
              }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                createRippleEffect(rect.left + rect.width / 2, rect.top + rect.height / 2);
              }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 opacity-10">
                <div className={`w-full h-full bg-gradient-to-r ${currentSlideData.bgColor} animate-gradientShift`} style={{ backgroundSize: '400% 400%' }}></div>
              </div>
              
              <div className="relative z-10">
                <p className={`text-xl leading-relaxed font-light ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                } ${isAnimating ? 'animate-textReveal' : ''}`}>
                  {currentSlideData.content}
                </p>
                
                {/* Interactive elements */}
                <div className="flex justify-center items-center space-x-4 mt-6">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-3 h-3 ${currentSlideData.accentColor.replace('text-', 'bg-')} rounded-full animate-pulse hover:scale-150 transition-transform duration-300 cursor-pointer`}
                      style={{ animationDelay: `${i * 0.5}s` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        const rect = e.currentTarget.getBoundingClientRect();
                        createRippleEffect(rect.left + rect.width / 2, rect.top + rect.height / 2);
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Decorative particles */}
              <div className={`absolute -top-2 -left-2 w-6 h-6 ${currentSlideData.accentColor.replace('text-', 'bg-')} rounded-full opacity-60 animate-ping hover:animate-bounce`}></div>
              <div className={`absolute -bottom-2 -right-2 w-4 h-4 ${currentSlideData.accentColor.replace('text-', 'bg-')} rounded-full opacity-60 animate-ping hover:animate-bounce`} style={{ animationDelay: '1s' }}></div>
              <div className={`absolute top-1/2 -right-4 w-2 h-2 ${currentSlideData.accentColor.replace('text-', 'bg-')} rounded-full opacity-40 animate-float`}></div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`group px-10 py-4 rounded-full font-semibold transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed glass-morphism border-2 hover:scale-105 hover:shadow-2xl ${
                currentSlide === 0 
                  ? 'border-gray-400/30' 
                  : `border-blue-400/50 ${isDarkMode ? 'hover:shadow-blue-400/30' : 'hover:shadow-blue-500/40'}`
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl group-hover:animate-bounce">←</span>
                <span className={currentSlide === 0 ? 'text-gray-400' : currentSlideData.accentColor}>Previous</span>
              </div>
            </button>
            
            {/* Dot navigation */}
            <div className="flex space-x-4">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-5 h-5 rounded-full transition-all duration-500 hover:scale-150 group ${
                    index === currentSlide 
                      ? `${slide.accentColor.replace('text-', 'bg-')} scale-150 shadow-2xl ring-4 ring-white/30` 
                      : isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                >
                  {/* Tooltip */}
                  <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/90 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 shadow-2xl border border-white/20`}>
                    <div className="font-semibold">{slide.title}</div>
                    <div className="text-xs text-gray-300 mt-1">{slide.subtitle}</div>
                    <div className={`w-full h-1 ${slide.bgColor} rounded-full mt-2 animate-shimmer`} style={{ backgroundSize: '200% 100%' }}></div>
                  </div>
                  
                  {/* Progress for current slide */}
                  {index === currentSlide && isPlaying && (
                    <div className="absolute inset-0 rounded-full border-2 border-white/50">
                      <div 
                        className={`absolute inset-0 ${slide.accentColor.replace('text-', 'bg-')} rounded-full transition-all duration-100`}
                        style={{ 
                          clipPath: `polygon(50% 50%, 50% 0%, ${50 + (slideTimer / 100) * 50}% 0%, 50% 50%)`,
                          transform: `rotate(${(slideTimer / 100) * 360}deg)`
                        }}
                      ></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`group px-10 py-4 rounded-full font-semibold transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed glass-morphism border-2 hover:scale-105 hover:shadow-2xl ${
                currentSlide === slides.length - 1 
                  ? 'border-gray-400/30' 
                  : `border-emerald-400/50 ${isDarkMode ? 'hover:shadow-emerald-400/30' : 'hover:shadow-emerald-500/40'}`
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className={currentSlide === slides.length - 1 ? 'text-gray-400' : 'text-emerald-400'}>Next</span>
                <span className="text-2xl group-hover:animate-bounce">→</span>
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center">
            <div className="mb-12">
              <a
                href="/"
                className={`group inline-flex items-center space-x-4 px-12 py-5 rounded-full font-semibold transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110 glass-morphism border-2 border-gradient-to-r ${currentSlideData.bgColor} relative overflow-hidden`}
              >
                <span className="text-2xl group-hover:animate-bounce">🏠</span>
                <span className={`relative z-10 ${currentSlideData.accentColor} text-lg`}>Back to Quiz</span>
                <span className="text-2xl group-hover:animate-pulse">✨</span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              <div className={`group text-center py-6 rounded-2xl glass-morphism border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20`}>
                <div className={`text-3xl font-bold text-blue-400 mb-2 group-hover:animate-bounce`}>12</div>
                <div className={`text-xs font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>Slides</div>
              </div>
              <div className={`group text-center py-6 rounded-2xl glass-morphism border-2 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/20`}>
                <div className={`text-3xl font-bold text-emerald-400 mb-2 group-hover:animate-bounce`}>1</div>
                <div className={`text-xs font-medium ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>Year</div>
              </div>
              <div className={`group text-center py-6 rounded-2xl glass-morphism border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/20`}>
                <div className={`text-3xl font-bold text-purple-400 mb-2 group-hover:animate-bounce`}>27</div>
                <div className={`text-xs font-medium ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>Age</div>
              </div>
              <div className={`group text-center py-6 rounded-2xl glass-morphism border-2 border-orange-400/30 hover:border-orange-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/20`}>
                <div className={`text-3xl font-bold text-orange-400 mb-2 group-hover:animate-bounce`}>{totalInteractions}</div>
                <div className={`text-xs font-medium ${isDarkMode ? 'text-orange-300' : 'text-orange-600'}`}>Interactions</div>
              </div>
            </div>
            
            {/* Footer quote */}
            <div className="pt-8 border-t border-gradient-to-r from-transparent via-gray-300 to-transparent">
              <p className={`text-lg italic font-light bg-gradient-to-r ${currentSlideData.bgColor} bg-clip-text text-transparent animate-shimmer mb-4`}
                 style={{ backgroundSize: '200% 100%' }}>
                "Modernizing legacy applications while preserving maritime expertise" ⚓
              </p>
              <div className="flex justify-center items-center space-x-6 mt-4 text-sm text-gray-500">
                <span>⌨️ Keyboard shortcuts: Space, F, D, P, R, T</span>
                <span>👆 Touch gestures supported</span>
                <span>🎨 5 themes available</span>
              </div>
              <div className="flex justify-center items-center space-x-4 mt-4">
                <div className={`w-2 h-2 ${currentSlideData.accentColor.replace('text-', 'bg-')} rounded-full animate-ping`}></div>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Session time: {Math.floor((Date.now() - sessionStartTime) / 1000)}s</span>
                <div className={`w-2 h-2 ${currentSlideData.accentColor.replace('text-', 'bg-')} rounded-full animate-ping`} style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
