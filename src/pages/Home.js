import '../styles/Home.scss';
import RoleButton from '../components/RoleButton';

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
                    <RoleButton role="Lecturer" />
                    <RoleButton role="Student" />
                </div>
            </div>
        </div>
    )
}