// Create search bar component and add button 'go" in the same line
// Use this component tosearch for characters via Marvel API. http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b8b9aacfa8c40c30f7fa34201fad7d0c&hash=5df84b70c728c08577ec4fba471287e7 Show result in cards.
import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import './Search.css';

const Search = (props) => {
    return (
        <div className="search">
            <Form inline>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Go</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </div>
    );
}


