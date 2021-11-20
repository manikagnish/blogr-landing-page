import phones from "../images/illustration-phones.svg";

export default function JumbotronLikeThing() {
  return (
    <div className="jumbotron-like-thing">
      <img src={phones} alt="vector of phones" />
      <div className="jumbotron-like-thing__text">
        <h3>State of the Art Infrastructure</h3>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
}
