import { useState } from 'react';
import { category, Category } from '../../constants/platform';

function Filter() {
  const [filter, setFilter] = useState<Category>(category[0]);
  const [toggle, setToggle] = useState<boolean>(false);
  const filterCategory = (cate: Category) => {
    setFilter(cate);
    setToggle(false);
  };

  return (
    <div>
      <div
        className={`select${toggle ? 'open' : ''}`}
        onClick={() => setToggle(!toggle)}
      >
        {/* <img src={arrow} /> */}
      </div>
      {toggle && (
        <div>
          {category.map((cate, index) => (
            <div
              className="select"
              key={index}
              onClick={() => filterCategory(cate)}
            >
              {cate.platform}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
