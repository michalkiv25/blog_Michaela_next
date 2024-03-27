import React, { useState } from "react";
import { useRouter } from 'next/router';



function SearchWidget() {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const itemsToSearch = ["ים", "אקזוטיים", "חופים","חול לבן","שמש","חם","קיץ", "בריכה","לשחות"]; 
  const itemsToSearchCity = ["ערים", "מגדלים","גורדי שחקים", "אוכל", "מסעדות","שופינג", "קניון", "יוקרה" ];

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      if (searchTerm != null) {
        const searchResultItems = itemsToSearch.filter(item => item.includes(searchTerm));
        const searchResultCities = itemsToSearchCity.filter(city => city.includes(searchTerm));
        if (searchResultItems.length > 0) {
          router.push('/blog-grid');
        } else if (searchResultCities.length > 0) {
          router.push('/destination');
        } else {
          return;
        }
      }
    };
  
  return (
    <div className="blog-widget">
      <div className="sidebar-search">
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
            <button type="submit">
              <i className="bx bx-search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchWidget;