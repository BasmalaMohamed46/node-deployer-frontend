import { NavLink } from "react-router-dom";
import styles from './Logo.module.css';

export default function Logo({ className }: { className: string }) {
  const classes: string = `${className} ${styles.logo} d-flex align-items-center me-auto me-xl-0 nav-link`;
  return (
    <NavLink to="/" className={classes}>
      <h1 className="sitename">Render </h1>
      <span>Clone</span>
    </NavLink>
  );
}
