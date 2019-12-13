import React from 'react';


//Done By Himanshu

function TransactionHistoryComponent(props){
    return (
      <React.Fragment>
{console.log(props)} 
{/* <h5>{props.res.senderAccNo}</h5>
<h5>{props.res.recieverAccNo}</h5> */}
<ul>
<li><h6>Send To: {props.res.recieverAccNo} ||  Amount Debited: {props.res.amount} rupees</h6></li>
</ul>
      </React.Fragment>
    )
}

export default TransactionHistoryComponent