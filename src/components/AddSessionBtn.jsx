import '../styles/AddSessionBtn.scss';


export default function AddSessionBtn(props) {
  return (
    <button className="add-session_btn" onClick={() => props.click({title: "wow", desc: "somthing"})}>
      <span className="add-session_text">
        Add Item
      </span>
      <span className="add-session_icon">
        <ion-icon size="large" name="add-circle-outline"></ion-icon>
      </span>
    </button>
  )
}