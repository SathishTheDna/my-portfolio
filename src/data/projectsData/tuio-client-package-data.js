import tuioClientPackage from '../../images/projects/tuio-client-package/tuio-client-package.png';

export const tuioClientPackageData = {
	ProjectId: 'tuio-client-package',
	ProjectHeader: {
		title: 'Unity Tuio Client',
		timeline: 'Mar 2023 - Dec 2023',
		tags: 'Unity'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'Tuio Client Package',
			img: tuioClientPackage
		}
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'TUIO', 'TouchScript', 'C++'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `TUIO Input processing package for multi-touch supported apps.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `Developed during my tenure at Mount Visual in Bergen, the Unity TUIO Touch Input Package is a versatile solution designed to process multi-touch screen input received via the TUIO protocol. Many large screen displays supporting multi-touch utilize the TUIO protocol to transmit touch data, which isn't inherently compatible with Unity UI and Input System. Thus, there arose a need to bridge this gap by processing the touch data and integrating it with the Unity Input System.`
			},
			{
				id: 2,
				details:
                    `This package seamlessly processes TUIO touch data and feeds it into the Unity InputSystem, enabling smooth integration with Unity applications. Additionally, it integrates with TouchScript to facilitate multi-touch UI inputs and gesture recognition, enhancing the versatility of the solution.`
			},
			{
				id: 3,
				details:
                    `This Unity TUIO Client Package serves as a comprehensive solution for any multi-touch application, offering compatibility and functionality across various platforms and environments.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
