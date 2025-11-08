old css 

body{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}
#heading{
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8a2be2;
    margin-bottom: 20px;
}
h1{
    font-size: 50px;
    color: white;
    font-weight: bold;
}
.profiles{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* align-items: center; */
    margin-left: 40px;
    margin-right: 40px;
}
img{
    height: 200px;
    width: 200px;
    border-radius: 10px;
}
.card{
    margin: 15px;
    text-align: center;
    border: 2px solid black;
    border-radius: 10px;
    background-color: rgb(129, 198, 60);
}
button{

    padding: 6px;
    width: 90px;
    border: 0;
    font-weight: bold;
    background-color: rgb(165, 227, 102);
     border-radius: 10px;
}
input{
   padding: 5px; 
   height: 20px;
   width: 220px;
    border-radius: 10px;
}
.numberof{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    /* background-color: rgb(212, 168, 252); */
}

/* yha se apna search profiles ka lagega */


/* Container for the whole GitHub search section */
/* Profile container on the right side */
.prof{
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
}
.github > div:not(.prof) {
  flex: 2;
  display: flex; /* 👈 horizontal layout */
  align-items: center;
  background-color: #f4f4f4; /* 👈 softer neutral background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  gap: 20px; /* 👈 space between image and details */
  margin-top: 20px;
}

/* Profile image */
.github img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0; /* 👈 no bottom margin now */
}

/* Profile details */
.profile-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.profile-details h3 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.profile-details p {
  margin: 0;
  font-size: 16px;
  color: #555;
}

.profile-details a {
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.profile-details a:hover {
  text-decoration: underline;
}