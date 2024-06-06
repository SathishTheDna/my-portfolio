import vrArchVisualization1 from '../../images/projects/vr-architecture-visualization/vr-architecture-1.png';
import vrArchVisualization2 from '../../images/projects/vr-architecture-visualization/vr-architecture-2.png';

export const vrArchVizData = {
	ProjectId: 'vr-architecture-visualization',
	ProjectHeader: {
		title: 'VR Architecture Visualization App',
		timeline: 'May 2018 - July 2018',
		tags: 'Unity, VR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'VR Arch Visualization',
			img: vrArchVisualization1
		},
        {
			id: 2,
			type: 'image',
			title: 'VR Arch Visualization',
			img: vrArchVisualization2
		}
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Lenovo Mirage Solo VR Headset'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `Explore and personalize your virtual living space seamlessly with this intuitive app.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `Step into the realm of virtual architecture with my VR Architecture Visualization App, developed during an internship at Focuz AR. Tailored for the Lenovo Mirage Solo VR headset, this app redefines how users interact with apartment designs.`
			},
			{
				id: 2,
				details:
                    `Users are transported into a virtual apartment where they can navigate seamlessly and explore their space. They can unleash their creativity by adding furniture from a diverse gallery and customizing textures and colors to reflect their unique style and preferences.`
			},
			{
				id: 3,
				details:
                    `Beyond personalization, this app fosters collaboration and communication in the design process. Whether seeking feedback from friends or collaborating with interior designers, users can easily share their designs and ideas, facilitating productive discussions and informed decisions.`
			},
			{
				id: 4,
				details:
                    `Future development plans for this demo included the ability to save and share modifications, enhancing the collaborative and iterative design process.`
			},
			{
				id: 5,
				details:
                    `From conceptualization to execution, my VR Architecture Visualization App empowers users to iterate and innovate, transforming their vision into reality within the virtual realm.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: [
            {
                id: 1,
                name: 'Internship Completion Certificate',
                url: 'https://drive.google.com/drive/folders/1zSK_ZAPVaOsX0KPjkdLixhvUz424JiMx'
            }
        ]
	}
}
