'use client';
import React, { useState } from 'react';

interface SubscriptionPageProps {
  className?: string;
  token: string;
}

const SubscriptionPage: React.FC<SubscriptionPageProps> = ({ className = '', token }) => {
  const [loading, setLoading] = useState(false);
  const express_url = process.env.EXPRESS_API_URL;
  const planId = 'P-6SC35100BP750990BM36XSAI';
  const post_api_url = `${express_url}/paypal/subscribe`; // Construct the POST API URL

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(post_api_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ planId }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.approval_url) {
            // Redirect the user to the given URL
            window.location.href = data.approval_url;
        } else {
            console.error('Redirect URL not found');
        }
      } else {
        console.error('Failed to submit ID');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`subscription-page ${className}`}>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={loading} // Disable button while loading
      >
        {loading ? 'Submitting...' : 'Subscribe Now'}
      </button>
    </div>
  );
};

export default SubscriptionPage;
