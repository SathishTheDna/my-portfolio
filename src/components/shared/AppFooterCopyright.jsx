function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				Copyright &copy; {new Date().getFullYear()}
				{/* <a
					href="https://github.com/SathishTheDna/my-portfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Portfolio 
				</a>
				&nbsp;of */}
				<a
					href="https://www.linkedin.com/in/sathish-raja-bommannan/"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Sathish Raja Bommannan.
				</a>
				<br/>
				<span className="text-sm">
					<i> Last Updated On:&nbsp;&nbsp;</i><b>11 Jun 2024.</b>
				</span>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
