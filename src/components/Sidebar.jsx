import React from 'react'
import "../CSS/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar_container">
        <div className="category">
            <h3>Related Category</h3>
            <ul>
                <li>Paracetamol Tablets</li>
                <li>Paracetamol Syrup</li>
                <li>Paracetamol Powder</li>
                 <li className="selected">Aceclofanec  <i class="fa fa-close"></i></li>
                 <li>Magaladrate Simethicone Oral Suspension</li>
                 <li>Mefenamic Paracetamol Syrup</li>
            </ul>
        </div>
        <div className="category">
            <h3>Related Brands</h3>
            <ul>
                <li>Cipmol Paracetamol </li>
                <li>Panda Paracetamol Tablets</li>
                <li>Combiflam</li>
                 <li>Crocin Tablets</li>
                 <li>Calpol Paracetamol Tablets</li>
                 <li>Sumo Tablet</li>
            </ul>
        </div>
        <div className="category">
            <h3>Business Type</h3>
            <ul>
                <li>WholeSaler </li>
                <li>Manufacturers</li>
                <li>Retailer</li>
                 <li>Exporter</li>  
            </ul>
        </div>
        <div className="category">
            <h3>Strength</h3>
            <ul>
                <li className="selected">500mg  <i class="fa fa-close"></i></li>
                <li>650mg</li>
            </ul>
        </div>
        <div className="category">
            <h3>Manufacturer</h3>
            <ul>
                <li>Intas Pharmaceuticals Ltd </li>
                <li>Alkam Laboratries Ltd</li>
            </ul>
        </div>
        <div className="category">
            <h3>Prescription/Non prescription</h3>
            <ul>
                <li>Intas Pharmaceuticals Ltd </li>
                <li>Alkam Laboratries Ltd</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar