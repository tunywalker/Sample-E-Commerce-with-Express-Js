const products=[
    {id:'12345',name:'telefon1',price:'200',imageUrl:'1.jpg',description:'aciklama'},
    {id:'12335',name:'telefon2',price:'300',imageUrl:'2.jpg',description:'aciklama2'},
    {id:'12245',name:'telefon3',price:'400',imageUrl:'4.jpg',description:'aciklama3'}
];

module.exports=
class Product{
constructor(name,price,imageUrl,description){
this.id= Math.floor((Math.random()*99999)+1).toString();
this.name =name;
this.price=price;
this.imageUrl=imageUrl;
this.description=description;

}
saveProduct(){
    products.push(this)


}
static getAll()
{
    return products
}

static getById(id){
const product = products.find(i=>i.id===id)
return product;

}
static Update(product){
const index= products.findIndex(i=> i.id===product.id)
products[index].name=product.name;
products[index].description=product.description;
products[index].price=product.price;
products[index].imageUrl=product.imageUrl;

}

static DeleteById(id){

const index=products.findIndex(i=>i.id=== id);
products.splice(index,1);

}


}


