export type Course = {
  slug: string;
  available: boolean;
  level: string;
  title: string;
  description: string;
  overview: string;
  suitableFor: string;
  learningOutcomes: string[];
  detail: string;
  color: "mint" | "blue" | "orange" | "lavender" | "yellow" | "rose";
  duration: string;
  schedule: string;
  price: string;
  classFormat: string;
  faqs: CourseFaq[];
};

export type CourseFaq = {
  question: string;
  answer: string;
};

const placeholder = "To be announced";

type CourseRecord = Omit<Course, "faqs">;

const courseRecords: CourseRecord[] = [
  {
    slug: "a1",
    available: true,
    level: "A1",
    title: "Beginner",
    description:
      "Start with everyday words, introductions, and simple conversations.",
    overview:
      "A welcoming introduction to German for learners who are just getting started. Build a foundation with familiar words and simple, useful exchanges.",
    suitableFor:
      "New learners with little or no previous German who want a supportive first step into the language.",
    learningOutcomes: [
      "Introduce yourself and share basic personal information.",
      "Understand and use familiar everyday expressions.",
      "Ask and answer simple questions in a conversation.",
      "Build confidence with common words and short phrases.",
    ],
    detail: "Your first steps",
    color: "mint",
    duration: "2 months",
    classFormat: "Online via Zoom or in person",
    schedule: "Immediate start",
    price: "LKR 50,000",
  },
  {
    slug: "a2",
    available: true,
    level: "A2",
    title: "Elementary",
    description:
      "Talk about familiar topics and handle common day-to-day situations.",
    overview:
      "Build on basic German and practise communicating in familiar situations. Grow your vocabulary and connect simple phrases into everyday exchanges.",
    suitableFor:
      "Learners who already know basic introductions and common phrases and are ready to communicate more in everyday situations.",
    learningOutcomes: [
      "Communicate about familiar topics and daily routines.",
      "Understand frequently used expressions and simple messages.",
      "Describe your background, surroundings, and immediate needs.",
      "Connect short ideas in clear, simple conversations.",
    ],
    detail: "Build your basics",
    color: "blue",
    duration: "3 months",
    classFormat: "Online via Zoom or in person",
    schedule: "Immediate start",
    price: "LKR 60,000",
  },
  {
    slug: "b1",
    available: false,
    level: "B1",
    title: "Intermediate",
    description:
      "Share your ideas, tell your story, and find your rhythm in German.",
    overview:
      "Develop more independence in German and take part in conversations about familiar subjects, personal experiences, and everyday plans.",
    suitableFor:
      "Learners who can manage many routine interactions in German and want to express ideas with more independence.",
    learningOutcomes: [
      "Understand the main points of clear speech on familiar subjects.",
      "Describe experiences, events, plans, and personal opinions.",
      "Handle many situations that can arise while travelling or living in a German-speaking environment.",
      "Connect ideas into a clear, simple explanation.",
    ],
    detail: "Find your voice",
    color: "orange",
    duration: placeholder,
    classFormat: placeholder,
    schedule: placeholder,
    price: placeholder,
  },
  {
    slug: "b2",
    available: false,
    level: "B2",
    title: "Upper Intermediate",
    description:
      "Speak with more range and confidence at work, study, and beyond.",
    overview:
      "Expand your range and communicate with greater fluency across work, study, and everyday life. Practise following more detailed discussions and expressing a point of view.",
    suitableFor:
      "Learners who can communicate independently in many situations and want to develop fluency and nuance.",
    learningOutcomes: [
      "Understand the main ideas of more complex texts and discussions.",
      "Interact with increased fluency and spontaneity.",
      "Explain viewpoints and compare possible approaches.",
      "Communicate clearly in a range of familiar professional and academic contexts.",
    ],
    detail: "Go further",
    color: "lavender",
    duration: placeholder,
    classFormat: placeholder,
    schedule: placeholder,
    price: placeholder,
  },
  {
    slug: "c1",
    available: false,
    level: "C1",
    title: "Advanced",
    description:
      "Refine your expression for nuanced conversations and new ambitions.",
    overview:
      "Refine your ability to use German flexibly and effectively. Work with complex ideas, detailed texts, and more nuanced communication.",
    suitableFor:
      "Confident German users who want to work with complex topics and communicate effectively in demanding contexts.",
    learningOutcomes: [
      "Understand longer and more demanding texts and recognise implied meaning.",
      "Express ideas fluently without frequent searching for words.",
      "Use German flexibly for social, academic, and professional purposes.",
      "Organise detailed explanations with clear structure and appropriate language.",
    ],
    detail: "Make it your own",
    color: "yellow",
    duration: placeholder,
    classFormat: placeholder,
    schedule: placeholder,
    price: placeholder,
  },
  {
    slug: "c2",
    available: false,
    level: "C2",
    title: "Proficient",
    description:
      "Polish your fluency and communicate with natural precision.",
    overview:
      "Continue refining highly proficient German use, with attention to precision, subtle meaning, and adapting expression to different situations.",
    suitableFor:
      "Highly proficient users seeking to polish precision, flexibility, and control across complex communication.",
    learningOutcomes: [
      "Understand almost all kinds of spoken and written German with ease.",
      "Summarise information from different sources into a coherent account.",
      "Express yourself spontaneously and precisely, including subtle distinctions in meaning.",
      "Adapt tone and style to a range of complex situations.",
    ],
    detail: "Reach your potential",
    color: "rose",
    duration: placeholder,
    classFormat: placeholder,
    schedule: placeholder,
    price: placeholder,
  },
];

function createCourseFaqs(course: CourseRecord): CourseFaq[] {
  return [
    {
      question: "How are classes delivered?",
      answer: course.available
        ? "Choose between online classes via Zoom or in-person classes."
        : "Class format will be announced when this course becomes available.",
    },
    {
      question: "When are classes scheduled?",
      answer: course.available
        ? `${course.level} has an immediate start. Contact us for weekly class days and times.`
        : "The schedule will be announced when this course becomes available.",
    },
    {
      question: "How long does the course last?",
      answer: course.available
        ? `The course duration is ${course.duration}.`
        : "The duration will be announced when this course becomes available.",
    },
    {
      question: "What is the course fee?",
      answer: `The course fee is ${course.price.toLowerCase()}.`,
    },
  ];
}

export const courses: Course[] = courseRecords.map((course) => ({
  ...course,
  faqs: createCourseFaqs(course),
}));

export const availableCourses = courses.filter((course) => course.available);

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}
