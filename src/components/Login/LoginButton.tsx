import axios from 'axios';
import LoginButtonType from '../../types/LoginButtonType';
import styles from './LoginButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LoginButton({ icon, text, provider }: LoginButtonType) {
	const classes = styles.loginButton;

	async function handleBtnClick() {
		const backendUrl = import.meta.env.VITE_BACK_END_URL;
		const { url } = (await axios.get(`${backendUrl}/auth/redirectUrl/${provider}`)).data;

		window.location.href = url;
	}
	return (
		<button className={classes} onClick={handleBtnClick}>
			<FontAwesomeIcon icon={icon} />
			{text}
		</button>
	);
}
