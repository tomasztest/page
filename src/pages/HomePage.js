import React from "react";
import Article from "../components/Artilces";
const articles = [
  {
    id: 1,
    title: "czym jest teoria strun",
    author: "Johan Nowak",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet optio et doloremque esse molestias dolor, voluptas, sit minus natus distinctio beatae quam deserunt soluta iure, reiciendis non tempore! Eaque, exercitationem."
  },
  {
    id: 2,
    title: "czym jest paradoks fermiefgo",
    author: "Johan Nowak",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet optio et doloremque esse molestias dolor, voluptas, sit minus natus distinctio beatae quam deserunt soluta iure, reiciendis non tempore! Eaque, exercitationem."
  },
  {
    id: 3,
    title: "Szara materia i cemna energia",
    author: "Johan Nowak",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet optio et doloremque esse molestias dolor, voluptas, sit minus natus distinctio beatae quam deserunt soluta iure, reiciendis non tempore! Eaque, exercitationem."
  }
];
const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
