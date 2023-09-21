import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
    
     <div className=' card_container'>

            <div className='card'>
               <div className='card-body'>
                <h6>Total Accounts receivable</h6>
                <h3 style={{color:'blue'}}>$6,621,280</h3>
               </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <h6 >Total Accounts Payable</h6>
                <h3 style={{color:'red'}}>$1,630,270</h3>
              </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <h6>Equality Ratio</h6>
                <h2>75.36%</h2>
                </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <h6>  Dept Equality </h6>
                <h2>1.10%</h2>
                </div>
            </div>

            <div className='card'>
            <div className='card-body' >
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSPlIPpk2HefGIHNbYMqod-S_i4C6EJZyFibtRVZx&s'
               />
                </div>
            </div>

    </div>

    <div className='card_container'>

             <div className='card'>
               <div className='card-body'>
                <h6>  current ratio </h6>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87AAIaKrRmvEdKqYw0d4ghbPCBhcSv59ewQ&usqp=CAU'/>
                </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <h6>  DSI </h6>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsM3Vgra3uGsw38UFnsWbSO-I78aTVYDfdg&usqp=CAU'/>
                </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <h6>  DSO </h6>
                <img src='https://www.tutorialspoint.com/advanced_excel_charts/images/change_colors.jpg'/>
                </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <h6>  DPO </h6>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsM3Vgra3uGsw38UFnsWbSO-I78aTVYDfdg&usqp=CAU'/>
                </div>
            </div>

            

    </div>

    <div className='card_container'>

    <div className='card'>
               <div className='card-body'>
                <h6>  net working capital  vs cross working capital </h6>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkREk4vYOIjqs2mM-KqoJYgrTK3hW7kA1Dw&usqp=CAU'
                width='500px'                />
                </div>
            </div>

            <div className='card'>
               <div className='card-body'>
                <h6>  Profit and loss summary </h6>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmO8IR_P9OC_I2GaaFDwGfY_k8sDKnh_X6Rw&usqp=CAU'/>
                </div>
            </div>

    </div>
    </>
      
  );
}

export default App;
