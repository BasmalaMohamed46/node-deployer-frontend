import styles from './Login.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo/Logo';
import LoginButton from './LoginButton';
import LoginButtonType from '../../types/LoginButtonType';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Login() {
	const btns: LoginButtonType[] = [
		{ icon: faGitlab, text: 'Gitlab', provider: 'gitlab' },
		{ icon: faGithub, text: 'Github', provider: 'github' },
	];

	const [redirect, setRedirect] = useState<boolean>(false);

	useEffect(() => {
		const jwtToken: string | null = localStorage.getItem('jwt');
		const provider: string | null = localStorage.getItem('provider');

		if (jwtToken && provider) {
      setRedirect(true);
		}
	}, []);


  if (redirect) {
    return <Redirect to="/dashboard" />;
  }
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
