import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <button>
        <Link className="nav-home" to="/">
          Home
        </Link>
      </button>
      <button>
        <Link className="nav-list" to="/employees">
          Employee List
        </Link>
      </button>

      <button>
        <Link className="nav-admin" to="/admin">
          Admin
        </Link>
      </button>
      {/* Show Either logout or login based on auth context. DO NOT show both */}

      <button>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};
