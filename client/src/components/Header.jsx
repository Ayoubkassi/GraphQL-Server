import logo from './assets/logo.png'

const Header = () => {
  return (
    <div className="navbar bg-dark mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/" >
        <div className="d-flex">
          <img src={logo} className="mr-2" />
          <div>GraphQL Server</div>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
