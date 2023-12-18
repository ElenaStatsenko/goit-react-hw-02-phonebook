export const SearchFilter = ({topicFilter, onChangeTopic}) => {
   
    return (
        <div>
        <p>Find contacts by name:</p>
        <input
          type="text"
          value={topicFilter}
          onChange={evt=> onChangeTopic(evt.target.value)}
      
        />
        
      </div> 
    );
  };


