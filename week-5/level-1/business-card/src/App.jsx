// App.jsx
import React from 'react';
import Card from './components/Card';

const App = () => {
  const data = [
    {
      "name": "John Doe",
      "description": "Passionate about technology and programming. Enjoys exploring new frameworks and languages.",
      "interests": ["Web Development", "Machine Learning", "Reading"],
      "linkedinUrl": "https://www.linkedin.com/in/johndoe",
      "twitterUrl": "https://twitter.com/johndoe"
    },
    {
      "name": "Jane Smith",
      "description": "Experienced software engineer with a focus on backend development. Loves hiking and photography.",
      "interests": ["Backend Development", "Data Science", "Photography"],
      "linkedinUrl": "https://www.linkedin.com/in/janesmith",
      "twitterUrl": "https://twitter.com/janesmith"
    },
    {
      "name": "Alice Johnson",
      "description": "Frontend developer passionate about creating beautiful and responsive user interfaces.",
      "interests": ["Frontend Development", "UI/UX Design", "Traveling"],
      "linkedinUrl": "https://www.linkedin.com/in/alicejohnson",
      "twitterUrl": "https://twitter.com/alicejohnson"
    },
    {
      "name": "Bob Brown",
      "description": "Full-stack developer with a knack for problem-solving. Enjoys playing musical instruments in free time.",
      "interests": ["Full-stack Development", "Problem-solving", "Music"],
      "linkedinUrl": "https://www.linkedin.com/in/bobbrown",
      "twitterUrl": "https://twitter.com/bobbrown"
    },
    {
      "name": "Eva Garcia",
      "description": "Data analyst fascinated by patterns in data. Enjoys painting and attending art exhibitions.",
      "interests": ["Data Analysis", "Painting", "Art Exhibitions"],
      "linkedinUrl": "https://www.linkedin.com/in/evagarcia",
      "twitterUrl": "https://twitter.com/evagarcia"
    },
    {
      "name": "Charlie Miller",
      "description": "Mobile app developer passionate about creating innovative apps. Enjoys rock climbing and outdoor activities.",
      "interests": ["Mobile App Development", "Innovation", "Rock Climbing"],
      "linkedinUrl": "https://www.linkedin.com/in/charliemiller",
      "twitterUrl": "https://twitter.com/charliemiller"
    },
    {
      "name": "Grace Lee",
      "description": "AI enthusiast with a focus on natural language processing. Enjoys writing and exploring diverse cultures.",
      "interests": ["Natural Language Processing", "Writing", "Cultural Exploration"],
      "linkedinUrl": "https://www.linkedin.com/in/gracelee",
      "twitterUrl": "https://twitter.com/gracelee"
    },
    {
      "name": "Sam Turner",
      "description": "Cybersecurity expert passionate about securing digital landscapes. Enjoys playing strategy games and mentoring.",
      "interests": ["Cybersecurity", "Strategy Games", "Mentoring"],
      "linkedinUrl": "https://www.linkedin.com/in/samturner",
      "twitterUrl": "https://twitter.com/samturner"
    },
    {
      "name": "Olivia Wang",
      "description": "Blockchain developer fascinated by decentralized technologies. Enjoys gardening and exploring sustainable living.",
      "interests": ["Blockchain Development", "Gardening", "Sustainable Living"],
      "linkedinUrl": "https://www.linkedin.com/in/oliviawang",
      "twitterUrl": "https://twitter.com/oliviawang"
    },
    {
      "name": "Daniel Martinez",
      "description": "Game developer passionate about creating immersive gaming experiences. Enjoys playing musical instruments and hiking.",
      "interests": ["Game Development", "Music", "Hiking"],
      "linkedinUrl": "https://www.linkedin.com/in/danielmartinez",
      "twitterUrl": "https://twitter.com/danielmartinez"
    },
    {
      "name": "Sophie Kim",
      "description": "UX/UI designer dedicated to crafting user-centered designs. Enjoys photography and participating in design communities.",
      "interests": ["UX/UI Design", "Photography", "Design Communities"],
      "linkedinUrl": "https://www.linkedin.com/in/sophiekim",
      "twitterUrl": "https://twitter.com/sophiekim"
    },
  ];

  return (
    <div className='flex flex-wrap justify-around p-4 bg-gray-100'>
      {data.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          description={item.description}
          interests={item.interests}
          linkedinUrl={item.linkedinUrl}
          xUrl={item.twitterUrl}
        />
      ))}
    </div>
  );
};


export default App;