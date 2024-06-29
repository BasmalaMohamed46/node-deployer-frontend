import styles from './Login.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo/Logo';
import LoginButton from './LoginButton';
import LoginButtonType from '../../types/LoginButtonType';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const btns: LoginButtonType[] = [
		{ icon: faGitlab, text: 'Gitlab', provider: 'gitlab' },
		{ icon: faGithub, text: 'Github', provider: 'github' },
	];

  const navigate = useNavigate();

	const [redirect, setRedirect] = useState<boolean>(false);

	useEffect(() => {
		const accessToken: string | null = localStorage.getItem('accessToken');
		const provider: string | null = localStorage.getItem('provider');

		if (accessToken && provider) {
      setRedirect(true);
		}
	}, []);


  if (redirect) {
    navigate('/dashboard');
  }
	return (
		<div className={styles.container}>
			<div className={styles.loginContainer}>
				<h2>Sign In</h2>
				<div className={styles.btnContainer}>
					{btns.map((btn, index) => {
						return <LoginButton {...btn} key={index} />;
					})}
				</div>
			</div>
      <div className={styles.ill}>
        <img src="/images/login-illustration.svg" alt="" />
      </div>
		</div>
	);
}
