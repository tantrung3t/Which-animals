import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchForm() {
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataSubmit = new FormData(event.currentTarget);
        history.push('/search/' + dataSubmit.get('search'));
    }


    return (

        <div className="header__search">
            <form className="header__search-form" onSubmit={handleSubmit}>
                <i className="ti-search header__search-icon"></i>
                <input
                    id='search'
                    name='search'
                    className="header__search-input ml-2"
                    tp="text"
                    placeholder="Nhập tên con vât muốn tìm"
                />
                <button className="btn-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

            </form>
        </div>
    );
}
