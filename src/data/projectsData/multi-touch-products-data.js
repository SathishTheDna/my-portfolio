import multiTouchProductShowcase1 from '../../images/projects/kongsberg-product-display/kongsberg-1.jpeg';
import multiTouchProductShowcase2 from '../../images/projects/kongsberg-product-display/kongsberg-2.jpg';

export const multiTouchProductShowcaseData = {
	ProjectId: 'multi-touch-product-showcase',
	ProjectHeader: {
		title: 'Multi-touch supported Product Display App',
		timeline: 'Feb 2023 - May 2023',
		tags: 'Unity'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'Multi-touch Product Showcase',
			img: multiTouchProductShowcase1
		},
        {
			id: 2,
			type: 'image',
			title: 'Multi-touch Product Showcase',
			img: multiTouchProductShowcase2
		}
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'TUIO', 'TouchScript'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `Experience interactive product showcases on a 55" multi-touch display with object recognition support.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `During my tenure at Mount Visual in Bergen, I developed a multi-touch supported app for Kongsberg Digital AS to showcase their products at conferences. Tailored specifically for a 55" multi-touch display with object recognition support, the app utilized a TUIO Client package and TouchScript to enable multi-touch Unity UI interactions.`
			},
			{
				id: 2,
				details:
                    `The display, known as the Scape Lab, is manufactured and sold by Interactive Scape in Germany. It offers a blend of flexibility and stability, making it ideal for various environments including laboratories, institutes, offices, and educational institutions. Its wheeled steel frame ensures easy mobility, while the 24/7 operation allows uninterrupted productivity. With multi-touch support and object recognition capabilities, the interactive experience is enhanced, allowing users to explore products with ease and interactivity.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
