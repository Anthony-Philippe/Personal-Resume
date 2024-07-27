// projectsData.js
import image1 from "@assets/images/CNN_project_Python.jpg";
import image3 from "@assets/images/MountainMinder_project_Kotlin.jpg";
import image4 from "@assets/images/Othello_project_C.jpg";
import image2 from "@assets/images/PersonalResume_project_React.jpg";

export const projects = [
  {
    id: 1,
    name: "Neural Network",
    description: "Description of Neural Network project",
    githubLink: "https://github.com/Anthony-Philippe/Neural-Network-Image-Classification",
    colorFrom: "from-indigo-400",
    colorTo: "to-violet-700",
    imageSrc: image1
  },
  {
    id: 2,
    name: "Digital Personal Resume",
    description: "Description of Digital Personal Resume project",
    githubLink: "https://github.com/Anthony-Philippe/Personal-Resume",
    colorFrom: "from-amber-400",
    colorTo: "to-orange-700",
    imageSrc: image2
  },
  {
    id: 3,
    name: "Mountain Minder",
    description: "Description of Mountain Minder project",
    githubLink: "https://github.com/Anthony-Philippe/MountainMinder/tree/master",
    colorFrom: "from-green-400",
    colorTo: "to-emerald-700",
    imageSrc: image3
  },
  {
    id: 4,
    name: "Othello Game",
    description: "Description of Othello Game project",
    githubLink: "https://github.com/Anthony-Philippe/Othello-Game",
    colorFrom: "from-pink-400",
    colorTo: "to-red-700",
    imageSrc: image4
  },
];
