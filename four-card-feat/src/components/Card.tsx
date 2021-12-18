import Image from "next/image";

import styles from './card.module.scss';

type CardProps = {
  color: 'cyan' | 'red' | 'orange' | 'blue';
  title: string;
  description: string;
  imageUrl: string;
}

export function Card({ color, title, description, imageUrl }: CardProps) {
  return (
    <div className={`${styles.container} ${styles[color]}`}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div>
        <Image className={styles.test} src={imageUrl} alt={`${title} icon`} width={64} height={64} />
      </div>
    </div>
  )
}