import { Link } from "react-router-dom";

const Header = ({ gu }) => {
  return (
    <header className="Header">
      <h1>
        <Link to="/">
          이창훈의 <span>부산맛집</span> 소개
        </Link>
      </h1>
      <nav>
        <ul className="GuList">
          {gu.map((it) => {
            return (
              <li key={it}>
                <Link to={`/${it}`}>{it}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
