import magipaint1 from '../../images/projects/magipaint-ar/magipaint-1.png';
import magipaint2 from '../../images/projects/magipaint-ar/magipaint-2.png';
import magipaint3 from '../../images/projects/magipaint-ar/magipaint-3.png';

export const magipaintData = {
	ProjectId: 'magipaint-ar',
	ProjectHeader: {
		title: 'MagiPaint AR',
		timeline: 'Feb 2019 - May 2019',
		tags: 'Unity, AR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'MagiPaint AR',
			img: magipaint1
		},
        {
			id: 2,
			type: 'image',
			title: 'MagiPaint AR',
			img: magipaint2
		},
        {
			id: 3,
			type: 'image',
			title: 'MagiPaint AR',
			img: magipaint3
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Android Studio', 'Vuforia'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: 'Create, Save, and Share 3D drawings in AR.',
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `Developed while working as a part-time developer with Ludenso, this AR Painting App brings a new dimension to creative expression on Android mobile phones. Published on the Google Play Store, this app leverages Vuforia for an immersive augmented reality (AR) experience.`
            },
			{
				id: 2,
				details:
                    `The app features a main base marker from Ludenso, serving as the canvas for users to draw on. A cube marker with six faces acts as the interactive menu, with a virtual brush emerging from it to pinpoint exact locations in the real world where users want to draw.`
            },
            {
				id: 3,
				details:
                    `Key features:`
            },
            {
				id: 4,
				details:
                    `3D Drawing: Users draw in 3D space with respect to the main base marker. Lines and curves comprise datapoints, representing the position of each point in 3D space, connected through line renderers.`
            },
            {
				id: 5,
				details:
                    `Android Integration: Developed an Android plugin using Android Studio to save, load, and share AR drawings in a custom file format.`
            },
            {
				id: 6,
				details:
                    `Immersive Experience: Designed to be used with Ludenso’s MagiMask AR Headset, where users insert their mobile phones into the headset. The real world is viewed through the phone's camera feed with virtual content overlaid on top of the marker for an immersive AR painting experience.`
            },
            {
				id: 7,
				details:
                    `This app showcases the potential of AR technology in creative applications, providing users with a unique and engaging way to visualize their artistic ideas in the real world.`
            }
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: [
            {
                id: 1,
                name: 'Google PlayStore Link',
                url: 'https://play.google.com/store/apps/details?id=com.techydna.magipaintar'
            }
        ]
	}
}
