const projects = [
  {
    id: 1,
    title: "Moteur de recherche NLP & Chatbot IA",
    role: "NLP Engineer",
    company: "Aptar Pharma",
    date: "Mars 2024 - Septembre 2024",
    location: "Val-de-Reuil, France",
    thumbnail: "./assets/images/Aptar-Logo.png",
    description: "Un système avancé de recherche documentaire utilisant l'IA pour accélérer l'accès à l'information technique.",
    details: {
      achievements: [
        "Concevoir un moteur de recherche NLP gérant 1M+ documents techniques (PDF, Excel, PowerPoint, Word), réduisant le temps d'accès de 90%",
        "Développer un chatbot intelligent (LLM/RAG) atteignant 87% de précision pour le support maintenance",
        "Déployer la solution via Docker pour faciliter l'intégration et la scalabilité",
        "Explorer et implémenter les dernières avancées en LLM open source"
      ],
      tools: ["NLP", "LLM", "GPT", "LLAMA", "Mistral", "RAG", "Chainlit", "Streamlit", "Docker"]
    }
  },
  {
    id: 2,
    title: "Analyse Prédictive Panneaux Solaires",
    role: "Data Scientist",
    company: "EDF",
    date: "Mars 2023 - Septembre 2023",
    location: "Moret-Loing-et-Orvanne, France",
    thumbnail: "./assets/images/EDF2.png",
    description: "Système intelligent de maintenance prédictive pour optimiser la performance des installations solaires.",
    details: {
      achievements: [
        "Analyser la dégradation des panneaux via les données des onduleurs pour optimiser la maintenance",
        "Détecter les anomalies via des modèles ML pour anticiper les pannes",
        "Créer des tableaux de bord de suivi des performances avec 'Power BI'"
      ],
      tools: ["Scikit-Learn", "LSTM", "ARIMA", "SARIMA", "Power BI", "Streamlit"]
    }
  },
  {
    id: 3,
    title: "Système OCR et Vision par Ordinateur",
    role: "Computer Vision Engineer",
    company: "EEWORX & QWAMPLIFY",
    date: "Octobre 2022 - Mars 2023",
    location: "Aix-en-Provence, France",
    thumbnail: "./assets/images/QWAMPLIFY.png",
    description: "Solution complète d'extraction automatique de données de documents et traitement d'images.",
    details: {
      achievements: [
        "Récupérer et prétraiter les données depuis MongoDB et AWS S3",
        "Implémenter des algorithmes de prétraitement et de redressement d'images",
        "Développer une solution OCR intégrant des techniques NER pour l'extraction automatique d'informations clés (noms, dates, prix), atteignant un F1-Score de 82%",
        "Détecter et lire les codes-barres avec pyzbar"
      ],
      tools: ["OpenCV", "ResNet", "PyTorch", "OCR", "NLP", "PDFMiner", "MongoDB", "AWS S3"]
    }
  },
  {
    id: 4,
    title: "Classification des Offres Publiques",
    role: "Data Scientist",
    company: "SOMITIC",
    date: "Mai 2022 - Septembre 2022",
    location: "Marrakech, Maroc",
    thumbnail: "./assets/images/SOMITIC2.png",
    description: "Système intelligent de classification et matching pour les marchés publics.",
    details: {
      achievements: [
        "Développer un classificateur NLP pour la catégorisation automatique de 500+ offres publiques/jour",
        "Créer un système de scraping des données fournisseurs",
        "Implémenter un système de matching SBERT pour appariement offres-fournisseurs",
        "Concevoir un dashboard Streamlit pour visualisation temps réel"
      ],
      tools: ["Python", "NLP", "SBERT", "Streamlit", "BeautifulSoup", "Transformers"]
    }
  },
  {
    id: 5,
    title: "Chatbot pour Royal Air Maroc",
    role: "NLP Engineer",
    company: "Royal Air Maroc",
    date: "Septembre 2021 - Octobre 2021",
    location: "Casablanca, Maroc",
    thumbnail: "./assets/images/RAM.png",
    description: "Assistant virtuel intelligent pour la gestion automatisée du service client.",
    details: {
      achievements: [
        "Développer un chatbot pour la gestion des réservations",
        "Automatiser le traitement des réclamations",
        "Réduire significativement la charge du centre d'appels"
      ],
      tools: ["NLP", "Python", "Machine Learning", "Chatbot Development"]
    }
  },
  {
    id: 6,
    title: "Détection de Plaques d'Immatriculation",
    role: "Computer Vision Engineer",
    company: "Mes Digital Event",
    date: "Juillet 2021 - Septembre 2021",
    location: "Casablanca, Maroc",
    thumbnail: "./assets/images/DIGITAL.png",
    description: "Système automatisé de détection et reconnaissance de plaques d'immatriculation.",
    details: {
      achievements: [
        "Entraîner l'algorithme YOLOv3 pour détection plaques d'immatriculation (92% précision)",
        "Optimiser les performances de détection en temps réel"
      ],
      tools: ["YOLO V3", "CNN", "Python", "OpenCV", "Deep Learning"]
    }
  },
  {
    id: 7,
    title: "Système de Recherche d'Information Multimodale",
    role: "NLP Engineer",
    company: "École Centrale Casablanca & Chainlit",
    date: "Février 2024 - Mars 2024",
    location: "Casablanca, Maroc",
    thumbnail: "./assets/images/chainlit.png",
    description: "Système de recherche avancé combinant traitement de texte et analyse multimodale pour l'accès aux documents médicaux.",
    details: {
      achievements: [
        "Développer un système RAG multimodal pour l'analyse de documents médicaux",
        "Réaliser le benchmarking des LLMs (Gemini, GPT, T5) pour le traitement multimodal",
        "Implémenter une interface utilisateur interactive avec Chainlit",
        "Optimiser les performances de recherche et d'extraction d'informations"
      ],
      tools: [
        "Chainlit",
        "LangChain",
        "LlamaIndex", 
        "Chroma DB",
        "RAG",
        "Multimodal LLMs",
        "Vector Databases",
        "Medical Information Retrieval"
      ]
    }
  },
  {
    id: 8,
    title: "Transcription Audio et Matching NLP",
    role: "NLP Engineer",
    company: "École Centrale Casablanca",
    date: "Septembre 2023 - Décembre 2023",
    location: "Casablanca, Maroc",
    thumbnail: "./assets/images/Centrale2.png",
    description: "Système de transcription audio et matching d'offres d'emploi.",
    details: {
      achievements: [
        "Déployer un modèle Speech to text pour le dialecte marocain",
        "Implémenter un système NLP de matching avec les offres d'emploi",
        "Optimiser les performances de transcription audio"
      ],
      tools: ["Wav2Vec", "HuggingFace", "NER", "NLP", "Speech Recognition"]
    }
  },
  {
    id: 9,
    title: "Classification des Enchérisseurs en Ligne",
    role: "ML Engineer",
    company: "École Centrale Casablanca",
    date: "Octobre 2023 - Janvier 2024",
    location: "Casablanca, Maroc",
    thumbnail: "./assets/images/Centrale2.png",
    description: "Système de classification avancé pour la détection de comportements d'enchérisseurs utilisant des techniques de Machine Learning sur données déséquilibrées.",
    details: {
      achievements: [
        "Implémenter des modèles de classification sur des données fortement déséquilibrées",
        "Appliquer des techniques SMOTE et undersampling pour l'équilibrage des classes",
        "Optimiser les performances avec RandomForest et GradientBoosting",
        "Évaluer via métriques de précision, rappel, F1-score et ROC AUC"
      ],
      tools: ["Python", "scikit-learn", "RandomForest", "GradientBoosting", "SMOTE", "StandardScaler"]
    }
  }
];

// Le reste du code du composant React reste le même que précédemment
const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <div>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <a 
              href="#" 
              className="project-card"
              onClick={(e) => {
                e.preventDefault();
                setSelectedProject(project);
              }}
            >
              <figure className="card-banner">
                <img src={project.thumbnail} className="w-100" alt={project.title} />
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">{project.title}</h3>
                <div className="role">{project.role}</div>
                <div className="publish-date">{project.company}</div>
                
                <div className="publish-date">{project.date}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <h3 className="modal-title">{selectedProject.title}</h3>
            <p className="modal-company">
              {selectedProject.company} • {selectedProject.location}
            </p>
            <p className="modal-date">{selectedProject.date}</p>
            
            <div className="modal-description">{selectedProject.description}</div>
            
            <div className="modal-section">
              <h4>Réalisations</h4>
              <ul className="modal-achievements">
                {selectedProject.details.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4>Technologies utilisées</h4>
              <div className="modal-tools">
                {selectedProject.details.tools.map((tool, index) => (
                  <span key={index} className="tool-badge">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Montage du composant
ReactDOM.render(
  <ProjectGallery />,
  document.getElementById("root")
);