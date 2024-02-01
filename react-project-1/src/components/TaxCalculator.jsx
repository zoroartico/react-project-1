import React, { Component } from 'react';

class TaxCalculator extends Component {
    state = {  } 


    render() { 
        return (
        <div>
            <h1>Tax Calculator</h1>
            <div className="bubble">
                <div className="row">
                    <label>Yearly income: </label><br/>
                    <input type="text" id="income" name="income"></input>
                </div>

                <div className="row">
                    <button 
                        id="processEntryBtn" 
                        className="processEntryBtn"
                        type="button"
                        onClick="processEntry('income', 'owed')"
                        >Process
                    </button>
                </div>
                <div className="row">
                    <p id="owed">Please enter your yearly income in the field above.</p>
                </div>
            </div>
        </div>);
    }

}
 
export default TaxCalculator;