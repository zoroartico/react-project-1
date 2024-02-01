import React, { Component } from 'react';

class TaxCalculator extends Component {
    state = { 
        message : "Please enter your yearly income in the field above."
    }
    handleChange = (event) => {
        this.setState({ income: event.target.value });
    }
    
    //this function takes in two variables from the HTML in the form of the input id and output id.
    processEntry = (income) => 
    {
        let message;
        //declaring a Dollar object for javascript's built-in for number formatting as a currency.
        let Dollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
        //"error" handling in the form of checking that the income value is a float and above 0.
        if (income > 0)
        {
            message = 'You will owe: ' + Dollar.format(this.calculateTax(parseFloat(income)));
        }
        else if (isNaN(income))
        {
            message = 'Please enter a number for your income.';
        }
        else
        {
            message = 'Please enter a number greater than zero.';
        }
        //changing the state message to the local message output variable.
        this.setState({ message });
    };



    //this function serves to take in a numerical value and calculate the tax owed, separating at each bracket.
    calculateTax = income =>
    {
        //declaring two constant arrays, the BRKTS (or brackets) and BRKTS_TAXES (or the taxes for each bracket)
        const BRKTS = [9225, 37450, 90750, 189300, 411500, 413200, 0];
        const BRKT_TAXES = [0.10, 0.15, 0.25, 0.28, 0.33, 0.35, 0.396];
        //declaring the amountOwed and remainder variables for use later in the function.
        let amountOwed = 0, remainder = 0;
        /*
        the for loop iterates through the BRKTS array and pulls apart the income,
        calculates the tax for each bracket and then adds that tax to the amountOwed.
        */
        for (let i in BRKTS)
        {
            remainder = income - BRKTS[i]
            if (remainder < 0 || remainder == income)
            {
                amountOwed += (income * BRKT_TAXES[i]);
                break;
            }
            else
            {
                amountOwed += ((income - remainder) * BRKT_TAXES[i]);
                income = remainder;
            }
        }
        //returns the amount of tax owed.
        return amountOwed;
    };


    render() { 
        return (
        <div>
            <h1>Tax Calculator</h1>
            <div className="bubble">
                <div className="row">
                    <label>Yearly income: </label><br/>
                    <input type="text" id="income" name="income" onChange={this.handleChange}></input>
                </div>

                <div className="row">
                    <button 
                        id="processEntryBtn" 
                        className="processEntryBtn"
                        type="button"
                        onClick={() => this.processEntry(this.state.income)}
                        >Process
                    </button>
                </div>
                <div className="row">
                    <p id="owed">{ this.state.message }</p>
                </div>
            </div>
        </div>);
    }

}
 
export default TaxCalculator;