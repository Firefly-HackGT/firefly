import '../styles/Section.scss';

export default function Section(props) {
  const ratingColor = props.rating && props.rating < 3 ? {color: 'red', fontWeight: 'bolder'} : {};
  // console.log(props.rating)

  return (
    <div className="section-box" >
      <span className="section_index">{props.index}</span>
      <p className="section_title">
          {props.title}
      </p>
      <p className="section_description">
          {props.desc}
      </p>
      <span style={ratingColor}>
        {props.rating ? 'Avg. Rating: ' : ''}
        {props.rating ? <span className="section_rating" style={ratingColor}>{props.rating}</span> : ''}
      </span>
    </div>
  );
}