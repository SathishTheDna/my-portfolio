import magistack1 from '../../images/projects/magistack-ar/stack-1.png';
import magistack2 from '../../images/projects/magistack-ar/stack-2.png';
import magistack3 from '../../images/projects/magistack-ar/stack-3.png';
import magistack4 from '../../images/projects/magistack-ar/stack-4.png';
import magistack5 from '../../images/projects/magistack-ar/stack-5.png';
import magistack6 from '../../images/projects/magistack-ar/stack-6.png';

export const magistackData = {
	ProjectId: 'magistack-ar',
	ProjectHeader: {
		title: 'MagiStack AR',
		timeline: 'Feb 2018 - Jan 2019',
		tags: 'Unity, AR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'MagiStack AR',
			img: magistack1
		},
        {
			id: 2,
			type: 'image',
			title: 'MagiStack AR',
			img: magistack3
		},
        {
			id: 3,
			type: 'image',
			title: 'MagiStack AR',
			img: magistack4
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'ARFoundation', 'ARCore', 'Vuforia', 'Manomotion Hand Tracking Technology'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: 'AR adaptation of the popular Stack game.',
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `Embark on an adventure with my AR Stack game, offering a fresh take on the classic Stack game. Stack blocks as high as possible in augmented reality, immersing yourself in simple yet stunning graphics designed for an unforgettable gaming experience. Compete against friends and yourself for the highest score, all within the realm of AR.`    
            },
			{
				id: 2,
				details:
                    `Choose from three captivating themes - Snow, Desert, or Water landscapes - each providing a unique backdrop for your stacking journey. Explore diverse stack block textures, while experiencing tactile haptic feedback and delightful sounds, enhancing the game's immersive nature.`
            },
            {
				id: 3,
				details:
                    `Initially released as version 1, the game utilized Ludenso's proprietary markers with Vuforia, offering a marker-based experience. Later, I upgraded the game with ARCore for markerless tracking, enabling users to place the game on any surface, further enhancing the immersive experience.`
            },
            {
				id: 4,
				details:
                    `In version 2, I collaborated with Manomotion to integrate hand gesture recognition capabilities, elevating the interactivity of the game. Manomotion used this app to showcase their mobile hand tracking SDK’s capabilities in AWE and CES 2019.`
            },
            {
				id: 5,
				details:
                    `Praised for its addictive gameplay, diverse themes, and immersive AR experience, the app garnered overwhelmingly positive reviews, solidifying its place as a must-try AR game.`
            }
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: [
            {
                id: 1,
                name: 'Google PlayStore Link',
                url: 'https://play.google.com/store/apps/details?id=com.techydna.magistack'
            },
            {
                id: 2,
                name: 'AWE 2019 Showcase',
                url: 'https://www.youtube.com/watch?v=dKYBUwtnUVY'
            },
            {
                id: 3,
                name: 'CES 2019 Showcase',
                url: 'https://www.youtube.com/watch?v=xZeq9I6Cw_k'
            },
        ]
	}
}
