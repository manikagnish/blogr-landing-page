function FeaturesSection({
  mainHeading,
  heading1,
  heading2,
  para1,
  para2,
  illustration,
  altText,
  direction,
}) {
  return (
    <section className="features">
      <h2>{mainHeading}</h2>

      <div className={`features__container ${direction}`}>
        <div className="features__text">
          <h3>{heading1}</h3>
          <p>{para1}</p>

          <h3>{heading2}</h3>
          <p>{para2}</p>
        </div>

        <img src={illustration} alt={altText} className={direction} />
      </div>
    </section>
  );
}

export default FeaturesSection;
