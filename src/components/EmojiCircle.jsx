import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const EmojiCircle = () => {
  const emojis = ["💻", "👨‍💻", "🎮", "⚽", "📷"];
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
  const [opacity, setOpacity] = useState(1);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start with fading out the emoji
      setOpacity(0);

      setTimeout(() => {
        setCurrentEmoji((prevEmoji) => {
          const index = emojis.indexOf(prevEmoji);
          const nextIndex = (index + 1) % emojis.length;
          return emojis[nextIndex];
        });
        // Fade in the new emoji
        setOpacity(1);
      }, 200); // Half the interval to change the emoji after it fades out
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const circleStyle = {
    backgroundColor: "var(--primary-color)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "50px",
    transition: "opacity 0.5s",
    cursor: "pointer",
    border: "3px solid var(--secondary-color)",
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: "2px",
  };

  // Function to handle navigation
  const handleNavigate = () => {
    // navigate("/new-page"); // Navigate to the route you want when clicked
  };

  const renderEmoji =
    typeof currentEmoji === "string" ? (
      currentEmoji
    ) : (
      <img
        src={currentEmoji}
        alt="emoji"
        style={{ width: "100%", height: "100%" }}
      />
    );

  return (
    <div style={{ ...circleStyle, opacity: opacity }} onClick={handleNavigate}>
      {renderEmoji}
    </div>
  );
};

export default EmojiCircle;
