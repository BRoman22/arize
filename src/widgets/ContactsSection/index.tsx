import styles from './index.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../contexts';
import { Button } from '../../components';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  lastname: string;
  phone: string;
  comment: string;
};

const ContactsSection = () => {
  const {
    title,
    inputsPlaceholder,
    inputSubtitle,
    errorText,
    button,
    privacyText,
  } = useContext(LangContext).contacts;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <section className={styles.contacts}>
      <h1 className={styles.title}>
        <em>{title.slice(0, 1)}</em>
        {title.slice(1)}
      </h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={`${
            errors.name
              ? `${styles.label}  ${styles.label__error}`
              : styles.label
          }`}
        >
          <input
            placeholder={inputsPlaceholder[0]}
            autoComplete="off"
            {...register('name', { required: true })}
          />
          {errors.name && <span>{errorText}</span>}
        </label>
        <label
          className={`${
            errors.lastname
              ? `${styles.label}  ${styles.label__error}`
              : styles.label
          }`}
        >
          <input
            placeholder={inputsPlaceholder[1]}
            autoComplete="off"
            {...register('lastname', { required: true })}
          />
          {errors.lastname && <span>{errorText}</span>}
        </label>
        <label
          className={`${
            errors.phone
              ? `${styles.label}  ${styles.label__error}`
              : styles.label
          }`}
        >
          <input
            placeholder={inputsPlaceholder[2]}
            autoComplete="off"
            {...register('phone', { required: true })}
          />
          {errors.phone && <span>{errorText}</span>}
        </label>
        <label className={styles.label}>
          <input
            placeholder={inputsPlaceholder[3]}
            autoComplete="off"
            {...register('comment')}
          />
        </label>
        <p>{inputSubtitle}</p>
        <Button title={button} style={{ width: '100%' }} type="submit" />
      </form>
      <div className={styles.wrapper}>
        <p>{privacyText[0]}</p>
        <a>{privacyText[1]}</a>
      </div>
    </section>
  );
};

export default ContactsSection;
