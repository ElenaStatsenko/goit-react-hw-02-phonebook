export const SearchFilter = ({topicFilter, onChangeTopic}) => {
   
    return (
        <div>
        <p>Find contacts by name:</p>
        <input
          type="text"
          value={topicFilter}
          onChange={evt=> onChangeTopic(evt.target.value)}
        //   placeholder="Начните вводить текст..."
        />
        
      </div> 
    );
  };


{/* <label>
Find contacts by name
<Field  name="filter"  required />
{/* <ErrorMessage name="Number" component="div" /> */}
// </label> */}