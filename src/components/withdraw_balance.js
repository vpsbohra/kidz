
import React, { useEffect, useState } from 'react';
import bank_image from '../images/Bank.png';

export default function WithdrawBalanceForm({ onClose }) {
  const [amount, setAmount] = useState();
  const [balance, setBalance] = useState(299.3);

  useEffect(() => {
    document.body.classList.add('withdraw');

    return () => {
      document.body.classList.remove('withdraw');
    };
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (amount <= balance) {
      try {
        const response = await fetch('https://api.stripe.com/v1/transfers', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer sk_test_51NjQ9TSBOT8uQJFs4CbaVkcrScaoE1ALAzs4NfhqeDsDvEg9dobzBsdoG8gC3XUILPfao8uer67kdIckmOtnNEwC00lutDJpWw', 
            'Content-Type': 'application/x-www-form-urlencoded' // Use application/json for the body
          },
          body: `amount=${amount}&currency=usd&destination=abc`,
        });

        const data = await response.json();

        if (response.ok) {
          alert('Bank transfer successful!');
        } else {
          alert(`Error: ${data.error.message}`);
        }
      } catch (error) {
        console.error('Payment error:', error);
      }
    } else {
      console.error('Error: Insufficient balance');
    }
  };

  return (
    <div className="modal-container">
      <div className="Withdraw_balance_popContent">
        <h2>Withdraw balance</h2>
        <input className='Withdraw_balance_price' type="number" value={balance} readOnly />

        <div className="Withdraw_balance_popContent_inners">
          <h4>Withdraw to</h4>
          <div className="Withdrawright_content_full">
            <div className="Withdrawright_content">
              <img src={bank_image} alt="Bank" /> <span>Bank Account - Daisy Jones</span>
            </div>
            <div className="Withdrawleft_content">
              <p>USD</p>
            </div>
          </div>
        </div>

        <div className="Withdraw_amount_pop">
          <h4>Withdraw amount</h4>
          <div className="amount_popright_content_full">
            <div className="amount_popright_content">
              <input type="number" onChange={(event) => setAmount(event.target.value)} value={amount} />
            </div>
            <div className="amount_popleft_content">
              <p>USD</p>
            </div>
          </div>
        </div>

        <button className="confirm_btn_with_blnc" onClick={handlePayment}>
          CONFIRM
        </button>
      </div>
    </div>
  );
}

