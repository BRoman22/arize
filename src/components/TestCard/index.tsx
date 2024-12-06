import styles from './index.module.scss';

interface TestCardProps {
  name: string;
}

const TestCard = ({ name }: TestCardProps) => {
  return <div className={styles.testCard}>{name}</div>;
};

export default TestCard;
