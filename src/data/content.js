// All static copy and media URLs live here (copy from tis.edu.in) so components stay presentational.
const ROOT = 'https://tis.edu.in/'
export const media = (file) => encodeURI(`https://tis.edu.in/_next/static/media/${file}`)
const sub = (labels) => labels.map((label) => ({ label, href: ROOT }))

export const SITE = {
  name: 'Tulas International School',
  helpline: '+91-9837983791',
  helplineHref: 'tel:+919837983791',
  whatsappUrl: 'https://wa.me/919837983791',
  email: 'info@tis.edu.in',
  address: 'Tulas International School, Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  mapUrl: 'https://maps.app.goo.gl/maBF8syXueQkw31E6',
  mapEmbed:
    'https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India&t=m&z=10&output=embed&iwloc=near',
  landlines: [
    { label: '0135-2699444', href: 'tel:01352699444' },
    { label: '0135-2699666', href: 'tel:01352699666' },
  ],
  applyUrl: 'https://admission.tis.edu.in',
  tourUrl: `${ROOT}virtual-tour/`,
  logo: media('schoolLogo.95f6e121.png'),
  footerLogo: media('footer-logo.230b79ff.png'),
  campusPhoto: `${ROOT}images/tis-campus-og.jpg`,
}

// Dropdown labels match the live site; their pages are not rebuilt here, so they link to tis.edu.in.
export const NAV_ITEMS = [
  { label: 'About TIS', href: '#story' },
  { label: 'Academics', href: ROOT },
  { label: 'Boarding Life', href: ROOT, children: sub(['Pastoral Care', 'Food & Nutrition', 'Facilities', 'Infirmary & Medical Facilities', 'Our House System', 'Teachers Profile']) },
  { label: 'Beyond Academics', href: '#sports' },
  { label: 'Events', href: ROOT },
  { label: 'Admission', href: SITE.applyUrl, children: sub(['Admission Procedure', 'Pay Fee Online', 'Fee Structure', 'Scholarships & Programs', 'Withdrawal Policy']) },
  { label: 'Mandatory Disclosure', href: ROOT },
  { label: 'Alumni Network', href: ROOT },
  { label: 'Quick Links', href: ROOT, children: sub(['Blogs', 'Contact Us', 'Newsletter', 'Careers', 'Transfer Certificate', 'Parent Testimonial']) },
]

// Hero: two circular photos swap together every few seconds.
export const HERO = {
  srTitle: 'Welcome to Tulas International School (TIS)',
  slides: [
    { main: { src: media('Image 2.0c5295c9.webp'), bg: '#8fd400', alt: 'TIS student' }, side: { src: media('dance.88843edb.webp'), bg: '#17110f', alt: 'TIS dancer' } },
    { main: { src: media('polo.973ddbae.webp'), bg: '#f59e2b', alt: 'TIS sportsperson' }, side: { src: media('karate.4020fba5.webp'), bg: '#ffd23f', alt: 'TIS taekwondo student' } },
    { main: { src: media('Image 3.21dc9e69.webp'), bg: '#a9c8e8', alt: 'TIS student at work' }, side: { src: media('Image 1.0a814859.webp'), bg: '#ffd23f', alt: 'TIS student' } },
    { main: { src: media('swimming.6fc81e65.webp'), bg: '#9a86bb', alt: 'TIS swimmer' }, side: { src: media('pot.6f7c2ee3.webp'), bg: '#6fd0d6', alt: 'TIS pottery class' } },
  ],
}

export const VOICES = [
  {
    quote: 'We feel supported in what we do and nudged further to do more',
    text: 'At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.',
    portrait: { src: media('ladyInPink.c358aa8f.png'), bg: '#c9465a', alt: 'TIS student in pink' },
  },
  {
    quote: 'Tulas helped me thrive and become the best version of myself',
    text: 'When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.',
    portrait: { src: media('manInBlue.46316cbf.png'), bg: '#1d9aa5', alt: 'TIS student in blue' },
  },
]

export const SPORTS_COPY = {
  lead: ['It’s not just a ', 'facility', '. At Tulas it’s the ', 'foundation!'],
  badge: '16+',
  sub: 'sports curated to bring joy and discipline to your life.',
}

export const SPORTS = [
  ['Archery', 'archery.7a805345.png'], ['Cycling', 'cycling.80dbb9b1.png'], ['Hockey', 'hockey.219fe552.png'],
  ['Swimming', 'swimming.d4285534.png'], ['Taekwondo', 'taekwando.86e26406.png'], ['Football', 'football.ca61e5d0.png'],
  ['Shooting Range', 'shooting.b0b11d74.png'], ['Horse Riding', 'horseRiding.8f259127.png'],
  ['Billiards', 'billiards-single.a1e831c6.png'], ['Squash', 'squash.ffa0360a.png'], ['Volleyball', 'volleyball.045be884.png'],
  ['Basketball', 'basketball.fa70909d.png'], ['Cricket', 'Cricket.b06b18ca.png'], ['Lawn Tennis', 'lawnTennis.7b3b894a.png'],
  ['Badminton', 'badminton.a314ff00.png'], ['Table Tennis', 'tableTennis.61f6bd56.png'],
].map(([name, file]) => ({ name, src: media(file) }))

// Full-bleed storytelling panels. Photos are stand-ins taken from the live site: swap in your own via these URLs.
export const STORY = {
  panels: [
    { id: 'trips', lines: ['INTERNATIONAL TRIPS'], src: media('Image 3.21dc9e69.webp') },
    { id: 'future', lines: ['Prepare your child', 'for the future with the best!'], src: media('Image 1.0a814859.webp') },
    {
      id: 'why',
      lines: ['Why Tulas International School', 'is the best boarding school', 'for your child?'],
      src: SITE.campusPhoto,
      copy: [
        'TIS is one of India’s top boarding and day schools in Dehradun, India.',
        'Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.',
        'We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.',
      ],
    },
  ],
}

export const SECRET = {
  established: 'Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.',
  question: 'At Tulas, we always ask, “What’s the secret to making school awesome?”',
  answer: 'The secret to making one’s school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.',
  punchline: 'There, we cracked it!',
  image: { src: media('AtTIS.59351600.png'), alt: 'Students enjoying campus life at TIS' },
}

export const STATS = [
  { kind: 'stat', icon: 'campus', to: 22, label: 'Acre pollution-free campus' },
  { kind: 'stat', icon: 'sports', to: 16, suffix: '+', label: 'Olympic sports' },
  { kind: 'photo', src: media('image3.b8273b93.png'), alt: 'Students on the TIS campus' },
  { kind: 'stat', icon: 'medical', text: '24*7', label: 'Medical assistance' },
  { kind: 'photo', wide: true, src: media('image2.5d908b38.webp'), alt: 'Students celebrating at TIS' },
  { kind: 'stat', icon: 'ratio', text: '6:1', label: 'Student-teacher ratio' },
  { kind: 'photo', src: media('image1.a3011dda.png'), alt: 'TIS classroom' },
]

export const RANKINGS = [
  { rank: '#1', place: 'In Dehradun', text: 'Co-Educational Boarding School in Dehradun by Education Today' },
  { rank: '#2', place: 'In Uttarakhand', text: 'Co-Educational Boarding School in North India by Education Today' },
  { rank: '#1', place: 'In North India', text: 'Co-Educational Boarding School in North India by Outlook' },
  { rank: '#4', place: 'In India', text: 'Co-Educational Boarding School in India by Education Today' },
]

export const AWARDS = {
  intro: 'We believe in celebrating the hard work and perseverance of the best!',
  images: [
    { src: media('TopBoarding.e5405c1a.jpg'), alt: 'Top Boarding School award' },
    { src: media('BestResidential.5173db8d.jpg'), alt: 'Best Residential School award' },
    { src: media('UTTARAKHAND.652376d5.jpg'), alt: 'Uttarakhand school award' },
  ],
  tourImage: media('360.75b351f1.png'),
}

export const PARENTS = {
  quote: 'We have seen a remarkable improvement in our child’s confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life.',
  videos: [1, 2, 3].map((n) => ({ src: `https://assets.tulas.edu.in/tis/${n}VIDEO-compressed.mp4`, label: `Parent testimonial video ${n}` })),
}

const review = (name, relation, file, text) => ({ name, relation, avatar: media(file), text })
export const REVIEWS = [
  review('Tashi Tsering', 'F/O Jigmet Skaldon', 'tashi.3807cb3c.png', 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.'),
  review('Namita Agarwal', 'M/O Krishna Agarwal', 'namita.86a0f799.png', 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.'),
  review('Sandeep Kumar', 'F/O Aryan', 'sandeep.1b22b59e.png', 'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.'),
  review('Pinky Sharma', 'M/O Swastik Sharma', 'pinky.8d7145b0.png', 'I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.'),
  review('Suresh Kumar', 'F/O Aditya Kumar', 'suresh.80d60e49.png', 'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.'),
  review('Mrs Urja Bhayani', 'M/O Shikha & Samarth Bhayani', 'urja.03e3c3f3.png', 'Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.'),
  review('Amit Agrawal', 'F/O Samruddhi Agrawal', 'amit.c7b6247e.png', 'Being a parent it’s a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features.'),
  review('Ashu Arora', 'M/O Manisha Changrani', 'ashu.9d447126.png', 'It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.'),
  review('Gulabdas Gupta', 'F/O Annika Gulabdas Gupta', 'gulabdas.63ce81d8.png', 'We admitted our daughter, Annika Gulabdas Gupta, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.'),
  review('Selendra K. Ajmera', 'F/O Aman Ajmera', 'salendra.42b32ea1.png', 'Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.'),
]
export const REVIEWS_BG = media('googleReviewsBackground.3003d907.png')

export const COLLABORATIONS = [
  'Universidad.935e33e1.png', 'yhnbepcntet.3b80eac6.jpg', 'Universitat.f7fac869.jpg', 'Cpi6.106c6037.jpg',
  'inseec.780a3115.png', 'Trinty.31016999.png', 'University.6c89dc70.png',
  'International_Award_for_Young_People_logo.a0d1c4fa.jpg', 'lions.bf493cc1.png', 'inseecU.1e5c929a.png',
  'Universitas.d9db402c.png', 'universityLogo.6e446aad.jpg',
].map((file, i) => ({ src: media(file), alt: `Collaboration partner ${i + 1}` }))

export const CLASSES = ['Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI', 'Class XII']
export const STATES = [
  'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh',
  'Dadra and Nagar Haveli', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand',
  'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal', 'Other',
]

export const FOOTER_LINKS = [
  { label: 'FAQ', href: `${ROOT}faq/` },
  { label: 'Calendar', href: `${ROOT}MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf` },
  { label: 'Brochure', href: `${ROOT}MandatoryPDF/TIS_BROCHURE.pdf` },
  { label: 'Privacy Policy', href: `${ROOT}privacy-policy/` },
  { label: 'Terms & Conditions', href: `${ROOT}terms-conditions/` },
  { label: 'Disclaimer', href: `${ROOT}disclaimer/` },
  { label: 'Disciplinary Policy', href: `${ROOT}MandatoryPDF/DisciplinaryPolicy.pdf` },
  { label: 'Mobile Phone Policy', href: `${ROOT}MandatoryPDF/MobilePhonePolicy.pdf` },
  { label: 'Child Welfare & Safety Policy', href: `${ROOT}MandatoryPDF/childWelfarePolicy.pdf` },
]

export const SOCIALS = [
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
  { key: 'twitter', label: 'Twitter', href: 'https://twitter.com/tulas_intschool?lang=en' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in' },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/?hl=en' },
  { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
]
