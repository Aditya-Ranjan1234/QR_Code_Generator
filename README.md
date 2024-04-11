# QR Code Generator with Text Input

This is a simple QR Code Generator web application built with Node.js, Express.js, and qr-image library. It allows users to input text, which then generates a corresponding QR code image.

## Features

- Generates QR codes from user input text
- Simple and easy-to-use web interface
- Utilizes Express.js for routing and server setup
- Parses incoming request bodies using body-parser middleware
- Uses qr-image library to generate QR code images

## Setup

### Prerequisites

- Node.js installed on your system

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Aditya-Ranjan1234/QR_Code_Generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd QR_Code_Generator
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   nodemon index.js
   ```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000)

3. Enter the text you want to convert into a QR code.

4. Click the "Generate QR Code" button.

5. Your QR code image will be displayed on the screen.

## Dependencies

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware to parse incoming request bodies.
- [qr-image](https://www.npmjs.com/package/qr-image) - Library to generate QR codes in Node.js.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need for a simple QR code generator with text input.
