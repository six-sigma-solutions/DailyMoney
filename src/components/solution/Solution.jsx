import "./Solution.css";


const Solution = () => {
  const handleShowMore = () => {
    // Navigate to Gratitude page
    window.location.href = "/Gratitude"; 
  };

  return (
    <div className="sol-img-card" role="region" aria-label="Solution image card">
      <img
        src="solution.jpg" // Use public folder path
        alt="Large Solution Image"
        className="sol-responsive-img"
      />
      <button
        className="sol-cta-button"
        onClick={handleShowMore}
        aria-label="Need more"
      >
        Need More
      </button>
    </div>
  );
};

export default Solution;
