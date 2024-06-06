import vrShipSimulator1 from '../../images/projects/vr-ship-bridge-simulator/vr-ship-1.png';
import vrShipSimulator2 from '../../images/projects/vr-ship-bridge-simulator/vr-ship-2.png';
import vrShipSimulator3 from '../../images/projects/vr-ship-bridge-simulator/vr-ship-3.png';
import vrShipSimulator4 from '../../images/projects/vr-ship-bridge-simulator/vr-ship-4.png';
import vrShipSimulator5 from '../../images/projects/vr-ship-bridge-simulator/vr-ship-5.png';
import vrShipSimulator6 from '../../images/projects/vr-ship-bridge-simulator/vr-ship-6.png';
import vrShipSimulator7 from '../../images/projects/vr-ship-bridge-simulator/vr-ship-7.png';

export const vrShipSimulatorData = {
	ProjectId: 'vr-ship-and-bridge-simulator',
	ProjectHeader: {
		title: 'VR Ship and Bridge Simulator',
		timeline: 'Nov 2022 - Feb 2023',
		tags: 'Unity, VR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'VR Ship and Bridge Simulator',
			img: vrShipSimulator1
		},
        {
			id: 2,
			type: 'image',
			title: 'VR Ship and Bridge Simulator',
			img: vrShipSimulator2
		},
        {
			id: 3,
			type: 'image',
			title: 'VR Ship and Bridge Simulator',
			img: vrShipSimulator7
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Oculus Quest 2'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `Simulator to train users about Safe Navigation practices.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `VR Ship and Bridge Simulator is an immersive training solution developed during my tenure at Mount Visual in Bergen, specifically for Sayr AS as a demonstration of cost-effective safety navigation practices. Recognizing the challenges and costs associated with traditional in-person ship navigation training, we proposed and executed a comprehensive VR simulator to train individuals in safe navigation practices.`
			},
			{
				id: 2,
				details:
                    `Featuring animated full-body lipsynced avatars, this VR simulator offers users an interactive learning experience. I spearheaded the development independently, scripting the training modules using Unity Visual Script Graphs. Leveraging avatars sourced from another Mount Visual project, capable of responding to scripted modules, I ensured a dynamic and engaging training environment.`
			},
            {
				id: 3,
				details:
                    `Designed as a hands-only VR experience, this simulator includes interactive components for navigating the ship. Each training module offers branching pathways based on user selections, guiding them through various safety practices. Users progress through the modules by completing steps aligned with safety protocols, providing an effective and efficient training solution for Sayr AS.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
