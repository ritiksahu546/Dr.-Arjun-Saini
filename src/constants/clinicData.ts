export interface ClinicInfo {
  name: string;
  nameHindi: string;
  doctorName: string;
  doctorNameHindi: string;
  degrees: string;
  university: string;
  specialty: string;
  specialtyHindi: string;
  phone1: string;
  phone2: string;
  phone1Display: string;
  phone2Display: string;
  whatsappNumber: string;
  address: {
    landmark: string;
    area: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  timings: string;
  timingsHindi: string;
  mapsUrl: string;
}

export const CLINIC_DATA: ClinicInfo = {
  name: 'Kastbhanjan Bawasir & General Clinic',
  nameHindi: 'कष्टभंजन बवासीर एवं जनरल क्लीनिक',
  doctorName: 'Dr. Arjun Saini',
  doctorNameHindi: 'डॉ. अर्जुन सैनी',
  degrees: 'B.A.M.S., PGCKS',
  university: 'Parul University, Gujarat',
  specialty: 'Anorectal Specialist',
  specialtyHindi: 'गुदा रोग विशेषज्ञ',
  phone1: '8679610351',
  phone2: '8650164386',
  phone1Display: '+91 86796-10351',
  phone2Display: '+91 86501-64386',
  whatsappNumber: '918679610351',
  address: {
    landmark: 'Near M.S. Hospital',
    area: 'Bus Stand',
    city: 'Gangoh',
    state: 'Uttar Pradesh',
    country: 'India',
    full: 'Near M.S. Hospital, Bus Stand, Gangoh, Uttar Pradesh, India',
  },
  timings: '7:00 AM – 9:00 PM',
  timingsHindi: 'प्रातः 7:00 बजे से सायं 9:00 बजे तक (प्रतिदिन)',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=M.S.+Hospital+Bus+Stand+Gangoh+Uttar+Pradesh',
};

export interface ServiceItem {
  id: string;
  title: string;
  titleHindi: string;
  category: 'anorectal' | 'ent' | 'general';
  shortDesc: string;
  details: string;
  symptoms: string[];
  ayurvedicApproach: string;
  iconName: string;
}

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'bawasir-piles',
    title: 'Bawasir / Piles (Arsha)',
    titleHindi: 'बवासीर (अर्श)',
    category: 'anorectal',
    shortDesc: 'Ayurvedic consultation and therapeutic assessment for internal and external piles.',
    details: 'Piles (Arsha in Ayurveda) are swollen veins in the lower rectum and anus. Ayurvedic care focuses on digestive fire correction (Agni Deepana), relieving constipation, reducing local inflammation, and staging the condition for tailored therapy.',
    symptoms: ['Painless bleeding during bowel movement', 'Swelling or lumps around the anus', 'Discomfort or itching in the anal region', 'Feeling of incomplete evacuation'],
    ayurvedicApproach: 'Internal medication, dietary fiber optimization, sitz bath (Avagaha Sweda), and specialized para-surgical evaluation if indicated.',
    iconName: 'Activity',
  },
  {
    id: 'fissure',
    title: 'Anal Fissure (Parikartika)',
    titleHindi: 'फिशर (परिकर्तिका)',
    category: 'anorectal',
    shortDesc: 'Specialized management for painful tears in the anal mucosa with herbal healing formulations.',
    details: 'An anal fissure is a small tear or crack in the lining of the anus, often caused by passing hard stools. Ayurveda provides soothing medicated oils and gentle therapies to promote tissue repair without severe pain.',
    symptoms: ['Sharp, cutting pain during and after defecation', 'Visible bright red streak of blood on stool or tissue', 'Anal sphincter spasm and intense burning', 'Hesitation or fear of bowel evacuation'],
    ayurvedicApproach: 'Local medicated ghee/oil application (Jatyadi Taila), laxative herbs to soften stools, warm herbal sitz baths, and sphincter relaxation techniques.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'fistula',
    title: 'Fistula in Ano (Bhagandara)',
    titleHindi: 'भगंदर (फिस्टुला)',
    category: 'anorectal',
    shortDesc: 'Comprehensive clinical evaluation and traditional Kshar Sutra therapy for anal fistula tracks.',
    details: 'Fistula in Ano is an abnormal tunnel connecting an infected cavity in the anus to the exterior skin. It often recurs after conventional excision if the primary internal opening is not treated. Ayurvedic Kshar Sutra is renowned for resolving fistula tracks.',
    symptoms: ['Persistent or intermittent pus/watery discharge from perineal skin', 'Painful swelling near the anus that bursts and drains', 'Recurrent low-grade fever or localized discomfort', 'Skin irritation and itching around the perineum'],
    ayurvedicApproach: 'Kshar Sutra parasurgical management, antiseptic herbal washes (Triphala Kashaya), and immune-supporting herbal formulations.',
    iconName: 'GitCommit',
  },
  {
    id: 'hemorrhoids',
    title: 'Hemorrhoids (Internal & External)',
    titleHindi: 'हेमोरोइड्स (आंतरिक एवं बाह्य मस्से)',
    category: 'anorectal',
    shortDesc: 'Staging and non-invasive Ayurvedic consultation to control bleeding and venous engorgement.',
    details: 'Differentiating between prolapsing internal hemorrhoids and thrombosed external piles is critical. Dr. Arjun Saini conducts focused clinical examinations to advise appropriate conservative or minimally invasive procedures.',
    symptoms: ['Protrusion of mass during straining', 'Anal irritation and soreness', 'Tender lump at the anal verge', 'Chronic constipation with pressure'],
    ayurvedicApproach: 'Digestive fire stimulation, venous decongestant herbs, herbal pastes (Lepa), and personalized lifestyle counseling.',
    iconName: 'HeartPulse',
  },
  {
    id: 'kshar-sutra',
    title: 'Kshar Sutra Ayurvedic Care',
    titleHindi: 'क्षार सूत्र आयुर्वेदिक चिकित्सा',
    category: 'anorectal',
    shortDesc: 'Traditional Ayurvedic medicated thread therapy for complex fistula and selected piles.',
    details: 'Kshar Sutra is a time-tested Ayurvedic parasurgical technique using a surgical linen thread coated with botanical extracts (Snuhi latex, Apamarga kshara, and Haridra powder). It steadily cuts and cures the track with minimal disruption to sphincter integrity.',
    symptoms: ['High and low anal fistulae', 'Chronic non-healing sinuses', 'Selected polypoid piles and recurrent tracks', 'Conditions unsuitable for major conventional surgery'],
    ayurvedicApproach: 'Standardized sterile Kshar Sutra application, gradual weekly changes until track closure, with preservation of continence.',
    iconName: 'Sparkles',
  },
  {
    id: 'anorectal-problems',
    title: 'General Anorectal Problems',
    titleHindi: 'गुदा संबंधी अन्य रोग',
    category: 'anorectal',
    shortDesc: 'Diagnosis and relief for perianal itching (pruritus ani), anal cryptitis, and anal spasm.',
    details: 'Disorders such as chronic perianal eczema, proctitis, rectal prolapse, and burning sensation require an experienced anorectal specialist to rule out underlying causes and offer targeted relief.',
    symptoms: ['Perianal itching and burning', 'Feeling of heaviness in pelvic region', 'Anal discharge or mucous on stools', 'Pain radiating to tailbone or lower back'],
    ayurvedicApproach: 'Pitta-pacifying herbs, cooling herbal compresses, medicated enemas (Matra Basti) if indicated, and dietary corrections.',
    iconName: 'Stethoscope',
  },
  {
    id: 'nasal-polyps',
    title: 'Nasal Polyps (Nasa Arsha)',
    titleHindi: 'नाक के मस्से (नेजल पॉलिप्स)',
    category: 'ent',
    shortDesc: 'Ayurvedic evaluation for non-cancerous mucosal growths in the nasal cavities.',
    details: 'Nasal polyps cause chronic nasal congestion, mouth breathing, and loss of smell. Ayurvedic treatment addresses chronic Kapha vitiation, mucosal edema, and recurrent allergies through classical Nasya and herbal formulations.',
    symptoms: ['Blocked nose and breathing difficulty', 'Persistent runny nose or post-nasal drip', 'Reduced sense of smell and taste', 'Frequent headaches and snoring'],
    ayurvedicApproach: 'Ayurvedic Nasya therapy (medicated nasal drops), anti-inflammatory herbs, steam inhalation, and immunity enhancement.',
    iconName: 'Wind',
  },
  {
    id: 'sinus-problems',
    title: 'Sinus Problems (Dushta Pratishyaya)',
    titleHindi: 'साइनस की समस्या (दृष्ट प्रतिश्याय)',
    category: 'ent',
    shortDesc: 'Holistic Ayurvedic therapy for chronic sinusitis, facial pressure, and recurrent congestion.',
    details: 'Sinusitis involves inflammation of the tissue lining the sinuses. Ayurveda aims to clear blocked sinus passages, balance Kapha-Vata doshas, and strengthen respiratory resistance against seasonal changes.',
    symptoms: ['Facial pain and pressure around forehead and eyes', 'Thick discolored nasal discharge', 'Recurrent morning headaches', 'Fatigue and throat irritation'],
    ayurvedicApproach: 'Nasal cleansing (Jala Neti / Nasya), herbs like Trikatu, Tulsi, and Haridra, along with steam therapy.',
    iconName: 'Sun',
  },
  {
    id: 'general-consultation',
    title: 'General Ayurvedic Consultation',
    titleHindi: 'सामान्य आयुर्वेदिक परामर्श',
    category: 'general',
    shortDesc: 'Comprehensive Ayurvedic health assessment for digestive, metabolic, and chronic concerns.',
    details: 'Ayurveda views optimal health as harmony between Dosha, Dhatu, and Mala. Dr. Arjun Saini offers general consultations focusing on gastrointestinal wellness, liver health, acidity, joint stiffness, and chronic vitality.',
    symptoms: ['Chronic indigestion (Ajeerna) and acidity (Amlapitta)', 'Constipation and sluggish metabolism', 'General debility and low immunity', 'Seasonal health imbalances'],
    ayurvedicApproach: 'Prakriti assessment, Nadi Pariksha insights, authentic classical herbal remedies, and dietary guidelines (Pathya-Apathya).',
    iconName: 'UserCheck',
  },
];
