import Photography from '../../assets/photography.jpg';
import Architecture from '../../assets/architecture.jpg';
import Surfing from '../../assets/surfing.jpg';
import Woodworking from '../../assets/woodworking.jpg';
import Stoicism from '../../assets/stoicism.jpg';
import Reading from '../../assets/reading.jpg';
import { PATH_PHOTO, PATH_READING_LIST } from '../../constants/paths';

export const content = {
  pageTitle: 'About - CHRIS FOLLEN',
  manifestoTitle: 'manifesto',
  manifestoText:
    '<s>be someone</s>. do something.<br/>create rad stuff.<br/>better than yesterday.<br/>people first.<br/>discipline = freedom.',
  quote: 'simplicity is the ultimate sophistication',
  quoteAuthor: 'leonardo da vinci',
  aboutMeHeading: "I'm Chris",
  aboutMe:
    "I’m so glad you found your way to my website, and I hope my work puts a smile on your face. \n I'm a frontend software engineer and Scrum Master based in coastal Maine. I like thinking, creating, problem solving, and learning. I’m passionate about everything I do, and am particularly intrigued by work that marries an aesthetic component with a technical one.",
  hobbiesAndInterestsHeader: 'Hobbies & interests',
  hobbiesAndInterests: [
    {
      heading: 'photography',
      body: "I truly believe that art has to power to inspire us, to move us, and to bring us together. I'm passionate about ",
      linkText: 'exploring with my camera',
      linkPath: PATH_PHOTO,
      body2:
        ' and creating tangible records of my experiences via both physical prints and coffee table books.',
      image: Photography,
      imageAltText: 'grand canyon view at sunrise'
    },

    {
      heading: 'surfing',
      body: "It's mindfulness, physical exercise, and time spent in nature all wrapped up in one. It's also hard work for a limited reward and I very much appreciate that aspect.",
      image: Surfing,
      imageAltText: 'surfer in encinitas, california'
    },
    {
      heading: 'woodworking',
      body: "Using your hands and tools to shape a piece of wood into (hopefully) something beautiful and functional is at once immensely satisfying and incredibly frustrating. It's a welcome opportunity to confront material reality and feel some agency.",
      image: Woodworking,
      imageAltText: 'trees in glacier national park'
    },
    {
      heading: 'stoicism',
      body: "It's not about what happens to you. It's about how you react to it. Choose wisely.",
      image: Stoicism,
      imageAltText: 'palm trees in california'
    },
    {
      heading: 'reading',
      body: "For me, reading is a way to communicate with some of the greatest thinkers who have walked the earth. I've put together a list of some of my favorites books ",
      linkText: 'here',
      linkPath: PATH_READING_LIST,
      body2: '.',
      image: Reading,
      imageAltText: 'man on beach at sunrise'
    },
    {
      heading: 'architecture',
      body: 'I appreciate thoughtfully-designed spaces, and am particularly intrigued by functional layouts that make efficient use of space and resources.',
      image: Architecture,
      imageAltText: 'antelope canyon black and white'
    }
  ]
};
