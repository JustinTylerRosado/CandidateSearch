import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Search
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/SavedCandidates"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Potential Candidates
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;