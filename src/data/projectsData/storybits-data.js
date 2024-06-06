import storybitsAR from '../../images/projects/storybits/storybits.png';

export const storybitsData = {
	ProjectId: 'storybits',
	ProjectHeader: {
		title: 'Storybits AR',
		timeline: 'Jan 2022 - Mar 2022',
		tags: 'Unity, AR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'Storybits AR',
			img: storybitsAR
		}
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'ARFoundation', 'Mapbox'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `A location-based AR story telling app.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `During my tenure at Breach VR in Trondheim, I contributed to StoryBits AR, an innovative location-based augmented reality storytelling application that brings narratives to life in the real world using Mapbox. Seamlessly blending the digital and physical realms, users embark on a captivating journey as they explore the story in the map. Utilizing AR and 2D puzzles, participants unlock hidden stories, each waiting to be discovered at specific locations.`
			},
			{
				id: 2,
				details:
                    `With StoryBits AR, users are not just passive observers but active participants in the narrative. As they navigate through the story in the map, they engage with interactive elements, solve puzzles, and uncover the rich tapestry of stories waiting to be revealed.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
