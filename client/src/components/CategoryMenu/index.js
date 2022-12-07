import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

// Display the category menu

export default function CategoryMenu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  // The dispatch hook allows us to dispatch the given action to the store
  // In this case the categories are collected for display
  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  // When a category is selected, show the items from it
  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="w-full mx-auto px-6 py-2 flex items-center justify-around md:py-4 bg-pcTan text-stone-800 ">
      <button className="hover:text-pcCoral hover:border-b hover:border-pcCoral"
        onClick={() => {
          handleClick("");
        }}
      >
        All Items
      </button>
      {categories.map((item) => (
        <button className="hover:text-pcCoral hover:border-b hover:border-pcCoral"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>

      ))}
      {!Auth.loggedIn() ? (
        <ul className="hidden md:flex items-center justify-around">
          <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
            <Link to="/login">Login/</Link>
          </li>
          <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      ) : (
        <ul className="hidden md:flex items-center justify-around">
          <li className="hover:text-pcCoral hover:border-b hover:border-pcCoral">
            <Link to="/" onClick={() => Auth.logout()}>Logout</Link>
          </li>


        </ul>
      )}
    </div>
  );
}
