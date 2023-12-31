import '../styles/HostSession.scss';
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

let wb;

export default function HostSession(props) {
  const { state } = useLocation();
  const { sections } = state;
  const [currS, setCurrS] = useState(0);
  const [rating, setRating] = useState(0.0);
  const [numStudents, setNumStudents] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    wb = new WebSocket(process.env.REACT_APP_BACKEND_URL);

    wb.onopen = () => {
      console.log('opened websocket')
      const event = {
        type: 'init_lecture',
        sections: sections,
        lecture_name: state.lecture_name,
        prof_name: state.prof_name
      }
      wb.send(JSON.stringify(event));
    }
  
    wb.onmessage = (e) => {
      const res = JSON.parse(e.data);
      if (res.type === 'get_session_key') props.setSID(res.session_key);
      else if (res.type === 'new_overall_rating') {
        setRating(res.overall_rating);
        setNumStudents(res.num_students);
      }
      else if (res.type === 'final_results') {
        // console.log(res)
        navigate('/profSessionResults', { state: {sections: res.sections, p_name: state.prof_name} });
        wb.close(1000);
      }
    }
  }, []);

  const nextSesh = () => {
    // console.log('next')
    if (!wb) return;
    if (currS + 1 < sections.length) setCurrS(currS + 1);
    wb.send(JSON.stringify({type: 'next'}));
  }
  const prevSesh = () => {
    // console.log('next')
    if (!wb) return;
    if (currS - 1 < 0) return;
    setCurrS(currS - 1);
    wb.send(JSON.stringify({type: 'back'}));
  }

  return (
    <div className="section-host_wrapper">
      <div className="section-info">
        <div id="progressbar"><div style={{width: `${(currS + 1) / sections.length * 100}%`}}><span>{currS + 1}</span></div></div>
        <span className="section-name">{sections[currS].name}</span>
        <span className="section-desc">{sections[currS].description}</span>
        <button id="prev-section-btn" onClick={() => prevSesh()}>
          <ion-icon name="chevron-back-circle-outline" />
        </button>
      </div>
      <div className="section-rating">
        <div className="student-info">
          <p>Total Students</p>
          <span id="num-students">{numStudents}</span>
        </div>
        <div className="avg-rating-info">
          <p>Average Confidence Rating</p>
          <span id="rating-prof">
            <span id="s_1" className={1 <= rating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_2" className={2 <= rating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_3" className={3 <= rating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_4" className={4 <= rating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_5" className={5 <= rating ? "selected" : ''}><ion-icon name="star" /></span>
          </span>
          <span id="avg-rating">{rating.toFixed(1)}</span>
        </div>
      </div>
      <button id="next-section-btn" onClick={() => nextSesh()}>
        <ion-icon name="chevron-forward-circle-outline" />
      </button>
    </div>
  );
}