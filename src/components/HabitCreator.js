


function habitCreatorHide() {
    let visable = document.querySelector('.visable')
    let invisable = document.querySelector('.invisable')
    visable.style.display = "flex"
    invisable.style.display = "none"
  };

function grabData() {
    let visable = document.querySelector('.visable')
    let invisable = document.querySelector('.invisable')
    visable.style.display = "flex"
    invisable.style.display = "none"
}

export default function HabitCreator() {
    return (
        <div className="habitCreator">
            <button className="exit-btn" onClick={habitCreatorHide}>x</button>
            <div className="habitCreation">
                <input placeholder="habit title" className="habit-title"></input>
                <input placeholder="habit emote" className="habit-emote"></input>
            </div>
            <button className="done-btn" onClick={grabData}>Done</button>
        </div>
    )
}

