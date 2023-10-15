import '../styles/ProfSessionResults.scss';
import { useLocation } from 'react-router-dom';
import Section from '../components/Section';


export default function ProfSessionResults(props) {
  const { state } = useLocation();
  const { sections } = state;

  let htmlSections = [];
  let avgRating = 0;
  for (let i = 0; i < sections.length; i++) {
    htmlSections.push(<Section key={i} index={i + 1} title={sections[i].name} desc={sections[i].description} rating={sections[i].rating}></Section>)
    avgRating += sections[i].rating;
  }
  avgRating = avgRating / sections.length;

  return (
    <div className="section-creation_wrapper">
      <div className="sections-input">
        <p>Your Average Confidence Rating for this Session</p>
        <span id="rating-prof">
            <span id="s_1" className={1 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_2" className={2 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_3" className={3 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_4" className={4 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
            <span id="s_5" className={5 <= avgRating ? "selected" : ''}><ion-icon name="star" /></span>
          </span>
        <span id="avg-rating">{avgRating.toFixed(1)}</span>
      </div>
      <div className="sections-list">
        {htmlSections}
      </div>
    </div>
  );
}