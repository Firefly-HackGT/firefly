import '../styles/Dashboard.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import DashLecture from '../components/DashLecture';

let wb;

export default function Dashboard() {
  const { state } = useLocation();
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    wb = new WebSocket(process.env.REACT_APP_BACKEND_URL);

    wb.onopen = () => {
      console.log('opened websocket for dashboard')
      const event = {
        type: 'get_hist_data',
        person_type: state.type,
        name: state.name
      }
      wb.send(JSON.stringify(event));
    }
  
    wb.onmessage = (e) => {
      const res = JSON.parse(e.data);
      if (res.type === 'hist_data') {
        setLectures(res.lectures);
        wb.close(1000);
      }
    }
  }, []);

  let lList = [];
  for (let i = lectures.length - 1; i >= 0; i--) {
    lList.push(<DashLecture key={i} lecture={lectures[i]} />);
  }

  return (
    <div className="dashboard-wrapper">
      {lList}
    </div>
  )
}