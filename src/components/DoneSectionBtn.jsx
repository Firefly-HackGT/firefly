import '../styles/DoneSectionBtn.scss';


export default function DoneSectionBtn(props) {
  return (
    <button className="done-session_btn" >
      <span className="done-session_text">
        {props.name || 'Done'}
      </span>
      <span className="done-session_icon">
      <ion-icon size="large" name={props.icon || "checkmark-done-outline"}></ion-icon>
      </span>
    </button>
  )
}