/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import SocialWrapper from '../components/SocialWrapper';
import submitHandler from '../utils/contactFormHandler';

const Wrapper = styled.div`
  margin: auto;
  padding-bottom: 3em;
  max-width: 40em;
`;

const Form = styled.form`
  position: relative;
  margin-top: 2em;

  font-family: inherit;
`;

const NameEmail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 0 1.5em;
  margin-bottom: 1.5em;

  color: inherit;
  font-family: inherit;

  background-color: ${(props) => props.theme.colors.secondary}11;

  border: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.secondary}11;
`;

const Label = styled.label`
  font-size: 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.5em;
  margin-bottom: 2em;

  color: inherit;
  font-family: inherit;

  background-color: ${(props) => props.theme.colors.secondary}11;

  border: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.secondary}11;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: -35px;

  height: 46px;
  min-width: 25%;
  font-family: inherit;

  border: none;
  background: ${(props) => props.theme.colors.red};
  border-bottom: 3px solid rgba(0, 0, 0, 0.15);
  color: white;

  &:active {
    border-bottom: none;
    bottom: -37px;
  }
`;

const Projects = () => {
  return (
    <Section
      title="contact"
      subtitle="If you are interested in a collaboration, don't hesitate to send me an email."
    >
      <Wrapper>
        <SocialWrapper style={{ maxWidth: '15em', margin: 'auto' }} />
        <Form
          method="POST"
          action="https://getform.io/f/abda866d-2a7e-4328-b791-4b03b95aec5d"
          onSubmit={submitHandler}
        >
          <NameEmail>
            <Label>
              name
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </Label>

            <Label>
              email
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </Label>
          </NameEmail>
          <Label>
            message
            <TextArea
              id="message"
              name="message"
              placeholder="message"
              rows="15"
              required
            />
          </Label>
          <Button type="submit">SEND</Button>
        </Form>
      </Wrapper>
    </Section>
  );
};

export default Projects;
