import vrHandKeypad1 from '../../images/projects/vr-hand-keypad/vr-hand-keypad-1.png';
import vrHandKeypad2 from '../../images/projects/vr-hand-keypad/vr-hand-keypad-2.png';
import vrHandKeypad3 from '../../images/projects/vr-hand-keypad/vr-hand-keypad-3.png';

export const vrHandKeypadData = {
	ProjectId: 'vr-hand-keypad',
	ProjectHeader: {
		title: 'VR Hand Keypad',
		timeline: 'Apr 2020 - May 2020',
		tags: 'Unity, VR'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'VR Hand Keypad',
			img: vrHandKeypad1
		},
        {
			id: 2,
			type: 'video',
			title: 'VR Hand Keypad',
			url: 'https://www.youtube.com/watch?v=tIxtW-0DnGU'
		},
        {
			id: 3,
			type: 'image',
			title: 'VR Hand Keypad',
			img: vrHandKeypad3
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Oculus Quest 1', 'Tensorflow Lite'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: `Revolutionizing virtual interaction with intuitive hand gestures.`,
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
                    `During my internship at Breach VR, I sought innovative approaches to enhance VR interaction systems, leading me to explore the potential of natural hand gestures for intuitive interaction.`
			},
			{
				id: 2,
				details:
                    `Inspired by the expressiveness of human hands, I conceived the idea of the VR Hand Keyboard, envisioning the palm surface between finger joints as buttons in a virtual number keypad.`
			},
            {
				id: 3,
				details:
                    `I meticulously identified key hand tracking data from the Oculus Hand Tracking system that could facilitate accurate gesture recognition for the VR Hand Keyboard and gathered the data for each key presses.`
			},
            {
				id: 4,
				details:
                    `Using the collected data, I trained a neural network model to detect keypad presses without false positives, ensuring robust performance in real-world scenarios.`
			},
            {
				id: 5,
				details:
                    `To integrate the trained model into a Unity app, I navigated the challenges of building a TensorFlow Lite C SDK for Unity, overcoming hurdles due to the lack of documentation. I converted the Tensorflow Lite saved model to Tensorflow Lite Flat Buffers using Tensorflow Lite Converter.`
			},
            {
				id: 6,
				details:
                    `With the trained model successfully integrated, I deployed the VR Hand Keyboard in the Unity app, enabling seamless real-time gesture recognition for intuitive interaction in virtual environments.`
			},
            {
				id: 7,
				details:
                    `The VR Hand Keyboard project offers a multifaceted solution with diverse applications. It enables users to input text seamlessly in virtual environments, enhances gaming experiences through intuitive gesture controls, fosters interactive learning tools for educational purposes, and provides accessible input methods for individuals with physical disabilities. Additionally, it facilitates collaboration and communication in virtual meetings or conferences, underscoring its versatility and potential impact across various domains.`
			},
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
