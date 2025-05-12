import styles from './styles.module.css';

export default function Item(props) {
  return (
    <div {...props} className={`${props.className} ${styles.wrapper}`}>
      <img src={props.iconSrc} alt={props.iconAlt} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.actionImage} alt={props.actionAlt} />
    </div>
  )
}