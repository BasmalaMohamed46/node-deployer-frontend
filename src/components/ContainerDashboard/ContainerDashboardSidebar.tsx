import { useState } from 'react';
import styles from './ContainerDashboardSidebar.module.css';
import { Link } from 'react-router-dom';

export default function ContainerDashboardSidebar() {
  type ContainerDashboardSidebarItemType = {
    routeLink: string;
    text: string;
    isActive: boolean;
  };

	// TODO: edit the sidebarContent
	const [sidebarContent, setSidebarContent] = useState<ContainerDashboardSidebarItemType[]>([
		{
			routeLink: 'login',
			text: 'Container',
			isActive: true,
		},
		{
			routeLink: 'logo',
			text: 'Logs',
			isActive: false,
		},
		{
			routeLink: '/events',
			text: 'Environment',
			isActive: false,
		},
		{
			routeLink: '/events',
			text: 'Events',
			isActive: false,
		},
		{
			routeLink: '/events',
			text: 'Events',
			isActive: false,
		},
		{
			routeLink: '/events',
			text: 'Events',
			isActive: false,
		},
		{
			routeLink: '/events',
			text: 'Events',
			isActive: false,
		},
	]);

	function handleActive(index: number): void {
		setSidebarContent((prev) => {
			return prev.map((item, i) => {
				return {
					...item,
					isActive: i === index,
				};
			});
		});
	}

	return (
		<div>
			<ul className={styles['sidebar-container']}>
				{sidebarContent.map((item, index) => {
					return (
						<Link to={item.routeLink} className={item.isActive ? styles.active : ''}  key={index}>
							<li onClick={() => handleActive(index)}>
								{item.text}
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}
