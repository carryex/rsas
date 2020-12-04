const MainPage = ({restaurantIsOpen, closeDay, openDay}) => {
  return (
      <div>
        {restaurantIsOpen ? (
            <button onClick={closeDay}>closeDay</button>
        ) : (
            <button onClick={openDay}>openDay</button>
        )}
      </div>

  );
};
export default MainPage;