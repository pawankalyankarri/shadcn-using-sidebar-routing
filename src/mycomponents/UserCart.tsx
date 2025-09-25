import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
type ProductsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const UserCart = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [show,setShow] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(products);

  function handleAdd(){

  }

  return (
    <div className="grid grid-cols-3 gap-2">
        
        {products.length === 0 ? (<div className="font-serif text-center">Loading...</div>) : 
      (<>{products.map((item) => {
        return (
          <Card key={item?.id} className=" flex justify-between">
            <CardHeader>
              <CardTitle className="capitalize p-1 font-bold">{item.category}</CardTitle>
              <CardDescription>
                <img src={item.image} alt="" />
              </CardDescription>
              <CardAction>
                <Button onClick={handleAdd}>Add</Button>
                
              </CardAction>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent className="font-serif">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <p>
                <strong>Price :&nbsp;</strong>
                {item.price}
              </p>
            </CardFooter>
          </Card>
        );
      })}</>)}
    </div>
  );
};
export default UserCart;
