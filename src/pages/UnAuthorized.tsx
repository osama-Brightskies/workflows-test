import { Link } from 'react-router-dom';

const UnAuthorized = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Unauthorized Access</h1>
      <p>Sorry, you don't have permission to access this page.</p>
      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </div>
  );
};

export default UnAuthorized;
