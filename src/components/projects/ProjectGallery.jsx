import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.ProjectMedia.map((media) => {
				return (
					<div className="mb-10 sm:mb-0" key={media.id}>
						{
							media.type === 'video' ?
								<iframe
									width="100%"
									height="100%"
									src={`https://www.youtube.com/embed/${media.url.split('v=')[1]}`}
									title={media.title}
									allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
									allowFullScreen
								></iframe>
							:
							<img
								src={media.img}
								className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
								alt={media.title}
								key={media.id}
							/>
						}						
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
