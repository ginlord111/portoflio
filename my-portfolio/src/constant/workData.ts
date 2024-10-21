import spotifyImage from "../assets/projectSpotify.png";
import askEinsteinWeb from "../assets/ask-einstein-pic.png";
import einsteinIcon from "../assets/einstein.png";
import spotifyLogo from "../assets/SpotifyLogo.png";
import folderDriveIcon from "../assets/folder-picture-iconn.png";
import algorithmicOddyseyIcon from '../assets/algorithmic-oddysey-icon.png'
import algortihmicOddysey from "../assets/algorithmic-oddysey-pic.png";
import folderDrivePage from '../assets/FolderDrivePage.png'
const Works = [
  {
    name: "Spotify Clone",
    imgSrc: spotifyImage,
    icon: spotifyLogo,
    desc: " Introducing my Spotify Clone website, a unique twist on the classic music streaming experience. Unlike traditional platformsthat rely on external APIs, my Spotify Clone empowers users to create their own musical haven by uploading and organizing their personal music collection.",
    techStacks: ["Next JS", "Tailwind", "Supabase"],
    demoLink: "https://clone-spotify-ronn.vercel.app/",
    codeLink: "https://github.com/ginlord111/REACT-NEXT-JS.git",
    textColor:"text-green-400"
  },
  {
    name: "Ask-Einstein",
    imgSrc: askEinsteinWeb,
    icon: einsteinIcon,
    desc: " Ask Einstein is a website that utilizes the OpenAI API to generate conversations, code snippets, and images for the video and music generators. Unfortunately, I cannot afford the premium plan to continue offering this service on the website. Similarly, Vercel's hobby plan only allows for API responses within a maximum of 10 seconds. Therefore, I have created a YouTube video demonstrating its full functionality instead.",
    techStacks: ["Next JS", "Tailwind", "Auth JS", "Prisma"],
    demoLink: "https://ask-einstein.vercel.app/",
    codeLink: "https://github.com/ginlord111/ask-einsteinv2.git",
        textColor:"text-gray-400",
    ytLink:"https://youtu.be/PqELbS5Tlxw"
  },
  {
    name: "Folder Drive",
    imgSrc: folderDrivePage,
    icon: folderDriveIcon,
    desc: " Introducing Folder Drive: Your hassle-free file management solution! Just like a mini Google Drive,  Folder Drive lets you store, organize, and share files effortlessly. Create personalized organizations, invite members to collaborate, and control access  to your files with ease. Download, upload, and edit files  seamlessly. Experience the simplicity of file management with Folder Drive - sign up now!",
    techStacks: ["Next JS", "Tailwind", "Convex", "Clerk"],
    demoLink: "https://folder-drive.vercel.app/",
    codeLink: "https://github.com/ginlord111/folder-drive",
    textColor:"text-yellow-400"
  },
  {
    name: "Algorithmic Odyssey",
    imgSrc:algortihmicOddysey,
    icon: algorithmicOddyseyIcon,
    desc: "Developed 'Algorithmic Odyssey,' an educational platform designed to help students better understand algorithms in programming. The site features a forum for peer-to-peer discussion and a classroom module where teachers can assign activities, akin to Google Classroom",
    techStacks: ["Next JS", "Tailwind", "Next Auth", "GDrive API"],
    demoLink: "https://algorithmic-odyssey-web.vercel.app/",
    codeLink: "https://github.com/ginlord111/algorithmic-odyssey-web",
    textColor:"text-[#738abe]"
  },
];

export default Works;
