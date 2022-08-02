import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ButtonGroup variant="contained">
        {options.map(name => (
          <Button
            onClick={() => onLeaveFeedback(name)}
            key={name}
            type="button"
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
