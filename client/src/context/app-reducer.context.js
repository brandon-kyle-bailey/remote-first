const containsTerms = (searchTerms, job) => {
  return searchTerms.some((word) => {
    return job.position.includes(word) || 
    job.company.includes(word) || 
       job.description.includes(word) || 
       job.tags.join(' ').includes(word) || 
       job.location.includes(word) ? true : false;
  });
}

export default (state, action) => {
    switch(action.type) {
      case 'SEARCH_JOBS':
        return {
          ...state,
          jobs: state.jobs.filter((job) => containsTerms(action.payload.replace(/[^\w\s]/gi, '').split(' '), job))
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