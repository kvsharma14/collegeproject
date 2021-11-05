export function dataReducer(state, action) {
  switch (action.type) {
    case "USER-LOGGED-IN":
      return { ...state, isUserLoggedIn: action.payload };
    case "LOAD-USER-DATA":
      return { ...state, userData: action.payload };
    case "LOAD-PROJECT-DATA":
      return {
        ...state,
        projectData: action.payload
      };
    default:
      return { ...state };
  }
}
