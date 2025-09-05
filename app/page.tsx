'use client'

import { useState, useEffect } from 'react';

// 🎯 Basic Technical Vocabulary
const en_to_fr = {
  "Software": "Logiciel",
  "Specifications": "Cahier des charges",
  "Browser": "Navigateur",
  "Search engine": "Moteur de recherche",
  "Programming": "Programmation",
  "Domain name": "Nom de domaine",
  "Account": "Compte",
  "To sign up": "Créer un compte",
  "To set a password": "Définir un mot de passe",
  "User": "Utilisateur",
  "Username": "Identifiant",
  "Library": "Bibliothèque",
  "Framework": "Cadre de travail",
  "Integrated development environment - IDE": "Environnement de développement",
  "Maintenance": "Maintenance",
  "Backup": "Sauvegarde",
  "Database": "Base de données",
  "Data flow": "Flux de données",
  "Data storage": "Stockage de données",
  "Firewall": "Pare-feu",
  "Spyware": "Logiciel espion",
  "Bandwidth": "Bande passante",
  "Application Programming Interface - API": "Interface de programmation",
  "Markup": "Balise",
  "Binary language": "Langage binaire",
  "Content management system - CMS": "Système de gestion de contenu",
  "Server / Host": "Serveur",
  "Hosting service": "Service d'hébergement",
  "Sitemap": "Plan de site / Arborescence",
  "Static site": "Site statique",
  "Dynamic site": "Site dynamique",
  "Animated site": "Site animé",
  "Redesign": "Refonte",
  "Graphic charter": "Charte graphique",
  "Banner": "Bannière",
  "Referencing": "Référencement",
  "Search Engine Optimization - SEO": "Optimisation pour les moteurs de recherche",
  "Search Engine Advertising - SEA": "Référencement payant",
  "Spamdexing": "Référencement abusif",
  "Social Network": "Réseau Social",
  "File Transfer Protocol": "Protocole de transfert de fichier",
  "File transfer": "Transfert de fichier",
  "File sharing": "Partage de fichier",
  "To download": "Télécharger",
  "Virtual visit": "Visite virtuelle",
  "Interactive object": "Objet interactif",
  "Graphic user interface": "Interface utilisateur graphique",
  "Mock-up": "Prototype d'interface utilisateur",
  "User experience": "Expérience utilisateur",
  "Wireframe": "Maquette fonctionnelle d'un site"
};

// 🚀 Professional Expressions Dictionary
const expressions_en_to_fr = {
  "Declare a variable in java language": "Déclarer une variable en langage java",
  "Use arrays to store multiple values in a single variable": "Utiliser des tableaux pour stocker plusieurs valeurs dans une seule variable",
  "Create a string in java": "Créer une chaîne en java",
  "Execute loops": "Exécuter des boucles",
  "Perform an input or output operation": "Effectuer une opération d'entrée ou de sortie",
  "Process a binary information": "Traiter une information représentée sous sa forme binaire",
  "Use Boolean operators to narrow, expand, or refine search results": "Utiliser les opérateurs booléens pour réduire, étendre ou affiner les résultats de recherche",
  "Create a stored procedure in a database": "Créer une procédure stockée dans une base de données",
  "Use the most efficient algorithms possible to solve problems": "Utiliser les algorithmes les plus efficaces possibles pour résoudre des problèmes",
  "Develop reliable and functional software solutions": "Développer des solutions logicielles fiables et fonctionnelles",
  "Position oneself as a technical expert": "Se positionner comme expert technique",
  "Manage and optimize the database": "Gérer et optimiser la base de données",
  "Conduct a software study": "Réaliser une étude logicielle",
  "Design application architecture": "Concevoir l'architecture des applications",
  "Ensure data management": "Assurer la gestion des données",
  "Secure applications": "Sécuriser les applications",
  "Implement software solutions": "Implémenter des solutions logicielles",
  "Build programs": "Créer des programmes",
  "Write and test code": "Écrire et tester le code",
  "Collaborate with developers": "Collaborer avec des développeurs",
  "Use development tools": "Utiliser des outils de développement",
  "Create ergonomic applications": "Créer des applications ergonomiques",
  "Listen, analyze and write needs": "Écouter, analyser et rédiger les besoins",
  "Meet deadlines, costs and quality": "Respecter les délais, les coûts et la qualité",
  "Meet client expectations": "Satisfaire les attentes du client",
  "Lead a software engineering project": "Piloter un projet d'ingénierie logicielle",
  "Build specifications": "Construire un cahier des charges",
  "Manage company data": "Gérer les données de l'entreprise",
  "Develop mobile apps": "Développer des applications mobiles",
  "Support the company's strategy": "Accompagner la stratégie de l'entreprise",
  "Follow development principles and best practices": "Suivre les principes et bonnes pratiques de développement",
  "Analyze and identify any potential problems": "Analyser et identifier tous les problèmes potentiels",
  "Improve and maintain the software in the long term": "Améliorer et maintenir le logiciel à long terme",
  "Translate the client's need into functional demands": "Traduire le besoin du client en demandes fonctionnelles",
  "Determine and schematize the software functionalities": "Déterminer et schématiser les fonctionnalités du logiciel",
  "Identify programming defects": "Déceler les défauts de programmation",
  "Perform batch processes": "Effectuer des traitements par lot",
  "Keep the software in operational condition": "Maintenir en condition opérationnelle le logiciel",
  "Write the source code that forms the body of the software": "Rédiger le code source qui constitue le corps du logiciel",
  "Implement agility as part of a team of developers": "Mettre en œuvre l'agilité au sein d'une équipe de développeurs",
  "Lead collaborative projects": "Diriger des projets collaboratifs",
  "Define key lifecycle milestones for the project": "Définir les étapes clés de cycle de vie du projet",
  "Integrate development environments": "Intégrer les environnements de développement",
  "Manage changes to source code": "Gérer les modifications apportées au code source",
  "Deploy the software to an application server": "Déployer le logiciel sur un serveur d'applications"
};

// Combine all dictionaries
const all_en_to_fr = { ...en_to_fr, ...expressions_en_to_fr };
const fr_to_en = Object.fromEntries(Object.entries(all_en_to_fr).map(([k, v]) => [v, k]));

// Quiz modes
const QUIZ_MODES = {
  basic: { name: "🔤 Vocabulaire de base", icon: "📚", color: "bg-blue-500" },
  expressions: { name: "💼 Expressions pro", icon: "🚀", color: "bg-purple-500" },
  mixed: { name: "🎯 Mode mixte", icon: "🎲", color: "bg-green-500" },
  quick: { name: "⚡ Mode rapide", icon: "⏱️", color: "bg-orange-500" },
  challenge: { name: "🏆 Mode défi", icon: "🔥", color: "bg-red-500" }
};

function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Home() {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'finished'>('menu');
  const [selectedMode, setSelectedMode] = useState<keyof typeof QUIZ_MODES>('basic');
  const [words, setWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  // Generate smart wrong options
  const generateOptions = (correctAnswer: string, isEnglishToFrench: boolean): string[] => {
    const allValues = isEnglishToFrench ? Object.values(all_en_to_fr) : Object.keys(all_en_to_fr);
    const wrongOptions = allValues.filter(val => val !== correctAnswer);
    shuffle(wrongOptions);
    
    const options = [correctAnswer, ...wrongOptions.slice(0, 3)];
    shuffle(options);
    return options;
  };

  const getWordsForMode = (mode: keyof typeof QUIZ_MODES): string[] => {
    switch (mode) {
      case 'basic':
        return [...Object.keys(en_to_fr), ...Object.values(en_to_fr)];
      case 'expressions':
        return [...Object.keys(expressions_en_to_fr), ...Object.values(expressions_en_to_fr)];
      case 'quick':
        const quickWords = [...Object.keys(en_to_fr), ...Object.values(en_to_fr)];
        return quickWords.slice(0, 20);
      default:
        return [...Object.keys(all_en_to_fr), ...Object.values(all_en_to_fr)];
    }
  };

  const startQuiz = (mode: keyof typeof QUIZ_MODES) => {
    const selectedWords = getWordsForMode(mode);
    shuffle(selectedWords);
    setWords(selectedWords);
    setSelectedMode(mode);
    setCurrentIndex(0);
    setCorrect(0);
    setTotal(0);
    setStreak(0);
    setMaxStreak(0);
    setGameState('playing');
    nextQuestion(selectedWords, 0);
  };

  const nextQuestion = (wordList: string[] = words, index: number = currentIndex) => {
    if (index >= wordList.length) {
      setGameState('finished');
      return;
    }

    const word = wordList[index];
    let newPrompt: string, newAnswer: string;
    let isEnglishToFrench = false;

    if (word in all_en_to_fr) {
      newPrompt = `🇬🇧 ➡️ 🇫🇷 Traduisez: "${word}"`;
      newAnswer = all_en_to_fr[word as keyof typeof all_en_to_fr];
      isEnglishToFrench = true;
    } else {
      newPrompt = `🇫🇷 ➡️ 🇬🇧 Traduisez: "${word}"`;
      newAnswer = fr_to_en[word as keyof typeof fr_to_en];
      isEnglishToFrench = false;
    }

    const opts = generateOptions(newAnswer, isEnglishToFrench);
    setOptions(opts);
    setPrompt(newPrompt);
    setAnswer(newAnswer);
    setResult('');
    setShowHint(false);

    // Quick mode timer
    if (selectedMode === 'quick') {
      setTimeLeft(30);
    } else {
      setTimeLeft(null);
    }
  };

  const selectAnswer = (selected: string) => {
    if (timeLeft !== null && timeLeft <= 0) return;

    const isCorrect = selected.toLowerCase().trim() === answer.toLowerCase().trim();
    
    if (isCorrect) {
      setResult("✅ Parfait ! 🎉");
      setCorrect(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      setMaxStreak(Math.max(maxStreak, newStreak));
    } else {
      setResult(`❌ Oups ! La réponse était : ${answer}`);
      setStreak(0);
    }
    
    setTotal(prev => prev + 1);
    setCurrentIndex(prev => prev + 1);
    
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const getScoreEmoji = (percentage: number): string => {
    if (percentage >= 95) return "🏆 PARFAIT !";
    if (percentage >= 90) return "⭐ EXCELLENT !";
    if (percentage >= 80) return "🌟 TRÈS BIEN !";
    if (percentage >= 70) return "👍 BIEN !";
    if (percentage >= 60) return "📈 EN PROGRÈS !";
    return "💪 CONTINUEZ !";
  };

  // Timer effect for quick mode
  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === null || prev <= 1) {
          setResult("⏰ TEMPS ÉCOULÉ !");
          setStreak(0);
          setTotal(prev => prev + 1);
          setCurrentIndex(prev => prev + 1);
          setTimeout(() => nextQuestion(), 2000);
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Menu Screen
  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
            🚀 Quiz Tech 🚀
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Maîtrisez le vocabulaire technique anglais-français !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {Object.entries(QUIZ_MODES).map(([key, mode]) => (
            <button
              key={key}
              onClick={() => startQuiz(key as keyof typeof QUIZ_MODES)}
              className={`${mode.color} hover:scale-105 transform transition-all duration-300 text-white font-bold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl`}
            >
              <div className="text-4xl mb-3">{mode.icon}</div>
              <div className="text-lg">{mode.name}</div>
              {key === 'quick' && <div className="text-sm mt-2 opacity-80">30 sec/question</div>}
              {key === 'challenge' && <div className="text-sm mt-2 opacity-80">Sans indices</div>}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/about"
            className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            👤 À propos de Romain
          </a>
        </div>
      </div>
    );
  }

  // Game Screen
  if (gameState === 'playing') {
    const progress = (currentIndex / words.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 flex flex-col items-center justify-center p-4">
        {/* Header */}
        <div className="w-full max-w-4xl mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-white">
              <span className="text-2xl font-bold">🏆 {correct}/{total}</span>
              <span className="text-lg ml-4">🔥 Série: {streak}</span>
            </div>
            <div className="text-white">
              <span className="text-lg">{QUIZ_MODES[selectedMode].icon} {QUIZ_MODES[selectedMode].name}</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 flex items-center justify-center"
              style={{ width: `${progress}%` }}
            >
              <span className="text-xs text-white font-bold">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          
          {timeLeft !== null && (
            <div className="mt-4 text-center">
              <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-300 animate-pulse' : 'text-white'}`}>
                ⏰ {timeLeft}s
              </div>
            </div>
          )}
        </div>

        {/* Question */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-4xl w-full mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Question {currentIndex + 1}/{words.length}
            </h2>
            <p className="text-xl text-gray-100 leading-relaxed">{prompt}</p>
          </div>

          {/* Hint button for non-challenge modes */}
          {selectedMode !== 'challenge' && answer.length > 10 && (
            <div className="text-center mb-4">
              <button
                onClick={() => setShowHint(!showHint)}
                className="bg-yellow-500/30 hover:bg-yellow-500/50 text-yellow-100 px-4 py-2 rounded-lg transition-all duration-300"
              >
                💡 {showHint ? 'Masquer l\'indice' : 'Afficher un indice'}
              </button>
              {showHint && (
                <div className="mt-2 text-yellow-200">
                  Indice: {answer.substring(0, 3)}...{answer.substring(answer.length - 2)}
                </div>
              )}
            </div>
          )}

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(option)}
                disabled={!!result}
                className="bg-white/20 hover:bg-white/30 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 text-left"
              >
                <span className="text-lg">
                  {String.fromCharCode(65 + index)}. {option}
                </span>
              </button>
            ))}
          </div>

          {/* Result */}
          {result && (
            <div className="text-center mt-6">
              <p className="text-xl font-bold text-white mb-4">{result}</p>
              {streak >= 5 && streak % 5 === 0 && (
                <div className="text-orange-300 animate-bounce">
                  🔥 SÉRIE DE FEU ! +{streak} 🔥
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Results Screen
  if (gameState === 'finished') {
    const percentage = total > 0 ? (correct / total) * 100 : 0;
    const scoreEmoji = getScoreEmoji(percentage);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 flex flex-col items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-white mb-6">🎊 Quiz Terminé ! 🎊</h1>
          
          <div className="text-6xl mb-6">{scoreEmoji.split(' ')[0]}</div>
          <div className="text-2xl font-bold text-white mb-8">{scoreEmoji}</div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-3xl font-bold text-white">{correct}/{total}</div>
              <div className="text-gray-200">Score</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-3xl font-bold text-white">{percentage.toFixed(1)}%</div>
              <div className="text-gray-200">Réussite</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-3xl font-bold text-white">{maxStreak}</div>
              <div className="text-gray-200">Meilleure série</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-3xl font-bold text-white">{QUIZ_MODES[selectedMode].icon}</div>
              <div className="text-gray-200 text-sm">{QUIZ_MODES[selectedMode].name}</div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => startQuiz(selectedMode)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 mr-4"
            >
              🔄 Rejouer
            </button>
            <button
              onClick={() => setGameState('menu')}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              🏠 Menu principal
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
