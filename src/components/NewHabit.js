function habitCreatorShow() {
    let visable = document.querySelector('.visable')
    let invisable = document.querySelector('.invisable')
    visable.style.display = "none"
    invisable.style.display = "flex"
  };

export default function NewHabit() {
    return (
        <div className="newHabit">
            <button className="newHabitButton" onClick={habitCreatorShow}>+</button>
        </div>
    )
}