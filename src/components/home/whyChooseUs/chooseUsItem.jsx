const ChooseUsItem = ({chooseUs}) => {
    return(
        <div class="benefits__card">
        <div class="benefits__card_pic">
            <img src={chooseUs.img} alt="123" class="benefits__card_thumb" />
        </div>
        <h3 class="benefits__card-title">{chooseUs.title}</h3>
        <p class="benefits__card-des">
             {chooseUs.text}
        </p>
       
    </div>
    )
}

export default ChooseUsItem;