import esrDrone1 from '../../images/projects/emergency-rescue-drone/drone-1.png';
import esrDrone2 from '../../images/projects/emergency-rescue-drone/drone-2.png';
import esrDrone3 from '../../images/projects/emergency-rescue-drone/drone-3.png';

export const emergencySearchDroneData = {
	ProjectId: 'emergency-search-rescue-drone',
	ProjectHeader: {
		title: 'Emergency Search and Rescue Drone',
		timeline: '2018 - 2019',
		tags: 'IoT'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'ESR Drone',
			img: esrDrone3
		},
        {
			id: 2,
			type: 'video',
			title: 'ESR Drone',
			url: 'https://www.youtube.com/watch?v=zR30gRxc1-o?start=125'
		},
        {
			id: 3,
			type: 'image',
			title: 'ESR Drone',
			img: esrDrone2
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Python', 'Raspberry Pi', 'PiHawk'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: 'A hexacopter for efficient search and rescue operations in disaster-struck areas.',
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
					`I spearheaded the Emergency Search and Rescue (ESR) Drone project during my tenure at Amrita University, Coimbatore, India, as part of the Cisco ThingQbator Program Cohort 2. This project aimed to provide timely aid during floods, a common natural calamity in the southern regions of India. The program's mission was to empower young innovators to transform ideas into prototypes and businesses.`
            },
			{
				id: 2,
				details:
					`Forming a team comprising two software engineering students, one aerospace engineering student, and myself, we chose to construct a Hexacopter equipped with a Raspberry Pi, RGB camera, and Video Transmitter. This choice was made for its enhanced redundancy, stability, payload capacity, maneuverability, and endurance, all of which are critical for effective search and rescue operations in challenging environments like flood zones.`,
            },
            {
				id: 3,
				details:
					`The hexacopter we built served as a proof of concept for our project. Our goal was to deploy surveillance drones to explore inaccessible areas in flood zones, such as small rooftops, tree-covered regions, and buildings with trapped victims.`
            },
            {
				id: 4,
				details:
					`Our future plans included embedding day-night vision cameras, thermal cameras, and enhancing camera feed latency. Additionally, we aimed to implement computer vision algorithms for human detection and integrate victim location tagging into a common interface for first responders and government agencies. These advancements would facilitate quick assessment of flood zones, enabling authorities to plan efficient rescue operations.`
            },
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: [
            {
                id: 1,
                name: 'Certificate',
                url: 'https://drive.google.com/drive/folders/1Tarfjzbklv95NnfM1i37UV1w71RnjO0a?usp=sharing'
            }
        ]
	}
}
