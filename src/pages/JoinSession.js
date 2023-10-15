import '../styles/JoinSession.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

let wb;

export default function JoinSession(props) {
  const { state } = useLocation();
  const { sID, name } = state;
  const [currS, setCurrS] = useState({
    curr: 0,
    name: '',
    desc: ''
  });
  const [num_sections, setNumSections] = useState(1);
  const [selStars, setSelStars] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    wb = new WebSocket(process.env.REACT_APP_BACKEND_URL);

    wb.onopen = () => {
      console.log('opened websocket')
      const event = {
        type: 'join_lecture',
        session: sID,
        name: name
      }
      wb.send(JSON.stringify(event));
    }
  
    wb.onmessage = (e) => {
      const res = JSON.parse(e.data);
      console.log(res)
      if (res.type === 'next_section') {
        setNumSections(res['length']);
        setSelStars(0);
        setCurrS({
          curr: res.curr,
          name: res.section_name,
          desc: res.description,
          lecture: res.lecture_name
        });
      }
      else if (res.type === 'final_results') {
        navigate('/stuSessionResults', { state: {sections: res.sections}});
        wb.close(1000);
      }
    }
  }, []);


  const starSelect = (num) => {
    setSelStars(num)
    if (wb) {
      wb.send(JSON.stringify({
        type: 'rating',
        rating: num
      }));
    }
    // console.log(selStars)
  }

  return (
    <div className="section-host_wrapper">
      <div className="section-info">
        <div id="progressbar"><div style={{width: `${(currS.curr + 1) / num_sections * 100}%`}}><span>{currS.curr + 1}</span></div></div>
        <span className="section-name">{currS.name}</span>
        <span className="section-desc">{currS.desc}</span>
      </div>
      <div className="section-rating">
        <div className="avg-rating-info">
          <p>Rate your understanding of this section</p>
          <span id="rating">
            <span id="s_1" className={1 <= selStars ? "selected" : ''}><ion-icon name="star" onClick={() => starSelect(1)} /></span>
            <span id="s_2" className={2 <= selStars ? "selected" : ''}><ion-icon name="star" onClick={() => starSelect(2)} /></span>
            <span id="s_3" className={3 <= selStars ? "selected" : ''}><ion-icon name="star" onClick={() => starSelect(3)} /></span>
            <span id="s_4" className={4 <= selStars ? "selected" : ''}><ion-icon name="star" onClick={() => starSelect(4)} /></span>
            <span id="s_5" className={5 <= selStars ? "selected" : ''}><ion-icon name="star" onClick={() => starSelect(5)} /></span>
          </span>
        </div>
      </div>
    </div>
  )
}