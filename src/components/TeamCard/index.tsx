import styles from './index.module.scss';
import { TTeamCard } from '../../constants';

interface TeamCardProps {
  cardData: TTeamCard;
}

export const TeamCard = ({ cardData }: TeamCardProps) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${cardData.photo})` }}
    >
      <div className={styles.card__content}>
        <h2 className={styles.name}>{cardData.name}</h2>
        <p className={styles.position}>{cardData.position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
