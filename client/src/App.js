import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Provider } from "react-redux";
import store from "./utils/store";

import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Nav from "./components/Nav/index";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Success from "./pages/Success/Success";
import Footer from "./components/Footer";
import Policies from "./pages/Policies/Policies";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Provider store={store}>
          <Nav />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/success" element={<Success />} />
            <Route path="/policies/:state" element={<Policies />} />
          </Routes>

          <Footer />
        </Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
