const MainPage = ({restoranIsOpen}) => {
  return (
      <div>
        {restoranIsOpen ? (
            <button>closeDay</button>
        ) : (
            <button>openDay</button>
        )}
      </div>

  )
}
export default MainPage