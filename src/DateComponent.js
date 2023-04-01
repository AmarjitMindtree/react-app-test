import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const InputLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #0066cc;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ResultContainer = styled.div`
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({ error }) => (error ? "red" : "inherit")};
`;

const DateComponent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sundays, setSundays] = useState(0);
  const [endDateError, setEndDateError] = useState("");


  const handleCalculate = (e) => {
    e.preventDefault();

    if (moment(endDate).isBefore(moment(startDate))) {
      setEndDateError("End date must be greater than or equal to start date.");
      setSundays(0);
    } else {
      // Calculate number of Sundays between start and end date
      setEndDateError("");
      let sundayCount = 0;
      let date = moment(startDate);
      while (date.isSameOrBefore(moment(endDate))) {
        if (date.day() === 0) {
          sundayCount++;
        }
        // adding 7 days to save time
        sundayCount > 0 ? date.add(7, 'day') : date.add(1, 'day');
      }
      setSundays(sundayCount);
    }

  };

  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  return (

    <Container>
      <h1>Date Component</h1>
      <form onSubmit={handleCalculate}>
        <InputContainer>
          <InputLabel>Start Date:</InputLabel>
          <InputField
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>End Date:</InputLabel>
          <InputField
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
          {endDateError && (
            <ResultContainer error>{endDateError}</ResultContainer>
          )}
        </InputContainer>
        <Button type="submit">Submit</Button>
      </form>
      {sundays !== 0 && (
        <ResultContainer>
         There are {sundays} Sundays between {startDate} and {endDate}
        </ResultContainer>
      )}
      { sundays !== 0 &&  userDetails && (
        <ResultContainer>
          User Details:<br />
          Name: {userDetails.name}<br />
          Email: {userDetails.email}<br />
          Gender: {userDetails.gender}<br />
          DOB: {userDetails.dob}<br />
          Phone: {userDetails.phone}<br />
        </ResultContainer>
      )}
    </Container>
  )
};

export default DateComponent;
