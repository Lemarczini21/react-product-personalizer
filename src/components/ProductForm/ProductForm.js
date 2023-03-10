import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import { PropTypes } from 'prop-types';

const ProductForm = (props) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Summary: ', props.cartSummary);
        }}
      >
        <OptionSize
          sizes={props.sizes}
          setCurrentSize={props.setCurrentSize}
          setCurrentPrice={props.setCurrentPrice}
          currentSize={props.currentSize}
        />
        <OptionColor
          colors={props.colors}
          currentColor={props.currentColor}
          setCurrentColor={props.setCurrentColor}
        />
        <div>
          <Button className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </div>
      </form>
    </div>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  //size: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  cartSummary: PropTypes.object.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductForm;
