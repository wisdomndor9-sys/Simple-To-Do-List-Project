let FilterList = ({ updatefilterList, task }) => {

  function handleFilter(event) {
    const value = event.target.value;

    if (value === "all") {
      updatefilterList(task);  // restore full list
    } else if (value === "completed") {
      updatefilterList(task.filter(notes => notes.isAvailable === true));
    } else if (value === "") {
      updatefilterList(task.filter(notes => notes.isAvailable === false));
    }
  }

  return (
    <div className="filter-area">
      <select name="isAvailable" onChange={handleFilter}>  
        <option value="all">All</option>
        <option value="Completed">Available</option>
        <option value="Incomplete">Unavailable</option>
      </select>
    </div>
  );
}

export default FilterList;