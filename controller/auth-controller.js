// Function to handle the root route
exports.getHome = (req, res) => {
      res.send({
          name: "Arshaan",
          Developer: true,
          Backend: "Developer",
      });
  };
  
  // Function to handle the /route route
  exports.getRoute = (req, res) => {
      res.send({
          Id: 100,
          name: "Arshaan",
          age: 20,
          email: "arshaan@gmail.com",
          isActive: true,
      });
  };
  
  // Function to handle the /api route
  exports.getApi = (req, res) => {
      res.send({
          id: 101,
          name: "Arshaan",
          age: 20,
          email: "arshaan@example.com",
          isActive: true,
          address: {
              street: "123 Main St",
              city: "New York",
              state: "NY",
              postalCode: "10001",
          },
          phoneNumbers: [
              { type: "home", number: "555-555-5555" },
              { type: "work", number: "555-555-1234" },
          ],
          hobbies: ["Coding", "gaming", "traveling"],
          education: {
              degree: "Bachelor of Science",
              major: "Computer Science",
              graduationYear: 2025,
          },
          employment: {
              company: "Tech Solutions Inc.",
              position: "Software Developer",
              yearsExperience: 3,
          },
      });
  };
  
  // Function to handle the /author route
  exports.getAuthor = (req, res) => {
      res.send({
          id: 101,
          name: "Arshaan",
          age: 20,
          email: "arshaan@example.com",
          isActive: true,
          address: {
              street: "123 Main St",
              city: "New York",
              state: "NY",
              postalCode: "10001",
          },
      });
  };
  
  // Function to handle the /register route
  exports.getRegister = (req, res) => {
      res.status(200).send("Welcome to the registration page");
  };
  
  // Function to handle the /twitter route
  exports.getTwitter = (req, res) => {
      res.send('<h1>Please Login Data</h1>');
  };
  
  // Function to handle the /contact POST route
  exports.postContact = (req, res) => {
      res.send("Post Received");
      console.log("Post data sent to console");
  };
  
  // Function for the /secret route
  exports.getSecret = (req, res, next) => {
      res.send('Display Data');
      console.log('Accessing the secret section ...');
      next(); // Pass control to the next handler
  };
  
  exports.handleSecretNext = (req, res) => {
      console.log("This is the secret section");
  };
  
  exports.getArshaan = (req , res) =>{
      res.send('<h1>This is what Arshaan was accepted</h1>');
  }