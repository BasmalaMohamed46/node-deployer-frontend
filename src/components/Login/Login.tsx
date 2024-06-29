import styles from './Login.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import LoginButton from './LoginButton';
import LoginButtonType from '../../types/LoginButtonType';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const btns: LoginButtonType[] = [
    { icon: faGitlab, text: 'Gitlab', provider: 'gitlab' },
    { icon: faGithub, text: 'Github', provider: 'github' },
  ];

  const navigate = useNavigate();


  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, []);


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
