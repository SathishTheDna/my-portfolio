import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import { projectsData as projectsDataJson } from '../data/projectsDatas';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const {projectId} = useParams();
	const navigate = useNavigate();
	const [singleProjectData, setSingleProjectData] = useState(projectsDataJson[0]);

	useEffect(() => {
		const projectData = projectsDataJson.find(
			project => project.ProjectId.toString() === projectId
		);

		setSingleProjectData(projectData);
	}, [projectId]);

	if (!singleProjectData) {
		navigate('/');
		return null;
	}

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
