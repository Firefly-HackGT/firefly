import '../styles/SessionCreation.scss';
import Section from '../components/Section';
import AddSessionBtn from '../components/AddSessionBtn';
import { useState } from 'react';

export default function SessionCreation() {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [sections, setSections] = useState([]);

  const addSection = () => {
    setSections([...sections, {key: sections.length + 1, title: title, desc: description}]);
  }

  return (
    <div className="section-creation_wrapper">
      <div className="sections-input">
        <label htmlFor="title">Section Name</label>
        <input id="title" type="text" placeholder="Linear equations" onInput={e => setTitle(e.target.value)} />
        <label htmlFor="desc">Section Description</label>
        <input id="desc" type="text" placeholder="Learn about y=mx + b" onInput={e => setDesc(e.target.value)} />
        <AddSessionBtn click={addSection} />
      </div>
      <div className="sections-list">
        {sections.map(sec => (
          <Section key={sec.key} index={sec.key} title={sec.title} desc={sec.desc} />
        ))}
      </div>
    </div>
  )
}