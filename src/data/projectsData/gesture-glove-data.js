import gestureGlove1 from '../../images/projects/glove-gesture-recognition/glove-gesture-1.png';
import gestureGlove2 from '../../images/projects/glove-gesture-recognition/glove-gesture-2.png';
import gestureGlove3 from '../../images/projects/glove-gesture-recognition/glove-gesture-3.png';

export const gestureGloveData = {
	ProjectId: 'gesture-recognition-glove',
	ProjectHeader: {
		title: 'Real-time Numerical Gesture Recognition using MPU 9250 motion sensor',
		timeline: 'Aug 2019 - May 2020',
		tags: 'Unity, IoT'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'Gesture Glove',
			img: gestureGlove2
		},
        {
			id: 2,
			type: 'image',
			title: 'Gesture Glove',
			img: gestureGlove1
		},
        {
			id: 3,
			type: 'image',
			title: 'Gesture Glove',
			img: gestureGlove3
		},
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'Tensorflow Lite', 'NodeMCU', 'MPU 9250 Motion Sensor', 'Arduino IDE'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: 'Research Publication proposing a low-cost Data Glove for Gesture Recognition',
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
					`Collaborated with a team of three students at Amrita University on real-time numerical gesture recognition project. In the realm of Human-Computer Interaction research, hand gesture recognition plays a pivotal role in advancing interactive systems. However, existing approaches predominantly rely on expensive camera-based or 3D depth sensors, which are sensitive to environmental changes. To address these limitations, our project proposes a cost-effective data glove for gesture recognition with a main focus for numerical gesture recognition.`
            },
			{
				id: 2,
				details:
					`We conducted a extensive research on existing solutions and evaluating the performance of different machine learning and neural network models. After thorough experimentation and analysis, I spearheaded the selection and training of a neural network model optimized for numerical gesture recognition. This involved fine-tuning the model parameters and validating its accuracy and efficiency. Subsequently, I converted the trained model to tensorflow lite flat buffers for seamless integration with our Unity application, leveraging the Tensorflow Lite C SDK for deployment. Our aim was to ensure that the system could perform real-time inference with minimal latency, a critical requirement for interactive applications.`,
            },
            {
				id: 3,
				details:
					`To showcase the practical application of our solution, we developed a small car-lane changing game within Unity. This game served as a real-time demonstration of the glove's responsiveness and accuracy in recognizing numerical gestures, providing tangible evidence of its effectiveness. Additionally, we presented our findings and insights in a conference paper at the International Conference on Intelligent Computing, Information, and Control Systems. This dissemination of our research contributed to the broader academic and research community, highlighting the potential of our approach in advancing human-computer interaction technologies.`
            }
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: [
            {
                id: 1,
                name: 'Research Publication',
                url: 'https://link.springer.com/chapter/10.1007/978-981-15-8443-5_4#:~:text=In%20this%20paper%2C%20an%20effective,hand%2C%20to%20predict%20numerical%20gestures.'
            },
            {
                id: 1,
                name: 'Certificate and Documents',
                url: 'https://drive.google.com/drive/folders/1HVtepCSkabNUFUkSdx7smFGBIIoIpSMe?usp=sharing'
            },
        ]
	}
}
