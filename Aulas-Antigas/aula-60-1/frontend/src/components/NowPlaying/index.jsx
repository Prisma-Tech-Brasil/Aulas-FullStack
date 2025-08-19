import ProgressBar from "../ProgressBar";
<<<<<<< HEAD
import PlayerController from "../PlayerController";
import icarus from "../../assets/icarus-bk.jpeg";
=======
>>>>>>> parent of 250c7e9 (projeto para a aula)

export default function NowPlaying({ showProgressBar }) {
  return (
<<<<<<< HEAD
    <div
      className={`${
        showProgressBar
          ? "flex flex-row items-center space-x-4 justify-between mt-6"
          : "mt-6"
      }`}
    >
      <div
        className={`${
          showProgressBar && "flex flex-row items-center space-x-4"
        }`}
      >
        <img
          className={`${!showProgressBar ? "rounded-3xl w-full mb-4" : "rounded-2xl w-16"}`}
          src={icarus}
          alt="Music icon"
        />
        <div>
          <h2
            className={`font-bold ${showProgressBar ? "text-base" : "text-xl"}`}
          >
            Música de amor nunca mais
          </h2>
          <h3 className={`${showProgressBar ? "text-sm" : "text-lg"}`}>
            BK, Luccas Carlos, Nansy Silvvz, Gigantes
          </h3>
        </div>
      </div>
      {!showProgressBar && <ProgressBar />}
      <PlayerController showControlButtons={showProgressBar} />
=======
    <div>
      <img className="w-full max-w-sm rounded-3xl" src="" alt="Music icon" />
      <h2 className="text-2xl bold">Remedy</h2>
      <h3>Annie Schindle</h3>
      <ProgressBar />
>>>>>>> parent of 250c7e9 (projeto para a aula)
    </div>
  );
}
