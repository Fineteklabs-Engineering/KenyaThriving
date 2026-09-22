// Story content for /inspiring-stories/:slug
// Body blocks: { k: 'lead' | 'p' | 'h' | 'quote', t: '...' } — array order = display order.

export const STORIES = [
  {
    slug: 'nessy',
    name: 'Nessy',
    portrait: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1788165649/Nessy-Atieno-Grade-9-2025_vwlumk.jpg',
    standfirst:
      'Orphaned at five and lost in despair, a withdrawn little girl slowly found her smile - and a love of running - through years of patient care.',
    tags: ['Junior Secondary', 'Athletics', 'Poetry'],
    body: [
      { k: 'lead', t: "Nessy's experience is so very familiar to many children in Kenya. Losing one parent to HIV/AIDS causes trauma for any family, but then to lose the other parent, when Nessy was only five years old, almost broke her emotionally. Whilst she had someone who fed her, there were no cuddles nor anyone to dry her tears in the night. Soon this little girl lost her zest for life and sunk into despair. She was very vulnerable and marginalised as an orphan." },
      { k: 'p', t: "She was offered a place at a children's home where her broken spirit was handled with kindness and patience; it was okay to cry, to miss her family and to ask questions. Nessy remained withdrawn for a long time, isolating herself from the others, but she was encouraged to talk about how she felt within an environment which was safe and warm." },
      { k: 'quote', t: 'As the darkness began to fade, her smile began to shine through more and more.' },
      { k: 'p', t: 'It has taken years for this child to heal; her journey has taken resilience and patience. Nessy is still on her journey of recovery.' },
      { k: 'p', t: 'Part of that recovery can be seen in her school work. She has now graduated to Junior Secondary School and is enjoying better academic results, but her favourite subject of all is sports, particularly athletics. She loves to run. She is probably unaware of how much this will relieve her stress, but it is an activity she has been encouraged to join in with at school and she now takes part with a passion. She loves poetry too.' },
      { k: 'p', t: 'Nessy is smiling more these days and, whilst she is still very quiet, she is known to be a kind and sharing person.' },
    ],
  },
  {
    slug: 'jane-asiko',
    name: 'Jane Asiko',
    portrait: 'https://res.cloudinary.com/gjpfbvzb/image/upload/v1790030005/Jane-Asiko_krwxaj.jpg',
    standfirst:
      'Mistreated as an orphan and nearly forced into marriage, Jane refused to give up on education - and is now set to teach.',
    tags: ['Otacho Hope School', 'KCSE C+', 'Mechanical Engineering'],
    body: [
      { k: 'lead', t: 'Following the death of both parents due to HIV/AIDS, four-year-old Jane, an only child, was mistreated by relatives.' },
      { k: 'h', t: 'The Challenge' },
      { k: 'p', t: 'The prevalence of HIV/AIDS in the Kakaro area is double the national average for Kenya, but culture dictates that relatives should care for family orphans. However, this often does not work well, due to poverty and the sheer numbers of children.' },
      { k: 'p', t: "When she was admitted to a children's home, Jane's health was poor and her little body was covered in bruises from having been beaten." },
      { k: 'h', t: 'The Solution' },
      { k: 'p', t: 'Along with the other orphans, Jane soon benefitted from the love and care that every child deserves. She started her education at Otacho Hope School (re-built by Kenya Thriving in 2012) and went on to gain a Secondary School place in January 2016. Jane performed well in her final examinations (KCSE), leaving school at the end of 2019 with a C+ grade. However, further education was beyond her reach, although she had not abandoned her dream of attending college.' },
      { k: 'p', t: "Without work or any means of support, her village elders decided Jane should be married, but she bravely refused, which caused difficulties for her. Later, the director of the Children's Home went in search of her, to discover what had happened to her. Sadly, he found that Jane had been having a very difficult time, so at her request, he took her back to the children's home in the hope that he could raise funding for her college fees and expenses. Jane remained there throughout the global pandemic of 2020. Kenya Thriving was eventually able to offer her a grant." },
      { k: 'quote', t: 'She just needed someone to believe in her, encourage her, and support her.' },
      { k: 'h', t: 'The Result' },
      { k: 'p', t: 'Jane was able to enrol at college in 2021 and fulfil her dream. She chose to study for a diploma in Community Health Science, but she performed so well that the university transferred her to Mombasa to complete a diploma in Mechanical Engineering. She has been offered the opportunity to teach at a technical school.' },
      { k: 'p', t: 'This amazing young lady has suffered trauma and loss but has shown resilience and an aptitude to learn. She knows that education offers the key to independence and a positive future.' },
    ],
  },
];

export const getStory = (slug) => STORIES.find((s) => s.slug === slug);
export const getOtherStories = (slug) => STORIES.filter((s) => s.slug !== slug);