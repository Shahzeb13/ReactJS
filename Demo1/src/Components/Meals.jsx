import {useState , useEffect} from 'react';
import axios from 'axios'
import styles from './Meals.module.css'
const Meals  = () => {
    const [products, setProducts] = useState([]);
    console.log("Current state:", products);



    useEffect( () => {

        const fetchData = async() => {
            const rawData = await axios.get('https://fakestoreapi.com/products')
            const data = rawData.data;
            console.log(data);
            setProducts(data);
        }
        fetchData();

    } , [])

    return (

      <div className = {styles.container}>
        {products.map(({id , image , title  , description}) => {
            return (
            <div className = {styles.card} key = {id}>
                
                <img src={image} alt="Image" />
                <h3>{title}</h3>
                <p>{description}</p>

            </div>
            )
        })}
      </div>
        
    )
}




export default Meals;