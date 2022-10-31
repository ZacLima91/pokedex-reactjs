import { HeaderComponent } from "./style";
import Logo from "../../images/logo-pokedex.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { CSSProperties, Dispatch, useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

export function Header() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
    handleClose();
  };

  const [open, setOpen] = useState(true);
  const [visibility, setVisibility]  = useState<string>("");

  

  const handleClose = () => {
    setOpen(!open);
  };  

  useEffect(() => {
    if (open) {
      setVisibility("hidden");  
    } else {
      setVisibility("visible");
    }
  });


  return (
    <HeaderComponent visible={visibility}>
      <div className="container-logo">
        <Link onClick={handleClose} to="/">
          <img src={Logo} alt="Logo pokedex" />
        </Link>
        <TiThMenu
          className="hamburger"
          onClick={handleClose}
        />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/" onClick={handleClose}>Inicio</Link>
          </li>
          <li>
            <Link to="/create" onClick={handleClose}>Criar</Link>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Busque um pokemon"
            value={search}
          />
        </form>
        <IoMdCloseCircle className="icon-close" onClick={handleClose} />
      </div>
    </HeaderComponent>
  );
}
