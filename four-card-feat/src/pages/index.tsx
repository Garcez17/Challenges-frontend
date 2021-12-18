import type { NextPage } from 'next';
import { Card } from '../components/Card';

import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <span>Realible, efficient delivery</span> <br />
          Powered by Technology
        </h1>

        <p>
          Our Artificial intelligence powered tools use millions of project
          data points to ensure that your project is successful
        </p>
      </header>
      <main className={styles.main}>
        <Card 
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          imageUrl="/icon-supervisor.svg" 
          color="cyan"
        />

        <Card 
          title="Team Builder"
          description="Scans our talent network to create the optimal for your project"
          imageUrl="/icon-team-builder.svg" 
          color="red" 
        />

        <Card 
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          imageUrl="/icon-karma.svg"
          color="orange"
        />
        
        <Card
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          imageUrl="/icon-calculator.svg"
          color="blue" 
        />
      </main>
    </div>
  )
}

export default Home
