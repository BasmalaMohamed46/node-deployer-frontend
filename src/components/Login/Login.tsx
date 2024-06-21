import styles from './Login.module.css';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo/Logo';
import LoginButton from './LoginButton';

export default function Login() {
	type btnType = {
		icon: IconDefinition;
		text: string;
		link: string;
	};

	const btns: btnType[] = [
		{ icon: faGithub, text: 'Github', link: 'https://github.com/' },
		{ icon: faGitlab, text: 'Gitlab', link: 'https://gitlab.com/' },
	];
	return (
		<div className={styles.container}>
			<Logo className={styles.logo} />
			<div className={styles.loginContainer}>
				<h2>Sign In</h2>
				<div className={styles.btnContainer}>
					{btns.map((btn, index) => {
						return <LoginButton icon={btn.icon} text={btn.text} link={btn.link} key={index} />;
					})}
				</div>
			</div>
		</div>
		// <LoginButton icon={faGithub} text="Github" link="https://github.com/"/>
	);
}
