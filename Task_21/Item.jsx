import './App.css'

function ItemCard({name , src , data}){
    return(
        <>
            <div className="item_box">
                <img src={src} className="img1"></img>
                <h3 className="txt1">{name}</h3>
                <p className="txt2">{data}</p>
            </div>
        
        </>
    )

}
export default ItemCard