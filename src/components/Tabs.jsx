import React, { useState } from 'react';

const Tabs = ({ children }) => {
    // Set the initial active tab to the first child's index (0)
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle tab clicks and update the active index
    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log('Submitted Value:', formData.get('tabInput'));
    };

    // Footer Component Definition
    const TabFooter = () => (
        <div style={footerStyle}>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="submit">Submit Form</button>           
            <p>&copy; 2026 Panagraphics Inc.</p>
        </div>
    );

    // Ensure children are valid and can be mapped
    const tabs = React.Children.toArray(children).filter(React.isValidElement);

    return (
        <div className="tabs-container">
            <form className="w-full max-w-lg" name="field-form" onSubmit={handleSubmit}>
                {/* Tab navigation buttons */}
                <div className="tab-list">
                    {tabs.map((child, index) => (
                        <button
                            key={index}
                            // Add an 'active' class to the currently selected tab button
                            className={`tab-button ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {/* Use the 'title' prop from the child div as the button label */}
                            {child.props.title}
                        </button>
                    ))}
                </div>

                {/* Tab content display */}
                <div className="tab-content">
                    {/* Render only the active tab's child content */}
                    {tabs[activeIndex]}
                    {console.log('Active Tab Content:', tabs[activeIndex])}
                </div>
                <div className="tab-footer-container">
                    <TabFooter />
                </div>
          </form>
        </div>
    );
};

const footerStyle = { borderTop: '1px solid #ccc', padding: '10px', marginTop: 'auto', textAlign: 'center', position: 'sticky', bottom: 0 };

export default Tabs;