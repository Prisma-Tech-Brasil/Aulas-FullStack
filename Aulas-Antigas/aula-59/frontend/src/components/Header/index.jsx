import arrowDown from "../../assets/arrow-down.svg";
import mixer from "../../assets/mixer.svg"

export default function Header(props) {
  return (
    <header>
        <button type="button">
          <img src={arrowDown} alt="Arrow down icon" />
        </button>
        <h1>{props.title}</h1>
        <button type="button">
          <img src={mixer} alt="Mixer icon" />
        </button>
      </header>
  )
}