import { media } from './content'

export const PEOPLE_GROUPS = [
  { id: 'sports', title: 'Influential Personalities On Campus', subtitle: 'Sports Person/Social Media Influencers' },
  { id: 'leaders', title: 'Leaders of India', subtitle: '' },
]

const p = (name, file, role) => ({ name, image: media(file), role })

export const PEOPLE = {
  sports: [
    p('Sakshi Malik', 'SakshiMalik.91174bf4.webp', 'First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014 Commonwealth Games, Rajeev Gandhi Khel Ratan Awardee 2016, Padma Shri Awardee 2017'),
    p('Vishesh Bhriguvanshi', 'VisheshBhriguvanshi.52af8bfd.webp', 'Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his Captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008'),
    p('Prakashi Tomar & Late Ms Chandro Tomar', 'PrakashiTomar.339dbb95.webp', 'Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the Biopic Movie “Saand ke Aakh”, known as Shooter Dadi, 30 National Championship winner'),
    p('Abhishek Verma', 'AbhishekVerma.18f9d349.webp', '6th Highest World Ranking, Arjuna Awardee, Asian Games Gold Medalist in Archery 2013'),
    p('Aditi Gopichand Swami', 'AditiGopichandSwami.b7afa246.webp', '7th Highest World Ranking, Arjuna Awardee, World Champion in Archery 2024'),
    p('Jeevan Jyot Singh Teja', 'JeevanJyotSinghTeja.9a07711c.webp', 'Dronacharya Awardee in Archery 2022'),
    p('Ojus Devtale', 'OjasPravinDeotale.1d2e01cc.webp', '9th Highest World Ranking, Arjuna Awardee 2023 and current world champion in Archery'),
    p('Rajat Chauhan', 'RajatChauhan.bcb1fbf2.webp', '5th Highest World Ranking Arjuna Awardee 2016 in Archery'),
    p('Devendra Singh Bisht', 'DevendraSinghBisht.09635f71.webp', 'Under 18 School Indian Football Team Selector'),
    p('Manish Metani', 'ManishMetani.ca55bf71.webp', 'Indian Football Player'),
    p('Saurabh Joshi', 'SaurabhJoshi.450ff5df.webp', 'Influencer with 30 Million Subscribers on YouTube'),
    p('Arushi Nishank', 'ArushiNishank.f3341404.webp', 'Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga'),
    p('Laxmi Agarwal', 'LakshmiAgarwal.7405df5d.webp', 'International Women Empowerment Award from the Ministry of Women and Child Development, Founder and President of The Laxmi Foundation, a NGO dedicated to acid attack victims. Deepika Padukone acted in the Biopic movie “Chhapaak” based on her'),
  ],
  leaders: [
    p('Shri Dhan Singh Rawat Ji', 'DhanSinghRawat.f504bd14.webp', 'Minister of Higher Education, Uttarakhand'),
    p('Shri Trivendra Singh Rawat Ji', 'TrivendraSinghRawat.c2e8d88b.webp', 'Member of Parliament & Former Chief Minister, Uttarakhand'),
    p('Shri Subodh Uniyal Ji', 'SubodhUniyal.25533860.webp', 'Technical Education and Forest Minister, Uttarakhand'),
    p('Dr Ramesh Pokhriyal Nishank Ji', 'RameshPokhriyalNishank.5f11fd77.webp', 'Former Union Cabinet Minister for Education, Government of India | Former Chief Minister of Uttarakhand'),
    p('Shri Bhagat Singh Koshyari Ji', 'BhagatSinghKoshyari.f996a329.webp', 'Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand'),
    p('Shri Dharmendra Pradhan Ji', 'DharmendraPradhan.cae1e9ae.webp', 'Union Minister of Education for India'),
    p('Shri Anurag Tripathi Ji', 'AnuragTripathi.a8e203b4.webp', 'CBSE Secretary Uttarakhand'),
    p('Shri Arvind Pandey Ji', 'ArvindPandey.3f959220.webp', 'MLA, Former Education Minister'),
    p('Shri Namami Bansal Ji', 'NamamiBansal.97f4f1f0.webp', 'I.A.S Municipal Commissioner Uttarakhand'),
    p('Shri Abhinav Kumar Ji', 'AbhinavKumar.8cbdb15a.webp', 'ADG and former DGP of Uttarakhand Police'),
    p('Shri Janmejaya Khanduri Ji', 'JanmejayaKhanduri.18ae0527.webp', 'IG Dehradun - Government of India'),
    p('Shri Ashok Kumar Ji', 'AshokKumar.b9a984fa.webp', 'Former DGP, Uttarakhand'),
    p('Shri Amit Kumar Sinha Ji', 'AmitKumarSinha.5e245cdc.webp', 'ADG, Principal Secretary Sports, Uttarakhand'),
    p('Shri Sunil Uniyal Gama Ji', 'SunilUniyalGama.55361603.webp', 'Former Mayor Municipal Corporation, Dehradun'),
    p('Shri Sahdev Singh Pundir Ji', 'SahdevSinghPundir.7aa9859f.webp', 'MLA Sahaspur, Uttarakhand'),
  ],
}
