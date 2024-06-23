import React, { useState } from 'react';
import '../styles/environment.css';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTrash,
  faMagicWandSparkles,
} from '@fortawesome/free-solid-svg-icons';

interface Variable {
  name: string;
  value: string;
  visible: boolean;
}

function Environment() {
  const [variables, setVariables] = useState<Variable[]>([
    { name: 'NAME_OF_VARIABLE', value: '', visible: false },
  ]);

  const generateRandomValue = (index: number) => {
    const newVariables = [...variables];
    newVariables[index].value = uuidv4();
    setVariables(newVariables);
  };

  const deleteVariable = (index: number) => {
    const newVariables = variables.filter((_, i) => i !== index);
    setVariables(newVariables);
  };

  const toggleVisibility = (index: number, visible: boolean) => {
    const newVariables = [...variables];
    newVariables[index].visible = visible;
    setVariables(newVariables);
  };

  const handleNameChange = (index: number, newName: string) => {
    const newVariables = [...variables];
    newVariables[index].name = newName;
    setVariables(newVariables);
  };

  const handleValueChange = (index: number, newValue: string) => {
    const newVariables = [...variables];
    newVariables[index].value = newValue;
    setVariables(newVariables);
  };

  return (
    <div className="container Environment">
      <h2 className="mb-4">Environment Variables</h2>
      {variables.map((variable, index) => (
        <div
          key={index}
          className="variable">
          <input
            type="text"
            placeholder={variable.name}
            onChange={(e) => handleNameChange(index, e.target.value)}
          />
          <input
            type={variable.visible ? 'text' : 'password'}
            value={variable.value}
            onChange={(e) => handleValueChange(index, e.target.value)}
            onFocus={() => toggleVisibility(index, true)}
            onBlur={() => toggleVisibility(index, false)}
          />
          <button
            className="btn btn-generate"
            onClick={() => generateRandomValue(index)}>
            <FontAwesomeIcon icon={faMagicWandSparkles} /> Generate
          </button>
          <button
            className="btn"
            onClick={() => deleteVariable(index)}>
            <FontAwesomeIcon
              icon={faTrash}
              className="icon-trash"
            />
          </button>
        </div>
      ))}
      <button
        className="btn"
        onClick={() =>
          setVariables([
            ...variables,
            { name: 'NAME_OF_VARIABLE', value: '', visible: false },
          ])
        }>
        <FontAwesomeIcon icon={faPlus} /> Add Environment Variable
      </button>
    </div>
  );
}

export default Environment;
