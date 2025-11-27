// --- DATA PERTANYAN ---
const listeningQuestions = [
    {
        text: 'What does the woman mean?',
        audio: '../../assets/audio/test/listening1.mp3',
        options: [
            'A. She agrees with the man.',
            'B. She disagrees.',
            'C. She needs more time.',
            'D. She wants to leave.',
        ],
        answer: 'A',
    },
    {
        text: 'What is the man concerned about?',
        audio: '../../assets/audio/test/listening2.mp3',
        options: [
            'A. The exam date.',
            'B. The traffic jam.',
            'C. The late submission.',
            'D. The dinner reservation.',
        ],
        answer: 'C',
    },
    {
        text: 'What will the woman probably do next?',
        audio: '../../assets/audio/test/listening3.mp3',
        options: [
            'A. Go to the meeting.',
            'B. Call her friend.',
            'C. Check the weather.',
            'D. Take a taxi.',
        ],
        answer: 'D',
    },
    {
        text: 'What are they mainly discussing?',
        audio: '../../assets/audio/test/listening4.mp3',
        options: [
            'A. A job interview.',
            'B. A project deadline.',
            'C. A holiday plan.',
            'D. A new restaurant.',
        ],
        answer: 'B',
    },
    {
        text: 'Why is the woman worried?',
        audio: '../../assets/audio/test/listening5.mp3',
        options: [
            'A. She lost her wallet.',
            'B. She missed the class.',
            'C. She forgot the homework.',
            'D. She is late for the test.',
        ],
        answer: 'C',
    },
    {
        text: 'What advice does the man give?',
        audio: '../../assets/audio/test/listening6.mp3',
        options: [
            'A. Sleep early.',
            'B. Study harder.',
            'C. Take a break.',
            'D. Talk to the professor.',
        ],
        answer: 'C',
    },
    {
        text: 'Where are the speakers?',
        audio: '../../assets/audio/test/listening7.mp3',
        options: [
            'A. At a park.',
            'B. At a café.',
            'C. In an office.',
            'D. At a bus stop.',
        ],
        answer: 'B',
    },
    {
        text: 'How does the man feel about the movie?',
        audio: '../../assets/audio/test/listening8.mp3',
        options: [
            'A. It was boring.',
            'B. It was exciting.',
            'C. It was confusing.',
            'D. It was too long.',
        ],
        answer: 'B',
    },
    {
        text: 'What problem are they discussing?',
        audio: '../../assets/audio/test/listening9.mp3',
        options: [
            'A. High rent.',
            'B. Noisy neighbors.',
            'C. Broken air conditioner.',
            'D. Expensive groceries.',
        ],
        answer: 'A',
    },
    {
        text: 'What will the man probably do?',
        audio: '../../assets/audio/test/listening10.mp3',
        options: [
            'A. Call maintenance.',
            'B. Move out.',
            'C. Complain to the manager.',
            'D. Buy a fan.',
        ],
        answer: 'A',
    },
    {
        text: 'What is the topic of the lecture?',
        audio: '../../assets/audio/test/listening11.mp3',
        options: [
            'A. Climate change.',
            'B. The history of the internet.',
            'C. Space exploration.',
            'D. Renewable energy.',
        ],
        answer: 'C',
    },
    {
        text: 'What problem does the woman mention?',
        audio: '../../assets/audio/test/listening12.mp3',
        options: [
            'A. No parking space.',
            'B. Lost phone.',
            'C. Missed appointment.',
            'D. Broken laptop.',
        ],
        answer: 'D',
    },
    {
        text: 'What will the speakers do on the weekend?',
        audio: '../../assets/audio/test/listening13.mp3',
        options: [
            'A. Study together.',
            'B. Go hiking.',
            'C. Attend a concert.',
            'D. Visit family.',
        ],
        answer: 'B',
    },
    {
        text: 'What did the professor suggest?',
        audio: '../../assets/audio/test/listening14.mp3',
        options: [
            'A. Read chapter 4.',
            'B. Visit the library.',
            'C. Submit the report.',
            'D. Join the discussion.',
        ],
        answer: 'A',
    },
    {
        text: 'What happened to the man’s car?',
        audio: '../../assets/audio/test/listening15.mp3',
        options: [
            'A. It broke down.',
            'B. It was stolen.',
            'C. It was towed.',
            'D. He sold it.',
        ],
        answer: 'A',
    },
    {
        text: 'What are they planning to buy?',
        audio: '../../assets/audio/test/listening16.mp3',
        options: [
            'A. New phones.',
            'B. A sofa.',
            'C. A coffee machine.',
            'D. A TV.',
        ],
        answer: 'B',
    },
    {
        text: 'Where will the meeting be held?',
        audio: '../../assets/audio/test/listening17.mp3',
        options: [
            'A. Room 202.',
            'B. Main Hall.',
            'C. Library.',
            'D. Online.',
        ],
        answer: 'A',
    },
    {
        text: 'What did the man forget?',
        audio: '../../assets/audio/test/listening18.mp3',
        options: [
            'A. His keys.',
            'B. His ID card.',
            'C. His assignment.',
            'D. His umbrella.',
        ],
        answer: 'C',
    },
    {
        text: 'Why is the woman calling?',
        audio: '../../assets/audio/test/listening19.mp3',
        options: [
            'A. To confirm a reservation.',
            'B. To cancel an order.',
            'C. To request information.',
            'D. To complain about service.',
        ],
        answer: 'A',
    },
    {
        text: 'What time will the bus arrive?',
        audio: '../../assets/audio/test/listening20.mp3',
        options: [
            'A. 8:00 AM.',
            'B. 8:30 AM.',
            'C. 9:00 AM.',
            'D. 9:30 AM.',
        ],
        answer: 'B',
    },
    {
        text: 'What does the woman mean?',
        audio: '../../assets/audio/test/listening1.mp3',
        options: [
            'A. She agrees with the man.',
            'B. She disagrees.',
            'C. She needs more time.',
            'D. She wants to leave.',
        ],
        answer: 'A',
    },
    {
        text: 'What is the man concerned about?',
        audio: '../../assets/audio/test/listening2.mp3',
        options: [
            'A. The exam date.',
            'B. The traffic jam.',
            'C. The late submission.',
            'D. The dinner reservation.',
        ],
        answer: 'C',
    },
    {
        text: 'What will the woman probably do next?',
        audio: '../../assets/audio/test/listening3.mp3',
        options: [
            'A. Go to the meeting.',
            'B. Call her friend.',
            'C. Check the weather.',
            'D. Take a taxi.',
        ],
        answer: 'D',
    },
    {
        text: 'What are they mainly discussing?',
        audio: '../../assets/audio/test/listening4.mp3',
        options: [
            'A. A job interview.',
            'B. A project deadline.',
            'C. A holiday plan.',
            'D. A new restaurant.',
        ],
        answer: 'B',
    },
    {
        text: 'Why is the woman worried?',
        audio: '../../assets/audio/test/listening5.mp3',
        options: [
            'A. She lost her wallet.',
            'B. She missed the class.',
            'C. She forgot the homework.',
            'D. She is late for the test.',
        ],
        answer: 'C',
    },
    {
        text: 'What advice does the man give?',
        audio: '../../assets/audio/test/listening6.mp3',
        options: [
            'A. Sleep early.',
            'B. Study harder.',
            'C. Take a break.',
            'D. Talk to the professor.',
        ],
        answer: 'C',
    },
    {
        text: 'Where are the speakers?',
        audio: '../../assets/audio/test/listening7.mp3',
        options: [
            'A. At a park.',
            'B. At a café.',
            'C. In an office.',
            'D. At a bus stop.',
        ],
        answer: 'B',
    },
    {
        text: 'How does the man feel about the movie?',
        audio: '../../assets/audio/test/listening8.mp3',
        options: [
            'A. It was boring.',
            'B. It was exciting.',
            'C. It was confusing.',
            'D. It was too long.',
        ],
        answer: 'B',
    },
    {
        text: 'What problem are they discussing?',
        audio: '../../assets/audio/test/listening9.mp3',
        options: [
            'A. High rent.',
            'B. Noisy neighbors.',
            'C. Broken air conditioner.',
            'D. Expensive groceries.',
        ],
        answer: 'A',
    },
    {
        text: 'What will the man probably do?',
        audio: '../../assets/audio/test/listening10.mp3',
        options: [
            'A. Call maintenance.',
            'B. Move out.',
            'C. Complain to the manager.',
            'D. The dinner reservation.',
        ], 
        answer: 'A',
    },
    {
        text: 'What is the topic of the lecture?',
        audio: '../../assets/audio/test/listening11.mp3',
        options: [
            'A. Climate change.',
            'B. The history of the internet.',
            'C. Space exploration.',
            'D. Renewable energy.',
        ],
        answer: 'C',
    },
    {
        text: 'What problem does the woman mention?',
        audio: '../../assets/audio/test/listening12.mp3',
        options: [
            'A. No parking space.',
            'B. Lost phone.',
            'C. Missed appointment.',
            'D. Broken laptop.',
        ],
        answer: 'D',
    },
    {
        text: 'What will the speakers do on the weekend?',
        audio: '../../assets/audio/test/listening13.mp3',
        options: [
            'A. Study together.',
            'B. Go hiking.',
            'C. Attend a concert.',
            'D. Visit family.',
        ],
        answer: 'B',
    },
    {
        text: 'What did the professor suggest?',
        audio: '../../assets/audio/test/listening14.mp3',
        options: [
            'A. Read chapter 4.',
            'B. Visit the library.',
            'C. Submit the report.',
            'D. Join the discussion.',
        ],
        answer: 'A',
    },
    {
        text: 'What happened to the man’s car?',
        audio: '../../assets/audio/test/listening15.mp3',
        options: [
            'A. It broke down.',
            'B. It was stolen.',
            'C. It was towed.',
            'D. He sold it.',
        ],
        answer: 'A',
    },
    {
        text: 'What are they planning to buy?',
        audio: '../../assets/audio/test/listening16.mp3',
        options: [
            'A. New phones.',
            'B. A sofa.',
            'C. A coffee machine.',
            'D. A TV.',
        ],
        answer: 'B',
    },
    {
        text: 'Where will the meeting be held?',
        audio: '../../assets/audio/test/listening17.mp3',
        options: [
            'A. Room 202.',
            'B. Main Hall.',
            'C. Library.',
            'D. Online.',
        ],
        answer: 'A',
    },
    {
        text: 'What did the man forget?',
        audio: '../../assets/audio/test/listening18.mp3',
        options: [
            'A. His keys.',
            'B. His ID card.',
            'C. His assignment.',
            'D. His umbrella.',
        ],
        answer: 'C',
    },
    {
        text: 'Why is the woman calling?',
        audio: '../../assets/audio/test/listening19.mp3',
        options: [
            'A. To confirm a reservation.',
            'B. To cancel an order.',
            'C. To request information.',
            'D. To complain about service.',
        ],
        answer: 'A',
    },
    {
        text: 'What time will the bus arrive?',
        audio: '../../assets/audio/test/listening20.mp3',
        options: [
            'A. 8:00 AM.',
            'B. 8:30 AM.',
            'C. 9:00 AM.',
            'D. 9:30 AM.',
        ],
        answer: 'B',
    },
    {
        text: 'What does the woman mean?',
        audio: '../../assets/audio/test/listening1.mp3',
        options: [
            'A. She agrees with the man.',
            'B. She disagrees.',
            'C. She needs more time.',
            'D. She wants to leave.',
        ],
        answer: 'A',
    },
    {
        text: 'What is the man concerned about?',
        audio: '../../assets/audio/test/listening2.mp3',
        options: [
            'A. The exam date.',
            'B. The traffic jam.',
            'C. The late submission.',
            'D. The dinner reservation.',
        ],
        answer: 'C',
    },
    {
        text: 'What will the woman probably do next?',
        audio: '../../assets/audio/test/listening3.mp3',
        options: [
            'A. Go to the meeting.',
            'B. Call her friend.',
            'C. Check the weather.',
            'D. Take a taxi.',
        ],
        answer: 'D',
    },
    {
        text: 'What are they mainly discussing?',
        audio: '../../assets/audio/test/listening4.mp3',
        options: [
            'A. A job interview.',
            'B. A project deadline.',
            'C. A holiday plan.',
            'D. A new restaurant.',
        ],
        answer: 'B',
    },
    {
        text: 'Why is the woman worried?',
        audio: '../../assets/audio/test/listening5.mp_x',
        options: [
            'A. She lost her wallet.',
            'B. She missed the class.',
            'C. She forgot the homework.',
            'D. She is late for the test.',
        ],
        answer: 'C',
    },
    {
        text: 'What advice does the man give?',
        audio: '../../assets/audio/test/listening6.mp3',
        options: [
            'A. Sleep early.',
            'B. Study harder.',
            'C. Take a break.',
            'D. Talk to the professor.',
        ],
        answer: 'C',
    },
    {
        text: 'Where are the speakers?',
        audio: '../../assets/audio/test/listening7.mp3',
        options: [
            'A. At a park.',
            'B. At a café.',
            'C. In an office.',
            'D. At a bus stop.',
        ],
        answer: 'B',
    },
    {
        text: 'How does the man feel about the movie?',
        audio: '../../assets/audio/test/listening8.mp3',
        options: [
            'A. It was boring.',
            'B. It was exciting.',
            'C. It was confusing.',
            'D. It was too long.',
        ],
        answer: 'B',
    },
    {
        text: 'What problem are they discussing?',
        audio: '../../assets/audio/test/listening9.mp3',
        options: [
            'A. High rent.',
            'B. Noisy neighbors.',
            'C. Broken air conditioner.',
            'D. Expensive groceries.',
        ],
        answer: 'A',
    },
    {
        text: 'What will the man probably do?',
        audio: '../../assets/audio/test/listening10.mp3',
        options: [
            'A. Call maintenance.',
            'B. Move out.',
            'C. Complain to the manager.',
            'D. Buy a fan.',
        ],
        answer: 'A',
    },
];

/*Structure*/
const structureQuestions = [
    {
        text: 'The boy ___ going to the movies with a friend.',
        options: ['A. are', 'B. is', 'C. were', 'D. being'],
        answer: 'B' 
    },
    {
        text: 'There ___ many students in the class.',
        options: ['A. is', 'B. are', 'C. was', 'D. been'],
        answer: 'B'
    },
    {
        text: 'She ___ a new book every week.',
        options: ['A. read', 'B. reads', 'C. reading', 'D. has read'],
        answer: 'B'
    },
    {
        text: 'They ___ to the beach yesterday.',
        options: ['A. go', 'B. goes', 'C. went', 'D. gone'],
        answer: 'C'
    },
    {
        text: 'He has ___ finished his homework.',
        options: ['A. already', 'B. yet', 'C. still', 'D. never'],
        answer: 'A'
    },
    {
        text: 'The car is ___ than the bike.',
        options: ['A. fast', 'B. faster', 'C. fastest', 'D. more fast'],
        answer: 'B'
    },
    {
        text: 'She is interested ___ learning new languages.',
        options: ['A. in', 'B. on', 'C. at', 'D. with'],
        answer: 'A'
    },
    {
        text: 'Neither the students ___ the teacher was ready.',
        options: ['A. or', 'B. nor', 'C. but', 'D. and'],
        answer: 'B'
    },
    {
        text: 'If I ___ a bird, I would fly.',
        options: ['A. am', 'B. was', 'C. were', 'D. be'],
        answer: 'C'
    },
    {
        text: 'The movie was ___ boring that I fell asleep.',
        options: ['A. so', 'B. such', 'C. too', 'D. very'],
        answer: 'A'
    },
    {
        text: 'He prefers coffee ___ tea.',
        options: ['A. than', 'B. to', 'C. over', 'D. from'],
        answer: 'B'
    },
    {
        text: 'The news ___ good today.',
        options: ['A. is', 'B. are', 'C. were', 'D. be'],
        answer: 'A'
    },
    {
        text: 'She can play the piano ___ well.',
        options: ['A. good', 'B. better', 'C. best', 'D. well'],
        answer: 'D'
    },
    {
        text: 'The cat jumped ___ the table.',
        options: ['A. on', 'B. onto', 'C. in', 'D. into'],
        answer: 'B'
    },
    {
        text: 'He ___ work hard to pass the exam.',
        options: ['A. must', 'B. can', 'C. may', 'D. should'],
        answer: 'A'
    },
    {
        text: 'This is the book ___ I was looking for.',
        options: ['A. who', 'B. which', 'C. where', 'D. when'],
        answer: 'B'
    },
    {
        text: 'Despite ___ hard, he failed the test.',
        options: ['A. study', 'B. studied', 'C. studying', 'D. studies'],
        answer: 'C'
    },
    {
        text: 'The more you practice, the ___ you become.',
        options: ['A. good', 'B. better', 'C. best', 'D. well'],
        answer: 'B'
    },
    {
        text: 'She asked him ___ he was coming.',
        options: ['A. if', 'B. that', 'C. what', 'D. where'],
        answer: 'A'
    },
    {
        text: 'The baby ___ since morning.',
        options: ['A. sleeps', 'B. is sleeping', 'C. has been sleeping', 'D. slept'],
        answer: 'C'
    },
    {
        text: 'He is a man ___ honesty is unquestionable.',
        options: ['A. who', 'B. whose', 'C. whom', 'D. which'],
        answer: 'B'
    },
    {
        text: 'The committee ___ decided to postpone the meeting.',
        options: ['A. have', 'B. has', 'C. were', 'D. are'],
        answer: 'B'
    },
    {
        text: 'Hardly had he arrived ___ it started to rain.',
        options: ['A. then', 'B. than', 'C. when', 'D. as'],
        answer: 'C'
    },
    {
        text: 'I wish I ___ play the guitar.',
        options: ['A. can', 'B. could', 'C. would', 'D. will'],
        answer: 'B'
    },
    {
        text: 'The research was conducted ___ a team of experts.',
        options: ['A. with', 'B. by', 'C. from', 'D. in'],
        answer: 'B'
    },
    {
        text: 'She is used to ___ early.',
        options: ['A. get up', 'B. getting up', 'C. got up', 'D. gets up'],
        answer: 'B'
    },
    {
        text: 'The new policy will affect ___ the employees and the management.',
        options: ['A. either', 'B. both', 'C. neither', 'D. nor'],
        answer: 'B'
    },
    {
        text: 'It was so dark that I could ___ see anything.',
        options: ['A. hardly', 'B. easily', 'C. always', 'D. often'],
        answer: 'A'
    },
    {
        text: '___ the bad weather, they went for a walk.',
        options: ['A. Despite', 'B. Although', 'C. Because of', 'D. In spite of the'],
        answer: 'A'
    },
    {
        text: 'The teacher made us ___ the homework.',
        options: ['A. to do', 'B. doing', 'C. do', 'D. did'],
        answer: 'C'
    },
    {
        text: 'He is looking forward to ___ you again.',
        options: ['A. see', 'B. seeing', 'C. saw', 'D. seen'],
        answer: 'B'
    },
    {
        text: 'The more money he earns, ___ he spends.',
        options: ['A. the more', 'B. the less', 'C. most', 'D. least'],
        answer: 'A'
    },
    {
        text: 'By the time I arrive, she ___ already left.',
        options: ['A. will', 'B. has', 'C. had', 'D. will have'],
        answer: 'D'
    },
    {
        text: 'I would rather ___ home than go out.',
        options: ['A. stay', 'B. to stay', 'C. staying', 'D. stayed'],
        answer: 'A'
    },
    {
        text: 'The painting, ___ was bought last year, is now worth a fortune.',
        options: ['A. who', 'B. whom', 'C. which', 'D. that'],
        answer: 'C'
    },
    {
        text: 'Not until the bell rang ___ the students leave.',
        options: ['A. did', 'B. do', 'C. had', 'D. have'],
        answer: 'A'
    },
    {
        text: 'He denied ___ the car.',
        options: ['A. steal', 'B. to steal', 'C. stealing', 'D. stolen'],
        answer: 'C'
    },
    {
        text: 'She has been studying English ___ five years.',
        options: ['A. since', 'B. for', 'C. in', 'D. on'],
        answer: 'B'
    },
    {
        text: 'The old man, ___ health was failing, decided to retire.',
        options: ['A. who', 'B. whose', 'C. whom', 'D. which'],
        answer: 'B'
    },
    {
        text: 'The director suggested that the meeting ___ postponed.',
        options: ['A. is', 'B. be', 'C. was', 'D. should be'],
        answer: 'B'
    },
];

/*Reading*/
const readingQuestions = [
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'What is the Amazon rainforest primarily known for?',
        options: ['A. Its large rivers', 'B. Its vast deserts', 'C. Its incredible biodiversity', 'D. Its mountain ranges'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'Which country contains the majority of the Amazon rainforest?',
        options: ['A. Peru', 'B. Colombia', 'C. Brazil', 'D. Ecuador'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'What is a major threat to the Amazon rainforest?',
        options: ['A. Heavy rainfall', 'B. Volcanic eruptions', 'C. Deforestation', 'D. Earthquakes'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'How does the Amazon rainforest help regulate Earth\'s climate?',
        options: ['A. By increasing global temperatures', 'B. By absorbing carbon dioxide and producing oxygen', 'C. By causing droughts', 'D. By creating strong winds'],
        answer: 'B'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'The word "spanning" in the passage is closest in meaning to:',
        options: ['A. covering', 'B. avoiding', 'C. reducing', 'D. creating'],
        answer: 'A'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'What are coral reefs primarily built from?',
        options: ['A. Sand and rocks', 'B. Algae and seaweed', 'C. Stony corals', 'D. Volcanic ash'],
        answer: 'C'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'Where are most coral reefs typically found?',
        options: ['A. Deep ocean trenches', 'B. Arctic waters', 'C. Tropical oceans in shallow waters', 'D. Freshwater lakes'],
        answer: 'C'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'Why are coral reefs sometimes called "rainforests of the sea"?',
        options: ['A. Because they are green in color', 'B. Due to their high biodiversity', 'C. Because they receive a lot of rainfall', 'D. Due to their dense tree-like structures'],
        answer: 'B'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'What percentage of marine species live in coral reefs?',
        options: ['A. Less than 10%', 'B. Exactly 50%', 'C. At least 25%', 'D. More than 75%'],
        answer: 'C'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'The word "diverse" in the passage is closest in meaning to:',
        options: ['A. uniform', 'B. varied', 'C. sparse', 'D. common'],
        answer: 'B'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'Who discovered penicillin?',
        options: ['A. Louis Pasteur', 'B. Marie Curie', 'C. Alexander Fleming', 'D. Robert Koch'],
        answer: 'C'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'What did Fleming observe about the mold?',
        options: ['A. It made the bacteria grow faster', 'B. It prevented bacterial growth', 'C. It changed the color of the bacteria', 'D. It had no effect on bacteria'],
        answer: 'B'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'When did penicillin\'s widespread use begin?',
        options: ['A. In 1928', 'B. During World War I', 'C. During World War II', 'D. In the 1950s'],
        answer: 'C'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'Penicillin was effective in treating all of the following EXCEPT:',
        options: ['A. Pneumonia', 'B. Scarlet fever', 'C. Tuberculosis', 'D. Viruses'],
        answer: 'D'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'The word "revolutionized" in the passage means:',
        options: ['A. made minor changes', 'B. drastically changed', 'C. destroyed', 'D. slowed down'],
        answer: 'B'
    },
    // Duplikasi untuk mencapai 50 soal Reading
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'What is the Amazon rainforest primarily known for?',
        options: ['A. Its large rivers', 'B. Its vast deserts', 'C. Its incredible biodiversity', 'D. Its mountain ranges'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'Which country contains the majority of the Amazon rainforest?',
        options: ['A. Peru', 'B. Colombia', 'C. Brazil', 'D. Ecuador'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'What is a major threat to the Amazon rainforest?',
        options: ['A. Heavy rainfall', 'B. Volcanic eruptions', 'C. Deforestation', 'D. Earthquakes'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'How does the Amazon rainforest help regulate Earth\'s climate?',
        options: ['A. By increasing global temperatures', 'B. By absorbing carbon dioxide and producing oxygen', 'C. By causing droughts', 'D. By creating strong winds'],
        answer: 'B'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'The word "spanning" in the passage is closest in meaning to:',
        options: ['A. covering', 'B. avoiding', 'C. reducing', 'D. creating'],
        answer: 'A'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'What are coral reefs primarily built from?',
        options: ['A. Sand and rocks', 'B. Algae and seaweed', 'C. Stony corals', 'D. Volcanic ash'],
        answer: 'C'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'Where are most coral reefs typically found?',
        options: ['A. Deep ocean trenches', 'B. Arctic waters', 'C. Tropical oceans in shallow waters', 'D. Freshwater lakes'],
        answer: 'C'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'Why are coral reefs sometimes called "rainforests of the sea"?',
        options: ['A. Because they are green in color', 'B. Due to their high biodiversity', 'C. Because they receive a lot of rainfall', 'D. Due to their dense tree-like structures'],
        answer: 'B'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'What percentage of marine species live in coral reefs?',
        options: ['A. Less than 10%', 'B. Exactly 50%', 'C. At least 25%', 'D. More than 75%'],
        answer: 'C'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'The word "diverse" in the passage is closest in meaning to:',
        options: ['A. uniform', 'B. varied', 'C. sparse', 'D. common'],
        answer: 'B'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'Who discovered penicillin?',
        options: ['A. Louis Pasteur', 'B. Marie Curie', 'C. Alexander Fleming', 'D. Robert Koch'],
        answer: 'C'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'What did Fleming observe about the mold?',
        options: ['A. It made the bacteria grow faster', 'B. It prevented bacterial growth', 'C. It changed the color of the bacteria', 'D. It had no effect on bacteria'],
        answer: 'B'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'When did penicillin\'s widespread use begin?',
        options: ['A. In 1928', 'B. During World War I', 'C. During World War II', 'D. In the 1950s'],
        answer: 'C'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'Penicillin was effective in treating all of the following EXCEPT:',
        options: ['A. Pneumonia', 'B. Scarlet fever', 'C. Tuberculosis', 'D. Viruses'],
        answer: 'D'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'The word "revolutionized" in the passage means:',
        options: ['A. made minor changes', 'B. drastically changed', 'C. destroyed', 'D. slowed down'],
        answer: 'B'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'What is the Amazon rainforest primarily known for?',
        options: ['A. Its large rivers', 'B. Its vast deserts', 'C. Its incredible biodiversity', 'D. Its mountain ranges'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'Which country contains the majority of the Amazon rainforest?',
        options: ['A. Peru', 'B. Colombia', 'C. Brazil', 'D. Ecuador'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'What is a major threat to the Amazon rainforest?',
        options: ['A. Heavy rainfall', 'B. Volcanic eruptions', 'C. Deforestation', 'D. Earthquakes'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'How does the Amazon rainforest help regulate Earth\'s climate?',
        options: ['A. By increasing global temperatures', 'B. By absorbing carbon dioxide and producing oxygen', 'C. By causing droughts', 'D. By creating strong winds'],
        answer: 'B'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'The word "spanning" in the passage is closest in meaning to:',
        options: ['A. covering', 'B. avoiding', 'C. reducing', 'D. creating'],
        answer: 'A'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'What are coral reefs primarily built from?',
        options: ['A. Sand and rocks', 'B. Algae and seaweed', 'C. Stony corals', 'D. Volcanic ash'],
        answer: 'C'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'Where are most coral reefs typically found?',
        options: ['A. Deep ocean trenches', 'B. Arctic waters', 'C. Tropical oceans in shallow waters', 'D. Freshwater lakes'],
        answer: 'C'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'Why are coral reefs sometimes called "rainforests of the sea"?',
        options: ['A. Because they are green in color', 'B. Due to their high biodiversity', 'C. Because they receive a lot of rainfall', 'D. Due to their dense tree-like structures'],
        answer: 'B'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'What percentage of marine species live in coral reefs?',
        options: ['A. Less than 10%', 'B. Exactly 50%', 'C. At least 25%', 'D. More than 75%'],
        answer: 'C'
    },
    {
        passage: "Coral reefs are underwater ecosystems characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, which in turn consist of polyps that cluster in groups. Coral reefs are highly diverse and complex ecosystems. They are home to at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates, and other cnidarians. Coral reefs are found in tropical oceans, typically in shallow waters, and they are often called 'rainforests of the sea' due to their biodiversity.",
        text: 'The word "diverse" in the passage is closest in meaning to:',
        options: ['A. uniform', 'B. varied', 'C. sparse', 'D. common'],
        answer: 'B'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'Who discovered penicillin?',
        options: ['A. Louis Pasteur', 'B. Marie Curie', 'C. Alexander Fleming', 'D. Robert Koch'],
        answer: 'C'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'What did Fleming observe about the mold?',
        options: ['A. It made the bacteria grow faster', 'B. It prevented bacterial growth', 'C. It changed the color of the bacteria', 'D. It had no effect on bacteria'],
        answer: 'B'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'When did penicillin\'s widespread use begin?',
        options: ['A. In 1928', 'B. During World War I', 'C. During World War II', 'D. In the 1950s'],
        answer: 'C'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'Penicillin was effective in treating all of the following EXCEPT:',
        options: ['A. Pneumonia', 'B. Scarlet fever', 'C. Tuberculosis', 'D. Viruses'],
        answer: 'D'
    },
    {
        passage: "The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. While working in his laboratory, Fleming noticed that a mold, later identified as Penicillium notatum, had contaminated one of his Petri dishes containing Staphylococcus bacteria. He observed that the mold prevented the growth of the bacteria around it. This accidental discovery led to the development of the first widely used antibiotic. Penicillin proved incredibly effective in treating bacterial infections that were previously fatal, such as pneumonia, scarlet fever, and tuberculosis. Its widespread use began during World War II, significantly reducing mortality rates among soldiers and civilians alike. Fleming's discovery paved the way for the age of antibiotics, profoundly impacting human health.",
        text: 'The word "revolutionized" in the passage means:',
        options: ['A. made minor changes', 'B. drastically changed', 'C. destroyed', 'D. slowed down'],
        answer: 'B'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'What is the Amazon rainforest primarily known for?',
        options: ['A. Its large rivers', 'B. Its vast deserts', 'C. Its incredible biodiversity', 'D. Its mountain ranges'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'Which country contains the majority of the Amazon rainforest?',
        options: ['A. Peru', 'B. Colombia', 'C. Brazil', 'D. Ecuador'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'What is a major threat to the Amazon rainforest?',
        options: ['A. Heavy rainfall', 'B. Volcanic eruptions', 'C. Deforestation', 'D. Earthquakes'],
        answer: 'C'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'How does the Amazon rainforest help regulate Earth\'s climate?',
        options: ['A. By increasing global temperatures', 'B. By absorbing carbon dioxide and producing oxygen', 'C. By causing droughts', 'D. By creating strong winds'],
        answer: 'B'
    },
    {
        passage: "The Amazon rainforest is the largest tropical rainforest in the world, famous for its incredible biodiversity. It covers an enormous area, spanning nine South American countries, with the majority of it located in Brazil. The forest is home to an estimated 390 billion individual trees, divided into about 16,000 species. This vast ecosystem plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen. However, deforestation, primarily for cattle ranching and agriculture, poses a significant threat to its continued existence. Conservation efforts are underway to protect this invaluable natural resource.",
        text: 'The word "spanning" in the passage is closest in meaning to:',
        options: ['A. covering', 'B. avoiding', 'C. reducing', 'D. creating'],
        answer: 'A'
    },
];


// test.js

// --- VARIABEL GLOBAL UNTUK PELACAKAN STATUS TES ---
let currentSection = ''; // 'listening', 'structure', 'reading'
let timerInterval;
let secondsRemaining = 0;

let currentListeningIndex = 0;
let userListeningAnswers = new Array(listeningQuestions.length).fill(null);
let correctListeningCount = 0;

let currentStructureIndex = 0;
let userStructureAnswers = new Array(structureQuestions.length).fill(null);
let correctStructureCount = 0;

let currentReadingIndex = 0;
let userReadingAnswers = new Array(readingQuestions.length).fill(null);
let correctReadingCount = 0;

const timerElement = document.getElementById('timer');

// Untuk melacak apakah audio sudah diputar untuk setiap pertanyaan listening
const audioPlayedStatus = new Array(listeningQuestions.length).fill(false);

// --- FUNGSI NAVIGASI UMUM ---
function navigate(page) {
    window.location.href = page;
}

// --- FUNGSI TIMER UNIVERSAL ---
function updateTimer() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    timerElement.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    if (secondsRemaining > 0) {
        secondsRemaining--;
    } else {
        clearInterval(timerInterval);
        endSection(); // Panggil endSection saat waktu habis
    }
}

function startTimer(durationInSeconds) {
    clearInterval(timerInterval); // Bersihkan timer sebelumnya jika ada
    secondsRemaining = durationInSeconds;
    timerElement.style.display = 'block'; // Tampilkan timer saat tes dimulai
    timerInterval = setInterval(updateTimer, 1000);
}

// --- FUNGSI UNTUK MEMULAI SETIAP SECTION ---
function startSection(sectionName) {
    // Sembunyikan semua intro section
    document.getElementById('intro-listening-section')?.classList.remove('active');
    document.getElementById('intro-structure-section')?.classList.remove('active');
    document.getElementById('intro-reading-section')?.classList.remove('active');
    document.getElementById('example-listening-section')?.classList.remove('active');
    document.getElementById('example-structure-section')?.classList.remove('active');
    document.getElementById('example-reading-section')?.classList.remove('active');

    // Sembunyikan semua test section
    document.getElementById('test-listening-section')?.classList.remove('active');
    document.getElementById('test-structure-section')?.classList.remove('active');
    document.getElementById('test-reading-section')?.classList.remove('active');
    document.getElementById('score-section').style.display = 'none';

    timerElement.style.display = 'none'; // Awalnya sembunyikan timer sampai tes dimulai

    currentSection = sectionName;

    if (sectionName === 'listening') {
        document.getElementById('test-listening-section').classList.add('active');
        showListeningQuestion(currentListeningIndex);
        startTimer(30 * 60); // 30 menit
    } else if (sectionName === 'structure') {
        document.getElementById('test-structure-section').classList.add('active');
        showStructureQuestion(currentStructureIndex);
        startTimer(25 * 60); // 25 menit
    } else if (sectionName === 'reading') {
        document.getElementById('test-reading-section').classList.add('active');
        showReadingQuestion(currentReadingIndex);
        startTimer(35 * 60); // 35 menit
    }
}

// --- FUNGSI MENAMPILKAN PERTANYAAN (LISTENING) ---
function showListeningQuestion(index) {
    const q = listeningQuestions[index];
    const container = document.getElementById('listening-question-container');

    const isAudioPlayed = audioPlayedStatus[index];
    const audioControls = isAudioPlayed ? '' : 'controls';
    const audioClass = isAudioPlayed ? 'disabled' : ''; // Menambahkan kelas disabled

    container.innerHTML = `
        <h3>Listening Question ${index + 1} of ${listeningQuestions.length}</h3>
        <audio id="currentAudio" ${audioControls} class="${audioClass}">
            <source src="${q.audio}" type="audio/mpeg">
            Browser Anda tidak mendukung audio.
        </audio>
        <p style="margin-top:1em; font-size:1.05rem;">${q.text}</p>
        <div class="options">
            ${q.options.map(opt => `
                <label>
                <input type="radio" name="listening-option" value="${opt}" ${userListeningAnswers[index] === opt ? 'checked' : ''}>
                ${opt}
                </label>
            `).join('')}
        </div>
    `;

    const currentAudioElement = document.getElementById('currentAudio');
    if (currentAudioElement && !isAudioPlayed) { // Pastikan elemen audio ada dan belum diputar
        currentAudioElement.addEventListener('play', function () {
            audioPlayedStatus[index] = true; // Tandai audio sudah diputar
        });
        currentAudioElement.addEventListener('ended', function () {
            this.removeAttribute('controls'); // Sembunyikan kontrol setelah selesai
            this.classList.add('disabled'); // Tambahkan kelas disabled
        });
    } else if (currentAudioElement && isAudioPlayed) {
        // Jika sudah diputar sebelumnya, langsung nonaktifkan kontrol
        currentAudioElement.removeAttribute('controls');
        currentAudioElement.classList.add('disabled');
    }
    timerElement.style.display = 'block'; // Pastikan timer terlihat saat pertanyaan ditampilkan
}

// --- FUNGSI MENAMPILKAN PERTANYAAN (STRUCTURE) ---
function showStructureQuestion(index) {
    const q = structureQuestions[index];
    const container = document.getElementById('structure-question-container');
    container.innerHTML = `
        <h3>Structure Question ${index + 1} of ${structureQuestions.length}</h3>
        <p style="margin-top:1em; font-size:1.05rem;">${q.text}</p>
        <div class="options">
            ${q.options.map(opt => `
                <label>
                <input type="radio" name="structure-option" value="${opt}" ${userStructureAnswers[index] === opt ? 'checked' : ''}>
                ${opt}
                </label>
            `).join('')}
        </div>
    `;
    timerElement.style.display = 'block';
}

// --- FUNGSI MENAMPILKAN PERTANYAAN (READING) ---
function showReadingQuestion(index) {
    const q = readingQuestions[index];
    const container = document.getElementById('reading-question-container');
    container.innerHTML = `
        <h3>Reading Question ${index + 1} of ${readingQuestions.length}</h3>
        <div class="reading-passage">
            <h4>Reading Passage:</h4>
            <p>${q.passage}</p>
        </div>
        <p style="margin-top:1em; font-size:1.05rem;">${q.text}</p>
        <div class="options">
            ${q.options.map(opt => `
                <label>
                <input type="radio" name="reading-option" value="${opt}" ${userReadingAnswers[index] === opt ? 'checked' : ''}>
                ${opt}
                </label>
            `).join('')}
        </div>
    `;
    timerElement.style.display = 'block';
}


// --- FUNGSI NAVIGASI NEXT & PREVIOUS UMUM ---
function nextQuestion(section) {
    saveAnswer(section); // Simpan jawaban sebelum pindah
    if (section === 'listening') {
        currentListeningIndex++;
        if (currentListeningIndex < listeningQuestions.length) {
            showListeningQuestion(currentListeningIndex);
        } else {
            endSection(); // Pindah ke section berikutnya atau hasil
        }
    } else if (section === 'structure') {
        currentStructureIndex++;
        if (currentStructureIndex < structureQuestions.length) {
            showStructureQuestion(currentStructureIndex);
        } else {
            endSection(); // Pindah ke section berikutnya atau hasil
        }
    } else if (section === 'reading') {
        currentReadingIndex++;
        if (currentReadingIndex < readingQuestions.length) {
            showReadingQuestion(currentReadingIndex);
        } else {
            endSection(); // Akhiri tes, tampilkan hasil
        }
    }
}

function prevQuestion(section) {
    saveAnswer(section); // Simpan jawaban sebelum pindah
    if (section === 'listening') {
        if (currentListeningIndex > 0) {
            currentListeningIndex--;
            showListeningQuestion(currentListeningIndex);
        }
    } else if (section === 'structure') {
        if (currentStructureIndex > 0) {
            currentStructureIndex--;
            showStructureQuestion(currentStructureIndex);
        }
    } else if (section === 'reading') {
        if (currentReadingIndex > 0) {
            currentReadingIndex--;
            showReadingQuestion(currentReadingIndex);
        }
    }
}

// --- FUNGSI MENYIMPAN JAWABAN ---
function saveAnswer(section) {
    let selectedOption;
    if (section === 'listening') {
        selectedOption = document.querySelector('input[name="listening-option"]:checked');
        if (selectedOption) {
            userListeningAnswers[currentListeningIndex] = selectedOption.value;
        }
    } else if (section === 'structure') {
        selectedOption = document.querySelector('input[name="structure-option"]:checked');
        if (selectedOption) {
            userStructureAnswers[currentStructureIndex] = selectedOption.value;
        }
    } else if (section === 'reading') {
        selectedOption = document.querySelector('input[name="reading-option"]:checked');
        if (selectedOption) {
            userReadingAnswers[currentReadingIndex] = selectedOption.value;
        }
    }
}

// --- FUNGSI MENGAKHIRI SECTION DAN BERALIH ---
function endSection() {
    clearInterval(timerInterval); // Hentikan timer
    timerElement.style.display = 'none'; // Sembunyikan timer saat transisi antar section atau saat selesai

    // Pastikan jawaban terakhir disimpan sebelum menghitung skor
    saveAnswer(currentSection);

    if (currentSection === 'listening') {
        calculateScore('listening');
        // Sembunyikan test section Listening
        document.getElementById('test-listening-section').classList.remove('active');
        // Tampilkan intro section Structure
        document.getElementById('intro-structure-section').classList.add('active');
    } else if (currentSection === 'structure') {
        calculateScore('structure');
        // Sembunyikan test section Structure
        document.getElementById('test-structure-section').classList.remove('active');
        // Tampilkan intro section Reading
        document.getElementById('intro-reading-section').classList.add('active');
    } else if (currentSection === 'reading') {
        calculateScore('reading');
        // Sembunyikan test section Reading
        document.getElementById('test-reading-section').classList.remove('active');
        // Tampilkan hasil skor akhir
        showFinalScores();
    }
}

// --- FUNGSI MENGHITUNG SKOR PER BAGIAN ---
function calculateScore(section) {
    let correctCount = 0;
    let questionsArray;
    let userAnswersArray;

    if (section === 'listening') {
        questionsArray = listeningQuestions;
        userAnswersArray = userListeningAnswers;
    } else if (section === 'structure') {
        questionsArray = structureQuestions;
        userAnswersArray = userStructureAnswers;
    } else if (section === 'reading') {
        questionsArray = readingQuestions;
        userAnswersArray = userReadingAnswers;
    }

    for (let i = 0; i < questionsArray.length; i++) {
        const question = questionsArray[i];
        const userAnswer = userAnswersArray[i];

        // Bandingkan seluruh string jawaban pengguna dengan jawaban yang benar
        // Asumsi format jawaban di 'options' adalah 'A. Opsi', 'B. Opsi', dst.
        // Dan 'answer' adalah 'A', 'B', 'C', atau 'D'.
        // Jadi kita perlu mencocokkan 'userAnswer' (misal 'A. She agrees with the man.')
        // dengan 'question.answer' (misal 'A').
        // Kita bisa ambil huruf pertama dari userAnswer untuk perbandingan.
        if (userAnswer && userAnswer.charAt(0) === question.answer) {
            correctCount++;
        }
    }

    if (section === 'listening') {
        correctListeningCount = correctCount;
    } else if (section === 'structure') {
        correctStructureCount = correctCount;
    } else if (section === 'reading') {
        correctReadingCount = correctCount;
    }
}

// --- FUNGSI MENAMPILKAN SKOR AKHIR DAN MENYIMPAN KE LOCALSTORAGE ---
function showFinalScores() {
    // Pastikan semua section disembunyikan
    document.getElementById('test-listening-section')?.classList.remove('active');
    document.getElementById('test-structure-section')?.classList.remove('active');
    document.getElementById('test-reading-section')?.classList.remove('active');
    document.getElementById('intro-listening-section')?.classList.remove('active');
    document.getElementById('intro-structure-section')?.classList.remove('active');
    document.getElementById('intro-reading-section')?.classList.remove('active');
    document.getElementById('example-listening-section')?.classList.remove('active');
    document.getElementById('example-structure-section')?.classList.remove('active');
    document.getElementById('example-reading-section')?.classList.remove('active');


    document.getElementById('score-section').style.display = 'block';
    document.getElementById('timer').style.display = 'none'; // Sembunyikan timer di halaman skor

    // Tampilkan skor benar (raw score) dan total pertanyaan per bagian
    document.getElementById('correct-listening-score').textContent = correctListeningCount;
    document.getElementById('total-listening-questions').textContent = listeningQuestions.length;

    document.getElementById('correct-structure-score').textContent = correctStructureCount;
    document.getElementById('total-structure-questions').textContent = structureQuestions.length;

    document.getElementById('correct-reading-score').textContent = correctReadingCount;
    document.getElementById('total-reading-questions').textContent = readingQuestions.length;

    // --- Fungsi bantu konversi raw score ke scaled score (estimasi) ---
    // (Tabel konversi ini hanya perkiraan, TOEFL resmi memiliki tabel yang lebih rinci)
    function convertListening(raw) {
        if (raw >= 47) return 68;
        if (raw >= 44) return 65;
        if (raw >= 40) return 60;
        if (raw >= 35) return 55;
        if (raw >= 30) return 50;
        if (raw >= 25) return 45;
        if (raw >= 20) return 40;
        if (raw >= 15) return 35;
        return 31;
    }

    function convertStructure(raw) {
        if (raw >= 38) return 68;
        if (raw >= 35) return 65;
        if (raw >= 32) return 62;
        if (raw >= 28) return 58;
        if (raw >= 24) return 54;
        if (raw >= 20) return 50;
        if (raw >= 15) return 45;
        if (raw >= 10) return 40;
        return 31;
    }

    function convertReading(raw) {
        if (raw >= 47) return 67;
        if (raw >= 44) return 64;
        if (raw >= 40) return 60;
        if (raw >= 35) return 56;
        if (raw >= 30) return 52;
        if (raw >= 25) return 48;
        if (raw >= 20) return 43;
        if (raw >= 15) return 38;
        return 31;
    }

    // --- Konversi ke scaled score menggunakan variabel global yang telah dihitung ---
    const listeningScaledScore = convertListening(correctListeningCount);
    const structureScaledScore = convertStructure(correctStructureCount);
    const readingScaledScore = convertReading(correctReadingCount);

    // --- Hitung total skor TOEFL (rata-rata dari scaled score bagian, dikalikan 10) ---
    const totalTOEFLScore = Math.round(((listeningScaledScore + structureScaledScore + readingScaledScore) * 10) / 3);

    // --- Tampilkan hasil skor yang dikonversi ke HTML ---
    document.getElementById('converted-score').textContent = totalTOEFLScore;

    // --- SIMPAN HASIL TES KE LOCALSTORAGE ---
    const today = new Date();
    // Format tanggal YYYY-MM-DD untuk pengurutan yang lebih mudah
    const testDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

    const testResult = {
        date: testDate,
        listeningRaw: correctListeningCount, // Simpan raw count (opsional, untuk debugging/analisis)
        readingRaw: correctReadingCount,
        structureRaw: correctStructureCount,
        listening: listeningScaledScore,   // **Ini yang akan ditampilkan di dashboard**
        reading: readingScaledScore,       // **Ini yang akan ditampilkan di dashboard**
        structure: structureScaledScore,   // **Ini yang akan ditampilkan di dashboard**
        total: totalTOEFLScore             // **Ini adalah total skor akhir yang disekalakan**
    };

    let testHistory = JSON.parse(localStorage.getItem('toeflTestHistory')) || [];
    testHistory.push(testResult);
    localStorage.setItem('toeflTestHistory', JSON.stringify(testHistory));
}

// --- INISIALISASI (saat halaman dimuat) ---
document.addEventListener('DOMContentLoaded', (event) => {
    // Sembunyikan timer saat halaman tes pertama kali dimuat (sebelum tes dimulai)
    timerElement.style.display = 'none';

    // Menampilkan nama pengguna di navbar (jika ada elemen user-info di halaman ini)
    const userInfoElement = document.getElementById("user-info");
    if (userInfoElement) {
        const nama = localStorage.getItem("namaPengguna");
        userInfoElement.innerText = nama ? `Hi, ${nama}` : 'Hi, Pengguna';
    }
});