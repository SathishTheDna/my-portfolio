import salmonFarmShowcase1 from '../../images/projects/salmon-farm-showcase/salmon-1.png';
import salmonFarmShowcase2 from '../../images/projects/salmon-farm-showcase/salmon-2.jpg';
import salmonFarmShowcase3 from '../../images/projects/salmon-farm-showcase/salmon-3.jpg';
import salmonFarmShowcase4 from '../../images/projects/salmon-farm-showcase/salmon-4.jpg';
import salmonFarmShowcase5 from '../../images/projects/salmon-farm-showcase/salmon-5.jpg';
import salmonFarmShowcase6 from '../../images/projects/salmon-farm-showcase/salmon-6.jpg';
import salmonFarmShowcase7 from '../../images/projects/salmon-farm-showcase/salmon-7.jpg';

export const salmonFarmShowcaseData = {
	ProjectId: 'salmon-farm-showcase',
	ProjectHeader: {
		title: 'Salmon Farm Showcase App',
		timeline: 'Oct 2022 - June 2023',
		tags: 'Unity'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'Salmon Farm Showcase',
			img: salmonFarmShowcase1
		},
        {
			id: 2,
			type: 'image',
			title: 'Salmon Farm Showcase',
			img: salmonFarmShowcase3
		},
        {
			id: 3,
			type: 'image',
			title: 'Salmon Farm Showcase',
			img: salmonFarmShowcase2
		}
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Cinemachine', 'TouchScript'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `Interactive Visualization of a Salmon Farm.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `During my tenure at Mount Visual in Bergen, I developed the Salmon Farm Showcase App for Sterner AS. This interactive application highlights Sterner's Salmon Farming unit, showcasing the entire facility and its important equipment.`
			},
			{
				id: 2,
				details:
                    `The main view of the app presents an overview of the entire unit, with location pins indicating important rooms within the building. Users can click on these pins to navigate to specific locations within the unit, facilitated by Cinemachine for smooth transitions.`
			},
			{
				id: 3,
				details:
                    `To enhance realism and immersion, compute shaders were utilized to implement salmon boids and particle flocking effects, adding dynamic movement and visual interest to the simulation.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
