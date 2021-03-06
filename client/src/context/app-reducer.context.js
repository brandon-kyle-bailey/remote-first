const filterDecorator = (data, filterKey, filterCallback) => {
  let returnData = [];
  
  let outerKeys = [];
  if(!Array.isArray(filterKey)) {
    outerKeys.push(filterKey);
  } else {
    outerKeys = filterKey;
  }

  data.forEach(element => {
    if(filterCallback(outerKeys, element)) {
      returnData.push(element);
    }
  });

  if(!returnData.length) {
    return data
  } else {
    return returnData;
  }
}

// filterDecorator(state.jobs, action.payload.replace(/[^\w\s]/gi, '').split(' '), containsTerms)


const containsTerms = (searchTerms, job) => {
  if (!Array.isArray(searchTerms) || !searchTerms.length) {
    return job;
  } else {
    return searchTerms.some((word) => {
      return job.position.includes(word) || job.company.includes(word) || job.description.includes(word) || job.tags.join(' ').includes(word) || job.location.includes(word) ? true : false;
    });
  }
}

export default (state, action) => {
    switch(action.type) {
      case 'SEARCH_JOBS':
        return {
          ...state,
          // jobs: state.jobs.filter((job) => containsTerms(action.payload.replace(/[^\w\s]/gi, '').split(' '), job))
          jobs: filterDecorator(state.jobs, action.payload.replace(/[^\w\s]/gi, '').split(' '), containsTerms)
        }
        case 'INIT_JOBS':
          return {
            ...state,
            jobs: action.payload
          }
      default:
        return state;
    }
}