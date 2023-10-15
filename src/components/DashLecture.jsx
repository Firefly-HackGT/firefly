import '../styles/DashLecture.scss';
import Section from './Section';


export default function DashLecture(props) {
  // console.log(props)
  let sections = [];
  for (let i = 0; i < props.lecture.sections.length; i++) {
    sections.push(<Section key={i} index={i + 1} title={props.lecture.sections[i].name} desc={props.lecture.sections[i].description} rating={props.lecture.sections[i].rating} />);
  }

  return (
    <div className="dash-lecture_wrapper">
      <h1>{props.lecture.name}</h1>
      <h2>Avg. Rating: {props.lecture.avg_rating}</h2>
      <div className="dash-sections-list">
        {sections}
      </div>
    </div>
  )
}