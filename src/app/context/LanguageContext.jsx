"use client";
import React, { createContext, useContext, useState } from "react";

const translations = {
  english: {
    // Navigation
    about: "About",
    obaAkiolu: "Oba Akiolu",
    history: "History",
    blog: "Blog",
    contact: "Contact",
    search: "Search...",
    yearRange: "Year",

    // Headers and Titles
    aboutTheKing: "About The King",
    welcomeLegacy: "Welcome to the legacy of Lagos",
    preservingPast: "Preserving the Past, Inspiring the Future",
    culturalHeritage: "Cultural Heritage Unveiled",
    royalHeritage: "The Royal Heritage of Lagos",
    monarchOfResistance: "The Monarch of Resistance",
    monarchOfStability: "The Monarch of Stability",
    controversialMonarch: "The Controversial Monarch",
    voiceOfLagosians: "The Voice of Lagosians",
    visionaryDeveloper: "The Visionary Developer of Lagos",
    diplomaticMonarch: "The Diplomatic Monarch",
    expanderOfInfluence: "The Expander of Lagos' Influence",
    consolidatorOfLagos: "The Consolidator of Lagos",
    foundingMonarch: "The Founding Monarch",
    modernProgress: "The Monarch of Modern Progress",
    longestReigning: "The Longest-Reigning Monarch",
    transitionalMonarch: "The Transitional Monarch",
    reformistReturns: "The Reformist Returns",
    leaderTurbulentTimes: "The Leader During Turbulent Times",

    // Body Content
    discoverRichHistory:
      "Discover the rich history and cultural significance of the Obas of Lagos, guardians of our traditions and bridges to our future",
    whyThisMatters: "Why This Matters",
    exploreAndLearn: "Explore & Learn",
    getStartedToday: "Get Started Today",
    exploreTimeline: "Explore the Timeline",
    viewGallery: "View Our Gallery",
    learnMore: "Learn More",
    joinExperience: "Join the Royal Experience",
    signUpNow: "Sign Up Now",
    culturalSignificance: "Cultural Significance",
    traditionalCeremonies: "Traditional Ceremonies",
    modernInfluence: "Modern Influence",
    earlyLife: "Early Life and Background",
    reignAchievements: "Reign and Key Achievements",
    challenges: "Challenges",
    legacy: "Legacy and Significance",
    conclusion: "Conclusion",
    deathSuccession: "Death and Succession",

    // Common Section Headers
    governance: "Governance and Reforms",
    economicDev: "Economic Development",
    culturalPreservation: "Cultural Preservation",
    diplomaticRelations: "Diplomatic Relations",

    // Footer
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    allRightsReserved: "All rights reserved",
    readMore: "Read More",
    subscribeNewsletter: "Subscribe to our newsletter",
    emailPlaceholder: "Enter your email",
    submit: "Submit",

    aboutLegacyLagos: "About The Legacy of Lagos",
    aboutDescription:
      "The Legacy of Lagos stands as a digital testament to the rich historical tapestry of Lagos's royal heritage. Our platform serves as a comprehensive repository of knowledge, documenting the illustrious lineage of the Obas of Lagos and their profound impact on shaping the cultural landscape of this great city.",
    missionVision: "Our Mission & Vision",
    missionDescription:
      "Our mission is to preserve, document, and share the centuries-old legacy of the Obas of Lagos, ensuring that their historical significance and cultural contributions remain accessible to both current and future generations. Through meticulous research and digital preservation, we aim to bridge the gap between traditional heritage and modern understanding.",
    visionDescription:
      "We envision becoming the foremost digital authority on Lagos's royal heritage, creating an educational platform that not only honors the past but also inspires future generations to appreciate and uphold the cultural values and traditions that have shaped Lagos.",
    royalGallery: "Royal Gallery",
    galleryDescription:
      "Explore the visual journey through time, capturing the essence of Lagos's royal heritage and cultural celebrations.",
    all: "All",
    modern: "Modern Era",
    cultural: "Cultural Events",
    historical: "Historical",
  },
  yoruba: {
    // Navigation
    about: "Nipa",
    obaAkiolu: "Ọba Akiolu",
    history: "Ìtàn",
    blog: "Bulọọgu",
    contact: "Kànsí",
    search: "Wá...",
    yearRange: "Ọdún",

    // Headers and Titles
    aboutTheKing: "Nipa Ọba",
    welcomeLegacy: "Ẹ káàbọ̀ sí ogún Èkó",
    preservingPast: "Pípa àṣà mọ́, Ṣíṣe ìtọ́kasí Ọjọ́ ọ̀la",
    culturalHeritage: "Àṣà wa",
    royalHeritage: "Ogún Ọba Èkó",
    monarchOfResistance: "Ọba Àtakò",
    monarchOfStability: "Ọba Ìdúróṣinṣin",
    controversialMonarch: "Ọba Aláìlójú Kan",
    voiceOfLagosians: "Ohùn Ará Èkó",
    visionaryDeveloper: "Olùgbékalẹ̀ Èkó",
    diplomaticMonarch: "Ọba Oníwọ̀n",
    expanderOfInfluence: "Olùmúga Àṣẹ Èkó",
    consolidatorOfLagos: "Olùmúdúró Èkó",
    foundingMonarch: "Ọba Àtẹ̀dó",
    modernProgress: "Ọba Ìdàgbàsókè Òde-òní",
    longestReigning: "Ọba Pẹ́ Lórí Ìtẹ́ Jùlọ",
    transitionalMonarch: "Ọba Ìyípadà",
    reformistReturns: "Olùtúnṣe Padà",
    leaderTurbulentTimes: "Olùdarí Ní Àkókò Ìrúkèrúdò",

    // Body Content
    discoverRichHistory:
      "Ẹ wá kẹ́kọ̀ọ́ nípa ìtàn àti pàtàkì àṣà àwọn Ọba Èkó, àwọn olùtọ́jú àṣà wa àti àlàjọ sí ọjọ́ ọ̀la",
    whyThisMatters: "Kí ló Dé tó Fi Ṣe Pàtàkì",
    exploreAndLearn: "Ṣàwárí & Kẹ́kọ̀ọ́",
    getStartedToday: "Bẹ̀rẹ̀ Lónìí",
    exploreTimeline: "Ṣàwárí Àkókò",
    viewGallery: "Wo Àwòrán",
    learnMore: "Kẹ́kọ̀ọ́ Síi",
    joinExperience: "Darapọ̀ mọ́ Ìrírí Ọba",
    signUpNow: "Forúkọ Sílẹ̀ Báyìí",
    culturalSignificance: "Pàtàkì Àṣà",
    traditionalCeremonies: "Àṣà Ìbílẹ̀",
    modernInfluence: "Ipa Òde-Òní",
    earlyLife: "Ìgbésí Ayé Àkọ́kọ́ àti Ìpìlẹ̀",
    reignAchievements: "Àkókò Ìjọba àti Àṣeyọrí",
    challenges: "Àwọn Ìṣòro",
    legacy: "Ogún àti Pàtàkì",
    conclusion: "Ìparí",
    deathSuccession: "Ikú àti Ìrọ́pò",

    // Common Section Headers
    governance: "Ìṣàkóso àti Àtúnṣe",
    economicDev: "Ìdàgbàsókè Ọrọ̀-ajé",
    culturalPreservation: "Ìtọ́jú Àṣà",
    diplomaticRelations: "Ìbásepọ̀ Oríṣìíríṣìí",

    // Footer
    quickLinks: "Àwọn Ọ̀nà Tètè",
    contactInfo: "Ìwífún Ìbásọ̀rọ̀",
    allRightsReserved: "Gbogbo ẹ̀tọ́ wà ní pàmọ́",
    readMore: "Ka Síwájú",
    subscribeNewsletter: "Forúkọ sílẹ̀ fún ìròyìn wa",
    emailPlaceholder: "Fi email rẹ sí ibí",
    submit: "Fifiránṣẹ́",

    aboutLegacyLagos: "Nípa Ogún Èkó",
    aboutDescription:
      "Ogún Èkó dúró gẹ́gẹ́ bí ẹ̀rí díígítà fún ìtàn ọlá àṣà ọba Èkó. Ojú òpó wa jẹ́ ibi ìkójọpọ̀ ìmọ̀, tí ó ń ṣe àkọsílẹ̀ ìran àwọn Ọba Èkó àti ipa ńlá wọn lórí àwùjọ ìlú ńlá yìí.",
    missionVision: "Ìfẹ́ àti Ìwòye Wa",
    missionDescription:
      "Ìfẹ́ wa ni láti pa, ṣe àkọsílẹ̀, àti pín ogún ọ̀pọ̀lọpọ̀ ọdún àwọn Ọba Èkó mọ́, ní ṣíṣe rí dájú pé pàtàkì ìtàn àti àṣà wọn wà ní ìrọ̀rùn fún ìran àtìsísinyi àti ọjọ́ iwájú. Nípasẹ̀ ìwádìí kíkún àti ìtọ́jú díígítà, a ń gbìyànjú láti so àsà àtijọ́ pọ̀ mọ́ òye òde-òní.",
    visionDescription:
      "A ń wòye láti di olórí àṣẹ díígítà lórí ogún ọba Èkó, ní ṣíṣe dá ojú òpó ẹ̀kọ́ tí kò ní ṣe àfojúsùn àsà nìkan ṣùgbọ́n tún ń mú kí àwọn ìran tuntun ní ìmọ̀lára àti ṣe àtìlẹ́yìn fún àṣà àti ìṣe tí ó ti ṣe Èkó.",
    royalGallery: "Àkójọpọ̀ Àwòrán Ọba",
    galleryDescription:
      "Ṣàwárí ìrìn-àjò nípa àwòrán láti ìgbà pípẹ́, ní fífi hàn pàtàkì ogún ọba àti àjọyọ̀ àṣà Èkó.",
    all: "Gbogbo rẹ̀",
    modern: "Ìgbà Òde-òní",
    cultural: "Àjọyọ̀ Àṣà",
    historical: "Ti Àtijọ́",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "yoruba" : "english"));
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
