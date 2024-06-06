import vrDevToolkit from '../../images/projects/vr-dev-toolkit/vr-dev-toolkit.png';

export const vrDevToolkitData = {
	ProjectId: 'vr-dev-toolkit',
	ProjectHeader: {
		title: 'VR Development Toolkit',
		timeline: 'May 2020 - Dec 2020',
		tags: 'Unity, VR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'VR Development Toolkit',
			img: vrDevToolkit
		}
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Oculus Quest 1, HTC Vive, OpenVR'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `Contributed to Breach VR's multiplayer cross-platform application development toolkit.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `During my tenure at Breach VR, I significantly contributed to the enhancement and expansion of their VR Development Toolkit, a versatile multiplayer cross-platform solution catering to Oculus headsets, HTC Vive, and Windows machines.`
			},
			{
				id: 2,
				details:
                    `Through refactoring and feature additions across different subsystems, the toolkit's functionality and usability were notably improved, enabling its seamless integration into various projects at Breach VR, including XR Presentation Rooms and VR Fire Training simulations.`
			}
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
