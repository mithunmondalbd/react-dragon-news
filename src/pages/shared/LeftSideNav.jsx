import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="m-2">
            <h2 className="text-xl font-bold mb-2">All categories</h2>
            <div>
                {
                    categories.map((category, idx) => <Link className="block font-medium ml-3 mb-2 underline" key={idx}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;