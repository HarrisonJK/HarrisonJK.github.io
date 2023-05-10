export function About() {
  function RandomButton() {
    const links = [];

    function handleClick() {
      const randomIndex = Math.floor(Math.random() * links.length);
      const randomLink = links[randomIndex];
      window.open(randomLink, "_blank");
    }

    return (
      <div onClick={handleClick} className="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="wikiHover"
        >
          <path
            fill="#CFD8DC"
            d="M6 10a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V10z"
            className="test"
          />
          <path
            fill="#37474F"
            d="M39 17.271a.342.342 0 0 1-.334.349h-1.799l-8.164 18.179c-.052.12-.17.2-.297.202h-.004a.33.33 0 0 1-.298-.193l-3.874-8.039l-4.18 8.049a.333.333 0 0 1-.303.184a.336.336 0 0 1-.292-.199l-8.252-18.182h-1.87a.345.345 0 0 1-.333-.35v-.921a.34.34 0 0 1 .333-.35h6.657a.34.34 0 0 1 .333.35v.921a.342.342 0 0 1-.333.349h-1.433l5.696 13.748l2.964-5.793l-3.757-7.953h-.904a.342.342 0 0 1-.333-.35v-.922c0-.191.149-.348.333-.348h4.924a.34.34 0 0 1 .333.348v.922c0 .192-.149.35-.333.35h-.867l2.162 4.948l2.572-4.948H25.77a.34.34 0 0 1-.334-.35v-.922a.34.34 0 0 1 .334-.348h4.784c.187 0 .333.156.333.348v.922a.34.34 0 0 1-.333.35h-1.05l-3.757 7.141l3.063 6.584l5.905-13.725h-1.872a.343.343 0 0 1-.334-.35v-.922c0-.191.15-.348.334-.348h5.822a.34.34 0 0 1 .334.348v.921z"
          />
        </svg>
      </div>
    );
  }

  return (
    <section className="aboutMe rainbowContainer">
      <h1 className="center montserrat">Hello!</h1>
      <p className="montserrat">
        My name is Harrison Katapodis and I'm a software engineer! <br></br>I
        started out in Finance, but during the pandemic realized I wanted a more
        tangible skill that would allow me to be more creative. <br></br>I
        created this website to showcase my experiences and give you insight
        into who I am!
        <h1 className="noMargin">
          The <mark>highlights</mark>
        </h1>
        <li className="space">
          Graduate of Cornell University and Fullstack Academy
        </li>
        <li>I am a lifelong learner who regularly wikipedia binges</li>
      </p>
      <icon icon="mdi-light:home"></icon>
      <RandomButton />
    </section>
  );
}
