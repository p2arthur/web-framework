## Functional requirements

### - User:
      - Needs the ability to store user data
      - Needs to be able to retrieve user data
      - Needs to be able to change user data
      - Needs the ability to notify the rest of the app when some data is changed - Global state
      - Needs to be able to persist data on an outside server
      - Needs to be able to retrieve persisted data from an outside server

#### Steps - Extraction approach:
      1- Build a User as a 'super' class with many methods
      2- Refactor User class to use composition
      3- Refactor User to be a reusable class that can represent any piece of data, not just a User


