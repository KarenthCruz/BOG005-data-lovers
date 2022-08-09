const utilities = {
  sortData: function(data, sortBy = 'title' , sortOrder ) {
    
    const result = data.sort((a, b) => {
      let ma = a[sortBy].toUpperCase();
      let mb = b[sortBy].toUpperCase();

      if (sortOrder == 'ascendente') {
        if (ma < mb) {
          return -1;
        }
        if (ma > mb){
          return 1; 
        }
        return 0;
      } else if (sortOrder == 'descendente') {
        if (ma > mb) {
          return -1;
        }
        if (ma < mb){
          return 1; 
        }
        return 0;
      }

    });
    return result; 
  },
 };



export default utilities;
