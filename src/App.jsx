import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Import your CSS if needed


function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  let add = () => {
    if (text.trim() !== '') {
      setList([...list, text]);
      setText('');
    }
  };

  let deleteTodo = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  let deleteAllTodos = () => {
    setList([]);
  };

  let editTodo = (index, newText) => {
    const updatedList = [...list];
    updatedList[index] = newText;
    setList(updatedList);
    setEditIndex(-1); // Clear edit mode after editing
  };

  return (
     
    <div className='div1'>
      <h1>TODO APP</h1> 
      <input
        className='inp1'
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className='btn' onClick={add}>Add</button>
      <button className='btn' onClick={deleteAllTodos}>Delete All</button>
      {list.map((x, i) => {
        return (
          <div key={i}>
            {editIndex === i ? (
              <>
                <input
                   className='inp2'
                  type='text'
                  value={x}
                  onChange={(e) => setList(list.map((item, idx) => (idx === i ? e.target.value : item)))}
                />
                <button className='btn' onClick={() => editTodo(i, x)}>Save</button>
              </>
            ) : (
              <>
                <p className='para'>{x}</p>
                <button className='btn2' onClick={() => setEditIndex(i)}>Edit</button>
                <button className='btn2' onClick={() => deleteTodo(i)}>Delete</button>
              </>
            )}
          </div>
          
        );
      })}
    </div>

  );
}

export default App;
