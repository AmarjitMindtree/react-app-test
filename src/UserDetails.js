import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: blue;
  color: white;
`;

function UserDetails({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleNext = () => {
    // Store user details in localStorage
    localStorage.setItem('userDetails', JSON.stringify({ name, email, gender, dob, phone }));
    // Navigate to DateComponent page
    navigate('/date-component');
  };


  return (
    <Form onSubmit={handleNext}>
      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Label htmlFor="gender">Gender:</Label>
      <Select
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>

      <Label htmlFor="dob">Date of Birth:</Label>
      <Input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />

      <Label htmlFor="phone">Phone Number:</Label>
      <Input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <Button type="submit">Next</Button>
    </Form>
  );
}

export default UserDetails;
