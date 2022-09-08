import PropTypes from 'prop-types';

const Display = (props) => {
  const { next, total, operation } = props;

  return (
    <div className="display">
      <h1>{total}</h1>
      <h1>{operation}</h1>
      <h1>{next}</h1>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.any,
};

export default Display;
