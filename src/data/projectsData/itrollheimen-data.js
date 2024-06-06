import itrollheimen1 from '../../images/projects/itrollheimen/itrollheimen-1.png';
import itrollheimen2 from '../../images/projects/itrollheimen/itrollheimen-2.png';
import itrollheimen3 from '../../images/projects/itrollheimen/itrollheimen-3.png';

export const itrollheimenData = {
	ProjectId: 'itrollheimen',
	ProjectHeader: {
		title: 'iTrollheimen AR',
		timeline: 'April 2022 - July 2022',
		tags: 'Unity, AR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'iTrollheimen',
			img: itrollheimen1
		},
        {
			id: 2,
			type: 'image',
			title: 'iTrollheimen',
			img: itrollheimen2
		},
        {
			id: 3,
			type: 'image',
			title: 'iTrollheimen',
			img: itrollheimen3
		},
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
		ObjectivesDetails: 'AR adventures with trolls as storytellers',
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `iTrollheimen is a whimsical location-based augmented reality (AR) experience, crafted during my tenure at BreachVR in Trondheim, to ignite the curiosity and imagination of children and young adults about nature and trolls in Trollheimen. Through the enchanting fusion of technology and storytelling, this innovative app invites users to embark on a GPS-position based adventure in nature, uncovering the mischief of trolls in Trollheimen.`
            },
			{
				id: 2,
				details:
                    `Developed in collaboration with the team at Home of the Trolls, iTrollheimen offers a narrated journey featuring beloved characters Boll and Bøllu. Using Unity Visual Script Graphs, I scripted captivating stories that unfold as users explore their surroundings. Additionally, Mapbox integration provides detailed maps for navigation, enhancing the immersive experience.`
            },
            {
				id: 3,
				details:
                    `Children are encouraged to explore their surroundings, discovering hidden secrets and learning from the trolls they encounter along the way. iTrollheimen offers a magical gateway to the wonders of nature, inspiring young adventurers to connect with their surroundings and embark on unforgettable journeys of discovery.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: [
            {
                id: 1,
                name: 'Project Website',
                url: 'https://breachvr.com/project/itrollheimen/'
            }
        ]
	}
}
