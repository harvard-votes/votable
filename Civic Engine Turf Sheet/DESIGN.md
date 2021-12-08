# Implementing Auth

Authentication was a key component of developing our web app as it was an important feature to ensure that only users with permissions or proper credentials could view something like student data. To carry out authentication we used google firebase and different routing procedures to have a proper login/registration/sign up process in addition to a method to reset the password in case some information was forgotten.

This entire process began by first creating a project in google firebase. After going through the process of registering our app on firebase we implemented a firebaseConfig object to help us later to initialize our web app and connect it with firebase in order use features like the realtime database and the authentication to store user data. After registering our project we went forward with using facebooks react boiler plate to create a baseline react appplication for us. After this we developed a sign in function to let us sign in with google using firebase.js.

Authentication used several components like navbar, navlink, layout, and divider with text to help us order the application with reoccuring items. In addition to that we implemented several other pages. For forgot password, we utilized auth from firebase AuthContext and the forgotPassword(email) function to email the user a reset password link. For the login page, we created methods to handle submit fields using the email or password otherwise submitting a catch error. The register page used several read methods to gather data from the user and read it to the firebase realtime database. Overall, implementing authentication was a key part of designing the application from the users end.

# Implementing Turf Sheet

The turf sheet was made using React JS and Firebase. My react components included Contact.js, Footer.js, Navbar.js, and Table.js, as it was most intuitive to split the program into these specific components. With these components, I could combine them to create the pages, which were About.js and EditContact.js. They would then all be rendered by App.js. The single page application provides for a faster experience.

The Navbar is mobile responsive, allowing the user to view the turf sheet on mobile without having to mess up the formatting of the Navbar.

Upon editing a contact, I have to pass in the contact as a state. That way, the edit contact page knows which contact to edit and the contact's existing details.

On the edit contact page, most fields are text inputs, but Contact Status, PTE Status, Registration Status, and Stage of Voting Process are drop downs. Because these fields only have a few options, turning them into drop downs keeps consistency within these fields.