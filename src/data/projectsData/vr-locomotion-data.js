import vrLocomotion1 from '../../images/projects/hands-only-locomotion-system/locomotion-1.png';
import vrLocomotion2 from '../../images/projects/hands-only-locomotion-system/locomotion-2.png';
import vrLocomotion3 from '../../images/projects/hands-only-locomotion-system/locomotion-3.png';
import vrLocomotion4 from '../../images/projects/hands-only-locomotion-system/locomotion-4.png';
import vrLocomotion5 from '../../images/projects/hands-only-locomotion-system/locomotion-5.png';

export const vrLocomotionData = {
	ProjectId: 'vr-locomotion-system',
	ProjectHeader: {
		title: 'Hands-only Locomotion System for Oculus Quest',
		timeline: 'Feb 2019 - May 2019',
		tags: 'Unity, VR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'VR Locomotion',
			img: vrLocomotion1
		},
        {
			id: 2,
			type: 'image',
			title: 'VR Locomotion',
			img: vrLocomotion4
		},
        {
			id: 3,
			type: 'image',
			title: 'VR Locomotion',
			img: vrLocomotion5
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Oculus Quest 1', 'Tensorflow Lite'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `A comprehensive locomotion system with static and dynamic hand gestures as input.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `This project was part of my internship at Breach VR in Trondheim and also served as my bachelor's thesis in Computer Science Engineering at Amrita University. The primary aim was to create a natural and immersive locomotion system for VR using Oculus Quest’s hand tracking technology, eliminating the need for traditional VR controllers.`
			},
			{
				id: 2,
				details:
                    `Traditional VR controllers, while functional, reduce the naturalness and immersiveness of VR experiences. The Oculus Quest’s hand tracking capabilities offer an opportunity to improve these aspects by using real hands as the primary input modality.`
			},
            {
				id: 3,
				details:
                    `The project involved investigating various hand gestures and movements to determine the most intuitive methods for VR locomotion. Multiple iterations of the hand-based locomotion system were developed, incorporating user feedback to refine and enhance the user experience. Addressing the limitations of computer-vision based hand tracking was crucial to ensure reliability and responsiveness in different VR scenarios.`
			},
            {
				id: 4,
				details:
                    `This work explored the potential of using real hands as the input modality for VR locomotion. Several hand gestures were proposed, with static gestures outperforming dynamic ones. For critical functions like locomotion, the system was designed to avoid false positive errors, ensuring precise and intentional movements in VR.`
			},
            {
				id: 5,
				details:
                    `The continuous and non-continuous locomotion modules developed can be readily deployed in any VR application. The teleportation technique proved best for non-continuous locomotion, while static single-hand gestures were most effective for continuous locomotion in a sitting position. For standing positions, dynamic gestures for walking, jumping, flying, and swimming were implemented successfully, though dynamic gesture recognition faced challenges with false positives due to hand tracking noise in Oculus Quest 1.`
			},
            {
				id: 6,
				details:
                    `Despite the challenges, the developed system demonstrated the feasibility of hand-based VR locomotion. With advancements in hand tracking technology, such systems will become more robust. The proposed gestures and locomotion methods are not limited to Oculus Quest but can be adapted for future VR headsets with hand tracking capabilities.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: [
            {
                id: 1,
                name: 'Demo Videos',
                url: 'https://www.youtube.com/playlist?list=PLukur2Itr38hjYYz4604G7Fd1-_hWbd7E'
            },
            {
                id: 2,
                name: 'Bachelor Degree Thesis Documents',
                url: 'https://drive.google.com/drive/folders/1dcRdWIGYduhs0uA7kBf8RuTSOvqn_t8B?usp=sharing'
            },
            {
                id: 3,
                name: 'Internship Completion Certificate',
                url: 'https://drive.google.com/drive/folders/138wzuj1raJX7pOgcXlUFha3XFGRLdiM8?usp=sharing'
            }
        ]
	}
}
