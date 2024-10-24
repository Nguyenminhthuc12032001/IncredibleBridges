import React, { useState, useEffect } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
function BackToTopButton() {
    // State to track when to show the "back to top" button
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Handle scroll event to determine when to show the button
        const handleScroll = () => {
            if (window.scrollY > 500) { // Show button after scrolling down 500px
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  // Empty dependency array means this effect runs once when the component mounts


    // Scroll smoothly to the top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton && ( // Conditionally render the button based on showButton state
                <button
                    onClick={scrollToTop}
                    style={styles.backToTopBtn}>
                    <ArrowDropUpIcon />  {/* Icon for the button */}

                </button>
            )}
        </>
    );
}

export default BackToTopButton;

// Styles for the button
const styles = {
    backToTopBtn: {
        position: 'fixed',
        bottom: '50px',
        right: '30px',
        backgroundColor: 'rgba(33, 37, 41, 0.5)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '18px',
        border: '1px solid white',
        zIndex: 1000,
    }
};
