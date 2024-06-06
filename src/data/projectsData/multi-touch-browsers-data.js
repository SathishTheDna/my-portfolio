import multiTouchBrowsers from '../../images/projects/browser-in-unity/vuplex-brower.png';

export const multiTouchBrowsersData = {
	ProjectId: 'multi-touch-supported-browsers',
	ProjectHeader: {
		title: 'Multi-touch supported Browsers in Unity apps',
		timeline: 'Oct 2023 - Nov 2023',
		tags: 'Unity'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'Multi-touch supported browsers',
			img: multiTouchBrowsers
		}
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Mapbox', 'Vuplex WebViews'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `Enhanced multi-touch interactions in Vuplex WebViews.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `During my tenure at Mount Visual in Bergen, I spearheaded the development of a demo application to elevate user experience in Unity apps using Vuplex WebViews. With a primary focus on enabling seamless interaction with browser applications like Google Maps and Mapbox on multi-touch screens, I crafted custom touchscript gestures to prioritize touch inputs, ensuring glitch-free functionality.`
			},
			{
				id: 2,
				details:
                    `Furthermore, I seamlessly integrated these gestures with the Vuplex plugin, guaranteeing compatibility and smooth performance. This significant step laid a solid foundation for future developments at Mount Visual, promising cutting-edge user experiences with browsers in Unity applications.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
