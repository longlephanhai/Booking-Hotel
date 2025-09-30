const SearchPopup = () => {
  return (
    <div className="modal fade bs-example-modal-lg search-bg popup1" tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content search-popup">
          <div className="text-center">
            <a href="#" className="close2" data-dismiss="modal" aria-label="Close">× close</a>
          </div>
          <div className="row search-outer">
            <div className="col-md-11"><input type="text" placeholder="Search for products..." /></div>
            <div className="col-md-1 text-right"><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPopup;