export default function Habit(props) {
    return (
        <div className="habit">
            <div className="emote">{props.emote}</div>
            <div className="title">{props.title}</div>
        </div>
    );
}