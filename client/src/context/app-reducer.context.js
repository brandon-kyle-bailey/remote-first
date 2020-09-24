export default (state, action) => {
    switch(action.type) {
      case 'HIDE_JOB':
        return {
          ...state,
          jobs: state.jobs.filter(job => job.id !== action.payload)
        }
      case 'ADD_JOB':
        return {
          ...state,
          jobs: [action.payload, ...state.jobs]
        }
      default:
        return state;
    }
  }