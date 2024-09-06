import './App1.css'
function SignUpPage(){

    return(<>
            
        <>
        <div className="box2">
            <h3 id='txt1'>Signup</h3>
            <form>
                <label>Email</label>
                <br></br>
                <input type="email" className='inpbox'></input> 
                <br></br>
                <label>New Password</label>
                <br></br>
                <input type="password" className='inpbox'></input> 
            </form>
            <button type='submit' className='inpbox' style={{cursor: 'pointer' , padding: '10px' ,fontFamily: 'Arial'}}>Register</button>
        </div>
        
        </>
    )
    </>)

}
export default SignUpPage