export const sortData = (data, sortBy, sortByAscOrDesc) => {
    return (data.toSorted((a, b) =>  {
        if(sortBy === "Date") {
            if(sortByAscOrDesc === "asc")
              return (new Date(b.sortDate) - new Date(a.sortDate));
            if(sortByAscOrDesc === "desc")
              return (new Date(a.sortDate) - new Date(b.sortDate));
        } else if (sortBy === "Alphabetically") {
            if(sortByAscOrDesc === "asc")
              return (a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
            if(sortByAscOrDesc === "desc")
                return (b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        }
      }));
};