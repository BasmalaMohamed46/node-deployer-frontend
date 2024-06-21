import styles from './LoginButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

type buttonProps = {
	icon: IconDefinition;
	text: string;
	link: string;
};

export default function LoginButton({ icon, text, link }: buttonProps) {
	const classes = styles.loginButton;
	return (
		<a href={link} className={classes}>
			<FontAwesomeIcon icon={icon} />
			{text}
		</a>
	);
}
