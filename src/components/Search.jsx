import React from 'react'
import "../CSS/Search.css"

export const Search = () => {
  return (
    <div className="search_container">
            <span className="search_header">Medical Darpan &gt; Search &gt; FabiFlu Tablet</span>
        <div>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Paracetamol" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        <div className="search_footer">
            <h3>Paracetamol <span>(128 products)</span></h3>
            <button>
                Aceclofanec 
                <i class="fa fa-close"></i>
            </button>
            <button>
                500mg 
                <i class="fa fa-close"></i>
            </button>
            <span className="remove">Remove all</span>
            
        </div>
    </div>
  )
}
