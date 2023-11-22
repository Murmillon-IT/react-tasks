import styles from './CounterButtons.module.css'

function CounterButtons({ counter, minusCounter, plusCounter, resetCounter }) {
  return (
    <div className={styles.counterButtons}>
      <div className={styles.counterButtonsPlusMinus}>
        <button className={`${styles.counterButton} ${styles.counterButtonMinus}`} onClick={minusCounter}>
          - Minus
        </button>
        <button className={`${styles.counterButton} ${styles.counterButtonPlus}`} onClick={plusCounter}>
          Plus +
        </button>
      </div>
      {!!counter && (
        <div>
          <button className={`${styles.counterButton} ${styles.counterButtonReset}`} onClick={resetCounter}>
            Reset
          </button>
        </div>
      )}
    </div>
  )
}

export default CounterButtons
