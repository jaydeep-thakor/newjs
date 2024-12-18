use('employeesData');

db.getCollection('employees').insertMany(

    [
        {
          "name": "John Doe",
          "age": 30,
          "dob": "1994-12-14",
          "location": "New York, USA"
        },
        {
          "name": "Jane Smith",
          "age": 28,
          "dob": "1996-03-21",
          "location": "London, UK"
        },
        {
          "name": "Aarav Patel",
          "age": 25,
          "dob": "1999-07-15",
          "location": "Mumbai, India"
        },
        {
          "name": "Liam Wong",
          "age": 32,
          "dob": "1992-11-08",
          "location": "Toronto, Canada"
        },
        {
          "name": "Sophia Garcia",
          "age": 27,
          "dob": "1997-05-19",
          "location": "Barcelona, Spain"
        }
      ]
      

);

