import Link from 'next/link';
import styles from './NavButton.module.css';

interface NavButtonProps {
  label: string;
  href: string;
  disabled?: boolean;
}

export default function NavButton({ label, href, disabled = false }: NavButtonProps) {
  if (disabled) {
    return (
      <button className={styles.navButton} disabled>
        {label}
      </button>
    );
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <a className={styles.navButton}>
        {label}
      </a>
    </Link>
  );
}