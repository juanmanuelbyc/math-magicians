import PropTypes from 'prop-types';

const Display = (props) => {
 const { value } = props;
 return (
   <div className="display">
     <h1>{value}</h1>
   </div>
 );
};

Display.defaultProps = {
 value: 0,
};
Display.propTypes = {
 value: PropTypes.string,
};

export default Display;