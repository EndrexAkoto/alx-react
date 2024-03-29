import React from "react";
import PropTypes from "prop-types";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowColor = {
    backgroundColor: isHeader ? "#deb5b545" : "#f5f5f5ab"
  };

  if (isHeader === true) {
    if (!textSecondCell) {
      return (
        <tr style={rowColor}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={rowColor}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={rowColor}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
