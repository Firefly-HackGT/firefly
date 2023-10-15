import '../styles/SessionCreation.scss';
import Section from '../components/Section';
import AddSessionBtn from '../components/AddSessionBtn';
import DoneSectionBtn from '../components/DoneSectionBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SessionCreation(props) {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [sections, setSections] = useState([]);

  const addSection = () => {
    if (title.length === 0 || description.length === 0) return;
    setSections([...sections, {key: sections.length + 1, name: title, description: description}]);
  }

  const navigate = useNavigate();
  const submitSections = () => {
    if (sections.length === 0) return;
    navigate('/hostSession', { state: {sections: sections}} );
  }

  return (
    <div className="section-creation_wrapper">
      <div className="sections-input">
        <label htmlFor="title">Section Name</label>
        <input id="title" type="text" placeholder="Linear equations" onInput={e => setTitle(e.target.value)} />
        <label htmlFor="desc">Section Description</label>
        <input id="desc" type="text" placeholder="Learn about y=mx + b" onInput={e => setDesc(e.target.value)} />
        <AddSessionBtn click={addSection} />
        <span onClick={() => submitSections()} ><DoneSectionBtn /></span>
      </div>
      <div className="sections-list">
        {sections.map(sec => (
          <Section key={sec.key} index={sec.key} title={sec.name} desc={sec.description} />
        ))}
      </div>
    </div>
  )
}