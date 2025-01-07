import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.scss';
import PageHeaderContent from "../../components/navBar/pageHeader";
import {BsInfoCircleFill} from 'react-icons/bs';
import calculator1 from "../../images/calculator1.png";
import calculator2 from "../../images/calculator2.png";
import clickscounter from "../../images/clickscounter.png";
import portfolio from "../../images/portfolio.png";
import todo from "../../images/todo.png";
import restaurant from "../../images/restaurant.png";
import library from "../../images/library.png"
import ecommerce from "../../images/e-commerce.png"

const portfolioData=[

{
    id: 2,
    name: "simple calculator",
    image: calculator1,
    link: 'https://github.com/mariodss/simple-calculator/tree/master',

},
{

    id: 2,
    name: "advanced calculator",
    image: calculator2,
    link: 'https://github.com/mariodss/advanced-calculator/tree/master'

},
{
    id:2,
    name: "clickscounter",
    image: clickscounter,
    link: 'https://github.com/mariodss/Clicks-Counter/tree/master'

},
{
    id:2,
    name: "portfolio2024",
    image: portfolio,
    link: 'https://github.com/mariodss/portfolio2024/tree/master'

},
{
    id:3,
    name:"Mario's Restaurant",
    image: restaurant,
    link: 'https://github.com/mariodss/restaurant-website/tree/master'

},
{
    id:2,
    name:"todoapp",
    image:todo,
    link: 'https://github.com/mariodss/To-do-App/tree/master'

},
{
    id: 4,
    name: "Library Project",
    image:library,
    link:'https://github.com/mariodss/WebAppLibrary/tree/master'
},
{
    id:5,
    name:"E-commerce Website",
    image:ecommerce,
    link:'https://github.com/lp362/Group-6'

}

]


const filterData = [

    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'React Projects (Front-end)'
    },
    {
        filterId: 3,
        label: 'PHP Projects (Front-end)'
    },
    {

        filterId: 4,
        label: 'Django Projects (Back-end)'
    },
    {
        filterId: 5,
        label: 'Full-Stack Projects'


    },

]


const Portfolio=()=> {

    const [filteredvalue, setFilterValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);


    function handleFilter(currentID){

        setFilterValue(currentID);

    }

    function handleHover(index){

        setHoveredValue(index);
    }

    console.log("==================================================");
    console.log(hoveredValue);
    console.log("==================================================");


    const filteredItems = filteredvalue === 1 ? portfolioData :
    portfolioData.filter(item=>item.id === filteredvalue)

    console.log(filteredItems);

    const handleVisit = (link)=> {

        if (link) {
            window.location.href = link;
        }

    }



    return(
        
        <section id="portfolio" className="portfolio">

        <PageHeaderContent
        headerText = "Porfolio"
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className="portfolio_content">
            <ul className="portfolio_content_filter">

                {
                    filterData.map(item=>(

                        <li className={item.filterId === filteredvalue ? 'active': ''} onClick= {()=> handleFilter(item.filterId)} key={item.filterId}>

                            {
                                item.label
                            }


                        </li>


                    ))

                }


            </ul>
            <div className="portfolio_content_cards">

                {
                    filteredItems.map((item, index)=>(

                        <div className="portfolio_content_cards_item" key={`cardItems${item.name.trim()}`} 
                        onMouseEnter={()=>handleHover(index)} onMouseLeave={()=>handleHover(null)}>

                            <div className="portfolio_content_cards_item_img-wrapper">
                                <a>
                                    <img alt="projects" src={item.image}/>

                                </a>

                            </div>

                            <div className="overlay">
                                {index === hoveredValue && (
                                    <div>
                                        <p>{item.name}</p>
                                        <button onClick={() => handleVisit(item.link)}>Visit</button>

                                    </div>


                                )}



                            </div>

                        </div>

                    )
                 )

                }




            </div>



        </div>



    </section>
    );

}

export default Portfolio;