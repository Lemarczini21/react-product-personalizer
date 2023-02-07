import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = (props) => {
  Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    basePrice: PropTypes.number,
    colors: PropTypes.array,
    sizes: PropTypes.array,
  };

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title + 'shirt'}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice} $</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={shortid()}>
                  <button
                    onClick={() => {
                      setCurrentSize(size.name);
                    }}
                    className={clsx(size.name === currentSize && styles.active)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <li key={color}>
                  <button
                    onClick={() => {
                      setCurrentColor(color);
                    }}
                    type='button'
                    className={clsx(
                      prepareColorClassName(color),
                      color === currentColor && styles.active
                    )}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
