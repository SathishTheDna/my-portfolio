const selectOptions = [
	'All Projects', // Element 0 should always be All categories.
	'Unity VR Application',
	'Unity AR Application',
	'Unity Non-XR Application',
	'IoT Project',
];

const ProjectsFilter = ({ setSelectProject }) => {
	return (
		<select
			onChange={(e) => {
				let selectedCategory = e.target.value;
				setSelectProject(selectedCategory === selectOptions[0] ? '' : selectedCategory);
			}}
			className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
