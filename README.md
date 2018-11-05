## Project Objectives
* Train with ReactJs and Graphql using apollo

This project was bootstrapped with [Create React App]

## Main Script
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Prerequirements
* create-react-app
* apollo-boost
* react-apollo 
* graphql

## Packages Usages and Descriptions
apollo-boost offers some convenience by bundling several packages you need when working with Apollo Client:

* apollo-client: Where all the magic happens
* apollo-cache-inmemory: Our recommended cache
* apollo-link-http: An Apollo Link for remote data fetching
* apollo-link-error: An Apollo Link for error handling
* apollo-link-state: An Apollo Link for local state management
* graphql-tag: Exports the gql function for your queries & mutations
* react-apollo contains the bindings to use Apollo Client with React.
* graphql contains Facebook’s reference implementation of GraphQL - Apollo Client uses some of its functionality as well.


## Index.js Notes
### Main configuration for Apollo

* Imported all requirements
* Created an httpLink that will connect with ApolloClient, instance of the graphql API, this graphql server will be running in the port 4000.
* Instatiate the Apollo Client with the corresponding httpLink and the instans of the  In Memory Cache.
* Add on the render method a new wrapper with a high order component called ApolloProvider and get client as a prop of it.