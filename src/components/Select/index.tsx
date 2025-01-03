import styles from './index.module.scss';
import { useState } from 'react';
import { TQuestions } from '../../constants';
import { Question, ArrowDown } from '../../components';
import { useResaize } from '../../hooks';
import { SCREEN_WIDTH } from '../../constants';
import Line from '../../assets/images/dashedLine.svg';

const mockData: TQuestions[] = [
  {
    id: 1,
    question: 'How does investing in your fund work?',
    answer:
      'Our fund invests in a specific portfolio company by purchasing its shares. Investors become participants in the fund by making capital contributions, which are used to acquire the company’s securities. All management decisions are made by the managing company. Investors receive their share of the profits when the fund exits its investments (e.g., when the company goes public).',
  },
  {
    id: 2,
    question: 'Who can invest in the fund?',
    answer:
      'Any individual who is not on sanctions lists can invest. To open an account, you need to provide a valid ID and proof of residence. We accept investors who meet the criteria for accredited investors as defined by U.S. regulations.',
  },
  {
    id: 3,
    question: 'Can I sell my share in the fund if I want to exit?',
    answer:
      'No, investments in our fund are illiquid, and transferring shares is only possible with the written consent of the manager. There is no public market for these shares, so you must be prepared for a long-term commitment without the option for a quick sale.',
  },
  {
    id: 4,
    question:
      'How does the subscription and capital contribution process work?',
    answer:
      'Upon subscribing, the investor must contribute 10% of the subscription amount within 5 business days of closing. The remaining 90% of the capital is due within one month after the capital call from the manager. All funds are held in a secure account until the transaction is finalized.',
  },
];

const Select = () => {
  const width = useResaize();

  const updatedData = mockData.map(item => ({
    ...item,
    isOpen: false,
  }));

  const [questions, setQuestions] = useState(updatedData);

  const handleClick = (id: number) => {
    setQuestions(
      questions.map(item =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  };

  return (
    <ul className={styles.list}>
      {questions.map(item => (
        <li key={item.id} onClick={() => handleClick(item.id)}>
          <div
            className={
              item.isOpen ? `${styles.div} ${styles.div_active}` : styles.div
            }
          >
            {width > SCREEN_WIDTH.M && (
              <Question nameClass={styles.question__icon} />
            )}
            <span className={styles.question}>{item.question}</span>
            <ArrowDown
              nameClass={
                item.isOpen
                  ? `${styles.arrow__icon} ${styles.rotate}`
                  : styles.arrow__icon
              }
            />
          </div>
          {item.isOpen && <p className={styles.answer}>{item.answer}</p>}
          <img src={Line} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default Select;
