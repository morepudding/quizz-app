'use client'

import { useState, useEffect } from 'react';

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

const fr_to_en = Object.fromEntries(Object.entries(en_to_fr).map(([k, v]) => [v, k]));

const options_en_to_fr = {
  "Software": ["Logiciel", "Logiciels", "Programme", "Application"],
  "Specifications": ["Cahier des charges", "Cahier de charges", "Spécifications", "Exigences"],
  "Browser": ["Navigateur", "Navigant", "Explorateur", "Chercheur"],
  "Search engine": ["Moteur de recherche", "Moteur de recherches", "Machine de recherche", "Outil de recherche"],
  "Programming": ["Programmation", "Programmations", "Codage", "Développement"],
  "Domain name": ["Nom de domaine", "Nom du domaine", "Adresse domaine", "Titre domaine"],
  "Account": ["Compte", "Comptes", "Utilisateur", "Profil"],
  "To sign up": ["Créer un compte", "Créer un comptes", "S'inscrire", "Enregistrer"],
  "To set a password": ["Définir un mot de passe", "Définir un mots de passe", "Créer un mot de passe", "Changer un mot de passe"],
  "User": ["Utilisateur", "Utilisateurs", "Usager", "Client"],
  "Username": ["Identifiant", "Identifiants", "Nom d'utilisateur", "Login"],
  "Library": ["Bibliothèque", "Bibliothèques", "Librairie", "Collection"],
  "Framework": ["Cadre de travail", "Cadre de travaux", "Structure", "Plateforme"],
  "Integrated development environment - IDE": ["Environnement de développement", "Environnement de développements", "Outil de développement", "Plateforme de développement"],
  "Maintenance": ["Maintenance", "Maintenances", "Entretien", "Support"],
  "Backup": ["Sauvegarde", "Sauvegardes", "Copie", "Archivage"],
  "Database": ["Base de données", "Base de donnée", "Banque de données", "Système de données"],
  "Data flow": ["Flux de données", "Flux de donnée", "Courant de données", "Transfert de données"],
  "Data storage": ["Stockage de données", "Stockage de donnée", "Sauvegarde de données", "Archivage de données"],
  "Firewall": ["Pare-feu", "Pare-feux", "Mur de feu", "Barrière"],
  "Spyware": ["Logiciel espion", "Logiciel espions", "Malware", "Virus"],
  "Bandwidth": ["Bande passante", "Bande passantes", "Débit", "Vitesse"],
  "Application Programming Interface - API": ["Interface de programmation", "Interface de programmations", "API", "Protocole"],
  "Markup": ["Balise", "Balises", "Tag", "Étiquette"],
  "Binary language": ["Langage binaire", "Langage binaires", "Code binaire", "Système binaire"],
  "Content management system - CMS": ["Système de gestion de contenu", "Système de gestion de contenus", "CMS", "Plateforme de contenu"],
  "Server / Host": ["Serveur", "Serveurs", "Hôte", "Machine"],
  "Hosting service": ["Service d'hébergement", "Service d'hébergements", "Hébergement", "Serveur"],
  "Sitemap": ["Plan de site / Arborescence", "Plan de site", "Arborescence", "Structure du site"],
  "Static site": ["Site statique", "Site statiques", "Page statique", "Site fixe"],
  "Dynamic site": ["Site dynamique", "Site dynamiques", "Page dynamique", "Site interactif"],
  "Animated site": ["Site animé", "Site animés", "Page animée", "Site vivant"],
  "Redesign": ["Refonte", "Refontes", "Redessin", "Reconstruction"],
  "Graphic charter": ["Charte graphique", "Charte graphiques", "Guide graphique", "Palette graphique"],
  "Banner": ["Bannière", "Bannières", "Pancarte", "Affiche"],
  "Referencing": ["Référencement", "Référencements", "Indexation", "Optimisation"],
  "Search Engine Optimization - SEO": ["Optimisation pour les moteurs de recherche", "Optimisation pour les moteurs de recherches", "SEO", "Référencement naturel"],
  "Search Engine Advertising - SEA": ["Référencement payant", "Référencement payants", "SEA", "Publicité moteur de recherche"],
  "Spamdexing": ["Référencement abusif", "Référencement abusifs", "Spam", "Manipulation"],
  "Social Network": ["Réseau Social", "Réseau Sociaux", "Réseau social", "Plateforme sociale"],
  "File Transfer Protocol": ["Protocole de transfert de fichier", "Protocole de transfert de fichiers", "FTP", "Protocole de fichier"],
  "File transfer": ["Transfert de fichier", "Transfert de fichiers", "Téléchargement", "Envoi de fichier"],
  "File sharing": ["Partage de fichier", "Partage de fichiers", "Échange de fichier", "Distribution de fichier"],
  "To download": ["Télécharger", "Téléchargers", "Charger", "Importer"],
  "Virtual visit": ["Visite virtuelle", "Visite virtuelles", "Tour virtuel", "Exploration virtuelle"],
  "Interactive object": ["Objet interactif", "Objet interactifs", "Élément interactif", "Composant interactif"],
  "Graphic user interface": ["Interface utilisateur graphique", "Interface utilisateur graphiques", "GUI", "Interface visuelle"],
  "Mock-up": ["Prototype d'interface utilisateur", "Prototype d'interface utilisateurs", "Maquette", "Modèle"],
  "User experience": ["Expérience utilisateur", "Expérience utilisateurs", "UX", "Interaction utilisateur"],
  "Wireframe": ["Maquette fonctionnelle d'un site", "Maquette fonctionnelle d'un sites", "Schéma", "Plan fonctionnel"]
};

const options_fr_to_en = {
  "Logiciel": ["Software", "Hardware", "Firmware", "Program"],
  "Cahier des charges": ["Specifications", "Requirements", "Documents", "Plans"],
  "Navigateur": ["Browser", "Navigator", "Explorer", "Searcher"],
  "Moteur de recherche": ["Search engine", "Search engines", "Search machine", "Search tool"],
  "Programmation": ["Programming", "Programmings", "Coding", "Development"],
  "Nom de domaine": ["Domain name", "Domain names", "Domain address", "Domain title"],
  "Compte": ["Account", "Accounts", "User", "Profile"],
  "Créer un compte": ["To sign up", "To sign ups", "To register", "To create"],
  "Définir un mot de passe": ["To set a password", "To set passwords", "To create a password", "To change a password"],
  "Utilisateur": ["User", "Users", "Customer", "Client"],
  "Identifiant": ["Username", "Usernames", "User ID", "Login"],
  "Bibliothèque": ["Library", "Libraries", "Bookstore", "Collection"],
  "Cadre de travail": ["Framework", "Frameworks", "Work structure", "Platform"],
  "Environnement de développement": ["Integrated development environment - IDE", "Development environment", "Development tool", "Development platform"],
  "Maintenance": ["Maintenance", "Maintenances", "Upkeep", "Support"],
  "Sauvegarde": ["Backup", "Backups", "Copy", "Archive"],
  "Base de données": ["Database", "Databases", "Data bank", "Data system"],
  "Flux de données": ["Data flow", "Data flows", "Data stream", "Data transfer"],
  "Stockage de données": ["Data storage", "Data storages", "Data backup", "Data archive"],
  "Pare-feu": ["Firewall", "Firewalls", "Fire wall", "Barrier"],
  "Logiciel espion": ["Spyware", "Spywares", "Malware", "Virus"],
  "Bande passante": ["Bandwidth", "Bandwidths", "Speed", "Rate"],
  "Interface de programmation": ["Application Programming Interface - API", "Programming interface", "API", "Protocol"],
  "Balise": ["Markup", "Markups", "Tag", "Label"],
  "Langage binaire": ["Binary language", "Binary languages", "Binary code", "Binary system"],
  "Système de gestion de contenu": ["Content management system - CMS", "Content management systems", "CMS", "Content platform"],
  "Serveur": ["Server / Host", "Servers", "Host", "Machine"],
  "Service d'hébergement": ["Hosting service", "Hosting services", "Hosting", "Server"],
  "Plan de site / Arborescence": ["Sitemap", "Site plan", "Tree structure", "Site structure"],
  "Site statique": ["Static site", "Static sites", "Static page", "Fixed site"],
  "Site dynamique": ["Dynamic site", "Dynamic sites", "Dynamic page", "Interactive site"],
  "Site animé": ["Animated site", "Animated sites", "Animated page", "Live site"],
  "Refonte": ["Redesign", "Redesigns", "Redraw", "Rebuild"],
  "Charte graphique": ["Graphic charter", "Graphic charters", "Graphic guide", "Graphic palette"],
  "Bannière": ["Banner", "Banners", "Sign", "Poster"],
  "Référencement": ["Referencing", "Referencings", "Indexing", "Optimization"],
  "Optimisation pour les moteurs de recherche": ["Search Engine Optimization - SEO", "Search engine optimization", "SEO", "Natural referencing"],
  "Référencement payant": ["Search Engine Advertising - SEA", "Paid referencing", "SEA", "Search engine advertising"],
  "Référencement abusif": ["Spamdexing", "Spamdexings", "Spam", "Manipulation"],
  "Réseau Social": ["Social Network", "Social Networks", "Social network", "Social platform"],
  "Protocole de transfert de fichier": ["File Transfer Protocol", "File transfer protocol", "FTP", "File protocol"],
  "Transfert de fichier": ["File transfer", "File transfers", "Download", "File send"],
  "Partage de fichier": ["File sharing", "File sharings", "File exchange", "File distribution"],
  "Télécharger": ["To download", "To downloads", "To load", "To import"],
  "Visite virtuelle": ["Virtual visit", "Virtual visits", "Virtual tour", "Virtual exploration"],
  "Objet interactif": ["Interactive object", "Interactive objects", "Interactive element", "Interactive component"],
  "Interface utilisateur graphique": ["Graphic user interface", "Graphic user interfaces", "GUI", "Visual interface"],
  "Prototype d'interface utilisateur": ["Mock-up", "Mock-ups", "Model", "Prototype"],
  "Expérience utilisateur": ["User experience", "User experiences", "UX", "User interaction"],
  "Maquette fonctionnelle d'un site": ["Wireframe", "Wireframes", "Schema", "Functional plan"]
};

function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Home() {
  const [words, setWords] = useState([...Object.keys(en_to_fr), ...Object.keys(fr_to_en)]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const nextQuestion = () => {
    if (currentIndex >= words.length) {
      setResult("Quiz terminé!");
      setOptions([]);
      setPrompt('');
      return;
    }
    const word = words[currentIndex];
    let newPrompt, newAnswer, opts;
    if (word in en_to_fr) {
      newPrompt = `Traduisez en français: ${word}`;
      newAnswer = (en_to_fr as any)[word];
      opts = [...(options_en_to_fr as any)[word]];
    } else {
      newPrompt = `Traduisez en anglais: ${word}`;
      newAnswer = (fr_to_en as any)[word];
      opts = [...(options_fr_to_en as any)[word]];
    }
    shuffle(opts);
    setOptions(opts);
    setPrompt(newPrompt);
    setAnswer(newAnswer);
    setResult('');
  };

  const selectAnswer = (selected: string) => {
    if (selected.toLowerCase() === answer.toLowerCase()) {
      setResult("Correct!");
      setCorrect(correct + 1);
    } else {
      setResult(`Faux! La réponse correcte est: ${answer}`);
    }
    setTotal(total + 1);
    setCurrentIndex(currentIndex + 1);
    setTimeout(nextQuestion, 2000);
  };

  useEffect(() => {
    const shuffled = [...words];
    shuffle(shuffled);
    setWords(shuffled);
    nextQuestion();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Quiz de Vocabulaire Anglais-Français</h1>
      <div className="text-xl mb-4">{prompt}</div>
      <div className="mb-4">
        {options.map((opt, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={() => selectAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="text-lg mb-4">{result}</div>
      <div className="text-lg">Score: {correct} / {total}</div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={nextQuestion}
      >
        Question Suivante
      </button>
    </div>
  );
}
