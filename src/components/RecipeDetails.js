import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [steps, setSteps] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pauseIcon, setPauseIcon] = useState("play_arrow");
  const url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?query=${id}&apiKey=65091d71afe14738886ff5f79b30d757`;

  let synth = window.speechSynthesis;
  let utterance1 = new SpeechSynthesisUtterance();

  useEffect(() => {
    synth.cancel();
    const cachedData = sessionStorage.getItem(`recipe-${id}`);
    if (cachedData) {
      setSteps(JSON.parse(cachedData));
    } else {
      fetch("https://echo-chef-cfc44534fa71.herokuapp.com/recipeDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSteps(data);
          sessionStorage.setItem(
            `recipe-${id}`,
            JSON.stringify({ steps: data })
          );
        });
    }
    return () => {
      synth.cancel();
    };
  }, [id]);

  const history = useHistory();

  const hanldeBack = () => {
    history.go(-1);
  };

  const speak = (speechText) => {
    utterance1.text = speechText;
    utterance1.onend = () => {
      setIsPlaying(false);
      setPauseIcon("play_arrow");
    };
    console.log(utterance1);
    if (!isPlaying) {
      setIsPlaying(true);
      setPauseIcon("pause");
      synth.speak(utterance1);
      synth.resume();
    } else {
      setIsPlaying(false);
      setPauseIcon("play_arrow");
      synth.pause();
    }
  };

  return (
    <div className="details">
      <div className="speak-contain">
        <h1>Recipe Details-{id}</h1>

        <button
          className="speak"
          onClick={() =>
            speak(
              steps.map((step) => {
                return ` Step${step.number}: ${step.step}`;
              })
            )
          }
        >
          🗣️<span className="material-symbols-outlined">{pauseIcon}</span>
        </button>
      </div>
      {steps &&
        steps.map((step, index) => (
          <p key={index}>
            {step.number}. {step.step}
          </p>
        ))}
      <button onClick={hanldeBack}>Back &laquo;</button>
    </div>
  );
};

export default RecipeDetails;
