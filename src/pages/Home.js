import '../styles/Home.scss';
import RoleButton from '../components/RoleButton';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DoneSectionBtn from '../components/DoneSectionBtn';

export default function Home(props) {
    const [isStudent, setStudent] = useState(false);
    const [s_id, setSID] = useState('');
    const [s_name, setSName] = useState('');
    const navigate = useNavigate();

    const joinSession = () => {
        if (s_id.length !== 7 || s_name.length === 0) return;
        props.setSID(s_id);
        navigate('/joinSession', { state: {sID: s_id, name: s_name} });
    }

    const login_screen = (
        <>
            <span className="pick_role--text">
            You are a...
            </span>
            <Link to='/createSession' style={{ textDecoration: 'none' }}>
                <RoleButton role="Lecturer" />
            </Link>
            <span onClick={() => setStudent(true)}><RoleButton role="Student" /></span>
        </>
    );
    const student_start = (
        <>
            <label htmlFor="s_id">Section ID</label>
            <input id="s_id" type="text" placeholder="id" onInput={e => setSID(e.target.value)} style={{textAlign: 'center'}} />
            <label htmlFor="s_name">Your Name</label>
            <input id="s_name" type="text" placeholder="George Burdell" onInput={e => setSName(e.target.value)} style={{textAlign: 'center'}} />
            <span onClick={() => joinSession()}>
                <DoneSectionBtn name="Join" icon="flash-outline"/>
            </span>
        </>
    );

    return (
        <div className="home_wrapper">
            <div className="welcome">
                Welcome to Firefly
            </div>
            <div className="login_container">
                <div className="login_box">
                    {!isStudent ? login_screen : student_start}
                </div>
            </div>
        </div>
    )
}