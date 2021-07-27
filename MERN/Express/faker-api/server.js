
const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;
// req is short for request
// res is short for response

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User{
    constructor(){
        this.firstname = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
} 
class Company{
    constructor(){
        this.name = faker.name.findName();
        this.address = {
            street: faker.address.streetName(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country(),
        }
    }
}

app.get("/api/user/new", (req, res) => { 
    const users = new User(); 
    res.send(users);
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

app.get("/api/companies/new", (req, res) => {
    const comp = new Company();
    res.json(comp );
});
app.get("/api/companies/user",(req, res) =>{
    const comp = new Company();
    const users = new User();
    res.json({comp,users});
})
 


