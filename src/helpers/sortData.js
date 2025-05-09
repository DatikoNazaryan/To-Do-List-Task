export const sortData = (data, sortBy) => {
    return (data.toSorted((a, b) =>  {
        if(sortBy === "Date") {
            return (new Date(b.sortData) - new Date(a.sortData));
        } else if (sortBy === "Alphabetically") {
            return (a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        }
      }));
};