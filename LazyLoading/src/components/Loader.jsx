import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <section className={styles.container}>
      <div className={styles['lds-roller']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}
