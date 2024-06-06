import manomotionShowcase1 from '../../images/projects/manomotion-internship-demo/manomotion-internship-1.png';
import manomotionShowcase2 from '../../images/projects/manomotion-internship-demo/manomotion-internship-2.png';
import manomotionShowcase3 from '../../images/projects/manomotion-internship-demo/manomotion-internship-3.png';

export const manomotionShowcaseData = {
	ProjectId: 'manomotion-sdk-showcase',
	ProjectHeader: {
		title: 'Manomotion SDK Showcase',
		timeline: 'Aug 2019 - Sep 2019',
		tags: 'Unity, AR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'Manomotion SDK Showcase',
			img: manomotionShowcase3
		},
        {
			id: 2,
			type: 'video',
			title: 'Manomotion SDK Showcase',
			url: 'https://www.youtube.com/watch?v=xEA3Lun_tRk'
		},
        {
			id: 3,
			type: 'image',
			title: 'Manomotion SDK Showcase',
			img: manomotionShowcase2
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Manomotion SDK'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `Developed an interactive app highlighting Manomotion SDK's performance and capabilities.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `During my internship at Manomotion, I developed an app to demonstrate the capabilities of the Manomotion SDK. This app showcased a Number Keypad and Grid with movable components, utilizing Manomotion's Click Gesture for keypad interaction and Click and Drag gesture for component manipulation within the grid. The app also displayed the frames per second (FPS) and processing time taken by the Manomotion SDK for each frame, providing insight into its performance.`
			},
			{
				id: 2,
				details:
                    `The Manomotion SDK enables hand tracking and gesture recognition in AR and VR applications, addressing the challenge of accurately detecting and interpreting hand movements and gestures in real-time. By enhancing user interaction and immersion in AR and VR experiences, the Manomotion SDK plays a crucial role in advancing the capabilities of interactive digital environments.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: [
            {
                id: 1,
                name: 'Internship Completion Certificate',
                url: 'https://drive.google.com/drive/folders/1ZM54hHb0rbGqAy1QsZ7VIeVSdhI_5Ox-'
            }
        ]
	}
}
