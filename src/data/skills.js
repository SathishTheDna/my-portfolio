import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaGit, FaAws } from 'react-icons/fa';
import { TbHexagonLetterCFilled } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiCsharp, SiCplusplus, SiMysql, SiUnity, SiThreedotjs, SiBabylonjs, SiAframe, SiOpengl, SiMeta, SiHtc, SiOpenxr, SiDotnet, SiAspnet, SiSignalr, SiWebrtc, SiDocker, SiGithub, SiBitbucket, SiJira, SiLinux, SiVuforia, SiArcore, SiArjs, SiWebxr } from 'react-icons/si';
import { ReactComponent as BabylonIcon } from '../images/skills/babylon.svg';
import { ReactComponent as MetaIcon } from '../images/skills/meta.svg';
import { ReactComponent as HTCViveIcon } from '../images/skills/htc-vive.svg';
import { ReactComponent as OpenXRIcon } from '../images/skills/openxr.svg';
import { ReactComponent as ARCoreIcon } from '../images/skills/arcore.svg';
import { ReactComponent as VuforiaIcon } from '../images/skills/vuforia.svg';
import { ReactComponent as EighthWallWebIcon } from '../images/skills/eighthwall.svg';
import { ReactComponent as ARjsIcon } from '../images/skills/arjs.svg';
import { ReactComponent as WebXRIcon } from '../images/skills/webxr.svg';
import { ReactComponent as AspDotNetIcon } from '../images/skills/aspdotnet.svg';
import { ReactComponent as SQLServerIcon } from '../images/skills/sql-server.svg';
import { ReactComponent as SignalRIcon } from '../images/skills/signalr.svg';
import { ReactComponent as PostmanIcon } from '../images/skills/postman.svg';
import { ReactComponent as MeldIcon } from '../images/skills/meld.svg';
import { ReactComponent as VisualStudioIcon } from '../images/skills/visual-studio.svg';
import { ReactComponent as VSCodeIcon } from '../images/skills/visual-studio-code.svg';
import { ReactComponent as IoTIcon } from '../images/skills/IoT.svg';

export const skillsData = [
    {
        id: 1,
        title: 'Programming Languages',
        data: [
            { id: 1, title: 'C#', icon: <SiCsharp /> },
            { id: 2, title: 'JavaScript', icon: <SiJavascript /> },
            { id: 3, title: 'TypeScript', icon: <SiTypescript /> },
            { id: 4, title: 'C++', icon: <SiCplusplus /> },
            { id: 5, title: 'Python', icon: <FaPython /> },
            { id: 6, title: 'Java', icon: <FaJava /> },
            { id: 7, title: 'C', icon: <TbHexagonLetterCFilled /> },
            { id: 8, title: 'HTML', icon: <FaHtml5 /> },
            { id: 9, title: 'CSS', icon: <FaCss3Alt /> },
        ]
    },
    {
        id: 2,
        title: 'Game Development',
        data: [
            { id: 1, title: 'Unity', icon: <SiUnity /> },
            { id: 2, title: 'three.js', icon: <SiThreedotjs /> },
            { id: 3, title: 'babylon.js', icon: <BabylonIcon /> },
            { id: 4, title: 'A-Frame', icon: <SiAframe /> },
            { id: 5, title: 'OpenGL', icon: <SiOpengl /> },
        ]
    },
    {
        id: 3,
        title: 'XR Development',
        data: [
            { id: 1, title: 'Meta Quest', icon: <MetaIcon /> },
            { id: 2, title: 'HTC Vive', icon: <HTCViveIcon /> },
            { id: 3, title: 'OpenXR', icon: <OpenXRIcon /> },
            { id: 4, title: 'ARFoundation', icon: <SiUnity /> },
            { id: 5, title: 'AR Core', icon: <ARCoreIcon /> },
            { id: 6, title: 'Vuforia', icon: <VuforiaIcon /> },
            { id: 7, title: '8th Wall Web', icon: <EighthWallWebIcon /> },
            { id: 8, title: 'AR.js', icon: <ARjsIcon /> },
            { id: 9, title: 'WebXR', icon: <WebXRIcon /> },
        ]
    },
    {
        id: 4,
        title: 'Web Development',
        data: [
            { id: 1, title: 'ASP.NET', icon: <AspDotNetIcon /> },
            { id: 2, title: 'React', icon: <FaReact /> },
            { id: 3, title: 'MySQL', icon: <SiMysql /> },
            { id: 4, title: 'SQL Server', icon: <SQLServerIcon /> },
            { id: 5, title: 'SignalR', icon: <SignalRIcon /> },
            { id: 6, title: 'WebRTC', icon: <SiWebrtc /> },
            { id: 7, title: 'AWS', icon: <FaAws /> },
            { id: 8, title: 'Docker', icon: <SiDocker /> },
            { id: 9, title: 'Postman', icon: <PostmanIcon /> },
        ]
    },
    {
        id: 6,
        title: 'Source Control',
        data: [
            { id: 1, title: 'Git', icon: <FaGit /> },
            { id: 2, title: 'Github', icon: <SiGithub /> },
            { id: 3, title: 'Bitbucket', icon: <SiBitbucket /> },
            { id: 4, title: 'Meld', icon: <MeldIcon /> },
        ]
    },
    {
        id: 7,
        title: 'Miscellaneous',
        data: [
            { id: 1, title: 'Visual Studio', icon: <VisualStudioIcon /> },
            { id: 2, title: 'VS Code', icon: <VSCodeIcon /> },
            { id: 3, title: 'JIRA', icon: <SiJira /> },
            { id: 4, title: 'Github Projects', icon: <SiGithub /> },
            { id: 5, title: 'Linux', icon: <SiLinux /> },
            { id: 6, title: 'IoT Sensors and Devices', icon: <IoTIcon /> },
        ]
    },
];
