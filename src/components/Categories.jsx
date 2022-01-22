import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, menuCat, LoadMore } from "../store/user/action";
import sty from "./Cat.module.css";

const Categories = () => {
  const cats = useSelector((state) => state.cats.search);
  const menu = useSelector((state) => state.cats.menu);

  const dispatch = useDispatch();
  const [categories, setCategories] = useState(":");

  useEffect(() => {
    dispatch(search(categories));
  }, [dispatch, categories]);

  useEffect(() => {
    dispatch(menuCat());
  }, []);

  function LoadMoreCats() {
    dispatch(LoadMore(categories));
  }

  return (
    <div>
      <div className={sty.head}>
        <ul className={sty.menu}>
          {menu.map((element, index) => {
            return (
              <li
                key={index}
                className={sty.textMenu}
                onClick={() => {
                  setCategories("=" + element.id);
                }}
              >
                {element.name}
              </li>
            );
          })}
          <button onClick={LoadMoreCats}>LoadMore</button>
        </ul>
      </div>
      <div className={sty.img}>
        {cats.map((element, index) => (
          <img
            key={index}
            alt=""
            src={element.url}
            width="250px"
            height="250px"
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
