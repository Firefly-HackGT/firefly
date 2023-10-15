import '../styles/Home.scss';
import RoleButton from '../components/RoleButton';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DoneSectionBtn from '../components/DoneSectionBtn';

export default function Home(props) {
    const [isStudent, setStudent] = useState(false);
    const [isProf, setProf] = useState(false);
    const [s_id, setSID] = useState('');
    const [s_name, setSName] = useState('');
    const [lecName, setLectureName] = useState('');
    const [p_name, setPName] = useState('');
    const navigate = useNavigate();

    const joinSession = () => {
        if (s_id.length !== 7 || s_name.length === 0) return;
        props.setSID(s_id);
        navigate('/joinSession', { state: {sID: s_id, name: s_name} });
    }
    const createSession = () => {
        if (lecName.length === 0 || p_name.length === 0) return;
        navigate('/createSession', { state: {lName: lecName, p_name: p_name} });
    }

    const login_screen = (
        <>
            <span className="pick_role--text">
            You are a...
            </span>
            <span onClick={() => setProf(true)}>
                <RoleButton role="Lecturer" />
            </span>
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
    const prof_start = (
        <>
            <label htmlFor="s_id">Lecture Name</label>
            <input id="s_id" type="text" placeholder="Computer Science" onInput={e => setLectureName(e.target.value)} style={{textAlign: 'center'}} />
            <label htmlFor="s_name">Your Name</label>
            <input id="s_name" type="text" placeholder="George Burdell" onInput={e => setPName(e.target.value)} style={{textAlign: 'center'}} />
            <span onClick={() => createSession()}>
                <DoneSectionBtn name="Start" icon="flash-outline"/>
            </span>
        </>
    );

    return (
        <div className="home_wrapper">
            <div className="welcome">
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0"><stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop><stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient)" d="M22,-23.9C29.5,-19.9,37.5,-13.9,40.4,-5.9C43.3,2.2,41.2,12.4,36.4,21.3C31.6,30.2,24.1,37.8,15,41.2C5.8,44.6,-4.9,43.7,-14.4,40C-24,36.4,-32.5,30,-36.8,21.6C-41.2,13.3,-41.4,3,-38.2,-5.2C-34.9,-13.4,-28.1,-19.4,-21.2,-23.5C-14.2,-27.7,-7.1,-29.8,0,-29.9C7.2,-29.9,14.4,-27.9,22,-23.9Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path></svg>
                <span>Welcome to Firefly</span>
            </div>
            <div className="login_container">
                <div className="login_box">
                    {!isProf && !isStudent ? login_screen : null}
                    {!isStudent ? null : student_start}
                    {!isProf ? null : prof_start}
                </div>
            </div>
        </div>
    )
}