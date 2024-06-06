import arPongalGreetings1 from '../../images/projects/ar-pongal-greetings/pongal-1.png';
import arPongalGreetings2 from '../../images/projects/ar-pongal-greetings/pongal-2.png';
import arPongalGreetings3 from '../../images/projects/ar-pongal-greetings/pongal-3.png';
import arPongalGreetings4 from '../../images/projects/ar-pongal-greetings/pongal-4.png';
import arPongalGreetings5 from '../../images/projects/ar-pongal-greetings/pongal-5.png';

export const arPongalGreetingsData = {
	ProjectId: 'pongal-greetings',
	ProjectHeader: {
		title: 'AR Pongal Greetings',
		timeline: 'Dec 2017 - Jan 2018',
		tags: 'Unity, AR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'AR Pongal Greetings',
			img: arPongalGreetings1
		},
        {
			id: 2,
			type: 'video',
			title: 'AR Pongal Greetings',
			url: 'https://www.youtube.com/watch?v=2tIktbYM9Nc'
		},
        {
			id: 3,
			type: 'image',
			title: 'AR Pongal Greetings',
			img: arPongalGreetings3
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Vuforia'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: 'Immersive AR Greeting Card for a renowned festival in South India.',
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Developed this app independently to showcase the cultural richness of Pongal, a renowned festival in South India, and pay tribute to the resilience of Jallikattu protesters through augmented reality (AR). This AR application offers a marker-based experience where users can scan any Indian currency note to reveal a vibrant greeting card.',
			},
			{
				id: 2,
				details:
					'Utilizing free assets sourced online, I crafted this beautiful app, deploying it on the Google Play Store in 2018. The primary aim was to raise awareness about Augmented Reality during a time when many people were unfamiliar with its capabilities and potential.',
            }
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
