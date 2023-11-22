import styles from './Counter.module.css'

function Counter({ counter }) {
  return <div className={`${styles.counter} ${counter < 0 ? styles.counterMinus : ''}`}>{counter}</div>
}

export default Counter
