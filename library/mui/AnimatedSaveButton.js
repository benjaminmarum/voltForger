// Import necessary modules
import React, { useState, useEffect } from 'react'; // Import React and its hooks useState and useEffect
import IconButton from '@mui/material/IconButton'; // Import IconButton from Material UI
import SaveIcon from '@mui/icons-material/Save'; // Import SaveIcon from Material UI icons
import { css, keyframes } from "@emotion/react"; // Import css and keyframes from Emotion's React package
import styled from "@emotion/styled"; // Import styled from Emotion's styled package

// Define keyframes for the spin animation.
// Keyframes define the sequence of states in an animation.
const spin = keyframes`
  from {
    transform: rotate(0deg); // The start state of the animation where rotation is 0 degrees
  }
  to {
    transform: rotate(360deg); // The end state of the animation where rotation is 360 degrees
  }
`;

// Styled container for SaveIcon. The animation is applied to this container.
// styled from @emotion/styled is a factory function that helps to generate React components with styles.
// Here, 'div' is passed to styled() to create a styled div.
const IconContainer = styled('div')`
  animation: ${props => props.isSaving ? css`${spin} 1s linear infinite` : 'none'};
  // The animation property is a shorthand property for animation-name, animation-duration, 
  // animation-timing-function, animation-delay, animation-iteration-count, animation-direction, 
  // animation-fill-mode, and animation-play-state.
  // If isSaving is true, the spin animation is applied. Else, no animation is applied.
  // The spin animation lasts for 1s, progresses linearly (constant speed), and loops infinitely.
`;

// SaveButton component
function SaveButton() {
  // useState hook is used to add state to the component. Here, isSaving is the state variable and setIsSaving is the function to update the state.
  const [isSaving, setIsSaving] = useState(false);

  // useEffect hook is used to perform side effects in function components. 
  // Side effects could be data fetching, subscriptions, manually changing the DOM, etc.
  useEffect(() => {
    if (isSaving) { // If isSaving is true
      // setTimeout sets a timer which executes a function or specified piece of code once the timer expires.
      const timer = setTimeout(() => {
        setIsSaving(false); // Set isSaving to false after the timer expires (after 2 seconds)
      }, 2000); // Set the timer duration to 2 seconds

      // The function returned by useEffect will run when the component unmounts or before the component re-renders.
      // Here, it's used to clear the timer.
      return () => clearTimeout(timer);
    }
  }, [isSaving]); // This effect depends on the value of isSaving. If isSaving changes, the effect runs again.

  // The component renders an IconButton.
  // When the IconButton is clicked, isSaving is set to true, triggering the spin animation.
  return (
    <IconButton 
      color="primary" 
      onClick={() => setIsSaving(true)}
    >
      <IconContainer isSaving={isSaving}>
        <SaveIcon />
      </IconContainer>
    </IconButton>
  );
}

export default SaveButton;
