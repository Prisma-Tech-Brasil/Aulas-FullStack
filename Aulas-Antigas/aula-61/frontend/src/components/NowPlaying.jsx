import ProgressBar from "./ProgressBar";
import PlayerController from "./PlayerController";
import icarus from "../assets/icarus-bk.jpeg";

export default function NowPlaying(props) {
  return (
    <div
      className={`${
        props.showProgressBar
          ? ""
          : "flex flex-row items-center space-x-4 justify-between mt-6"
      }`}
    >
      <div
        className={`${
          !props.showProgressBar && "flex flex-row items-center space-x-4"
        }`}
      >
        <img
          className={`${
            props.showProgressBar
              ? "rounded-3xl w-full mb-4"
              : "rounded-2xl w-16"
          }`}
          src={icarus}
          alt="Music icon"
        />
        <div>
          <h2
            className={`font-bold ${
              props.showProgressBar ? "text-xl" : "text-base"
            }`}
          >
            Música de amor nunca mais
          </h2>
          <h3 className={`${props.showProgressBar ? "text-lg" : "text-sm"}`}>
            BK, Luccas Carlos, Nansy Silvvz, Gigantes
          </h3>
        </div>
      </div>
      {props.showProgressBar && <ProgressBar />}
      <PlayerController showControlButtons={props.showProgressBar} />
    </div>
  );
}
