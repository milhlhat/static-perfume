import React from 'react';

function PageHeader(props) {
	const { title, subTitle } = props;

	return (
		<div
			className="page-header text-center"
			style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/page-header-bg.jpg)` }}
		>
			<div className="container">
				<h1 className="page-title">
					{title}
					<span>
						<i className="icon-sistrix" /> {subTitle}
					</span>
				</h1>
			</div>
		</div>
	);
}

export default React.memo(PageHeader);
