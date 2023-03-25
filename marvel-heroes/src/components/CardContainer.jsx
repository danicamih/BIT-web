// Create container for car components to be shown in grid, 3 in a row.
// You should query the Marvel API to search for characters
// (https://developer.marvel.com/).
// P.S. - Use this URL http://gateway.marvel.com/v1/public/characters?apikey=b8b9aacfa8c40c30f7fa34201fad7d0c&hash=5df84b70c728c08577ec4fba471287e7
// This container should use the component card to render the grid with the cards
// // You should limit result from the API to 20 results displayed in a grid
// The image size may vary, but make sure the grid accommodates any image size and
// displays consistently, still keeping it responsive. Avoid stretching or squeezing the image
// instead scale and align it in the center. No white space should appear on the sides but
// the image can be cropped.

// ● Application should have responsive design for desktop, tablet and phone
http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card';