import xrPresentations1 from '../../images/projects/xr-presentations/xr-presentations-1.png';
import xrPresentations2 from '../../images/projects/xr-presentations/xr-presentations-2.png';
import xrPresentations3 from '../../images/projects/xr-presentations/xr-presentations-3.png';
import xrPresentations4 from '../../images/projects/xr-presentations/xr-presentations-4.png';

export const xrPresentationsData = {
	ProjectId: 'xr-presentation-rooms',
	ProjectHeader: {
		title: 'XR Presentation Rooms',
		timeline: 'Jun 2020 - Dec 2021',
		tags: 'Unity, VR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'XR Presentation Rooms',
			img: xrPresentations1
		},
        {
			id: 2,
			type: 'video',
			title: 'XR Presentation Rooms',
			url: 'https://www.youtube.com/watch?v=ZlqbBMvFOp8?start=872'
		},
        {
			id: 3,
			type: 'image',
			title: 'XR Presentation Rooms',
			img: xrPresentations2
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Oculus Quest 1 and 2', 'HTC Vive', 'OpenVR', 'OpenXR', 'WebRTC', 'Photon Unity Networking'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `Multi-player, cross-platform XR app for virtual meetings and collaboration.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
            {
              id: 1,
              details: `XR Presentation Rooms is a multi-player, cross-platform XR meeting room application developed during my time at Breach VR. Designed to facilitate collaboration, engagement, and interaction within shared virtual environments, the app offers a variety of presentation rooms for scheduling meetings, with easy-to-enter meeting codes for inviting participants.`
            },
            {
              id: 2,
              details: `Users can upload presentation materials such as images, videos, documents, and 3D models via a web dashboard before the meeting. During meetings, participants can utilize an HD presentation screen, spawn 3D models, and display images in a 3D plane. Persistent objects like sticky notes, 3D models, and images remain available for ongoing discussions in future sessions.`
            },
            {
              id: 3,
              details: `The app supports streaming from the virtual environment to any social platform and is compatible with standalone VR headsets, PC VR headsets like Oculus and HTC Vive, and Windows PCs.`
            },
            {
              id: 4,
              details: `Additionally, browser users can join meetings with video and audio feeds, ensuring seamless interaction between virtual and browser participants. The app also features a fully customizable avatar system optimized for both aesthetics and performance.`
            },
            {
              id: 5,
              details: `I played a pivotal role in both the development and maintenance of the XR Presentation Rooms app while working with Breach VR, collaborating with a team and independently as needed. My contributions include:`
            },
            {
              id: 6,
              details: `1. Development and Maintenance: During the development phase, people at Breach VR were the testers. We had a company-wide weekly meeting for which I prepared the builds, gathered feedback after the meeting, fixed bugs, and prepared new builds with more features.`
            },
            {
              id: 7,
              details: `2. Avatar System: Researched third-party avatar systems and, for performance considerations, collaborated with a 3D artist to build a custom avatar system. This system includes diverse customization options, integrated lipsync with Oculus LipSync, and a gesture-based facial expression system (e.g., single thumbs-up for a happy expression and double thumbs-up for super happy).`
            },
            {
              id: 8,
              details: `3. Productivity Tools: Developed essential tools such as persistent 3D models, sticky notes, an HD presentation screen, and a cloud file browser with integrated presentation capabilities.`
            },
            {
              id: 9,
              details: `4. Streaming and Access: Enabled streaming and easy access to VR meetings from any device with web browsers using the Ant Media WebRTC server and Unity WebRTC package.`
            },
            {
              id: 10,
              details: `5. Performance Optimization: Maintained a consistent 72 FPS in BreachLab by utilizing Unity Profiler, Memory Profiler, Frame Debugger, RenderDoc, and various code optimization techniques.`
            },
            {
              id: 11,
              details: `XR Presentation Rooms exemplifies innovation in virtual collaboration, offering robust tools and seamless integration to enhance productivity and engagement in a virtual setting.`
            }
        ],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: [
            {
                id: 1,
                name: 'Project Website',
                url: 'https://breachvr.com/project/xr-presentations/'
            }
        ]
	}
}
