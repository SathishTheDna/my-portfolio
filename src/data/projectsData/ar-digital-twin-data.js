import arDigitalTwin1 from '../../images/projects/ar-digital-twin/ar-digital-twin-1.png';
import arDigitalTwin2 from '../../images/projects/ar-digital-twin/ar-digital-twin-2.png';
import arDigitalTwin3 from '../../images/projects/ar-digital-twin/ar-digital-twin-3.png';

export const arDigitalTwinData = {
	ProjectId: 'ar-digital-twin',
	ProjectHeader: {
		title: 'AR Digital Twin',
		timeline: 'Sep 2019 - Nov 2019',
		tags: 'Unity, AR, IoT'
	},
	ProjectMedia: [
		{
			id: 1,
			type: 'image',
			title: 'AR Digital Twin',
			img: arDigitalTwin3
		},
		{
			id: 2,
			type: 'video',
			title: 'AR Digital Twin',
			url: 'https://www.youtube.com/watch?v=L2m9lddwmRQ'
		},
        {
			id: 3,
			type: 'image',
			title: 'AR Digital Twin',
			img: arDigitalTwin2
		}
	],
	ProjectInfo: {
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
                    'Unity', 'ARCore', 'Firebase', 'NodeMCU', 'Arduino IDE'
				],
			},
		],
		ObjectivesHeading: 'Overview',
		ObjectivesDetails: 'Utilized IoT and AR to create a digital twin, demonstrating the power of AR in visualizing real-time industrial data.',
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
					'During our IoT course at Amrita University, Coimbatore, India, our team embarked on an innovative project that merged IoT technology with Augmented Reality (AR) to visualize real-time data from industrial equipment. Our goal was to showcase the concept of Digital Twin in AR, providing valuable insights into equipment performance and maintenance.',
			},
			{
				id: 2,
				details:
					'We employed a NodeMCU to interface with various sensors, including an LM35 analog temperature sensor, a DHT11 digital temperature and humidity sensor, and an HC-SR04 ultrasonic sensor. These sensors simulated data typically received from industrial equipment, enabling us to create a comprehensive visualization of the operational environment.'
            },
			{
				id: 3,
				details:
					'By collecting and transmitting data from these sensors to a Firebase Real-time database, we laid the groundwork for our AR visualization. I then developed a Unity app to receive and present this data in AR, leveraging free 3D assets to craft a visually pleasing interface.'
            },
			{
				id: 4,
				details:
					'This project illuminated the potential of Digital Twin and AR visualization in optimizing industrial operations. Moving forward, we planned to enhance the project by integrating predictive maintenance algorithms and remote monitoring capabilities, further solidifying its value proposition in industrial contexts.'
            },
		],
		ExternalLinksHeading: 'Useful Links',
		ExternalLinks: []
	}
}
