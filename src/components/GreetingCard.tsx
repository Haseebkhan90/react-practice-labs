import React from "react";

interface Greetingcardprops {
    name: string;
}

const GreetingCard: React.FC<Greetingcardprops> = ({ name }) => {
    return (
        <div style={{
            border: '2px solid purple',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            backgroundColor: '#f3e8ff'
        }}>
            <h2>Hello, {name}! 👋</h2>
            <p>Welcome to Day 1 of React practice!</p>
        </div>
    );
};

export default GreetingCard;