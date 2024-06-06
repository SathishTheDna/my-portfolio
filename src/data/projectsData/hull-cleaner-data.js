import hullCleaner1 from '../../images/projects/hull-cleaner/hull-cleaner-1.png';
import hullCleaner2 from '../../images/projects/hull-cleaner/hull-cleaner-2.png';
import hullCleaner3 from '../../images/projects/hull-cleaner/hull-cleaner-3.png';

export const hullCleanerData = {
	ProjectId: 'hull-cleaning-robot-simulator',
	ProjectHeader: {
		title: 'Ship Hull Cleaning Robot Simulator',
		timeline: 'July 2023 - Aug 2023',
		tags: 'Unity'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'Hull Cleaner',
			img: hullCleaner1
		}
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Cinemachine'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: 'Simulator to showcase the underwater cleaning efficiency of a hull cleaning robot',
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `During my tenure at Mount Visual in Bergen, the Ship Hull Cleaning Robot Simulator was created for EcoSubsea AS. Independently crafted, this Mac OS application showcases the underwater effectiveness of the cleaning robot.`
            },
			{
				id: 2,
				details:
                    `Featuring various ships, the simulator allows users to test the robot's efficiency in cleaning different hulls. The Inverse Kinematics (IK) for the robot ensures realistic movements during cleaning operations.`
            },
            {
				id: 3,
				details:
                    `Visualizing the cleaning process, the simulator utilizes the Paint in 3D package sourced from the Unity Asset Store to depict the effect of the robot cleaning the hull.`
            }
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
