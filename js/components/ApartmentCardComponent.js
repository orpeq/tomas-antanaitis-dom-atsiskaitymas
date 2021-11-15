class ApartmentCardComponent{
    static USD_EUR = 0.87;
    
    constructor(props) {
        this.props = props;

        this.init();
    }

    init = () => {
        const { type, owner: { fullname, email, phone}, roomCount, squares, address: {city, country, street, number}, price: { amount, currency}, imgSrc, onDelete} = this.props;

        const finalPrice = currency === '$' ? amount * ApartmentCardComponent.USD_EUR : amount;
        const formatedPrice = Math.round(100 * finalPrice) / 100 + ' €';

        this.htmlElement = document.createElement('article');
        this.htmlElement.className = 'card shadow';
        this.htmlElement.innerHTML = `
        <img src="${imgSrc}" class="card-img-top" / height="300px" width="600px" style="object-fit: cover"/>
        <span class="position-absolute top-50 ms-4 badge badge-secondary bg-success ">${formatedPrice}</span>
        <div class="card-body"> 
        

        <ul>
        <h6><strong>Tipas:</strong> ${type}</h6>
        <li style="list-style:none">
        <h6><strong>Plotas:</strong> ${squares} kv.m</h6>
        </li>
        <li style="list-style:none">
        <h6><strong>Kambariai:</strong> ${roomCount}</h6>
        </li>
        <li style="list-style:none">
        <h6><strong>Pardavėjas:</strong>  ${fullname}</h6>
        </li>
       
        <li style="list-style:none">
        <h6><strong>Tel. nr.</strong>  ${phone}</h6>
        </li>
        <li style="list-style:none">
        <h6><strong>El. paštas</strong>  ${email}</h6>
        </li>
        
        <li style="list-style:none">
        <h6><strong>Adresas</strong>  ${street}-${number}, ${city}, ${country}</h6>
        </li>
        </ul>
        </div>
        `
    }

}