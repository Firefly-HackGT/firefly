import '../styles/StuSessionResults.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import Section from '../components/Section';
import DoneSectionBtn from '../components/DoneSectionBtn';


export default function StuSessionResults(props) {
  const { state } = useLocation();
  const { sections, s_name } = state;
  const navigate = useNavigate();

  props.setSID('');

  let htmlSections = [];
  let avgRating = 0;
  for (let i = 0; i < sections.length; i++) {
    htmlSections.push(<Section key={i + 1} index={i + 1} title={sections[i].name} desc={sections[i].description} rating={sections[i].rating}></Section>)
    avgRating += sections[i].rating;
  }
  avgRating = avgRating / sections.length;

  return (
    <div className="section-creation_wrapper">
      <div className="sections-input">
        <p>Average Student Confidence Rating for Session</p>
        <span id="rating-prof">
            <span id="s_1" className={1 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_2" className={2 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_3" className={3 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_4" className={4 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_5" className={5 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
          </span>
        <span id="avg-rating">{avgRating.toFixed(1)}</span>
        <span onClick={() => navigate('/dashboard', { state: {type: 'Student', name: s_name } })}>
          <DoneSectionBtn name="Dashboard" icon="ribbon-outline" />
        </span>
      </div>
      <div className="sections-list">
        {htmlSections}
      </div>
    </div>
  );
}