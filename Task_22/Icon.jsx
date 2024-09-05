import './App.css'

export const Item_Box = ({text1 , img_url}) => {
    return(
        
            <div className="box1">
                <img className="img1" src={img_url}></img>
                <p className="txt1">{text1}</p>
            </div>
        
    )


}