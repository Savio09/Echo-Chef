import { useState } from "react";
import Button from "./CustomButton";
import Modal from "./Modal"; // Import your Modal component

const Recipes = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState(null);
  const [modalOpen, setModalOpen] = useState(true); // State to control the modal
  const handleRecipe = (e) => {
    e.preventDefault();
    fetch("https://echo-chef-cfc44534fa71.herokuapp.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.text();
      })
      .then((data) => {
        if (data) {
          const jsonData = JSON.parse(data);
          setRecipe(jsonData);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          This application contains text-to-speech functionality. You can use
          this application hands-free. Click on this icon ▶️ after you make a
          search.
        </Modal>
      )}
      <form onSubmit={handleRecipe}>
        <input
          type="text"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter leftover food items here"
        />
        <input type="submit" value="Find Recipe" />
      </form>
      <div className="recipes">
        <h1>Recipes</h1>
        <div className="grid">
          {recipes &&
            recipes.map((recipe) => (
              <div key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
                <Button id={recipe.id} name={recipe.title} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
