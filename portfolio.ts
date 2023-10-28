import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  GreetingsType,
  ProjectType,
  SEODataType,
  SkillBarsType,
  SkillsSectionType,
  SocialLinksType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Sarat Angajala',
  title: "Hello, I'm Sarat",
  description:
    'Full-stack and blockchain engineer with 3 years experience building fintech and web3 products.',
  resumeLink: 'https://saratangajala.com/Resume.pdf',
};

export const openSource = {
  githubUserName: 'SaratAngajalaoffl',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://saratangajala.com/',
  linkedin: 'https://www.linkedin.com/in/saratangajala/',
  github: 'https://github.com/SaratAngajalaoffl',
  twitter: 'https://twitter.com/mugiwaraa_eth',
  telegram: 'https://t.me/mugiwaraa_eth',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Blockchain engineer building a decentralized future',
  data: [
    {
      title: 'Blockchain Development',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building complex wallet infrastructure using Account Abstraction (ERC-4337) and Token Bound Accounts (ERC-6551)'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji(
          '⚡ Developing tech for NFT projects using ERC-721 Token Standard and ensuring compatibility and gas efficiency.'
        ),
        emoji(
          '⚡ Building DeFi applications that integrate with swapping, lending and other defi protocols.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Polygon Matic',
          iconifyTag: 'cryptocurrency-color:matic',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Ethers',
          iconifyTag: 'logos:ethers',
        },
        {
          skillName: 'Hardhat',
          iconifyTag: 'vscode-icons:file-type-hardhat',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        },
        {
          skillName: 'OpenZeppelin',
          iconifyTag: 'logos:open-zeppelin-icon',
        },
      ],
    },
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive and functional Single-Page-Apps (SPA) & PWA in ReactJS / NextJS'
        ),
        emoji('⚡ Building high performance backends using ExpressJS / Golang'),
        emoji(
          '⚡ Integrating web3 systems while ensuring security and decentralisation'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
        {
          skillName: 'PNPM',
          iconifyTag: 'logos:pnpm',
        },
      ],
    },
  ],
};

// export const SkillBars: SkillBarsType[] = [];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Indian Institute of Information Technology',
    subHeader: 'Bachelor of Technology in Computer Science',
    duration: 'July 2018 - July 2022',
    desc: '',
    grade: '',
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'FullStack / Blockchain Freelancer',
    company: 'ClanX - Talent aggregator in India',
    companyLogo: '/img/icons/common/clanx.jpeg',
    date: 'May 2023 – Present',
    desc: '',
    descBullets: [
      'Developed the tech required for an NFT art wall on polygon for Good Glamm Group.',
      'Built a student portal for the education institutes part of the Somaiya Group.',
      'Worked as a consultant/tech-support on a contract basis for Vanguard and Flexiti.',
    ],
  },
  {
    role: 'FullStack / Blockchain Engineer',
    company: 'SenshoDAO - A web3 research firm',
    companyLogo: '/img/icons/common/sensho.png',
    date: 'Jan 2022 – May 2023',
    desc: '',
    descBullets: [
      'Assisted media, entertainment and art houses looking to foray into Web3',
      'Clients include large film conglomerates like Eros Media World, Misfit Productions, and the Government of Qatar.',
      'Built a Web3 onboarding product called Augmint, which allowed users to mint NFTs with their credit card and no wallet.',
    ],
  },
  {
    role: 'FullStack / Mobile Developer',
    company: 'Haasyl',
    companyLogo: '/img/icons/common/haasyl.png',
    date: 'May 2021 - Jan 2022',
    desc: '',
    descBullets: [
      'Built a react native app with 500+ downloads on PlayStore.',
      'Designed and built a microloan platform that allows early salary access and disbursed over 20Lac in two months.',
      'Integrated third party services like a payment gateway, eKYC, BBPS, and NBFC for loan registration.',
      'Designed and built a scheduling system that handles automated notifications, repayment reminders, E-Nach initiations.',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Zaapbot',
    desc: 'Zaapbot is a Peer to Peer prediction market designed to allow users to bet on anything, anywhere using the beating heart of crypto- TWITTER. It simplifies prediction markets without making any additional trust assumptions',
    github: 'https://github.com//developer-portfolio',
    link: 'https://ethglobal.com/showcase/zaapbot-keikp',
  },
  {
    name: 'Intgr',
    desc: 'Telegram bot that uses Account Abstraction to provide a true Defi experience buying and selling NFTs via Telegram without any additional trust assumptions or loss of control over funds or NFTs.',
    github: 'https://github.com/superhack-eu091/TiGr-Bot',
    link: 'https://ethglobal.com/showcase/in-tgr-j0imz',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Abhishek - Founder @unmutex',
    feedback:
      'Sarat was a fantastic freelancer to work with. He efficiently completed my website designs in FIGMA and exceeded my expectations. Highly recommend him for future projects.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Sarat Angajala',
  description:
    'Full-stack and blockchain engineer with 3 years experience building fintech and web3 products. Developed React Native app with 500+ downloads. Consulted for media companies on NFT projects. Contributor to open source protocols. Passionate about leveraging blockchain to provide financial access.',
  author: 'Sarat Angajala',
  image: '/avatar.png',
  url: 'https://saratangajala.com',
  keywords: [
    'Sarat',
    'Sarat Angajala',
    '@mugiwaraa_eth',
    '@mugiwaraa.eth',
    'mugiwaraa',
    'Sarat Portfolio ',
    'Blockchain Developer',
    'NFT Developer',
  ],
};
