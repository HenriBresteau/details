import { EllipsisVertical, Save, Share, SquarePen, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LottieSword from "./LottieSword.jsx";

const Card = ({ src, title, children, badge }) => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState(title);
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (menuOpen && ref.current && !ref.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [menuOpen]);
    const handleChange = (e) => {
        setData(e.target.value);
    };
    const hanldeSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
    };

    return (
        <div className="card">
            <div className="card__image">
                <img src={src} alt={title} />
            </div>
            <div className="card__content">
                <div className="card__header">
                    {!edit ? (
                        <h2 className="card__title">{data}</h2>
                    ) : (
                        <form
                            onSubmit={(e) => hanldeSubmit(e)}
                            className="form"
                        >
                            <input
                                className="form__input"
                                value={data}
                                onChange={(e) => handleChange(e)}
                            />
                            <button type="submit" className="form__btn">
                                <Save size={16} />
                            </button>
                        </form>
                    )}
                    {badge && (
                        <span className={`card__badge card__badge--${badge}`}>
                            {badge}
                        </span>
                    )}
                </div>
                <p className="card__descprition">{children}</p>
            </div>
            <div className="card__footer">
                <button
                    className="card__btn"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <LottieSword isHovered={isHovered} />
                    Start challenge
                </button>
                <button
                    className="card__btn card__btn--more"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <EllipsisVertical />
                </button>
                {menuOpen ? (
                    <div className="menu" ref={ref}>
                        <button
                            className="menu__btn"
                            onClick={() => setEdit(!edit)}
                        >
                            <SquarePen size={16} />
                            Edit Challange
                        </button>
                        <button className="menu__btn">
                            <Share size={16} />
                            Start Challange
                        </button>{" "}
                        <button className="menu__btn menu__btn--delete ">
                            <Trash size={16} />
                            Delete
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Card;
