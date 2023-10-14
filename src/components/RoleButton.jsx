import '../styles/RoleButton.scss';


export default function RoleButton(props) {
  return (
    <button className='role_button'>
      {props.role}
    </button>
  )
}