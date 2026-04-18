// ========== Translations ==========
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_education: "Education",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_firstname: "Omran",
        hero_lastname: "Alsaedi",
        hero_desc: "Crafting immersive experiences through code. Specialized in Unity 3D, XR environments, and AI-powered gameplay mechanics.",
        hero_location: "Riyadh, Saudi Arabia",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Get In Touch",
        hero_scroll: "Scroll Down",
        about_title: "About Me",
        about_p1: 'Highly skilled <strong>Unity Game Programmer</strong> with over <strong>2 years of experience</strong> in developing immersive environments and high-quality games. I have a proven track record in leading game development projects and mentoring technical teams at <strong>Taibah Valley</strong>.',
        about_p2: 'Expert in <strong>C# and OOP principles</strong>, with a specialized focus on integrating <strong>AI models into XR environments</strong>. Committed to contributing to the growth of Saudi Arabia\'s homegrown IP and the global gaming hub vision.',
        stat_years: "Years Experience",
        stat_projects: "Projects Delivered",
        stat_specialist: "Specialist",
        skills_title: "Technical Skills",
        skill_engines: "Game Engines",
        skill_programming: "Programming",
        skill_mobile: "Mobile Development",
        skill_mobile_opt: "Android/iOS Optimization",
        skill_core: "Core Concepts",
        skill_optimization: "Optimization",
        skill_memory: "Memory Management",
        skill_drawcall: "Draw Call Reduction",
        skill_fps: "FPS Stabilization",
        skill_texture: "Texture Compression",
        skill_tools: "Tools & Version Control",
        exp_title: "Experience",
        exp_role: "Game Programmer (Unity)",
        exp_company: "Taibah Valley (Wadi Taibah)",
        exp_d1: "Lead the development of multiple B2B game projects from initial concept to deployment.",
        exp_d2: "Architected scalable and stable game code using C# and Unity, ensuring high technical quality.",
        exp_d3: "Implemented and integrated AI models within immersive XR environments to enhance gameplay mechanics.",
        exp_d4: "Mentored and trained junior developers and colleagues in XR technologies and Unity best practices.",
        exp_d5: "Collaborated with cross-functional teams to transform creative B2B game ideas into robust technical specifications.",
        proj_title: "Key Projects",
        proj1_name: "Performance Optimization",
        proj1_desc: 'Successfully optimized mobile game projects to maintain stable <strong>60 FPS</strong> by implementing efficient Object Pooling systems and managing memory allocation.',
        proj1_t2: "Memory Management",
        proj1_t4: "Mobile",
        proj2_name: "XR Integration",
        proj2_desc: 'Developed interactive training simulations using <strong>VR/AR</strong>, focusing on seamless user experience and realistic physics interactions.',
        proj2_t2: "Training Simulation",
        proj2_t3: "Physics",
        proj2_t4: "UX",
        proj3_name: "Sera (In Development)",
        proj3_desc: 'Currently developing <strong>Sera</strong>, an indie game built with Unity featuring immersive gameplay mechanics and AI-driven experiences.',
        proj3_t2: "Indie Game",
        proj3_t3: "In Development",
        proj3_t4: "AI",
        edu_title: "Education & Certifications",
        edu1_name: "Bachelor of Science in Mathematics",
        edu1_place: "Taibah University",
        edu1_desc: "Strong foundation in computational logic, physics, and complex problem-solving.",
        edu2_name: "Unity Certified Associate",
        edu2_desc: "Certified proficiency in Unity development, game design principles, and C# programming.",
        lang_title: "Languages",
        lang_arabic: "Arabic",
        lang_native: "Native",
        lang_english: "English",
        lang_fluent: "Intermediate",
        contact_title: "Get In Touch",
        contact_desc: "I'm always open to new opportunities, collaborations, and exciting game development projects. Whether you have a question or just want to say hi, feel free to reach out!",
        contact_email: "Email Me",
        footer_built: "Designed & Built by",
        footer_rights: "\u00a9 2026 All Rights Reserved",
        typed_titles: ["Unity Game Programmer", "XR Developer", "AI Integration Specialist", "C# Expert"]
    },
    ar: {
        nav_about: "\u0639\u0646\u0651\u064a",
        nav_skills: "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a",
        nav_experience: "\u0627\u0644\u062e\u0628\u0631\u0629",
        nav_projects: "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",
        nav_education: "\u0627\u0644\u062a\u0639\u0644\u064a\u0645",
        nav_contact: "\u062a\u0648\u0627\u0635\u0644",
        hero_greeting: "\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0646\u0627",
        hero_firstname: "عمران",
        hero_lastname: "الصاعدي",
        hero_desc: "\u0623\u0635\u0646\u0639 \u062a\u062c\u0627\u0631\u0628 \u063a\u0627\u0645\u0631\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0628\u0631\u0645\u062c\u0629. \u0645\u062a\u062e\u0635\u0635 \u0641\u064a Unity 3D \u0648\u0628\u064a\u0626\u0627\u062a XR \u0648\u0645\u064a\u0643\u0627\u0646\u064a\u0643\u064a\u0627\u062a \u0627\u0644\u0644\u0639\u0628 \u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.",
        hero_location: "\u0627\u0644\u0631\u064a\u0627\u0636\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629",
        hero_btn_projects: "\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",
        hero_btn_contact: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a",
        hero_scroll: "\u0627\u0633\u062d\u0628 \u0644\u0644\u0623\u0633\u0641\u0644",
        about_title: "\u0639\u0646\u0651\u064a",
        about_p1: '\u0645\u0628\u0631\u0645\u062c \u0623\u0644\u0639\u0627\u0628 <strong>Unity</strong> \u0630\u0648 \u0645\u0647\u0627\u0631\u0627\u062a \u0639\u0627\u0644\u064a\u0629 \u0648\u062e\u0628\u0631\u0629 \u062a\u0632\u064a\u062f \u0639\u0646 <strong>\u0633\u0646\u062a\u064a\u0646</strong> \u0641\u064a \u062a\u0637\u0648\u064a\u0631 \u0628\u064a\u0626\u0627\u062a \u063a\u0627\u0645\u0631\u0629 \u0648\u0623\u0644\u0639\u0627\u0628 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629. \u0644\u062f\u064a \u0633\u062c\u0644 \u062d\u0627\u0641\u0644 \u0641\u064a \u0642\u064a\u0627\u062f\u0629 \u0645\u0634\u0627\u0631\u064a\u0639 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0623\u0644\u0639\u0627\u0628 \u0648\u062a\u0648\u062c\u064a\u0647 \u0627\u0644\u0641\u0631\u0642 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0641\u064a <strong>\u0648\u0627\u062f\u064a \u0637\u064a\u0628\u0629</strong>.',
        about_p2: '\u062e\u0628\u064a\u0631 \u0641\u064a <strong>C# \u0648\u0645\u0628\u0627\u062f\u0626 OOP</strong>\u060c \u0645\u0639 \u062a\u0631\u0643\u064a\u0632 \u0645\u062a\u062e\u0635\u0635 \u0639\u0644\u0649 \u062f\u0645\u062c <strong>\u0646\u0645\u0627\u0630\u062c \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0641\u064a \u0628\u064a\u0626\u0627\u062a XR</strong>. \u0645\u0644\u062a\u0632\u0645 \u0628\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u0646\u0645\u0648 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0648\u0631\u0624\u064a\u0629 \u0645\u0631\u0643\u0632 \u0627\u0644\u0623\u0644\u0639\u0627\u0628 \u0627\u0644\u0639\u0627\u0644\u0645\u064a.',
        stat_years: "\u0633\u0646\u0648\u0627\u062a \u062e\u0628\u0631\u0629",
        stat_projects: "\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u0646\u062c\u0632\u0629",
        stat_specialist: "\u0645\u062a\u062e\u0635\u0635",
        skills_title: "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629",
        skill_engines: "\u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0623\u0644\u0639\u0627\u0628",
        skill_programming: "\u0627\u0644\u0628\u0631\u0645\u062c\u0629",
        skill_mobile: "\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644",
        skill_mobile_opt: "\u062a\u062d\u0633\u064a\u0646 Android/iOS",
        skill_core: "\u0627\u0644\u0645\u0641\u0627\u0647\u064a\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629",
        skill_optimization: "\u0627\u0644\u062a\u062d\u0633\u064a\u0646",
        skill_memory: "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0630\u0627\u0643\u0631\u0629",
        skill_drawcall: "\u062a\u0642\u0644\u064a\u0644 Draw Calls",
        skill_fps: "\u062a\u062b\u0628\u064a\u062a FPS",
        skill_texture: "\u0636\u063a\u0637 \u0627\u0644\u0646\u0633\u064a\u062c",
        skill_tools: "\u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0625\u0635\u062f\u0627\u0631\u0627\u062a",
        exp_title: "\u0627\u0644\u062e\u0628\u0631\u0629",
        exp_role: "\u0645\u0628\u0631\u0645\u062c \u0623\u0644\u0639\u0627\u0628 (Unity)",
        exp_company: "\u0648\u0627\u062f\u064a \u0637\u064a\u0628\u0629",
        exp_d1: "قيادة تطوير عدة مشاريع ألعاب B2B من الفكرة الأولية حتى النشر.",
        exp_d2: "\u062a\u0635\u0645\u064a\u0645 \u0643\u0648\u062f \u0623\u0644\u0639\u0627\u0628 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u0648\u0633\u0639 \u0648\u0645\u0633\u062a\u0642\u0631 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 C# \u0648Unity.",
        exp_d3: "\u062a\u0646\u0641\u064a\u0630 \u0648\u062f\u0645\u062c \u0646\u0645\u0627\u0630\u062c \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0641\u064a \u0628\u064a\u0626\u0627\u062a XR \u063a\u0627\u0645\u0631\u0629.",
        exp_d4: "\u062a\u0648\u062c\u064a\u0647 \u0648\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0645\u0637\u0648\u0631\u064a\u0646 \u0627\u0644\u0645\u0628\u062a\u062f\u0626\u064a\u0646 \u0641\u064a \u062a\u0642\u0646\u064a\u0627\u062a XR \u0648\u0623\u0641\u0636\u0644 \u0645\u0645\u0627\u0631\u0633\u0627\u062a Unity.",
        exp_d5: "التعاون مع فرق متعددة التخصصات لتحويل أفكار ألعاب B2B الإبداعية إلى مواصفات تقنية.",
        proj_title: "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
        proj1_name: "\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0623\u062f\u0627\u0621",
        proj1_desc: '\u062a\u062d\u0633\u064a\u0646 \u0645\u0634\u0627\u0631\u064a\u0639 \u0623\u0644\u0639\u0627\u0628 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644 \u0644\u0644\u062d\u0641\u0627\u0638 \u0639\u0644\u0649 <strong>60 FPS</strong> \u0645\u0633\u062a\u0642\u0631 \u0645\u0646 \u062e\u0644\u0627\u0644 \u062a\u0646\u0641\u064a\u0630 \u0623\u0646\u0638\u0645\u0629 Object Pooling \u0641\u0639\u0627\u0644\u0629 \u0648\u0625\u062f\u0627\u0631\u0629 \u062a\u062e\u0635\u064a\u0635 \u0627\u0644\u0630\u0627\u0643\u0631\u0629.',
        proj1_t2: "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0630\u0627\u0643\u0631\u0629",
        proj1_t4: "\u0645\u0648\u0628\u0627\u064a\u0644",
        proj2_name: "\u062f\u0645\u062c XR",
        proj2_desc: '\u062a\u0637\u0648\u064a\u0631 \u0645\u062d\u0627\u0643\u0627\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 <strong>VR/AR</strong> \u0645\u0639 \u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u062a\u062c\u0631\u0628\u0629 \u0645\u0633\u062a\u062e\u062f\u0645 \u0633\u0644\u0633\u0629 \u0648\u062a\u0641\u0627\u0639\u0644\u0627\u062a \u0641\u064a\u0632\u064a\u0627\u0626\u064a\u0629 \u0648\u0627\u0642\u0639\u064a\u0629.',
        proj2_t2: "\u0645\u062d\u0627\u0643\u0627\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629",
        proj2_t3: "\u0641\u064a\u0632\u064a\u0627\u0621",
        proj2_t4: "\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
        proj3_name: "Sera (قيد التطوير)",
        proj3_desc: 'تطوير لعبة <strong>Sera</strong> حالياً، لعبة مستقلة مبنية بـ Unity تتميز بميكانيكيات لعب غامرة وتجارب مدعومة بالذكاء الاصطناعي.',
        proj3_t2: "لعبة مستقلة",
        proj3_t3: "قيد التطوير",
        proj3_t4: "ذكاء اصطناعي",
        edu_title: "\u0627\u0644\u062a\u0639\u0644\u064a\u0645 \u0648\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a",
        edu1_name: "\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633 \u0639\u0644\u0648\u0645 \u0641\u064a \u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        edu1_place: "\u062c\u0627\u0645\u0639\u0629 \u0637\u064a\u0628\u0629",
        edu1_desc: "\u0623\u0633\u0627\u0633 \u0642\u0648\u064a \u0641\u064a \u0627\u0644\u0645\u0646\u0637\u0642 \u0627\u0644\u062d\u0633\u0627\u0628\u064a \u0648\u0627\u0644\u0641\u064a\u0632\u064a\u0627\u0621 \u0648\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u0645\u0639\u0642\u062f\u0629.",
        edu2_name: "\u0634\u0647\u0627\u062f\u0629 Unity \u0627\u0644\u0645\u0639\u062a\u0645\u062f\u0629",
        edu2_desc: "\u0643\u0641\u0627\u0621\u0629 \u0645\u0639\u062a\u0645\u062f\u0629 \u0641\u064a \u062a\u0637\u0648\u064a\u0631 Unity \u0648\u0645\u0628\u0627\u062f\u0626 \u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0623\u0644\u0639\u0627\u0628 \u0648\u0628\u0631\u0645\u062c\u0629 C#.",
        lang_title: "\u0627\u0644\u0644\u063a\u0627\u062a",
        lang_arabic: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        lang_native: "\u0644\u063a\u0629 \u0623\u0645",
        lang_english: "\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629",
        lang_fluent: "متوسط",
        contact_title: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a",
        contact_desc: "\u0623\u0646\u0627 \u062f\u0627\u0626\u0645\u0627\u064b \u0645\u0646\u0641\u062a\u062d \u0639\u0644\u0649 \u0627\u0644\u0641\u0631\u0635 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0648\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0648\u0645\u0634\u0627\u0631\u064a\u0639 \u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0623\u0644\u0639\u0627\u0628 \u0627\u0644\u0645\u0645\u064a\u0632\u0629. \u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0644\u062f\u064a\u0643 \u0633\u0624\u0627\u0644 \u0623\u0648 \u062a\u0631\u064a\u062f \u0625\u0644\u0642\u0627\u0621 \u0627\u0644\u062a\u062d\u064a\u0629\u060c \u0644\u0627 \u062a\u062a\u0631\u062f\u062f!",
        contact_email: "\u0631\u0627\u0633\u0644\u0646\u064a",
        footer_built: "\u062a\u0635\u0645\u064a\u0645 \u0648\u0628\u0646\u0627\u0621",
        footer_rights: "\u00a9 2026 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629",
        typed_titles: ["\u0645\u0628\u0631\u0645\u062c \u0623\u0644\u0639\u0627\u0628 Unity", "\u0645\u0637\u0648\u0631 XR", "\u0645\u062a\u062e\u0635\u0635 \u062f\u0645\u062c \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a", "\u062e\u0628\u064a\u0631 C#"]
    }
};

// ========== State ==========
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// ========== Apply Language ==========
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];
    const html = document.documentElement;

    // Set direction and lang
    html.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update lang toggle button
    document.getElementById('langLabel').textContent = lang === 'en' ? 'AR' : 'EN';

    // Restart typing effect with new titles
    titles = t.typed_titles;
    titleIndex = 0;
    charIndex = 0;
    isDeleting = false;
}

// ========== Apply Theme ==========
function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        document.getElementById('themeIcon').className = 'fas fa-moon';
    } else {
        document.body.removeAttribute('data-theme');
        document.getElementById('themeIcon').className = 'fas fa-sun';
    }
}

// ========== Theme Toggle ==========
document.getElementById('themeToggle').addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ========== Language Toggle ==========
document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
});

// ========== Typing Effect ==========
let titles = translations[currentLang].typed_titles;
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById('typedText');

function typeEffect() {
    const current = titles[titleIndex];
    
    if (isDeleting) {
        typedText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ========== Navbar Scroll Effect ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== Active Nav Link ==========
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ========== Mobile Nav Toggle ==========
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksEl.classList.toggle('active');
});

navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinksEl.classList.remove('active');
    });
});

// ========== Scroll Animations ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .education-card, .language-card, .timeline-item, .about-content, .contact-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========== Particles Background ==========
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 60;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        const rgb = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || '99, 102, 241';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${this.opacity})`;
        ctx.fill();
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function connectParticles() {
    const rgb = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || '99, 102, 241';
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
                const opacity = (1 - dist / 150) * 0.15;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${rgb}, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    connectParticles();
    requestAnimationFrame(animateParticles);
}

animateParticles();

// ========== Smooth scroll for all anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== Initialize ==========
applyTheme(currentTheme);
applyLanguage(currentLang);
