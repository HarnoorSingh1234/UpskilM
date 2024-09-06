import './App1.css'

function LoginPage(){
    return(
        <>
        <div className="box2">
            <h3 id='txt1'>Login</h3>
            <form>
                <label>Email</label>
                <br></br>
                <input type="email" className='inpbox'></input> 
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="password" className='inpbox'></input> 
            </form>
            <button type='submit' className='inpbox' style={{cursor: 'pointer' , padding: '10px' ,fontFamily: 'Arial'}}>submit</button>
        </div>
        
        </>
    )
}
export default LoginPage