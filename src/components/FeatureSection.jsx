function FeaturesSection({
  mainHeading,
  heading1,
  heading2,
  para1,
  para2,
  illustration,
  altText,
}) {
  return (
    <section>
      <h2>{mainHeading}</h2>
      <h3>{heading1}</h3>
      <p>{para1}</p>
      <h3>{heading2}</h3>
      <p>{para2}</p>
      <img src={illustration} alt={altText} />
    </section>
  );
}

export default FeaturesSection;
