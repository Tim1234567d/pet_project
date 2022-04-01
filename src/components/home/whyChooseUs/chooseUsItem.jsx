const ChooseUsItem = ({chooseUs}) => {
    return(
        <div className="chooseUs__card">
        <div className="chooseUs__img_wrapper">
            <img src={chooseUs.img} alt="123" className="chooseUs__img" />
        </div>
        <h3 className="chooseUs__card_title">{chooseUs.title}</h3>
        <p className="chooseUs__card_des">
             {chooseUs.text}
        </p>
       
    </div>
    ) 
} 

export default ChooseUsItem;