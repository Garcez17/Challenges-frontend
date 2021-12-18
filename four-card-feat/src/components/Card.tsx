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
      <h2>{title}</h2>
      <p>{description}</p>

      <div>
        <Image 
          src={imageUrl} 
          alt={`${title} icon`} 
          width={64} 
          height={64}
          loading="lazy"
        />
      </div>
    </div>
  )
}