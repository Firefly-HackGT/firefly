import '../styles/Home.scss';
import RoleButton from '../components/RoleButton';
import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <div className="home_wrapper">
            <div className="welcome">
                Welcome to Firefly
            </div>
            <div className="login_container">
                <div className="login_box">
                    <span class="pick_role--text">
                        You are a...
                    </span>
                    <Link to='/createSession' style={{ textDecoration: 'none' }}>
                        <RoleButton role="Lecturer" />
                    </Link>
                    <RoleButton role="Student" />
                </div>
            </div>
        </div>
    )
}