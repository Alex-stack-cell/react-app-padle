import "./Main.css";
import imgOne from "../../Assets/main-min.jpg";
import imgTwo from "../../Assets/main-padel-club.jpg";

const Main = (props) => {
  // According to the id of the main , contents will change
  let mainId = props.mainId;
  let heading = "";
  let content = "";
  let mainImg = "";
  let imgAlt = "";
  let mainFigCaption = "";
  // ID assesment
  switch (mainId) {
    case "p3":
      heading = `Dare to play and make fun ?`;
      content = `If you are looking to start this new sport and don't know what equipment do you need, you are in the right place ! There are 3 main things you will need a racket, a pair of shoes and balls.`;
      mainImg = "";
      mainFigCaption = "";
      imgAlt = "Padel club in Brussels";
      break;
    case "p2":
      heading = `Centre sportif Mounier in Woluwe-Saint-Lambert`;
      content = `Located in Woluwe-Saint-Lambert, Mounier sports centre is the perfect club to discover this new racket sport. It has three courts, two of which are covered and can be played on all year round. Lessons are also available on request.

      Address: Avenue Emmanuel Mounier 87 Emmanuel Mounierlaan - 1200 Woluwe-Saint-Lambert
      
      Telephone: +32 (0)2 762 85 22
      Email: sport@mounier.be`;
      mainImg = imgTwo;
      mainFigCaption = "Padel Club in Brussels";
      imgAlt = "Padel equipment";
      break;
    default:
      heading = "What is padel tennis ?";
      content = `Padel is a sport which combines action with fun and social interaction. It’s a great sport for players of all ages and skills, as it is both quick and easy to pick up. Most players get the basics within the first half an hour of playing so that they can enjoy the game.
      Padel is not as dominated by strength, technique and serve as it happens in Tennis and therefore is an ideal game for men, women and youth to compete together. An important skill is match-craft, as points are won rather by strategy than by sheer strength and power.`;
      mainImg = imgOne;
      mainFigCaption = "Padel tennis";
      imgAlt = "Padel how to";
  }
  const mainContent = [
    {
      id: mainId,
      heading: heading,
      content: content,
      img: mainImg,
      alt: imgAlt,
      figcaption: mainFigCaption,
    },
  ];

  if (mainContent[0].img !== "") {
    return (
      <main>
        <section className="container">
          <h3 className="main__heading">{mainContent[0].heading}</h3>
          <article className="main__article">{mainContent[0].content}</article>
          <figure className="main__figure">
            <img src={mainContent[0].img} alt={mainContent[0].alt}></img>
            <figcaption>{mainContent[0].figcaption}</figcaption>
          </figure>
        </section>
      </main>
    );
  }
  // If no image is render, only the content is displayed
  return (
    <main>
      <section className="container">
        <h3 className="main__heading">{mainContent[0].heading}</h3>
        <article className="main__article">{mainContent[0].content}</article>
      </section>
    </main>
  );
};

export default Main;
