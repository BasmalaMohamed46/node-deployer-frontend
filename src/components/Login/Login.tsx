import styles from './Login.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo/Logo';
import LoginButton from './LoginButton';
import LoginButtonType from '../../types/LoginButtonType';

export default function Login() {
	const btns: LoginButtonType[] = [
		{ icon: faGitlab, text: 'Gitlab', provider: 'gitlab' },
		{ icon: faGithub, text: 'Github', provider: 'github' },
	];
	return (
		<div className={styles.container}>
			<Logo className={styles.logo} />
			<div className={styles.loginContainer}>
				<h2>Sign In</h2>
				<div className={styles.btnContainer}>
					{btns.map((btn, index) => {
						return <LoginButton {...btn} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
}
