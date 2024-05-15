const About = () => {
  return (
    <div className="about">
      <div className="summary">
        <h1>About Our Application</h1>
        <p>
          Our application is a unique platform designed to make cooking more
          accessible and enjoyable. By leveraging the power of technology, we
          aim to transform your kitchen experience. There are however times when
          you don't get a lot of details but instead get another link to visit
          for the full recipe information.
        </p>
      </div>

      <div className="features">
        <h1>Features</h1>
        <ul>
          <li>
            <strong>Recipe Finder:</strong> Enter your leftover food items and
            our application will suggest a variety of recipes you can make with
            them.
          </li>
          <li>
            <strong>Recipe Details:</strong> Get detailed instructions for each
            recipe, including step-by-step guidance to help you cook the perfect
            dish.
          </li>
          <li>
            <strong>Text-to-Speech:</strong> Our application features a
            hands-free mode that reads out the recipe instructions to you. This
            allows you to focus on cooking without having to constantly check
            your device.
          </li>
          <li>
            <strong>Interactive Learning:</strong> Our application is not just
            about finding recipes. It's also a learning platform where you can
            deepen your understanding of food, ingredients, and cooking
            techniques.
          </li>
        </ul>
      </div>
      <div className="mission">
        <h1>Our Mission</h1>
        <p>
          Our mission is to make cooking a more enjoyable and less daunting
          task. Whether you're a seasoned chef or a beginner, our application is
          designed to assist you in creating delicious meals from the comfort of
          your home.
        </p>
      </div>
    </div>
  );
};

export default About;
