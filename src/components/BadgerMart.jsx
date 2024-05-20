import { useEffect, useState } from "react"
import BadgerSaleItem from "./BadgerSaleItem";
import { Col, Container, Row } from "react-bootstrap";

export default function BadgerMart(props) {
    const [featuredItem, setFeaturedItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [saleItems, setSaleItems] = useState([]);

    useEffect(() => {
        fetch("https://cs571.org/api/s23/hw4/students", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSaleItems(data);
                const featured = data.find(item => item.featured);
                setFeaturedItem(featured); 
                setIsLoading(false);

            })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <div>
        <h1>Badger Mart</h1>
        <p>Welcome to our small-town mini mart located in Madison, WI!</p>
        <p>Today's featured item is {featuredItem.name} for ${featuredItem.price}!</p>

        <Container>
            <Row>
                {
                    saleItems.map(saleItem => {
                        return <Col key={saleItem.name} xs={12} md={6} lg={4} xl={3}>
                            <BadgerSaleItem
                                name={saleItem.name}
                                description={saleItem.description}
                                price={saleItem.price}
                                featured={saleItem.featured}
                            />
                        </Col>
                    })
                }
            </Row>
        </Container>
    </div>
}