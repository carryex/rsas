const TOOGLE_IS_OPEN = "TOOGLE_IS_OPEN";
const SET_CURRENT_PAGE_TITLE = "SET_CURRENT_PAGE_TITLE";

let initialState = {
  isOpen: false,
  currentPageTitle: null,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_IS_OPEN:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case SET_CURRENT_PAGE_TITLE:
      return {
        ...state,
        currentPageTitle: action.currentPageTitle,
      };
    default:
      return state;
  }
};
export default navigationReducer;

export const toogleIsOpen = (isOpen) => ({
  type: TOOGLE_IS_OPEN,
  isOpen,
});

export const setCurrentPageTitle = (currentPageTitle) => ({
  type: SET_CURRENT_PAGE_TITLE,
  currentPageTitle,
});
