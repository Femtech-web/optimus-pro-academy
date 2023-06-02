import { DiCelluloid, DiClojure, 
DiCreativecommons, DiRaphael, DiStreamline } from 'react-icons/di';
import { BsFacebook, BsInstagram, BsTwitter, BsPersonWorkspace, 
BsLinkedin, BsGithub, BsReddit } from 'react-icons/bs';
import { MdArrowDropDown, MdCloudDownload, 
MdLibraryBooks, MdOutlineEventNote, MdVideoLibrary } from 'react-icons/md';
import { CgNotes } from 'react-icons/cg';
import { FaPodcast } from 'react-icons/fa'; 
import { VscBook } from 'react-icons/vsc';
import { ImBooks } from 'react-icons/im';

export const NavLinks = [
    {
        title: 'Learn',
        subLinks: [
            'link-1', 'link-2', 'link-3'
        ],
        icon: <MdArrowDropDown className='text-primaryBtn' fontSize={25}/>
    },
    {
        title: 'Enterprise'
    },
    {
        title: 'Community',
        subLinks: [
            'link-1', 'link-2', 'link-3'
        ],
        icon: <MdArrowDropDown className='text-primaryBtn' fontSize={25}/>
    },
    {
        title: 'Career'
    },
    {
        title: 'Blog'
    },
    {
        title: 'About Us'
    }
]

export const learnLinks = [
    'Educational Resources', 'Courses', 'Programs & Events', 'Web3 Startup School'
]

export const EduResourcesData = [
    {
        title: 'Articles',
        subtitle: 'Read my Articles',
        icon: <MdLibraryBooks className='text-primaryBtn' fontSize={17}/>
    },
    {
        title: 'Podcast',
        subtitle: 'Read my Articles',
        icon: <FaPodcast className='text-primaryBtn' fontSize={17}/>
    },
    {
        title: 'Glossary',
        subtitle: 'Read my Articles',
        icon: <CgNotes className='text-primaryBtn' fontSize={17}/>
    },
    {
        title: 'Research',
        subtitle: 'Read my Articles',
        icon: <VscBook className='text-primaryBtn' fontSize={17}/>
    },
    {
        title: 'Downloadables',
        subtitle: 'Read my Articles',
        icon: <MdCloudDownload className='text-primaryBtn' fontSize={17}/>
    },
    {
        title: 'Videos',
        subtitle: 'Read my Articles',
        icon: <MdVideoLibrary className='text-primaryBtn' fontSize={17}/>
    }
]

export const coursesDropData =[
    [
        'Finance', 'Donec', 'Donec', 'Donec', 'Donec'
    ],
    [
        'Programming', 'Donec', 'Donec', 'Donec', 'Donec'
    ],
    [
        'Art & Design', 'Donec', 'Donec', 'Donec', 'Donec'
    ],
    [
        'Management', 'Donec', 'Donec', 'Donec', 'Donec'
    ]
]

export const programsData = [
    [
        {
            name: 'Seminars',
            icon: <ImBooks className='text-primaryBtn' fontSize={17} />
        },
        {
            name: 'Workshops',
            icon: <BsPersonWorkspace className='text-primaryBtn' fontSize={17} />
        },
        {
            name: 'Upcoming Events',
            icon: <MdOutlineEventNote className='text-primaryBtn' fontSize={17} />
        }
    ],
    [
        {
            name: 'Seminars',
            icon: <ImBooks className='text-primaryBtn' fontSize={17} />
        },
        {
            name: 'Workshops',
            icon: <BsPersonWorkspace className='text-primaryBtn' fontSize={17} />
        },
        {
            name: 'Upcoming Events',
            icon: <MdOutlineEventNote className='text-primaryBtn' fontSize={17} />
        }
    ]
]

export const startData = [
    {
        figure: '.01',
        title: 'Learn',
        subtitle: "Learn any tech or non-tech skill from industry experts, enjoy direct mentorship benefits, get first-hand access to internship and career opportunities."
    },
    {
        figure: '.02',
        title: 'Build',
        subtitle: "Build your portfolio, network to enhance your career and land your dream job or build your 'A-Team' and launch your startup with the skills and experience you've gained."
    },
    {
        figure: '.03',
        title: 'Inspire',
        subtitle: "Inspire Optimist with the knowledge and expertise required to upskill the next generation of tech leaders who will build innovative Web3, crypto, and blockchain solutions for mass adoption."
    }
]

export const tracksData = [
    {
        imageUrl: './images/cardUp1.jpg',
        title: 'Finance',
        subtitle: 'Learn about Web3 financial applications and technologies.'
    },
    {
        imageUrl: './images/cardUp4.jpg',
        title: 'Programming',
        subtitle: 'Learn programming and build dApps on the blockchain.'
    },
    {
        imageUrl: './images/cardUp3.jpg',
        title: 'Digital Art & Design',
        subtitle: 'Learn digital art and design for the metaverse and Web3'
    },
    {
        imageUrl: './images/cardUp2.jpg',
        title: 'Management',
        subtitle: 'Learn management skills for Web3 projects.'
    }
]

export const coursesData = [
    {
        imageUrl: './images/cardMid1.jpg',
        title: 'Blockchain Fundamentals',
        subtitle: 'Learn about Web3 financial applications and technologies.'
    },
    {
        imageUrl: './images/cardMid4.jpg',
        title: 'Smart Contract Development',
        subtitle: 'Learn about Web3 financial applications and technologies.'
    },
    {
        imageUrl: './images/cardMid3.jpg',
        title: 'Crypto Trading Strategies',
        subtitle: 'Learn about Web3 financial applications and technologies.'
    },
    {
        imageUrl: './images/cardMid2.jpg',
        title: 'Web3 Development Essentials',
        subtitle: 'Learn about Web3 financial applications and technologies.'
    }
]

export const testimonialData = [
    {
        name: 'Hakim Abam',
        post: 'Altcoin trader',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.',
        imageUrl: './images/testimonial1.png'
    },
    {
        name: 'John Martins',
        post: 'Brand Designer',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.',
        imageUrl: './images/testimonial4.png'
    },
    {
        name: 'Lola Akanni',
        post: 'Web2.0 Developer',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.',
        imageUrl: './images/testimonial3.png'
    },
    {
        name: 'Juliet Nduka',
        post: 'Product Manager',
        testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.',
        imageUrl: './images/testimonial2.png'
    }
]

export const updatesData = [
    {
        imageUrl: './images/cardBot3.jpg',
        title: 'NFT',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.'
    },
    {
        imageUrl: './images/cardBot2.jpg',
        title: 'WEB 3.0',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.'
    },
    {
        imageUrl: './images/cardBot1.jpg',
        title: 'LEARNING',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.'
    }
]

export const upSkill = [
    'Assignment', 'Internship opportunities', 'Self-paced courses', 'Quizzes', 'Weekly mentorship sessions'
]

export const brandsData = [
    {
        name: 'Bicomomy',
        icon: <DiCelluloid fontSize={25} />
    },
    {
        name: 'Ceramic', 
        icon: <DiClojure fontSize={25} />
    },
    {
        name:'Sonr',
        icon: <DiCreativecommons fontSize={25} />
    },
    {
        name: 'Coinbase',
        icon: <DiRaphael fontSize={25} />
    },
    {
        name: 'CoinStack',
        icon: <DiStreamline fontSize={25} />
    }
]

export const statData = [
    {
        name: 'MEMBERS',
        stat: '10k'
    },
    {
        name: 'INSTRUCTORS',
        stat: '25'
    },
    {
        name: 'COURSES',
        stat: '17'
    }
]

export const footerLinksData = [
    {
        Header: 'ACADEMY',
        links: [
            'Courses', 'Access', 'About Us', 'Community', 'Web3 Startups School', 'Contact Us'
        ]
    },
    {
        Header: 'BUSINESS',
        links: [
            'Upskill Your Team', 'Affiliates', 'Become a Mentor', 'Partnership', 'Brand', 'Careers'
        ]
    },
    {
        Header: 'CONTENT',
        links: [
            'Blog', 'Podcast', 'Videos', 'Resources', 'Events', 'Optimus Pro', 'Research'
        ]
    },
    {
        Header: 'TOP TRACKS',
        links: [
            'Blockchain development', 'Business development', 'Metaverse development', 'UI/UX design',
            'Community management', 'DeFi analysis'
        ]
    },
    {
        Header: 'PRODUCTS',
        links: [
            'Pro Team'
        ]
    }
]

export const SocialIcons = [
    <BsFacebook fontSize={22} />, 
    <BsInstagram fontSize={22} />, 
    <BsTwitter fontSize={22} />, 
    <BsLinkedin fontSize={22} />, 
    <BsGithub fontSize={22} />,
    <BsReddit fontSize={22} />,
]

export const  FeaturedTracksData = [
    {
        title: 'Lorem ipsum dolor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.',
        img1: '/images/ballon.png',
        img2: '/images/band.png',
        icon: '/images/testimonial3.png',
        name: 'Lola Akanni',
        learn: 'Programming',
    },
    {
        title: 'Lorem ipsum dolor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.',
        img1: '/images/ballon.png',
        img2: '/images/band.png',
        icon: '/images/testimonial3.png',
        name: 'Lola Akanni',
        learn: 'Programming',
    },
    {
        title: 'Lorem ipsum dolor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.',
        img1: '/images/ballon.png',
        img2: '/images/band.png',
        icon: '/images/testimonial3.png',
        name: 'Lola Akanni',
        learn: 'Programming',
    },
    {
        title: 'Lorem ipsum dolor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulp utate libeinterdum Lorem ipsum dolor sit.',
        img1: '/images/ballon.png',
        img2: '/images/band.png',
        icon: '/images/testimonial3.png',
        name: 'Lola Akanni',
        learn: 'Programming',
    }
];