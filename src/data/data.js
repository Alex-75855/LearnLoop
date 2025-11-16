export const people = [
  {
    id: 0,
    name: "Alex",
    year: 1,
    major: "Computer Science",
    courses: ["CPSC110", "MATH100", "PHYS117", "CHEM121"],
    isFriend: false,
    picture: "src/data/ProfilePictures/pfp1.jpeg"
  },
  {
    id: 1,
    name: "Jake", // formerly Maya
    year: 2,
    major: "Psychology",
    courses: ["PSYC101", "BIOL121", "STAT200", "LING100"],
    isFriend: true,
    picture: "src/data/ProfilePictures/pfp2.jpg"
  },
  {
    id: 2,
    name: "Ethan",
    year: 1,
    major: "Mechanical Engineering",
    courses: ["APSC100", "PHYS170", "MATH100", "CHEM154"],
    isFriend: false,
    picture: "src/data/ProfilePictures/pfp3.jpg"
  },
  {
    id: 3,
    name: "Sarah",
    year: 3,
    major: "Biology",
    courses: ["BIOL200", "CHEM233", "BIOL260", "STAT203"],
    isFriend: false,
    picture: "src/data/ProfilePictures/pfp4.jpg"
  },
  {
    id: 4,
    name: "Daniel",
    year: 2,
    major: "Economics",
    courses: ["ECON101", "ECON102", "MATH105", "STAT200"],
    isFriend: true,
    picture: "src/data/ProfilePictures/pfp5.jpg"
  },
  {
    id: 5,
    name: "Jasmin",
    year: 1,
    major: "Sauder Commerce",
    courses: ["COMM101", "COMM290", "ECON101", "MATH100"],
    isFriend: false,
    picture: "src/data/ProfilePictures/pfp6.jpg"
  },
  {
    id: 6,
    name: "Noah",
    year: 3,
    major: "Physics",
    courses: ["PHYS304", "PHYS301", "MATH317", "PHYS203"],
    isFriend: true,
    picture: "src/data/ProfilePictures/pfp7.jpg"
  },
  {
    id: 7,
    name: "Emily",
    year: 2,
    major: "English Literature",
    courses: ["ENGL200", "ENGL220", "ENGL232", "PHIL120"],
    isFriend: false,
    picture: "src/data/ProfilePictures/pfp8.jpg"
  },
  {
    id: 8,
    name: "Lucas",
    year: 4,
    major: "Computer Engineering",
    courses: ["CPEN211", "CPEN331", "CPSC221", "EECE256"],
    isFriend: true,
    picture: "src/data/ProfilePictures/pfp9.jpg"
  },
  {
    id: 9,
    name: "Sophie",
    year: 1,
    major: "Pharmacy",
    courses: ["CHEM123", "BIOL121", "PHYL200", "MICB202"],
    isFriend: true,
    picture: "src/data/ProfilePictures/pfp10.jpg"
  }
];

export let sessions = [
  {
    id: 0,
    organizerId: 2, // Ethan
    course: "CHEM 154",
    time: "2025-11-16 14:00",
    location: "IKB 455",
    topics: ["Entropy", "Bonding"],
    attendees: [2, 5],       // Ethan, Jasmin
    isAttending: true        // you are going
  },
  {
    id: 1,
    organizerId: 2, // Ethan again
    course: "CHEM 154",
    time: "2025-11-17 10:00",
    location: "LSK 201",
    topics: ["Thermodynamics", "States of Matter"],
    attendees: [2, 5, 1],    // Ethan, Jasmin, Maya
    isAttending: false
  },
  {
    id: 2,
    organizerId: 1, // Maya
    course: "MATH 100",
    time: "2025-11-20 09:00",
    location: "BUCH B302",
    topics: ["Derivatives", "Limits"],
    attendees: [1, 4],       // Maya, Daniel
    isAttending: true
  },
  {
    id: 3,
    organizerId: 4, // Daniel (friend)
    course: "ECON 101",
    time: "2025-11-18 16:00",
    location: "Henry Angus 234",
    topics: ["Supply & Demand", "Elasticity"],
    attendees: [4, 5, 1],    // Daniel, Jasmin, Maya
    isAttending: false
  },
  {
    id: 4,
    organizerId: 6, // Noah (friend)
    course: "PHYS 304",
    time: "2025-11-19 18:30",
    location: "Hennings 201",
    topics: ["Electromagnetic Waves", "Maxwell’s Equations"],
    attendees: [6, 8],       // Noah, Lucas
    isAttending: true
  },
  {
    id: 5,
    organizerId: 0, // Alex (not friend)
    course: "CPSC 110",
    time: "2025-11-21 13:00",
    location: "ICICS X250",
    topics: ["Design Recipes", "Structural Recursion"],
    attendees: [0, 2],       // Alex, Ethan
    isAttending: true
  },
  {
    id: 6,
    organizerId: 8, // Lucas (friend)
    course: "CPEN 211",
    time: "2025-11-22 11:00",
    location: "DMP 110",
    topics: ["Finite State Machines", "Digital Logic"],
    attendees: [8, 6, 4],    // Lucas, Noah, Daniel
    isAttending: false
  },
  {
    id: 7,
    organizerId: 9, // Sophie (friend)
    course: "CHEM 123",
    time: "2025-11-23 15:00",
    location: "CHEM D200",
    topics: ["Acid-Base Equilibria", "Titrations"],
    attendees: [9, 4],       // Sophie, Daniel
    isAttending: true
  },
  {
    id: 8,
    organizerId: 3, // Sarah (not friend)
    course: "BIOL 200",
    time: "2025-11-24 10:00",
    location: "LSK 460",
    topics: ["DNA Replication", "Transcription"],
    attendees: [3, 7],       // Sarah, Emily
    isAttending: false
  },
  {
    id: 9,
    organizerId: 5, // Jasmin (not friend)
    course: "COMM 101",
    time: "2025-11-25 17:00",
    location: "Henry Angus 132",
    topics: ["Group Presentations", "Case Analysis"],
    attendees: [5, 4],       // Jasmin, Daniel
    isAttending: false
  },
  {
    id: 10,
    organizerId: 1, // Maya again (friend)
    course: "PSYC 101",
    time: "2025-11-26 12:00",
    location: "BUCH D322",
    topics: ["Memory", "Learning Theories"],
    attendees: [1, 6, 2],    // Maya, Noah, Ethan
    isAttending: false
  },
  {
    id: 11,
    organizerId: 2, // Ethan again (not friend)
    course: "PHYS 170",
    time: "2025-11-27 09:30",
    location: "CIRS 1250",
    topics: ["Forces & Free-Body Diagrams", "Work & Energy"],
    attendees: [2, 0, 6, 3], // Ethan, Alex, Noah, Sarah
    isAttending: false
  },
  {
    id: 12,
    organizerId: 7, // Emily (not friend)
    course: "ENGL 220",
    time: "2025-11-28 14:00",
    location: "BUCH A210",
    topics: ["Close Reading", "Poetry Analysis"],
    attendees: [7, 1],       // Emily, Maya
    isAttending: false
  }
];