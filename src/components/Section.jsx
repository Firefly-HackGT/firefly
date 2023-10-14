import '../styles/Section.scss';

export default function Section(props) {
  return (
    <div className="section-box">
      <span className="section_index">{props.index}</span>
      <p className="section_title">
          {props.title}
      </p>
      <p className="section_description">
          {props.desc}
      </p>
    </div>
  )
}